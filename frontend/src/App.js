import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import MealPlannerPage from './pages/MealPlannerPage';
import GroceryListPage from './pages/GroceryListPage';
import './styles/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/recipes" component={RecipesPage} />
          <Route path="/meal-planner" component={MealPlannerPage} />
          <Route path="/grocery-list" component={GroceryListPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
