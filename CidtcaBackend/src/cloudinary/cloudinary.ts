import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import store from '../config/index';

cloudinary.config({
  cloud_name: store.CLOUD_NAME,
  api_key: store.API_KEY,
  api_secret: store.API_SECRET,
  secure: true,
});

export const uploadImage = async (
  filePath: string
): Promise<UploadApiResponse> => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'folder',
  });
};
