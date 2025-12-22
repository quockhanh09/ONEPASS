import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👉 import useNavigate
import logo from "../assets/img/TheGuardian_Logo_VIE 3.png";
import googleLogo from "../assets/img/google-logo.png";
import facebookLogo from "../assets/img/facebook-logo.png";
import appleLogo from "../assets/img/appleID-logo.png";
import zaloLogo from "../assets/img/zalo-logo.png";
import fbIcon from "../assets/img/Facebook.svg";
import youtubeIcon from "../assets/img/Icon-youtube.svg";
import instaIcon from "../assets/img/Icon-insta.svg";
import qrIcon from "../assets/img/qr1-1.svg";
import ggPlayIcon from "../assets/img/testimonials/gg play.svg";
import appStoreIcon from "../assets/img/testimonials/appstore.svg";
import bgRe from "../assets/img/volcano-02.png";

import "../style/signup-in.css";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    ageCheck: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate(); // 👉 hook để chuyển trang

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      fullname,
      dob,
      phone,
      email,
      username,
      password,
      confirmPassword,
      ageCheck,
    } = formData;

    // ===== Validate FE =====
    if (
      !fullname ||
      !dob ||
      !phone ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Mật khẩu phải có tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt!"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // check tuổi >= 18
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age < 18) {
      alert("Bạn phải trên 18 tuổi để đăng ký!");
      return;
    }

    if (!ageCheck) {
      alert("Bạn phải xác nhận trên 18 tuổi!");
      return;
    }

    // ===== Gửi API tới backend =====
    try {
      const response = await fetch("https://onepasscms-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullname,
          dob,
          phone,
          email,
          username,
          password,
          confirmPassword,
          isAdult: ageCheck,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.msg || "Đăng ký thất bại");
        return;
      }

      alert("🎉 Đăng ký thành công!");
      console.log("User:", data.user);

      // 👉 Chuyển hướng sang trang Login
      navigate("/login");

    } catch (err) {
      console.error("❌ Lỗi FE:", err);
      alert("Không thể kết nối server!");
    }
  };

  return (
    <section
      className="register-section"
      style={{ backgroundImage: `url(${bgRe})` }}
    >
      <div className="register-box">
        {/* Logo */}
        <div className="register-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Tabs */}
        <div className="register-tabs">
          <button className="register-tab inactive">
            <a
              href="/Login"
              style={{ color: "#ECC689", textDecoration: "none" }}
            >
              ĐĂNG NHẬP
            </a>
          </button>
          <button className="register-tab active">ĐĂNG KÝ</button>
        </div>

        {/* Form */}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-field">
            <label htmlFor="fullname">TÊN CỦA BẠN</label>
            <input
              id="fullname"
              type="text"
              placeholder="Nhập tên của bạn"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="dob">NGÀY SINH</label>
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
            <input
              id="phone"
              type="tel"
              placeholder="Nhập số điện thoại của bạn"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="username">TÊN ĐĂNG NHẬP</label>
            <input
              id="username"
              type="text"
              placeholder="Nhập tên đăng nhập của bạn"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">MẬT KHẨU</label>
            <div className="register-password">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu của bạn"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="register-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
            <p className="register-hint">
              * Mật khẩu gồm tối thiểu 8 ký tự, bao gồm chữ cái viết hoa, viết
              thường, chữ số và ký tự đặc biệt
            </p>
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">XÁC NHẬN MẬT KHẨU</label>
            <div className="register-password">
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Xác nhận mật khẩu của bạn"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="register-toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <div className="register-check">
            <input
              id="ageCheck"
              type="checkbox"
              checked={formData.ageCheck}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="ageCheck"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: "#ECC689",
                fontSize: "14px",
              }}
            >
              XÁC NHẬN NGƯỜI DÙNG TRÊN 18 TUỔI
            </label>
          </div>

          <button type="submit" className="register-submit">
            ĐĂNG KÝ
          </button>
        </form>

        {/* Social Register */}
        <div className="register-social">
          <p className="register-social-title" >ĐĂNG KÝ BẰNG</p>
          <div className="register-social-icons">
            <img src={googleLogo} alt="Google" /> 
            <img src={facebookLogo} alt="Facebook" />
            <img src={appleLogo} alt="Apple" />
            <img src={zaloLogo} alt="Zalo" />
          </div>
        </div>
      </div>

      {/* Apps */}
      <div className="register-apps">
        <a href="">
          <img src={fbIcon} alt="Facebook" />
        </a>
        <a href="">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="">
          <img src={instaIcon} alt="Instagram" />
        </a>
        <a href="">
          <img src={qrIcon} alt="QR" />
        </a>
        <a href="#">
          <img src={ggPlayIcon} alt="Google Play" />
        </a>
        <a href="">
          <img src={qrIcon} alt="QR" />
        </a>
        <a href="#">
          <img src={appStoreIcon} alt="App Store" />
        </a>
      </div>
    </section>
  );
}

export default Register;
