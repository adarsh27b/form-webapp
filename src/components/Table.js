const Table = (props) => {
    return <div className="flex flex-col   sm:w-full md:w-screen lg:w-1/2 xl:w-1/2 text-center border-white font-serif font-medium">
        <h1 className="font-bold text-center h-14 p-4 italic font-serif text-lg">Input Data</h1>
        <table className="border-solid border-4 border-white border-collapse table-auto ">
            <thead>
                <tr className="">
                    <th className="border-solid border-2 border-white p-3">Name</th>
                    <th className="border-solid border-2 border-white p-3 ">Date Of Birth</th>
                    <th className="border-solid border-2 border-white p-3 ">Address</th>
                    <th className="border-solid border-2 border-white p-3 ">Place Of Birth</th>
                    <th className="border-solid border-2 border-white p-3 ">Phone Number</th>
                    <th className="border-solid border-2 border-white p-3 ">Update</th>
                    <th className="border-solid border-2 border-white p-3 ">Delete</th>
                    {/* <th className="border-solid border-2 border-white p-3">Profile Pic</th> */}

                </tr>
            </thead>
            {
                props.array.map((contact, i) => (
                    <tbody>
                        <tr key={i} className="">
                            <td className="border-solid border-2 border-white p-3 ">{contact.fname + " " + contact.lname}</td>
                            <td className="border-solid border-2 border-white p-3 ">{contact.birthdate}</td>
                            <td className=" border-solid border-2 border-white p-3 ">{contact.address1 + " , " + contact.address2}</td>
                            <td className="border-solid border-2 border-white p-3 ">{contact.birthplace}</td>
                            <td className="border-solid border-2 border-white p-3 ">{contact.pnumber}</td>
                            <td className="border-solid border-2 border-white p-3 "><button onClick={() => props.updateData(i)} className="w-full py-1 rounded text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-5  text-center ">Update</button></td>
                            <td className="border-solid border-2 border-white p-3 "><button onClick={() => props.deleteData(i)} className="w-full py-1 rounded text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-5  text-center">Delete</button></td>
                            {/* <td className="border-solid border-2 border-white p-3 ">{contact.profilepic}</td> */}
                        </tr>
                    </tbody>
                ))
            }
        </table>
    </div>
}
export default Table;