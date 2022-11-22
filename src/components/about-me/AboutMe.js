import photo from '../../img/photo.jpg';
import icon1 from '../../icons/icon1.png';
import icon3 from '../../icons/icon3.png';

const AboutMe = () => {
    return (
        <div className="about">
            <div className="about_photo">
                <img src={photo} alt="photo" />
            </div>

            <div className="about_descr">
                <div className="about_descr_subtitle">
                    <span>Про мене</span>
                </div>

                <div className="title_fz20">
                    <h1>Мене звати Сергій</h1>
                </div>

                <div className="about_descr_line"></div>

                <div className="about_descr_me">
                    <p>
                        Мені 25 років, я з міста - Кривий Ріг. Близько півтора року вивчаю web-розробку,
                        проходив курси на різних платформах, такі як ITVDN, Udemy та на YouTube. 
                        На основі вивченого, розробляю проекти, щоб теорію закріпити практикою.
                    </p>
                </div>

                <div className="about_descr_container">
                    <div className="about_descr_curse">
                        <div>
                            <h2><img src={icon1} alt="" /> Курси Udemy</h2>

                            <ul>
                                <li>Web-розробник 2022</li>
                                <li>Повний курс JavaScript + Redux</li>
                                <li>Повний курс по TypeScript</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about_descr_curse">
                        <div>
                            <div>
                                <h2><img src={icon1} alt=""/> Курси ITVDN</h2>
                                <ul>
                                    <li>React Базовий</li>
                                    <li>JavaScript Базовий 2021</li>
                                    <li>JavaScript Стартовий 2021</li>
                                    <li>ECMAScript 6</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about_descr_curse">
                        <div>
                            <h2><img src={icon3} alt="" /> Інтернатура в компанії Onix 2022</h2>
                            <span>
                                4-ьох місячна інтература, по успішному закінченню якої,
                                отримав сертифікат та запрошення на співбесіду, яку теж
                                успішно пройшов.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;