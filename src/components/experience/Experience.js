import icon1 from '../../icons/experience/icon1.png';
import '../../sass/style.scss';
import Sample from '../sample/Sample';

const Experience = () => {
    return (
        <div className="experience">
            <Sample text="Досвід" title="Освіта та досвід роботи"/>

            <div className="experience_list_container">
                <p className="experience_list_learn"></p>
                <h5 className="experience_list__container_title1">Навчання та досвід</h5>

                <ul className="experience_list">
                    <li className="experience_list_item">
                        <div>
                            <h2 className="title_fz20">
                                <img src={icon1} alt="" /> ЦНТУ у м. Кропивницький
                            </h2>
                            <p>Бакалавр | Кропивницький (2014 - 2018)</p>
                            <p>Магістр | Кропивницький (2018 - 2020)</p>
                        </div>
                    </li>

                    <li className="experience_list_item">
                        <div>
                            <h2 className="title_fz20">
                                <img src={icon1} alt="" /> Курси Udemy
                            </h2>
                            <p>Web-розробник 2022</p>
                            <p>Повний курс JavaScript + Redux 2021</p>
                            <p>Повний курс по TypeScript 2021</p>
                        </div>
                    </li>

                    <li className="experience_list_item">
                        <div>
                            <h2 className="title_fz20">
                                <img src={icon1} alt="" />Інтернатура Onix
                            </h2>
                            <p>
                                4-ьох місячна інтернатура, основний акцент 
                                в якій робилось на вивченні React + Redux
                            </p>
                        </div>
                    </li>
                </ul>

                <p className="experience_list_work"></p>
                <ul className="experience_list">
                    <li className="experience_list_item">
                        <div>
                            <h2 className="title_fz20">
                                <img src={icon1} alt="" />Контент центр
                            </h2>
                            <p>
                                У 2018 році працював в контент центрі
                                де обробляв заявки кліентів інтернет магазинів
                                на платформі Joom
                            </p>
                        </div>
                    </li>

                    <li className="experience_list_item">
                        <div>
                            <h2 className="title_fz20">
                                <img src={icon1} alt="" /> Державна служба
                            </h2>
                            <p>З 2019 року знаходжусь на державній службі</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Experience;