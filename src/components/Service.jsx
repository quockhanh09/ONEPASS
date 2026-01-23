import { useLanguage } from "../LanguageContext.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

import fbIcon from "../assets/img/image20.png";
import iconMess from "../assets/img/iconmess.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
import certIcon from "../assets/img/s1icon.png"; // Hợp pháp hóa công chứng
import certActive from "../assets/img/s1-1icon.png"; // Hợp pháp hóa công chứng
import certHover from "../assets/img/s1-1icon.png"; // Hợp pháp hóa công chứng

import marriageIcon from "../assets/img/s2icon.png"; // Kết hôn
import marriageActive from "../assets/img/s2-2icon.png"; // Kết hôn
import marriageHover from "../assets/img/s2-2icon.png"; // Kết hôn

import birthIcon from "../assets/img/s3icon.png"; // Khai sinh, khai tử
import birthActive from "../assets/img/s3-3icon.png"; // Khai sinh, khai tử
import birthHover from "../assets/img/s3-3icon.png"; // Khai sinh, khai tử

import travelHover from "../assets/img/s4-4icon.png"; // Quốc tịch
import travelIcon from "../assets/img/s4icon.png"; // Quốc tịch
import travelActive from "../assets/img/s4-4icon.png"; // Quốc tịch

import idHover from "../assets/img/s5-5icon.png"; // Hộ chiếu, Hộ tịch
import idIcon from "../assets/img/s5icon.png"; // Hộ chiếu, Hộ tịch
import idActive from "../assets/img/s5-5icon.png"; // Hộ chiếu, Hộ tịch

import adoptionHover from "../assets/img/s6-6icon.png"; // Nhận nuôi
import adoptionIcon from "../assets/img/s6icon.png"; // Nhận nuôi
import adoptionActive from "../assets/img/s6-6icon.png"; // Nhận nuôi

import visaHover from "../assets/img/s7-7icon.png"; // Thị thực
import visaIcon from "../assets/img/s7icon.png"; // Thị thực
import visaActive from "../assets/img/s7-7icon.png"; // Thị thực

import lawIcon from "../assets/img/s8icon.png"; // Tư vấn pháp lý
import lawActive from "../assets/img/s8-8icon.png"; // Tư vấn pháp lý
import lawHover from "../assets/img/s8-8icon.png"; // Tư vấn pháp lý

