import {React, useState, useEffect} from 'react';

import DataTable from "react-data-table-component";

const App = (props) => {

  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [compter, setCompter] = useState(0);

  const [liste, setListe] = useState([]);

  const [nvelement, setNvElement] = useState("");

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

  const handleChangeCompter = (evt) => {
    setCompter(compter + 1);

  }

  const AE = () => {
    if (nvelement.trim() !== ""){
      setListe([...liste, nvelement]);
      setNvElement("");

    }
  };

  const handleChangeListe = (evt) => {
    setListe(evt.target.value);

  }

  console.log("render App...");

  return (
      <div>

          <input type="text" placeholder='Votre Nom' value={nom} onChange={handleChangeNom}/>

          <input type="text" placeholder='Votre Prenom' value={prenom} onChange={handleChangePrenom}/>
          
          <div>

             Bonjour {nom} {prenom}

          </div>

          <br></br>

          <button onClick={handleChangeCompter}>

            Compteur = {compter}

          </button>

          <br></br>

          <input type="text" placeholder='Element à ajouter...' value={nvelement} onChange={handleChangeListe}/><button onClick={AE}>
          
          Ajouter

          </button>

          <ul>
          {liste.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>

      </div>
  );
}

export default App ;