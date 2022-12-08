import { data } from "../../data";
import CurrentSkill from "./current-skill/CurrentSkill";
import Sample from '../sample/Sample';
import SkillProgress from "./skill-progress/SkillProgress";

const Skills = () => {
    return (
        <div className="skills">
            <Sample text="Вміння" title="Що я використовую у роботі"/>

            <div className="skills_list">
                {
                    data.map(item => {
                        return (
                            <CurrentSkill 
                                img={item.img} 
                                title={item.title} 
                                text={item.text}
                            />
                        )
                    })
                }
            </div>

            <div className="skills_progress">
                {
                    data.map(item => {
                        return (
                            <SkillProgress 
                                title={item.title} 
                                progress={item.progress}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;