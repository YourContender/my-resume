const SkillProgress = ({ progress, title }) => {
    const percent = 350 * (progress * 0.01);
    
    return (
        <div className="skills_progress_list">
            <div className="skills_progress_container">
                <div className="skills_progress_container_name">
                    <span>{title}</span>
                </div>

                <div className="skills_progress_container_percent">
                    <p>{progress}</p>
                </div>

            </div>
            
            <div className="skills_progress_line">
                <div className="skills_progress_line_item"></div>
                <div className="skills_progress_line_active" style={{width: percent}}></div>
            </div>
        </div>
    )
}

export default SkillProgress;