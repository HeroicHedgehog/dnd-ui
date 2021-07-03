import React, { useState,useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import {SERVER_LOCATION} from "../constants"


export function Header(props) {
const [pcList, setPcList] = useState({});

 useEffect(() => {
    axios.post(`${SERVER_LOCATION}/getListOfNames`).then(res=>{
        console.log(res.data);
        const list = res.data.map(el => {
            return { label: el.name, value: el.characterID };
        })
        setPcList(list);
    });
 }, []);

 const setPc = info =>{
    console.log(info);
    props.setPcId(info.value)
 }

  return (
    <div style={{ border: "solid black 1px" }}>
      <Select options={pcList} onChange={setPc} />
    </div>
  );
}
