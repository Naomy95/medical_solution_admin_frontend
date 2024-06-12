import React, { useState } from "react";
import nurse from "../assets/images/nurse.png";
import pen from "../assets/images/pen.png";
import del from "../assets/images/delete.png";
import { deleteNurse,  getNurses, postNurse, updateNurse, } from "../lib/api/nurse";
import { useQuery,useQueryClient  } from "@tanstack/react-query";


const NursingPage = () => {
  const queryClient = useQueryClient();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editnurse, setEditnurse] = useState(null);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
    setEditMode(false);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleEditClick = (nurse) => {
    setEditMode(true);
    setIsFormVisible(true);
    setEditnurse(nurse);
    setFormData({
      name: nurse.name,
      email: nurse.email,
      phone_no: nurse.phone_no,
      nurse_id: nurse.nurse_id,
      enrolment_date: nurse.enrolment_date,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    if (editMode) {
      console.log(editnurse.nurse_id);
      updateNurse(editnurse.nurse_id, formData).then((res) => {
        console.log(res);
        // Optionally refetch the nurses list or update the UI here
        window.location.reload(true);
      });
    } else {
      postNurse(formData).then((res) => {
        console.log(res);
        // Optionally refetch the nurses list or update the UI here
        window.location.reload(true);
      });
    }
    console.log("Form submitted", formData);
    setIsFormVisible(!isFormVisible);
  };
  const handleDeleteClick = (nurse_id) => {
    console.log(nurse_id)
    deleteNurse(nurse_id)
      .then((res) => {
        console.log(res.data);
        queryClient.invalidateQueries(["nurses"]);
        // window.location.reload(true)
      })
      .catch((err) => {
        console.error("Error deleting nurse:", err);
      });
  };
  const {
    data: nurses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getNurses(),
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  console.log(nurses);

  return (
    <div className="p-4 gap-2 flex justify-items-stretch">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone No
              </th>
              <th scope="col" class="px-6 py-3">
                nurse Id
              </th>
              <th scope="col" class="px-6 py-3">
                Enrollment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {nurses.map((nurse, id) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border rounded-md dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={nurse}
                    alt=""
                  />
                </th>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {nurse.name}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {nurse.email}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {nurse.phone_no}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {nurse.nurse_id}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {nurse.enrolment_date}
                </th>

                <th style={{ width: "30px", height: "30px" }} class="px-2 py-4">
                  <img
                    src={pen}
                    onClick={() => handleEditClick(nurse)}
                    alt=""
                  />
                </th>
                <th style={{ width: "30px", height: "30px" }} class="px-2 py-4">
                  <img onClick={() => handleDeleteClick(nurse._id)} src={del} alt="" />
                </th>
              </tr>
            ))}

            {isFormVisible && (
              <tr>
                <td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={nurse}
                      alt=""
                    />
                  </th>
                </td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  <div className="border shadow-md">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  <div className="border shadow-md">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  <div className="border shadow-md">
                    <input
                      type="Phone"
                      name="phone_no"
                      value={formData.phone_o}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  <div className="border shadow-md">
                    <input
                      type="number"
                      name="nurse_id"
                      value={formData.nurse_id}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  <div className="border shadow-md">
                    <input
                      type="date"
                      name="enrolment_date"
                      value={formData.enrolment_date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </th>
                <th>
                  <button type="submit" onClick={handleFormSubmit}>
                    Submit
                  </button>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleButtonClick}
        className="p-2 text-white h-16 bg-buttoncolor"
      >
        Add new nurse
      </button>
    </div>
  );
};

export default NursingPage;
