import React from 'react';

class Phrase extends React.Component{
    render() {
        return(
            <section className="phrase-wrapper">
                <h2>{this.props.phrase}</h2>
            </section>
        );
    }
}

export default Phrase;