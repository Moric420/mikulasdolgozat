import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.toy.createMany({
    data: [
      { name: 'Toy Train', material: 'wood', weight: 1.5 },
      { name: 'Robot', material: 'metal', weight: 2.5 },
    ],
  });

  await prisma.child.createMany({
    data: [
      { name: 'John Doe', address: 'USA, California', isGood: true },
      { name: 'Jane Smith', address: 'UK, London', isGood: false },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
