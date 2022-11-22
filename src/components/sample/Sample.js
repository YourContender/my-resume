const Sample = ({ text, title }) => {
    return (
        <div className="sample">
            <div className="sample_title">
                <span>{text}</span>
                <h1 className="title_fz38">
                    {title}
                </h1>
            </div>

            <div className="sample_line"></div>
        </div>
    )
}

export default Sample;