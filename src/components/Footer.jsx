import React from 'react'
import css from '/home/janewmwaura/ecommerce/amazon-starterpack/src/components/Footer.module.css'
import logo from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/logo.png'
import {
    InboxIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
       <hr />
       <div className={css.cFooter}>
        <div className={css.logo}>
         <img src={logo} alt="" />
         <span>amazon</span>
        </div>
        <div className={css.block}>
         <div className={css.detail}>
             <span>Contact Us</span>
             <span className={css.pngLine}>
              
              <InboxIcon className={css.icon}/>
              <span>support@amazon.com</span>
             </span>
             
         </div>
         
        </div>
        <div className={css.block}>
         <div className={css.detail}>
             <span>Account</span>
             <span className={css.pngLine}>
              <LoginIcon className={css.icon}/>
              <span>sign in</span>
             </span>
             
         </div>
         
        </div>
        <div className={css.block}>
         <div className={css.detail}>
             <span>Company</span>
             <span className={css.pngLine}>
              <UsersIcon className={css.icon}/>
              <span>About Us</span>
             </span>
             
         </div>
         
        </div>
        <div className={css.block}>
         <div className={css.detail}>
             <span>Resources</span>
             <span className={css.pngLine}>
              <LinkIcon className={css.icon}/>
              <span>Safety Privacy & Terms</span>
             </span>
             
         </div>
         
        </div>

        
        
       </div>
       <div className={css.copyright}>
       <span>Copyright ©2022 by Amazon, Inc.</span>
       <span>All rights reserved.</span>
       </div>
    </div>
  )
}

export default Footer