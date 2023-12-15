import React from 'react';
//import icons
import { 
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImYoutube,  

} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
  <ul className='flex gap-x-4'>
    <li><a href='https://www.facebook.com/joel48almeida' target='_blank'>
      <ImFacebook />
    </a></li>
    <li><a href='https://www.youtube.com/@joelalmeida2578' target='_blank'>
      <ImYoutube />
    </a></li>
    <li><a href='https://www.instagram.com/joel_richie_photography/' target='_blank'>
      <ImInstagram />
    </a></li>    
  </ul>
  </div>;
};

export default Socials;
