import React from 'react'

import Social from './Social'

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <div className="Contacts">
          <div className="left">
             <h2>К о н т а к т ы</h2>
          </div>
          <div className="right">
            <div id="location">
              <h4>Адрес</h4>
              <p>Казахстан, Алматы</p>
              <h4>Социальные сети</h4>
              <Social />
            </div>
            <div id="phone">
              <h4>Телефон</h4>
              <p>8-705-950-02-52</p>
              <h4>Почта</h4>
              <p>d.sakhmet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="basement">
          <p>Powered on React</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
