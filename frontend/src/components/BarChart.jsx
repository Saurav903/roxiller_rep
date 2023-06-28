/* eslint-disable react/prop-types */
// import React, { useState } from 'react'
import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto";
import { useState } from "react";


const BarChart = ({statis}) => {

    
  return (
    <>
        <Bar data={{
        labels: ["0-100","101-200","201-300","301-400","401-500","501-600","601-700","701-800","801-900","901-above"],
        datasets:[{
            label:"Months",
            data:[statis.barchart==undefined ? 0:statis.barchart["0-100"],statis.barchart==undefined ? 0:statis.barchart["101-200"],statis.barchart==undefined ? 0:statis.barchart["201-300"],statis.barchart==undefined ? 0:statis.barchart["301-400"],statis.barchart==undefined ? 0:statis.barchart["401-500"],statis.barchart==undefined ? 0:statis.barchart["501-600"],statis.barchart==undefined ? 0:statis.barchart["601-700"],statis.barchart==undefined ? 0:statis.barchart["701-800"],statis.barchart==undefined ? 0:statis.barchart["801-900"],statis.barchart==undefined ? 0:statis.barchart["901-above"]]
        }]
    }} />
    </>
  )
}

export default BarChart