import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./dataSlice";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

function ChartRedux() {

  const [value, setValue] = useState(0);
  const [month, setMonth] = useState("");
  // const datas = useSelector((state) => state.datas.items);
  const dispatch = useDispatch()
  const [data, setData] = useState([
    {
      name: "Jan",
      x: 800,
    },
    {
      name: "Feb",
      x: 720,
    },
    {
      name: "Mar",
      x: 600,
    },
    {
      name: "Apr",
      x: 410,
    },
    {
      name: "May",
      x: 590,
    },
    {
      name: "Jun",
      x: 390,
    },
    {
      name: "Jul",
      x: 220,
    },
  ]
  )


  // const handleSubmit = () => {
  //   const updatedData = data.map((item) => {
  //     if (item.name === month)
  //       return {
  //         ...item,
  //         x: value,
  //       };
  //     return item;
  //   });

  //   setData(updatedData);
  // };

  return (
    <>
      <BarChart width={500} height={500} data={data}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="x" stackId="a" fill="#51C0FB" />
      </BarChart>
      <div style={{ display: "flex" }}>
        <select
          onChange={(event) => setMonth(event.target.value)}
          className="select-style"
        >
          <option value="choose" className="select-option" selected>
            Choose a month
          </option>
          <option value="Jan" className="select-option">
            January
          </option>
          <option value="Feb" className="select-option">
            February
          </option>
          <option value="Mar" className="select-option">
            March
          </option>
          <option value="Apr" className="select-option">
            April
          </option>
          <option value="May" className="select-option">
            May
          </option>
          <option value="Jun" className="select-option">
            June
          </option>
          <option value="Jul" className="select-option">
            July
          </option>
        </select>
        <input
          type="number"
          onChange={(event) => setValue(+event.target.value)}
          className="select-inp"
          placeholder="Choose a number..."
        />

        <button onClick={() => {
          dispatch(addData({id: 1, month, value}))
        }} type="button" className="select-btn">
          Set chart
        </button>
        {/* 
        {datas.map(data => 
        <div>
          <h1>{data.month}</h1>
          <h2>{data.value}</h2>
        </div>
        )} */}
      </div>
    </>
  );
}

export default ChartRedux;
