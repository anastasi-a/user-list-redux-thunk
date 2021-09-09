import React from "react";
import UserItem from "./UserItem";
import {useRouteMatch, Link, Route} from "react-router-dom";
import {Switch} from "react-router";
import Form from "./Form";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const UserList = (props) => {
  let { path, url } = useRouteMatch();

    return(
      <>
        <div className="container">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Name</div>
              <div className="col col-2">Phone</div>
              <div className="col col-3">Email</div>
              <div className="col col-4"> </div>
            </li>
            {
              props.users.map(user =>
                <UserItem
                  key={user.id}
                  user={user}
                />
              )
            }
          </ul>
        </div>
        <Switch>
          <Route exact path={path}>
            <Link className="add-button" to={`${url}/new`}>ADD NEW CONTACT</Link>
          </Route>
          <Route path={`${path}/:id`}>
            <Form />
          </Route>
        </Switch>
      </>
    )
}

export default connect(mapStateToProps)(UserList);
