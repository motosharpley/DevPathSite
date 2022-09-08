import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

type categoriesArr = {
  name: string;
  slug: string;
};

const Header: React.FC = () => {
  const [categories, setCategories] = useState<categoriesArr[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block  border-green-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <img
              src="./DevPathLogo-2121.png"
              alt="DevPath Logo dev path your tech navigator"
              width={140}
            />
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
          <div className="md:float-right pt-2">
            <a href="https://www.youtube.com/channel/UCpprazufqp6UCSqwCv2ua6g">
              <img
                src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
                alt="DevPath YouTube Channel Button"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
