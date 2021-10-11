import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/index';

function App(props) {
  return (
    <h1>{props.saludo} {props.name}!</h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>we are currently accompagnement the WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}

const AppWithSaludo = withSaludo(App)('Bounjour');

ReactDOM.render(
    <AppWithSaludo name="mr.Gentile"/>,
    // <App saludo="buenas" name="Nate"/>,
  document.getElementById('root')
);