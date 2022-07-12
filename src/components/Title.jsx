import PropTypes from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    // console.log(this.props);
    const { headline } = this.props;
    return (
      <section className="section-planetTitle">
        <h2 className="planetTitle">{headline}</h2>
      </section>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
}.isRequired;

export default Title;
