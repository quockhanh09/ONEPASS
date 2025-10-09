import trendingImg1 from "./assets/img/image109.png";
import trendingImg2 from "./assets/img/image106.png";
import trendingImg3 from "./assets/img/image107.png";
import trendingAvatar1 from "./assets/img/image108.png";
import a1 from "./assets/img/image22.png";
import a34 from "./assets/img/a1-1.png";
import a2 from "./assets/img/image222.png";
import a3 from "./assets/img/image223.png";
import a4 from "./assets/img/image224.png";
import a5 from "./assets/img/image225.png";
import a6 from "./assets/img/image226.png";
import a7 from "./assets/img/image227.png";
import a8 from "./assets/img/image228.png";
import a9 from "./assets/img/image229.png";
import a10 from "./assets/img/image230.png";
import a11 from "./assets/img/image231.png";
import a12 from "./assets/img/image232.png";
import a13 from "./assets/img/image233.png";
import a14 from "./assets/img/image234.png";
import a15 from "./assets/img/image235.png";
import a16 from "./assets/img/image236.png";
import a17 from "./assets/img/image237.png";
import a18 from "./assets/img/image238.png";
import a19 from "./assets/img/image239.png";
import a20 from "./assets/img/image240.png";
import a21 from "./assets/img/image241.png";
import a22 from "./assets/img/image242.png";
import a23 from "./assets/img/image243.png";
import a24 from "./assets/img/image244.png";
import a25 from "./assets/img/image245.png";
import a26 from "./assets/img/image246.png";
import a27 from "./assets/img/image247.png";
import a28 from "./assets/img/image248.png";
import a29 from "./assets/img/image249.png";

import a30 from "./assets/img/image250.png";
import a31 from "./assets/img/image251.png";
import a32 from "./assets/img/image252.png";
import a33 from "./assets/img/image253.png";
import a35 from "./assets/img/a35.png";
import a36 from "./assets/img/a36.png";

import n1 from "./assets/img/n1.png";
import n2 from "./assets/img/n2.png";
import n3 from "./assets/img/n3.png";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Layout from "./Layout.jsx";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Support from "./components/Support";
import Introduction from "./components/Introduction";
import Service from "./components/Service";
import News from "./components/News";
import Register from "./signup-in/Register";
import Login from "./signup-in/Login";
import Consult from "./components/Consult.jsx";
import AllNewsPage from "./components/AllNewsPage";
import ConsulateNews from "./components/ConsulateNews";
import NewsDetail from "./components/NewDeatail.jsx";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

//
import logo from "./assets/img/Logo-name.png";
// import iconGlobal from "./assets/img/Icon.svg";
import heroBg from "./assets/img/herobanner-1.png";
import tabDot from "./assets/img/tab-dot.png";

import hero1 from "./assets/img/image1.png";
import heroInput from "./assets/img/bginput.png";
import bgI3 from "./assets/img/bgI3.png";


import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";

import fbIcon from "./assets/img/image20.png";
import kakaotalkIcon from "./assets/img/image17.png";
import zaloIcon from "./assets/img/image18.png";
import naverIcon from "./assets/img/image19.png";
import news1 from "./assets/img/news-related-1.jpg";
import news2 from "./assets/img/news-related-2.jpg";
import news3 from "./assets/img/news-related-3.jpg";
import icPhone from "./assets/img/9.png";
import icVisit from "./assets/img/12.png";
import icChat from "./assets/img/11.png";
import icMail from "./assets/img/10.png";
const eventImages = [event1, event2, event3, event4];

