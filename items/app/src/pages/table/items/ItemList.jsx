import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { ItemInfo } from "./ItemInfo";

export const ITEMS = gql`
  query items {
    items {
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

export function ItemList() {
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.items.map(item => (
    <ItemInfo
      key={item.id}
      item={{
        ...item,
        favorite: data.user?.favorites
          .map(favorite => favorite.id)
          .includes(item.id),
      }}
    />
  ));
}
