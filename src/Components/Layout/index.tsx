import HeaderComponents from '../Header';
import FooterComponents from '../Footer';
import { generalsans } from '../../utils/fonts';

const LayoutComponent = (props: any) => {

  const children = props.children;
  
  // useEffect(() => {

  //   async function checkingSiteId() {
  //     let countryId = router.asPath.split("/")[1];
  //     if(!countryId || countryId.length > 2) {
  //       updateSiteId("8");
  //     } else {
  //       const options: any = await ApiHeaders(countryId, 'GET');
  //       let siteId: any = options?.headers?.Siteid;
  //       updateSiteId(siteId);
  //     }
  //   }

  //   checkingSiteId();

  // }, [siteId])


  return (
    <>
      <HeaderComponents 
      />
      <main className={`main ${generalsans.className}`}>{children}</main>
      <FooterComponents />
    </>
    );
};


export default LayoutComponent;
