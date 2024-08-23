import Link from 'next/link';
import TopAddImage from '../../../public/assets/ad/ad_broadband_in.png';
import TopAddImage2 from '../../../public/assets/ad/ad_broadband_sg.png';
import TopAddImage3 from '../../../public/assets/ad/ad_broadband_me.png';
import Image from 'next/image';

interface TopAdComponentsProps {
  siteId: number
}

const TopAdComponents = ({ siteId }: TopAdComponentsProps) => {

  if(siteId === 1) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }else if(siteId === 3) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage2} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }
  else if(siteId === 11) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage3} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }
  else if(siteId === 12) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage3} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }
  else if(siteId === 13) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage3} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }
  else if(siteId === 14) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage3} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  }
  else if(siteId === 15) {
    return (
      <>
        <Link href="/provider/reliance-jio/" className="topAdSec">
          <Image src={TopAddImage3} alt={`Top Add`} width={720} height={70} />
        </Link>
      </>
    )
  } else {
    return null;
  }

};

export default TopAdComponents;