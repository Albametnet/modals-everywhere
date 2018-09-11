import React, { Component, Fragment} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import PageIndex from './components/PageIndex';
import PageModal from './components/PageModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }
  }

  onOpen = () => {
    this.setState({modalIsOpen: true});
  }

  onClose = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    const {modalIsOpen} = this.state;
    return (
      <Fragment>
        <header className="page__header">
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">
                <Link to="/" className="menu__link">Index</Link>
              </li>
              <li className="menu__item">
                <Link to="/modal-sample" className="menu__link">Modales</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={()=><PageIndex />} />
          <Route path="/modal-sample" render={()=><PageModal modalStatus={modalIsOpen} onOpen={this.onOpen} onClose={this.onClose} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
