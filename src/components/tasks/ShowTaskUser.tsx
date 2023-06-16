import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, usedispatch } from "../features/store/store";
import { ShowTask } from "../features/tasks/taskThunk";
import { useNavigate } from "react-router-dom";

interface showTaskType {
  description: string
  employeeId: number
  endDate: string
  id: number
  name: string
  startDate: string
}

const ShowTaskUser = () => {
  const { showTask } = useSelector((state: RootState) => state.tasks);
  const navigate = useNavigate();
  const dispatch = usedispatch();
  const id = Number(localStorage.getItem("id"));
  useEffect(() => {
    dispatch(ShowTask(id));
  }, []);
  const handleExit = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {showTask.map((user:showTaskType)=>(
        <div>
            <span> {user.name}</span>
            <span> {user.description}</span>
            <span> {user.startDate}</span>
            <span> {user.endDate}</span>

            </div>
      ))}

      <button onClick={handleExit}> exit</button>
    </div>
  );
};

export default ShowTaskUser;
