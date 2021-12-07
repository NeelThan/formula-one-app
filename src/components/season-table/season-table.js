import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const SeasonTable = ({driverId}) => {
    let season = 2005;
    let [seasonWinners, setSeasonWinners] = useState([]); 

    useEffect(() =>{
        getSeasonWinners();
    }, [])

    function getSeasonWinners(){
        fetch(`http://ergast.com/api/f1/${season}/results/1.json`)
        .then((response) => response.json())
        .then((seasons) => {
            setSeasonWinners(seasons.MRData.RaceTable.Races);            
        })
        .catch((error) => console.log(error));
    }

    

    return(
        <>
            <Table bordered hover response variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Round</th>
                        <th>Venue</th>
                        <th>Circuit Name</th>
                        <th>Position</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seasonWinners.map((races, index) => {
                            let bgc = races.Results[0].Driver.driverId === driverId ? "green" : "";
                           
                            return (
                                <tr key={index} style={{color: bgc}}>
                                    <td>{index}</td>
                                    <td>{races.Results[0].Driver.givenName} {races.Results[0].Driver.familyName}</td>                                    
                                    <td>{races.Results[0].Constructor.name}</td>
                                    <td>{races.round}</td>
                                    <td>{races.raceName}</td>
                                    <td>{races.Circuit.circuitName}</td>
                                    <td>{races.Circuit.circuitName}</td>
                                    <td>{races.date}</td>
                                </tr>
                            )                            
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default SeasonTable;