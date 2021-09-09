import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {create, update, setSelectedUser} from "../store/actions";

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser
  }
}

const mapDispatchToProps = {
  create,
  update,
  setSelectedUser
}

const Form = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    return () => {
      props.setSelectedUser(getNewUser());
    }
  }, []);

  useEffect(() => {
    if (id !== "new") {
      setUser(props.selectedUser);
    } else {
      setUser(getNewUser());
    }
    setError({});
  }, [props.selectedUser]);

  function getNewUser() {
    return {
      id: "",
      name: "",
      email: "",
      phone: ""
    }
  }

  function changeInput(inputName, value) {
    setUser({
      ...user,
      [inputName]: value
    });
  }

  function saveUser() {
    if (validateForm()) {
      if (id === "new") {
        props.create(user);
      } else {
        props.update(user);
      }
      history.push("/contacts");
    }
  }

  function validateForm() {
    let errors = {};
    let isValid = true;

    if (!user.name.trim()) {
      isValid = false;
      errors["name"] = "Name field cannot be empty";
    } else {
      if (user.name.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors["name"] = "Please enter only letters";
      }
    }

    const pattern = new RegExp(/^[0-9\b]+$/);
    if (!user.phone.trim()) {
      isValid = false;
      errors["phone"] = "Phone field cannot be empty";
    } else if (!pattern.test(user.phone)) {
      isValid = false;
      errors["phone"] = "Please enter only numbers";
    }

    if (!user.email.trim()) {
      isValid = false;
      errors["email"] = "Email field cannot be empty";
    } else {
      let lastAtPos = user.email.lastIndexOf('@');
      let lastDotPos = user.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
        user.email.indexOf('@@') === -1 &&
        lastDotPos > 2 && (user.email.length - lastDotPos) > 2)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    setError(errors);
    return isValid;
  }

  return(
    <form className='login-form'>
      {
        Object.keys(user).filter(key => key !== "id").map(key =>
          <FormInput
            key={key}
            inputName={key}
            inputValue={user[key]}
            error={error}
            changeInput={changeInput}
          />
        )
      }
      <div className="button-wrapper">
        <div className='lf--submit' onClick={() => {saveUser()}}>
          {id === "new" ? "CREATE" : "SAVE"}
        </div>
        <Link className='lf--submit' to="/contacts">CANCEL</Link>
      </div>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
