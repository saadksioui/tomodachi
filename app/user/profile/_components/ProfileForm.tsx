"use client"
import { getUser } from "@/app/_data/user"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

const ProfileForm = ({ currentUser }: any) => {
  const [username, setUsername] = useState(currentUser.username)
  const [bio, setBio] = useState(currentUser.bio)
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState(currentUser.profile_picture || "")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    // Cleanup the object URL when the component unmounts or when previewImage changes
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewImage(objectUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("bio", bio);
    if (profilePicture) {
      formData.append("profile_picture", profilePicture);
    }

    try {
      const res = await axios.put(`/api/auth/user/${currentUser._id}`, formData);

      if (res.status === 200) {
        setSuccess("Profile updated successfully!");
        setError(null);
      } else {
        setError("Something went wrong. Please try again.");
        setSuccess(null);
      }
    } catch (error: any) {
      console.error(error);
      setError("Error updating profile. Please try again.");
      setSuccess(null);
    }
  };

  return (
    <Card className="w-[450px] border-none shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid w-full items-center gap-4">
            {previewImage && (
              <img
                src={`/${previewImage}`}
                alt="Profile Picture Preview"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
            )}

            <div className="flex flex-col space-y-3">
              <Label htmlFor="profile_picture">Profile Picture</Label>
              <Input
                id="profile_picture"
                type="file"
                name="profile_picture"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={currentUser.email}
                disabled
              />
            </div>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}

          <Button type="submit" className="w-full mt-6">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
