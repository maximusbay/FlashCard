import React from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home"
import New from "./New/New";
import Study from "./Study/Study";
import View from "./View/View";
import EditDeck from "./Edit/EditDeck";
import AddCard from "./AddCard/AddCard";
import EditCard from "./EditCard/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/decks/new">
        < New />
        </Route>

        <Route exact path="/decks/:deckId">
        <View />
        </Route>
        
        <Route path="/decks/:deckId/cards/new">
        <AddCard />
        </Route>
        
        <Route path="/decks/:deckId/cards/:cardId/edit">
        <EditCard />
        </Route>

        <Route path="/decks/:deckId/study">
        <Study />
        </Route>  

        <Route path="/decks/:deckId/edit">
        <EditDeck />
        </Route>

        <Route >
        <NotFound />
        </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
