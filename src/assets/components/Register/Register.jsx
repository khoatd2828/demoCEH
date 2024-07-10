import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { registerThunk } from "../../store/auth/thunk";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./register.scss";
import { toast } from "react-toastify";

export const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      maNhom: "abc", 
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      const resultAction = await dispatch(registerThunk(values));
      if (registerThunk.fulfilled.match(resultAction)) {
        toast.success("Đăng ký thành công!");
        setTimeout(() => {
            navigate("/login")
          }, 2000);
      }
    } catch (error) {
      toast.error("Đăng ký thất bại. Vui lòng thử lại!");
    } 
  };
  return (
    <div className="register-container">
      <div className="p-6">
        <h1
          className="text-center mb-3"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          ĐĂNG KÝ
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label htmlFor="hoTen" className="input-label">
              Họ tên
            </label>
            <Controller
              control={control}
              name="hoTen"
              rules={{ required: "Họ tên không được để trống",
                minLength: {
                    value: 4,
                    message: 'Họ và tên phải có ít nhất 4 chữ cái',
                  },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="p-3"
                  placeholder="Nhập họ tên"
                />
              )}
            />
            {errors.hoTen && (
              <p className="error-message">{errors.hoTen.message}</p>
            )}
          </div>

          <div className="input-container">
            <label htmlFor="taiKhoan" className="input-label">
              Tài khoản
            </label>
            <Controller
              control={control}
              name="taiKhoan"
              rules={{ required: "Tài khoản không được để trống",
                minLength: {
                    value: 6,
                    message: 'Tài khoản phải có ít nhất 6 ký tự',
                  },
              }}
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
            <label htmlFor="matKhau" className="input-label">
              Mật khẩu
            </label>
            <Controller
              control={control}
              name="matKhau"
              rules={{ required: "Mật khẩu không được để trống",
                minLength: {
                    value: 6,
                    message: 'Mật khẩu phải có ít nhất 6 ký tự',
                  },
              }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  type="text"
                  className="p-3"
                  placeholder="Nhập mật khẩu"
                />
              )}
            />
            {errors.matKhau && (
              <p className="error-message">{errors.matKhau.message}</p>
            )}
          </div>

          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Email không được để trống",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Email không hợp lệ'
                  }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="p-3"
                  placeholder="Nhập Email"
                />
              )}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="input-container">
            <label htmlFor="soDt" className="input-label">
              Số điện thoại
            </label>
            <Controller
              control={control}
              name="soDt"
              rules={{ required: "Số điện thoại không được để trống",
                pattern: {
                    value: /^[0-9]+$/,
                    message: 'Số điện thoại không hợp lệ'
                  }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="p-3"
                  placeholder="Nhập số điện thoại"
                />
              )}
            />
            {errors.soDt && (
              <p className="error-message">{errors.soDt.message}</p>
            )}
          </div>

          <div className="button mb-2">
            <button
              type="primary"
              htmlType="submit"
              className="register-button"
            >
              Đăng ký
            </button>
          </div>

          <div className="text-center">
            Bạn đã có tài khoản?{" "}
            <Button
              className="ms-3 mt-2 bg-black text-white"
              style={{
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#333',
                }
              }}
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
