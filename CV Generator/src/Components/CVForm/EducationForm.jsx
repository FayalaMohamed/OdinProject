
function EducationForm({addEducation, education, deleteEducation, saveEducation}) {

    return (
        <>
            <div className="formElement education">
                <h3>Education</h3>
                {education.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <form onSubmit={(exp) => saveEducation(exp, experience.id)}>
                                <input type="text" placeholder="Course" defaultValue={experience.course} />
                                <input type="text" placeholder="University" defaultValue={experience.university} />
                                <input type="text" placeholder="Start year" defaultValue={experience.start} />
                                <input type="text" placeholder="Graduate year" defaultValue={experience.end} />
                                <div className="btnsContainer">
                                    <input type="submit" value="Save" className="saveBtn" />
                                    <input type="button" value="Delete" className="deleteBtn" onClick={() => deleteEducation(experience.id)} />
                                </div>

                            </form>
                        </div>
                    );
                })}
                <div>
                    <form onSubmit={addEducation}>
                        <input type="text" placeholder="Course" required />
                        <input type="text" placeholder="University" required />
                        <input type="text" placeholder="Start year" required />
                        <input type="text" placeholder="Graduate year" required />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default EducationForm
