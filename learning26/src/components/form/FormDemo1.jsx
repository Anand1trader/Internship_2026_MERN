import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit}=useForm()
    const [userData,setuserData]=useState({})
    const [isSubmited,setisSubmited]=useState(false)
    const submitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }
  return (
    <div>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='enter name' {...register("firstName")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE:<input type='radio' value="male" {...register("gender")}></input>
                FEMALE:<input type='radio' value="female" {...register("gender")}></input>
            </div>
            <div>
                <label>HOBBIES</label><br></br>
                CRICKET :<input type='chechbox' value="cricket" {...register("hobbies")}></input>
                TRAVEL :<input type='chechbox' value="travel" {...register("hobbies")}></input>
                SCROLLING :<input type='chechbox' value="scrolling" {...register("hobbies")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubmited == true && <div>
                <h1>OUTPUT</h1>
                <h1>Name = {userData.firstName}</h1>
                <h2>Age={userData.age}</h2>
            
            </div>
        }
    </div>
  )
}
