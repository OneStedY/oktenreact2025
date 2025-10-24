import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {

        async function fetchPosts(){
           const allPost = await loadPosts()
            setPosts(allPost);

        }

        fetchPosts()

    }, []);


    return (
        <div>
            {
                posts.map((post)=>(<Post post={post} key={post.id} />))
            }
        </div>
    );
};