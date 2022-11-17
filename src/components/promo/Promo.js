import '../../sass/style.scss'
import SideBar from '../side-bar/SideBar';

function Promo() {
    return (
        <div className="promo">
            <SideBar />

            <div className="container">
                <div className="promo_user">
                    <div className="promo_subtitle">
                        <span>
                            Мене звати Сергій Саєнко
                        </span>
                    </div>

                    <div className="title">
                        <h1 className="title_fz38">
                            Я починаючий web-розробник з міста - Кривий Ріг
                        </h1>
                    </div>

                    <div className="promo_links">
                        <a href="#">Портфоліо</a>
                        <a href="#">про мене</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;