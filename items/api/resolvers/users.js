module.exports = {
  favorites(user, args, { dataSources }) {
    const userFavorites =
      dataSources.userDataSource.getUserById(user.id).favorites || [];
    const favoriteItems = [];
    for (const fav of userFavorites) {
      favoriteItems.push(dataSources.itemDataSource.getItemById(fav));
    }

    return favoriteItems;
  }
};
