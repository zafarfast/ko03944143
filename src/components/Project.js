function Project(props) {

    return (
        <div className="portfolio-card">
            <img className="portfolio-card-image" src={props.source}></img>
            <div className="portfolio-card-title"><a href={props.href}>{props.title}</a></div>
        </div>
    )
}

export default Project