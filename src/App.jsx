
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
import a37 from "./assets/img/n1-1-3.png";
import n39 from "./assets/img/n39.png";
import n1 from "./assets/img/n19.png";
import n2 from "./assets/img/n2.png";
import n3 from "./assets/img/n3.png";


import certIcon from "./assets/img/s1icon.png";
import certActive from "./assets/img/s1-1icon.png";
import certHover from "./assets/img/s1-1icon.png";

import marriageIcon from "./assets/img/s2icon.png";
import marriageActive from "./assets/img/s2-2icon.png";
import marriageHover from "./assets/img/s2-2icon.png";

import birthIcon from "./assets/img/s3icon.png";
import birthActive from "./assets/img/s3-3icon.png";
import birthHover from "./assets/img/s3-3icon.png";

import travelHover from "./assets/img/s4-4icon.png";
import travelIcon from "./assets/img/s4icon.png";
import travelActive from "./assets/img/s4-4icon.png";

import idHover from "./assets/img/s5-5icon.png";
import idIcon from "./assets/img/s5icon.png";
import idActive from "./assets/img/s5-5icon.png";

import adoptionHover from "./assets/img/s6-6icon.png";
import adoptionIcon from "./assets/img/s6icon.png";
import adoptionActive from "./assets/img/s6-6icon.png";

import visaHover from "./assets/img/s7-7icon.png";
import visaIcon from "./assets/img/s7icon.png";
import visaActive from "./assets/img/s7-7icon.png";

import lawIcon from "./assets/img/s8icon.png";
import lawActive from "./assets/img/s8-8icon.png";
import lawHover from "./assets/img/s8-8icon.png";

import etcHover from "./assets/img/s9-9icon.png";
import etcIcon from "./assets/img/s9icon.png";
import etcActive from "./assets/img/s9-9icon.png";


import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Layout from "./Layout.jsx";
import Header from "./components/Header.jsx";
import Countdown from "./components/Countdown.jsx";
import Footer from "./components/Footer.jsx";
import Support from "./components/Support.jsx";
import Introduction from "./components/Introduction.jsx";
import Service from "./components/Service.jsx";
import News from "./components/News.jsx";
import Register from "./signup-in/Register.jsx";
import Login from "./signup-in/Login.jsx";
import Consult from "./components/Consult.jsx";
import AllNewsPage from "./components/AllNewsPage.jsx";
import ConsulateNews from "./components/ConsulateNews.jsx";
import NewsDetail from "./components/NewDeatail.jsx";
import NewsDetail2 from "./components/NewDeatail2.jsx";
import NewsDetail3 from "./components/NewDeatail3.jsx";
import NewsDetail4 from "./components/NewDeatail4.jsx";
import NewsDetail5 from "./components/NewDeatail5.jsx";

import { useLanguage } from "./LanguageContext.jsx";
import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

