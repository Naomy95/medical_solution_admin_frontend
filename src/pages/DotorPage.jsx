import React from 'react'
import doc from '../assets/images/doctor-logo.png';
import pen from '../assets/images/pen.png';
import del from '../assets/images/delete.png';
import { getDoctors } from '../lib/api/doctor';
import { useQuery } from "@tanstack/react-query";

const DotorPage = () => {

    const {
        data: doctors,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => getDoctors(),
      })
      
      if (isError) return <div>Error</div>
      if (isLoading) return <div>Loading</div>
      console.log(doctors)


  return (
    <div className='p-6'>
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   
                </th>
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
           {doctors.map((doctor,id)=>(
             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <img style={{width:'50px', height:'50px'}} src={doc} alt="" />
                 </th>
                
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {doctor.name}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {doctor.email}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {doctor.phone_no}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {doctor.doctor_id}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {doctor.enrolment_date}
                 </th>

                 <td class="px-6 py-4">
                    <img src={pen} alt="" />
                </td>
                 <td class="px-6 py-4">
                    <img src={del} alt="" />
                </td>
               
             </tr>
           ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default DotorPage