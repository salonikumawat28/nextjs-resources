import { Models, RematchDispatch, RematchRootState, init } from "@rematch/core";

import device from "./device/model";

export interface RootModel extends Models<RootModel> {
    device: typeof device;
}

export type RootState = RematchRootState<RootModel>;
export type RootDispatch = RematchDispatch<RootModel>;

const models: RootModel = {
  device
};

const store = init<any>({
    models,
});

export default store;
