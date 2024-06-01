import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Stylesheet/table.css'

function Table() {
 const [tableData,setTableData] = useState([])
 useEffect(() => {
    const getTable = async () => {
        try {
            const result = await axios.get('http://localhost:4000/table');
            setTableData(result.data.table);
            console.log(result.data.table, 'tableeeeeeeeeee'); // Log the data directly
        } catch (error) {
            console.log('Error while fetching table:', error);
        }
    };

    getTable();
}, []);
    
  return (
    <div className='container'>
        { <table >
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>email</th>
            <th>password</th><hr />
            
                {tableData&& tableData.map((item)=>(
                 
                 <>
                 <tr> <td>{item.name}</td>
                 <td>{item.dateOfBirth}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td> 
                 </tr> 
                 </>
                 
                ))}
         
            

         </table>
        }
    </div>
  )
}

export default Table