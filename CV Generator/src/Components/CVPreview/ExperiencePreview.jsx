function ExperiencePreview({experiences}) {
    return (
        <>
            <div className="previewItem">
                <h2><strong>Work Experience</strong></h2>
                {experiences.map((exp) => {
                    return (
                        <div key={exp.id} className="experienceItem">
                            <div>
                                <p><strong>{exp.position}</strong></p>
                                <p><strong>{exp.company}</strong> | {exp.start} - {exp.end}</p>
                            </div>
                            <p>{exp.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ExperiencePreview