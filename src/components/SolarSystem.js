import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets
          .map((planet, i) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.Image }
              key={ i }
            />))}
        ;
      </div>
    );
  }
}

export default SolarSystem;
