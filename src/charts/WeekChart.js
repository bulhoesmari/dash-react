import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import amountStaticsData from "../assets/dummy-data/amountStatics";

const weekChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={amountStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="Stats" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default weekChart;
