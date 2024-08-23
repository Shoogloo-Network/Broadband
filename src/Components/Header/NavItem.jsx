import Link from "next/link";

const NavItem = ({ text, href, childMenu, subMenuOpenClick, activeSubMenuIdx }) => {
  const handlerClickSubMenu = ()=>{
    subMenuOpenClick()
  }
    return (
      <>
        <Link href={href}>{text}</Link>
        {
          childMenu ? <i onClick={handlerClickSubMenu}></i> : ''
        }
      </>

    );
  };
  
  export default NavItem;