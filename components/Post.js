import { useState, useEffect } from "react";
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import clientConfig from "../client-config";

const Post = props => {
  const { post } = props;
  const [isAfterLoad, setAfterLoad] = useState(false);
  const placeholder = (<div className="photo-placeholder"></div>);
  const afterLazyLoad = () => {
    setAfterLoad(true);
  }

  return undefined !== post ? (
    <div className="w-1/2 md:w-1/4 lg:w-1/5 px-3 pb-8" key={post.postId}>
      <Link
        as={`/post/${post.slug}-${post.postId}`}
        href={`/post?slug=${post.slug}-${post.postId}`}
      >
        <a className="block mb-2">
          <LazyLoadImage
            alt={post.title}
            src={post.featuredImage ? post.featuredImage.sourceUrl : ``}
            delayTime={700}
            effect="blur"
            afterLoad={afterLazyLoad}
            placeholder={placeholder}
          />
        </a>
      </Link>

      {isAfterLoad ? (
        <Link
          as={`/post/${post.slug}-${post.postId}`}
          href={`/post?slug=${post.slug}-${post.postId}`}
        >
          <a className="text-base font-bold text-grey-400 hover:text-ui-dark">{post.title}</a>
        </Link>
      ) : ""
      }
    </div>
  ) : (
      ""
    );
};

export default Post;
