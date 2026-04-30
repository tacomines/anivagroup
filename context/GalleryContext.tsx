"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* ✅ TYPES */
type GalleryContextType = {
  images: string[];
  currentIndex: number;
  activeImage: string | null;

  openGallery: (imgs: string[], index: number) => void;
  closeGallery: () => void;
  next: () => void;
  prev: () => void;
};

/* ✅ CONTEXT */
const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

/* ✅ PROVIDER */
export const GalleryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const activeImage =
    images.length > 0 ? images[currentIndex] : null;

  /* ✅ OPEN */
  const openGallery = (imgs: string[], index: number) => {
    if (!imgs || imgs.length === 0) return;

    setImages(imgs);
    setCurrentIndex(index);
  };

  /* ✅ CLOSE */
  const closeGallery = () => {
    setImages([]);
    setCurrentIndex(0);
  };

  /* ✅ NEXT */
  const next = () => {
    if (images.length === 0) return;

    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  /* ✅ PREV */
  const prev = () => {
    if (images.length === 0) return;

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        currentIndex,
        activeImage,
        openGallery,
        closeGallery,
        next,
        prev,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

/* ✅ HOOK */
export const useGallery = () => {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error(
      "useGallery must be used inside GalleryProvider"
    );
  }

  return context;
};