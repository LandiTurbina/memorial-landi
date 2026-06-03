
// Load all gallery images dynamically
// Centralized to avoid code duplication and potential build issues
const galleryModules = import.meta.glob<string>("@/assets/gallery/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Get all keys and shuffle them for random gallery order
const allKeys = Object.keys(galleryModules);
const shuffledKeys = shuffleArray(allKeys);

export const galleryImages = shuffledKeys.map((key) => ({
  src: galleryModules[key] as string,
  alt: "Foto do 1º Encontro Landi Turbina"
}));

export const allImageUrls = galleryImages.map(img => img.src);
