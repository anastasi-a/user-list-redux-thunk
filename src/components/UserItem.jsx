import React from "react";
import {connect} from "react-redux";
import {useHistory, useRouteMatch} from "react-router-dom";
import {remove, setSelectedUser} from "../store/actions";

const mapDispatchToProps = {
  remove,
  setSelectedUser
}

const UserItem = (props) => {
  let { path } = useRouteMatch();
  const history = useHistory();

  function editUser() {
    props.setSelectedUser(props.user);
    history.push(`${path}/${props.user.id}`);
  }

  return(
    <li className="table-row">
      <div className="col col-1">{props.user.name}</div>
      <div className="col col-2">{props.user.phone}</div>
      <div className="col col-3">{props.user.email}</div>
      <div className="col col-4">
        <button
          className="edit"
          onClick={editUser}
        >✎</button>
        <button
          className="edit"
          onClick={() => {props.remove(props.user.id)}}
        >✗</button>
      </div>
    </li>
  )
}

export default connect(null, mapDispatchToProps)(UserItem);
