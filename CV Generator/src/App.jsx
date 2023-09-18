import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import CVForm from './Components/CVForm/CVForm';
import Preview from './Components/CVPreview/Preview';

function App() {
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);
  const [title, setTitle] = useState(null); 
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [mail, setMail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  function onFirstName(event) {
    setFirst(event.target.value);
  }
  function onLastName(event) {
    setLast(event.target.value);
  }

  function onTitle(event) {
    setTitle(event.target.value);
  }

  function onEmail(event) {
    setMail(event.target.value);
  }
  function onDescription(event) {
    setDescription(event.target.value);
  }

  function onAddress(event) {
    setAddress(event.target.value);
  }
  function onPhoneNumber(event) {
    setPhone(event.target.value);
  }

  function addEducation(e) {
    e.preventDefault();
    const id = uuidv4();
    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { id, course, university, start, end };
    setEducation([...education, newEducation]);
    clear(e);
  }
  function addExperience(e) {
    e.preventDefault();
    const id = uuidv4();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const description = e.target[4].value;
    let newExperience = { id, position, company, start, end, description };
    setExperiences([...experiences, newExperience]);
    clear(e);
  }

  function clear(e) {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  }

  function deleteEducation(id) {
    setEducation((currentEducation) => {
      return currentEducation.filter((edu) => edu.id !== id);
    });
  }

  function saveEducation(e, id) {
    e.preventDefault();
    const course = e.target[0].value;
    const university = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { course, university, start, end };

    setEducation(education.map((edu) => {
      if (edu.id === id)
        return edu = { ...edu, ...newEducation };
      else
        return edu;
    }));
  }

  function deleteExperience(id) {
    setExperiences((currentExperience) => {
      return currentExperience.filter((exp) => exp.id !== id);
    });
  }

  function saveExperience(e, id) {
    e.preventDefault();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const description = e.target[4].value;
    let newExperience = { position, company, start, end, description };

    setExperiences(experiences.map((exp) => {
      if (exp.id === id)
        return exp = { ...exp, ...newExperience };
      else
        return exp;
    }));
  }

  return (
    <>
      <div className="contentDiv">
        <CVForm onLastName={onLastName} onFirstName={onFirstName} onTitle={onTitle} onAddress={onAddress} onPhone={onPhoneNumber} onEmail={onEmail} onDescription={onDescription} addEducation={addEducation} education={education}
          deleteEducation={deleteEducation} saveEducation={saveEducation} addExperience={addExperience} experiences={experiences} deleteExperience={deleteExperience} saveExperience={saveExperience}></CVForm>
        <Preview first={first} last={last} title={title} address={address} phone={phone} mail={mail} description={description} experiences={experiences} education={education}></Preview>
      </div >
    </>
  )
}

export default App
