"use client"
import { ServiceDataReducer } from "@/ContextAPI/Reducer";
import React, { useReducer } from "react";
import { createContext,useState } from "react";
import ProductFilterData from '@/Data/filterMenuJson.json';

export interface InContextProps {
    statecmp: {};
    dispatchcmp: ({ type }: { type: any }) => void;
  }
const CompareContextDatac= createContext< InContextProps| null>(null);

const CompareContextProvider = (props :any) => {

    const [statecmp, dispatchcmp] = useReducer(ServiceDataReducer,{
        productData: [],
        comparePlanId: [],
        filterMenuJson: ProductFilterData.data,
        filterProducts: [],
        comparePlanData: [],
    }
        );
    

    return (
        <CompareContextDatac.Provider value={{
            statecmp,
            dispatchcmp
        }}>
            {props.children}
        </CompareContextDatac.Provider>
    )
}


export  {CompareContextDatac,CompareContextProvider }