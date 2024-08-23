import { filterBaseOnSpeed } from './FilterDataUtils';

export const ServiceDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        filterProducts: action.payload,
      };
    case 'SET_PRODUCT_DATA':
      return {
        ...state,
        productData: action.payload,
      };
    case 'COMPARE_PLAN_IDS':
      return {
        ...state,
        comparePlanId: [...state.comparePlanId, action.payload],
      };
    case 'ADD_COMPARE_PLAN_DATA':
      return {
        ...state,
        comparePlanData: [...state.comparePlanData, action.payload],
      };
    case 'CLEAR_COMPARE_PLAN_DATA':
      return {
        ...state,
        comparePlanData: [],
      };
    case 'SINGEL_PLAN_REMOVE':
      const updatedDataArray = state.comparePlanData.filter(
        (plan: any) => plan.broadBand.id !== action.payload
      );
      return {
        ...state,
        comparePlanData: updatedDataArray,
      };
    case 'CLEAR_COMPARE_PLAN_IDS':
      return {
        ...state,
        comparePlanId: [],
      };
    default:
      return { ...state };
  }
};