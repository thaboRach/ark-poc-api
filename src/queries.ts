import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (
  username: string,
  email: string,
  password: string,
  dob: Date,
  preferred_coding_language: string
) => {
  return await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
      dob: dob.toISOString(),
      preferred_coding_language: preferred_coding_language,
    },
  });
};

export const getUser = async (username: string) => {
  return await prisma.user.findUnique({
    where: { username: username },
  });
};
