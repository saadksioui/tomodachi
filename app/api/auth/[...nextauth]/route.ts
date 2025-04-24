import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connection from '@/lib/db';
import User from '@/models/User';



const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        await connection();

        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          image: user.profile_picture,
          bio: user.bio
        };
      }


    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      await connection();
      if (account?.provider === "google") {
        const user = await User.findOne({ email: profile?.email });
        if (!user) {
          await User.create({
            username: profile?.name,
            email: profile?.email,
          });
        }
        return true;
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    }
  },
  pages: {
    signIn: "/sign-in",
 },
 secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST };