function DeleteModal({ student, onConfirm, onCancel }) {

  if (!student) return null

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl p-6 w-96 shadow-xl">

        <h2 className="text-xl font-semibold mb-4">
          Delete Student
        </h2>

        <p className="mb-6 text-gray-600">
          Are you sure you want to delete
          <span className="font-semibold"> {student.name}</span> ?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(student.id)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  )

}

export default DeleteModal