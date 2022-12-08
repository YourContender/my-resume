const CurrentSkill = ({ img, title, text }) => {
    return (
        <div className="skills_list_item">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="skills_list_item_text">
                <h2>{title}</h2>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default CurrentSkill;