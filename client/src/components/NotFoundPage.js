import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
export default class NotFoundPage extends Component
   {
     render()
     {
         return(
         <div>
           <nav className="navbar bg-dark">
            <h1>
              <Link to="/">Equality</Link>
            </h1>
</nav>
           <div className="page-header">
           <div className="content-container">
           <h1 className="page-header__title">
           The requested page does not exist.<br/><hr/>
           <Link className="button" to="/">Back to Dashboard</Link>
           </h1>
           
           
           </div>

           </div>
         </div>

         
         
         
     );
       
    
    }
    }