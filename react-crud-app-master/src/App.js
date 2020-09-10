import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Lista de Estudiantes
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/contacts/new"
        >
          Agregar estudiantes
        </NavLink>
      </div>
      <Route exact path="/" component={ContactListPage} />
      <Route path="/contacts/new" component={ContactFormPage} />
      <Route path="/contacts/edit/:_id" component={ContactFormPage} />
    </Container>
  );
};

export default App;
