/* eslint-disable react-hooks/exhaustive-deps */
import StandingsListItem from "./StandingsListItem";

function Standings(props) {
    const { id, league } = props;

    return (
        <>
            {id && league.standings && (
                <section className="table">
                    <StandingsListItem league={league} id={id}/>
                </section>
            )}
        </>
    );
}

export default Standings;
