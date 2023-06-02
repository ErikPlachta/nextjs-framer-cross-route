import React from "react";
import Image from "next/image";
import getPostData from "@/context/blog/posts"
import { useRouter } from "next/navigation";

export default function Page({ params }:any) {
  
  //-- slug sent when navigated to from blog base pge
  let slug = params.slug;
  //-- simulate query to database
  let data = getPostData();
  
  let post = data.find((post) => post.slug === slug);
  
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Image priority={true} src={post.image} alt={post.title} width={500} height={500} />
        </>
      )}
    </div>
  );
}

