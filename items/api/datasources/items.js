const { DataSource } = require("apollo-datasource");
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/items.json");
const db = low(adapter);
db._.mixin(lodashId);

class ItemDataSource extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.db = db.get("items");
  }

  getItems(args) {
    return this.db.filter(args).value();
  }

  getItemById(id) {
    return this.db.getById(id).value();
  }

  createItem(item) {
    return this.db.insert(item).write();
  }
}

module.exports = ItemDataSource;
