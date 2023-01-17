import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import post from "../../../portfolio2/schemas/post";
import sanityClient from "../../client";

function PostBlock() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <article>
        {/* <Link to={"/post/" + post.slug.current} key={post.slug.current}> */}
          <span>
            <img src={post.mainImage.asset.url} />
            <span>
              <h3></h3>
            </span>
          </span>
        {/* </Link> */}
      </article>
    </div>
  );
}

export default PostBlock;
