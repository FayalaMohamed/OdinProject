
function PersonalInfoPreview({first, last, title, address, phone, mail, description}) {
    return (
        <>
            <div className="previewItem personalInfoDiv">
                <div>
                    <h1 id="name">{first} {last}</h1>
                    <h2>{title}</h2>
                </div>
                <div className="infosToAlign">
                    <h3>{address}</h3>
                    <h3>{phone}</h3>
                    <h3>{mail}</h3>
                </div>
                <hr />
                <div>
                    <h3>{description}</h3>
                </div>

            </div>
        </>
    );
}

export default PersonalInfoPreview