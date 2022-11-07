import "./App.css";
import BaiTapGioHang from "./components/BaiTapGioHangRedux/BaiTapGioHang";
import BookingMovie from "./components/BookingMovie/BookingMovie";
import Game from "./components/DiceGame/Game";
import ProductList from "./components/modalCar/ProductList";
import GameOanTuTi from "./components/OanTuTi/GameOanTuTi";
import DanhSachSanPham from "./components/Phone/DanhSachSanPham";
import data from "./components/Shose/data.json";
import ProductShose from "./components/Shose/ProductShose";
function App() {
  return (
    <div className="">
      {/* Shop Shose
      <ProductShose data={data}></ProductShose> */}
      {/* <DanhSachSanPham></DanhSachSanPham> */}
      {/* <ProductList></ProductList> */}
      {/* <BaiTapGioHang></BaiTapGioHang> */}
      {/* <Game></Game> */}
      {/* <GameOanTuTi></GameOanTuTi> */}
      <BookingMovie></BookingMovie>
    </div>
  );
}

export default App;
