import { Delete } from "@mui/icons-material";
import { DummyData } from "../../api/DummyData";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, dltAllUser, addUser } from "../../store/slice/UserSlice";

const StudentList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    })

    const addUserItems = (UserName) => {
        dispatch((addUser(UserName)));
    }
    const handleDltSingleUser = (id) => {
        dispatch(removeUser(id))
    }
    const handleClearUserList = () => {
        dispatch(dltAllUser())
    }
    // console.log(data)
    return (
        <>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>List of Student</th>
                        <th colSpan="2" className="text-end"><button className="btn btn-secondary" onClick={() => addUserItems(DummyData())}>Add Student</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((users, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{users}</td>
                                    <td className="text-end">
                                        <Delete className="link-danger custom-pe" onClick={() => handleDltSingleUser(id)} ></Delete> 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <thead>
                    <tr>
                        <td colSpan="3" className="text-end">
                            <button className="btn btn-warning" onClick={handleClearUserList}>Clear</button>
                        </td>
                    </tr>
                </thead>
            </table>
        </>
    )
}
export default StudentList;