import { FaEdit, FaTrash } from "react-icons/fa";

function StudentTable({ students, onEdit, onDelete }) {

return (

<div className="glass-card overflow-hidden">

<table className="w-full text-left">

<thead className="bg-white/30">

<tr>
<th className="p-4">Name</th>
<th>Email</th>
<th>Age</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{students.map(student=>(
<tr key={student.id} className="border-t">

<td className="p-4">{student.name}</td>
<td>{student.email}</td>
<td>{student.age}</td>

<td className="flex gap-2 p-4">

<button
className="btn-icon text-blue-600"
onClick={()=>onEdit(student)}
>
✏️
</button>

<button
className="btn-icon text-red-600"
onClick={()=>onDelete(student.id)}
>
🗑
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default StudentTable