import { useContext } from 'react';

import { StoreContext } from '../../../store';

import { fixTeamName, getLogo, renderTitle } from '../../../utils.js';

import styles from '../../../styles/Matches.module.css';

export const ResultsListItem = (props) => {
    const { nested } = props;

    const store = useContext(StoreContext);

    const { id, sortType, teams } = store.state;

    return (
        <ul>
            <h3 className={styles.title}>{renderTitle(sortType, nested)}</h3>
            {nested.map((element, index) => {
                return (
                    <li className={styles.matchList} key={element.id}>
                        <section
                            className={styles.matchDetails}
                            tabIndex={index + 1}
                        >
                            <p className={styles.homeTeam}>
                                {fixTeamName(id, element.homeTeam.name)}
                            </p>
                            <img
                                src={getLogo(element.homeTeam.id, teams)}
                                alt="Club Logo"
                                className={styles.clubLogo}
                            ></img>
                            <p>
                                {element.score.fullTime.homeTeam} -{' '}
                                {element.score.fullTime.awayTeam}
                            </p>
                            <img
                                src={getLogo(element.awayTeam.id, teams)}
                                alt="Club Logo"
                                className={styles.clubLogo}
                            ></img>
                            <p className={styles.awayTeam}>
                                {fixTeamName(id, element.awayTeam.name)}
                            </p>
                        </section>
                    </li>
                );
            })}
        </ul>
    );
};
