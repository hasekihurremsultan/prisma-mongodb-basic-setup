import {getPostsWithAuthor} from "./library";

(async function main() {
    let find = await getPostsWithAuthor();
    console.log("Post data: ", find);
})()