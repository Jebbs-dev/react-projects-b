import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import AuthContext from "../Store/auth-context";
import {
  FormContainer,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormButtonContainer,
  Button,
} from "./LoginInformationStyles";

const emailReducer = (state, action) => {
  // The state signifies the last state
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [inputEmail, setInputEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [inputPassword, setInputPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // This is object destructuring to pull out certain properties of objects
  // We assign an alias to the extracted property

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    // It runs after every component render cycle
    const identifier = setTimeout(() => {
      // Debouncing: Prevention of action on every keystroke
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      // This is a cleanup function. It runs as a cleanup process before useeffect executes the function again. It runs before every new side-effect funtion execution and before the component is removed.
      clearTimeout(identifier);
      // This makes sure that whenever the cleanup function runs, the set timer is cleared, before setting a new one.
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //This is to update the value of the email input
    // normal convention uses a string in all caps and an identifier that is understandable
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // This object has a field thta holds an identifier and a name 'type'
    // This whole object is our action
    // The payload is added because we want to save the what the user entered

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // This is to update the validity of the email input
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <FormContainer className="template">
      <FormElement onSubmit={submitHandler}>
        <FormInputContainer
          className={emailState.isValid === false ? "invalid" : ""}
        >
          <FormLabel htmlFor="email">E-Mail</FormLabel>
          <FormInput
            type="email"
            id="email"
            ref={emailInputRef}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </FormInputContainer>
        <FormInputContainer
          className={passwordState.isValid === false ? "invalid" : ""}
        >
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            ref={passwordInputRef}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </FormInputContainer>
        <FormButtonContainer>
          <Button type="submit" className="butt">
            Login
          </Button>
        </FormButtonContainer>
      </FormElement>
    </FormContainer>
  );
};

export default Login;
