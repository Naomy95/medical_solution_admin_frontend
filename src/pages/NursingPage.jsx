import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getNurses } from '../lib/api/nurse'
import pen from '../assets/images/pen.png';
import del from '../assets/images/delete.png';
import nur from '../assets/images/nurse.png';


const NursingPage = () => {
    const {
        data: nurses,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => getNurses(),
      })
      
      if (isError) return <div>Error</div>
      if (isLoading) return <div>Loading</div>
      console.log(nurses)


  return (
    <div className='p-4 gap-10 flex justify-items-stretch'>
      

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
                    Nurse Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Enrollment Date
                </th>
            </tr>
        </thead>
        <tbody>
           {nurses.map((nurse,id)=>(
             <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     <img style={{width:'50px', height:'50px'}} src={nur} alt="" />
                 </th>
                
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {nurse.name}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {nurse.email}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {nurse.phone_no}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {nurse.nurse_id}
                 </th>
                 <th scope="row" class="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-white">
                    {nurse.enrolment_date}
                 </th>

                 <td class="px-6 py-4">
                    <img style={{width:"20px", height:"20px", }} src={pen} alt="" />
                </td>
                 <td class="px-6 py-4">
                    <img style={{width:"20px", height:"20px", }}src={del} alt="" />
                </td>
               
             </tr>
           ))}
        </tbody>
    </table>
</div>

<button className='p-4 pb-2 text-white h-16 bg-buttoncolor'>Add new Nurse</button>

    </div>
  )
}

export default NursingPage