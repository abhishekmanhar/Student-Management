import { useEffect,useState } from "react"
import { getStudents } from "../services/api"
import StudentTable from "../components/StudentTable"
import SearchBar from "../components/SearchBar"
import StudentModal from "../components/StudentModal"
import { exportExcel } from "../utils/exportExcel"
import LoadingSkeleton from "../components/LoadingSkeleton"
import { deleteStudent, updateStudent } from "../services/api"
import DashboardHeader from "../components/DashboardHeader"


function Dashboard(){

const [students,setStudents] = useState([])
const [loading,setLoading] = useState(true)
const [search,setSearch] = useState("")
const [showModal,setShowModal] = useState(false)
const [editingStudent,setEditingStudent] = useState(null)

useEffect(()=>{

getStudents().then(res=>{
setStudents(res.data)
setLoading(false)
})

},[])

const handleDelete = async(id)=>{

if(!confirm("Delete this student?")) return

await deleteStudent(id)

setStudents(students.filter(s => s.id !== id))

}

const handleEdit = (student)=>{

setEditingStudent(student)
setShowModal(true)

}


const filtered = students.filter(s =>
s.name.toLowerCase().includes(search.toLowerCase())
)



return(


<div className="p-8">

<DashboardHeader/>



<div className="flex justify-between mb-4">

<SearchBar value={search} onChange={setSearch}/>

<div className="flex gap-3">

<button
className="btn-primary"
onClick={()=>setShowModal(true)}
>
+ Add Student
</button>

<button
className="btn-primary"
onClick={()=>exportExcel(filtered)}
>
Export Excel
</button>

</div>

</div>




{loading
? <LoadingSkeleton/>
: <StudentTable
students={filtered}
onDelete={handleDelete}
onEdit={handleEdit}
/>
}

{showModal && (
<StudentModal
student={editingStudent}
close={()=>{
setEditingStudent(null)
setShowModal(false)
}}
/>


)}



</div>



)

}

export default Dashboard