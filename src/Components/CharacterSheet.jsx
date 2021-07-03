import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { SERVER_LOCATION } from "../constants";

export function CharacterSheet(props) {
    const [pcList, setPcList] = useState({});

     useEffect(() => {
       axios
         .post(`${SERVER_LOCATION}/getCharacter`, { id: props.pcId })
         .then((res) => {
           console.log(res.data);
         });
     }, []);

  return (
    <div>
        Hi
    </div>
  );
}
