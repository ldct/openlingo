import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ImageAndTranslationOption extends Component {
  render() {
    return <div style={{
      border: '1px solid lightgrey',
      padding: 5,
      borderRadius: 5,
      margin: 10,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
    <img style={{
      maxWidth: 200,
      marginBottom: 5,
    }}
      src={this.props.src} />
    <div>{this.props.label} </div>
    </div>
  }
}

class IntroduceVocabWeb extends Component {
  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid lightgrey',
      borderRadius: 5,
      margin: 15,
      padding: 15,
    }}>

    Which one of these means "the woman"?

    <div style={{
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>

    <ImageAndTranslationOption src="https://static.pexels.com/photos/195825/pexels-photo-195825.jpeg" label="la femme" />
    <ImageAndTranslationOption src="https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg" label="une orange" />
    <ImageAndTranslationOption src="https://static.pexels.com/photos/209449/pexels-photo-209449.jpeg" label="une pomme" />
    <ImageAndTranslationOption src="https://static.pexels.com/photos/175977/pexels-photo-175977.jpeg" label="l'homme" />


    </div>
    </div>
  }
}

class TranslateFrenchToEnglishWeb extends Component {
  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid lightgrey',
      borderRadius: 5,
      margin: 15,
      padding: 15,
    }}>
    Translate from French to English

    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%'
    }}>
    <div style={{
      border: '1px solid pink',
      width: 400,
      height: 200,
    }}>Le garcon</div>
    <div style={{
      border: '1px solid pink',
      width: 400,
      height: 200,
    }}><input></input></div>
    </div>

    </div>
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <IntroduceVocabWeb />
      <TranslateFrenchToEnglishWeb />
      </div>
    );
  }
}

export default App;
