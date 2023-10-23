const _ = require("lodash");

module.exports = {
  items: (parent, args, { dataSources }, info) => {
    const allItems = dataSources.itemDataSource.getItems(args);
    return allItems;
  },
  itemById: (parent, { id }, { dataSources }, info) => {
    const allItems = dataSources.itemDataSource.getItemById(id);
    return allItems;
  },
  users: async (parent, args, { user, dataSources }, info) => {
    const users = await dataSources.userDataSource.getUsers();
    return users;
  },
  userById: async (parent, { id }, { dataSources }, info) => {
    const user = await dataSources.userDataSource.getUserById(id);
    return user;
  },
  me: async (parent, { id }, { dataSources, user }, info) => {
    if (user) {
      return dataSources.userDataSource.getUserById(user.sub);
    }
    return undefined;
  },
};
