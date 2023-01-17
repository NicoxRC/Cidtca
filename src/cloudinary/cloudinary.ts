import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";

const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

export const uploadImage = async (filePath: any) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "folder",
  });
};
