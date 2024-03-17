import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <div className='profile'>
      <div className='profileName' style={{backgroundColor:'black',color:'white'}}>
        <span ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        </span>
        <div><h3>user full name</h3> <span>123 Posts</span></div>
      </div>
      <div className='profile_Image'>
        <div></div>
        <span>
        <img src='https://pbs.twimg.com/profile_images/1040490041192046592/lx2fO-AC_400x400.jpg' alt='user' />
        <button>Edit profile</button>
        </span>
      </div>
      <div className='profileText'>
      <div><h3>user full name</h3> <span>username</span></div>
      <span>73 Following  9 Followrs</span>
      </div>
    </div>
  )
}

export default Profile
