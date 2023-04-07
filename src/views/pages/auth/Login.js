import React from "react";
import classes from "../../../styles/Login.module.css";

const Login = () => {
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>Đăng nhập</h3>
      <div className={classes.form}>
        <form action="" method="POST">
          <div className={classes.form_group}>
            <label className={classes.label}>Tên đăng nhập</label>
            <input className={classes.input} />
          </div><br />
          <div className={classes.form_group}>
            <label className={classes.label}>Mật khẩu</label>
            <input className={classes.input} />
          </div>
          <div className={classes.button}>
            <button className={classes.submit} type="submit" >Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
