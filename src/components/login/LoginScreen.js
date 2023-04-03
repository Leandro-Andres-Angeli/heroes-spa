import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
  const {dispatch} = useContext(AuthContext)
  // console.log(context)
  const handleLogin = () => {
    // history.push('/');
    // history.replace('/');
    const action={type:types.login,payload:{name:"Leandro"} }
    const lastPath =localStorage.getItem("lastPath")|| '/'
    dispatch(action)
      history.replace(lastPath);
  };
  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        Login{' '}
      </button>
    </div>
  );
};

export default LoginScreen;
