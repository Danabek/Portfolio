import React from 'react'
import './style.css'

class Resume extends React.Component {
  render () {

    return(
      <>
          <div className="mainTitle">
            <img src={require('../../components/assets/img/Almatinka.jpg')} alt=''/>
            <div className='layout'></div>
            <div className="main-title">
              <h1>Сахмет Данабек Базарбек</h1>
              <h2>Web-разработчик</h2>
              <p>
                22 год, Алматы Гражданин Рк, неженат   <br />
              <span><img src={require('../../components/assets/img/LinkedIn-icon.png')} alt=''/></span>
              <span><img src={require('../../components/assets/img/hh-logo.png')} alt=''/></span>
              <br />

              Резюме на <a href="https://hh.kz/applicant/resumes/view?resume=4f86df33ff03b09ed40039ed1f446849343551" target="blank">HeadHunter </a>  <br />
              телефон: 8-705-950-02-52 (beeline) <br />
            почта: d.sakhmet@gmail.com
              </p>
            </div>
          </div>
          <div className="Resume">


            <div>
              <h2>Н а в ы к и</h2>
            </div>
            <div>
            <ul className="skills">
              <li>  Глубокое знание HTML5/CSS3, GRID CSS, flexbox , Семантическая верстка, Доступность (WAI-ARIA стандарт)</li>
              <li>Знание Javasript(Ecmascript6 ), DOM( работа со страницей Элементы, их содержимое, координаты, обработчики событий)</li>
              <li>Опыт работы с системой контроля версий GIT</li>
              <li>Кроссбраузерная и кроссплатформенная верстка, адаптивный дизайн</li>
              <li>Владение графическими редакторами Photoshop, Figma</li>
              <li>Навык работы с CSS препроцессорами (SCSS)</li>
              <li>Создание React приложений</li>
              <li>Тестирование сайтов (Google page speed)</li>
              <li>SEO оптимизация сайта</li>

            </ul>
            </div>


            <div>
              <h2>О б р а з о в а н и е</h2>
            </div>
            <div>
              <p>Средне-специальное (ЖПК)</p>
            </div>

            <div>
              <h2>Д о п о л н и т е л ь н а я </h2> <h2>о б р о з о в а н и е</h2>
            </div>
            <div>
            <ul>
              <li>Основы кодинга на Python <span>Method июль - август 2018</span></li>
              <li>HTML , CSS , Java разработка<span>Decode июль - август 2018</span> </li>
            </ul>
          </div>
          <div>

              <h2>Д о п о л н и т е л ь н а я </h2><h2>и н ф о р м а ц и я</h2>

            </div>
            <div>
            <p>английски Pre-intermedia</p>
          </div>
          <div>

              <h2>Л и ч н ы е</h2><h2>к а ч е с т в а</h2>

            </div>
            <div>
            <p>Трудолюбивый <br />  Собледение дедлайнов</p>

          </div>
        </div>
        </>
    )
  }
}



export default Resume;