import heroBg from "./assets/img/herobanner-1.png";
import { useNavigate } from "react-router-dom";


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
  const { language } = useLanguage();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Google Analytics pageview tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

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
    {
      title: "인증 센터",
      icon: certIcon,
      activeIcon: certActive,
      hoverIcon: certHover
    },
    {
      title: "결혼 이민",
      icon: marriageIcon,
      activeIcon: marriageActive,
      hoverIcon: marriageHover
    },
    {
      title: "출생신고",
      icon: birthIcon,
      activeIcon: birthActive,
      hoverIcon: birthHover
    },
    {
      title: "출입국 행정",
      icon: travelIcon,
      activeIcon: travelActive,
      hoverIcon: travelHover
    },
    {
      title: "신분증명 서류",
      icon: idIcon,
      activeIcon: idActive,
      hoverIcon: idHover
    },
    {
      title: "입양 • 자녀 인지",
      icon: adoptionIcon,
      activeIcon: adoptionActive,
      hoverIcon: adoptionHover
    },
    {
      title: "비자 대행",
      icon: visaIcon,
      activeIcon: visaActive,
      hoverIcon: visaHover
    },
    {
      title: "법률 컨설팅",
      icon: lawIcon,
      activeIcon: lawActive,
      hoverIcon: lawHover
    },
    {
      title: "B2B 서비스",
      icon: etcIcon,
      activeIcon: etcActive,
      hoverIcon: etcHover
    },
  ];

  const navigate = useNavigate();

  // Navigate to Service page and provide only the service index in state
  const handleServiceClick = (serviceIndex, tabKey) => {
    navigate(`/Service`, { state: { serviceIndex } });
  };

  const serviceCardsData = {
    "인증 센터": [
      { img: a34, title: "번역 공증", desc: "베트남어, 한국어, 영어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증", tabKey: "a1", },
      { img: a1, title: "인증 센터", desc: "영사 확인, 사실인증", tabKey: "a2" },
      { img: a37, title: "사실 공증", desc: "문서, 서류, 개인 서명 및 개인 정보의 정확성과 합법성 인증, 내용 사실 공증", tabKey: "a2" },

    ],
    "결혼 이민": [
      { img: a2, title: "한국에서 혼인 신고 ", desc: "한국에서의 결혼 등록 절차 전반을 대행하고 지원", tabKey: "a3" },
      { img: a3, title: "혼인관계증명서 발급 신청", desc: "혼인 관계 증명서 발급에 필요한 서류 컨설팅및 지원", tabKey: "a4" },
      { img: a35, title: "혼인요건인증서 발급 신청", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원", tabKey: "a5" },
      { img: a36, title: "혼인 재신고", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원", tabKey: "a6" },
      { img: a4, title: "결혼이민 비자신청", desc: "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원", tabKey: "a7" },

    ],
    "출생신고": [
      { img: a5, title: "출생 신고", desc: "신생아 출생 신고를 정확하고 신속하게 대행", tabKey: "a8" },
      { img: a6, title: "출생 재신고", desc: "출생신고서 및 출생신고증 분실 시 재신고", tabKey: "a9" },
      { img: a7, title: "사망 신고", desc: "사망 신고 및 관련 서류 처리 대행", tabKey: "a10" },
      { img: a8, title: "사망 재신고", desc: "사망증명서 및 사망신고서 분실 시 재등록", tabKey: "a11" },
    ],
    "출입국 행정": [
      { img: a9, title: "베트남 국적 포기 신청", desc: "베트남 국적 포기 신청 및 서류 절차 대행", tabKey: "a12" },
      
      { img: a11, title: "베트남 국적 재귀화 신청", desc: "베트남 국적 재귀화를 위한 신청 및 행정 절차 대행", tabKey: "a14" },
      { img: a12, title: "베트남으로 시체, 유해, 유골 송환 허가 신청", desc: "베트남으로 시체, 유해, 유골을 송환하기 위한 서류 및 허가 절차 대행", tabKey: "a15" },
      { img: a13, title: "베트남 국적 사실 확인", desc: "재외 베트남인의 베트남 국적 사실 확인 절차를 안내하고 대행", tabKey: "a16" },
    ],
    "신분증명 서류": [
      { img: a14, title: "일반 여권 (재)발급·변경·추가", desc: "일반 여권의 신규 발급, 정보 변경 및 추가 절차를 대행", tabKey: "a17" },
      { img: a15, title: "호적 변경·정정·추가, 민족 재확인, 성별 재확인 등", desc: "이름, 성별, 국적 등 호적 정보 변경 신청 및 관련 절차 지원", tabKey: "a18" },
      { img: a16, title: "베트남 국민 신고 업데이트", desc: "재외 베트남인으로서의 국민 등록 및 정보 갱신 대행", tabKey: "a19" },
      { img: a17, title: "베트남 출신 증명서 발급", desc: "베트남 출신 확인서 발급을 위한 서류 준비 및 절차 지원", tabKey: "a20" },
      { img: a18, title: "호적증서 반사오 재발급", desc: "출생, 혼인 등 각종 호적 서류의 사본 재발급 대행", tabKey: "a21" },
    ],
    "입양 • 자녀 인지": [
      { img: a19, title: "보호자 인지·해지 신고", desc: "재외 베트남인 간 또는 외국인과의 보호자 신청 등록, 해지 신고 대행", tabKey: "a22" },
      { img: a20, title: "혼외자 자녀 인지", desc: "혼외자 자녀 인지 등록 절차 대행", tabKey: "a23" },
      { img: a21, title: "입양 절차 대행", desc: "베트남 국적 아동의 입양 등록 및 재등록 절차 대행", tabKey: "a24" },

    ],
    "비자 대행": [
    
      { img: a23, title: "초청 (단기방문 C-3-1 비자)", desc: "한국 단기 방문 비자(C-3-1) 신청 및 발급 절차 지원", tabKey: "a26" },
      { img: a24, title: "초청 (방문동거 F-1-5 비자)", desc: "한국 방문동거 비자(F-1-5) 신청에 필요한 서류 준비 및 절차 대행", tabKey: "a27" },
      { img: a25, title: "베트남 비자면제증 발급", desc: "베트남 비자 면제서의 신규 등록 및 재등록 절차 대행", tabKey: "a28" },
      { img: a26, title: "베트남 전자비자·상용비자 발급", desc: "전자 비자(E-Visa) 및 상용 비자의 발급 등록 대행", tabKey: "a29" },
    ],
    "법률 컨설팅": [
      { img: a27, title: "이혼 소송", desc: "베트남-한국 간 국제 이혼 소송의 제기 및 진행에 필요한 법적 절차 대행", tabKey: "a30" },
      { img: a28, title: "노동 관련 소송", desc: "베트남/한국 노동법 관련 분쟁 발생 시 소송 제기 및 법률 자문", tabKey: "a31" },
      { img: a29, title: "체류자 관련 컨설팅", desc: "베트남/한국 내 체류자의 자진 출국 및 합법적 체류 전환 등 민감한 문제 상담", tabKey: "a32" },
    ],
    "B2B 서비스": [
      { img: a30, title: "베트남·한국에서 법인·지사·대표 사무실 설립", desc: "한국 또는 베트남 내 법인, 지사, 또는 사무소 설립에 필요한 행정 절차 대행", tabKey: "a33" },
      { img: n39, title: "회사/사업 해산 • 폐업", desc: "회사 폐업 및 투자 사업 종료와 관련 절차 대행", tabKey: "a39" },
      { img: a31, title: "베트남·한국 내 노동 허가서, 임시 거주증 발급", desc: "한국/베트남 외국인 근로자의 취업 허가 및 임시 거주증 발급 절차 대행", tabKey: "a34" },
      { img: a32, title: "수출입 허가서", desc: "기업의 원활한 무역 활동을 위한 수출입 허가증 발급 및 관련 규제 준수 절차 대행", tabKey: "a35" },
      { img: a33, title: "B2B 바이어 매칭", desc: "B2B 파트너를 매칭하여 기업의 성공적인 시장 진출과 매출 확대", tabKey: "a36" },

    ],
  };

  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("copyright");
  const [news, setNews] = useState(newsData);

  // animated stats: display numbers that count up on mount
  const statsTarget = { satisfied: 380, cases: 450, consult: 800 };
  const [displayStats, setDisplayStats] = useState({ satisfied: 0, cases: 0, consult: 0 });

  useEffect(() => {
    const duration = 1500; // ms
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayStats({
        satisfied: Math.floor(progress * statsTarget.satisfied),
        cases: Math.floor(progress * statsTarget.cases),
        consult: Math.floor(progress * statsTarget.consult),
      });
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // ensure final values exact
        setDisplayStats({ ...statsTarget });
      }
    }
    requestAnimationFrame(step);
  }, []);



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
    { id: 3, name: "Zalo", icon: zaloIcon, link: "https://zalo.me/0395944818" },
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

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  const handleSubmit = async () => {
  const lang = localStorage.getItem("lang") || "ko";

  const messages = {
    ko: {
      empty: "모든 항목을 입력하고 동의해 주세요.",
      success: "상담 신청 완료되었습니다!",
      fail: "서버 연결 실패 (Server connection failed)",
      serverError: "서버 오류가 발생했습니다.",
    },
    vi: {
      empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
      success: "Đăng ký tư vấn thành công!",
      fail: "Kết nối máy chủ thất bại.",
      serverError: "Đã xảy ra lỗi máy chủ.",
    },
  };

  if (!service || !name || !phone || !agree) {
    showTemporaryPopup(messages[lang].empty, true);
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("https://onepasscms-backend.onrender.com/api/tuvan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TenDichVu: service,
        TenHinhThuc: "Tư Vấn Nhanh", 
        HoTen: name,
        MaVung: countryCode,
        SoDienThoai: phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      showTemporaryPopup(`${messages[lang].serverError}`, true);
      console.error("Server Error:", data);
      return;
    }

    showTemporaryPopup(messages[lang].success);
    setService("");
    setName("");
    setPhone("");
    setAgree(false);
  } catch (err) {
    console.error("Lỗi khi kết nối server:", err);
    showTemporaryPopup(messages[lang].fail, true);
  } finally {
    setLoading(false);
  }
};
  return (

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
                  minHeight: "50vh",
                  width: "100vw",
                  paddingTop: "120px",
                }}
              >
                <div
                  className="parallax-window fullscreen hero-flex"
                  style={{
                    width: "100vw",
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 18,
                      padding: "0 16px",
                    }}
                  >
                    <h1
                      style={{
                        color: "#fff",
                        fontSize: "clamp(28px, 6vw, 56px)",
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        margin: 0,
                        textAlign: "center",
                        lineHeight: 1.3,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {language === "VI"
                        ? "ONE PASS\n GIẢI PHÁP NHANH, KẾT QUẢ CHẮC!"
                        : "ONE PASS, 한번에 패스"}
                    </h1>

                    
                  </div>

                  {/* Responsive style */}
                  <style>
                    {`
      @media (max-width: 768px) {
        .hero-flex {
          height: 60vh !important;
        }
        .hero-flex h1 {
          font-size: 30px !important;
          letter-spacing: 1px !important;
        }
        .hero-flex form {
          height: 46px !important;
        }
        .hero-flex input {
          font-size: 16px !important;
        }
        .hero-flex button {
          min-width: 52px !important;
          font-size: 18px !important;
        }
      }

      @media (max-width: 500px) {
        .hero-flex {
          height: 55vh !important;
        }
        .hero-flex h1 {
          font-size: 33px !important;
          line-height: 1.3 !important;
          transform: translateY(40px);
          
        }
        .hero-flex form {
          height: 44px !important;
        }
        .hero-flex input::placeholder {
          font-size: 15px !important;
        }

      }
    `}
                  </style>
                </div>


                <div
                  className="consultation-bar"
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
                      <span style={{ fontWeight: 700, fontSize: 16 }}>
                        {language === "VI" ? (<>Điện thoại</>) : ("전화번호")}
                      </span>
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
                    <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")}</label>
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
                        marginRight: 15
                      }}
                    >
                      <option value="">{language === "VI" ? (<>Chọn dịch vụ</>) : ("서비스 선택")}</option>
                      <option value="인증 센터">{language === "VI" ? (<>Chứng thực</>) : ("인증 센터")}</option>
                      <option value="결혼 이민">{language === "VI" ? (<>Kết hôn</>) : ("결혼 이민")}</option>
                      <option value="출생신고 대행">{language === "VI" ? (<>Khai sinh, khai tử</>) : ("출생신고 대행")}</option>
                      <option value="출입국 행정 대행">{language === "VI" ? (<>Xuất nhập cảnh</>) : ("출입국 행정 대행")}</option>
                      <option value="신분증명 서류 대행">{language === "VI" ? (<>Giấy tờ tuỳ thân</>) : ("신분증명 서류 대행")}</option>
                      <option value="입양 절차 대행">{language === "VI" ? (<>Nhận nuôi </>) : ("입양 절차 대행")}</option>
                      <option value="비자 대행">{language === "VI" ? (<>Thị thực</>) : ("비자 대행")}</option>
                      <option value="법률 컨설팅">{language === "VI" ? (<>Tư vấn pháp lý</>) : ("법률 컨설팅")}</option>
                      <option value="B2B 서비스">{language === "VI" ? (<>Dịch vụ B2B</>) : ("B2B 서비스")}</option>
                      <option value="기타">{language === "VI" ? (<>Khác </>) : ("기타")}</option>
                    </select>

                    <label style={{ fontSize: 16, marginLeft: 15, }}>{language === "VI" ? (<>Họ tên</>) : ("이름")}</label>
                    <input
                      placeholder={language === "VI" ? ("Họ tên") : ("이름")}
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

                        marginRight: 15
                      }}
                      required
                      pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                      title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
                    />

                    <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Điện thoại</>) : ("전화번호")}</label>
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
                      <option value="">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
                      <option value="+82">+82</option>
                      <option value="+84">+84</option>
                    </select>

                    <input
                      placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
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
                        marginLeft: 20
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        style={{ marginRight: 6 }}
                      />
                      {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
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
                    {loading
                      ? language === "VI"
                        ? "Đang gửi..."
                        : "전송 중..."
                      : language === "VI"
                        ? "Tư vấn"
                        : "상담 신청"}
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
                        <span className="label"> {language === "VI" ? (
                              item.name === "페이스북" ? "Liên Kết Facebook"
                                : item.name === "카카오톡" ? " Liên Kết KakaoTalk"
                                  : item.name === "Zalo" ? <>Liên Kết Zalo</>
                                    : item.name === "네이버" ? "Liên Kết Naver" 
                                                : item.name
                            ) : (
                              item.name
                            )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section
                id="about"
                className="about section"
                style={{ background: "#fff", padding: "40px 0" }}
              >
                <div
                  className="about-container"
                  style={{
                    maxWidth: "1300px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "100px",
                    flexWrap: "wrap",
                    padding: "0 20px",
                  }}
                >
                  {/* LEFT */}
                  <div style={{ flex: 1, minWidth: "320px" }}>
                    <h2
                      style={{
                        fontFamily: "",
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#000",
                        marginBottom: "40px",
                        lineHeight: "1.5",
                      }}
                    >
                      {language === "VI" ? (<>Mọi thủ tục hành chính, <br /> chúng tôi giải quyết<br /> bằng sự chuyên nghiệp.</>) : (<>고객님의 모든 행정 절차, 전문
                        <br />
                        적인 책임감으로 해결해 드리겠습니다.</>)}
                    </h2>

                    {/* ✅ Stats Section */}
                    <div
                      className="about-stats"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",

                        gap: "10px",
                        flexWrap: "nowrap",
                      }}
                    >
                      <div className="stat-item" style={{ flex: 1 }}>
                        <div className="stat-number">{displayStats.satisfied}</div>
                        <div className="stat-label">{language === "VI" ? (<>Khách hàng</>) : ("만족 고객 수")}</div>
                      </div>
                      <div className="stat-item" style={{ flex: 1 }}>
                        <div className="stat-number">{displayStats.cases}</div>
                        <div className="stat-label">{language === "VI" ? (<>Hồ sơ</>) : ("접수 사례건 수")}</div>
                      </div>
                      <div className="stat-item" style={{ flex: 1 }}>
                        <div className="stat-number">{displayStats.consult}</div>
                        <div className="stat-label">{language === "VI" ? (<>Lần tư vấn</>) : ("상담건 수")}</div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div
                    className="about-right"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      minWidth: "320px",
                    }}
                  >
                    <h3
                      className="about-text"
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#2f4d90",
                        marginBottom: "20px",
                        fontFamily: "'Gmarket Sans', 'Noto Sans KR', sans-serif",
                      }}
                    >
                      ABOUT US
                    </h3>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.7",
                        color: "#333",
                        marginBottom: "30px",
                        textAlign: "justify",
                      }}
                    >

                      {language === "VI" ?
                        (<>Năm 2025, One Pass đặt dấu chân đầu tiên tại Busan, Hàn Quốc.
                          One Pass là công ty tư vấn và đại diện thực hiện các thủ tục hành chính,
                          ra đời với mục đích hỗ trợ và cung cấp giải pháp chính xác nhất cho mọi thủ tục hành chính liên quan đến Việt Nam.
                          Chúng tôi cung cấp dịch vụ tư vấn và hỗ trợ chính xác cho mọi nghiệp vụ hành chính, bao gồm hộ chiếu, visa, hồ sơ kết hôn,
                          hợp pháp hóa lãnh sự và công chứng, dành cho cả người Việt Nam và người Hàn Quốc.
                          One Pass mở ra con đường hiệu quả nhất giúp quý khách tiết kiệm tối đa thời gian và công sức.</>)
                        :

                        (<> 2025년, 대한민국 부산에서 원패스(One Pass)가 힘찬 첫걸음을 시작했습니다.
                          원패스는 베트남 관련 행정 절차에 대한 가장 정확한 지원과 해결책을 제공하기
                          위해 탄생한 행정 대행 및 솔루션 회사입니다. 여권, 비자, 결혼 서류, 영사
                          확인 및 공증 등 모든 행정 업무에 대해 정확한 컨설팅 및 지원 서비스를
                          베트남인과 한국인 모두에게 제공하며, 고객의 시간과 노력을 절약하는 가장
                          효율적인 길을 열어 드립니다.</>)}
                    </p>

                    {/* ✅ Nút căn phải */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <Link to="/Introduction" style={{ textDecoration: "none" }}>
                        <button
                          className="about-btn"
                          style={{
                            padding: "12px 28px",
                            backgroundColor: "#2f4d90",
                            color: "#fff",
                            fontSize: "15px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          {language === "VI" ? (<>Xem thêm</>) : ("더보기")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ✅ Responsive CSS */}
                <style>
                  {`
      /* --- Default (Desktop ≥1200px) --- */
      .about-stats .stat-number {
        font-size: 60px;
        font-weight: 800;
        color: #2f4d90;
      }

      .about-stats .stat-label {
        font-size: 20px;
        margin-top: 10px;
        color: #111;
      }

      /* --- Tablet & iPhone Pro Max (400–800px) --- */
      @media (min-width: 400px) and (max-width: 800px) {
        .about-container {
          flex-direction: column;
          align-items: center;
          gap: 60px !important;
        }

        .about-stats {
          justify-content: space-around !important;
          gap: 10px !important;
          flex-wrap: nowrap !important;
        }

        .about-stats .stat-number {
          font-size: 72px !important;
        }

        .about-stats .stat-label {
          font-size: 22px !important;
        }

        .about h2 {
          font-size: 20px !important;
          text-align: center !important;
        }

        .about-right p {
          font-size: 17px !important;
        }

        .about-right div:last-child {
          display: flex !important;
          justify-content: flex-end !important;
        }
      }

      /* --- Mobile nhỏ (≤390px) --- */
      @media (max-width: 390px) {
         .about-stats {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important; /* căn giữa toàn bộ khối */
    align-items: flex-start !important;
    flex-wrap: nowrap !important;
    width: 100% !important;
    gap: 25px !important; /* tăng khoảng cách giữa 3 cột */
    padding: 0 10px !important; /* thêm lề trong nhẹ để không chạm mép */
    text-align: center !important;
  }

  .about-stats .stat-item {
    flex: 1 1 auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    text-align: center !important;
    line-height: 1.3 !important;
  }

  .about-stats .stat-number {
    font-size: 36px !important;
    line-height: 1.1 !important;
    margin-bottom: 6px !important;
  }

  .about-stats .stat-label {
    font-size: 14px !important;
    line-height: 1.4 !important;
    margin: 0 !important;
    white-space: nowrap !important; /* không cho chữ xuống dòng */
  }   }

      /* --- Mobile rất nhỏ (≤380px) --- */
      @media (max-width: 380px) {
         .about-stats {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important; /* căn giữa toàn bộ khối */
    align-items: flex-start !important;
    flex-wrap: nowrap !important;
    width: 100% !important;
    gap: 25px !important; /* tăng khoảng cách giữa 3 cột */
    padding: 0 10px !important; /* thêm lề trong nhẹ để không chạm mép */
    text-align: center !important;
  }

  .about-stats .stat-item {
    flex: 1 1 auto !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    text-align: center !important;
    line-height: 1.3 !important;
  }

  .about-stats .stat-number {
    font-size: 36px !important;
    line-height: 1.1 !important;
    margin-bottom: 6px !important;
  }

  .about-stats .stat-label {
    font-size: 14px !important;
    line-height: 1.4 !important;
    margin: 0 !important;
    white-space: nowrap !important; /* không cho chữ xuống dòng */
  }   }

                    
      }

      /* --- Tablet lớn đến desktop vừa (801–1199px) --- */
      @media (min-width: 801px) and (max-width: 1199px) {
        .about-stats .stat-number {
          font-size: 64px;
        }
        .about-stats .stat-label {
          font-size: 20px;
        }
      }
    `}
                </style>
              </section>

              <section className="services-carousel-section" style={{ background: '#CFEAEC', padding: '80px 0' }}>
                <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 20px' }}>
                  <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p style={{
                      fontFamily: "'Gmarket Sans', 'Noto Sans KR', sans-serif",
                      fontSize: 24,
                      fontWeight: 700,
                      
                      color: '#2B3A67',
                      marginBottom: 12
                    }}>
                      OUR SERVICES
                    </p>
                    <h2 style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: '#000',
                      lineHeight: 1.4,
                      margin: 0
                    }}>

                      {language === "VI" ? (<>Trực tiếp đại diện thực hiện mọi thủ tục hành chính của khách hàng
                        <br />Việt Nam - Hàn Quốc, nhanh chóng và chính xác nhất.</>)
                        :
                        (<> 베트남-한국 고객의 모든 행정 절차를<br />
                          직접 대행하여 가장 신속하고 정확하게.</>)}
                    </h2>
                  </div>


                  {/* Service Icons Carousel */}
                  <div className="service-icons-container" style={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 24,
                    padding: '20px 0',
                    marginBottom: 40,
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',

                  }}>
                    {services.map((service, index) => {
                      const isActive = active === index;
                      return (
                        <div
                          key={service.title}
                          className="service-icon-item"
                          onClick={() => setActive(index)}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minWidth: 120,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div
                            className="service-icon-circle"
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: 12,

                              transition: 'all 0.3s ease'
                            }}
                          >
                            <img
                              src={isActive ? service.activeIcon : service.icon}
                              alt={service.title}
                              style={{
                                width: 80,
                                height: 80,
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                          <span
                            style={{
                              fontSize: 14,
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ? '#2B3A67' : '#666',
                              textAlign: 'center',

                              lineHeight: 1.3,
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {language === "VI" ? (
                              service.title === "인증 센터" ? "CHỨNG THỰC"
                                : service.title === "결혼 이민" ? "KẾT HÔN"
                                  : service.title === "출생신고" ? <>KHAI SINH <br /> KHAI TỬ</>
                                    : service.title === "출입국 행정" ? "XUẤT NHẬP CẢNH"
                                      : service.title === "신분증명 서류" ? <>GIẤY TỜ <br /> TÙY THÂN</>
                                        : service.title === "입양 • 자녀 인지" ? "NHẬN NUÔI "
                                          : service.title === "비자 대행" ? "THỊ THỰC "
                                            : service.title === "법률 컨설팅" ? "TƯ VẤN PHÁP LÝ"
                                              : service.title === "B2B 서비스" ? "DỊCH VỤ B2B"
                                                : service.title
                            ) : (
                              service.title
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {/* Service Cards - Desktop Grid, Mobile Horizontal Scroll */}
                  <div className="service-cards-wrapper">
                    <div className="service-cards-container">
                      {(() => {
                        const activeTitle = services[active]?.title;
                        const cards = serviceCardsData[activeTitle] || [];
                        return cards.map((card, index) => (
                          <Link
                            to="/Service"
                            state={{ serviceIndex: active }}
                            style={{ textDecoration: 'none' }}
                          >
                            <div
                              key={index}
                              className="service-card"
                              style={{
                                background: '#ffffff',
                                borderRadius: 16,
                                padding: 20,
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                              }}
                            >
                              <div style={{ marginBottom: 16 }}>
                                <img
                                  src={card.img}
                                  alt={card.title}
                                  style={{
                                    width: '100%',
                                    height: 160,
                                    objectFit: 'cover',
                                    borderRadius: 12
                                  }}
                                />
                              </div>
                              <h3 style={{
                                fontSize: 18,
                                fontWeight: 600,
                                color: '#000',
                                marginBottom: 12,
                                lineHeight: 1.4
                              }}>
                                {language === "VI"
                                  ? card.title === "번역 공증" ? "Dịch thuật, công chứng"
                                    : card.title === "인증 센터" ? "Hợp pháp hoá"
                                     : card.title === "사실 공증" ? "Chứng thực"
                                      : card.title === "한국에서 혼인 신고 " ? "Đăng ký kết hôn tại Hàn Quốc"
                                        : card.title === "혼인관계증명서 발급 신청" ? "Cấp giấy xác nhận tình trạng hôn nhân"
                                          : card.title === "혼인요건인증서 발급 신청" ? "Giấy xác nhận đủ điều kiện kết hôn"
                                            : card.title === "혼인 재신고" ? "Đăng ký lại việc kết hôn"
                                              : card.title === "결혼이민 비자신청" ? "Đăng ký Visa kết hôn"

                                                : card.title === "출생 신고" ? "Đăng ký khai sinh"
                                                  : card.title === "출생 재신고" ? "Đăng ký lại khai sinh"
                                                    : card.title === "사망 신고" ? "Đăng ký việc tử"
                                                      : card.title === "사망 재신고" ? "Đăng ký lại khai tử"

                                                        : card.title === "베트남 국적 포기 신청" ? "Xin thôi quốc tịch Việt Nam"
                                                          
                                                            : card.title === "베트남 국적 재귀화 신청" ? "Xin trở lại quốc tịch Việt Nam"
                                                              : card.title === "베트남으로 시체, 유해, 유골 송환 허가 신청" ? "Cấp Giấy phép nhập cảnh thi hài, hài cốt, tro cốt"
                                                                : card.title === "베트남 국적 사실 확인" ? "Thủ tục hồi hương (đăng ký thường trú ở Việt Nam) "

                                                                  : card.title === "일반 여권 (재)발급·변경·추가" ? "Cấp, bổ sung, sửa đổi hộ chiếu phổ thông"
                                                                    : card.title === "호적 변경·정정·추가, 민족 재확인, 성별 재확인 등" ? "Thay đổi, cải chính, bổ sung hộ tịch"
                                                                      : card.title === "베트남 국민 신고 업데이트" ? "Đăng ký công dân, cập nhật thông tin công dân"
                                                                        : card.title === "베트남 출신 증명서 발급" ? "Cấp giấy xác nhận người gốc Việt Nam"
                                                                          : card.title === "호적증서 반사오 재발급" ? "Cấp bản sao giấy tờ hộ tịch"

                                                                            : card.title === "보호자 인지·해지 신고" ? "Đăng ký / chấm dứt việc giám hộ "
                                                                              : card.title === "혼외자 자녀 인지" ? "Nhận cha, mẹ, con"
                                                                                : card.title === "입양 절차 대행" ? "Đăng ký nhận con nuôi"

                                                                                    : card.title === "초청 (단기방문 C-3-1 비자)" ? "Visa thăm thân ngắn hạn (C-3-1)"
                                                                                      : card.title === "초청 (방문동거 F-1-5 비자)" ? "Visa thăm thân dài hạn (F-1-5)"
                                                                                        : card.title === "베트남 비자면제증 발급" ? "Cấp giấy miễn thị thực "
                                                                                          : card.title === "베트남 전자비자·상용비자 발급" ? "Đăng ký cấp thị thực điện tử / thị thực công tác"

                                                                                            : card.title === "이혼 소송" ? "Liên quan tới ly hôn"
                                                                                              : card.title === "노동 관련 소송" ? "Liên quan tới lao động"
                                                                                                : card.title === "체류자 관련 컨설팅" ? "Liên quan tới cư trú"

                                                                                                  : card.title === "베트남·한국에서 법인·지사·대표 사무실 설립" ? "Thành lập văn phòng đại diện / công ty"
                                                                                                  : card.title === "회사/사업 해산 • 폐업" ? "Giải thể công ty, chấm dứt dự án đầu tư"
                                                                                                    : card.title === "베트남·한국 내 노동 허가서, 임시 거주증 발급" ? "Đăng ký giấy phép lao động, thẻ tạm trú"
                                                                                                      : card.title === "수출입 허가서" ? "Giấy phép xuất nhập khẩu"
                                                                                                        : card.title === "B2B 바이어 매칭" ? "Kết nối khách hàng B2B"
                                                                                                          : card.title
                                  : card.title}
                              </h3>
                              <p style={{
                                fontSize: 14,
                                color: '#666',
                                lineHeight: 1.6,
                                marginBottom: 20,
                                flex: 1
                              }}>
                                {language === "VI"
                                  ? card.desc ===
                                    "베트남어, 한국어, 영어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증"
                                    ? "Dịch và công chứng bản dịch giấy tờ, hồ sơ, tài liệu đa ngôn ngữ: Tiếng Việt, Tiếng Hàn, Tiếng Anh và Tiếng Trung"
                                    : card.desc === "영사 확인, 사실인증"
                                      ? "Chứng nhận lãnh sự, hợp pháp hoá lãnh sự"
                                      : card.desc === "문서, 서류, 개인 서명 및 개인 정보의 정확성과 합법성 인증, 내용 사실 공증"
                                      ? "Chứng thực tính chính xác, hợp pháp của các giấy tờ, văn bản, chữ ký của cá nhân, thông tin cá nhân"
                                      : card.desc === "한국에서의 결혼 등록 절차 전반을 대행하고 지원"
                                        ? "Hỗ trợ, thực hiện các thủ tục đăng ký kết hôn tại Hàn Quốc"
                                        : card.desc === "혼인 관계 증명서 발급에 필요한 서류 컨설팅및 지원"
                                          ? "Tư vấn, xử lý hồ sơ liên quan tới cấp giấy xác nhận tình trạng hôn nhân"
                                          : card.desc === "결혼 이민 비자 신청에 필요한 서류 준비 및 절차 지원"
                                            ? "Hỗ trợ, thực hiện các thủ tục đăng ký kết hôn tại Việt Nam"

                                            : card.desc === "신생아 출생 신고를 정확하고 신속하게 대행"
                                              ? "Tư vấn hồ sơ liên quan tới đăng ký khai sinh"
                                              : card.desc === "출생신고서 및 출생신고증 분실 시 재신고"
                                                ? "Đăng ký lại Sổ đăng ký khai sinh và Giấy đăng ký khai sinh khi bị mất"
                                                : card.desc === "사망 신고 및 관련 서류 처리 대행"
                                                  ? "Tư vấn hồ sơ liên quan tới đăng ký việc tử"
                                                  : card.desc === "사망증명서 및 사망신고서 분실 시 재등록"
                                                    ? "Đăng ký lại Sổ đăng ký việc tử và bản chính Giấy chứng tử khi bị mất"

                                                    : card.desc === "베트남 국적 포기 신청 및 서류 절차 대행"
                                                      ? "Tư vấn và hỗ trợ thực hiện thủ tục liên quan tới xin thôi quốc tịch VIệt Nam"
                                                      : card.desc === " 이중국적 유지를 위한 신고 및 관련 절차를지원"
                                                        ? "Tư vấn và hỗ trợ thực hiện thủ tục liên quan tới giữ quốc tịch Việt Nam"
                                                        : card.desc === "베트남 국적 재귀화를 위한 신청 및 행정 절차 대행"
                                                          ? "Tư vấn hồ sơ và thực hiện đăng ký xin trở lại quốc tịch Việt Nam"
                                                          : card.desc === "베트남으로 시체, 유해, 유골을 송환하기 위한 서류 및 허가 절차 대행"
                                                            ? "Thực hiện đăng ký cấp Giấy phép nhập cảnh thi hài, hài cốt, tro cốt"
                                                            : card.desc === "재외 베트남인의 베트남 국적 사실 확인 절차를 안내하고 대행"
                                                              ? "Hướng dẫn và hỗ trợ thực hiện thủ tục hồi hương"

                                                              : card.desc === "일반 여권의 신규 발급, 정보 변경 및 추가 절차를 대행"
                                                                ? "Hỗ trợ thực hiện cấp, bổ sung, sửa đổi hộ chiếu phổ thông"
                                                                : card.desc === "이름, 성별, 국적 등 호적 정보 변경 신청 및 관련 절차 지원"
                                                                  ? "Tư vấn và thực hiện thủ tục thay đổi, cải chính, bổ sung hộ tịch"
                                                                  : card.desc === "재외 베트남인으로서의 국민 등록 및 정보 갱신 대행"
                                                                    ? "Thực hiện đăng ký công dân và cập nhật thông tin công dân"
                                                                    : card.desc === "베트남 출신 확인서 발급을 위한 서류 준비 및 절차 지원"
                                                                      ? "Hỗ trợ tư vấn và thực hiện thủ tục về cấp Giấy xác nhận người gốc Việt Nam"
                                                                      : card.desc === "출생, 혼인 등 각종 호적 서류의 사본 재발급 대행"
                                                                        ? "Thực hiện thủ tục cấp bản sao giấy tờ hộ tịch (Khai sinh, Đăng ký kết hôn, v.v)"

                                                                        : card.desc === "재외 베트남인 간 또는 외국인과의 보호자 신청 등록, 해지 신고 대행"
                                                                          ? "Thực hiện đăng ký, chấm dứt việc giám hộ"
                                                                          : card.desc === "혼외자 자녀 인지 등록 절차 대행"
                                                                            ? "Thực hiện thủ tục đăng ký nhận cha, mẹ, con"
                                                                            : card.desc === "베트남 국적 아동의 입양 등록 및 재등록 절차 대행"
                                                                              ? "Tư vấn và thực hiện thủ tục đăng ký nhận con nuôi"

                                                                              : card.desc === "재외 공관에서 발급받은 통증 발급 지원"
                                                                                ? "Thực hiện và tư vấn hồ sơ đăng ký cấp giấy thông hành"
                                                                                : card.desc === "한국 단기 방문 비자(C-3-1) 신청 및 발급 절차 지원"
                                                                                  ? "Hỗ trợ thực hiện thủ tục đăng ký cấp visa thăm thân ngắn hạn (C-3-1)"
                                                                                  : card.desc === "한국 방문동거 비자(F-1-5) 신청에 필요한 서류 준비 및 절차 대행"
                                                                                    ? "Hỗ trợ thực hiện thủ tục đăng ký cấp visa thăm thân ngắn hạn (F-1-5)"
                                                                                    : card.desc === "베트남 비자 면제서의 신규 등록 및 재등록 절차 대행"
                                                                                      ? "Thực hiện thủ tục đăng ký cấp giấy miễn thị thực"
                                                                                      : card.desc === "전자 비자(E-Visa) 및 상용 비자의 발급 등록 대행"
                                                                                        ? "Tư vấn hồ sơ và thực hiện đăng ký cấp thị thực điện tử / thị thực công tác"

                                                                                        : card.desc === "베트남-한국 간 국제 이혼 소송의 제기 및 진행에 필요한 법적 절차 대행"
                                                                                          ? "Tư vấn pháp lý các vấn đề liên quan tới ly hôn"
                                                                                          : card.desc === "베트남/한국 노동법 관련 분쟁 발생 시 소송 제기 및 법률 자문"
                                                                                            ? "Tư vấn pháp lý các vấn đề liên quan tới lao động"
                                                                                            : card.desc === "베트남/한국 내 체류자의 자진 출국 및 합법적 체류 전환 등 민감한 문제 상담"
                                                                                              ? "Tư vấn pháp lý các vấn đề liên quan tới cư trú"
                                                                                              : card.desc === "한국 또는 베트남 내 법인, 지사, 또는 사무소 설립에 필요한 행정 절차 대행"
                                                                                                ? "Tư vấn hồ sơ và thực hiện thành lập văn phòng đại diện, công ty, v.v"
                                                                                                : card.desc === "회사 폐업 및 투자 사업 종료와 관련 절차 대행"
                                                                                                ? "Thực hiện các thủ tục liên quan tới đóng cửa công ty, chấm dứt dự án đầu tư"
                                                                                                : card.desc === "한국/베트남 외국인 근로자의 취업 허가 및 임시 거주증 발급 절차 대행"
                                                                                                  ? "Hỗ trợ đăng ký giấy phép lao động, thẻ cư trú cho người Việt Nam, Hàn Quốc"
                                                                                                  : card.desc === "기업의 원활한 무역 활동을 위한 수출입 허가증 발급 및 관련 규제 준수 절차 대행"
                                                                                                    ? "Hỗ trợ thực hiện thủ tục liên quan tới cấp giấy phép xuất nhập khẩu"
                                                                                                    : card.desc === "B2B 파트너를 매칭하여 기업의 성공적인 시장 진출과 매출 확대"
                                                                                                      ? "Kết nối khách hàng B2B, hỗ trợ doanh nghiệp mở rộng thị trường hoạt động"
                                                                                                      : card.desc
                                  :
                                  card.desc}
                              </p>
                              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>

                                <div
                                  style={{
                                    color: '#000',
                                    fontSize: 18,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease',
                                    display: 'inline-block'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                  }}
                                >

                                </div>

                              </div>
                            </div>
                          </Link>
                        ));
                      })()}
                    </div>
                  </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
    .service-icons-container::-webkit-scrollbar,
    .service-cards-container::-webkit-scrollbar {
      display: none;
    }
    
    .service-icons-container,
    .service-cards-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Desktop Layout - Grid */
    .service-cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      
      max-width: 1000px;
      margin: 0 auto;
    }

    .service-card {
      min-height: 320px;
    }

    /* Tablet and Mobile - Horizontal Scroll */
    @media (max-width: 768px) {
      .services-carousel-section {
        padding: 60px 0 !important;
      }
      
      .services-carousel-section > div {
        padding: 0 16px !important;
      }
      
      .services-carousel-section h2 {
        font-size: 24px !important;
        line-height: 1.3 !important;
      }
      
      .services-carousel-section p {
        font-size: 20px !important;
      }
      
      .service-icons-container {
        gap: 16px !important;
        padding: 16px 0 !important;
        margin-bottom: 32px !important;
      }
      
      .service-icon-item {
        min-width: 100px !important;
      }
      
      .service-icon-circle {
        width: 80px !important;
        height: 80px !important;
      }
      
      .service-icon-circle img {
        width: 32px !important;
        height: 32px !important;
      }
      
      .service-icon-item span {
        font-size: 12px !important;
      }
      
      /* Switch to horizontal scroll on mobile */
      .service-cards-container {
        display: flex !important;
        overflow-x: auto !important;
        scroll-behavior: smooth !important;
        gap: 16px !important;
        padding: 0 0 16px 0 !important;
        max-width: none !important;
        margin: 0 !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
        -webkit-overflow-scrolling: touch !important;
      }
      
      .service-card {
        min-width: 240px !important;
        max-width: 280px !important;
        padding: 16px !important;
        flex-shrink: 0 !important;
      
      }
      
      .service-card img {
        height: 140px !important;
      }
      
      .service-card h3 {
        font-size: 16px !important;
        margin-bottom: 8px !important;
      }
      
      .service-card p {
        font-size: 13px !important;
        margin-bottom: 16px !important;
      }
      
      .service-card div:last-child div {
        font-size: 16px !important;
      }
    }

    @media (max-width: 480px) {
      .services-carousel-section h2 {
        font-size: 20px !important;
        padding: 0 10px !important;
      }
      
      .service-icon-item {
        min-width: 80px !important;
      }
      
      .service-icon-circle {
        width: 56px !important;
        height: 56px !important;
      }
      
      .service-icon-circle img {
        width: 60px !important;
        height:60px !important;
      }
      
      .service-card {
        min-width: 220px !important;
        max-width: 260px !important;
      }
    }

    /* Large Desktop */
    @media (min-width: 1200px) {
      .service-cards-container {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 32px !important;
      }
      
      .service-card {
        min-height: 410px !important;
      }
    }

    /* Medium Desktop/Tablet */
    @media (min-width: 769px) and (max-width: 1199px) {
      .service-cards-container {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 24px !important;
      }
    }
  `}
                </style>
              </section>

              {/* Tin nổi bật section */}
              <section
                style={{
                  maxWidth: 1200,
                  margin: "0 auto",
                  padding: "80px 0 80px 0",
                }}
              >
                {/* TITLE */}
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <div
                    style={{
                      color: "#E3DCCC",
                      fontWeight: 700,
                      
                      fontFamily: "'Gmarket Sans', 'Noto Sans KR', sans-serif",
                      fontSize: 24,
                      marginBottom: 8,
                    }}
                  >
                    NEWSROOM
                  </div>
                  <div
                    style={{
                      color: "#0B2447",
                      fontWeight: 700,
                      fontSize: 30,
                      lineHeight: 1.3,
                    }}
                  >
                    {language === "VI" ? (<>Đừng bỏ lỡ các tin tức và thông tin mới nhất của One Pass</>)
                      :
                      (<>원패스의 최신 소식과 정보를 놓치지 마세요! </>)}
                  </div>
                </div>

                {/* POSTS */}
                <div
                  className="news-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 40,
                  }}
                >
                  {posts.map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative", 
                        overflow: "hidden",
                        borderRadius: 12,
                        cursor: "pointer",
                        transition: "transform 0.15s ease, box-shadow 0.15s ease",
                        boxSizing: "border-box", // 👈 tránh cộng padding/viền ngoài ý muốn
                      }}
                      onClick={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                        setTimeout(() => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }, 150);
                      }}
                    >
                      {/* Overlay link phủ toàn card */}
                      <Link
                        to={
                          idx === 0
                            ? "/news전체 뉴스/NewsDetail"
                            : idx === 1
                              ? "/news전체 뉴스/NewsDetail2"
                              : "/news전체 뉴스/NewsDetail3"
                        }
                        style={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 2,
                          textDecoration: "none",
                          color: "inherit",
                          borderRadius: 12, // 👈 giữ đúng bo góc cha
                          overflow: "hidden", // 👈 chặn phình kích thước
                          display: "block",
                        }}
                      />

                      <img
                        src={p.img}
                        alt={p.title}
                        style={{
                          width: "100%",
                          height: 220,
                          borderRadius: 12,
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      <div style={{ paddingTop: 16,  zIndex: 1 }}>
                        <div
                          style={{
                            color: "#7A8797",
                            fontSize: 14,
                            marginBottom: 8,
                          }}
                        >


                          {language === "VI" ? (
                            p.date === "2025년 09월 30일 | 오전 09:00" ? "09:00 Sáng | Ngày 30 tháng 09 năm 2025"
                              : p.date === "2025년 09월 27일 | 오전 09:00" ? "09:00 Sáng | Ngày 27 tháng 09 năm 2025"
                                : p.date === "2025년 09월  25일 | 오전 09:00" ? <>09:00 Sáng | Ngày 25 tháng 09 năm 2025</>
                                  : p.date
                          ) : (
                            p.date
                          )}
                        </div>
                        <div
                          style={{
                            color: "#0B2447",
                            fontWeight: 700,
                            fontSize: 18,
                            lineHeight: 1.5,
                            marginBottom: 8,
                          }}
                        >

                          {language === "VI" ? (
                            p.title === "추석 연휴 휴무 안내" ? "Thông báo lịch nghỉ Tết Trung thu Hàn Qu..."
                              : p.title === "주부산 베트남 총영사관 공식 개소..." ? "Tổng lãnh sự quán Việt Nam tại Busan chí..."
                                : p.title === "2025년 10월 1일, 원패스가 고객 여러분을..." ? <>Kể từ tháng 10/2025, One Pass chính thứ...</>
                                  : p.title
                          ) : (
                            p.title
                          )}
                        </div>
                        <div
                          style={{
                            color: "#6F7C8F",
                            fontSize: 16,
                            lineHeight: 1.6,
                          }}
                        >

                          {language === "VI" ? (
                            p.desc === "안녕하세요, 고객 여러분!  저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다..." ? "Kính gửi Quý Khách hàng và Đối tác, One Pass xin trân trọng thông báo lịch nghỉ Tết Trung thu năm"
                              : p.desc === "2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 업무를 개시하며, 한-베트남 관계,..." ? "Ngày 01 tháng 10 năm 2025, Tổng Lãnh sự quán Việt Nam tại Busan đã chính thức đi vào hoạt đ..."
                                : p.desc === "안녕하세요, 고객 여러분! 베트남 행정 절차 대행 및 솔루션 전문 회사 원패스(One Pass)가 드디어..." ? <>Chúng tôi xin vui mừng thông báo: Công ty cung cấp giải pháp và đại diện thực hiện thủ tục hành...</>
                                  : p.desc
                          ) : (
                            p.desc
                          )}
                        </div>

                        <div
                          style={{
                            marginTop: 12,
                            width: 28,
                            height: 28,
                            borderRadius: 6,
                            border: "1px solid #D6DDE7",
                            background: "#fff",
                            color: "#0B2447",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 18,
                          }}
                        >
                          →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MORE BUTTON */}
                <div style={{ textAlign: "center", marginTop: 26 }}>
                  <Link to="/News" style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        background: "#2F4D90",
                        color: "#fff",
                        border: "none",
                        padding: "12px 50px",
                        fontWeight: 700,
                      }}
                    >
                      {language === "VI" ? (<>Xem thêm</>) : ("더 보기")}
                    </button>
                  </Link>
                </div>

                {/* ✅ Responsive CSS (no effect on desktop) */}
                <style>
                  {`
                    @media (max-width: 768px) {
                      section {
                          padding: 40px 16px !important;
                      }

                      section > div:first-child {
                           margin-bottom: 24px !important;
                      }

                     

        section > div:first-child div:nth-child(2) {
          font-size: 14px !important;
          line-height: 1.4 !important;
          
        }

        .news-grid {
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory !important;
          gap: 16px !important;
          padding: 0 8px !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .news-grid > div {
          flex: 0 0 80% !important;
          scroll-snap-align: start !important;
          background: #fff !important;
          border-radius: 12px !important;
          
          padding-bottom: 12px !important;
        }

        .news-grid img {
          height: 180px !important;
        }

        .news-grid::-webkit-scrollbar {
          display: none !important;
        }

        button {
          font-size: 14px !important;
        }
      }
    `}
                </style>
              </section>
              {/* ===== TRENDING COPYRIGHT SECTION (Carousel) ===== */}

              <section className="consult-section" style={{ background: '#2B3A67', padding: '80px 0' }}>
                <div className="consult-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
                  {/* Left copy */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                    <div style={{ color: '#E3DCCC', fontWeight: 700,  marginBottom: 12, fontSize: 24, fontFamily: "'Gmarket Sans', 'Noto Sans KR', sans-serif" }}>CONSULT</div>
                    <h2 className="text-consult" style={{ color: '#ffffffff', fontSize: 32, fontWeight: 700, lineHeight: 1.35, margin: 0 }}>

                      {language === "VI" ? (<>Tìm kiếm giải pháp chính xác<br /> một cách tiện lợi, mọi lúc mọi nơi</>)
                        : (<>언제 어디서나, 가장 편한 방법으로<br />정확한 해결책을 만나보세요.</>)}
                    </h2>
                    <p className="consult-text" style={{ marginTop: 20, color: '#ffffffff', opacity: 0.85, fontSize: 16, lineHeight: 1.9, maxWidth: 520, textAlign: "justify" }}>

                      {language === "VI" ? (<>Tùy theo mức độ phức tạp và tính cấp thiết của vấn đề, quý khách có thể tự do lựa chọn phương thức tư vấn phù hợp nhất như tư vấn điện thoại, tới nơi trực tiếp, chat hoặc email. Đội ngũ chuyên gia của One Pass sẽ đồng hành nhanh chóng qua mọi kênh để giải quyết vấn đề của quý khách. Vui lòng liên hệ ngay bằng phương thức tiện lợi nhất.</>) : (<>문제의 시급성이나 내용의 복잡성에 따라 전화, 방문, 채팅, 이메일 중 가장 적합한 상담 방식을 자유롭게 선택하실 수 있습니다. 원패스의 전문 상담사가 모든 채널에서 고객님의 문제 해결을 위해 신속하게 동행합니다. 가장 편하신 방법으로 지금 바로 문의하세요.</>)}
                    </p>
                  </div>
                  {/* Right cards */}
                  <div className="consult-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[
                      { img: icPhone, title: '전화 상담', desc: '급한 문제를 빠르게 해결할 수 있습니다. 전문 상담사와 바로 연결하여 상담 받을 수 있습니다.' },
                      { img: icVisit, title: '방문 상담', desc: '예약 후 직접 방문하시면 담당자가 서류를 함께 검토하며 가장 정확한 해결책을 제시해 드립니다.' },
                      { img: icChat, title: '채팅 상담', desc: '실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게 무료상담을 받을 수 있습니다.' },
                      { img: icMail, title: '이메일 상담', desc: '문의사항을 남겨주시고 문의 내용을 확인하여 3영업일 이내에 답변을 드립니다.' },
                    ].map((c, i) => {
                      const isRight = i % 2 === 1; // giữ lệch dọc bằng marginTop, kích thước đồng nhất
                      return (
                        <Link to="/Consult" state={{ tab: c.title === '전화 상담' ? 'phone' : c.title === '방문 상담' ? 'visit' : c.title === '채팅 상담' ? 'sns' : c.title === '채팅 상담' || c.title === '채팅 상담' ? 'sns' : c.title === '이메일 상담' ? 'email' : 'sns' }} style={{ textDecoration: 'none', display: 'block', width: '100%', height: '100%', }}>
                          <div className="consult-cards-main"
                            key={i}
                            style={{
                              background: '#ffffff',
                              borderRadius: 22,
                              padding: '22px 22px 18px 22px',
                              boxShadow: '0 10px 24px rgba(10,20,40,0.06)',
                              border: '1px solid #E9EEF3',
                              marginTop: isRight ? 32 : 0,
                              height: 320,
                              display: 'flex',
                              flexDirection: 'column',
                              boxSizing: 'border-box',
                            }}
                          >
                            <div className="consult-cards-main-title" style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                              <div className="consult-main-img"
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
                                <img className="consult-cards-img" src={c.img} alt="" style={{ width: 128, height: 128, objectFit: 'contain' }} />
                              </div>

                            </div>
                            <div className="consult-cards-title" style={{ fontSize: 18, fontWeight: 600, color: '#000000ff', marginBottom: 6 }}>

                              {language === "VI" ? (
                                c.title === "전화 상담" ? "Gọi điện"
                                  : c.title === "방문 상담" ? "Trực tiếp"
                                    : c.title === "채팅 상담" ? <>Nhắn tin</>
                                      : c.title === "이메일 상담" ? <>Email</>
                                        : c.title
                              ) : (
                                c.title
                              )}
                            </div>
                            <div style={{ color: '#6F7C8F', fontSize: 14, lineHeight: 1.7, marginTop: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>

                              {language === "VI" ? (
                                c.desc === "급한 문제를 빠르게 해결할 수 있습니다. 전문 상담사와 바로 연결하여 상담 받을 수 있습니다." ? "Quý khách có thể giải quyết các vấn đề cấp bách một cách nhanh chóng. Kết nối trực tiếp với chuyên gia tư vấn để được hỗ trợ ngay lập tức."
                                  : c.desc === "예약 후 직접 방문하시면 담당자가 서류를 함께 검토하며 가장 정확한 해결책을 제시해 드립니다." ? "Sau khi đặt lịch hẹn và đến trực tiếp, chuyên viên phụ trách sẽ cùng quý khách kiểm tra hồ sơ và đưa ra giải pháp chính xác nhất."
                                    : c.desc === "실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게 무료상담을 받을 수 있습니다." ? <>Kết nối nhanh chóng với tư vấn viên qua chat trực tuyến để được tư vấn miễn phí mọi lúc, mọi nơi một cách dễ dàng.</>
                                      : c.desc === "문의사항을 남겨주시고 문의 내용을 확인하여 3영업일 이내에 답변을 드립니다." ? <>Vui lòng để lại nội dung yêu cầu và câu hỏi. Chúng tôi sẽ xác nhận nội dung và phản hồi lại quý khách trong vòng 3 ngày làm việc.</>
                                        : c.desc
                              ) : (
                                c.desc
                              )}
                            </div>
                            {/* Navigate to Consult and open the corresponding tab */}

                           

                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <style>
                  {`
/* -------------- Tablet & Mobile (max 700px) -------------- */
@media (max-width: 700px) {
      .consult-cards-main{
      padding: 2px 22px 18px!important;
      }              

  .consult-text {
    display: none !important;
  }

  .consult-section .consult-container {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
    padding: 0 20px !important;
    box-sizing: border-box !important;
  }

  .consult-cards {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 24px !important;
    align-items: stretch !important;
    justify-items: center !important;
  }

  .consult-cards > div {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    padding: 20px 16px !important;
    margin: 0 !important;
  }

  /* bỏ lệch dọc */
  .consult-cards-main {
    margin-top: 0 !important;
    height: 220px !important;
  }
}
@media (max-width: 500px) {
  .consult-section .consult-container {
    padding: 0 14px !important;
    gap: 30px !important;
  }

  .consult-cards {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 22px !important;
  }

  .consult-cards > div {
    padding: 18px 12px !important;
  }

  .consult-main-img img {
    width: 90px !important;
    height: 90px !important;
  }

  .consult-cards-main-title {
    height: 150px !important;
  }

  .consult-main-img {
    height: 110px !important;
  }
}

/* -------------- Mobile nhỏ (max 440px) -------------- */
@media (max-width: 450px) {
  .consult-section .consult-container {
    padding: 0 10px !important;
  }

  .consult-cards {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important; /* ép 2 cột */
    gap: 14px !important;
    justify-content: center !important;
    align-items: stretch !important;
  }

  .consult-cards > div {
    min-width: 0 !important; /* ngăn card tràn */
    padding: 12px 8px !important;
    box-sizing: border-box !important;
  }

  .consult-main-img img {
    width: 70px !important;
    height: 70px !important;
  }
}

/* -------------- Mobile rất nhỏ (max 380px) -------------- */
@media (max-width: 395px) {
  .consult-section .consult-container {
    padding: 0 10px !important;
  }

  .consult-cards {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important; /* ép 2 cột */
    gap: 14px !important;
    justify-content: center !important;
    align-items: stretch !important;
  }

  .consult-cards > div {
    min-width: 0 !important; /* ngăn card tràn */
    padding: 12px 8px !important;
    box-sizing: border-box !important;
  }

  .consult-main-img img {
    width: 70px !important;
    height: 70px !important;
  }
}


`}
                </style>

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
        <Route path="/news전체 뉴스/NewsDetail2" element={<NewsDetail2 />} />
        <Route path="/news전체 뉴스/NewsDetail3" element={<NewsDetail3 />} />
        <Route path="/news대사관•총영사관 소식/NewsDetail4" element={<NewsDetail4 />} />
        <Route path="/news대사관•총영사관 소식/NewsDetail5" element={<NewsDetail5 />} />
      </Routes>
      <Countdown />
      {/* ===== FOOTER ===== */}
      <Footer />
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: popupMessage.isError ? "#E74C3C" : "#4CAF50",
            color: "white",
            padding: "16px 30px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            animation: "pushDown 0.5s ease-out",
            zIndex: 9999,
          }}
        >
          {popupMessage.text}
        </div>
      )}
    </div>

  );
}

export default App;
