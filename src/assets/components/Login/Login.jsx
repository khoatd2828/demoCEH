import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/auth/thunk";
import "./login.scss";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await dispatch(loginThunk(values));
      navigate("/");
      toast.success("Đăng nhập thành công!"); 
    } catch (error) {
      toast.error("Đăng nhập thất bại. Vui lòng thử lại!");
    }
  };
  return (
    <div className="login-container mt-200">
      <div className="p-6">
        <h1
          style={{ fontSize: "24px", fontWeight: "bold" }}
          className="text-center mb-3"
        >
          ĐĂNG NHẬP
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label className="input-label" htmlFor="taiKhoan">
              Tài khoản
            </label>
            <Controller
              control={control}
              name="taiKhoan"
              rules={{ required: "Tài khoản không được để trống" }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="p-3"
                  placeholder="Nhập tài khoản"
                />
              )}
            />
            {errors.taiKhoan && (
              <p className="error-message">{errors.taiKhoan.message}</p>
            )}
          </div>

          <div className="input-container">
            <label className="input-label" htmlFor="matKhau">
              Mật khẩu
            </label>
            <Controller
              control={control}
              name="matKhau"
              rules={{ required: "Mật khẩu không được để trống" }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  className="p-3"
                  placeholder="Nhập mật khẩu"
                />
              )}
            />
            {errors.matKhau && (
              <p className="error-message">{errors.matKhau.message}</p>
            )}
          </div>

          <div className="button mb-2">
            <Button type="primary" htmlType="submit" className="login-button">
              Đăng nhập
            </Button>
          </div>

          <div className="text-center">
            Bạn chưa có tài khoản?{" "}
            <Button
              type="primary"
              className="ms-3 mt-2"
              onClick={() => console.log("Đăng ký")}
            >
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
