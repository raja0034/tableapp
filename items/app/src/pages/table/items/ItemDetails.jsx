import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ItemInfo } from "./ItemInfo";

export const ITEM_BY_ID = gql`
  query itemById($id: ID!) {
    itemById(id: $id) {
      id
      title
      thumbnail
      sample
    }
    user: me {
      id
      favorites {
        id
      }
    }
  }
`;

export function ItemDetails() {
  const { item_id } = useParams();
  const { loading, error, data } = useQuery(ITEM_BY_ID, {
    variables: { id: item_id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const item = data.itemById;

  return (
    <ItemInfo
      item={{
        ...item,
        favorite: data.user?.favorites
          .map(favorite => favorite.id)
          .includes(item.id),
      }}
    />
  );
}
