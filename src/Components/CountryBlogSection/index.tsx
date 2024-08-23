import { useEffect, useState } from 'react';
import CountrySliderComponent from '../CountrySlider/CountrySliderComponent';

const CountryBlogSection = ({ viewBlogData }: any) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getCountryPageData = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        } else {
          console.error('Failed to fetch blog data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCountryPageData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <CountrySliderComponent viewBlogData={blogData} />
    </>
  );
};

export default CountryBlogSection;
