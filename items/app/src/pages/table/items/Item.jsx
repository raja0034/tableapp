import * as React from "react";
import { ItemDetails } from "./ItemDetails";

export function Item() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <ItemDetails />
          </div>
        </div>
      </section>
    </>
  );
}