function App() {

  const newsData = {
    copyright: [
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Hội thảo Nâng cao Năng lực Quản lý Nhà nước về Bản quyền Tác giả và Quyền Liên quan",
        desc: "Trung tâm Bảo vệ Bản quyền Việt Nam vừa tổ chức hội thảo chuyên sâu nhằm tăng cường kiến thức và kỹ năng cho các cán bộ quản lý. Sự kiện đã cập nhật những quy định mới nhất của pháp luật, đồng thời chia sẻ kinh nghiệm quốc tế trong việc bảo vệ quyền sở hữu trí tuệ.",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
        title: "Phát động Cuộc thi 'Sáng Tạo Và Tôn Trọng Bản Quyền': Sân Chơi Mới Cho Người Trẻ",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=120&q=80",
        title: "Hợp Tác Chặt Chẽ Với Cơ Quan Quốc Tế Trong Cuộc Chiến Chống Vi Phạm Bản Quyền Số",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=120&q=80",
        title: "Công Bố Báo Cáo Thường Niên: Tình Hình Vi Phạm Bản Quyền Năm 2025",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Lễ Trao Giấy Chứng Nhận Bản Quyền: Vun Đắp Nền Tảng Cho Sự Sáng Tạo",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=120&q=80",
        title: "Cảnh Báo: Các Chiêu Trò Lừa Đảo Mạo Danh Cơ Quan Bản Quyền Ngày Càng Phức Tạp",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      }
    ],
    event: [
      {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Sự kiện: Ngày hội Sáng tạo Việt Nam 2025",
        desc: "Ngày hội quy tụ hàng trăm tác giả, nghệ sĩ, doanh nghiệp sáng tạo với nhiều hoạt động giao lưu, triển lãm, workshop hấp dẫn.",
        author: "VCPC Event",
        date: "15 tháng 07, 2025"
      },
      {
        img: "https://www.centrala.vn/storage/news/1744355533BACKDOOR%20-%20T%E1%BA%A4T%20T%E1%BA%A6N%20T%E1%BA%ACT%20V%E1%BB%80%20BACKDOOR%20B%E1%BA%A0N%20C%E1%BA%A6N%20N%C3%8AN%20BI%E1%BA%BET%20(3).png",
        title: "Hội thảo: Bảo vệ bản quyền trong thời đại số",
        author: "VCPC Event",
        date: "10 tháng 07, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Triển lãm tác phẩm sáng tạo trẻ",
        author: "VCPC Event",
        date: "05 tháng 07, 2025"
      }
    ],
    law: [
      {
        img: "https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2025/LTN/thang5/luat-shtt.jpg",
        title: "Luật Sở hữu trí tuệ sửa đổi 2025",
        desc: "Luật mới cập nhật nhiều quy định quan trọng về bảo vệ quyền tác giả, quyền liên quan và xử lý vi phạm.",
        author: "VCPC Law",
        date: "01 tháng 06, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
        title: "Nghị định hướng dẫn thi hành Luật Sở hữu trí tuệ",
        author: "VCPC Law",
        date: "15 tháng 05, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Sự kiện: Ngày hội Sáng tạo Việt Nam 2025",
        desc: "Ngày hội quy tụ hàng trăm tác giả, nghệ sĩ, doanh nghiệp sáng tạo với nhiều hoạt động giao lưu, triển lãm, workshop hấp dẫn.",
        author: "VCPC Event",
        date: "15 tháng 07, 2025"
      },
    ]
  };


  const services = [
    { title: "인증 센터" },
    { title: "결혼 이민" },
    { title: "출생신고" },
    { title: "출입국 행정" },
    { title: "신분증명 서류" },
    { title: "입양 • 자녀 인지" },
    { title: "비자 대행" },
    { title: "법률 컨설팅" },
    { title: "B2B 서비스" },
  ];

  const serviceCardsData = {
    "인증 센터": [
      { img: a34, title: "번역 공증", desc: "베트남어, 한국어, 영어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증" ,  tabKey: "a1",},
      { img: a1, title: "인증 센터", desc: "영사 확인, 사실인증",  tabKey: "a2" },

    ],
    "결혼 이민": [
      { img: a2, title: "한국에서 혼인 신고 ", desc: "한국에서의 결혼 등록 절차 전반을 대행하고 지원" ,  tabKey: "a3"},
      { img: a3, title: "혼인관계증명서 발급 신청", desc: "혼인 관계 증명서 발급에 필요한 서류 컨설팅및 지원",  tabKey: "a4" },
      { img: a35, title: "혼인요건인증서 발급 신청", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원",  tabKey: "a5" },
      { img: a36, title: "혼인 재신고", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원" ,  tabKey: "a6"},
      { img: a4, title: "결혼이민 비자신청", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원",  tabKey: "a7" },

    ],
    "출생신고": [
      { img: a5, title: "출생 신고", desc: "신생아 출생 신고를 정확하고 신속하게 대행",  tabKey: "a8" },
      { img: a6, title: "기한 초과 출생신고", desc: "기간이 초과된 출생 신고 절차를 특별 지원",  tabKey: "a9" },
      { img: a7, title: "사망 신고", desc: "사망 신고 및 관련 서류 처리 대행" ,  tabKey: "a10"},
      { img: a8, title: "기한 초과 사망신고", desc: "기간이 초과된 사망 신고 절차 지원 및 해결" ,  tabKey: "a11"},
    ],
    "출입국 행정": [
      { img: a9, title: "베트남 국적 포기 신청", desc: "베트남 국적 포기 신청 및 서류 절차 대행",  tabKey: "a12" },
      { img: a10, title: "베트남 국적 유지 신청", desc: " 이중국적 유지를 위한 신고 및 관련 절차를지원" ,  tabKey: "a13"},
      { img: a11, title: "베트남 국적 귀화 신청", desc: "베트남 국적 귀화를 위한 신청 및 행정 절차 대행",  tabKey: "a14" },
      { img: a12, title: "베트남으로 시체, 유해, 유골 반입 허가 신청", desc: "베트남으로 시체, 유해, 유골을 반입하기 위한 서류 및 허가 절차 대행" ,  tabKey: "a15"},
      { img: a13, title: "베트남 귀국절차 (베트남 상 주거주 신고)", desc: "재외 베트남인의 베트남 국적 사실 확인 절차를 안내하고 대행" ,  tabKey: "a16"},
    ],
    "신분증명 서류": [
      { img: a14, title: "일반 여권 (재)발급·변경· 추가", desc: "일반 여권의 신규 발급, 정보 변경 및 추가 절차를 대행" ,  tabKey: "a17"},
      { img: a15, title: "호적 변경·정정·추가, 민족 재확인, 성별 재확인 등", desc: " 이름, 성별, 국적 등 호적 정보 변경 신청 및 관련 절차 지원",  tabKey: "a18" },
      { img: a16, title: "베트남 국민 신고 업데이트", desc: "재외 베트남인으로서의 국민 등록 및 정보 갱신 대행" ,  tabKey: "a19"},
      { img: a17, title: "베트남 출신 증명서 발급", desc: "베트남 출신 확인서 발급을 위한 서류 준비 및 절차 지원" ,  tabKey: "a20"},
      { img: a18, title: "호적증서 반사오 재발급", desc: "출생, 혼인 등 각종 호적 서류의 사본 재발급 대행" ,  tabKey: "a21"},
    ],
    "입양 • 자녀 인지": [
      { img: a19, title: "보호자 인지 인지해지 신고", desc: "재외 베트남인 간 또는 외국인과의 보호자 신청 등록, 해지 신고 대 행",  tabKey: "a22" },
      { img: a20, title: "혼외자 자녀 인지", desc: "혼외자 자녀 인지 등록 절차 대행",  tabKey: "a23" },
      { img: a21, title: "입양 절차 대행", desc: "베트남 국적 아동의 입양 등록 및 재등록 절차 대행", tabKey: "a24" },

    ],
    "비자 대행": [
      { img: a22, title: "베트남 통행증 발급", desc: "재외 공관에서 발급받은 통증 발급 지원", tabKey: "a25"},
      { img: a23, title: "초청 (단기방문 C-3-1 비자)", desc: "한국 단기 방문 비자(C-3-1) 신청 및 발급 절차 지원", tabKey: "a26" },
      { img: a24, title: "초청 (방문동거 F-1-5 비자)", desc: "한국 방문동거 비자(F-1-5) 신청에 필요한 서류 준비 및 절차 대행", tabKey: "a27" },
      { img: a25, title: "베트남 비자면제증 발급", desc: "  베트남 비자 면제서의 신규 등록 및 재등록 절차 대행", tabKey: "a28" },
      { img: a26, title: "베트남 전자비자.상용비자 발급", desc: "전자 비자(E-Visa) 및 상용 비자의 발급 등록 대행", tabKey: "a29" },
    ],
    "법률 컨설팅": [
      { img: a27, title: "이혼 소송", desc: "베트남-한국 간 국제 이혼 소송의 제기 및 진행에 필요한 법적 절차 대행", tabKey: "a30" },
      { img: a28, title: "노동 관련 소송", desc: "베트남/한국 노동법 관련 분쟁 발생 시 소송 제기 및 법률 자문", tabKey: "a31" },
      { img: a29, title: "체류자 관련 컨설팅", desc: "베트남/한국 내 체류자의 자진 출국 및 합법적 체류 전환 등 민감한 문제 상담", tabKey: "a32" },
    ],
    "B2B 서비스": [
      { img: a30, title: "베트남·한국에서 법인ㆍ지사·대표 사무실 설립", desc: "한국 또는 베트남 내 법인, 지사, 또는 사무소 설립에 필요한 행정 절차 대행", tabKey: "a33" },
      { img: a31, title: "베트남·한국 내 노동 허가서, 임시 거주증 발급", desc: "한국/베트남 외국인 근로자의 취업 허가 및 임시 거주증 발급 절차 대행", tabKey: "a34" },
      { img: a32, title: "수출입 허가서", desc: "기업의 원활한 무역 활동을 위한 수출입 허가증 발급 및 관련 규제 준수 절차 대행", tabKey: "a35" },
      { img: a33, title: "B2B 바이어 매칭", desc: "B2B 파트너를 매칭하여 기업의 성공적인 시장 진출과 매출 확대", tabKey: "a24" },

    ],
  };

  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("copyright");
  const [news, setNews] = useState(newsData);



  const tabList = [
    { key: "copyright", label: "Tin tức bản quyền", color: "#BFD6FF", text: "#224394" },
    { key: "event", label: "Sự kiện", color: "#224394", text: "#fff" },
    { key: "law", label: "Văn bản pháp luật", color: "#10214B", text: "#fff" }
  ];

  const current = news[tab];
  const main = current[0];
  const list = current.slice(1);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // ===== TAB MENU =====
    const buttons = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    const handleTabClick = (btn) => {
      if (!btn || !btn.dataset?.tab) return;
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");

      const tabContent = document.getElementById(btn.dataset.tab);
      if (tabContent) tabContent.classList.add("active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleTabClick(btn));
    });

    // ===== CHARACTER CARD =====


    // ===== INIT CHARACTER SIZE =====
    const setDefaultSize = () => {
      document.querySelectorAll(".character-card").forEach((card) => {
        const defaultImg = card.querySelector("img.default");
        if (defaultImg) {
          card.style.width = defaultImg.naturalWidth + "px";
          card.style.height = defaultImg.naturalHeight + "px";
        }
      });
    };

    if (document.readyState === "complete") {
      setDefaultSize();
    } else {
      window.addEventListener("load", setDefaultSize);
    }

    // ===== COUNTDOWN =====
    const targetDate = new Date("Sep 15, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", setDefaultSize);
    };
  }, []);


  const posts = [
    {
      img: n1,
      date: '2025년 09월 30일 | 오전 09:00',
      title: '추석 연휴 휴무 안내',
      desc: '안녕하세요, 고객 여러분!  저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...'
    },
    {
      img: n2,
      date: '2025년 09월 27일 | 오전 09:00',
      title: '주부산 베트남 총영사관 공식 개소...',
      desc: '2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 업무를 개시하며, 한-베트남 관계,...'
    },
    {
      img: n3,
      date: '2025년 09월  25일 | 오전 09:00',
      title: '2025년 10월 1일, 원패스가 고객 여러분을...',
      desc: '안녕하세요, 고객 여러분! 베트남 행정 절차 대행 및 솔루션 전문 회사 원패스(One Pass)가 드디어...'
    }
  ];

  const items = [
    { id: 1, name: "페이스북", icon: fbIcon, link: "https://www.facebook.com/profile.php?id=61581863960708" },
    { id: 2, name: "카카오톡", icon: kakaotalkIcon, link: "https://pf.kakao.com/_BHALn" },
    { id: 3, name: "Zalo", icon: zaloIcon, link: "" },
    { id: 4, name: "네이버", icon: naverIcon, link: "https://blog.naver.com/onepass_kr" },
  ];
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const effectiveId = hoverId ?? activeId;
  const [scrolled, setScrolled] = useState(false);
  const [service, setService] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Xử lý gửi form ---
  const handleSubmit = async () => {
    if (!service || !name || !phone || !agree) {
      alert("모든 항목을 입력하고 동의해 주세요.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: service,
          HoTen: name,
          MaVung: countryCode,
          SoDienThoai: phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`❌ 오류 발생: ${data.error || "Server error"}`);
        console.error("Server Error:", data);
        return;
      }

      alert("✅ 상담 신청 완료되었습니다!");
      console.log("✅ Server response:", data);


      setService("");
      setName("");
      setPhone("");
      setAgree(false);
    } catch (err) {
      console.error("❌ Lỗi khi kết nối server:", err);
      alert("❌ 서버 연결 실패 (Server connection failed)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="index-page" style={{ background: "#ffffffff" }}>

        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <section
                  id="hero"
                  className="hero section"
                  style={{
                    margin: 0,
                    padding: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    minHeight: "80vh",
                    width: "100vw",
                    paddingTop: "120px",
                  }}
                >
                  <div
                    className="parallax-window fullscreen hero-flex"
                    style={{
                      width: "100vw",
                      height: "70vh",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Hero content: title + centered search (matches provided design) */}
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                      <h1 style={{ color: '#fff', fontSize: 56, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', margin: 0, textAlign: 'center' }}>
                        ONE PASS, 한번에 PASS
                      </h1>

                      <div style={{ width: '64%', maxWidth: 920 }}>
                        <form style={{ display: 'flex', alignItems: 'center', height: 56, background: 'rgba(255,255,255,0.06)', borderRadius: 10, border: '1px solid rgba(255, 255, 255, 1)', overflow: 'hidden' }}>
                          <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
                            <input className="search-hero" type="text" placeholder="검색어를 입력하세요" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent', color: '#fff', fontSize: 18 }} />
                          </div>
                          <button type="submit" style={{ height: '100%', minWidth: 72, background: 'rgba(255,255,255,0.06)', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}>🔍</button>
                        </form>
                      </div>

                    </div>

                  </div>

                  <div
                    style={{
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: 60,
                      fontFamily: "sans-serif",
                      zIndex: 9999,
                    }}
                  >
                    {/* --- Bên trái --- */}
                    <div
                      style={{
                        background: "#d7c199",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 16px",
                        height: "100%",
                        minWidth: 310,
                        textAlign: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 16 }}>📞</span>
                        <span style={{ fontWeight: 700, fontSize: 16 }}>전화번호</span>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>
                        (+82) 051-715-0607
                      </div>
                    </div>

                    {/* --- Giữa --- */}
                    <div
                      style={{
                        flex: 1,
                        background: "#000",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                        padding: "0 14px",
                        height: "100%",
                      }}
                    >
                      <label style={{ fontSize: 16 }}>서비스 선택</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        style={{
                          background: "#fff",
                          color: "#000",
                          border: "none",
                          borderRadius: 6,
                          padding: "6px 10px",
                          fontSize: 16,
                          width: 160,
                          height: 38,
                          boxSizing: "border-box",
                          marginRight:15
                        }}
                      >
                        <option value="">서비스 선택</option>
                        <option value="인증 센터">인증 센터</option>
                        <option value="결혼 이민">결혼 이민</option>
                        <option value="출생신고 대행">출생신고 대행</option>
                        <option value="출입국 행정 대행">출입국 행정 대행</option>
                        <option value="신분증명 서류 대행">신분증명 서류 대행</option>
                        <option value="입양 절차 대행">입양 절차 대행</option>
                        <option value="비자 대행">비자 대행</option>
                        <option value="법률 컨설팅">법률 컨설팅</option>
                        <option value="B2B 서비스">B2B 서비스</option>
                        <option value="기타">기타</option>
                      </select>

                      <label style={{ fontSize: 16, marginLeft:15, }}>이름</label>
                      <input
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 6,
                          border: "none",
                          fontSize: 16,
                          width: 160,
                          height: 38,
                          boxSizing: "border-box",
                         
                          marginRight:15
                        }}
                        required
                        pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                        title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
                      />

                      <label style={{ fontSize: 16 }}>전화번호</label>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        style={{
                          background: "#fff",
                          color: "#000",
                          border: "none",
                          borderRadius: 6,
                          padding: "6px 10px",
                          fontSize: 16,
                          width: 100, 
                          height: 38,
                          boxSizing: "border-box",
                        }}
                      >
                        <option value="">선택</option>
                        <option value="+82">+82</option>
                        <option value="+84">+84</option>
                      </select>

                      <input
                        placeholder="전화번호"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 6,
                          border: "none",
                          fontSize: 16,
                          width: 160,
                          height: 38,
                          boxSizing: "border-box",
                        }}
                        pattern={
                          countryCode === "+82"
                            ? "[0-9]{9,11}"
                            : countryCode === "+84"
                              ? "[0-9]{9,10}"
                              : ".*"
                        }
                        title={
                          countryCode === "+82"
                            ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                            : countryCode === "+84"
                              ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                              : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
                        }
                      />

                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: 16,
                          gap: 4,
                          color: "#bbb",
                          whiteSpace: "nowrap",
                          marginLeft:20
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          style={{ marginRight: 6 }}
                        />
                        개인정보 수집 및 이용 동의
                      </label>
                    </div>

                    {/* --- Nút gửi --- */}
                    <div
                      onClick={loading ? undefined : handleSubmit}
                      style={{
                        width: 310,
                        background: "#d7c199",
                        color: "#fff",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 24px",
                        height: "100%",
                        cursor: loading ? "not-allowed" : "pointer",
                        fontSize: 16,
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? "전송 중..." : "상담 신청"}
                    </div>
                  </div>

                  <div className="social-container">
                    {items.map((item) => {
                      const isExpanded = effectiveId === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`social-btn ${isExpanded ? "expanded" : ""}`}
                          onMouseEnter={() => setHoverId(item.id)}
                          onMouseLeave={() => setHoverId(null)}
                          onClick={() => {
                            setActiveId((prev) => (prev === item.id ? null : item.id));
                            window.open(item.link, "_blank");
                          }}
                        >
                          <img src={item.icon} alt={item.name} className="icon" />
                          <span className="label">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>



                <section id="about" className="about section" style={{ background: "#ffffffff", padding: "40px 0" }}>
                  <div style={{
                    maxWidth: "1300px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "100px",
                  }} > {/* LEFT */}
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        color: "#000",
                        marginBottom: "40px",
                        lineHeight: "1.5",
                      }} > 고객님의 모든 행정 절차, 전문<br/>적인 책임감으로 해결해 드리겠습니다.	
                      </h2> <div style={{ display: "flex", gap: "60px", }} >
                        {/* Item 1 */} <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: "40px", fontWeight: "700", color: "#2f4d90", }} >
                            90
                          </div>
                          <div style={{ fontSize: "18px", marginTop: "8px" }}>
                            만족 고객 수
                          </div>
                        </div>
                        {/* Item 2 */}
                        <div style={{ textAlign: "center" }}>
                          <div style={{
                            fontSize: "40px",
                            fontWeight: "700",
                            color: "#2f4d90",
                          }} >
                            67
                          </div>
                          <div style={{ fontSize: "18px", marginTop: "8px" }}>
                            접수 사례건 수
                          </div>
                        </div>
                        {/* Item 3 */}
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontSize: "40px", fontWeight: "700", color: "#2f4d90", }} >
                            23
                          </div>
                          <div style={{ fontSize: "18px", marginTop: "8px" }}>
                            누적 상담건 수
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#2f4d90", marginBottom: "20px", }} >
                        ABOUT US
                      </h3>
                      <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#333", marginBottom: "30px", }} >
                        2025년, 대한민국 부산에서 원패스(One Pass)가 힘찬 첫걸음을 시작했습니다. 원패스는 베트남 관련 행정 절차에 대한 가장 정확한 지원과 해결책을 제공하기 위해 탄생한 행정 대행 및 솔루션 회사입니다. 여권, 비자, 결혼 서류, 영사 확인 및 공증 등 모든 행정 업무에 대해 정확한 컨설팅 및 지원 서비스를 베트남인과 한국인 모두에게 제공하며, 고객의 시간과 노력을 절약하는 가장 효율적인 길을 열어 드립니다.
                      </p>
                      <button style={{ padding: "12px 28px", backgroundColor: "#2f4d90", color: "#fff", fontSize: "15px", border: "none", borderRadius: "4px", cursor: "pointer", }} >
                        더보기
                      </button>
                    </div>
                  </div>
                </section>

                <section className="text-white py-20" style={{ background: '#2B3A67' }}>
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                      <p className="text-sm uppercase tracking-[0.25em] mb-3">OUR SERVICES</p>
                      <h2 className="text-3xl md:text-4xl font-extrabold leading-relaxed">
                        베트남-한국 고객의 모든 행정 절차를 직접 대행하여 <br /> 가장 신속하고 정확하게
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start sv-container">
                      {/* Left timeline menu */}
                      <div className="sv-left-wrap ">
                        {/* line + dot */}
                        <div
                          className="sv-left-line"
                          style={{ left: active !== null ? "0px" : "100px" }}
                        ></div>

                        {/* dot chỉ hiện khi có active */}
                        {active !== null && (
                          <div
                            className="sv-left-dot"
                            style={{
                              top: `${active * 32}px`,   // 32px = khoảng cách mỗi item
                              left: "0px"
                            }}
                          ></div>
                        )}
                        {/* List */}
                        <ul className="sv-left-list">
                          {services.map((s, index) => {
                            const isActive = active === index;
                            return (
                              <li key={s.title} className={isActive ? "active" : ""} onClick={() => setActive(index)}>
                                <span className="sv-left-title">{s.title}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      {/* Right grid cards */}
                      <div>
                        {(() => {
                          const activeTitle = services[active]?.title;
                          const cards = (serviceCardsData[activeTitle] || serviceCardsData["결혼 / 이혼"] || []).slice(0, 6);
                          return (
                            <div className="sv-cards-grid">
                              {cards.slice(0, 6).map((c, i) => (
                                <div key={i} className="sv-card">
                                  <div className="sv-card-inner">
                                    <div className="sv-card-thumb">
                                      <img src={c.img} alt={c.title} style={{ borderRadius: "8px", marginBottom: "12px" }} />
                                    </div>
                                    <div className="sv-card-title">{c.title}</div>
                                    <div className="sv-card-desc sv-clamp-2">{c.desc}</div>
                                   <Link to="/Service" style={{ textDecoration: "none" }}>
  <button className="sv-card-arrow">→</button>
</Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Tin nổi bật section */}
                <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 0 80px 0' }}>
                  <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div style={{ color: '#E3DCCC', fontWeight: 800, letterSpacing: '0.25em', fontSize: 32, marginBottom: 8 }}>NEWSROOM</div>
                    <div style={{ color: '#0B2447', fontWeight: 900, fontSize: 30, lineHeight: 1.3 }}>원패스의 최신 소식과 정보를 놓치지 마세요</div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}>
                    {posts.map((p, idx) => (
                      <div key={idx} style={{ overflow: 'hidden', }}>
                        <img src={p.img} alt={p.title} style={{ width: '100%', height: 220, borderRadius: 12, objectFit: 'cover' }} />
                        <div style={{ paddingTop: 16 }}>
                          <div style={{ color: '#7A8797', fontSize: 14, marginBottom: 8 }}>{p.date}</div>
                          <div style={{ color: '#0B2447', fontWeight: 700, fontSize: 18, lineHeight: 1.5, marginBottom: 8 }}>{p.title}</div>
                          <div style={{ color: '#6F7C8F', fontSize: 16, lineHeight: 1.6 }}>{p.desc}</div>
                          <button style={{ marginTop: 12, width: 28, height: 28, borderRadius: 6, border: '1px solid #D6DDE7', background: '#fff', color: '#0B2447' }}>→</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: 'center', marginTop: 26 }}>
                    <button style={{ background: '#2F4D90', color: '#fff', border: 'none', padding: '12px 50px', fontWeight: 700 }}>더 보기</button>
                  </div>
                </section>


                {/* ===== TRENDING COPYRIGHT SECTION (Carousel) ===== */}

                <section style={{ background: '#CFEAEC', padding: '80px 0' }}>
                  <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                    {/* Left copy */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                      <div style={{ color: '#2B3A67', fontWeight: 500, letterSpacing: '0.15em', marginBottom: 12, fontSize: 24 }}>CONSULT</div>
                      <h2 style={{ color: '#000000ff', fontSize: 32, fontWeight: 900, lineHeight: 1.35, margin: 0 }}>
                        언제 어디서나, 가장 편한 방법으로 
                        <br />정확한 해결책을 만나보세요.
                      </h2>
                      <p style={{ marginTop: 20, color: '#234567', opacity: 0.85, fontSize: 16, lineHeight: 1.9, maxWidth: 520 }}>
                        문제의 시급성이나 내용의 복잡성에 따라 전화, 방문, 채팅, 이메일 중 가장 적합한 상담 방식을 자유롭게 선택하실 수 있습니다. 원패스의 전문 상담사가 모든 채널에서 고객님의 문제 해결을 위해 신속하게 동행합니다. 가장 편하신 방법으로 지금 바로 문의하세요.
                      </p>
                    </div>
                    {/* Right cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      {[
                        { img: icPhone, title: '전화 상담', desc: '급한 문제를 빠르게 해결할 수 있습니다. 전문 상담사와 바로 연결하여 상담 받을 수 있습니다.' },
                        { img: icVisit, title: '방문 상담', desc: '예약 후 직접 방문하시면 담당자가 서류를 함께 검토하며 가장 정확한 해결책을 제시해 드립니다.' },
                        { img: icChat, title: '채팅 상담', desc: '실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게 무료상담을 받을 수 있습니다.' },
                        { img: icMail, title: '이메일 상담', desc: '문의사항을 남겨주시고 문의 내용을 확인하여 3영업일 이내에 답변을 드립니다.' },
                      ].map((c, i) => {
                        const isRight = i % 2 === 1; // giữ lệch dọc bằng marginTop, kích thước đồng nhất
                        return (
                          <div
                            key={i}
                            style={{
                              background: '#ffffff',
                              borderRadius: 22,
                              padding: '22px 22px 18px 22px',
                              boxShadow: '0 10px 24px rgba(10,20,40,0.06)',
                              border: '1px solid #E9EEF3',
                              marginTop: isRight ? 32 : 0,
                              height: 380,
                              display: 'flex',
                              flexDirection: 'column',
                              boxSizing: 'border-box',
                            }}
                          >
                            <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                              <div
                                style={{
                                  width: 160,
                                  height: 160,
                                  borderRadius: 16,
                                  background: 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  boxShadow: 'none'
                                }}
                              >
                                <img src={c.img} alt="" style={{ width: 128, height: 128, objectFit: 'contain' }} />
                              </div>
                            </div>
                            <div style={{ color: '#0B2447', fontWeight: 800, fontSize: 20, marginTop: 6 }}>{c.title}</div>
                            <div style={{ color: '#6F7C8F', fontSize: 14, lineHeight: 1.7, marginTop: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.desc}</div>
                            <button
                              onClick={(e) => {
                                e.currentTarget.style.transform = 'translateX(-10px)';
                                setTimeout(() => (e.currentTarget.style.transform = 'translateX(0)'), 150);
                              }}
                              style={{ marginTop: 'auto', background: 'transparent', border: 'none', color: '#2F4D90', fontSize: 22, padding: 0, cursor: 'pointer', alignSelf: 'flex-start', transition: 'transform .15s ease' }}
                            >
                              →
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </section>




              </>
            }
          />

          <Route path="/Support" element={<Support />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/News" element={<News />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/news/전체 뉴스" element={<AllNewsPage />} />
          <Route path="/news/대사관•총영사관 소식" element={<ConsulateNews />} />
          <Route path="/news전체 뉴스/NewsDetail" element={<NewsDetail />} />
        </Routes>
        <Countdown />
        {/* ===== FOOTER ===== */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
