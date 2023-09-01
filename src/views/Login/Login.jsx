

import Form from "../../components/Form/Form";
// import Vortice from "../../components/common/Vortice";

import styles from "./login.module.css";

  /**
 * This function represents the Login page
 * 
 * @returns {React.JSX}
 */

const Login = ({loginFunction}) => {
  return (
    
    <div>
      <Form loginFunction= {loginFunction} />
      {/* <Vortice/> */}
    </div>
    
  );
};

export default Login;
