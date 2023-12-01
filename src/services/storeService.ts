import Store from "../models/storeModel";

const getAllStores = async () => {
  return Store.find();
};

const createStore = async (name: string) => {
  const store = new Store({ name });
  return store.save();
};

export default {
  getAllStores,
  createStore,
};
