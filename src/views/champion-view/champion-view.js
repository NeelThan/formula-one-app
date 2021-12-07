import './champion-view.css';
import ChampionTable from "../../components/champion-table/champion-table";


const ChampionView = () => {

    return (
        <>
            <div className="title">
                <h5>F1 world champions from 2005 to present</h5>
            </div>
            <ChampionTable/>
        </>
    );
};

export default ChampionView;