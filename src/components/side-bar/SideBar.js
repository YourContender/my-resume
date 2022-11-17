import fc from '../../img/social/facebook.png';
import inst from '../../img/social/instagram.png';
import git from '../../img/social/github.png';
import '../../sass/style.scss'

const SideBar = () => {
    return (
        <div className="side_left">
                <div>
                    <span>
                        Зв'яжіться зі мною
                    </span>
                </div>

                <div className="side_left_line"></div>
                
                <div className="side_left_links">
                    <img src={fc} alt="facebook" />
                    <img src={inst} alt="instagram" />
                    <img src={git} alt="github" />
                </div>
            </div>
    )
}

export default SideBar;