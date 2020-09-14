import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    await prisma.user.create({
      data: {
        name: "Steve",
        email: "steve@prisma.io",
        posts: {
          create: { title: "Hi Everyone" },
        },
        profile: {
          create: { bio:  "I like fruits" }
        }
      }
    })
  
    const allUsers = await prisma.user.findMany({
      include: { 
        posts: true,
        profile: true 
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
