import React from 'react'

class About extends React.Component {
  render () {
    return(
      <div className="about">
        <aside className="avatar">
          <img src={require('../components/assets/img/me2.png')}/>
        </aside>
        <section>
          <h1>About me</h1>
          <p>
            Меня зовут Данабек. год назад переехал в Алматы с целью стать программистом
            Мой первый проект был чат-бот на python
            Закончил несколько курсов по веб-разработке.
            Пойже выдвинул проект c командой на hackaton 2018
            В свободное время выполняю заказы на freelance.
            в данное время изучаю React js
          </p>
        </section>
      </div>
    )
  }
}

export default About;
