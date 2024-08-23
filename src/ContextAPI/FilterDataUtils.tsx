

export const filterBaseOnSpeed = (id:any, allData:any)=>{
    let productData = allData.productData && allData.productData.length > 0 ? allData.productData : [];
    let filterProductData:any = [];
    if(productData.length < 0){
        return allData
    }else{
        productData.map((item:any)=>{
            if(item.bottom.bandWidth === id){
                filterProductData.push(item);
            }
        })
        return filterProductData
    }
}