import styles from './LatestOffer.module.scss';
import { generalsans } from '../../utils/fonts';
import OfferCardComponents from '../OfferCard';
import Link from 'next/link';
import { useParams } from 'next/navigation';


const LatestOfferComponents = ({ data }: any) => {
  const {countryId} = useParams();

  return (
    <>
      <section className={`${styles.wrap} ${generalsans.className}`}>
        <div className={`${styles.wraperSection} wrapContainer`}>
          <h2 className="head2">Our Latest offers</h2>
          <h3 className="head3">Just for you.</h3>
          <div className={styles.boxContainer}>
            {data && data.length && data.length > 0
              ? data.map((item: any) => {
                  return (
                    <OfferCardComponents
                      key={item.broadBand.id}
                      data={item}
                      type="free"
                    />
                  );
                })
              : ''}
            {/* <OfferCardComponents type='free'/>
                        <OfferCardComponents type='free'/>
                        <OfferCardComponents type='free'/>
                        <OfferCardComponents type='free'/>
                        <OfferCardComponents type='nonfree'/>
                        <OfferCardComponents type='paid'/> */}
          </div>
          <div className={styles.btmTxtWrap}>
            Couldn&apos;t find your perfect plan ? Explore all other plans
            <Link href={`/${countryId}/compare-broadband-plans`} className={styles.btnplan}>
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};


export default LatestOfferComponents;
