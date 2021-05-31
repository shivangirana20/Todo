import React from 'react'

export const Footer = () => {
    
       let footerStyle = {
         
        border: "2px solid grey",
        width:"100%",
        position:"sticky"

       }
       return (
       <footer className="bg-dark text-light">
           <p className = "text-center py-3 my-3" style= {footerStyle} >
           Copyright &copy; TaskChecker.com.
           </p>
           
        </footer>
    )
} 
