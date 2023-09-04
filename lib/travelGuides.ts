import prisma from "../lib/prismadb";

// Get all travel guides
export const getAllTravelGuides = async () => {
  const guides = await prisma.travelGuide.findMany({});

  return guides;
};

// Get single travel guides
export const getAllTravelGuide = async (id) => {
  const guide = await prisma.findUnique({
    where: { id },
  });

  return guide;
};
