import React, {Component} from 'react'

const Social = () => (
    <nav className="Social">
      <ul>
        <li>
          <a >
            <img alt="instagram" href="https://instagram.com/mr.sakhmet" src={require('./assets/img/instagram.png')}/>
          </a>
        </li>
        <li>
          <a>
           <img alt="twitter"  src={require('./assets/img/twitter.png')}/>
          </a>
        </li>
        <li>
          <a>
           <img alt="gmail" src={require('./assets/img/gmail.png')}/>
          </a>
          </li>
        <li>
          <a>
            <img alt="whatsapp" src={require('./assets/img/whatsapp.png')}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Danabek"  target="blank">
           <img alt="github" src={require('./assets/img/github.png')}/>
          </a>
        </li>
      </ul>
    </nav>

)

export default Social
