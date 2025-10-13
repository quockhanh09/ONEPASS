


// UI CHANGES SUMMARY:
// 1. Added serviceContents state for editable content per service
// 2. Created renderServiceContent() with distinct layouts for each service
// 3. Replaced static text with contentEditable divs for direct editing
// 4. Added color picker controls for interface customization
// 5. Updated modal to use editable service titles
// 6. Each service now has its own unique, customizable UI
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/i24.png";
import imgTrust from "../assets/img/i23.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";


import certIcon from "../assets/img/s1icon.png";
import certActive from "../assets/img/s1-1icon.png";
import certHover from "../assets/img/s1-1icon.png";

import marriageIcon from "../assets/img/s2icon.png";
import marriageActive from "../assets/img/s2-2icon.png";
import marriageHover from "../assets/img/s2-2icon.png";

import birthIcon from "../assets/img/s3icon.png";
import birthActive from "../assets/img/s3-3icon.png";
import birthHover from "../assets/img/s3-3icon.png";

import travelHover from "../assets/img/s4-4icon.png";
import travelIcon from "../assets/img/s4icon.png";
import travelActive from "../assets/img/s4-4icon.png";

import idHover from "../assets/img/s5-5icon.png";
import idIcon from "../assets/img/s5icon.png";
import idActive from "../assets/img/s5-5icon.png";

import adoptionHover from "../assets/img/s6-6icon.png";
import adoptionIcon from "../assets/img/s6icon.png";
import adoptionActive from "../assets/img/s6-6icon.png";

import visaHover from "../assets/img/s7-7icon.png";
import visaIcon from "../assets/img/s7icon.png";
import visaActive from "../assets/img/s7-7icon.png";

import lawIcon from "../assets/img/s8icon.png";
import lawActive from "../assets/img/s8-8icon.png";
import lawHover from "../assets/img/s8-8icon.png";

import etcHover from "../assets/img/s9-9icon.png";
import etcIcon from "../assets/img/s9icon.png";
import etcActive from "../assets/img/s9-9icon.png";

const steps = [
  { id: "01", text: "서류 접수 및 상담 (고객님 → 원패스)" },
  { id: "02", text: "전문 번역 (원패스)" },
  { id: "03", text: "교정 및 품질 검토 (원패스)" },
  { id: "04", text: "공증 촉탁 대행 (원패스 → 공증 기관)" },
  { id: "05", text: "완료 서류 전달 (원패스 → 고객님)" },
];

