"use client"
import React, { useReducer, useContext } from 'react';

import { ServiceDataReducer } from './Reducer';
export interface IContextProps {
  state: {};
  dispatch: ({ type }: { type: any }) => void;
}

import ProductFilterData from '@/Data/filterMenuJson.json';
const ServiceAppContext = React.createContext({} as IContextProps);

const ServieAppProvider = (props: any) => {
  const [state, dispatch] = useReducer(ServiceDataReducer, {
    productData: [],
    comparePlanId: [],
    filterMenuJson: ProductFilterData.data,
    filterProducts: [],
    comparePlanData: [],
  });

  return (
    <ServiceAppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ServiceAppContext.Provider>
  );
};
//export { ServieAppProvider, ServiceAppContext};
export default ServieAppProvider;

export const UseServiceppContext = () => {
  return useContext(ServiceAppContext);
};