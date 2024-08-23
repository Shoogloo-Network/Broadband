"use client"

import { useState } from "react";

import styles from './Filter.module.scss';
import ServiceBoxComponents from './ServiceBox';
import { UseServiceppContext } from '../../ContextAPI/Context';
import CompareStripComponents from '../CompareStrip';
import ShimmerEffect from '../ShimmerEffect';
import ReviewPost from '../ReviewPost';
import Pagination from '@/Components/Pagination';

import { paginate } from "@/helpers/paginate";

const RightFilerSection = ({
  products,
  isloading,
  showReview,
  mwebFilterShow,
}: any) => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }
console.log("fff");
  const showReviewSection = showReview && showReview === 'yes' ? true : false;
  const productData: any = UseServiceppContext();
  const showCompareStrip = productData.state.comparePlanData.length > 0;
  const data = productData.state.filterProducts
    ? productData.state.filterProducts
    : [];
  const broadBand =
    products && products[0] && products[0].broadBand
      ? products[0].broadBand
      : {};
  const provider =
    products && products[0] && products[0].provider ? products[0].provider : {};
  const planDetails = {
    entityId: (broadBand && broadBand.providerId) || 0,
    projectId: (broadBand && broadBand.projectId) || 30,
    siteId: (broadBand && broadBand.siteId) || 10,
    categoryId: (provider && provider.categoryId) || 11,
  };

  const paginatedPosts = paginate(products, currentPage, pageSize)

  return (
    <>
      <div id="xyz" className={`rightSecFilter ${mwebFilterShow ? 'hide' : ''}`}>
        {isloading ? (
          <ShimmerEffect />
        ) : paginatedPosts && paginatedPosts.length > 0 ? (
          <>
            {
              paginatedPosts.map((item: any, index: number) => {
                if (item.broadBand.status === "1") {
                  return <ServiceBoxComponents key={index} productData={item} />;
                }
                return null; // or you can handle other cases
              })
            }
            <Pagination
              items={products.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </>
        ) : (
          <ServiceBoxComponents nodata="nodata" />
        )}

        {showReviewSection ? (
          <div className="reviewProvider">
            <h2>Reviews</h2>
            <ReviewPost planDetails={planDetails} />
          </div>
        ) : (
          ''
        )}
      </div>

      {showCompareStrip ? <CompareStripComponents /> : null}
    </>
  );
};

export default RightFilerSection;