import etcHover from "../assets/img/s9-9icon.png"; // Dịch vụ B2B
import etcIcon from "../assets/img/s9icon.png"; // Dịch vụ B2B
import etcActive from "../assets/img/s9-9icon.png"; // Dịch vụ B2B
import { style } from "framer-motion/client";

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
      { id: 2, text: "검토 및 발급 신청 (원패스)" },
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
      { id: 2, text: "검토 및 발급 신청 (원패스)" },
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
      { id: 2, text: "검토 및 발급 신청 (원패스)" },
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
      ["국적", "베트남 국적 포기 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
    extraContent: (language) => (
      <div className="Contents3-main" style={{ marginTop: "80px" }}>
        {/* Block 1 */}
        <h2 className="Contents3-h2" style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}>
          {language === "VI" ? (<>Trường hợp và đối tượng bắt buộc phải xin thôi quốc tịch Việt Nam</>) : (<>베트남 국적 포기 의무 및 대상 </>)}
        </h2>
        <table className="Contents3-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "80px" }}>
          <tbody className="Contents3-tbody">
            <tr className="Contents3-tr-1" style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td className="Contents3-td-1"
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
                {language === "VI" ? (<>Trường hợp phải thôi quốc tịch</>) : (<>베트남 국적 포기 의무 <br /> (필수 포기 대상)</>)}
              </td>
              <td className="Contents3-td-2"
                style={{
                  backgroundColor: "#f3f6f8",
                  padding: "18px",
                  color: "#374151",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }}
              >
                <ul className="Contents3-ul-1" style={{ margin: 0, paddingLeft: "30px" }}>
                  <li>
                    {language === "VI" ? (<><b>Nhập tịch sau khi Quan hệ Hôn nhân Chấm dứt:</b> Trường hợp quốc tịch Hàn Quốc được có được thông qua nhập tịch sau khi quan hệ hôn nhân chấm dứt vì các lý do như tử vong, ly hôn, mất tích với người phối ngẫu (vợ/chồng) là người Hàn Quốc.</>)
                      : (<>혼인 관계 종료 후 귀화: 한국인 배우자의 사망, 이혼, 실종 등으로 혼인 관계가 종료된 후 한국 국적을 귀화로 취득한 경우</>)}

                  </li>
                  <li>{language === "VI" ? (<><b>Nhập tịch Kèm theo/Đồng hành:</b>  Trường hợp quốc tịch Hàn Quốc được có được thông qua việc con cái nhập tịch kèm theo sau khi cha mẹ nhập tịch, hoặc con nuôi nhập tịch đồng hành.</>)
                    : (<>수반/동반 취득: 부모의 귀화 후 자녀가 수반 취득하거나 입양 자녀의 동반 취득 등으로 한국 국적을 갖게 된 경우</>)}

                  </li>
                </ul>
              </td>
            </tr>

            <tr className="Contents3-tr-2">
              <td
                className="Contents3-td-3"
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
                {language === "VI" ? (<>Đối tượng phải thôi quốc tịch</>) : (<>베트남 국적 포기 대상자 <br /> (주요 사례)</>)}

              </td>

              <td className="Contents3-td-4"
                style={{
                  backgroundColor: "#f9fbfc",
                  padding: "30px",
                  color: "#374151",
                  fontSize: "15px",
                  lineHeight: "1.6"
                }}
              >
                <ul className="Contents3-ul-2" style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>
                    {language === "VI" ? (<><b>Người đã được khôi phục quốc tịch:</b>  T Người đã được nhập tịch theo diện kết hôn nhưng bị mất quốc tịch Hàn Quốc do không nộp Giấy cam kết không thực hiện quyền công dân nước ngoài trong vòng 1 năm, và sau đó đã được phục hồi quốc tịch Hàn Quốc.</>)
                      : (<>국적 회복자: 혼인 관계에서 귀화한 후 1년 이내에 외국 국적 불행사 서약을 하지 않아 한국 국적이 상실되었다가 다시 국적 회복을 받은 자.</>)}
                  </li>
                  <li>
                    {language === "VI" ? (<><b>Con của người được công nhận: </b>  Con cái được người cha Hàn Quốc thừa nhận (nhận con) trước khi đăng ký kết hôn, và sau đó nhận được thông báo chấp thuận cấp quốc tịch Hàn Quốc.</>)
                      : (<> 인지자의 자녀: 혼인신고 전에 태어난 자녀를 한국인 부가 인지한 후 국적 취득 수리 통지를 받은 자녀.</>)}

                  </li>
                  <li>
                    {language === "VI" ? (<><b>Con nuôi: </b> Con nuôi đã được cho phép nhập quốc tịch Hàn Quốc sau khi nhận con nuôi từ người phối ngẫu (vợ/chồng) là người Việt Nam.</>)
                      : (<> 입양 자녀: 베트남 배우자의 자녀를 입양한 후 귀화 허가를 받은 입양 자녀.</>)}

                  </li>
                  <li>
                    {language === "VI" ? (<><b>Con của người nhập tịch:</b>  Con cái của người nhập tịch (là người gốc Việt Nam đã có được quốc tịch Hàn Quốc).</>)
                      : (<>귀화자의 자녀: 베트남 출신으로 한국 국적을 취득한 귀화자의 자녀.</>)}


                  </li>
                  <li>
                    {language === "VI" ? (<><b>Người nhập tịch vì lý do Ly hôn hoặc Tử vong:</b> Người được phép nhập quốc tịch Hàn Quốc với lý do ly hôn hoặc vợ/chồng là người Hàn Quốc tử vong.</>)
                      : (<> 이혼 또는 사망 사유 귀화자: 한국인 배우자와의 이혼 또는 사망을 사유로 귀화를 허가받은 자.</>)}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>


        {/* Block 2 */}
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          {language === "VI" ? (<>Thời hạn bắt buộc để thôi quốc tịch Việt Nam</>) : (<>베트남 국적 포기 의무 기한 </>)}
        </h2>
        <ul style={{ marginBottom: "50px", paddingLeft: "20px", color: "#374151" }}>
          <li>
            {language === "VI" ? (<><b>Thời hạn cuối cùng (1 năm): </b> Đối tượng bắt buộc thôi quốc tịch phải hoàn tất thủ tục thôi quốc tịch Việt Nam và nộp Giấy xác nhận cuối cùng cho Bộ Tư pháp Hàn Quốc trong vòng 1 năm kể từ ngày được cấp Chứng nhận Nhập tịch.</>)
              : (<>  <b>최종 기한 (1년):</b> 의무 포기 대상자는 귀화 증서 수여일로부터 1년 이내에 베트남 국적 포기를 완료하고 최종 확인서를 법무부에 제출해야 합니다.</>)}

          </li>
          <li>
            {language === "VI" ? (<><b>Biện pháp tạm thời trong 3 tháng (Bắt buộc):</b>  Do việc cấp Giấy xác nhận cuối cùng có thể mất hơn 1 năm, nên bắt buộc phải nộp hồ sơ xin thôi quốc tịch tại Đại sứ quán Việt Nam tại Hàn Quốc trong vòng 3 tháng kể từ ngày được cấp Chứng nhận Nhập tịch.</>)
              : (<><b>3개월 내 임시 조치 (필수):</b> 최종 확인서 발급까지 약 1년 이상 소요되므로, 귀화증서 수여일로부터 3개월 이내에 주외 베트남 대사관에 국적 포기를 신청해야 합니다.</>)}

          </li>
        </ul>

        {/* Block 3 */}
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
          {language === "VI" ? (<>Cách  duy trì quốc tịch Hàn Quốc</>) : (<> 한국 국적 유지를 위한 조치</>)}

        </h2>
        <ul style={{ paddingLeft: "20px", color: "#374151" }}>
          <li>
            {language === "VI" ? (<><b>Nộp Giấy Cam kết:</b> Trong vòng 3 tháng, người nhập tịch phải nộp Giấy xác nhận đã nộp hồ sơ xin thôi quốc tịch nhận được từ Đại sứ quán cho Cục Quản lý Xuất Nhập cảnh và Người nước ngoài (Bộ phận Quốc tịch), đồng thời thực hiện 'Cam kết không thực hiện quyền công dân nước ngoài'.</>) : (<><b>서약 제출:</b> 3개월 이내에 대사관으로부터 받은 국적 포기 신청 서류를 확인서를 첨부하고 “**외국 국적 불행사 서약**”을 이행해야 합니다.</>)}

          </li>
          <li>
            {language === "VI" ? (<><b>Hiệu lực:</b>Nếu đã nộp Giấy Cam kết và được cấp số đăng ký thường trú (주민등록번호), người nhập tịch có thể hoàn tất thủ tục thôi quốc tịch Việt Nam mà không bị mất quốc tịch Hàn Quốc ngay cả khi thời hạn 1 năm đã trôi qua. </>) : (<>   <b>효과:</b> 서약서를 제출해야 주민등록번호를 부여받으며, 1년 기한이 경과하더라도 최종 확인서를 통해 베트남 국적 포기 절차를 마무리할 수 있습니다.</>)}


          </li>
        </ul>
        <style>
          {`
/* 🔹 Responsive riêng cho Contents3: chỉ áp dụng ở màn <= 400px */
@media screen and (max-width: 450px) {
  .Contents3-main {
    padding: 0 10px;
  }

  .Contents3-table {
    width: 100%;
    border-collapse: collapse;
  }

  .Contents3-tr-1,
  .Contents3-tr-2 {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch;
    width: 100%;
    
  
    overflow: hidden;
  }

  /* Ô màu xanh bên trái */
  .Contents3-td-1,
  .Contents3-td-3 {
    background-color: #334785 !important;
    color: #fff !important;
    font-size: 13.5px !important;
    font-weight: 600;
    padding: 18px 10px !important;
    width: 38% !important;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  /* Ô nội dung bên phải */
  .Contents3-td-2,
  .Contents3-td-4 {
    background-color: #f9fbfc !important;
    color: #374151 !important;
    font-size: 13px !important;
    line-height: 1.6;
    width: 62% !important;
    padding: 15px 10px !important;
  }

  /* Căn lề danh sách */
  .Contents3-ul-1,
  .Contents3-ul-2 {
    padding-left: 16px !important;
    margin: 0;
  }

  /* Tiêu đề */
  .Contents3-h2 {
    font-size: 20px !important;
    text-align: center;
    margin-bottom: 20px !important;
  }
}

@media screen and (max-width: 400px) {
  .Contents3-main {
    padding: 0 10px;
  }

  .Contents3-table {
    width: 100%;
    border-collapse: collapse;
  }

  .Contents3-tr-1,
  .Contents3-tr-2 {
    display: flex !important;
    flex-direction: row !important;
    align-items: stretch;
    width: 100%;
    
  
    overflow: hidden;
  }

  /* Ô màu xanh bên trái */
  .Contents3-td-1,
  .Contents3-td-3 {
    background-color: #334785 !important;
    color: #fff !important;
    font-size: 13.5px !important;
    font-weight: 600;
    padding: 18px 10px !important;
    width: 38% !important;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  /* Ô nội dung bên phải */
  .Contents3-td-2,
  .Contents3-td-4 {
    background-color: #f9fbfc !important;
    color: #374151 !important;
    font-size: 13px !important;
    line-height: 1.6;
    width: 62% !important;
    padding: 15px 10px !important;
  }

  /* Căn lề danh sách */
  .Contents3-ul-1,
  .Contents3-ul-2 {
    padding-left: 16px !important;
    margin: 0;
  }

  /* Tiêu đề */
  .Contents3-h2 {
    font-size: 20px !important;
    text-align: center;
    margin-bottom: 20px !important;
  }
}

/* 🔹 Tinh chỉnh riêng cho màn nhỏ hơn 380px */
@media screen and (max-width: 380px) {
  .Contents3-td-1,
  .Contents3-td-3 {
    font-size: 13px !important;
    padding: 16px 8px !important;
  }

  .Contents3-td-2,
  .Contents3-td-4 {
    font-size: 12.5px !important;
    padding: 14px 8px !important;
  }

  .Contents3-h2 {
    font-size: 19px !important;
  }
}
`}
        </style>

      </div>
    )
  },
  vietnam3: {
    title: "베트남 국적 유지 신청",
    rows: [
      ["국적", "베트남 국적 유지 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },

    ],

  },

  certificate3: {
    title: "베트남 국적 재귀화 신청",
    rows: [
      ["국적", "베트남 국적 재귀화 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

  visa3: {
    title: "시체 등 송환 허가 신청",
    rows: [
      ["국적", "시체 등 송환 허가 신청", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },
  cc3: {
    title: "베트남 국적 사실 확인",
    rows: [
      ["국적", "베트남 국적 사실 확인", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "서류 준비 및 접수	(고객님 → 원패스)" },
      { id: 2, text: "검토 및 신고 (원패스)" },
      { id: 3, text: "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" },
    ],
  },

};


const tabContents4 = {
  korea4: {
    title: "일반 여권 발급 • 변경 • 추가",
    rows: [
      ["여권 • 호적", "일반 여권 발급 • 변경 • 추가", "별도 상담", "견적 상담 필요"],
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
      ["여권 • 호적", "호적  정보 정정", "별도 상담", "견적 상담 필요"],
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
      ["여권 • 호적", "베트남 국민 신고 • 업데이트", "별도 상담", "견적 상담 필요"],
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
      ["여권 • 호적", "베트남 출신 증명서 발급", "별도 상담", "견적 상담 필요"],
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
      ["여권 • 호적", "호적증서 반사오 재발급", "별도 상담", "견적 상담 필요"],
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
    title: "베트남 전자비자 • 상용비자",
    rows: [
      ["비자 대행", "베트남 전자비자 • 상용비자", "별도 상담", "견적 상담 필요"],
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

  end8: {
    title: "회사/사업 해산 • 폐업",
    rows: [
      ["B2B 서비스", "회사/사업 해산 • 폐업", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "사업 종료 신고 – 재정청 제출 → 재정청으로부터 사업 종료 통지서 발급 받기" },
      { id: 2, text: "회사 해산 신고 – 사업자등록실 제출" },
      { id: 3, text: "회사 해산 서류 제출 – 세무서 제출 → 세무서로부터 세금 의무 이행 통지서 발급 받기" },
      { id: 4, text: "회사 해산 서류 제출 – 재정청 제출 → 재정청으로부터 회사 해산 통지서 발급 받기" },

    ],

  },
  vietnam8: {
    title: "노동 허가서, 임시 거주증 발급",
    rows: [
      ["B2B 서비스", "노동 허가서, 임시 거주증 발급", "별도 상담", "견적 상담 필요"],
    ],
    steps: [
      { id: 1, text: "외국인 근로자 수요 승인" },
      { id: 2, text: "노동 허가증 신청 및 서류 준비" },
      { id: 3, text: "노동 허가증 발급 완료" },
      { id: 4, text: "임시 거주증 신청 및 발급" },

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
  { icon: certIcon, hoverIcon: certHover, activeIcon: certActive, title: "영사확인, 공증" },
  { icon: marriageIcon, hoverIcon: marriageHover, activeIcon: marriageActive, title: "결혼 이민" },
  { icon: birthIcon, hoverIcon: birthHover, activeIcon: birthActive, title: "출생신고" },
  { icon: travelIcon, hoverIcon: travelHover, activeIcon: travelActive, title: "국적" },
  { icon: idIcon, hoverIcon: idHover, activeIcon: idActive, title: "여권 • 호적" },
  { icon: adoptionIcon, hoverIcon: adoptionHover, activeIcon: adoptionActive, title: "입양 • 자녀 인지" },
  { icon: visaIcon, hoverIcon: visaHover, activeIcon: visaActive, title: "비자 대행" },
  { icon: lawIcon, hoverIcon: lawHover, activeIcon: lawActive, title: "법률 컨설팅" },
  { icon: etcIcon, hoverIcon: etcHover, activeIcon: etcActive, title: "B2B 서비스" },
];

// Mapping English slugs for each service
const serviceSlugs = [
  "hop-phap-hoa-cong-chung",
  "ket-hon",
  "khai-sinh-khai-tu",
  "quoc-tich",
  "ho-chieu-ho-tich",
  "nhan-nuoi",
  "thi-thuc",
  "tu-van-phap-ly",
  "dich-vu-b2b",
];

function Service(props) {
  const { slug } = useParams();
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const effectiveId = hoverId ?? activeId;
  const items = [
    { id: 0, name: "Messenger", icon: iconMess, link: "http://m.me/803644846172440" },
    { id: 1, name: "페이스북", icon: fbIcon, link: "https://www.facebook.com/profile.php?id=61581863960708" },
    { id: 2, name: "카카오톡", icon: kakaotalkIcon, link: "https://pf.kakao.com/_BHALn" },
    { id: 3, name: "Zalo", icon: zaloIcon, link: "https://zalo.me/0395944818" },
    { id: 4, name: "네이버", icon: naverIcon, link: "https://blog.naver.com/onepass_kr" },
  ]; const {
    services: svcBlockList,
    activeIndex: svcBlockActive,
    hoverIndex: svcBlockHover,
    handleClick: svcBlockClick,
    setHoverIndex: svcBlockSetHover,
  } = props;

  const [svcBlockFixed, setSvcBlockFixed] = useState(false);
  const [initialTop, setInitialTop] = useState(0);
  const svcBlockRef = useRef(null);

  useEffect(() => {
    if (svcBlockRef.current) {
      setInitialTop(svcBlockRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!svcBlockRef.current) return;

      const scrollY = window.scrollY;
      setSvcBlockFixed(scrollY >= initialTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialTop]);
  const [region, setRegion] = useState("");
  const [openRegion, setOpenRegion] = useState(false);
  const [regionError, setRegionError] = useState(true);
  const regionList = [
      { ko: "서울", vi: "Seoul" },
      { ko: "부산", vi: "Busan" },
    ];
  const { language } = useLanguage();
  const [service, setService] = useState("");
  const location = useLocation();
  const incomingTabKey = location.state?.tabKey || null;
  // incoming service index from App (0-based)
  const incomingServiceIndex = typeof location.state?.serviceIndex === 'number' ? location.state.serviceIndex : null;
  // Nếu có slug trên URL, chọn đúng dịch vụ tương ứng
  const [activeIndex, setActiveIndex] = useState(() => {
    if (!slug) return 0;
    const idx = serviceSlugs.indexOf(slug);
    return idx >= 0 ? idx : 0;
  });

  // Nếu slug thay đổi (chuyển link), cập nhật activeIndex
  useEffect(() => {
    let idx = 0;
    if (slug) {
      idx = serviceSlugs.indexOf(slug);
      if (idx < 0) idx = 0;
    }
    setActiveIndex(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);
  const navigate = useNavigate();

  // Khi nhấn vào dịch vụ, chuyển hướng đến /service/slug
  const handleServiceClick = (idx) => {
    setActiveIndex(idx);
    navigate(`/service/${serviceSlugs[idx]}`);
  };

  // Render danh sách dịch vụ dạng icon, mỗi icon click sẽ chuyển hướng đúng slug
  const renderServiceList = () => (
    <div className="service-list" style={{ display: "flex", flexDirection: "row", gap: 32, justifyContent: "center", margin: "40px 0" }}>
      {serviceContents.map((svc, idx) => (
        <div
          key={idx}
          onClick={() => handleServiceClick(idx)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: idx === activeIndex ? "#334785" : "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
              transition: "all 0.2s",
            }}
          >
            {/* Hiển thị icon tương ứng, ví dụ: certIcon, marriageIcon,... */}
            <img src={[
              certIcon,
              marriageIcon,
              birthIcon,
              travelIcon,
              idIcon,
              adoptionIcon,
              visaIcon,
              lawIcon,
              etcIcon,
            ][idx]} alt={svc.title} style={{ width: 40, height: 40, filter: idx === activeIndex ? "none" : "grayscale(1)" }} />
          </div>
          <span style={{ color: idx === activeIndex ? "#334785" : "#374151", fontWeight: idx === activeIndex ? 700 : 400, fontSize: 15, textAlign: "center" }}>
            {svc.title}
          </span>
        </div>
      ))}
    </div>
  );
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
  const [serviceName, setServiceName] = useState("");
  const [serviceEmail, setServiceEmail] = useState("");
  const [servicePhone, setServicePhone] = useState("");
  const [serviceCountryCode, setServiceCountryCode] = useState("선택");
  const [serviceAgree, setServiceAgree] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(false);
 const [serviceNameError, setServiceNameError] = useState(true);
const [serviceEmailError, setServiceEmailError] = useState(false);
const [servicePhoneError, setServicePhoneError] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };



const handleSubmit = async () => {

  const currentLang = language === "VI" ? "vi" : "ko";

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

    showTemporaryPopup(messages[currentLang].empty, true);
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("https://onepasscms-backend-tvdy.onrender.com/api/tuvan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        LoaiDichVu: service,
        TenHinhThuc: "Tư Vấn Nhanh", 
        HoTen: name,
        MaVung: countryCode,
        SoDienThoai: phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {

      showTemporaryPopup(`${messages[currentLang].serverError}`, true);
      console.error("Server Error:", data);
      return;
    }


    showTemporaryPopup(messages[currentLang].success);
    setService("");
    setName("");
    setPhone("");
    setAgree(false);
  } catch (err) {
    console.error("Lỗi khi kết nối server:", err);
    showTemporaryPopup(messages[currentLang].fail, true);
  } finally {
    setLoading(false);
  }
};


const translateServiceTitle = (title) => {
  if (!title) return "";

  const translations = {
    "영사확인, 공증": "hợp pháp hóa, công chứng",
    "결혼 이민": "Kết hôn",
    "출생 · 사망 신고": "Khai sinh · Khai tử",
    "국적": "Quốc tịch",
    "여권 • 호적": "Hộ chiếu, Hộ tịch",
    "입양 • 자녀 인지": "Nhận nuôi",
    "비자 대행": "Thị thực",
    "법률 컨설팅": "Tư vấn pháp lý",
    "B2B 서비스": "Dịch vụ B2B",
  };

  return translations[title] || title; 
};

const handleSubmitService = async (e) => {
  e.preventDefault();

  
  const currentLang = language === "VI" ? "vi" : "ko";

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
      fail: "Kết nối server thất bại.",
      serverError: "Đã xảy ra lỗi máy chủ.",
    },
  };

 
  setSubmittedServiceForm(true);

  
  setServiceNameError(!serviceName.trim());
  setServicePhoneError(!servicePhone.trim());
  setServiceEmailError(!serviceEmail.trim());
  setRegionError(!region);
  
  if (
    !serviceContents[activeIndex]?.title ||
    !region ||
    !serviceName.trim() ||
    !servicePhone.trim() ||
    !serviceAgree ||
    serviceCountryCode === "선택"
  ) {
    
    showTemporaryPopup(messages[currentLang].empty, true);
    return;
  }

 
  setServiceLoading(true);

  try {
    const translatedService = translateServiceTitle
      ? translateServiceTitle(serviceContents[activeIndex]?.title)
      : serviceContents[activeIndex]?.title;

    const response = await fetch("https://onepasscms-backend-tvdy.onrender.com/api/tuvan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        LoaiDichVu: translatedService,
        TenHinhThuc:"FormService",
        CoSoTuVan: region,
        HoTen: serviceName,
        Email: serviceEmail,
        MaVung: serviceCountryCode,
        SoDienThoai: servicePhone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {

      showTemporaryPopup(
        `${data.message || messages[currentLang].serverError}`,
        true
      );
      console.error("Server Error:", data);
      return;
    }


    showTemporaryPopup(messages[currentLang].success);

    
    setServiceName("");
    setServiceEmail("");
    setServicePhone("");
    setServiceCountryCode("선택");
    setServiceAgree(false);
    setSubmittedServiceForm(false);
    setServiceNameError(false);
    setServicePhoneError(false);
    setServiceEmailError(false);
    setRegion("");
    setRegionError(true);
  } catch (err) {
    console.error("Lỗi khi kết nối server:", err);
    showTemporaryPopup(messages[currentLang].fail, true);
  } finally {
    setServiceLoading(false);
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
      businessTitle: "기업서류",
      businessDesc: "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증",
      businessTable1Title: "회사 서류(해외투자 • 지사설립)",
      businessTable1Desc: "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등",
      businessTable2Title: "수출입",
      businessTable2Desc: "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등",
    },
    // Service 1: 결혼 이민
    {
      title: "결혼 이민",

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
      title: "국적",
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
      title: "여권 • 호적",
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
      title: "입양 • 자녀 인지",
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
      title: "법률 컨설팅",
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
      title: "B2B 서비스",
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
  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % serviceContents.length;
    handleServiceClick(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + serviceContents.length) % serviceContents.length;
    handleServiceClick(prevIdx);
  };
  // UI CHANGE: Created renderServiceContent function to provide distinct UI layouts for each service
  // Each service has its own unique interface design and editable content
  const renderServiceContent = () => {
    switch (activeIndex) {
      // Service 0: 인증 센터 - Comprehensive Layout with personal/business blocks and tables
      case 0:
        return (
          <div className="main-case0" style={{ maxWidth: 1200, margin: "60px auto", padding: "0 20px" }}>
            <div
              className="main-case0-title"
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
              {language === "VI"
                ? serviceContents[activeIndex]?.title_vi || "HỢP PHÁP HÓA, CÔNG CHỨNG"
                : serviceContents[activeIndex]?.title_kr || "영사확인, 공증"}
            </div>

            <div
              className="main-case0-description"
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
              {language === "VI"
                ? serviceContents[activeIndex]?.mainDescription_vi || "Dịch và công chứng, chứng thực giấy tờ, hồ sơ, tài liệu đa ngôn ngữ: Tiếng Việt, Tiếng Hàn, Tiếng Anh và Tiếng Trung"
                : serviceContents[activeIndex]?.mainDescription_kr || "베트남어, 한국어, 영어, 중국어 등 각종 언어의 서류를 정확하고 신속하게 번역 및 공증"
              }

            </div>

            {/* Full layout with blocks */}
            <div
              className="case0-inter"
              style={{
                background: serviceContents[activeIndex]?.interfaceStyles?.bgColor || "#fff",
                overflow: "hidden",
                marginBottom: 50,
                border: "1px solid #ddd",
              }}
            >
              <div className="case0-layout-1" style={{ display: "flex" }}>
                <div className="case0-layout-1-img" style={{ flex: 1 }}>
                  <img
                    src={imgProfessional}
                    alt="개인서류"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="case0-layout1-content" style={{ flex: 1, padding: "30px", background: "#f1f1f1ff" }}>
                  <div
                    className="case0-layout1-content1"
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'personalTitle', e.target.innerText)}
                    style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >

                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalTitle_vi || "Hồ sơ Cá nhân"
                      : serviceContents[activeIndex]?.personalTitle_kr || "개인서류"
                    }
                  </div>
                  <div
                    className="case0-layout1-content2"
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'personalDesc', e.target.innerText)}
                    style={{ fontSize: 14, color: "#555", marginBottom: 20, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    {/* {serviceContents[activeIndex]?.personalDesc || 'Personal Description'} */}

                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalDesc_vi || "Dịch vụ Biên dịch & Công chứng/Chứng thực hồ sơ Cá nhân"
                      : serviceContents[activeIndex]?.personalDesc_kr || "영사 확인을 받기 위해 개인관련 각종증명서 번역 및 공증 • 인증"
                    }
                  </div>
                  <button
                    className="case0-layout1-button"
                    onClick={() => setShowModal(true)}
                    style={{
                      background: serviceContents[activeIndex]?.interfaceStyles?.buttonColor || "#D6B97B",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: 4,
                      fontSize: 15,
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",

                    }}
                  >
                    {language === "VI" ? (<>Tư vấn</>) : ("상담 신청")}
                  </button>
                </div>
              </div>
              {/* Tables */}
              <div
                className="case0-Tables"
                style={{
                  borderTop: "1px solid #ddd",
                  background: "#f1f1f1",
                }}
              >
                {/* Hàng 1 */}
                <div
                  className="case0-Tables-1"
                  style={{
                    display: "flex",
                    alignItems: "stretch", // giúp 2 ô cùng chiều cao
                    background: "#f1f1f1",
                  }}
                >
                  {/* Ô tiêu đề */}
                  <div
                    className="case0-Tables-1-title"
                    style={{
                      background:
                        serviceContents[activeIndex]?.interfaceStyles?.tableBgColor ||
                        "#2c4d9e",
                      color:
                        serviceContents[activeIndex]?.interfaceStyles?.tableTextColor ||
                        "#fff",
                      width: 346.8,
                      fontWeight: "bold",
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      lineHeight: 1.5,
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalTable1Title_vi ||
                      "Giấy tờ liên quan đến Hộ tịch"
                      : serviceContents[activeIndex]?.personalTable1Title_kr || "호적 서류"}
                  </div>

                  {/* Ô mô tả */}
                  <div
                    className="case0-Tables-1-title1"
                    style={{
                      flex: 1,
                      fontSize: 14,
                      color: "#292929",
                      background: "rgb(241, 241, 241)",
                      display: "flex",
                      alignItems: "center",
                      lineHeight: 1.6,
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalTable1Desc_vi ||
                      "Giấy tờ hộ tịch (Giấy xác nhận quan hệ gia đình, Giấy xác nhận quan hệ hôn nhân, Giấy chứng nhận cơ bản, v.v.), Giấy khai sinh. Phiếu lý lịch tư pháp (Xác nhận tiền án, tiền sự)."
                      : serviceContents[activeIndex]?.personalTable1Desc_kr ||
                      "호적등본(가족관계증명서, 혼인관계증명서, 기본증명서 등), 제적등본, 출생증명서, 범죄경력조회"}
                  </div>
                </div>

                {/* Hàng 2 */}
                <div
                  className="case0-Tables-2"
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    borderTop: "1px solid #ddd",
                    background: "#f1f1f1",
                  }}
                >
                  {/* Ô tiêu đề */}
                  <div
                    className="case0-Tables-2-title"
                    style={{
                      background:
                        serviceContents[activeIndex]?.interfaceStyles?.tableBgColor ||
                        "#2c4d9e",
                      color:
                        serviceContents[activeIndex]?.interfaceStyles?.tableTextColor ||
                        "#fff",
                      width: 346.8,
                      fontWeight: "bold",
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      lineHeight: 1.5,
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalTable2Title_vi ||
                      "Các loại giấy chứng nhận, bằng cấp"
                      : serviceContents[activeIndex]?.personalTable2Title_kr ||
                      "각종 증명 서류"}
                  </div>

                  {/* Ô mô tả */}
                  <div
                    className="case0-Tables-2-title1"
                    style={{
                      flex: 1,
                      fontSize: 14,
                      color: "#333",
                      background: "rgb(241, 241, 241)",
                      display: "flex",
                      alignItems: "center",
                      lineHeight: 1.6,
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    {language === "VI"
                      ? serviceContents[activeIndex]?.personalTable2Desc_vi ||
                      "Các loại văn bằng/chứng chỉ do cơ quan Nhà nước và trường học cấp (Bằng tốt nghiệp, Bảng điểm), Giấy chứng nhận kinh nghiệm làm việc, Các loại giấy phép, chứng chỉ chuyên môn, bằng cấp nghề nghiệp."
                      : serviceContents[activeIndex]?.personalTable2Desc_kr ||
                      "정부 기관 및 학교 등에서 발행하는 각종 증명서(졸업증명서, 성적증명서 등), 경력증명서, 각종 자격증 및 면허증 등"}
                  </div>
                </div>
              </div>

            </div>

            {/* Business block */}
            <div className="case0-business" style={{ width: "100%", background: serviceContents[activeIndex]?.interfaceStyles?.bgColor || "#fff", border: "1px solid #ddd", }}>
              <div className="case0-business-1" style={{ display: "flex", alignItems: "center", gap: "40px", background: "#f1f1f1ff" }}>
                <div className="case0-business-img" style={{ flex: 1, order: 2 }}>
                  <img
                    src={imgTrust}
                    alt="기업서류"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="case0-business1-title" style={{ flex: 1, padding: "30px", order: 1 }}>
                  <div className="case0-business1-content1"
                    contentEditable
                    onInput={(e) => updateField(activeIndex, 'businessTitle', e.target.innerText)}
                    style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >

                    {language === "VI" ? (
                      serviceContents[activeIndex]?.businessTitle === "기업서류" ? "Hồ sơ Doanh nghiệp"

                        : serviceContents[activeIndex]?.businessTitle
                    ) : (
                      serviceContents[activeIndex]?.businessTitle
                    )}
                  </div>
                  <textarea className="case0-business1-content2"
                    value={
                      language === "VI"
                        ? (
                          serviceContents[activeIndex]?.businessDesc === "계약서, 해외투자, 해외지사설립 등 일반기업, 공기업 등 기업관련 전서류 번역  및 공증 • 인증"
                            ? "Các loại hồ sơ liên quan đến Doanh nghiệp (Công ty tư nhân, công ty nhà nước, đầu tư nước ngoài)"
                            : serviceContents[activeIndex]?.businessDesc
                        )
                        : (serviceContents[activeIndex]?.businessDesc || '')
                    }
                    onChange={(e) => updateField(activeIndex, 'businessDesc', e.target.value)}
                    style={{ fontSize: 14, color: "#555", marginBottom: 20, border: "none", background: "transparent", outline: "none", width: "100%", resize: "none" }}
                    placeholder="Business Description"

                  />
                  <button className="case0-business1-button" onClick={() => setShowModal(true)} style={{
                    background: serviceContents[activeIndex]?.interfaceStyles?.buttonColor || "#D6B97B",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: 4,
                    fontSize: 15,
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginBottom: 20
                  }}>{language === "VI" ? (<>Tư vấn</>) : ("상담 신청")}</button>
                </div>
              </div>
              {/* Business tables */}
              <div className="case0-business-2" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="case0-business2-title" style={{ border: "1px solid #ddd", overflow: "hidden" }}>
                  <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
                    <div className="case0-business2-content1"
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

                      {language === "VI" ? (
                        serviceContents[activeIndex]?.businessTable1Title === "회사 서류(해외투자 • 지사설립)" ? "Đầu tư nước ngoài, thành lập chi nhánh, pháp nhân"
                          : serviceContents[activeIndex]?.businessTable1Title
                      ) : (
                        serviceContents[activeIndex]?.businessTable1Title
                      )}
                    </div>
                    <div className="case0-business2-content2" style={{ flex: 1, padding: "15px", color: "#444", background: "#f1f1f1ff", fontSize: 14 }}>

                      {language === "VI" ? (
                        serviceContents[activeIndex]?.businessTable1Desc === "정관, 사업자등록증, 법인등기부등본, 기업재무제표(재무제표, 감사보고서 등), 은행잔고증명서, 납세사실증명, 회사 서약서, 각종 계약증 및 위임장 등" ? "Điều lệ công ty, Giấy phép đăng ký kinh doanh, Giấy chứng nhận đăng ký pháp nhân, Các tài liệu kế toán doanh nghiệp (Báo cáo tài chính, báo cáo kiểm toán, v.v.), Giấy chứng nhận số dư tài khoản ngân hàng, Giấy chứng nhận nộp thuế (Xác nhận đã hoàn thành nghĩa vụ thuế), Hợp đồng, Các loại chứng chỉ, bằng cấp và bằng sáng chế, .v.v"
                          : serviceContents[activeIndex]?.businessTable1Desc
                      ) : (
                        serviceContents[activeIndex]?.businessTable1Desc
                      )}
                    </div>
                  </div>
                  <div className="case0-business2-title2" style={{ display: "flex" }}>
                    <div className="case0-business2-content1"
                      style={{
                        width: "30%",
                        background: serviceContents[activeIndex]?.interfaceStyles?.tableBgColor || "#2c4d9e",
                        color: serviceContents[activeIndex]?.interfaceStyles?.tableTextColor || "#fff",
                        fontWeight: "bold",
                        padding: "15px",
                        textAlign: "center",
                      }}
                    >
                      {language === "VI" ? (
                        serviceContents[activeIndex]?.businessTable2Title === "수출입" ? "Xuất nhập khẩu"
                          : serviceContents[activeIndex]?.businessTable2Title
                      ) : (
                        serviceContents[activeIndex]?.businessTable2Title
                      )}
                    </div>
                    <div className="case0-business2-content2" style={{ flex: 1, padding: "15px", color: "#444", fontSize: 14, background: "#f1f1f1ff" }}>
                      {language === "VI" ? (
                        serviceContents[activeIndex]?.businessTable2Desc === "세관 신고서, 선하 증권, 포장 명세서, 수출입 허가서, 원산지 증명서, 수입 허가서, 검사 성적서 등" ? "Tờ khai hải quan, Hóa đơn thương mại, Danh sách đóng gói, Hợp đồng ngoại thương, Chứng nhận xuất xứ (C/O), Giấy phép nhập khẩu (Import License), Chứng nhận chất lượng/Chứng nhận hợp quy (CQ/CA)."
                          : serviceContents[activeIndex]?.businessTable2Desc
                      ) : (
                        serviceContents[activeIndex]?.businessTable2Desc
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="main-steps" style={{ width: "100%", textAlign: "center", marginTop: "80px", }}>
              <h2 className="main-steps-h2" style={{ fontFamily: "Afacad, serif", fontSize: "24px", fontWeight: "bold", marginBottom: "30px", transform: "translateX(-502px)" }}>
                {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
              </h2>
              <div
                className="steps-content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "28px",
                  flexWrap: "wrap",
                }}
              >
                {steps.map((step, index) => (
                  <div className="steps-index"
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "28px",
                    }}
                  >
                    <div className="steps-container"
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
                      <p className="steps-id"
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
                      <p className="steps-text"
                        style={{
                          fontSize: "16px",
                          color: "#374151",
                          marginTop: "10px",
                          lineHeight: "22px",
                        }}
                      >


                        {language === "VI" ? (
                          step.text === "서류 접수 및 상담 (고객님 → 원패스)" ? "Nộp hồ sơ, tư vấn (Quý khách → One Pass)"
                            : step.text === "전문 번역 (원패스)" ? "Dịch thuật (One Pass)"
                              : step.text === "교정 및 품질 검토 (원패스)" ? <>Kiểm thảo bản dịch (One Pass)</>
                                : step.text === "공증 촉탁 대행 (원패스 → 공증 기관)" ? <>Chứng thực (One Pass → Cơ quan thẩm quyền)</>
                                  : step.text === "완료 서류 전달 (원패스 → 고객님)" ? <>Trả hồ sơ (One Pass → Quý khách)</>
                                    : step.text
                        ) : (
                          step.text
                        )}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <span style={{ fontSize: "32px", color: "#1e3a8a" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <style>
              {`

            @media (max-width: 900px) {
  /* --- KHỐI CHUNG --- */
  .case0-layout-1,
  .case0-business-1 {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 0.75rem !important;
  }

  .case0-layout-1-img,
  .case0-business-img {
    flex: 0 0 40% !important;
    max-width: 40% !important;
    min-width: 0 !important;
  }

  .case0-layout-1-img img
  {
    width: 110% !important;
    height: 214px !important;
    object-fit: cover !important;
    
  }
  .case0-business-img img {
    width: 142px !important;
    height: 245px !important;
    object-fit: cover !important;
   
    }
  .case0-layout1-content,
  .case0-business1-title {
    flex: 1 1 60% !important;
    max-width: 60% !important;
    padding: 16px 20px !important;
    box-sizing: border-box !important;
  }

  .case0-layout1-button,
  .case0-business1-button {
    display: inline-block !important;
    margin-top: 10px !important;
  }

  /* --- BẢNG 1 (개인서류) --- */
 

  .case0-Tables-1-title {
    background: #1e3a8a !important;
    color: #fff !important;
    width: 110px !important;
    min-width: 110px !important;
    text-align: center !important;
    font-weight: 600 !important;
    padding: 12px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .case0-Tables-1-content {
    flex: 1 1 auto !important;
    background: #fff !important;
    color: #333 !important;
    padding: 12px 14px !important;
    line-height: 1.6 !important;
  }

  /* --- BẢNG 2 (기업서류) --- */
  

  .case0-Tables-2-title {
    background: #1e3a8a !important;
    color: #fff !important;
    width: 110px !important;
    min-width: 110px !important;
    text-align: center !important;
    font-weight: 600 !important;
    padding: 12px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .case0-Tables-2-content {
    flex: 1 1 auto !important;
    background: #fff !important;
    color: #333 !important;
    padding: 12px 14px !important;
    line-height: 1.6 !important;
  }

  /* --- CỘT TRÁI NỀN XANH CỦA BẢNG 2 --- */
  .case0-business2-content1 {
    background: #1e3a8a !important;
    color: #fff !important;
    width: 110px !important;
    min-width: 110px !important;
    text-align: center !important;
    font-weight: 600 !important;
    padding: 12px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .case0-business2-content2 {
    flex: 1 1 auto !important;
    background: #fff !important;
    color: #333 !important;
    padding: 12px 14px !important;
    line-height: 1.6 !important;
  }
}


/* ===== Responsive cho Steps ===== */
@media (max-width: 900px) {
  .steps-content {
    display: flex !important;
    flex-wrap: nowrap !important;        /* Không xuống hàng */
    overflow-x: auto !important;         /* Cho phép cuộn ngang */
    overflow-y: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start !important;
    gap: 28px !important;                /* Giãn cách giữa các step */
    padding: 20px 24px !important;       /* Chừa khoảng hai bên tránh bị cắt */
    box-sizing: border-box;
  }

  .steps-content::-webkit-scrollbar {
    height: 8px;
  }

  .steps-content::-webkit-scrollbar-thumb {
    background-color: #a1a1aa;
    border-radius: 4px;
  }

  .steps-index {
    flex: 0 0 auto !important;
    display: flex !important;
    align-items: center;
    gap: 24px !important;
  }

  .steps-container {
    background-color: #f0f0f0e8;
    border-radius: 16px;
    width: 165px !important;
    height: 165px !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px !important;
    text-align: center;
    box-sizing: border-box;
  }

  .steps-id {
    font-weight: bold;
    color: #111827;
    margin: 0;
    font-size: 20px !important;
    align-self: flex-start;
  }

  .steps-text {
    font-size: 15px !important;
    color: #374151;
    margin-top: 8px;
    line-height: 21px;
  }

  .main-steps-h2 {
    transform: translateX(0) !important;
    text-align: left !important;
    margin-left: 16px !important;
    font-size: 28px !important;
  }
}

/* ===== Màn hình nhỏ hơn 600px ===== */
@media (max-width: 600px) {
  .steps-container {
    width: 140px !important;
    height: 140px !important;
    padding: 12px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .steps-content {
    gap: 20px !important;
    padding: 16px !important;
  }

  .steps-id {
    font-size: 18px !important;
  }

  .steps-text {
    font-size: 14px !important;
  }
 
}
       @media (max-width: 390px){
        .case1-steps-main-h2
       {
          margin-left: 100px !important;
         font-size: 14px !important;
         text-align: center !important;
         display: block !important;
         margin: 0 auto !important;

       }
       @media (max-width: 380px){
        .case1-steps-main-h2
       {
         font-size: 14px !important;
         text-align: center !important;
         display: block !important;
         margin: 0 auto !important;
       }
             `}
            </style>
          </div>


        );

      // Service 1: 결혼 이민 - Side-by-Side Layout with image and content
      case 1:
        if (!tabContents[activeTab]) return null;
        return (
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>KẾT HÔN</>) : ("결혼 이민")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>


              {language === "VI" ? (<>Xử lý hồ sơ và thực hiện các thủ tục hành chính liên quan tới <br />
                đăng ký kết hôn, đăng ký visa kết hôn F-6</>) : (<>국제 결혼 신고, F-6 비자 발급 등 베트남-한국 간의 법적 및 행정 절차를 <br />
                  단순화하여 한 번에 불편함 없이 처리해 드립니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea1")} onClick={() => setActiveTab("korea1")}>
                {language === "VI" ? (<>Đăng ký kết hôn tại HQ</>) : (" 한국 내 혼인신고")}
              </button>
              <button style={tabStyle("vietnam1")} onClick={() => setActiveTab("vietnam1")}>
                {language === "VI" ? (<>Xác nhận tình trạng hôn nhân</>) : ("혼인관계증명서")}
              </button>
              <button style={tabStyle("certificate1")} onClick={() => setActiveTab("certificate1")}>
                {language === "VI" ? (<>Giấy đủ điều kiện kết hôn</>) : ("혼인요건인증서")}
              </button>
              <button style={tabStyle("cc1")} onClick={() => setActiveTab("cc1")}>
                {language === "VI" ? (<>Đăng ký lại việc kết hôn</>) : ("결혼 재신고")}
              </button>
              <button style={tabStyle("visa1")} onClick={() => setActiveTab("visa1")}>
                {language === "VI" ? (<>Đăng ký Visa kết hôn</>) : ("결혼이민 비자신청")}
              </button>


            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                  {language === "VI" ? (<>Đang chuẩn bị dịch vụ</>) : ("서비스 준비중")}
                </div>
              ) : (
                <>
                  {/* Title */}
                  {tabContents[activeTab].title && (
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>

                      {language === "VI" ? (
                        tabContents[activeTab].title === "한국 내 혼인신고" ? "Đăng ký kết hôn tại Hàn Quốc"
                          : tabContents[activeTab].title === "혼인관계증명서" ? "Xác nhận tình trạng hôn nhân"
                            : tabContents[activeTab].title === "혼인요건인증서" ? "Giấy đủ điều kiện kết hôn"
                              : tabContents[activeTab].title === "결혼 재신고" ? "Đăng ký lại việc kết hôn"
                                : tabContents[activeTab].title
                      ) : (
                        tabContents[activeTab].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents[activeTab].rows && tabContents[activeTab].rows.length > 0 && (
                    <table className="case1-table"
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 14,
                        tableLayout: "fixed", // ⚡ làm cho các cột có độ rộng bằng nhau
                      }}
                    >
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속기간", "비용", "상담문의"].map((h, i) => (
                            <th
                              className="case1-th1"
                              key={i}
                              style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}
                            >

                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속기간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody className="case1-tbody1">
                        {tabContents[activeTab].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2"
                                key={j}
                                style={{
                                  padding: "14px 16px",
                                  width: `${100 / 5}%`, // ⚡ giống th
                                  wordBreak: "keep-all",
                                }}
                              >
                                {language === "VI" ? (
                                  col === "결혼 이민" ? "Kết hôn" :
                                    col === "한국 내 혼인신고" ? "Đăng ký kết hôn tại Hàn Quốc" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "혼인관계증명서" ? "Xác nhận tình trạng hôn nhân" :
                                            col === "혼인요건인증서" ? "Cấp giấy đủ điều kiện kết hôn" :
                                              col === "결혼 재신고" ? "Đăng ký lại việc kết hôn" :
                                                col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1"
                              style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}
                            >
                              <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>

                  )}

                  {/* Steps */}
                  {tabContents[activeTab].steps1 && tabContents[activeTab].steps1.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents[activeTab].steps1.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >

                                {language === "VI" ? (
                                  step.text === "베트남 배우자 측 서류 준비" ? "Phía Việt Nam chuẩn bị hồ sơ" :
                                    step.text === "한국인 배우자 측 서류 준비" ? "Phía Hàn Quốc chuẩn bị hồ sơ" :
                                      step.text === "재외 공관에서 혼인요건인증서 발급" ? "Đăng ký giấy chứng nhận đủ điều kiện kết hôn " :
                                        step.text === "국내 혼인신고 후 베트남 혼인신고" ? "Sau khi đăng ký kết hôn tại Hàn Quốc, ghi chú kết hôn tại Việt Nam" :

                                          step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                            step.text === "검토 및 발급 신청 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)" :
                                              step.text === "증명서 발급 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                                step.text
                                ) : (
                                  step.text
                                )}

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
                <h2 style={{ fontSize: 24, fontWeight: "600", marginBottom: 12 }}>{language === "VI" ? (<>Lưu ý</>) : ("유의사항")}</h2>
                <ul style={{ fontSize: 14, color: "#374151", lineHeight: "22px", paddingLeft: 20, textAlign: "justify", }}>
                  <li style={{ marginBottom: 8, }}>
                    {language === "VI" ? (<><b>Bắt buộc chứng minh năng lực giao tiếp (Tiếng Hàn): </b>
                      Cô dâu (người sắp kết hôn) bắt buộc phải chứng minh khả năng giao tiếp bằng cách đạt 60 điểm trở lên sau khi hoàn thành khóa học tiếng Hàn do Bộ trưởng Bộ Tư pháp chỉ định, hoặc nộp chứng chỉ TOPIK cấp 1 trở lên tại thời điểm nộp hồ sơ xin visa</>) : (<> 의사소통 능력 필수: 예비 배우자(신부/신랑) 비자 신청 시점까지 한국어능력 공인 시험 성적표, 한국어 과정 이수,
                        60점 이상 취득하거나 TOPIK 1급 이상 성적표 제출하여야 합니다.</>)}
                  </li>
                  <li style={{ marginBottom: 8 }}>

                    {language === "VI" ? (<><b>Tuân thủ nghiêm ngặt thời hạn hiệu lực của hồ sơ (Nguyên tắc 3 tháng): </b>
                      Hầu hết các loại giấy tờ nộp cho cơ quan lãnh sự Hàn Quốc hoặc Việt Nam đều có thời hạn hiệu lực 3 tháng kể từ ngày cấp. Cần quản lý chính xác thời điểm chuẩn bị hồ sơ để tránh việc hồ sơ hết hạn gây chậm trễ trong quá trình xét duyệt.</>)
                      : (<> 서류 유효기간 (3개월 원칙): 혼인 신고를 위해 제출하는 대부분의 서류는 3개월 이내에 발급된 것이어야 합니다.</>)}
                  </li>
                  <li style={{ marginBottom: 8 }}>

                    {language === "VI" ? (<><b>Kiểm tra lịch sử xuất nhập cảnh trong thời gian tìm hiểu: </b>
                      Trong trường hợp tiến hành thủ tục kết hôn 'Đăng ký kết hôn trước tại Hàn Quốc' hoặc 'Đăng ký kết hôn trước tại Việt Nam', lịch sử xuất nhập cảnh Việt Nam của hai bên trong suốt thời gian tìm hiểu là hồ sơ bắt buộc, cần phải kiểm tra kỹ lưỡng.</>)
                      : (<>  한국 내 혼인신고는 주민센터에서 접수 가능하며, 관할 구청 또는 시청 민원실에서 확인할 수 있습니다.</>
                      )}
                  </li>
                  <li>


                    {language === "VI" ? (<><b>Việc cấp Visa thuộc quyền hạn riêng của cơ quan Lãnh sự: </b>
                      Cần lưu ý rằng ngay cả khi đã chuẩn bị đầy đủ mọi hồ sơ và đáp ứng các yêu cầu, việc cấp visa vẫn thuộc quyền hạn riêng của cơ quan lãnh sự. Nếu không đạt tiêu chuẩn, visa có thể bị từ chối, do đó cần phải chuẩn bị hồ sơ thật kỹ lưỡng.</>)
                      : (<>혼인신고가 완료되면 혼인관계증명서를 발급받아야 하며, 이후 베트남 공관에 제출해야 합니다.</>
                      )}
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
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>KHAI SINH, KHAI TỬ</>) : ("출생신고")}
            </h1>

            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              {language === "VI" ? (<>Tư vấn hồ sơ, thực hiện đăng ký khai sinh, khai tử trong thời hạn cũng như<br /> xử lý hồ sơ quá hạn cho người Việt Nam tại nước ngoài</>)
                : (<>신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
                  초과된 경우에도 법적 문제를 해결하며 신속하게 등록 및 신고 절차 대행합니다.</>)
              }
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea2")} onClick={() => setActiveTab2("korea2")}>
                {language === "VI" ? (<>Đăng ký khai sinh</>) : (" 출생 신고")}
              </button>
              <button style={tabStyle("vietnam2")} onClick={() => setActiveTab2("vietnam2")}>
                {language === "VI" ? (<>Đăng ký khai sinh quá hạn</>) : ("기한 초과 출생신고")}
              </button>
              <button style={tabStyle("certificate2")} onClick={() => setActiveTab2("certificate2")}>
                {language === "VI" ? (<>Đăng ký việc tử</>) : ("사망 신고")}
              </button>
              <button style={tabStyle("visa2")} onClick={() => setActiveTab2("visa2")}>
                {language === "VI" ? (<>Đăng ký khai tử quá hạn</>) : ("기한 초과 사망신고")}
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>

                      {language === "VI" ? (
                        tabContents2[activeTab2].title === "출생 신고" ? "Đăng ký khai sinh"
                          : tabContents2[activeTab2].title === "기한 초과 출생신고" ? "Đăng ký khai sinh quá hạn"
                            : tabContents2[activeTab2].title === "사망 신고" ? "Đăng ký việc tử"
                              : tabContents2[activeTab2].title === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn"
                                : tabContents2[activeTab2].title
                      ) : (
                        tabContents2[activeTab2].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents2[activeTab2].rows && tabContents2[activeTab2].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th className="case1-th1" key={i} style={{
                              padding: "14px 16px",
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents2[activeTab2].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px", width: `${100 / 5}%`, // ⚡ giống th
                                wordBreak: "keep-all",
                              }}>
                                {language === "VI" ? (
                                  col === "출생신고" ? "KhaI sinh, khai tử" :
                                    col === "출생 신고" ? "Đăng ký khai sinh" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "기한 초과 출생신고" ? "Đăng ký khai sinh quá hạn" :
                                            col === "사망 신고" ? "Đăng ký việc tử" :
                                              col === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn" :
                                                col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>
                  )}

                  {/* Steps */}
                  {tabContents2[activeTab2].steps2 && tabContents2[activeTab2].steps2.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents2[activeTab2].steps2.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                  step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                    step.text === "검토 및 신고 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                      step.text === "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :

                                        step.text === "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                          step.text === "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                            step.text === "서류 검토 및 공식 접수 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                              step.text === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn" :
                                                step.text
                                ) : (
                                  step.text
                                )}
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
                <h2 style={{ fontSize: 32, fontWeight: "600", marginBottom: 12 }}>
                  {language === "VI" ? (<>Lưu ý</>) : ("유의사항")}
                </h2>
                <ul style={{ fontSize: 14, color: "#374151", lineHeight: "22px", paddingLeft: 20 }}>
                  <li style={{ marginBottom: 8 }}>
                    {language === "VI" ? (<><b>Thời hạn duy trì Song tịch tại Hàn Quốc:</b>Đối với những trẻ em có quốc tịch kép trước tuổi 20, việc duy trì quốc tịch kép được phép đến trước tuổi 22 (Chỉ áp dụng trong trường hợp đã nộp Giấy cam kết không thực hiện quyền công dân nước ngoài trong thời hạn quy định).</>)
                      : (" 대한민국 복수국적 허용 기간: 만 20세 이전에 복수국적을 취득한 자녀의 경우, 만 22세까지 복수국적 유지가 허용됩니다. (단, 외국 국적 불행사 서약서를 기한 내에 제출한 경우에 한함).")
                    }
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    {language === "VI" ? (<><b>Thủ tục tiên quyết bắt buộc:</b>Các thủ tục đăng ký khai sinh và quốc tịch liên quan chỉ có thể được tiến hành sau khi hộ chiếu Hàn Quốc của trẻ đã được cấp. Vui lòng lưu ý rằng việc cấp hộ chiếu phải được thực hiện trước.</>)
                      : (" 필수 선행 절차: 본 출생 등록 및 국적 관련 절차는 자녀의 대한민국 여권이 발급된 후에 진행이 가능합니다. 여권 발급이 선행되어야 함을 유의해 주십시오.")
                    }
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    {language === "VI" ? (<><b>Lợi ích xuất nhập cảnh của người Song tịch:</b>Khi trẻ được cấp quốc tịch kép (song tịch), trẻ có thể tự do xuất nhập cảnh vào cả Hàn Quốc và Việt Nam mà không cần xin thị thực (visa).</>)
                      : ("복수국적자의 입출국 혜택: 자녀에게 복수국적(이중국적)이 부여될 경우,대한민국과 베트남 양국 모두 사증(비자) 발급 없이 자유롭게 입출국이 가능합니다.")
                    }
                  </li>
                  <li>
                    {language === "VI" ? (<><b>Thời gian xử lý tại One Pass: </b>Tính từ ngày chúng tôi nhận được hồ sơ (ngày tiếp nhận), thời gian xử lý dự kiến là khoảng 2 tuần (Ngày nghỉ lễ không được tính vào thời gian xử lý).</>)
                      : ("원패스 소요 기간: 당사에 서류 전달일(접수일)을 기준으로 약 2주의 기간이 소요됩니다.(공휴일은 기간 산정에서 제외됩니다.)")
                    }
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

          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>Quốc tịch</>) : ("국적")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>

              {language === "VI" ? (<>Chịu trách nhiệm thực hiện và hỗ trợ các thủ tục về xuất nhập cảnh và quốc tịch như <br />xin thôi, giữ quốc tịch, thủ tục hồi hương và giấy phép nhập cảnh</>) : (<>신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
                초과된 경우에도 법적 문제를 해결하며 신속하게 등록 및 신고 절차 대행합니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea3")} onClick={() => setActiveTab3("korea3")}>
                {language === "VI" ? (<>Xin thôi quốc tịch</>) : ("베트남 국적 포기 신청")}
              </button>
              <button style={tabStyle("vietnam3")} onClick={() => setActiveTab3("vietnam3")}>
                {language === "VI" ? (<>Đăng ký giữ quốc tịch</>) : ("베트남 국적 유지 신청")}
              </button>
              <button style={tabStyle("certificate3")} onClick={() => setActiveTab3("certificate3")}>
                {language === "VI" ? (<>Xin trở lại quốc tịch</>) : ("베트남 국적 재귀화 신청")}
              </button>
              <button style={tabStyle("visa3")} onClick={() => setActiveTab3("visa3")}>
                {language === "VI" ? (<>Nhập cảnh thi hài, tro cốt</>) : ("시체 등 송환 허가 신청")}
              </button>
              <button style={tabStyle("cc3")} onClick={() => setActiveTab3("cc3")}>
                {language === "VI" ? (<>Thủ tục hồi hương</>) : ("베트남 국적 사실 확인")}
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
                      {tabContents3[activeTab3].title && (
                        <h2 style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>

                          {language === "VI" ? (
                            tabContents3[activeTab3].title === "베트남 국적 포기 신청" ? "Xin thôi quốc tịch"
                              : tabContents3[activeTab3].title === "베트남 국적 유지 신청" ? "Đăng ký giữ quốc tịch"
                                : tabContents3[activeTab3].title === "베트남 국적 재귀화 신청" ? "Xin trở lại quốc tịch"
                                  : tabContents3[activeTab3].title === "시체 등 송환 허가 신청" ? "Nhập cảnh thi hài, tro cốt"
                                    : tabContents3[activeTab3].title === "베트남 국적 사실 확인" ? "Thủ tục hồi hương"
                                      : tabContents3[activeTab3].title
                          ) : (
                            tabContents3[activeTab3].title
                          )}
                        </h2>
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents3[activeTab3].rows && tabContents3[activeTab3].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th className="case1-th1" key={i} style={{
                              padding: "14px 16px", // ⚡ đồng nhất với td
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents3[activeTab3].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td key={j} style={{
                                padding: "14px 16px", // ⚡ đồng nhất với td
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "국적" ? "Quốc tịch" :
                                    col === "베트남 국적 포기 신청" ? "Xin thôi quốc tịch" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "베트남 국적 유지 신청" ? "Đăng ký giữ quốc tịch" :
                                            col === "베트남 국적 재귀화 신청" ? "Xin trở lại quốc tịch" :
                                              col === "시체 등 송환 허가 신청" ? "Nhập cảnh thi hài, tro cốt" :
                                                col === "베트남 국적 사실 확인" ? "Thủ tục hồi hương" :
                                                  col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents3[activeTab3].steps && tabContents3[activeTab3].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents3[activeTab3].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                  step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                    step.text === "검토 및 신고 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                      step.text === "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :

                                        step.text === "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                          step.text === "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                            step.text === "서류 검토 및 공식 접수 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                              step.text === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn"
                                                :
                                                step.text
                                ) : (
                                  step.text
                                )}

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
            {tabContents3[activeTab3].extraContent && typeof tabContents3[activeTab3].extraContent === "function" && tabContents3[activeTab3].extraContent(language)}

          </div>
        );

      // Service 4: 신분증명 서류 - Document Grid Layout with icon-based service cards
      case 4:
        if (!tabContents4[activeTab4]) return null;
        return (
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>HỘ CHIẾU, HỘ TỊCH</>) : ("여권 • 호적")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>

              {language === "VI" ? (<>Tư vấn hồ sơ và hỗ trợ thực hiện các thủ tục đăng ký cấp, <br />thay đổi giấy tờ tùy thân</>) : (<>신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
                고객님의 신분 증명 관련 서류를 완벽하게 준비해 드립니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea4")} onClick={() => setActiveTab4("korea4")}>
                {language === "VI" ? (<>Cấp, bổ sung hộ chiếu</>) : ("일반 여권 발급 • 변경 • 추가")}
              </button>
              <button style={tabStyle("vietnam4")} onClick={() => setActiveTab4("vietnam4")}>
                {language === "VI" ? (<>Thay đổi thông tin hộ tịch</>) : ("호적 정보 정정")}
              </button>
              <button style={tabStyle("certificate4")} onClick={() => setActiveTab4("certificate4")}>
                {language === "VI" ? (<>Đăng ký thông tin công dân</>) : ("베트남 국민 신고 • 업데이트")}
              </button>
              <button style={tabStyle("visa4")} onClick={() => setActiveTab4("visa4")}>
                {language === "VI" ? (<>Xác nhận gốc Việt Nam</>) : ("베트남 출신 증명서 발급 ")}
              </button>
              <button style={tabStyle("cc4")} onClick={() => setActiveTab4("cc4")}>
                {language === "VI" ? (<>Bản sao giấy tờ hộ tịch</>) : ("호적증서 반사오 재발급 ")}
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>

                      {language === "VI" ? (
                        tabContents4[activeTab4].title === "일반 여권 발급 • 변경 • 추가" ? "Cấp, bổ sung hộ chiếu"
                          : tabContents4[activeTab4].title === "호적 정보 정정" ? "Thay đổi thông tin hộ tịch"
                            : tabContents4[activeTab4].title === "베트남 국민 신고  • 업데이트" ? "Đăng ký thông tin công dân"
                              : tabContents4[activeTab4].title === "베트남 출신 증명서 발급" ? "Xác nhận gốc Việt Nam"
                                : tabContents4[activeTab4].title === "호적증서 반사오 재발급" ? "Bản sao giấy tờ hộ tịch"
                                  : tabContents4[activeTab4].title
                      ) : (
                        tabContents4[activeTab4].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents4[activeTab4].rows && tabContents4[activeTab4].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{
                              padding: "14px 16px",
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents4[activeTab4].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "여권 • 호적" ? "Hộ chiếu, Hộ tịch" :
                                    col === "일반 여권 발급 • 변경 • 추가" ? "Cấp, bổ sung hộ chiếu" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "호적  정보 정정" ? "Thay đổi thông tin hộ tịch" :
                                            col === "베트남 국민 신고 • 업데이트" ? "Đăng ký thông tin công dân" :
                                              col === "베트남 출신 증명서 발급" ? "Xác nhận gốc Việt Nam" :
                                                col === "호적증서 반사오 재발급" ? "Bản sao giấy tờ hộ tịch" :
                                                  col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents4[activeTab4].steps && tabContents4[activeTab4].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents4[activeTab4].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                  step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                    step.text === "검토 및 신고 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                      step.text === "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :

                                        step.text === "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                          step.text === "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                            step.text === "서류 검토 및 공식 접수 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                              step.text === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn" :
                                                step.text
                                ) : (
                                  step.text
                                )}
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
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>NHẬN NUÔI</>) : ("입양 • 자녀 인지")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>


              {language === "VI" ? (<>Tư vấn và thực hiện các thủ tục liên quan tới việc đăng ký nhận nuôi,<br />đăng ký / chấm dứt giám hộ</>) : (<>신생아 출생부터 사망까지, 모든 호적 변동 사항을 정확한 기한 내에, 혹은 기간이 <br />
                복잡하고 까다로운 입양 절차, 전문 변호사가 처음부터 끝까지 안심하고 진행하도록 도와드리겠습니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea5")} onClick={() => setActiveTab5("korea5")}>
                {language === "VI" ? (<>Đăng ký / chấm dứt việc giám hộ </>) : ("보호자 신청 • 해지 신고")}
              </button>
              <button style={tabStyle("vietnam5")} onClick={() => setActiveTab5("vietnam5")}>
                {language === "VI" ? (<>Nhận cha, mẹ, con</>) : (" 베트남 혼외자 자녀 인지")}
              </button>
              <button style={tabStyle("certificate5")} onClick={() => setActiveTab5("certificate5")}>
                {language === "VI" ? (<>Đăng ký nhận con nuôi</>) : (" 입양 절차 대행")}
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>

                      {language === "VI" ? (
                        tabContents5[activeTab5].title === "보호자 신청 • 해지 신고" ? "Đăng ký / chấm dứt việc giám hộ "
                          : tabContents5[activeTab5].title === "베트남 혼외자 자녀 인지" ? "Nhận cha, mẹ, con"
                            : tabContents5[activeTab5].title === "입양 절차 대행" ? "Đăng ký nhận con nuôi"
                              : tabContents5[activeTab5].title
                      ) : (
                        tabContents5[activeTab5].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents5[activeTab5].rows && tabContents5[activeTab5].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th className="case1-th1" key={i} style={{ padding: "12px 16px" }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents5[activeTab5].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "입양 • 자녀 인지" ? "Nhận nuôi" :
                                    col === "보호자 신청 • 해지 신고" ? "Đăng ký/chấm dứt việc giám hộ" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "베트남 혼외자 자녀 인지" ? "Nhận cha, mẹ, con" :
                                            col === "입양 절차 대행" ? "Đăng ký nhận con nuôi" :
                                              col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents5[activeTab5].steps && tabContents5[activeTab5].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      {/* Bọc 6 step thành 2 hàng */}
                      <div className="case1-steps-content" style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
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
                                <div className="case1-steps-content1"
                                  style={{
                                    backgroundColor: "#f0f0f0e8",
                                    borderRadius: "16px",
                                    width: "320px",
                                    height: "202px",
                                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.37)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "20px",
                                    textAlign: "center",
                                  }}
                                >
                                  <p className="case1-steps-content1-id"
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
                                  <p className="case1-steps-content1-text"
                                    style={{
                                      fontSize: "15px",
                                      color: "#374151",
                                      marginTop: "10px",
                                      lineHeight: "22px",
                                    }}
                                  >
                                    {language === "VI" ? (
                                      step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                        step.text === "검토 및 신고 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                          step.text === "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :

                                            step.text === "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                              step.text === "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                                step.text === "서류 검토 및 공식 접수 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                                  step.text === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn" :

                                                    step.text === "혼인신고 후 혼인이 성립한 날로부터 200일 이전에 출산 (혹인 혼인신고 전)" ? "Sinh con trước 200 ngày kể từ ngày kết hôn (hoặc trước khi đăng ký kết hôn)" :
                                                      step.text === "한국과 베트남 양국에 혼인신고 진행" ? "Đăng ký kết hôn tại cả Hàn Quốc và Việt Nam" :
                                                        step.text === "베트남에서 자녀 출생신고 진행 (국내 출산시 베트남대사관 통해 진행)" ? "Đăng ký khai sinh tại Việt Nam (Trường hợp sinh con tại Hàn Quốc thì thông qua Đại sứ quán)" :
                                                          step.text === "한국에서 인지 신고 진행 (출생신고가 불가능하기 때문에)" ? "Xin cấp thị thực (visa) cho người vợ/chồng Việt Nam và con cái." :
                                                            step.text === "기한 초과 사망신고" ? "Đăng ký Thừa nhận con tại Hàn Quốc" :
                                                              step.text === "자녀의 국적 획득 절차" ? "Xin cấp quốc tịch cho con" :
                                                                step.text === "베트남 배우자 및 자녀의 사증 발급" ? "Xin cấp thị thực (visa) cho người vợ/chồng Việt Nam và con cái." :
                                                                  step.text
                                    ) : (
                                      step.text
                                    )}
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
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>THỊ THỰC</>) : ("비자 대행")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              {language === "VI" ? (<>Tư vấn hồ sơ và hỗ trợ thực hiện xin cấp các loại Thị thực</>) : (<>까다로운 비자 서류 준비부터 접수까지, 모든 절차를 신속하고 정확하게 대행하여 <br />
                성공적인 비자 발급을 약속드립니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              
              <button style={tabStyle("vietnam6")} onClick={() => setActiveTab6("vietnam6")}>
                {language === "VI" ? (<>Visa thăm thân C-3-1</>) : ("초청(단기방문 C-3-1 비자)")}
              </button>
              <button style={tabStyle("certificate6")} onClick={() => setActiveTab6("certificate6")}>
                {language === "VI" ? (<>Visa thăm thân F-1-5</>) : ("초청(단기방문 F-1-5 비자)")}
              </button>
              <button style={tabStyle("visa6")} onClick={() => setActiveTab6("visa6")}>
                {language === "VI" ? (<>Cấp giấy miễn thị thực </>) : ("베트남 비자면제증 발급")}
              </button>
              <button style={tabStyle("cc6")} onClick={() => setActiveTab6("cc6")}>
                {language === "VI" ? (<>Visa điện tử / công tác</>) : ("베트남 전자비자 • 상용비자")}
              </button>
            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>

                      {language === "VI" ? (
                        tabContents6[activeTab6].title === "베트남 통행증 발급" ? "Cấp giấy thông hành"
                          : tabContents6[activeTab6].title === "초청(단기방문 C-3-1 비자)" ? "Visa thăm thân C-3-1"
                            : tabContents6[activeTab6].title === "초청(단기방문 F-1-5 비자)" ? "Visa thăm thân F-1-5"
                              : tabContents6[activeTab6].title === "베트남 비자면제증 발급" ? "Cấp giấy miễn thị thực "
                                : tabContents6[activeTab6].title === "베트남 전자비자 • 상용비자" ? " Visa điện tử / công tác"
                                  : tabContents6[activeTab6].title
                      ) : (
                        tabContents6[activeTab6].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents6[activeTab6].rows && tabContents6[activeTab6].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th key={i} style={{
                              padding: "14px 16px",
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents6[activeTab6].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "비자 대행" ? "Thị Thực" :
                                    
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "초청(단기방문 C-3-1 비자)" ? "Visa thăm thân C-3-1" :
                                            col === "초청(단기방문 F-1-5 비자)" ? "Visa thăm thân F-1-5" :
                                              col === "베트남 비자면제증 발급" ? "Cấp giấy miễn thị thực" :
                                                col === "베트남 전자비자 • 상용비자" ? "Visa điện tử / công tác" :
                                                  col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents6[activeTab6].steps && tabContents6[activeTab6].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents6[activeTab6].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                  step.text === "서류 준비 및 접수	(고객님 → 원패스)" ? "Chuẩn bị và nhận hồ sơ	(Quý khách → One Pass)" :
                                    step.text === "검토 및 신고 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                      step.text === "재외 공관에서 출생신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :

                                        step.text === "기간 초과 사유 검토 및 해결 방안 수립 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                          step.text === "재외 공관에서 신고 및 전달 (재외 공관 → 원패스 → 고객님)" ? "Cấp giấy xác nhận và trả kết quả (Cơ quan → One Pass → Quý khách)" :
                                            step.text === "서류 검토 및 공식 접수 (원패스)" ? "Xét duyệt hồ sơ và đăng ký  (One Pass)	" :
                                              step.text === "기한 초과 사망신고" ? "Đăng ký khai tử quá hạn" :
                                                step.text
                                ) : (
                                  step.text
                                )}
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
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>TƯ VẤN PHÁP LÝ</>) : ("법률 컨설팅")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>
              {language === "VI" ? (<>Tư vấn, đưa ra giải pháp các vấn đề về pháp lý liên quan đến<br />ly hôn, lao động, cư trú, v.v</>) :
                (<>이혼, 노동, 체류자격 등 법적 문제를 예방하고, <br />
                  발생한 문제를 해결하기 위한 자문합니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea7")} onClick={() => setActiveTab7("korea7")}>
                {language === "VI" ? (<>Liên quan tới ly hôn</>) : ("이혼 소송")}
              </button>
              <button style={tabStyle("vietnam7")} onClick={() => setActiveTab7("vietnam7")}>
                {language === "VI" ? (<>Liên quan tới lao động</>) : ("노동 관련 소송")}
              </button>
              <button style={tabStyle("certificate7")} onClick={() => setActiveTab7("certificate7")}>
                {language === "VI" ? (<>Liên quan tới cư trú</>) : ("불법 체류자 관련 컨설팅")}
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}> {language === "VI" ? (
                      tabContents7[activeTab7].title === "이혼 소송" ? "Liên quan tới ly hôn"
                        : tabContents7[activeTab7].title === "노동 관련 소송" ? "Liên quan tới lao động"
                          : tabContents7[activeTab7].title === "불법 체류자 관련 컨설팅" ? "Liên quan tới cư trú"
                            : tabContents7[activeTab7].title
                    ) : (
                      tabContents7[activeTab7].title
                    )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents7[activeTab7].rows && tabContents7[activeTab7].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th className="case1-th1" key={i} style={{
                              padding: "14px 16px",
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents7[activeTab7].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "법률 컨설팅" ? "Tư vấn pháp lý" :
                                    col === "이혼 소송" ? "Liên quan tới ly hôn" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :

                                          col === "노동 관련 소송" ? "Liên quan tới lao động" :
                                            col === "불법 체류자 관련 컨설팅" ? "Liên quan tới cư trú" :
                                              col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents7[activeTab7].steps && tabContents7[activeTab7].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents7[activeTab7].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                  step.text === "초기 정보 수집 및 경청" ? "Thu thập thông tin và thấu hiểu" :
                                    step.text === "주요 법적 쟁점 분석" ? "Phân tích luận điểm pháp lý" :
                                      step.text === "증거 평가 및 전략 상담" ? "Đánh giá bằng chứng và tư vấn chiến lược" :

                                        step.text === "비용 설명 및 계약 체결" ? "Báo giá và ký hợp đồng" :
                                          step.text === "계약 이행" ? "Ký hợp đồng" :
                                            step.text
                                ) : (
                                  step.text
                                )}
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
          <div className="main-case1" style={{ maxWidth: 1200, margin: "60px auto", padding: 24, fontFamily: "sans-serif", color: "#111827" }}>
            {/* Title */}
            <h1 className="main-case1-h1" style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", marginBottom: 8, color: "#486284" }}>
              {language === "VI" ? (<>DỊCH VỤ B2B</>) : ("B2B 서비스")}
            </h1>
            <p className="main-case1-p" style={{ textAlign: "center", fontSize: 16, color: "#4b5563", marginBottom: 32, lineHeight: "22px" }}>

              {language === "VI" ? (<>Dịch vụ tư vấn, hỗ trợ cho các doanh nghiệp</>) : (<>기업 고객의 효율적인 업무를 위한 맞춤형 서비스입니다.</>)}
            </p>

            <div className="main-case1-buttton"
              style={{
                display: "flex",
                borderBottom: "1px solid #d1d5db",
                marginBottom: 32,
                width: "100%",
                overflowX: "auto", // Cho phép scroll ngang
                whiteSpace: "nowrap", // Giữ các nút nằm cùng hàng
                scrollbarWidth: "none",
              }}
            >
              <button style={tabStyle("korea8", activeTab8)} onClick={() => setActiveTab8("korea8")} tabKey="a33">
                {language === "VI" ? (<>Thành lập công ty </>) : ("법인 • 지사 • 대표사무실 설립")}
              </button>
              <button style={tabStyle("end8", activeTab8)} onClick={() => setActiveTab8("end8")} tabKey="a39">
                {language === "VI" ? (<>Giải thể công ty </>) : ("회사/사업 해산 • 폐업")}
              </button>
              <button style={tabStyle("vietnam8", activeTab8)} onClick={() => setActiveTab8("vietnam8")} tabKey="a34">
                {language === "VI" ? (<>Đăng ký lao động, tạm trú</>) : ("노동 허가서, 임시 거주증 발급")}
              </button>
              <button style={tabStyle("certificate8", activeTab8)} onClick={() => setActiveTab8("certificate8")} tabKey="a35">
                {language === "VI" ? (<>Giấy phép xuất nhập khẩu</>) : ("수입 허가서")}
              </button>
              <button style={tabStyle("visa8", activeTab8)} onClick={() => setActiveTab8("visa8")} tabKey="a36">
                {language === "VI" ? (<>Kết nối khách hàng B2B</>) : ("B2B 바이어 매칭")}
              </button>

            </div>

            {/* Table */}
            {/* Nội dung Tab */}
            <div className="case1-main-tab" style={{ marginTop: "40px" }}>
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
                    <h2 style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
                      {language === "VI" ? (
                        tabContents8[activeTab8].title === "법인 • 지사 • 대표사무실 설립" ? "Thành lập công ty "
                          : tabContents8[activeTab8].title === "회사/사업 해산 • 폐업" ? "Giải thể công ty, chấm dứt dự án đầu tư"
                          : tabContents8[activeTab8].title === "노동 허가서, 임시 거주증 발급" ? "Đăng ký lao động, tạm trú"
                            : tabContents8[activeTab8].title === "수입 허가서" ? "Giấy phép xuất nhập khẩu"
                              : tabContents8[activeTab8].title === "B2B 바이어 매칭" ? "Kết nối khách hàng B2B"
                                : tabContents8[activeTab8].title
                      ) : (
                        tabContents8[activeTab8].title
                      )}
                    </h2>
                  )}

                  {/* Table */}
                  {tabContents8[activeTab8].rows && tabContents8[activeTab8].rows.length > 0 && (
                    <table className="case1-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, tableLayout: "fixed", }}>
                      <thead className="case1-thead1">
                        <tr className="case1-tr1" style={{ backgroundColor: "#334785", color: "#fff", textAlign: "center" }}>
                          {["업무 분류", "업무 이름", "수속시간", "비용", "상담문의"].map((h, i) => (
                            <th className="case1-th1" key={i} style={{
                              padding: "14px 16px",
                              width: `${100 / 5}%`,
                            }}>
                              {language === "VI" ? (
                                h === "업무 분류" ? "Phân loại" :
                                  h === "업무 이름" ? "Dịch vụ" :
                                    h === "수속시간" ? "Thời gian thực hiện" :
                                      h === "비용" ? "Chi phí" :
                                        h === "상담문의" ? "Yêu cầu tư vấn" :
                                          h
                              ) : (
                                h
                              )}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="case1-tbody1">
                        {tabContents8[activeTab8].rows.map((row, i) => (
                          <tr className="case1-tr2"
                            key={i}
                            style={{
                              textAlign: "center",
                              backgroundColor: "#f9fbfc",
                              color: "#374151",
                            }}
                          >
                            {row.map((col, j) => (
                              <td className="case1-td2" key={j} style={{
                                padding: "14px 16px",
                                width: `${100 / 5}%`,
                              }}>
                                {language === "VI" ? (
                                  col === "B2B 서비스" ? "Dịch vụ B2B" :
                                    col === "회사/사업 해산 • 폐업" ? "Giải thể công ty" :
                                      col === "별도 상담" ? "Trao đổi khi tư vấn" :
                                        col === "견적 상담 필요" ? "Trao đổi khi tư vấn" :
                                          col === "법인 • 지사 • 대표사무실 설립" ? "Thành lập công ty, chi nhánh, văn phòng đại diện" :
                                          col === "노동 허가서, 임시 거주증 발급" ? "Đăng ký lao động, tạm trú" :
                                            col === "수입 허가서" ? "Giấy phép xuất nhập khẩu" :
                                              col === "B2B 바이어 매칭" ? "Kết nối khách hàng B2B" :
                                                col
                                ) : (
                                  col
                                )}
                              </td>
                            ))}
                            <td className="case1-td2-1" style={{ padding: "14px 16px" }}>
                              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                                <button className="case1-td2-button"
                                  onClick={() => setShowModal(true)}
                                  style={{
                                    color: "#fff",
                                    background: "#D6B97B",
                                    border: "none",
                                    width: "100%",
                                    minWidth: "90px",
                                    maxWidth: "140px",
                                    height: "38px",
                                    borderRadius: "12px",
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap",
                                    padding: 0,
                                  }}
                                >
                                  {language === "VI" ? ("Hẹn tư vấn") : ("예약 상담")}
                                </button>
                                <a
                                  href="https://m.me/onepass.vn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  <button
                                    style={{
                                      color: "#fff",
                                      background: "#1e88e5",
                                      border: "none",
                                      width: "100%",
                                      minWidth: "90px",
                                      maxWidth: "140px",
                                      height: "38px",
                                      borderRadius: "12px",
                                      fontSize: 17,
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      lineHeight: 1.2,
                                      whiteSpace: "nowrap",
                                      padding: 0,
                                    }}
                                  >
                                    {language === "VI" ? ("Tư vấn ngay") : ("바로 상담")}
                                  </button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}


                  {/* Steps */}
                  {tabContents8[activeTab8].steps && tabContents8[activeTab8].steps.length > 0 && (
                    <div className="case1-steps-main" style={{ width: "100%", textAlign: "center", marginTop: "80px" }}>
                      <h2 className="case1-steps-main-h2"
                        style={{

                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "30px",
                          textAlign: "left"
                        }}
                      >
                        {language === "VI" ? (<>Quy trình thực hiện</>) : ("진행 절차")}
                      </h2>

                      <div className="case1-steps-content"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "28px",
                        }}
                      >
                        {tabContents8[activeTab8].steps.map((step, index) => (
                          <div key={index} style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                            <div className="case1-steps-content1"
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
                              <p className="case1-steps-content1-id"
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
                              <p className="case1-steps-content1-text"
                                style={{
                                  fontSize: "16px",
                                  color: "#374151",
                                  marginTop: "10px",
                                  lineHeight: "22px",
                                }}
                              >
                                {language === "VI" ? (
                                    step.text === "기업 정보 및 요구사항 파악" ? "Thu thập thông tin và yêu cầu của doanh nghiệp" :
                                    step.text === "원본 서류 준비 및 번역/공증" ? "Chuẩn bị hồ sơ và dịch / công chứng" :
                                      step.text === "현지에서 서류 제출 및 신청" ? "Nộp hồ sơ" :
                                        step.text === "심사시간 경과 후 증서 발급" ? "Cấp giấy phép và trả kết quả" :


                                  step.text === "사업 종료 신고 – 재정청 제출 → 재정청으로부터 사업 종료 통지서 발급 받기" ? "Nộp chấm dứt dự án đầu tư tại Sở Tài Chính → Nhận Thông báo chấm dứt dự án của sở tài chính" :
                                    step.text === "회사 해산 신고 – 사업자등록실 제출" ? "Thông báo giải thể công ty tại Phòng Đăng ký kinh doanh" :
                                      step.text === "회사 해산 서류 제출 – 세무서 제출 → 세무서로부터 세금 의무 이행 통지서 발급 받기" ? "Nộp hồ sơ giải thể công ty cho cơ quan Thuế → Nhận Thông báo hoàn thành nghĩa vụ thuế của Cơ quan Thuế" :
                                        step.text === "회사 해산 서류 제출 – 재정청 제출 → 재정청으로부터 회사 해산 통지서 발급 받기" ? "Nộp hồ sơ giải thể công ty tại Sở Tài chính → Nhận Thông báo giải thể công ty của sở tài chính" :

                                          step.text === "외국인 근로자 수요 승인" ? "Xét duyệt yêu cầu, hồ sơ" :
                                            step.text === "노동 허가증 신청 및 서류 준비" ? "Chuẩn bị hồ sơ và đăng ký giấy phép lao động" :
                                              step.text === "노동 허가증 발급 완료" ? "Cấp giấy phép lao động" :
                                                step.text === "임시 거주증 신청 및 발급" ? "Đăng ký và cấp giấy xác nhận tạm trú" :

                                                  step.text === "사전 확인 및 서류 준비" ? "Xét duyệt và chuẩn bị hồ sơ" :
                                                    step.text === "수입 허가 및 검사 절차 (건강기능식품 및 의류 등)" ? "Kiểm tra hàng hóa nhập khẩu (thực phẩm, quần áo, v.v.)" :
                                                      step.text === "수입 허가 신청 및 승인" ? "Đăng ký và cấp giấy phép nhập khẩu" :
                                                        step.text === "수입 신고 및 통관 절차" ? "Khai báo nhập khẩu và thông quan" :
                                                          step.text
                                ) : (
                                  step.text
                                )}
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
    window.scrollTo({
      top: 0,
      behavior: "smooth", // cuộn mượt
    });
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

        <div className="services-h1" style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            {language === "VI" ? (<>DỊCH VỤ</>) : ("SERVICES")}
          </h1>
          <style>
            {`
      /* responsive chỉ chỉnh vị trí chữ */
      @media (max-width: 768px) {
        .services-h1 {
          position: relative;
          top: 50%;
          transform: translateY(-30%);
          margin-top: 0;
          margin-bottom: 0;
        }

        .services-h1 h1 {
          font-size: 38px;
        }
      }

      @media (max-width: 480px) {
        .services-h1 {
          top: 50%;
          transform: translateY(-52%);
        }

        .services-h1 h1 {
          font-size: 28px;
        }
      }

      @media (max-width: 360px) {
        .services-h1 {
          top: 60%;
          transform: translateY(-30%);
        }

        .services-h1 h1 {
          font-size: 24px;
        }
      }
    `}
          </style>
        </div>

        <div className="consultation-bar"
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
              <option value="인증 센터">{language === "VI" ? (<>Hợp pháp hóa, công chứng</>) : ("영사확인, 공증")}</option>
              <option value="결혼 이민">{language === "VI" ? (<>Kết hôn</>) : ("결혼 이민")}</option>
              <option value="출생신고 대행">{language === "VI" ? (<>Khai sinh, khai tử</>) : ("출생신고 대행")}</option>
              <option value="국적 대행">{language === "VI" ? (<>Quốc tịch</>) : ("국적 대행")}</option>
              <option value="여권 • 호적 대행">{language === "VI" ? (<>Hộ chiếu, Hộ tịch</>) : ("여권 • 호적 대행")}</option>
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
            onClick={loading ? undefined :  handleSubmit}
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

      <section className="section-main-icon"
        style={{ background: "#fff", minHeight: 400, width: "100vw", }}
      >
        {/* ICON MENU */}
        <div
          className="main-icon"
          style={{
            position: "sticky",
            top: 50,
            zIndex: 1000,
            background: "#fff",
          }}
        >
          <div
            className="main-icon-1"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                margin: "0 auto",
                padding: "10px 0",
              }}
            >
              {/* ----- Mũi tên trái ----- */}
              <div
                className="arrow-btn arrow-left"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? services.length - 1 : prev - 1
                  )
                }
              >
                <span className="arrow-icon">←</span>
              </div>

              {/* Container ICON */}
              <div className={`main-icon-container ${svcBlockFixed ? 'fixed' : ''}`} ref={svcBlockRef}>
                {services.map((item, i) => {
                  const isActive = activeIndex === i;
                  const currentIcon = isActive
                    ? item.activeIcon
                    : hoverIndex === i
                      ? item.hoverIcon
                      : item.icon;

                  return (
                    <div
                      key={i}
                      className={`main-icon-item ${isActive ? "active" : ""}`}
                      onClick={() => handleServiceClick(i)}
                      onMouseEnter={() => setHoverIndex(i)}
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
                        className="main-icon-img"
                        src={currentIcon}
                        alt={item.title}
                        style={{
                          width: 80,
                          height: 80,
                          transition: "opacity 0.3s",
                        }}
                      />
                      <div
                        className="main-icon-title"
                        style={{
                          marginTop: 12,
                          fontSize: 15,
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? "#2B3A67" : "#222",
                          whiteSpace: "nowrap",
                        }}
                      >


                        {language === "VI" ? (
                          item.title === "영사확인, 공증" ? <>Hợp pháp hóa<br/> công chứng</>
                            : item.title === "결혼 이민" ? "Kết hôn"
                              : item.title === "출생신고" ? <>Khai sinh, khai tử</>
                                : item.title === "국적" ? <>Quốc tịch </>
                                  : item.title === "여권 • 호적" ? "Hộ chiếu, Hộ tịch"
                                    : item.title === "입양 • 자녀 인지" ? <>Nhận nuôi </>
                                      : item.title === "비자 대행" ? <>Thị thực</>
                                        : item.title === "법률 컨설팅" ? "Tư vấn pháp lý"
                                          : item.title === "B2B 서비스" ? <>Dịch vụ B2B</>

                                            : item.title
                        ) : (
                          item.title
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ----- Mũi tên phải ----- */}
              <div
                className="arrow-btn arrow-right"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === services.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <span className="arrow-icon">→</span>
              </div>
            </div>
          </div>
        </div>
        {/* DETAILED CONTENT */}
        {renderServiceContent()}
        <style>{`
    /* ---------- Desktop defaults (do not change desktop layout) ---------- */
    
    .main-icon-container {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  background: #fff; /* nền trắng để không bị trùng với phần sau */
  z-index: 1000;
}

.main-icon-container.fixed {
  position: fixed;
  top: 45px; 
  left: 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 1000;
}
    .main-icon-item {
      /* desktop: visible inline */
      display: flex;
      
      box-sizing: border-box;
      opacity: 1;
      transform: none;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    

    .main-icon-title {
      font-size: 15px;
    }

    /* hide arrows on desktop */
    .arrow-btn {
      display: none;
    }

    /* ---------- Mobile-only overrides ---------- */
    @media (max-width: 768px) {
    .main-case1-buttton{
          gap:20px
    }
        .section-main-icon{
          padding: 0px 0px;
      }
      .main-icon {
        position: relative !important;
      
      }
        .case1-main-tab h2{
        font-size: 24px;
        }
      .main-icon-1 {
        max-width: 100% !important;
        overflow: hidden !important;
      }

      /* Container becomes horizontal scrollable area for all icons */
      .main-icon-container {
        display: flex !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch !important;
        gap: 15px !important;
        padding: 0 20px !important;
        justify-content: flex-start !important;
        scrollbar-width: none !important; /* Hide scrollbar for Firefox */
        -ms-overflow-style: none !important; /* Hide scrollbar for IE/Edge */
      }

      .main-icon-container::-webkit-scrollbar {
        display: none !important; /* Hide scrollbar for Webkit browsers */
      }

      /* Make each item visible and inline */
      .main-icon-item {
        position: static !important;
        opacity: 1 !important;
        transform: none !important;
        pointer-events: auto !important;
        flex-shrink: 0 !important;
        width: 95px !important;
        height: 120px !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
      }

      .main-icon-img {
        width: 60px !important;
        height: 60px !important;
      }

      .main-icon-title {
        font-size: 12px !important;
        margin-top: 6px !important;
        text-align: center !important;
        white-space: nowrap !important;
      }

      /* Hide arrow buttons on mobile for swipe layout */
      .arrow-btn {
        display: none !important;
      }

      /* optional: slightly fade non-active content below while mobile icon changes */
      .service-content { transition: opacity 0.25s ease; }
    }

    @media (max-width: 400px){
    .main-case1-buttton{
          gap:20px
    }
     .section-main-icon{
          padding: 0px 0px;
      }
    }
  `}</style>
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
            className="modal-content"
            style={{
              background: "#f5f5f5",
              borderRadius: 0,
              padding: "24px 40px",
              width: 380,
              maxWidth: "100%",
              position: "relative",
              fontFamily: "sans-serif",
              textAlign: "left",

            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 16,
                borderBottom: "1px solid #000",
                paddingBottom: 12,
              }}
            >
              {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmitService}>
              {/* 서비스 선택 */}
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    {language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")}<span style={{ color: "red" }}>*</span>
                  </label>
                  {/* UI CHANGE: Updated modal to use editable service titles from serviceContents */}
                  <input
                    type="text"
                    value={
                      language === "VI"
                        ? (
                          serviceContents[activeIndex]?.title === "영사확인, 공증" ? "Hợp pháp hóa, công chứng"
                            : serviceContents[activeIndex]?.title === "결혼 이민" ? "Kết hôn"
                              : serviceContents[activeIndex]?.title === "출생 · 사망 신고" ? "Khai sinh · Khai tử"
                                : serviceContents[activeIndex]?.title === "국적" ? "Quốc tịch"
                                  : serviceContents[activeIndex]?.title === "여권 • 호적" ? "Hộ chiếu, Hộ tịch"
                                    : serviceContents[activeIndex]?.title === "입양 • 자녀 인지" ? "Nhận nuôi"
                                      : serviceContents[activeIndex]?.title === "비자 대행" ? "Thị thực"
                                        : serviceContents[activeIndex]?.title === "법률 컨설팅" ? "Tư vấn pháp lý"
                                          : serviceContents[activeIndex]?.title === "B2B 서비스" ? "Dịch vụ B2B"
                                            : serviceContents[activeIndex]?.title || ''
                        )
                        : serviceContents[activeIndex]?.title || ''
                    }
                    readOnly
                    style={{
                      flex: 1,
                      border: "none",
                      padding: "8px 0",
                      outline: "none",
                      background: "transparent",
                    }}
                  />
                </div>
                { /* show only after submit attempt */}
                {submittedServiceForm && !serviceContents[activeIndex]?.title && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입입입니다")}
                  </div>
                )}
              </div>
              <div className="phoneRight-form-main" style={{ marginBottom: 12, position: "relative" }}>
                  <div
                    className="phoneRight-form-1"
                    onClick={() => setOpenRegion(!openRegion)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #000",
                      fontSize: 18,
                      cursor: "pointer",
                      backgroundColor: "transparent",
                    }}
                  >
                    <label style={{ width: 120, fontWeight: 600 }}>
                      {language === "VI" ? "Cơ sở" : "지역"}{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>

                    <div
                      style={{
                        flex: 1,
                        padding: "8px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span className="span-form" style={{ color: region ? "#000" : "#999" }}>
                        {region || (language === "VI" ? "Chọn khu vực" : "지역 선택")}
                      </span>
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{
                          transition: ".2s",
                          transform: openRegion ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>
                    <style>
                      {`
                      @media (max-width: 400px) {
                        .span-form{
                          font-size: 14px;
                          }
                      }
                      `}
                    </style>
                  </div>

                  {openRegion && (
                    <div
                      style={{
                          position: "absolute",
                          top: "100%",
                          left: 120,
                          right: 0,
                          background: "#fff",
                          border: "1px solid #ccc",
                          borderRadius: 4,
                          zIndex: 10,
                        }}
                    >
                      {regionList.map((r) => (
                        <div
                          key={r.ko}
                          onClick={() => {
                            setRegion(language === "VI" ? r.vi : r.ko);
                            setRegionError(false);
                            setOpenRegion(false);
                          }}
                          style={{
                            padding: "10px 12px",
                            fontSize: 16,
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
                          onMouseLeave={(e) => (e.target.style.background = "#fff")}
                        >
                          {language === "VI" ? r.vi : r.ko}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* luôn hiển thị lỗi đỏ nếu chưa chọn */}
                  {regionError && (
                    <div 
                      style={{
                        fontSize: 12,
                        color: "red",
                        marginTop: 4,
                        marginLeft: 120,
                      }}
                    >
                      {language === "VI"
                        ? "*Đây là mục bắt buộc"
                        : "*필수입력입니다"}
                    </div>
                  )}
                </div>



              {/* 이름 */}
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    {language === "VI" ? (<>Họ tên</>) : ("이름")}<span style={{ color: "red" }}>*</span>
                  </label>
                    <input
                      type="text"
                      value={serviceName}
                      onChange={(e) => { 
                        const value = e.target.value;
                        setServiceName(value); 
                       if (value.trim() === "") {
                          setServiceNameError(true);
                        } else {
                          setServiceNameError(false);
                        }
                      }}
                      on
                      placeholder={language === "VI" ? "Vui lòng nhập họ và tên" : "이름을 입력해주세요"}
                      style={{
                        flex: 1,
                        border: "none",
                        padding: "8px 0",
                        outline: "none",
                        background: "transparent",
                      }}
                      pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                      title={
                        language === "VI"
                          ? "Họ tên phải có ít nhất 2 ký tự hợp lệ."
                          : "이름은 최소 2자 이상이어야 합니다."
                      }
                                  />
                </div>
                { serviceNameError && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginTop: 4,
                      marginLeft: 120,
                    }}
                  >
                    {language === "VI"
                      ? "*Đây là mục bắt buộc"
                      : "*필수입력입니다"}
                  </div>
                )}

              </div>

              {/* 이메일 */}
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #999",
                  }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}> {language === "VI" ? (<>Email</>) : ("이메일")}</label>
                  <input
                    type="email"
                    value={serviceEmail}
                    onChange={(e) => { 
                      setServiceEmail(e.target.value); if (e.target.value.trim()) setServiceEmailError(false); }}
                    placeholder={language === "VI" ? "Vui lòng nhập Email" : "이메일을 입력해주세요"}
                    style={{
                      flex: 1,
                      border: "none",
                      padding: "8px 0",
                      outline: "none",
                      background: "transparent",
                    }}
                  />
                </div>
                {/* {serviceEmailError && (
                  <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                    {language === "VI" ? (<>*Đây là mục bắt buộc</>) : (" *필수입입니다")}
                  </div>
                )} */}
              </div>

              {/* 전화번호 */}
              <div style={{ marginBottom: 12 }}>
                <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #999",
                    }}
                >
                  <label style={{ width: 120, fontWeight: 600 }}>
                    {language === "VI" ? (<>Điện thoại</>) : ("전화번호")}<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    value={serviceCountryCode}
                    onChange={(e) => setServiceCountryCode(e.target.value)}
                    style={{
                      width: 60,
                      border: "none",
                      outline: "none",
                      padding: "8px 0",
                      background: "transparent",
                    }}
                  >
                    <option value="선택">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
                    <option value="+82">+82</option>
                    <option value="+84">+84</option>
                  </select>
                  <input
                    type="text"
                    value={servicePhone}
                    onChange={(e) => { 
                      const value = e.target.value;
                       setServicePhone(value);
                       if (value.trim() === "") {
                          setServicePhoneError(true);
                        } else {
                          setServicePhoneError(false);

                        }
                      }}
                    placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      padding: "8px 0",
                      background: "transparent",
                      marginLeft: 8,
                    }}
                  />
                </div>
                  {servicePhoneError && (
                    <div style={{ fontSize: 12, color: "red", marginTop: 4 }}>
                      {language === "VI" ? (<>*Đây là mục bắt buộc</>) : (" *필수입입니다")}
                    </div>
                  )}

              </div>

              {/* 개인정보 동의 */}
              <div className="checkbox" style={{ marginBottom: 22 }}>
                <label className="checkbox-label" style={{ fontSize: 14, display: "flex", alignItems: "center" }}>
                  <input
                    type="radio"
                    checked={serviceAgree}
                    onChange={(e) => setServiceAgree(e.target.checked)}
                    style={{
                      marginRight: 6,
                      width: 16,
                      height: 16,
                      accentColor: "#000", // màu chấm tròn bên trong
                    }}
                  />
                  {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
                </label>
              </div>

              {/* 구분선 với "or" */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "20px 0",
                }}
              >
                <div style={{ flex: 1, height: 1, background: "#999" }}></div>
                <span style={{ margin: "0 18px", color: "#000000ff", fontSize: 18 }}>
                  or
                </span>
                <div style={{ flex: 1, height: 1, background: "#999" }}></div>
              </div>

              {/* Info liên hệ */}
              <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 16, textAlign: "center" }}>
                <div>
                  <strong>{language === "VI" ? (<>Liên hệ:</>) : ("전화 걸기:")}</strong> <div style={{ color: "#334155" }}>{language === "VI" ? (<>Seoul: (+82) 02-737-0607 <br /> Busan: (+82) 51-715-0607 </>) : (<>서울: (+82) 02-737-0607 <br /> 부산: (+82) 51-715-0607 </>)}</div>
                </div>
                <div>
                  <strong>{language === "VI" ? (<>Email: </>) : ("이메일 보내기:")}</strong> onepass.kr@gmail.com
                </div>
                <div style={{ color: "#444" }}>
                  {language === "VI" ? (<>*Giờ làm việc: 09:00 ~ 18:00 (Nghỉ trưa: 12:00~13:00,Thứ Bảy, Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) : ("*이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)")}
                </div>
              </div>

              {/* Nút submit */}
              <button
                type="submit"
                disabled={serviceLoading}
                style={{
                  width: "100%",
                  background: "#d9c4a4",
                  color: "#ffffffff",
                  padding: "12px",
                  border: "none",
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
              {serviceLoading
                ? language === "VI"
                  ? "Đang gửi..."
                  : "전송 중..."
                : language === "VI"
                ? "Tư vấn"
                : "상담 신청"}
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
          <style>
            {`
             @media (max-width: 450px) {
               .checkbox-label{
                width:100%;
            }
              .modal-content {
                padding: 20px 20px !important;
                width: 90vw !important;

                max-width: 90vw !important;
              }
              .modal-content h2 {
                font-size: 24px !important;
              }
              .modal-content label {
                width: 100px !important;
                font-size: 14px !important;
              }
              .modal-content input, .modal-content select {
                font-size: 14px !important;
                padding: 8px 0 !important;
              }
              .modal-content input[type="radio"] {
                width: 14px !important;
                height: 14px !important;
                margin-right: 6px !important;
              }
              .modal-content label[style*="display: flex"] {
                font-size: 12px !important;
                width: 100% !important;
              }
              .modal-content button[type="submit"] {
                padding: 12px !important;
                font-size: 14px !important;
              }
            }
            @media (max-width: 400px) {
               .checkbox-label{
                width:100%;
            }
              .modal-content {
                padding: 20px 20px !important;
                width: 90vw !important;

                max-width: 90vw !important;
              }
              .modal-content h2 {
                font-size: 24px !important;
              }
              .modal-content label {
                width: 100px !important;
                font-size: 14px !important;
              }
              .modal-content input, .modal-content select {
                font-size: 14px !important;
                padding: 8px 0 !important;
              }
              .modal-content input[type="radio"] {
                width: 14px !important;
                height: 14px !important;
                margin-right: 6px !important;
              }
              .modal-content label[style*="display: flex"] {
                font-size: 12px !important;
                width: 100% !important;
              }
              .modal-content button[type="submit"] {
                padding: 12px !important;
                font-size: 14px !important;
              }
            }
            @media (max-width: 390px) {
               .checkbox-label{
                width:100%;
            }
              .modal-content {
                padding: 15px 15px !important;
                width: 95vw !important;
                max-width: 95vw !important;
              }
              .modal-content h2 {
                font-size: 22px !important;
              }
              .modal-content label {
                width: 90px !important;
                font-size: 13px !important;
              }
              .modal-content input, .modal-content select {
                font-size: 13px !important;
                padding: 6px 0 !important;
              }
              .modal-content input[type="radio"] {
                width: 13px !important;
                height: 13px !important;
                margin-right: 6px !important;
              }
              .modal-content label[style*="display: flex"] {
                font-size: 11px !important;
                width: 100% !important;
              }
              .modal-content button[type="submit"] {
                padding: 10px !important;
                font-size: 13px !important;
              }
            }
            @media (max-width: 380px) {
              .modal-content {
                padding: 10px 10px !important;
                width: 98vw !important;
                max-width: 98vw !important;
              }
              .modal-content h2 {
                font-size: 20px !important;
              }
              .modal-content label {
                width: 80px !important;
                font-size: 12px !important;
              }
              .modal-content input, .modal-content select {
                font-size: 12px !important;
                padding: 4px 0 !important;
              }
              .modal-content input[type="radio"] {
                width: 12px !important;
                height: 12px !important;
                margin-right: 6px !important;
              }
              .modal-content label[style*="display: flex"] {
                font-size: 10px !important;
                width: 100% !important;
              }
              .modal-content button[type="submit"] {
                padding: 8px !important;
                font-size: 12px !important;
              }
                .checkbox-label{
                width:100%;
                }
            }
            `}
          </style>
        </div>
      )}
         {showPopup && (
              <div
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  background: popupMessage.isError ? "#f44336" : "#4CAF50", 
                  color: "white",
                  padding: "16px 30px",
                  borderRadius: "8px",
                  fontSize: "20px",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  zIndex: 9999,
                  animation: "pushDown 0.5s ease-out",
                }}
              >
                {popupMessage.text}
              </div>
            )}
    </>
  );
}

export default Service;


