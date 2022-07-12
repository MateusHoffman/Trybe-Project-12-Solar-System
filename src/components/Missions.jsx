import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="div-missions">
        <Title headline="Missões" />
        <section className="section-missions-card">
          {
            missions.map(({ name, year, country, destination }) => (<MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />))
          }
        </section>
      </div>
    );
  }
}

export default Missions;
