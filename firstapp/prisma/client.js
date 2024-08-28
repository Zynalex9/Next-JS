import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

if (process.env.NODE_ENV !== 'production') {
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
}

const prisma = global.prismaGlobal || prismaClientSingleton();

export default prisma;
