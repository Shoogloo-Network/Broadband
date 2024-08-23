import Image from 'next/image';
import Link from 'next/link';
import abutLogo from '../../../public/assets/logo-black.png'
import abutAsia from '../../../public/assets/images/broadband-asia-about-us-1.png'
import abutShoogloo from '../../../public/assets/logoShoogloo.png'
import ShooglooTeam from '../../../public/assets/team-images.png'
import ShooglooTeam1 from '../../../public/assets/team-images-1.png'
import ShooglooTeam2 from '../../../public/assets/team-images-2.png'
import ShooglooTeam3 from '../../../public/assets/team-images-3.png'
import ShooglooTeam4 from '../../../public/assets/4.png'
import ShooglooTeam5 from '../../../public/assets/6.png'
import ShooglooTeam6 from '../../../public/assets/7.png'
import ShooglooTeam7 from '../../../public/assets/8.png'
import WorkWithUs from '../../../public/assets/work-with-us.jpeg'

import styles from './About.module.scss';

const AboutUsPage = ({ data }: any) => {
  const tagline =
    data && data.tagline && data.tagline !== '' ? data.tagline : '';
  const headline =
    data && data.headline && data.headline !== '' ? data.headline : '';
  const desc = data && data.desc && data.desc !== '' ? data.desc : '';
  return (
    <>
      <div className={`whiteBg`}>
        <main className={`${styles.aboutWrapSec} wrapContainer`}>
          <div className={`abtTpTitle`}>
            <h1>About Us</h1>
          </div>
          <div className={styles.aboutTop}>
            <Link href="/" className="aboutLogo">
              <Image src={abutLogo} alt="about Us" width={600} />
            </Link>
          </div>
          <div className="textModuleContent">
			      <p>Welcome to our broadband plans comparison website, your trusted destination for finding the ideal broadband plan to meet your connectivity needs. Here at Broadband.asia, we are passionate about simplifying the process of choosing a broadband plan by providing you with comprehensive information and unbiased comparisons.</p>		
          </div>
          <div className='abutImageContent'>
            <div className="abutImage">
                <Image src={abutAsia} alt="about Us" width={400} height={300} />
            </div>
            <div className="abutModuleContent">
			        <p>Our mission is simple: to empower you with the knowledge and tools necessary to make an informed decision when it comes to selecting the right broadband plan. We understand that navigating the vast sea of options can be overwhelming, with each provider offering different packages, speeds, and prices. That's why we've created a user-friendly platform that brings clarity and simplicity to the process.</p>
              <p>What sets us apart is our commitment to transparency and impartiality. We believe that you deserve to have access to accurate and unbiased information to make the best decision for your internet needs. Our team of experts thoroughly researches and analyzes various broadband plans, taking into account factors such as pricing, speeds, data allowances, contract terms, and customer reviews. This allows us to provide you with reliable and up-to-date information so that you can compare and choose with confidence.</p>		
            </div>
          </div>
          <div className='clear'></div>
          <div className='abtVentureSection'>
            <h2 className='abtVenture'><strong>A venture of <Link href="/" className="aboutLogo">Shoogloo Group</Link>-</strong></h2>
            <div className='abutShoogloo'>
              <Image src={abutShoogloo} alt="Shoogloo" width={306} height={100} />
              <p className='abutShooglootxt'>Shoogloo Family has been the pioneers of bringing and setting up new Digital Marketing trends in India since 2007. With our New Startup in collaboration with Mr. Praful Chauhan- Shoogloo Telecom, we are now expanding into the Telecom and Internet Comparison Industry, working hard towards excellence and success which will one day impact millions of life and bring a positive change!</p>
            </div>
            <div className='clear'></div>
          </div>
          <div className='abtourTeamSection'>
          <h2 className='ourTeamTxt'>Meet our Team-</h2>
            <div className='ourTeamShoogloo'>
              <ul>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/ldsharma/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/praful-chauhan-18037816a/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam1} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/saurabh-mittal-85b132a/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam2} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam3} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam4} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/gaurav-seth-19553b84/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam5} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/surender-rajput-1b4bb857/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam6} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
                <li className='ourTeam3col'>
                  <Link href="https://www.linkedin.com/in/manroopkaurchawla/" className="ourTeam" target='_blank'>
                    <Image src={ShooglooTeam7} alt="about Us" width={281} height={374} />
                  </Link>
                </li>
              </ul>
              <div className='clear'></div>
            </div>
            <div className='clear'></div>
          </div>
          <div className='abutImageContent'>
            <div className="abutImage">
                <Image src={WorkWithUs} alt="about Us" width={425}  />
            </div>
            <div className="abutModuleContent">
              <h2><strong>Work with us-</strong></h2>
              <p>Are you looking for working opportunities and ready to work in an exciting environment? Drop an email to our HR- <span className="emailTxt"><strong>pooja.sharma@shoogloo.com</strong></span> and let's figure out how we can proceed forward!</p>
              <p>Follow us on LinkedIn for regular job updates- 
              <Link href="https://www.linkedin.com/company/shoogloo-telecom/" className='aboutLogo'>Shoogloo Telecom</Link></p>	
            </div>
          </div>
          <div className='clear'></div>
        </main>
      </div>
    </>
  );
};

export default AboutUsPage;
