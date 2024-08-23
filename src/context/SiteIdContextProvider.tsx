"use client"

import React, { createContext, useState } from "react";

export interface SiteIdContextType {
    siteId: string;
    updateSiteId: (id: string) => void;
}

const SiteIdContext = createContext<SiteIdContextType | null>(null);

const SiteIdContextProvider = ({ children }: { children?: any }) => {

    const [siteId, setSiteId] = useState<any>("8");
    
    const updateSiteId = (id: string | null) => {
        setSiteId(id);
    }

    return (
        <SiteIdContext.Provider value={{
            siteId,
            updateSiteId
        }}>
            {children}
        </SiteIdContext.Provider>
    )
}

export { SiteIdContext, SiteIdContextProvider };