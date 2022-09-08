import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

type categoriesArr = {
  name: string;
  slug: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<categoriesArr[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
      <div className="mb-4">
        <Link href="/https://www.youtube.com/channel/UCpprazufqp6UCSqwCv2ua6g">
          <img
            src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
            alt="DevPath YouTube Channel Button"
          />
        </Link>
      </div>

      {categories &&
        categories.map(
          (category: { name: string; slug: string }, index: number) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className={`cursor-pointer block ${
                  index === categories.length - 1 ? 'border-b-0' : 'border-b'
                } pb-3 mb-3`}
              >
                {category.name}
              </span>
            </Link>
          )
        )}
    </div>
  );
};

export default Categories;
