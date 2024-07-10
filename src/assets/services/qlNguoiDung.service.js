import axios from "axios";
import { TOKEN } from "../constant/token";

export const qlNguoiDungServices = {
  dangNhap: (payload) =>
    axios.post(
      "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      payload,
      {
        headers: { TokenCybersoft: TOKEN },
      }
    ),

  dangKy: (payload) =>
    axios.post(
      "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      payload,
      {
        headers: { TokenCybersoft: TOKEN },
      }
    ),
};
