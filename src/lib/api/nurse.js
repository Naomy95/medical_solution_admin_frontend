import axios from "axios"


export const getNurses = async () => {
    const res = await axios.get('http://localhost:4000/nurses/', {
      headers: { 'Content-Type': 'application/json' },
    })
    return res.data
  }
  export const postNurse = (data) => {
    return  axios.post(`http://localhost:4000/createNurse`,data, {
      headers: { 'Content-Type': 'application/json' },
    })

  }

  export const updateNurse = (id,nurse) => {
    return  axios.put(`http://localhost:4000/nurse/${id}`,nurse, {
      headers: { 'Content-Type': 'application/json' },
    })

  }
  export const deleteNurse = (id) => {
    return  axios.delete(`http://localhost:4000/nurse/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })

  }