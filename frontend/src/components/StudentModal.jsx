
import { useForm } from "react-hook-form"
import { updateStudent, createStudent } from "../services/api"
import toast from "react-hot-toast"

function StudentModal({ close, student }) {

const { register, handleSubmit } = useForm({
defaultValues: student
})

const submit = async(data)=>{

data.age = Number(data.age)

if(student){

 await updateStudent(student.id, data)
    toast.success("Student updated")
  }else{
    // CREATE NEW
    await createStudent(data)
    toast.success("Student added")
  }
  
close()

}

return(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center">

<motion.div
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
className="bg-white p-6 rounded-xl w-96"
>

<h2 className="text-xl font-bold mb-4">
Add Student
</h2>

<form onSubmit={handleSubmit(submit)} className="space-y-3">

<input
placeholder="Name"
className="border p-2 w-full"
{...register("name",{required:true})}
/>

<input
placeholder="Email"
className="border p-2 w-full"
{...register("email",{required:true})}
/>

<input
placeholder="Age"
type="number"
className="border p-2 w-full"
{...register("age",{required:true})}
/>

<button type="submit">
{student ? "Update Student" : "Add Student"}


Save

</button>

</form>

</motion.div>

</div>

)

}

export default StudentModal