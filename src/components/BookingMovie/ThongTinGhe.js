import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinGhe extends Component {
  renderGheDaDat = () => {
    return this.props.stateGheDaDat.map((item, index) => {
      return (
        <tr key={index}>
          <td scope="row">{item.soGhe}</td>
          <td>{item.gia}</td>
          <td
            onClick={() => {
              this.props.xoaGhe(item);
            }}
            style={{ color: "red", cursor: "pointer" }}
          >
            X
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderGheDaDat()}</tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGhe: (ghe) => {
      dispatch({
        type: "XOA_GHE",
        ghe,
      });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    stateGheDaDat: state.gheDaDatReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe);
