import React from "react";
import imgLette1 from "../assets/img/news-related-3.jpg";
import imgNews4 from "../assets/img/ads-baner.png";
import imgNews1 from "../assets/img/news-related-1.jpg";
import imgNews2 from "../assets/img/news-related-2.jpg";
import imgNews3 from "../assets/img/news-related-3.jpg";
import heroInput from "../assets/img/bginput.png";
// Dữ liệu tin tức liên quan
const RELATED_NEWS = [
    {
        image: imgNews1,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "08-06-2024",
    },
    {
        image: imgNews2,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "08-06-2024",
    },
    {
        image: imgNews3,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "08-06-2024",
    },
    {
        image: imgNews1,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "08-06-2024",
    },
];

function Letter() {
    return (
        <>
            {/* Banner section at the top */}
            <div style={{
                width: '100%',
                minHeight: 120,
                overflow: 'hidden',
                margin: '0 0 40px 0',
                position: 'relative',
                background: `url(${imgNews4}) center/cover no-repeat`,
                padding: '48px 0',
                boxSizing: 'border-box',
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(24, 24, 24, 0.45)',
                    zIndex: 1,
                    padding: '3px 36'
                }} />
                {/* Content */}
                <div style={{
                    width: '100%',
                    minWidth: 320,
                    maxWidth: 1050,
                    position: 'relative',
                    zIndex: 2,
                    padding: '36px 32px 36px 36px',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderRadius: 28,
                    border: 'none',
                    backdropFilter: 'blur(5px)',
                    marginLeft: 36,
                    marginRight: 0,
                    boxSizing: 'border-box',
                    boxShadow: '0 6px 32px 0 rgba(140, 151, 179, 0.24)',
                    background: 'rgba(24, 24, 24, 0.1)',
                }}>
                    <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, letterSpacing: 0.2 }}>HỘI THẢO THƯỜNG NIÊN VỀ BẢN QUYỀN</div>
                    <div style={{ fontSize: 15, marginBottom: 18, fontWeight: 400, lineHeight: 1.5 }}>
                        Đăng ký ngay hôm nay để tham dự hội thảo lớn nhất năm của VCPC về các nội dung bản quyền cập nhật
                    </div>
                    <button style={{
                        background: '#B80000',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 16,
                        border: 'none',
                        borderRadius: 4,
                        padding: '10px 28px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                        marginTop: 4
                    }}>
                        Đăng ký tham gia
                    </button>
                </div>
            </div>

            {/* Main content box */}
            <div style={{ maxWidth: 1850, margin: "0 auto", padding: 32, borderRadius: 16, }}>
                <div style={{ textAlign: 'center', marginBottom: 18 }}>
                    <div
                        style={{
                            display: 'inline-block',
                            color: '#6B7683',
                            fontWeight: 700,
                            fontSize: 16,
                            letterSpacing: 2,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            border: '2px solid #D3D8DE',
                            borderRadius: 6,
                            background: '#F9F6F1',
                            padding: '6px 24px 4px 24px',
                            boxSizing: 'border-box',
                            fontFamily: 'inherit',
                        }}
                    >
                        TIN TỨC BẢN QUYỀN
                    </div>
                </div>
                <h1 style={{ color: "#22336C", fontWeight: 700, fontSize: 28, textAlign: "center", marginBottom: 12, lineHeight: 1.3 }}>
                    Công Bố Báo Cáo Thường Niên: <br />
                    Tình Hình Vi Phạm Bản Quyền Năm 2025
                </h1>
                <div style={{ display: "flex", justifyContent: "center", gap: 32, color: "#888", fontSize: 15, marginBottom: 18 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-person-circle" /> VCPC EDITOR
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-calendar" /> 08-06-2025
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-eye" /> 20,546
                    </span>
                </div>
                <div style={{ fontWeight: 400, fontSize: 16, marginBottom: 18 }}>
                    <b>Hà Nội, ngày 08 tháng 06 năm 2025</b> — Hà Nội, ngày 08 tháng 06 năm 2025 — Cục Bản quyền tác giả (Bộ Văn hóa, Thể thao và Du lịch) vừa chính thức công bố Báo cáo thường niên về Tình hình Vi phạm Bản quyền năm 2025, cho thấy những diễn biến phức tạp và thách thức mới, đặc biệt là trên môi trường số. Báo cáo này là một tài liệu quan trọng, cung cấp cái nhìn toàn diện về thực trạng vi phạm và những giải pháp cần thiết để bảo vệ tài sản trí tuệ tại Việt Nam.
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px 0" }}>
                    Xu hướng vi phạm bản quyền năm 2025: Từ truyền thống đến không gian mạng
                </div>
                <div style={{ color: "#444", fontSize: 16, marginBottom: 16, lineHeight: 1.7 }}>
                    Báo cáo chỉ ra rằng các hành vi vi phạm bản quyền vẫn diễn ra mạnh mẽ trên cả hai phương diện: truyền thống và trực tuyến. Các hình thức vi phạm truyền thống như sao chép sách lậu, làm giả các sản phẩm âm nhạc, video vẫn tồn tại. Tuy nhiên, điểm đáng chú ý nhất trong năm 2025 là sự gia tăng đột biến của các vụ vi phạm trên không gian mạng.<br />
                    Các nền tảng mạng xã hội, dịch vụ chia sẻ video và các trang web streaming lậu trở thành "điểm nóng" của các hành vi vi phạm. Việc sao chép, phát tán và kinh doanh trái phép các tác phẩm điện ảnh, âm nhạc, sách điện tử và phần mềm diễn ra công khai, gây thiệt hại nghiêm trọng cho các tác giả và doanh nghiệp
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px 0" }}>
                    Khó khăn và thách thức
                </div>
                <div style={{ color: "#444", fontSize: 16, marginBottom: 16, lineHeight: 1.7 }}>
                    Báo cáo cũng thẳng thắn chỉ ra những thách thức lớn trong công tác phòng chống vi phạm. Đầu tiên là vấn đề pháp lý và kỹ thuật. Tốc độ lan truyền của thông tin trên mạng rất nhanh, khiến việc truy vết và xử lý vi phạm gặp nhiều khó khăn. Các đối tượng vi phạm thường sử dụng máy chủ ở nước ngoài, ẩn danh tính, làm cản trở quá trình điều tra của các cơ quan chức năng.<br />
                    Thứ hai là vấn đề nhận thức của cộng đồng. Mặc dù đã có nhiều chiến dịch tuyên truyền, vẫn còn một bộ phận không nhỏ người tiêu dùng chưa ý thức được tầm quan trọng của việc tôn trọng bản quyền. Việc tải và sử dụng các sản phẩm lậu vẫn còn phổ biến do thói quen "dùng miễn phí".
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
                    <img src={imgLette1} alt="minh họa" style={{ maxWidth: 700, width: 500, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, margin: "24px 0 8px 0" }}>
                    Các giải pháp và kiến nghị
                </div>
                <div style={{ color: "#444", fontSize: 16, marginBottom: 0, lineHeight: 1.7 }}>

                    Để đối phó với tình hình này, Báo cáo đã đưa ra một số kiến nghị quan trọng. Cục Bản quyền tác giả đề xuất cần tăng cường sự phối hợp giữa các cơ quan quản lý nhà nước, các tổ chức xã hội và các nền tảng kỹ thuật số. Cần có các chế tài mạnh hơn và hiệu quả hơn đối với các hành vi vi phạm trên không gian mạng.<br />
                    Báo cáo cũng nhấn mạnh vai trò của giáo dục và truyền thông trong việc nâng cao nhận thức của cộng đồng, đặc biệt là thế hệ trẻ. Cần có các chiến dịch truyền thông sáng tạo hơn, gắn liền với lợi ích của người tiêu dùng và sự phát triển của nền kinh tế sáng tạo.<br />
                    Việc công bố Báo cáo thường niên 2025 không chỉ là một hành động minh bạch của cơ quan quản lý, mà còn là lời kêu gọi hành động chung tay từ toàn xã hội để xây dựng một môi trường kinh doanh và sáng tạo công bằng, lành mạnh.
                </div>


                <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "80px 0" }}>
                    <form style={{
                        display: "flex",
                        alignItems: "center",
                        width: 800,
                        height: 80,
                        background: "#fff",
                        borderRadius: 18,
                        boxShadow: "0 4px 24px 0 rgba(16,33,75,0.07)",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            flex: 1,
                            height: "100%",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            border: "none",
                            paddingLeft: 18,
                            background: "none"
                        }}>
                            {/* Centered heroInput image absolutely in the input area */}
                            <img
                                src={heroInput}
                                alt="bginput"
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    zIndex: 1,
                                    pointerEvents: "none",
                                    userSelect: "none"
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Nhập từ khóa"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    fontSize: 20,
                                    color: "#B6C0D2",
                                    fontWeight: 400,
                                    padding: "0 0 0 8px",
                                    zIndex: 2,
                                    position: "relative"
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                height: "100%",
                                minWidth: 160,
                                background: "linear-gradient(180deg, #2852BB 0%, #A6BDF3 100%)",
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: 22,
                                border: "none",
                                borderRadius: "0 18px 18px 0",
                                boxShadow: "0 4px 16px 0 rgba(16,33,75,0.10)",
                                cursor: "pointer",
                                transition: "background 0.2s"
                            }}
                        >
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </div>



            {/* PHẦN TIN TỨC LIÊN QUAN */}

            <section style={{ background: '#fcf8f2', padding: '32px 0 0 0', marginTop: 32 }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
                    <h3 style={{ color: '#3C5DAA', fontWeight: 700, fontSize: 24, marginBottom: 28, textAlign: 'left', letterSpacing: 0.5 }}>
                        Tin Tức Liên Quan
                    </h3>
                    <div style={{
                        display: 'flex',
                        gap: 36,
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                        overflowX: 'auto',
                        width: '100%',
                        minWidth: 0,
                        maxWidth: '100%',
                    }}>
                        {RELATED_NEWS.map((item, idx) => (
                            <div key={idx} style={{ width: 360, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px 0 rgba(16,33,75,0.07)', marginBottom: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                                <div style={{ padding: '18px 18px 12px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <div style={{ color: '#888', fontWeight: 700, fontSize: 13, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.tag}</div>
                                    <a
                                        href="#"
                                        style={{
                                            color: '#22336C',
                                            fontWeight: 600,
                                            fontSize: 17,
                                            marginBottom: 8,
                                            lineHeight: 1.3,
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                            display: 'block',
                                            cursor: 'pointer',
                                        }}
                                        onMouseOver={e => (e.currentTarget.style.color = '#2852BB')}
                                        onMouseOut={e => (e.currentTarget.style.color = '#22336C')}
                                    >
                                        {item.title}
                                    </a>
                                    <div style={{ color: '#888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <i className="bi bi-calendar" /> {item.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Letter;