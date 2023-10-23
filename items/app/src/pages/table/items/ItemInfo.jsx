import * as React from "react";
import { useMutation, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

export const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($itemId: ID!) {
    toggleFavoriteItem(itemId: $itemId) {
      id
      favorites {
        id
      }
    }
  }
`;

export function ItemInfo({ item }) {
  const { isAuthenticated } = React.useContext(AuthContext);
  const [toggle] = useMutation(TOGGLE_FAVORITE, {
    variables: { itemId: item.id },
  });

  const markFavorite = async () => {
    await toggle();
  };

  const { ID, title, thumbnail, sample = [] } = item;
  return (
    <div key={ID} className="col-xs-12 col-sm-6" style={{ padding: 5 }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          {thumbnail ? <h5>{`Thumbnail: ${thumbnail}`}</h5> : null}
          {sample ? <h5>{`Sample: ${sample}`}</h5> : null}
        </div>
      </div>
    </div>
  );
}
