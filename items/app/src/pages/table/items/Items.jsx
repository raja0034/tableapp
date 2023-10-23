import * as React from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";

export function Items() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row" style={{ padding: 10 }}>
            <Link
              className="btn btn-primary btn-lg center-block"
              to={`/table/items/new`}
            >
              Submit a Item!
            </Link>
          </div>
          <div className="row">
            <ItemList />
          </div>
        </div>
      </section>
    </>
  );
}
