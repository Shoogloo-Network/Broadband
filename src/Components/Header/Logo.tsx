import React from "react";
import logoImage from 'public/assets/logo-white.png';
import Link from 'next/link';
import Image from 'next/image';


const Logo = ({ countryName }: { countryName: string }) => {
  return <Link href={countryName ? `/${countryName}/` : `/`}><Image src={logoImage} width={200} alt="BroadBandAsia" /></Link>;
};

export default Logo;
