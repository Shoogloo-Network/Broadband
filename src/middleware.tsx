import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { API_PAGE_KEY_BASE, api } from "@/config";
export async function middleware(request: NextRequest) {

    const currentPath = request.nextUrl.pathname;

    if (
        currentPath.startsWith("/_next") ||
        currentPath.startsWith("/assets") ||
        currentPath.startsWith("/favicon.ico") ||
        currentPath.startsWith("/vercel.svg") ||
        currentPath.startsWith("/next.svg") ||
        currentPath.startsWith("/api")
    ) {
        return NextResponse.next();
    }

    const getCountryCode = currentPath.replace("/", "").split("/")[0];

    if (getCountryCode.length > 2) {
        return NextResponse.next();
    }

    const newUrl = request.nextUrl.clone();
    if (getCountryCode) {
        try {

            let resp = await fetch(`${api.API_URL}/admin/site/list/3`);
            let result = await resp.json();
            if (result.statusCode === 200) {
                let foundDomain = result.payload.filter((item: any) => item.domainName.split(".")[0] == getCountryCode);
                if (foundDomain.length) {
                    newUrl.searchParams.set("pageSiteId", JSON.stringify(foundDomain[0].id));
                    return NextResponse.rewrite(newUrl);
                }
                //return NextResponse.next();
            }



        } catch (error) {
            //throw new Error("Please Refresh Page Or contact site administrator if error still exsits.")
            return NextResponse.next();
        }

    }

    newUrl.searchParams.set("pageSiteId", JSON.stringify("8"));
    return NextResponse.rewrite(newUrl);


}