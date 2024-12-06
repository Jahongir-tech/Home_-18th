import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/index";

const CreateUser = () => {
  const { user, setUser } = useStateValue();
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  const firstName = useRef("");
  const lastName = useRef("");
  const age = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phone = useRef("");
  const profession = useRef("");

  const location = useLocation();
  const paramsUserId = location.search.split("=")[1];

  useEffect(() => {
    if (paramsUserId) {
      const updatedUser = user.find((item) => item.id === paramsUserId);
      if (updatedUser) {
        firstName.current.value = updatedUser.firstName;
        lastName.current.value = updatedUser.lastName;
        age.current.value = updatedUser.age;
        email.current.value = updatedUser.email;
        password.current.value = updatedUser.password;
        phone.current.value = updatedUser.phone;
        profession.current.value = updatedUser.profession;
        setUpdate(true);
      }
    }
  }, [paramsUserId, user]);

  const registerUser = (event) => {
    event.preventDefault();

    const formUser = {
      id: update ? paramsUserId : uuidv4(),
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      profession: profession.current.value,
    };

    if (update) {
      const updatedUsers = user.map((item) =>
        item.id === paramsUserId ? formUser : item
      );
      setUser(updatedUsers);
    } else {
      setUser([...user, formUser]);
    }

    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
    profession.current.value = "";

    navigate("/users");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-200">
      <form className="w-1/3 bg-white rounded-lg p-6" onSubmit={registerUser}>
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="text"
          placeholder="Firstname..."
          ref={firstName}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="text"
          placeholder="Lastname..."
          ref={lastName}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="number"
          placeholder="Age..."
          ref={age}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="email"
          placeholder="Email..."
          defaultValue={"user@gmail.com"}
          ref={email}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="password"
          placeholder="Password..."
          defaultValue={"123456"}
          ref={password}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="tel"
          placeholder="Phone..."
          ref={phone}
          defaultValue={"+998944414188"}
        />
        <input
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300"
          type="text"
          placeholder="Profession..."
          ref={profession}
          defaultValue={"Dasturchi"}
        />
        <button
          type="submit"
          className="w-full mb-3 py-2 px-4 rounded-md outline-none border border-gray-300 bg-blue-500 text-white"
        >
          {update ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
