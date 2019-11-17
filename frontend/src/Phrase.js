import React from 'react';

// Phrase is a normal component that recieve an app state as a prop.
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