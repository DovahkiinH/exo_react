import {React, useState, useEffect} from 'react';

const App = (props) => {

  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  useEffect(() => {
      console.log("useEffect 2 ...")
  }, [nom])

  useEffect(() => {
      console.log("useEffect 1 ...")
  }, [])

  const handleChangeNom = (evt) => {
    setNom(evt.target.value);

  }

  const handleChangePrenom = (evt) => {
    setPrenom(evt.target.value);

  }

  console.log("render App...");

  return (
      <div>

          <input type="text" placeholder='Votre Nom' value={nom} onChange={handleChangeNom}/>

          <input type="text" placeholder='Votre Prenom' value={prenom} onChange={handleChangePrenom}/>
          
          <div>

             Bonjour {nom} {prenom}

          </div>

      </div>
  );
}

export default App ;