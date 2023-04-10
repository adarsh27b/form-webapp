import React, { useState } from "react";
import ResetObject from "./ResetObject";
import FutureDateChecker from "../helperfunction/FutureDateChecker";



const InputForm = ({ array, setArray, addFormData, bolin, index, setBolin, setAddFormData }) => {
    let nregex = /^[A-Za-z]+$/;
    let dregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    let { fname, lname, birthdate, address1, address2, birthplace, pnumber, profilepic } = addFormData
    const [formError, setFormError] = useState({})

    const formChangeDataHandler = (event) => {
        event.preventDefault();
        setAddFormData({ ...addFormData, [event.target.name]: event.target.value })
    }

    const validateFormHandler = () => {
        let err = {}
        if (addFormData.fname === '') {
            err.fname = 'First Name required!'
        } else if (addFormData.fname.length < 2) {
            err.fname = 'Atleast Two character required!'
        } else {
            if (!nregex.test(addFormData.fname)) {
                err.fname = 'Enter only alphabetical value'
            }
        }

        if (addFormData.lname === '') {
            err.lname = 'Last Name required!'
        } else if (addFormData.lname.length < 2) {
            err.lname = 'Atleast Two character required!'
        } else {
            if (!nregex.test(addFormData.lname)) {
                err.lname = 'Enter only alphabetical value'
            }
        }

        if (addFormData.address1 === '') {
            err.address1 = 'Address required!'
        } else if (addFormData.address1.length < 5) {
            err.address1 = 'Atleast Five character required!'
        }

        if (addFormData.address2 === '') {
            err.address2 = 'Address required!'
        } else if (addFormData.address2.length < 5) {
            err.address2 = 'Atleast Five character required!'
        }

        if (addFormData.birthplace === '') {
            err.birthplace = 'Birth Place required!'
        } else if (addFormData.birthplace.length < 2) {
            err.birthplace = 'Atleast Two character required!'
        } else {
            if (!nregex.test(addFormData.birthplace)) {
                err.birthplace = 'Enter only alphabetical value'
            }
        }

        if (addFormData.pnumber === '') {
            err.pnumber = 'Phone Number required!'
        } else if (addFormData.pnumber.length < 10) {
            err.pnumber = 'Atleast Ten character required!'
        } else {
            if (dregex.test(addFormData.pnumber)) {
                err.pnumber = 'Enter only numeric value'
            }
        }
        FutureDateChecker()
        if (addFormData.birthdate === '') {
            err.birthdate = 'Birth Date required!'
        } else if (FutureDateChecker(addFormData.birthdate)) {
            err.birthdate = "Can not enter Future Date"
        }

        const FileValidChecker = (img) => {
            console.log(img, 'image')
            if (!img.includes(".jpg") && !img.includes(".png")) {
                return true;
            }
            return false;
        }

        if (addFormData.profilepic === '') {
            err.profilepic = 'Select any one file'
        } else if (FileValidChecker(addFormData.profilepic)) {
            err.profilepic = 'Only select jpg or png file'
        }

        setFormError({ ...err })
        console.log()
        return Object.keys(err) < 1;
    }

    const updateInfoHandler = (event) => {
        event.preventDefault()
        if (addFormData.fname === "" || addFormData.fname.length < 2 || !nregex.test(addFormData.lname) ||
            addFormData.lname === "" || addFormData.lname.length < 2 || !nregex.test(addFormData.lname) ||
            addFormData.birthdate === "" || FutureDateChecker(addFormData.birthdate) ||
            addFormData.address1 === "" || addFormData.address1.length < 5 ||
            addFormData.address2 === "" || addFormData.address2.length < 5 ||
            addFormData.birthplace === "" || addFormData.birthplace.length < 2 || !nregex.test(addFormData.birthplace) || addFormData.profilepic === '' ||
            addFormData.pnumber === "" || addFormData.pnumber.length < 10
        ) {
            return validateFormHandler();
        }
        let total = [...array]
        total.splice(index, 1, { fname, lname, birthdate, address1, address2, birthplace, pnumber, profilepic })
        setArray(total)
        setBolin(false)
        setAddFormData(ResetObject)
        let isValid = validateFormHandler()
        if (!isValid) {
            return
        }
        event.target.reset()
    }


    const addFormSubmitHandler = (event) => {
        event.preventDefault();
        if (
            addFormData.fname === "" || addFormData.fname.length < 2 || !nregex.test(addFormData.lname) ||
            addFormData.lname === "" || addFormData.lname.length < 2 || !nregex.test(addFormData.lname) ||
            addFormData.birthdate === "" || FutureDateChecker(addFormData.birthdate) ||
            addFormData.address1 === "" || addFormData.address1.length < 5 ||
            addFormData.address2 === "" || addFormData.address2.length < 5 ||
            addFormData.birthplace === "" || addFormData.birthplace.length < 2 || !nregex.test(addFormData.birthplace) || addFormData.profilepic === '' ||
            addFormData.pnumber === "" || addFormData.pnumber.length < 10
        ) {
            return validateFormHandler();
        }
        setArray([...array, { fname, lname, birthdate, address1, address2, birthplace, pnumber, profilepic }])
        setAddFormData(ResetObject)
        let isValid = validateFormHandler()
        if (!isValid) {
            return
        }
    }

    return (
        <div className="flex flex-col w-full  sm:w-full md:w-screen lg:w-2/5 xl:w-2/5 ">
            <h1 className="font-bold text-center h-14 p-4 italic font-serif text-lg">Input Form</h1>
            <div className="sm:flex sm:justify-center flex justify-center">
                <form onSubmit={!bolin ? addFormSubmitHandler : updateInfoHandler}>
                    <div className="flex flex-col w-72 sm:w-80 md:w-96 leading-8 px-6 py-3 border-double border-4 border-white rounded-lg font-serif font-medium mb-6">

                        <label htmlFor="fname" className="">First Name: </label>
                        <input type="text" id="fname" value={addFormData.fname || ""} name='fname' placeholder="Enter your First Name" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-md text-black\\\\"></input>
                        <span className="text-red-500 text-xs">{formError.fname}</span>

                        <label htmlFor="lname">Last Name: </label>
                        <input type="text" id="lname" value={addFormData.lname || ""} name='lname' placeholder="Enter your Last Name" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-lg text-black" />
                        <span className="text-red-500 text-xs">{formError.lname}</span>

                        <lable htmlFor="profilepic">Profile Pic: </lable>
                        <input type="file" id="profilepic" value={addFormData.profilepic || ""} name='profilepic' placeholder="Enter your Profile Pic" onChange={formChangeDataHandler} className="border-solid border-2 text-black border-white rounded-lg file:rounded-lg file:border-0" />
                        <span className="text-red-500 text-xs">{formError.profilepic}</span>

                        <lable htmlFor="birthdate">Birth Date: </lable>
                        <input type="date" id="birthdate" value={addFormData.birthdate || ""} name='birthdate' placeholder="Enter your BirthDate" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-lg text-black " />
                        <span className="text-red-500 text-xs">{formError.birthdate}</span>

                        <label htmlFor="address1">Address Line 1: </label>
                        <textarea id="address1" value={addFormData.address1 || ""} rows="2" cols="25" name='address1' placeholder="Enter your Address" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-lg  text-black" />
                        <span className="text-red-500 text-xs">{formError.address1}</span>

                        <label htmlFor="address2">Address Line 2: </label>
                        <textarea id="address2" value={addFormData.address2 || ""} rows="2" cols="25" name='address2' placeholder="Enter your Address" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-lg text-black" />
                        <span className="text-red-500 text-xs">{formError.address2}</span>

                        <label htmlFor="birthplace">Place Of Birth: </label>
                        <input type="text" id="birthplace" value={addFormData.birthplace || ""} name='birthplace' placeholder="Enter your Birth Place" onChange={formChangeDataHandler} className="border-solid border-2 border-white rounded-lg text-black" />
                        <span className="text-red-500 text-xs">{formError.birthplace}</span>

                        <label htmlFor="pnumber">Phone Number: </label>
                        <input type="text" id="pnumber" value={addFormData.pnumber || ""} name='pnumber' placeholder="Enter your Phone Number" onChange={formChangeDataHandler} className=" text-black border-solid border-2 border-white rounded-lg " />
                        <span className="text-red-500 text-xs">{formError.pnumber}</span>

                        <div className="py-3">
                            <button type="submit" className=" w-full mt-3 py-2  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm text-center ">{!bolin ? `Submit` : `Update Data`}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputForm;