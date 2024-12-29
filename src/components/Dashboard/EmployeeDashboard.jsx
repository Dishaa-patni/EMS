import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers"
import TaslList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
 
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">

      <Header data={data} />
      <TaskListNumbers data={data}/>
      <TaslList data={data}/>
    </div>  
  );
};

export default EmployeeDashboard;
