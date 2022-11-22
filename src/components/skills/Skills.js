import Sample from "../sample/Sample";
import html from '../../img/skills/html5.png';
import css from '../../img/skills/css3.png';
import js from '../../img/skills/js.png';
import react from '../../img/skills/react.png';

const Skills = () => {
    return (
        <div className="skills">
            <Sample text="Вміння" title="Що я використовую у роботі"/>

            <div className="skills_list">
                <div className="skills_list_item">
                    <div>
                        <img src={html} alt="" />
                    </div>

                    <div className="skills_list_item_text">
                        <h2>HTML 5</h2>
                        <span>
                            Саме він створює каркас вашого сайту або програми, 
                            а п'ята версія дозволить мені створювати більш 
                            SEO-оптимізовану структуру вашого продукту
                        </span>
                    </div>
                </div>

                <div className="skills_list_item">
                    <div>
                        <img src={css} alt="" />
                    </div>

                    <div className="skills_list_item_text">
                        <h2>CSS 3</h2>
                        <span>
                            Ця мова стилів дозволяє мені створювати абсолютно 
                            будь-який зовнішній вигляд вашого сайту або програми. 
                            Все обмежується лише вашою фантазією!
                        </span>
                    </div>
                </div >

                <div className="skills_list_item">
                    <div>
                        <img src={js} alt="" />
                    </div>

                    <div className="skills_list_item_text">
                        <h2>JavaScript</h2>
                        <span>
                            Ця мова програмування дозволяє оживити все, що завгодно: 
                            слайдери, вікна, підказки, вкладки, отримання даних від 
                            сервера та багато іншого
                        </span>
                    </div>
                </div>

                <div className="skills_list_item">
                    <div>
                        <img src={react} alt="" />
                    </div>

                    <div className="skills_list_item_text">
                        <h2>React</h2>
                        <span>
                            Ця бібліотека дозволяє створювати веб-додатки. Ми можемо 
                            створити максимально інтерактивний продукт саме під ваші цілі
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;