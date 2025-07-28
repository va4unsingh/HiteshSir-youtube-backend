import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError.js";

// Helper function to properly extract public_id from Cloudinary URL
const extractPublicId = (cloudinaryUrl) => {
  try {
    // Example: https://res.cloudinary.com/cloud-name/image/upload/v1234567890/folder/subfolder/image.jpg
    const parts = cloudinaryUrl.split("/");
    const uploadIndex = parts.findIndex((part) => part === "upload");

    if (uploadIndex === -1) return null;

    // Get everything after 'upload'
    let pathParts = parts.slice(uploadIndex + 1);

    // Remove version if present (v1234567890)
    if (pathParts[0] && /^v\d+$/.test(pathParts[0])) {
      pathParts = pathParts.slice(1);
    }

    // Join all parts and remove file extension
    const fullPath = pathParts.join("/");
    const publicId = fullPath.replace(/\.[^/.]+$/, "");

    return publicId;
  } catch (error) {
    console.error("Error extracting publicId:", error);
    return null;
  }
};

// Delete image from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === "ok") {
      console.log(`Successfully deleted image: ${publicId}`);
      return result;
    } else {
      console.log(`Failed to delete image: ${publicId}`, result);

      if (result.result === "not found") {
        console.log("Image already deleted or doesn't exist");
        return result;
      }
      throw new ApiError(500, `Cloudinary deletion failed: ${result.result}`);
    }
  } catch (error) {
    console.error("Error in deleteFromCloudinary:", error);
    throw new ApiError(500, "Error in deleteFromCloudinary");
  }
};

export { extractPublicId, deleteFromCloudinary };
