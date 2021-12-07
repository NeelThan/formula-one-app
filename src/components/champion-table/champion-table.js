import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ChampionTable = () => {
    let [champions, setChampions] = useState([]); 

    useEffect(() =>{
        getWorldChampions();
    }, [])

    function getWorldChampions(){
        fetch(`http://ergast.com/api/f1/driverStandings/1.json?offset=55`)
        .then((response) => response.json())
        .then((champions) => {
            setChampions(champions.MRData.StandingsTable.StandingsLists);            
        })
        .catch((error) => console.log(error));
    }

    return(
        <>
            <Table striped bordered hover response variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Season</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Wins</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        champions.map((champion, index) => {
                            return (
                                <tr key={champions.season}>
                                    <td>{index}</td>
                                    <td>{champion.season}</td>                                    
                                    <td>{champion.DriverStandings[0].Driver.givenName} {champion.DriverStandings[0].Driver.familyName}</td>
                                    <td>{champion.DriverStandings[0].Constructors[0].name}</td>
                                    <td>{champion.DriverStandings[0].points}</td>
                                    <td>{champion.DriverStandings[0].wins}</td>
                                    <td className="text-center"><a href="#">Details</a></td>
                                </tr>
                            )                            
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ChampionTable;