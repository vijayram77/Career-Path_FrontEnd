"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

const MainComponent = ({baseUrl}) => {
    // console.log(baseUrl + "base Url maaawaaaaaaaaaaaaa");


  useEffect(() => {
    
    const post = async () => {
      try {
        localStorage.setItem("token", "");
        window.location.href ="/"
      } catch (error) {
        alert(error.message)
      }
    }
    post()

  },[])
  return (
    <div>
      
    </div>
  )
}

export default MainComponent
