"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsWithAuthor = exports.createPost = exports.createAuthor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createAuthor = () => {
    prisma.author.create({
        data: {
            name: "Emir Furkan"
        }
    });
};
exports.createAuthor = createAuthor;
const createPost = () => {
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
};
exports.createPost = createPost;
const getPostsWithAuthor = () => {
    return prisma.post.findMany({
        include: {
            author: true
        }
    });
};
exports.getPostsWithAuthor = getPostsWithAuthor;
