import React, { useState } from "react";
import { usedispatch } from "../features/store/store";
import { CreateUser } from "../features/employe/employeThunk";
import { useNavigate } from "react-router-dom";

export interface dataType {
  name: string;
  surname: string;
  email: string;
  position: string;
}

const EmployeForm = () => {
  const [data, setData] = useState<dataType>({
    name: "",
    position: "",
    surname: "",
    email: "",
  });
  const navigate = useNavigate()
  const allUserPage = () =>{
    navigate("/")
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = usedispatch();
  const handleAddUser = () => {
    dispatch(CreateUser(data));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="surname"
        value={data.surname}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="position"
        value={data.position}
        onChange={handleChange}
      />

      <button onClick={handleAddUser}> addUSer</button>
      <button onClick={allUserPage}>  all user page</button>
    </div>
  );
};

export default EmployeForm;
