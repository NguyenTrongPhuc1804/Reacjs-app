import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import DiceGameReducer from "./DiceGameReducer";
import GameTuTiReducer from "./GameTuTiReducer";
import gheDaDatReducer from "./DatGheReducer";
const rootReducer = combineReducers({
  stateGioHang: BaiTapGioHangReducer, //state gio hang
  DiceGameReducer,
  GameTuTiReducer,
  gheDaDatReducer,
});

export default rootReducer;
