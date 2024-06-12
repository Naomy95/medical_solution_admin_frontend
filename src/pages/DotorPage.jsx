import React, { useState } from "react";
import doc from "../assets/images/doctor-logo.png";
import pen from "../assets/images/pen.png";
import del from "../assets/images/delete.png";
import { deleteDoctor, getDoctors, postDoctor, updateDoctor } from "../lib/api/doctor";
import { useQuery,useQueryClient  } from "@tanstack/react-query";


const DotorPage = () => {
  const queryClient = useQueryClient();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editDoctor, setEditDoctor] = useState(null);

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
  const handleEditClick = (doctor) => {
    setEditMode(true);
    setIsFormVisible(true);
    setEditDoctor(doctor);
    setFormData({
      name: doctor.name,
      email: doctor.email,
      phone_no: doctor.phone_no,
      doctor_id: doctor.doctor_id,
      enrolment_date: doctor.enrolment_date,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    if (editMode) {
      console.log(editDoctor.doctor_id);
      updateDoctor(editDoctor.doctor_id, formData).then((res) => {
        console.log(res);
        // Optionally refetch the doctors list or update the UI here
        window.location.reload(true);
      });
    } else {
      postDoctor(formData).then((res) => {
        console.log(res);
        // Optionally refetch the doctors list or update the UI here
        window.location.reload(true);
      });
    }
    console.log("Form submitted", formData);
    setIsFormVisible(!isFormVisible);
  };
  const handleDeleteClick = (doctor_id) => {
    console.log(doctor_id)
    deleteDoctor(doctor_id)
      .then((res) => {
        console.log(res.data);
        queryClient.invalidateQueries(["doctors"]);
        // window.location.reload(true)
      })
      .catch((err) => {
        console.error("Error deleting doctor:", err);
      });
  };
  const {
    data: doctors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getDoctors(),
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  console.log(doctors);

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
                Doctor Id
              </th>
              <th scope="col" class="px-6 py-3">
                Enrollment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, id) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border rounded-md dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={doc}
                    alt=""
                  />
                </th>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {doctor.name}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {doctor.email}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {doctor.phone_no}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {doctor.doctor_id}
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white"
                >
                  {doctor.enrolment_date}
                </th>

                <th style={{ width: "30px", height: "30px" }} class="px-2 py-4">
                  <img
                    src={pen}
                    onClick={() => handleEditClick(doctor)}
                    alt=""
                  />
                </th>
                <th style={{ width: "30px", height: "30px" }} class="px-2 py-4">
                  <img onClick={() => handleDeleteClick(doctor._id)} src={del} alt="" />
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
                      src={doc}
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
                      name="doctor_id"
                      value={formData.doctor_id}
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
        Add new Doctor
      </button>
    </div>
  );
};

export default DotorPage;
