import React from 'react';

function PersonalInfoForm({
  onLastName,
  onFirstName,
  onTitle,
  onAddress,
  onPhone,
  onEmail,
  onDescription,
}) {
  return (
    <div className="formElement personalInfo">
      <h3>Personal information</h3>
      <input type="text" placeholder="Last Name" onChange={onLastName} />
      <input type="text" placeholder="First Name" onChange={onFirstName} />
      <input type="text" placeholder="Title" onChange={onTitle} />
      <input type="text" placeholder="Address" onChange={onAddress} />
      <input type="tel" placeholder="Phone Number" onChange={onPhone} />
      <input type="email" placeholder="Email" onChange={onEmail} />
      <input type="text" placeholder="Description" onChange={onDescription} />
    </div>
  );
}

export default PersonalInfoForm;

