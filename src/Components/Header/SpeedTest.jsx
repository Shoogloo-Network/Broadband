import React, { useState } from 'react';
import speedImage from '../../../public/assets/speedtest.png';
import Image from 'next/image';

function SpeedTest() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="speed-test">
      <button className='speedicon' onClick={togglePopup}>
        <div className='speed-testicobox'>
          <Image 
                src={speedImage} 
                alt="Speed Test"
          />
        </div>
      <div className='speed-testtxtbox'>
        <div className='speed-testtxthead'>Speed Test</div>
        <div className='speed-testtxtsubhead'>by broadband.asia</div>
      </div>
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="speed-testwrap">
              <div className="speed-testwrap-inner">
                <div className="speed-testcont">
                      <iframe src="//openspeedtest.com/speedtest">
                      </iframe>
                </div>
                <div className="speed-testadv">Advertisement</div>
                <div className="clear"></div>
              </div>
              <div className="speed-testadv-right">Advertisement</div>
            </div>
            <button className="close" onClick={togglePopup}></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeedTest;
