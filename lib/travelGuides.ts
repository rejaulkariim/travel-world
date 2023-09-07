import prisma from "../lib/prismadb";

// Get all travel guides
export const getAllTravelGuides = async () => {
  const guides = await prisma.travelGuide.findMany({});

  return guides;
};

// Get single travel guides
