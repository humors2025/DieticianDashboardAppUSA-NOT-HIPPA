"use client"

import React from 'react'
import { UserProfile } from '@/components/user-profile';
import { Notification } from '@/components/notification';
//import { ClientRisk} from "@/components/client-risk";
import ClientRisk from "../../../components/client-risk"
import DashboardSidebar from '@/components/dashboard-sidebar';
import GoalTracker from '@/components/goal-tracker';
import {
    getClientsForDietician,
  selectClients,
  selectClientsCount,
  selectClientsStatus,
  selectClientsError,
} from "../../../store/clientSlice";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const Dashboard = () => {
  const dispatch = useDispatch();
  const clients = useSelector(selectClients);

  
  useEffect(() => {
     
      const dieticianCookie = Cookies.get("dietician");
  
      if (dieticianCookie) {
        try {
    
          const dieticianData = JSON.parse(decodeURIComponent(dieticianCookie));
          
        
          const dieticianId = dieticianData?.dietician_id;
  
          if (dieticianId) {
          
            dispatch(getClientsForDietician({ dieticianId }));
          } else {
            console.error("dietician_id not found in cookie data.");
           
          }
        } catch (e) {
          console.error("Failed to parse dietician cookie:", e);
         
        }
      } else {
        console.warn("Dietician cookie not found.");
       
      }
  
    }, [dispatch]);


  return (
    <>

 <ProtectedRoute>
      <UserProfile /> 
      {/* <div className='pb-[42px]'>
 <Notification/> 
 </div> */}

      <div className='flex gap-5'>
        {/* <DashboardSidebar/> */}
        <div className="flex flex-col gap-5 w-full">
          <GoalTracker/>

        </div>
      </div>
</ProtectedRoute>
    </>
  )
}

export default Dashboard;