const tabContents = {
  korea1: {
    title: "한국 내 혼인신고",
    rows: [
      ["결혼 이민", "한국 내 혼인신고", "별도 상담", "견적 상담 필요"],
    ],
    steps1: [
      { id: 1, text: "베트남 배우자 측 서류 준비" },
      { id: 2, text: "한국인 배우자 측 서류 준비" },
      { id: 3, text: "재외 공관에서 혼인요건인증서 발급" },
      { id: 4, text: "국내 혼인신고 후 베트남 혼인신고" },

    ],
  },
  vietnam1: {
    title: "혼인관계증명서",
    rows: [
      ["결혼 이민", "혼인관계증명서", "별도 상담", "견적 상담 필요"],
    ],
    steps1: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 발급 신청 (원패스)	" },
      { id: 3, text: "증명서 발급 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },
  certificate1: {
    title: "혼인요건인증서",
    rows: [
      ["결혼 이민", "혼인요건인증서", "별도 상담", "견적 상담 필요"],
    ],
    steps1: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 발급 신청 (원패스)	" },
      { id: 3, text: "증명서 발급 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

  cc1: {
    title: "결혼 재신고",
    rows: [
      ["결혼 이민", "결혼 재신고", "별도 상담", "견적 상담 필요"],
    ],
    steps1: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 발급 신청 (원패스)	" },
      { id: 3, text: "증명서 발급 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  visa1: {

  },
};


const tabContents2 = {
  korea2: {
    title: "출생 신고",
    rows: [
      ["출생신고", "출생 신고", "별도 상담", "견적 상담 필요"],
    ],
    steps2: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },
  vietnam2: {
    title: "기한 초과 출생신고",
    rows: [
      ["출생신고", "기한 초과 출생신고", "별도 상담", "견적 상담 필요"],
    ],
    steps2: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },
  certificate2: {
    title: "사망 신고",
    rows: [
      ["출생신고", "사망 신고", "별도 상담", "견적 상담 필요"],
    ],
    steps2: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  visa2: {
    title: "기한 초과 사망신고",
    rows: [
      ["출생신고", "기한 초과 사망신고", "별도 상담", "견적 상담 필요"],
    ],
    steps2: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

};

const tabContents3 = {
  korea3: {
    title: "베트남 국적 포기 신청",
    rows: [
      ["출입국 행정", "베트남 국적 포기 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수 (고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
    extraContent: (
      <div style={{ marginTop: "80px" }}>
        {/* Block 1 */}
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}>
          베트남 국적 포기 의무 및 대상
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "80px" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td
                style={{
                  backgroundColor: "#334785",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "30px 50px",
                  width: "260px",
                  verticalAlign: "top",
                  fontSize: 16,
                }}
              >
                베트남 국적 포기 의무 <br /> (필수 포기 대상)
              </td>
              <td
                style={{
                  backgroundColor: "#f3f6f8",
                  padding: "18px",
                  color: "#374151",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }}
              >
                <ul style={{ margin: 0, paddingLeft: "30px" }}>
                  <li>
                    혼인 관계 종료 후 귀화: 한국인 배우자의 사망, 이혼, 실종 등으로 혼인 관계가 종료된 후 한국 국적을 귀화로 취득한 경우
                  </li>
                  <li>
                    수반/동반 취득: 부모의 귀화 후 자녀가 수반 취득하거나 입양 자녀의 동반 취득 등으로 한국 국적을 갖게 된 경우
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td
                style={{
                  backgroundColor: "#334785",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "30px 40px",
                  verticalAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
                베트남 국적 포기 대상자 <br /> (주요 사례)
              </td>
              <td
                style={{
                  backgroundColor: "#f9fbfc",
                  padding: "30px",
                  color: "#374151",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }}
              >
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>
                    국적 회복자: 혼인 관계에서 귀화한 후 1년 이내에 외국 국적 불행사 서약을 하지 않아 한국 국적이 상실되었다가 다시 국적 회복을 받은 자.
                  </li>
                  <li>
                    인지자의 자녀: 혼인신고 전에 태어난 자녀를 한국인 부가 인지한 후 국적 취득 수리 통지를 받은 자녀.
                  </li>
                  <li>
                    입양 자녀: 베트남 배우자의 자녀를 입양한 후 귀화 허가를 받은 입양 자녀.
                  </li>
                  <li>
                    귀화자의 자녀: 베트남 출신으로 한국 국적을 취득한 귀화자의 자녀.
                  </li>
                  <li>
                    이혼 또는 사망 사유 귀화자: 한국인 배우자와의 이혼 또는 사망을 사유로 귀화를 허가받은 자.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>


        {/* Block 2 */}
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          베트남 국적 포기 의무 기한
        </h2>
        <ul style={{ marginBottom: "50px", paddingLeft: "20px", color: "#374151" }}>
          <li><b>최종 기한 (1년):</b> 의무 포기 대상자는 귀화 증서 수여일로부터 1년 이내에 베트남 국적 포기를 완료하고 최종 확인서를 법무부에 제출해야 합니다.</li>
          <li><b>3개월 내 임시 조치 (필수):</b> 최종 확인서 발급까지 약 1년 이상 소요되므로, 귀화증서 수여일로부터 3개월 이내에 주외 베트남 대사관에 국적 포기를 신청해야 합니다.</li>
        </ul>

        {/* Block 3 */}
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          한국 국적 유지를 위한 조치
        </h2>
        <ul style={{ paddingLeft: "20px", color: "#374151" }}>
          <li><b>서약 제출:</b> 3개월 이내에 대사관으로부터 받은 국적 포기 신청 서류를 확인서를 첨부하고 “**외국 국적 불행사 서약**”을 이행해야 합니다.</li>
          <li><b>효과:</b> 서약서를 제출해야 주민등록번호를 부여받으며, 1년 기한이 경과하더라도 최종 확인서를 통해 베트남 국적 포기 절차를 마무리할 수 있습니다.</li>
        </ul>
      </div>
    )
  },
  vietnam3: {
    title: "베트남 국적 유지 신청",
    rows: [
      ["출입국 행정", "베트남 국적 유지 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)	" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },

  certificate3: {
    title: "베트남 국적 귀화 신청",
    rows: [
      ["출입국 행정", "베트남 국적 귀화 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)	" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

  visa3: {
    title: "시체 등 반입 허가 신청",
    rows: [
      ["출입국 행정", "시체 등 반입 허가 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)	" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  cc3: {
    title: "베트남 국적 사실 확인",
    rows: [
      ["출입국 행정", "베트남 국적 사실 확인", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)	" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
};


const tabContents4 = {
  korea4: {
    title: "일반 여권 발급 • 변경 • 추가",
    rows: [
      ["신분증명 서류", "일반 여권 발급 • 변경 • 추가", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],

  },
  vietnam4: {
    title: "호적 정보 정정",
    rows: [
      ["신분증명 서류", "호적  정보 정정", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },

  certificate4: {
    title: "베트남 국민 신고  • 업데이트",
    rows: [
      ["신분증명 서류", "베트남 국민 신고 • 업데이트", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

  visa4: {
    title: "베트남 출신 증명서 발급",
    rows: [
      ["신분증명 서류", "베트남 출신 증명서 발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  cc4: {
    title: "호적증서 반사오 재발급",
    rows: [
      ["신분증명 서류", "호적증서 반사오 재발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
};


const tabContents5 = {
  korea5: {
    title: "보호자 신청 • 해지 신고",
    rows: [
      ["입양 • 자녀 인지", "보호자 신청 • 해지 신고", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],

  },
  vietnam5: {
    title: "베트남 혼외자 자녀 인지",
    rows: [
      ["입양 • 자녀 인지", "베트남 혼외자 자녀 인지", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "혼인신고 후 혼인이 성립한 날로부터 200일 이전에 출산 (혹인 혼인신고 전)" },
      { id: 2, text: "한국과 베트남 양국에 혼인신고 진행" },
      { id: 3, text: "베트남에서 자녀 출생신고 진행 (국내 출산시 베트남대사관 통해 진행)" },
      { id: 4, text: "베트남 배우자 및 자녀의 사증 발급" },
      { id: 5, text: "한국에서 인지 신고 진행 (출생신고가 불가능하기 때문에)" },
      { id: 6, text: "자녀의 국적 획득 절차" },
    ],
  },

  certificate5: {
    title: "입양 절차 대행",
    rows: [
      ["입양 • 자녀 인지", "입양 절차 대행", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
};


const tabContents6 = {
  korea6: {
    title: "베트남 통행증 발급",
    rows: [
      ["비자 대행", "베트남 통행증 발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],

  },
  vietnam6: {
    title: "초청(단기방문 C-3-1 비자)",
    rows: [
      ["비자 대행", "초청(단기방문 C-3-1 비자)", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],
  },

  certificate6: {
    title: "초청(단기방문 F-1-5 비자)",
    rows: [
      ["비자 대행", "초청(단기방문 F-1-5 비자)", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

  visa6: {
    title: "베트남 비자면제증 발급",
    rows: [
      ["비자 대행", "베트남 비자면제증 발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  cc6: {
    title: "베트남 전자비자 • 성용비자",
    rows: [
      ["비자 대행", "베트남 전자비자 • 성용비자", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "서류 검토 및 공식 접수 (원패스)" },
      { id: 3, text: "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
};

const tabContents7 = {
  korea7: {
    title: "이혼 소송",
    rows: [
      ["법률 컨설팅", "이혼 소송", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "초기 정보 수집 및 경청" },
      { id: 2, text: "주요 법적 쟁점 분석" },
      { id: 3, text: "증거 평가 및 전략 상담" },
      { id: 4, text: "비용 설명 및 계약 체결" },
      { id: 5, text: "계약 이행" },
    ],

  },
  vietnam7: {
    title: "노동 관련 소송",
    rows: [
      ["법률 컨설팅", "노동 관련 소송", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "초기 정보 수집 및 경청" },
      { id: 2, text: "주요 법적 쟁점 분석" },
      { id: 3, text: "증거 평가 및 전략 상담" },
      { id: 4, text: "비용 설명 및 계약 체결" },
      { id: 5, text: "계약 이행" },
    ],
  },

  certificate7: {
    title: "불법 체류자 관련 컨설팅",
    rows: [
      ["법률 컨설팅", "불법 체류자 관련 컨설팅", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "초기 정보 수집 및 경청" },
      { id: 2, text: "주요 법적 쟁점 분석" },
      { id: 3, text: "증거 평가 및 전략 상담" },
      { id: 4, text: "비용 설명 및 계약 체결" },
      { id: 5, text: "계약 이행" },
    ],
  },
};

const tabContents8 = {
  korea8: {
    title: "법인 • 지사 • 대표사무실 설립",
    rows: [
      ["B2B 서비스", "법인 • 지사 • 대표사무실 설립", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "기업 정보 및 요구사항 파악" },
      { id: 2, text: "원본 서류 준비 및 번역/공증" },
      { id: 3, text: "현지에서 서류 제출 및 신청" },
      { id: 4, text: "심사시간 경과 후 증서 발급" },

    ],

  },
  vietnam8: {
    title: "노동 허가서, 임시 거주증 발급",
    rows: [
      ["B2B 서비스", "노동 허가서, 임시 거주증 발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "초기 정보 수집 및 경청" },
      { id: 2, text: "주요 법적 쟁점 분석" },
      { id: 3, text: "증거 평가 및 전략 상담" },
      { id: 4, text: "비용 설명 및 계약 체결" },
      { id: 5, text: "계약 이행" },
    ],
  },

  certificate8: {
    title: "수입 허가서",
    rows: [
      ["B2B 서비스", "수입 허가서", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "사전 확인 및 서류 준비" },
      { id: 2, text: "수입 허가 및 검사 절차 (건강기능식품 및 의류 등)" },
      { id: 3, text: "수입 허가 신청 및 승인" },
      { id: 4, text: "수입 신고 및 통관 절차" },

    ],

  },
  visa8: {
    title: "B2B 바이어 매칭",
    rows: [
      ["B2B 서비스", "B2B 바이어 매칭", "별도 상담", "견적 상담 필요"],
    ],

  },
};
const services = [
  { icon: certIcon, hoverIcon: certHover, activeIcon: certActive, title: "인증 센터" },
  { icon: marriageIcon, hoverIcon: marriageHover, activeIcon: marriageActive, title: "결혼 이민" },
  { icon: birthIcon, hoverIcon: birthHover, activeIcon: birthActive, title: "출생신고" },
  { icon: travelIcon, hoverIcon: travelHover, activeIcon: travelActive, title: "출입국 행정" },
  { icon: idIcon, hoverIcon: idHover, activeIcon: idActive, title: "신분증명 서류" },
  { icon: adoptionIcon, hoverIcon: adoptionHover, activeIcon: adoptionActive, title: "입양 • 자녀 인지" },
  { icon: visaIcon, hoverIcon: visaHover, activeIcon: visaActive, title: "비자 대행" },
  { icon: lawIcon, hoverIcon: lawHover, activeIcon: lawActive, title: "법률 컨설팅" },
  { icon: etcIcon, hoverIcon: etcHover, activeIcon: etcActive, title: "B2B 서비스" },
];

function Service(props) {



  const location = useLocation();
  const incomingTabKey = location.state?.tabKey || null;
  // incoming service index from App (0-based)
  const incomingServiceIndex = typeof location.state?.serviceIndex === 'number' ? location.state.serviceIndex : null;
  const [activeIndex, setActiveIndex] = useState(0); // 👉 mặc định chọn "인증 센터"
  const [hoverIndex, setHoverIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [submittedServiceForm, setSubmittedServiceForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedServiceForm(true);

    if (!name || !phone || !email || !agree) {
      if (!name) setNameError(true);
      if (!phone) setPhoneError(true);
      if (!email) setEmailError(true);
      alert("모든 항목을 입력하고 동의해 주세요.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvandichvu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: serviceContents[activeIndex]?.title,
          HoTen: name,
          Email: email,
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

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAgree(false);
    } catch (err) {
      console.error("❌ Lỗi khi kết nối server:", err);
      alert("❌ 서버 연결 실패 (Server connection failed)");
    } finally {
      setLoading(false);
    }
  };




  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("korea1");
  const [activeTab2, setActiveTab2] = useState("korea2");
  const [activeTab3, setActiveTab3] = useState("korea3");
  const [activeTab4, setActiveTab4] = useState("korea4");
  const [activeTab5, setActiveTab5] = useState("korea5");
  const [activeTab6, setActiveTab6] = useState("korea6");
  const [activeTab7, setActiveTab7] = useState("korea7");
  const [activeTab8, setActiveTab8] = useState("korea8");

  // handle navigation state coming from App (tabKey and serviceIndex)
  useEffect(() => {
    if (incomingTabKey || incomingServiceIndex !== null) {
      // map legacy a1..a36 keys (from App.jsx) to serviceIndex + inner tab name
      const aKeyMap = {
        a1: { index: 0 }, a2: { index: 0 },
        a3: { index: 1, tab: 'korea1' }, a4: { index: 1, tab: 'vietnam1' }, a5: { index: 1, tab: 'certificate1' }, a6: { index: 1, tab: 'cc1' }, a7: { index: 1, tab: 'visa1' },
        a8: { index: 2, tab: 'korea2' }, a9: { index: 2, tab: 'vietnam2' }, a10: { index: 2, tab: 'certificate2' }, a11: { index: 2, tab: 'visa2' },
        a12: { index: 3, tab: 'korea3' }, a13: { index: 3, tab: 'vietnam3' }, a14: { index: 3, tab: 'certificate3' }, a15: { index: 3, tab: 'visa3' }, a16: { index: 3, tab: 'cc3' },
        a17: { index: 4, tab: 'korea4' }, a18: { index: 4, tab: 'vietnam4' }, a19: { index: 4, tab: 'certificate4' }, a20: { index: 4, tab: 'visa4' }, a21: { index: 4, tab: 'cc4' },
        a22: { index: 5, tab: 'korea5' }, a23: { index: 5, tab: 'vietnam5' }, a24: { index: 5, tab: 'certificate5' },
        a25: { index: 6, tab: 'korea6' }, a26: { index: 6, tab: 'vietnam6' }, a27: { index: 6, tab: 'certificate6' }, a28: { index: 6, tab: 'visa6' }, a29: { index: 6, tab: 'cc6' },
        a30: { index: 7, tab: 'korea7' }, a31: { index: 7, tab: 'vietnam7' }, a32: { index: 7, tab: 'certificate7' },
        a33: { index: 8, tab: 'korea8' }, a34: { index: 8, tab: 'vietnam8' }, a35: { index: 8, tab: 'certificate8' }, a36: { index: 8, tab: 'visa8' },
      };

      // if incomingTabKey is like 'a3', prefer mapping
      if (incomingTabKey && /^a\d+$/i.test(incomingTabKey)) {
        const key = incomingTabKey.toLowerCase();
        const mapped = aKeyMap[key];
        if (mapped) {
          if (typeof mapped.index === 'number') setActiveIndex(mapped.index);
          if (mapped.tab) {
            switch (mapped.index) {
              case 0:
                setActiveTab(mapped.tab);
                break;
              case 1:
                setActiveTab(mapped.tab);
                break;
              case 2:
                setActiveTab2(mapped.tab);
                break;
              case 3:
                setActiveTab3(mapped.tab);
                break;
              case 4:
                setActiveTab4(mapped.tab);
                break;
              case 5:
                setActiveTab5(mapped.tab);
                break;
              case 6:
                setActiveTab6(mapped.tab);
                break;
              case 7:
                setActiveTab7(mapped.tab);
                break;
              case 8:
                setActiveTab8(mapped.tab);
                break;
              default:
                break;
            }
          }
          window.scrollTo(0, 0);
          return;
        }
      }
      // if a service index was provided, activate that left-side service
      if (incomingServiceIndex !== null) {
        setActiveIndex(incomingServiceIndex);
      }

      if (incomingTabKey) {
        const match = incomingTabKey.match(/(\D+)(\d+)/);
        if (match) {
          const [, type, numStr] = match;
          const num = Number(numStr);

          switch (num) {
            case 1:
              setActiveTab(incomingTabKey);
              break;
            case 2:
              setActiveTab2(incomingTabKey);
              break;
            case 3:
              setActiveTab3(incomingTabKey);
              break;
            case 4:
              setActiveTab4(incomingTabKey);
              break;
            case 5:
              setActiveTab5(incomingTabKey);
              break;
            case 6:
              setActiveTab6(incomingTabKey);
              break;
            case 7:
              setActiveTab7(incomingTabKey);
              break;
            case 8:
              setActiveTab8(incomingTabKey);
              break;
            default:
              break;
          }
        }
      }

      window.scrollTo(0, 0);
    }
  }, [incomingTabKey, incomingServiceIndex]);


  const tabStyle = (tab) => {
    const isActive = (
      activeTab === tab || activeTab2 === tab || activeTab3 === tab || activeTab4 === tab ||
      activeTab5 === tab || activeTab6 === tab || activeTab7 === tab || activeTab8 === tab
    );
    return {
      flex: 1, // mỗi tab chiếm đều 1 phần
      padding: "12px 0", // chỉ padding trên dưới
      fontSize: 14,
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "#111827" : "#9ca3af",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderBottom: isActive ? "3px solid #111827" : "3px solid transparent",
    };
  };

  const currentTab = tabContents[activeTab];
  // UI CHANGE: Added serviceContents state to store editable content for each service
  // Each service has its own title, description, and styling options
  const [serviceContents, setServiceContents] = useState([
    // Service 0: 인증 센터
    {
      title: "영사 확인 • 사실인증",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    // Service 1: 결혼 이민
    {
      

    },
    // Service 2: 출생 · 사망 신고
    {
      title: "출생 · 사망 신고",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    {
      title: "출입국 행정",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    {
      title: "신분증명 서류",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    {
      title: "입양 절차 대행",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    {
      title: "비자 대행",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    {
      title: "법률",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    // Service 8: 기타 서비스
    {
      title: "기타 서비스",
      mainDescription: "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증",
      personalTitle: "개인서류",
      personalDesc: "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증",
      personalTable1Title: "호적 서류",
      personalTable1Desc: "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회",
      personalTable2Title: "각종 증명 서류",
      personalTable2Desc: "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등",
      businessTitle: "개인서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",

    },
  ]);

  // UI CHANGE: Added updateField function to handle real-time content updates
  // Allows editing of any field in serviceContents state
  const updateField = (index, field, value) => {
    setServiceContents(prev => prev.map((content, i) => i === index ? { ...content, [field]: value } : content));
  };

  // UI CHANGE: Created renderServiceContent function to provide distinct UI layouts for each service
  // Each service has its own unique interface design and editable content
  const renderServiceContent = () => {
    switch (activeIndex) {
      // Service 0: 인증 센터 - Comprehensive Layout with personal/business blocks and tables
      case 0:
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: "0 20px" }}>
            <div
              contentEditable
              onInput={(e) => updateField(activeIndex, 'title', e.target.innerText)}
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
                color: serviceContents[activeIndex]?.interfaceStyles?.titleColor || "#486284",
                marginBottom: 10,
                border: "none",
                outline: "none",
              }}
            >
              {serviceContents[activeIndex]?.title || '서비스'}
            </div>



            <div
              contentEditable
              onInput={(e) => updateField(activeIndex, 'mainDescription', e.target.innerText)}
              style={{
                textAlign: "center",
                fontSize: 16,
                color: serviceContents[activeIndex]?.interfaceStyles?.descColor || "#555",
                marginBottom: 40,
                border: "none",
                outline: "none",
              }}
            >
              {serviceContents[activeIndex]?.mainDescription || 'Description'}
            </div>

            {/* Full layout with blocks */}
            <div
              style={{
                background: serviceContents[activeIndex]?.interfaceStyles?.bgColor || "#fff",
                overflow: "hidden",
                marginBottom: 50,
                border: "1px solid #ddd",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                  <img
                    src={imgProfessional}
                    alt="개인서류"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, padding: "30px", background: "#f1f1f1ff" }}>
                  <div
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'personalTitle', e.target.innerText)}
                    style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    {serviceContents[activeIndex]?.personalTitle || 'Personal Title'}
                  </div>
                  <div
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'personalDesc', e.target.innerText)}
                    style={{ fontSize: 14, color: "#555", marginBottom: 20, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    {serviceContents[activeIndex]?.personalDesc || 'Personal Description'}
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      background: serviceContents[activeIndex]?.interfaceStyles?.buttonColor || "#D6B97B",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: 4,
                      fontSize: 15,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    상담 신청
                  </button>
                </div>
              </div>
              {/* Tables */}
              <div style={{ borderTop: "1px solid #ddd", background: "#f1f1f1ff" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      background: serviceContents[activeIndex]?.interfaceStyles?.tableBgColor || "#2c4d9e",
                      color: serviceContents[activeIndex]?.interfaceStyles?.tableTextColor || "#fff",
                      padding: "12px 16px",
                      width: 346.8,
                      fontWeight: "bold",
                      fontSize: 14,
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {serviceContents[activeIndex]?.personalTable1Title || 'Table 1 Title'}
                  </div>
                  <div style={{ padding: "12px 16px", fontSize: 14, color: "#292929ff" }}>
                    {serviceContents[activeIndex]?.personalTable1Desc || 'Table 1 Description'}
                  </div>
                </div>
                <div style={{ display: "flex", borderTop: "1px solid #ddd", background: "#f1f1f1ff" }}>
                  <div
                    style={{
                      background: serviceContents[activeIndex]?.interfaceStyles?.tableBgColor || "#2c4d9e",
                      color: serviceContents[activeIndex]?.interfaceStyles?.tableTextColor || "#fff",
                      padding: "12px 16px",
                      width: 346.8,
                      fontWeight: "bold",
                      fontSize: 14,
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {serviceContents[activeIndex]?.personalTable2Title || 'Table 2 Title'}
                  </div>
                  <div style={{ padding: "12px 16px", fontSize: 14, color: "#333" }}>
                    {serviceContents[activeIndex]?.personalTable2Desc || 'Table 2 Description'}
                  </div>
                </div>
              </div>
            </div>

            {/* Business block */}
            <div style={{ width: "100%", background: serviceContents[activeIndex]?.interfaceStyles?.bgColor || "#fff", border: "1px solid #ddd", }}>
              <div style={{ display: "flex", alignItems: "center", gap: "40px", background: "#f1f1f1ff" }}>
                <div style={{ flex: 1, order: 2 }}>
                  <img
                    src={imgTrust}
                    alt="기업서류"
                    style={{ minWidth: 600, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, padding: "30px", order: 1 }}>
                  <div
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'businessTitle', e.target.innerText)}
                    style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    {serviceContents[activeIndex]?.businessTitle || 'Business Title'}
                  </div>
                  <textarea
                    value={serviceContents[activeIndex]?.businessDesc || ''}
                    onChange={(e) => updateField(activeIndex, 'businessDesc', e.target.value)}
                    style={{ fontSize: 14, color: "#555", marginBottom: 20, border: "none", background: "transparent", outline: "none", width: "100%", resize: "none" }}
                    placeholder="Business Description"
                    rows="3"
                  />
                  <button onClick={() => setShowModal(true)} style={{
                    background: serviceContents[activeIndex]?.interfaceStyles?.buttonColor || "#D6B97B",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: 4,
                    fontSize: 15,
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginBottom: 20
                  }}>상담 신청</button>
                </div>
              </div>
              {/* Business tables */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ border: "1px solid #ddd", overflow: "hidden" }}>
                  <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
                    <div
                      style={{
                        width: "30%",
                        background: serviceContents[activeIndex]?.interfaceStyles?.tableBgColor || "#2c4d9e",
                        color: serviceContents[activeIndex]?.interfaceStyles?.tableTextColor || "#fff",
                        fontWeight: "bold",
                        padding: "15px",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                      }}
                    >
                      {serviceContents[activeIndex]?.businessTable1Title || 'Business Table 1 Title'}
                    </div>
                    <div style={{ flex: 1, padding: "15px", color: "#444", background: "#f1f1f1ff", fontSize: 14 }}>
                      {serviceContents[activeIndex]?.businessTable1Desc || 'Business Table 1 Description'}
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "30%",
                        background: serviceContents[activeIndex]?.interfaceStyles?.tableBgColor || "#2c4d9e",
                        color: serviceContents[activeIndex]?.interfaceStyles?.tableTextColor || "#fff",
                        fontWeight: "bold",
                        padding: "15px",
                        textAlign: "center",
                      }}
                    >
                      {serviceContents[activeIndex]?.businessTable2Title || 'Business Table 2 Title'}
                    </div>
                    <div style={{ flex: 1, padding: "15px", color: "#444", fontSize: 14, background: "#f1f1f1ff" }}>
                      {serviceContents[activeIndex]?.businessTable2Desc || 'Business Table 2 Description'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ width: "100%", textAlign: "center", marginTop: "80px", }}>
              <h2 style={{ fontFamily: "Afacad, serif", fontSize: "32px", fontWeight: "bold", marginBottom: "30px", transform: "translateX(-502px)" }}>
                진행 절차
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "28px",
                  flexWrap: "wrap",
                }}
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "28px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#f0f0f0e8",
                        borderRadius: "16px",
                        width: "165px",
                        height: "165px",
                        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#111827",
                          margin: 0,
                          fontSize: "22px",
                          alignSelf: "flex-start",
                          marginLeft: "10px",
                        }}
                      >
                        {step.id}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#374151",
                          marginTop: "10px",
                          lineHeight: "22px",
                        }}
                      >
                        {step.text}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      // Service 1: 결혼 이민 - Side-by-Side Layout with image and content
      case 1:
        if (!tabContents[activeTab]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>결혼 이민</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              국제 결혼 신고, F-6 비자 발급 등 베트남-한국 간의 법적 및 행정 절차를 <br />
              단순화하여 한 번에 불편함 없이 처리해 드립니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea1")} onClick={() => setActiveTab("korea1")}>
                한국 내 혼인신고
              </button>
              <button style={tabStyle("vietnam1")} onClick={() => setActiveTab("vietnam1")}>
                혼인관계증명서
              </button>
              <button style={tabStyle("certificate1")} onClick={() => setActiveTab("certificate1")}>
                혼인요건인증서
              </button>
              <button style={tabStyle("cc1")} onClick={() => setActiveTab("cc1")}>
                결혼 재신고
              </button>
              <button style={tabStyle("visa1")} onClick={() => setActiveTab("visa1")}>
                결혼이민 비자신청
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents[activeTab].title &&
                (!tabContents[activeTab].rows || tabContents[activeTab].rows.length === 0) &&
                (!tabContents[activeTab].steps1 || tabContents[activeTab].steps1.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents[activeTab].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents[activeTab].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents[activeTab].rows && tabContents[activeTab].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속기간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents[activeTab].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Steps */}
                  {tabContents[activeTab].steps1 && tabContents[activeTab].steps1.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents[activeTab].steps1.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "220px",
                                height: "160px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents[activeTab].steps1.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Notes (only show for korea1 tab) */}
            {activeTab === "korea1" && (
              <div style={{ marginTop: 80 }}>
                <h2 style={{ fontSize: 32, fontWeight: "600", marginBottom: 12 }}>유의사항</h2>
                <ul style={{ fontSize: 14, color: "#374151", lineHeight: "22px", paddingLeft: 20 }}>
                  <li style={{ marginBottom: 8 }}>
                    의사소통 능력 필수: 예비 배우자(신부/신랑) 비자 신청 시점까지 한국어능력 공인 시험 성적표, 한국어 과정 이수,
                    60점 이상 취득하거나 TOPIK 1급 이상 성적표 제출하여야 합니다.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    서류 유효기간 (3개월 원칙): 혼인 신고를 위해 제출하는 대부분의 서류는 3개월 이내에 발급된 것이어야 합니다.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    한국 내 혼인신고는 주민센터에서 접수 가능하며, 관할 구청 또는 시청 민원실에서 확인할 수 있습니다.
                  </li>
                  <li>
                    혼인신고가 완료되면 혼인관계증명서를 발급받아야 하며, 이후 베트남 공관에 제출해야 합니다.
                  </li>
                </ul>
              </div>
            )}
          </div>
        );
      // Service 2: 출생 · 사망 신고 - Card-based Layout with centered card design
      case 2:
        if (!tabContents2[activeTab2]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>출생신고</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
              초과된 경우에도 법적 문제를 해결하며 신속하게 등록 및 신고 절차 대행합니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea2")} onClick={() => setActiveTab2("korea2")}>
                출생 신고
              </button>
              <button style={tabStyle("vietnam2")} onClick={() => setActiveTab2("vietnam2")}>
                기한 초과 출생신고
              </button>
              <button style={tabStyle("certificate2")} onClick={() => setActiveTab2("certificate2")}>
                사망 신고
              </button>
              <button style={tabStyle("visa2")} onClick={() => setActiveTab2("visa2")}>
                기한 초과 사망신고
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents2[activeTab2].title &&
                (!tabContents2[activeTab2].rows || tabContents2[activeTab2].rows.length === 0) &&
                (!tabContents2[activeTab2].steps2 || tabContents2[activeTab2].steps2.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents2[activeTab2].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents2[activeTab2].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents2[activeTab2].rows && tabContents2[activeTab2].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents2[activeTab2].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Steps */}
                  {tabContents2[activeTab2].steps2 && tabContents2[activeTab2].steps2.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents2[activeTab2].steps2.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "320px",
                                height: "203px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents2[activeTab2].steps2.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Notes (only show for korea2 or vietnam2) */}
            {(activeTab2 === "korea2" || activeTab2 === "vietnam2") && (
              <div style={{ marginTop: 80 }}>
                <h2 style={{ fontSize: 32, fontWeight: "600", marginBottom: 12 }}>유의사항</h2>
                <ul style={{ fontSize: 14, color: "#374151", lineHeight: "22px", paddingLeft: 20 }}>
                  <li style={{ marginBottom: 8 }}>
                    대한민국 복수국적 허용 기간: 만 20세 이전에 복수국적을 취득한 자녀의 경우, 만 22세까지 복수국적 유지가 허용됩니다. (단, 외국 국적 불행사 서약서를 기한 내에 제출한 경우에 한함).
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    필수 선행 절차: 본 출생 등록 및 국적 관련 절차는 자녀의 대한민국 여권이 발급된 후에 진행이 가능합니다. 여권 발급이 선행되어야 함을 유의해 주십시오.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    복수국적자의 입출국 혜택: 자녀에게 복수국적(이중국적)이 부여될 경우, 대한민국과 베트남 양국 모두 사증(비자) 발급 없이 자유롭게 입출국이 가능합니다.
                  </li>
                  <li>
                    원패스 소요 기간: 당사에 서류 전달일(접수일)을 기준으로 약 2주의 기간이 소요됩니다. (공휴일은 기간 산정에서 제외됩니다.)
                  </li>
                </ul>
              </div>
            )}
          </div>
        );

      // Service 3: 출입국 행정 - Timeline Layout with step-by-step process visualization
      case 3:
        if (!tabContents3[activeTab3]) return null;
        return (

          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>출입국 행정</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
              초과된 경우에도 법적 문제를 해결하며 신속하게 등록 및 신고 절차 대행합니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea3")} onClick={() => setActiveTab3("korea3")}>
                베트남 국적 포기 신청
              </button>
              <button style={tabStyle("vietnam3")} onClick={() => setActiveTab3("vietnam3")}>
                베트남 국적 유지 신청
              </button>
              <button style={tabStyle("certificate3")} onClick={() => setActiveTab3("certificate3")}>
                베트남 국적 귀화 신청
              </button>
              <button style={tabStyle("visa3")} onClick={() => setActiveTab3("visa3")}>
                시체 등 반입 허가 신청
              </button>
              <button style={tabStyle("cc3")} onClick={() => setActiveTab3("cc3")}>
                베트남 국적 사실 확인
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents3[activeTab3].title &&
                (!tabContents3[activeTab3].rows || tabContents3[activeTab3].rows.length === 0) &&
                (!tabContents3[activeTab3].steps || tabContents3[activeTab3].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents3[activeTab3].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents3[activeTab3].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents3[activeTab3].rows && tabContents3[activeTab3].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents3[activeTab3].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents3[activeTab3].steps && tabContents3[activeTab3].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents3[activeTab3].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "320px",
                                height: "203px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents3[activeTab3].steps.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>


            {/* Extra Content */}
            {tabContents3[activeTab3].extraContent && tabContents3[activeTab3].extraContent}
          </div>
        );

      // Service 4: 신분증명 서류 - Document Grid Layout with icon-based service cards
      case 4:
        if (!tabContents4[activeTab4]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>신분증명 서류</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              고객님의 신분 증명 관련 서류를 완벽하게 준비해 드립니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea4")} onClick={() => setActiveTab4("korea4")}>
                일반 여권 발급 • 변경 • 추가
              </button>
              <button style={tabStyle("vietnam4")} onClick={() => setActiveTab4("vietnam4")}>
                호적 정보 정정
              </button>
              <button style={tabStyle("certificate4")} onClick={() => setActiveTab4("certificate4")}>
                베트남 국민 신고 • 업데이트
              </button>
              <button style={tabStyle("visa4")} onClick={() => setActiveTab4("visa4")}>
                베트남 출신 증명서 발급
              </button>
              <button style={tabStyle("cc4")} onClick={() => setActiveTab4("cc4")}>
                호적증서 반사오 재발급
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents4[activeTab4].title &&
                (!tabContents4[activeTab4].rows || tabContents4[activeTab4].rows.length === 0) &&
                (!tabContents4[activeTab4].steps || tabContents4[activeTab4].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents4[activeTab4].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents4[activeTab4].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents4[activeTab4].rows && tabContents4[activeTab4].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents4[activeTab4].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents4[activeTab4].steps && tabContents4[activeTab4].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents4[activeTab4].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "320px",
                                height: "203px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents4[activeTab4].steps.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        );

      // Service 5: 입양 절차 대행 - Process Flow Layout with numbered steps
      case 5:
        if (!tabContents5[activeTab5]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>입양 • 자녀 인지</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              복잡하고 까다로운 입양 절차, 전문 변호사가 처음부터 끝까지 안심하고 진행하도록 도와드리겠습니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea5")} onClick={() => setActiveTab5("korea5")}>
                보호자 신청 • 해지 신고
              </button>
              <button style={tabStyle("vietnam5")} onClick={() => setActiveTab5("vietnam5")}>
                베트남 혼외자 자녀 인지
              </button>
              <button style={tabStyle("certificate5")} onClick={() => setActiveTab5("certificate5")}>
                입양 절차 대행
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents5[activeTab5].title &&
                (!tabContents5[activeTab5].rows || tabContents5[activeTab5].rows.length === 0) &&
                (!tabContents5[activeTab5].steps || tabContents5[activeTab5].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents5[activeTab5].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents5[activeTab5].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents5[activeTab5].rows && tabContents5[activeTab5].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents5[activeTab5].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents5[activeTab5].steps && tabContents5[activeTab5].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                        }}
                      >
                        진행 절차
                      </h2>

                      {/* Bọc 6 step thành 2 hàng */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
                        {[0, 1].map((row) => (
                          <div
                            key={row}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "28px",
                            }}
                          >
                            {tabContents5[activeTab5].steps.slice(row * 3, row * 3 + 3).map((step, index) => (
                              <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                                <div
                                  style={{
                                    backgroundColor: "#f0f0f0e8",
                                    borderRadius: "16px",
                                    width: "320px",
                                    height: "202px",
                                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "20px",
                                    textAlign: "center",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontWeight: "bold",
                                      color: "#111827",
                                      margin: 0,
                                      fontSize: "22px",
                                      alignSelf: "flex-start",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    0{step.id}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: "15px",
                                      color: "#374151",
                                      marginTop: "10px",
                                      lineHeight: "22px",
                                    }}
                                  >
                                    {step.text}
                                  </p>
                                </div>
                                {/* Chỉ thêm mũi tên nếu chưa phải step cuối trong hàng */}
                                {index < 2 && <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        );

      // Service 6: 비자 대행 - Application Form Layout with side-by-side design
      case 6:
        if (!tabContents6[activeTab6]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>비자 대행</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              까다로운 비자 서류 준비부터 접수까지, 모든 절차를 신속하고 정확하게 대행하여 <br />
              성공적인 비자 발급을 약속드립니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea6")} onClick={() => setActiveTab6("korea6")}>
                베트남 통행증 발급
              </button>
              <button style={tabStyle("vietnam6")} onClick={() => setActiveTab6("vietnam6")}>
                초청(단기방문 C-3-1 비자)
              </button>
              <button style={tabStyle("certificate6")} onClick={() => setActiveTab6("certificate6")}>
                초청(단기방문 F-1-5 비자)
              </button>
              <button style={tabStyle("visa6")} onClick={() => setActiveTab6("visa6")}>
                베트남 비자면제증 발급
              </button>
              <button style={tabStyle("cc6")} onClick={() => setActiveTab6("cc6")}>
                베트남 전자비자 • 성용비자
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents6[activeTab6].title &&
                (!tabContents6[activeTab6].rows || tabContents6[activeTab6].rows.length === 0) &&
                (!tabContents6[activeTab6].steps || tabContents6[activeTab6].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents6[activeTab6].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents6[activeTab6].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents6[activeTab6].rows && tabContents6[activeTab6].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents6[activeTab6].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents6[activeTab6].steps && tabContents6[activeTab6].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents6[activeTab6].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "320px",
                                height: "203px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents6[activeTab6].steps.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        );

      // Service 7: 법률 - Legal Services Layout with service grid cards
      case 7:
        if (!tabContents7[activeTab7]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>법률 컨설팅</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              이혼, 노동, 체류자격 등 법적 문제를 예방하고, <br />
              발생한 문제를 해결하기 위한 자문합니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea7")} onClick={() => setActiveTab7("korea7")}>
                이혼 소송
              </button>
              <button style={tabStyle("vietnam7")} onClick={() => setActiveTab7("vietnam7")}>
                노동 관련 소송
              </button>
              <button style={tabStyle("certificate7")} onClick={() => setActiveTab7("certificate7")}>
                불법 체류자 관련 컨설팅
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents7[activeTab7].title &&
                (!tabContents7[activeTab7].rows || tabContents7[activeTab7].rows.length === 0) &&
                (!tabContents7[activeTab7].steps || tabContents7[activeTab7].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents7[activeTab7].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents7[activeTab7].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents7[activeTab7].rows && tabContents7[activeTab7].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents7[activeTab7].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents7[activeTab7].steps && tabContents7[activeTab7].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents7[activeTab7].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "160px",
                                height: "160px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents7[activeTab7].steps.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        );

      // Service 8: 기타 서비스 - Flexible Layout with dual cards and contact section
      case 8:
        if (!tabContents8[activeTab8]) return null;
        return (
          <div style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>B2B 서비스</h1>
            <p style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              기업 고객의 효율적인 업무를 위한 맞춤형 서비스입니다.
            </p>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
              }}
            >
              <button style={tabStyle("korea8", activeTab8)} onClick={() => setActiveTab8("korea8")} tabKey="a33">
                법인 • 지사 • 대표사무실 설립
              </button>
              <button style={tabStyle("vietnam8", activeTab8)} onClick={() => setActiveTab8("vietnam8")} tabKey="a34">
                노동 허가서, 임시 거주증 발급
              </button>
              <button style={tabStyle("certificate8", activeTab8)} onClick={() => setActiveTab8("certificate8")} tabKey="a35">
                수입 허가서
              </button>
              <button style={tabStyle("visa8", activeTab8)} onClick={() => setActiveTab8("visa8")} tabKey="a36">
                B2B 바이어 매칭
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div style={{ marginTop: "40px" }}>
              {(!tabContents8[activeTab8].title &&
                (!tabContents8[activeTab8].rows || tabContents8[activeTab8].rows.length === 0) &&
                (!tabContents8[activeTab8].steps || tabContents8[activeTab8].steps.length === 0)) ? (
                // Placeholder
                <div
                  style={{
                    backgroundColor: "#f3f6f8",
                    padding: "100px",
                    textAlign: "center",
                    borderRadius: "4px",
                    color: "#111827",
                    fontWeight: "500",
                  }}
                >
                  서비스 준비중
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents8[activeTab8].title && (
                    <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents8[activeTab8].title}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents8[activeTab8].rows && tabContents8[activeTab8].rows.length > 0 && (
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{ padding: "12px 16px" }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tabContents8[activeTab8].rows.map((row, i) => (
                          <tr
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{ padding: "14px 16px" }}>
                                {col}
                              </td>
                            ))}
                            <td style={{ padding: "14px 16px" }}>
                              <button
                                onClick={() => setShowModal(true)}
                                style={{
                                  color: "#fff",
                                  background: "#D6B97B",
                                  border: "none",
                                  padding: "10px 20px",
                                  borderRadius: 4,
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  marginBottom: 20,
                                  transform: "translateY(10px)",
                                }}
                              >
                                상담 신청
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents8[activeTab8].steps && tabContents8[activeTab8].steps.length > 0 && (
                    <div style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2
                        style={{
                          fontFamily: "Afacad, serif",
                          fontSize: "32px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          transform: "translateX(-502px)",
                        }}
                      >
                        진행 절차
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents8[activeTab8].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div
                              style={{
                                backgroundColor: "#f0f0f0e8",
                                borderRadius: "16px",
                                width: "220px",
                                height: "203px",
                                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                textAlign: "center",
                              }}
                            >
                              <p
                                style={{
                                  fontWeight: "bold",
                                  color: "#111827",
                                  margin: 0,
                                  fontSize: "22px",
                                  alignSelf: "flex-start",
                                  marginLeft: "10px",
                                }}
                              >
                                0{step.id}
                              </p>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {step.text}
                              </p>
                            </div>
                            {index < tabContents8[activeTab8].steps.length - 1 && (
                              <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>
        );
    }
  };

  const visibleCount = 9; // số icon hiển thị mỗi lần

  const handleClick = (i) => {
    setActiveIndex(i);
  };


  return (
    <>
      {/* PHẦN GIỚI THIỆU */}
      <section style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        minHeight: "40vh",
        width: "100vw",
        paddingTop: "120px",
      }}>

        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            SERVICES
          </h1>
        </div>
      </section>

      <section
        style={{ background: "#fff", minHeight: 400, width: "100vw", padding: "60px 0" }}
      >


        <div
          style={{
            position: "sticky",
            top: 50,
            zIndex: 1000,
            background: "#fff",

          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                width: "1200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                margin: "0 auto",
                padding: "10px 0",
              }}
            >
              {/* Icons container */}
              <div style={{ display: "flex", gap: 15 }}>
                {services.slice(startIndex, startIndex + visibleCount).map((item, i) => {
                  const realIndex = startIndex + i;
                  let currentIcon = item.icon;
                  if (activeIndex === realIndex) {
                    currentIcon = item.activeIcon;
                  } else if (hoverIndex === realIndex) {
                    currentIcon = item.hoverIcon;
                  }

                  return (
                    <div
                      key={realIndex}
                      onClick={() => handleClick(realIndex)}
                      onMouseEnter={() => setHoverIndex(realIndex)}
                      onMouseLeave={() => setHoverIndex(null)}
                      style={{
                        width: 120,
                        height: 140,
                        textAlign: "center",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={currentIcon}
                        alt={item.title}
                        style={{
                          width: 80,
                          height: 80,
                          transition: "opacity 0.3s",
                        }}
                      />
                      <div
                        style={{
                          marginTop: 12,
                          fontSize: 15,
                          fontWeight: activeIndex === realIndex ? 700 : 600,
                          color: activeIndex === realIndex ? "#2B3A67" : "#222",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* DETAILED CONTENT */}
        {renderServiceContent()}

        {/*  */}


      </section>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#f5f5f5",
              borderRadius: 6,
              padding: "80px 100px",
              width: 600, // 👉 to hơn
              maxWidth: "100%",
              position: "relative",
              fontFamily: "sans-serif",
              textAlign: "left",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 28,
                borderBottom: "1px solid #000",
                paddingBottom: 30,
              }}
            >
              상담 신청
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {/* 서비스 선택 */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    서비스 선택 <span style={{ color: "red" }}>*</span>
                  </label>
                  {/* UI CHANGE: Updated modal to use editable service titles from serviceContents */}
                  <input
                    type="text"
                    value={serviceContents[activeIndex]?.title || ''}
                    readOnly
                    style={{
                      flex: 1,
                      border: "none",
                      padding: "12px 0",
                      outline: "none",
                      background: "transparent",
                    }}
                  />
                </div>
                { /* show only after submit attempt */}
                {submittedServiceForm && !serviceContents[activeIndex]?.title && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    *필수입입입니다
                  </div>
                )}
              </div>

              {/* 이름 */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    이름 <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setNameError(false); }}
                    on
                    placeholder="이름을 입력해주세요"
                    style={{
                      flex: 1,
                      border: "none",
                      padding: "12px 0",
                      outline: "none",
                      background: "transparent",
                    }}
                  />
                </div>
                {nameError && submittedServiceForm && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    *필수입입니다
                  </div>
                )}
              </div>

              {/* 이메일 */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (e.target.value.trim()) setEmailError(false); }}
                    placeholder="이메일을 입력해주세요"
                    style={{
                      flex: 1,
                      border: "none",
                      padding: "12px 0",
                      outline: "none",
                      background: "transparent",
                    }}
                  />
                </div>
                {emailError && submittedServiceForm && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    *필수입입니다
                  </div>
                )}
              </div>

              {/* 전화번호 */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    전화번호 <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      width: 60,
                      border: "none",
                      outline: "none",
                      padding: "12px 0",
                      background: "transparent",
                    }}
                  >
                    <option value="선택">선택</option>
                    <option value="+82">+82</option>
                    <option value="+84">+84</option>
                  </select>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); if (e.target.value.trim()) setPhoneError(false); }}
                    placeholder="전화번호"
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      padding: "12px 0",
                      background: "transparent",
                      marginLeft: 8,
                    }}
                  />
                </div>
                {phoneError && submittedServiceForm && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    *필수입입니다
                  </div>
                )}
              </div>

              {/* 개인정보 동의 */}
              <div style={{ marginBottom: 22 }}>
                <label style={{ fontSize: 14, display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    style={{
                      marginRight: 6,
                      width: 16,
                      height: 16,
                      accentColor: "#000", // màu chấm tròn bên trong
                    }}
                  />
                  개인정보 수집 및 이용 동의
                </label>
              </div>

              {/* 구분선 với "or" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "28px 0",
                }}
              >
                <div style={{ flex: 1, height: 1, background: "#999" }}></div>
                <span style={{ margin: "0 18px", color: "#000000ff", fontSize: 18 }}>
                  or
                </span>
                <div style={{ flex: 1, height: 1, background: "#999" }}></div>
              </div>

              {/* Info liên hệ */}
              <div style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 26, textAlign: "center" }}>
                <div>
                  <strong>전화 걸기:</strong> (+82) 51-715-0607
                </div>
                <div>
                  <strong>이메일 보내기:</strong> OnePass.kr@gmail.com
                </div>
                <div style={{ color: "#444" }}>
                  <strong>*이용 시간:</strong> 평일 09:00 ~ 18:00 (점심 12:00~13:00,
                  주말 공휴일 휴무)
                </div>
              </div>

              {/* Nút submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#d9c4a4",
                  color: "#000",
                  padding: "16px",
                  border: "none",
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                상담 신청
              </button>
            </form>

            {/* Close nút X */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                background: "transparent",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default Service;

