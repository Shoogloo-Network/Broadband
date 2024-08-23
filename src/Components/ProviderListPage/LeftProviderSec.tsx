import IndiaAds from '../Ad/india/LeftAd';
import SingaporeAds from '../Ad/singapore/LeftAd';
import ArabEmiratesAds from '../Ad/arabemirates/LeftAd';
import BahrainiDinarAds from '../Ad/bahrainidinar/LeftAd';
import KuwaitDinarAds from '../Ad/kuwaitidinar/LeftAd';
import QatarRiyalAds from '../Ad/qatarriyal/LeftAd';

const LeftProviderSec = ({ siteId }: { siteId: number }) => {
  
  if(siteId === 1) {
    return (
      <div className="leftSecFilter">
        <IndiaAds />
      </div>
    )
  }else if(siteId === 3) {
    return (
      <div className="leftSecFilter">
        <SingaporeAds />
      </div>
    )
  }
  else if(siteId === 11) {
    return (
      <div className="leftSecFilter">
        <ArabEmiratesAds />
      </div>
    )
  }
  else if(siteId === 12) {
    return (
      <div className="leftSecFilter">
        <BahrainiDinarAds />
      </div>
    )
  }
  else if(siteId === 13) {
    return (
      <div className="leftSecFilter">
        <QatarRiyalAds />
      </div>
    )
  }
  else if(siteId === 14) {
    return (
      <div className="leftSecFilter">
        <KuwaitDinarAds />
      </div>
    )
  }
  else if(siteId === 15) {
    return (
      <div className="leftSecFilter">
        <BahrainiDinarAds />
      </div>
    )
  }

  return null;
};

export default LeftProviderSec;
