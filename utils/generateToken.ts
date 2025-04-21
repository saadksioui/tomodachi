import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({id}, process.env.SECRET as string, {
    expiresIn: "24h",
  })
}

export default generateToken