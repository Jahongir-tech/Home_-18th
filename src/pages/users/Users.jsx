import React from "react";
import { useStateValue } from "../../context/index";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { user, setUser } = useStateValue(); // setUser ham ishlatamiz
  const navigate = useNavigate();

  const editUser = (userId) => {
    navigate(`/create-user?id=${userId}`);
  };

  const deleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = user.filter((item) => item.id !== userId);
      setUser(updatedUsers);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Users List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user?.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {`${item.firstName} ${item.lastName}`}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Age:</strong> {item.age}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Phone:</strong> {item.phone}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Profession:</strong> {item.profession}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => editUser(item.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
