import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function CVForm({
    onLastName,
    onFirstName,
    onTitle,
    onAddress,
    onPhone,
    onEmail,
    onDescription,
    addEducation,
    education,
    deleteEducation,
    saveEducation,
    addExperience,
    experiences,
    deleteExperience,
    saveExperience,
}) {
    return (
        <>
            <div>
                <PersonalInfoForm onLastName={onLastName} onFirstName={onFirstName} onTitle={onTitle} onAddress={onAddress} onPhone={onPhone} onEmail={onEmail} onDescription={onDescription}></PersonalInfoForm>
                <EducationForm addEducation={addEducation} education={education} deleteEducation={deleteEducation} saveEducation={saveEducation}></EducationForm>
                <ExperienceForm addExperience={addExperience} experiences={experiences} deleteExperience={deleteExperience} saveExperience={saveExperience}></ExperienceForm>
            </div>
        </>
    );
}

export default CVForm