function EducationPreview({education}) {
    return (
        <>
            <div className="previewItem">
                <h2><strong>Education</strong></h2>
                {education.map((edu) => {
                    return (
                        <div key={edu.id} className="educationItem">
                            <p><strong>{edu.course}</strong></p>
                            <p><strong>{edu.university}</strong> | {edu.start} - {edu.end}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default EducationPreview