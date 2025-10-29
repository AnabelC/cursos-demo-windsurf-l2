// Sistema de diseño consistente para el proyecto

export const buttonStyles = {
  primary: "inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-80 transition-opacity",
  secondary: "inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors",
  small: "inline-block bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600 transition-colors",
  link: "text-sm text-foreground hover:underline"
};

export const cardStyles = {
  base: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
  padding: {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  }
};

export const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  standard: "aspect-[4/3]"
};

export const spacing = {
  section: "py-16",
  container: "container mx-auto px-4",
  gap: {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8"
  }
};

export const textStyles = {
  heading1: "text-4xl font-bold",
  heading2: "text-3xl font-bold",
  heading3: "text-2xl font-bold",
  heading4: "text-xl font-bold",
  body: "text-gray-700 dark:text-gray-300",
  bodySmall: "text-sm text-gray-600 dark:text-gray-400",
  muted: "text-gray-500 dark:text-gray-400"
};
