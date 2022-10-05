import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="" target="_blanks"><BsLinkedin/></a>
        <a href="" target="_blanks"><BsGithub/></a>
        <a href="" target="_blanks"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials