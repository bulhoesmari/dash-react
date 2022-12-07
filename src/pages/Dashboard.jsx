import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import WeekChart from "../charts/WeekChart";
import StatsChart from "../charts/StatsChart";
import TrackingChart from "../charts/TrackingChart";


const carObj = {
  title: "Gasto diário",
  totalNumber: "R$ 60",
  icon: "money",
};

const tripObj = {
  title: "Gasto mensal",
  totalNumber: "R$ 5.000",
  icon: "money",
};

const clientObj = {
  title: "Produtos usados",
  totalNumber: "20",
  icon: "products",
};

const distanceObj = {
  title: "Provedores usados",
  totalNumber: "2",
  icon: "ri-timer-flash-lin",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Gastos semanais</h3>
            <WeekChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Gastos por provedores</h3>
            <StatsChart />
          </div>
          <div className="stats">
            <h3 className="stats_title"> Gastos no semestre </h3>
            <TrackingChart/>
          </div>
        </div>
      
       
      </div>
    </div>
  );
};

export default Dashboard;
