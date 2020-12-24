import React from 'react'
import "./Projects.css"

const renderBody = description => {
    console.log(description)
    return description.map((bulletPoint, index) => {
        const text = "- "
        const finalText = text + bulletPoint
        return (
			<div>
				<div key='index'>
                    {finalText}
                </div>
                <br />
			</div>
		);
    })


}


const ProjectCard = ({info, image}) => {
    const {title, description, linkTitle, link} = info;

    return (
        <div className="projects-wrapper">
            <h3 className='title-wrapper'>{title}</h3>
            <div className="project-body-wrapper">
                <div className="body-info">
                    {renderBody(description)}
                    <br />
                </div>
                <div className="body-image">
                    <img height={"280"} width={"435"} src={image} alt='' />
                </div>
            </div>
            <div className='projects-link'>
				<a href={link} target='_blank' rel='noopener noreferrer'>{linkTitle}</a>
			</div>
        </div>
    )
}

export default ProjectCard
