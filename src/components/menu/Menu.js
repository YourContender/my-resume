import { useState } from 'react';
import '../../sass/style.scss';

const Menu = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (
        <div>
            {
                !displayMenu ? (
                    <div 
                        className="burger"
                        onClick={() => setDisplayMenu(true)}
                    >
                        <span></span>
                        <span className="long"></span>
                        <span></span>
                    </div>
                ) : (
                    <div className="menu">
                        <div className="menu_container">
                            <button
                                onClick={() => setDisplayMenu(false)}
                            >
                                X
                            </button>
                            
                            <ul className="menu_list">
                                <li>Про мене</li>
                                <li>Мій досвід</li>
                                <li>Мої навички</li>
                                <li>Мої роботи</li>
                                <li>Прайс-лист</li>
                                <li>Контакти</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Menu;