import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalInfoPreview from "./PersonalInfoPreview";

function Preview({education, experiences, first, last, title, address, phone, mail, description}) {
    return (
        <>
            <div className="previewDiv">
                <PersonalInfoPreview first={first} last={last} title={title} address={address} phone={phone} mail={mail} description={description}></PersonalInfoPreview>
                <EducationPreview education={education}></EducationPreview>
                <ExperiencePreview experiences={experiences}></ExperiencePreview>
            </div>
        </>
    );
}

export default Preview