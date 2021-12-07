import './season-winner-view.css';
import SeasonTable from '../../components/season-table/season-table';


const SeasonView = ({season, driverId}) => {

    return (
        <>
            <div className="title">
                <h5>Winners for each round in {season} season</h5>
            </div>
            <SeasonTable driverId={driverId}/>
        </>
    );
};

export default SeasonView;