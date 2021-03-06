import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Signup} from './Signup';
import { Signedup} from './Signedup';
import { Services } from './Services';
import { Contact } from './Contact';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
        
          {/* <Jumbotron /> */}
          <Layout>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/signup" component={Signup} />
              <Route path="/signedup" component={Signedup} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
            <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
