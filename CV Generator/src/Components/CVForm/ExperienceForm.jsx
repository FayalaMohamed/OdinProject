
function ExperienceForm({ addExperience, experiences, deleteExperience, saveExperience }) {

    return (
        <>
            <div className="formElement experience">
                <h3>Work Experience</h3>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <form  onSubmit={(exp) => saveExperience(exp, experience.id)}>
                                <input type="text" placeholder="Position" defaultValue={experience.position} />
                                <input type="text" placeholder="Company" defaultValue={experience.company} />
                                <input type="text" placeholder="Start date" defaultValue={experience.start} />
                                <input type="text" placeholder="End date" defaultValue={experience.end} />
                                <textarea placeholder="Description" defaultValue={experience.description} ></textarea>
                                <div className="btnsContainer">
                                    <input type="submit" value="Save" className="saveBtn" />
                                    <input type="button" value="Delete" className="deleteBtn" onClick={() => deleteExperience(experience.id)} />
                                </div>

                            </form>
                        </div>
                    );
                })}
                <div>
                    <form onSubmit={addExperience}>
                        <input type="text" placeholder="Position" required />
                        <input type="text" placeholder="Company" required />
                        <input type="text" placeholder="Start date" required />
                        <input type="text" placeholder="End date" required />
                        <textarea placeholder="Description" required></textarea>
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ExperienceForm
