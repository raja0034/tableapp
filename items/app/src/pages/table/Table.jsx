import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { AddItem } from "./items/AddItem";
import { Items } from "./items/Items";
import { Item } from "./items/Item";
import "./style-sessions.css";
import { Navigation } from "./Navigation";

export function Table() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}/items/new`}>
          <AddItem />
        </Route>
        <Route path={`${path}/items/:item_id`}>
          <Item />
        </Route>
        <Route path={`${path}/items`}>
          <Items />
        </Route>
        <Route path={`${path}`}>
          <Navigation />
        </Route>
      </Switch>
    </>
  );
}
