"use client"

import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { generalsans } from '@/utils/fonts';

import ServiceAppContext from "@/ContextAPI/Context";

import FooterComponents from '@/Components/Footer'
import HeaderComponents from '@/Components/Header'
import { CompareContextProvider } from '@/context/CompareContextData';
import Head from 'next/head';
// Create a client
const queryClient = new QueryClient()

const MainLayout = ({ children }: any) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ServiceAppContext>
          <CompareContextProvider>
            <HeaderComponents />
            <main className={`main ${generalsans.className}`}>{children}</main>
          </CompareContextProvider>
          <FooterComponents />
        </ServiceAppContext>
      </QueryClientProvider>
    </>
  )
}

export default MainLayout