"use client";

import { useRef } from "react";
import styles from "./GalleryModal.module.css";
import { useGallery } from "@/context/GalleryContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GalleryModal() {
  const { activeImage, images, closeGallery, next, prev } = useGallery();

  const startX = useRef(0);

  if (!activeImage) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 60) prev();
    if (diff < -60) next();
  };

  return (
    <div className={styles.modal} onClick={closeGallery}>
      
      {/* CONTENT WRAPPER */}
      <div
        className={styles.wrapper}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* IMAGE */}
        <img src={activeImage} className={styles.modalImg} alt="Project" />

        {/* NAVIGATION */}
        {images.length > 1 && (
          <>
            <button className={`${styles.nav} ${styles.prev}`} onClick={prev}>
              <FaChevronLeft />
            </button>

            <button className={`${styles.nav} ${styles.next}`} onClick={next}>
              <FaChevronRight />
            </button>
          </>
        )}

        {/* OVERLAY INFO */}
        <div className={styles.info}>
          <h3>
            {activeImage
              ?.split("/")
              .pop()
              ?.replace(".webp", "")
              ?.replace(/-/g, " ")}
          </h3>
          <p>Aniva Group Delivered Project</p>
        </div>

      </div>

      {/* CLOSE BUTTON */}
      <button className={styles.close} onClick={closeGallery}>
        ✕
      </button>

    </div>
  );
}