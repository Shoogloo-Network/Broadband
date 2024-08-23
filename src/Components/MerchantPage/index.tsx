import LeftFilterSection from '../ProductSec/LeftSection';
import RightFilerSection from '../ProductSec/RightSection';

const MerchantSecComponents = ({products}:any)=>{
    return (
        <>
        <div className='productWraper'>
            <LeftFilterSection />
            <RightFilerSection products={products}/>
        </div>
        </>
    )
}

export default MerchantSecComponents;