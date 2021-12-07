import './main-content.css'

const MainContent = ({children}) => {

    return(
        <>
            <div className="column middle">{children}</div>
        </>
    );
};

export default MainContent;