import axios from "axios"


export const getDoctors = async () => {
    const res = await axios.get('http://localhost:4000/doctors/', {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  }
  export const postDoctor = (data) => {
    return  axios.post(`http://localhost:4000/createDoctor`,data, {
      headers: { 'Content-Type': 'application/json' },
    })

  }

  export const updateDoctor = (id,doctor) => {
    return  axios.put(`http://localhost:4000/doctor/${id}`,doctor, {
      headers: { 'Content-Type': 'application/json' },
    })

  }
  export const deleteDoctor = (id) => {
    return  axios.delete(`http://localhost:4000/doctor/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })

  }