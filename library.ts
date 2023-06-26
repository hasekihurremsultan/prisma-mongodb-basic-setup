import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAuthor = () => {
    prisma.author.create({
        data: {
            name: "Emir Furkan"
        }
    })
}

export const createPost = () => {
    return prisma.post.create({
        data: {
            title: "My first post",
            body: "And this is its body",
            author: {
                connect: {
                    id: '64997a9de2ae4cfa2b4dd941'
                }
            }
        }
    });
}

export const getPostsWithAuthor = () => {
    return prisma.post.findMany({
        include: {
            author: true
        }
    });
}