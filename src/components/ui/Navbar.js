import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {
    const { user: { name } ,dispatch} = useContext(AuthContext)
    const history = useHistory()
    const handleLogout = ()=>{
        const action = {type:types.logout} 
        dispatch(action)
        history.push("/login")
        
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark align-items-baseline d-flex">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                   
                    {name ?
                        <><li className='nav-item nav-link'>
                            <p className='text-primary'>Bienvenido {name}</p>
                        </li>
                         <li className='nav-item nav-link' >
                         <button
 
                             className="btn btn-outline-primary"
                             onClick={handleLogout}
                         >
                             Logout
                         </button>
                     </li></>
                     :  <NavLink
                     activeClassName="active"
                     className="nav-item nav-link"
                     exact
                     to="/login"
                 >
                     Login
                 </NavLink>
                    }
                   

                </div>
          

       

             
               
              
            </div>
        </nav>
    )
}
export default Navbar;