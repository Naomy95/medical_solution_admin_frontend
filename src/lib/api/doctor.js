import axios from "axios"


export const getDoctors = async () => {
    const res = await axios.get('http://localhost:5001/doctors/', {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  }

  export const updateDoctor = ({id,doctor:doctor}) => {
    return  axios.put(`http://localhost:5001/doctors/:${id}`,{doctor:doctor}, {
      headers: { 'Content-Type': 'application/json' },
    })

  }