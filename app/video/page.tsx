"use client";
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {

  return (
    <>
        <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
              type: 'auto',
              source: true
          }} alt={''} />
        <CldUploadButton uploadPreset="dejy4kq2" />

        <video width="320" height="240" controls preload="none">
            <source src="https://res.cloudinary.com/da0wykyjc/video/upload/v1724681793/pcf0nyjqsperi0rlck9f.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </>
  );
}