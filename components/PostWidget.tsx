import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import { CMSImageLoader } from '../util';

const PostWidget = (props: { categories: []; slug: string }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (props.slug) {
      getSimilarPosts(props.categories, props.slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [props.slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {props.slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map(
        (
          post: {
            title: string;
            featuredImage: { url: string };
            createdAt: string;
            slug: string;
          },
          index
        ) => (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                unoptimized
                loader={CMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>
                {post.title}
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PostWidget;
