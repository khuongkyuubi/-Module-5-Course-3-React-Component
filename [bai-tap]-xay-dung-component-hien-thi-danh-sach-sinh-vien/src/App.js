import {useState} from "react";


const employeeList = [
    {
        id: 1,
        name: "Maria",
        email: "maria@gmail.com",
        address: "New York,NY",
        phone: "0987654"
    },
    {
        id: 2,
        name: "Maria 2",
        email: "maria2@gmail.com",
        address: "New York,NY 2",
        phone: "09876542"
    },
    {
        id: 3,
        name: "Maria 3",
        email: "maria@gmail.com 3",
        address: "New York,NY 3",
        phone: "0987654 3"
    }
]

function App() {

    const [employee, setEmployee] = useState(employeeList);
    const [staff,setStaff] = useState({});
    const deleteStaff = (staffID) => {
        setEmployee((prev) => prev.filter((staff)=> staff.id !== staffID ))

    }
    const chooseStaff = (staff) => {
        setStaff(staff)
    }


    return (
        <div>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Employees</b></h2>
                                </div>

                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {employee.map((staff, index) => {
                                return (
                                    <tr key={staff.id}>
                                        <td>
                                        </td>
                                        <td>{staff.name}</td>
                                        <td>{staff.email}</td>
                                        <td>{staff.address}</td>
                                        <td>{staff.phone}</td>
                                        <td>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"
                                               onClick={()=> chooseStaff(staff) } >
                                                <i
                                                    className="material-icons" data-toggle="tooltip"
                                                    title="Delete"></i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal"
                                       defaultValue="Cancel"/>
                                <input type="submit" className="btn btn-success" defaultValue="Add"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal"
                                       defaultValue="Cancel"/>
                                <input type="submit" className="btn btn-info" defaultValue="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete {staff.name} Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal"
                                       defaultValue="Cancel"/>
                                <input type="submit" onClick={()=>deleteStaff(staff.id)} className="btn btn-danger " data-dismiss="modal" defaultValue="Delete"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )


}

export default App
