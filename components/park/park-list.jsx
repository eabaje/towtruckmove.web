import React, { useState, useContext, useEffect } from "react";
import { Camera, Trash, Truck, List, Edit, ChevronsDown } from "react-feather";

import dynamic from "next/dynamic";
import GridList from "@material-ui/core/GridList";

import ParkCard from "./park-card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  gridList: {
    width: "100%",
    height: "auto"
  },
  card: {
    maxWidth: 160,
    height: "100%"
  }
}));
function ParkList({ data }) {
 
  console.log("data2", data);
  return (
   
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header alert alert-info">
            <h3>List of Parks</h3>
            <hr />
            <ul>
              <li>Make Request for onboarding services</li>
              <li>View interest for your shipment</li>
            </ul>
          </div>
          <GridList cellHeight={"auto"} className={classes.gridList} spacing={0}>
          {data.map((tile) => (
            <ParkCard data={tile}/>
          ))}
         </GridList>

          
        </div>
      </div>
  
  );
}
//ListInterest.layout = "main";
//export default ListInterest;

export async function getServerSideProps({ query }) {
  return {
    props: { query },
  };
}

export default dynamic(() => Promise.resolve(ListInterest), { ssr: false });
