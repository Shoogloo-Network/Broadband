export const getTinyUrl = async (longUrl:string):  Promise<string>=>{
    const apiUrl = `https://api.tinyurl.com/dev/api-create.php?url=${encodeURIComponent(longUrl)}`;
    const APIURL = `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`;
    const data = await fetch(`${APIURL}`);
    const resData = await data.json();
    if(resData && resData.shorturl && resData.shorturl !== ''){
        return resData.shorturl
    }
    return longUrl
}