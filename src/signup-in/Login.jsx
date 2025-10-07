import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 thêm dòng này
import "../style/signup-in.css";

// Import images
import logo from "../assets/img/TheGuardian_Logo_VIE 3.png";
import vcpcLogo from "../assets/img/Vector-Vcpc.png";
import facebookIcon from "../assets/img/2023_Facebook_icon.png";
import youtubeIcon from "../assets/img/Icon-youtube.svg";
import instaIcon from "../assets/img/Icon-insta.svg";
import qrIcon from "../assets/img/qr1-1.svg";
import ggPlayIcon from "../assets/img/Google__G__logo.png";
import appStoreIcon from "../assets/img/testimonials/appstore.svg";
import bgLo from "../assets/img/hero-section.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 👈 hook để điều hướng

  const handleTogglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.msg || "Đăng nhập thất bại");
        return;
      }

      // 👉 Lưu token vào localStorage
      localStorage.setItem("token", data.token);

      // 👉 Điều hướng sang trang chủ
      navigate("/"); // 👈 bay ra trang chủ

    } catch (err) {
      console.error("❌ Lỗi FE:", err);
      alert("Không thể kết nối server!");
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fcf8f2', position: 'relative' }}>
      {/* Logo and heading above the box */}
      <div style={{ width: '100%', textAlign: 'center', paddingTop: 36, marginBottom: 0 }}>
        <img src={vcpcLogo} alt="VCPC" style={{ height: 150}} />
      </div>
      <section
        className="body-ath"
        style={{
          backgroundImage: `url(${bgLo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          minHeight: '100vh',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        <div style={{
          width: 440,
          background: '#ffffff69 10%',
          backdropFilter: "blur(8px)",
           WebkitBackdropFilter: "blur(8px)",
          borderRadius: 24,
          boxShadow: '0 4px 32px 0 rgba(60,93,170,0.10)',
          padding: '32px 32px 32px 32px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}>
          <div style={{ fontWeight: 700, fontSize: 32, color: '#222', textAlign: 'center', marginBottom: 4, letterSpacing: 0.2 }}>Đăng nhập</div>
          <div style={{ color: '#888', fontSize: 16, marginBottom: 18, textAlign: 'center', fontWeight: 400 }}>
            Bạn chưa có tài khoản? <a href="/register" style={{ color: '#22336C', textDecoration: 'underline', fontWeight: 500 }}>Đăng ký tài khoản</a>
          </div>
          {/* Social login buttons */}
          <button style={{
            width: '100%',
            background: '#fff',
            border: '1.5px solid #222',
            borderRadius: 24,
            padding: '12px 0',
            fontSize: 18,
            fontWeight: 700,
            color: '#222',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            cursor: 'pointer',
            boxShadow: 'none',
            transition: 'background 0.2s',
            borderColor: '#222',
          }}>
            <img src={facebookIcon} alt="Facebook" style={{ width: 24, height: 24, marginRight: 8 }} />
            Đăng nhập bằng Facebook
          </button>
          <button style={{
            width: '100%',
            background: '#fff',
            border: '1.5px solid #222',
            borderRadius: 24,
            padding: '12px 0',
            fontSize: 18,
            fontWeight: 700,
            color: '#222',
            marginBottom: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            cursor: 'pointer',
            boxShadow: 'none',
            transition: 'background 0.2s',
            borderColor: '#222',
          }}>
            <img src={ggPlayIcon} alt="Google" style={{ width: 24, height: 24, marginRight: 8, background: '#fff', borderRadius: '50%' }} />
            Đăng nhập với Google
          </button>
          {/* Divider */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '18px 0 18px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#bdbdbd', borderRadius: 1 }}></div>
            <span style={{ margin: '0 16px', color: '#888', fontWeight: 500, fontSize: 18 }}>hoặc</span>
            <div style={{ flex: 1, height: 1, background: '#bdbdbd', borderRadius: 1 }}></div>
          </div>
          <form className="auth-form" onSubmit={handleLogin} style={{ width: '100%' }}>
            <div className="auth-group" style={{ marginBottom: 18 }}>
              <label htmlFor="username" style={{ fontWeight: 600, color: '#444', fontSize: 15, marginBottom: 4, display: 'block' }}>ID/Email của bạn</label>
              <input
                type="text"
                id="username"
                placeholder="Nhập ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid #e6e6e6',
                  borderRadius: 8,
                  fontSize: 16,
                  marginTop: 2,
                  background: '#fafbfc',
                  color: '#222',
                  outline: 'none',
                  fontWeight: 500,
                  marginBottom: 0,
                }}
              />
            </div>
            <div className="auth-group auth-password" style={{ marginBottom: 8, position: 'relative' }}>
              <label htmlFor="password" style={{ fontWeight: 600, color: '#444', fontSize: 15, marginBottom: 4, display: 'block' }}>Nhập mật khẩu</label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid #e6e6e6',
                  borderRadius: 8,
                  fontSize: 16,
                  marginTop: 2,
                  background: '#fafbfc',
                  color: '#222',
                  outline: 'none',
                  fontWeight: 500,
                  marginBottom: 0,
                }}
              />
              <span
                className="auth-toggle"
                onClick={handleTogglePassword}
                style={{
                  cursor: "pointer",
                  position: 'absolute',
                  right: 12,
                  top: 38,
                  fontSize: 18,
                  color: '#888',
                  userSelect: 'none',
                }}
                role="button"
                tabIndex={0}
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>
            <div style={{ width: '100%', marginBottom: 8, textAlign: 'right' }}>
              <a href="#" style={{ color: '#222', fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>Quên mật khẩu?</a>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 18 }}>
              <button
                className="auth-btn-login"
                type="submit"
                style={{
                  width: '100%',
                  background: '#000',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 20,
                  border: 'none',
                  borderRadius: 18,
                  padding: '14px 0',
                  boxShadow: '0 2px 8px 0 rgba(60,93,170,0.04)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  textAlign: 'center',
                  display: 'block',
                  margin: '0 auto',
                }}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
