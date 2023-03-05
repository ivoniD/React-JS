import { useState, useEffect } from "react"
import { UserDetails } from "./user-details/UserDetails"
import { UserItem } from "./user-item/UserItem"
import * as userService from "../../services/userService"
import { UserEdit } from "./user-edit/UserEdit"
import { UserAction } from "../../const/userActions"
import { UserDelete } from "./user-delete/UserDelete"
import { UserAddNew } from "./UserAddNew"


export const UserList = () => {

  const [users, setUsers] = useState([]);
  const [userAction, setUserAction] = useState({ user: null, action: null })


  useEffect(() => {
    userService.getAll()
    .then(users => setUsers(users))
  }, [])


  const showCurrentClickedHandler = (id, action) => {
    userService.getOne(id)
      .then(user => {
        setUserAction({ user, action: action })
      })
  }

  const createUserOpenHandler = () => {
    setUserAction({
      action: UserAction.Add
    })
  }

  const deleteHandler = (id) => {
    console.log(id)
    userService.deleteOne(id)
 
  }


  const closeHandler = () => {
    setUserAction({ user: null, action: null })
  }

  const userCreateHandler = (userData) => {
    userService.create(userData)
      .then(user => {
        // setUsers(oldUsers => [...oldUsers, user])
        console.log(user);
        closeHandler()
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <>
      <div className="table-wrapper">

        {/* overlapComponents */}
        {userAction.action === UserAction.Details && <UserDetails details={userAction.user} close={closeHandler} />}

        {userAction.action === UserAction.Edit && <UserEdit userData={userAction.user} close={closeHandler} />}

        {userAction.action === UserAction.Delete && <UserDelete userData={userAction.user} close={closeHandler} deleteSelected={deleteHandler} />}

        {userAction.action === UserAction.Add && <UserAddNew close={closeHandler} addNewUser={userCreateHandler} />}


        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className=" icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className=" icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className=" icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className=" icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>UserActions</th>
            </tr>
          </thead>
          <tbody>

            {users.map(x => <UserItem key={x._id} {...x} click={showCurrentClickedHandler} />)}
            {/* {users.map(x => <UserItem key={x._id} {...x} click={showCurrentClickedHandler} />)} */}

          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={createUserOpenHandler}>Add new user</button>
    </>
  )
}