import { useState, useRef } from "react";
import logosword from "../assets/img/TheGuardian_Logo_VIE 3.png";
import supportArt from "../assets/img/image-group-cskh.png";

function Contact() {
  const [currentFiles, setCurrentFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const updateFileInput = (files) => {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    fileInputRef.current.files = dataTransfer.files;
  };

  const handleFileChange = (e) => {
    const files = [...currentFiles, ...Array.from(e.target.files)];
    setCurrentFiles(files);
    updateFileInput(files);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...currentFiles];
    newFiles.splice(index, 1);
    setCurrentFiles(newFiles);
    updateFileInput(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = [...currentFiles, ...Array.from(e.dataTransfer.files)];
    setCurrentFiles(files);
    updateFileInput(files);
  };

  const handleTriggerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="helpdesk">
      <div className="helpdesk__container">
        {/* HEADER */}
        <div className="helpdesk__header">
          <img src={logosword} alt="Support Icon" className="helpdesk__icon" />
          <div className="helpdesk__text">
            <h1
              className="helpdesk__title"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              HỖ TRỢ NGƯỜI DÙNG
            </h1>
            <p
              className="helpdesk__desc"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Để được hỗ trợ nhanh chóng, vui lòng cung cấp thông tin và nội dung bạn cần hỗ trợ tại đây.
            </p>
            <p
              className="helpdesk__email"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              &lt;cskh@vkentertainment.net&gt;
            </p>
          </div>
        </div>

        {/* LEFT COLUMN (FORM) */}
        <div className="helpdesk__left">
          <form
            className="helpdesk-form"
            method="post"
            encType="multipart/form-data"
          >
            <div className="form__group">
              <label htmlFor="hd-user" className="form__label">
                ID NGƯỜI DÙNG
              </label>
              <input
                id="hd-user"
                name="user_id"
                type="text"
                className="form__control"
                placeholder="Nhập ID người dùng"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="hd-email" className="form__label">
                EMAIL NHẬN PHẢN HỒI
              </label>
              <input
                id="hd-email"
                name="email"
                type="email"
                className="form__control"
                placeholder="Nhập email"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="hd-subject" className="form__label">
                TIÊU ĐỀ
              </label>
              <input
                id="hd-subject"
                name="subject"
                type="text"
                className="form__control"
                placeholder="Nhập tiêu đề hỗ trợ"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="hd-message" className="form__label">
                NỘI DUNG
              </label>
              <textarea
                id="hd-message"
                name="message"
                rows="5"
                className="form__textarea"
                placeholder="Nhập nội dung cần hỗ trợ"
                required
              />
            </div>

            {/* Upload area */}
            <div className="form__group">
              <span className="form__label">TỆP ĐÍNH KÈM</span>
              <div
                className="uploader"
                id="hd-drop"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={() => setIsDragging(true)}
                onDragLeave={() => setIsDragging(false)}
                style={{
                  border: "2px dashed #999",
                  borderRadius: "8px",
                  padding: "30px",
                  textAlign: "center",
                  backgroundColor: isDragging ? "#eef6ff" : "#fafafa",
                  cursor: "pointer",
                }}
                onClick={handleTriggerClick}
              >
                <input
                  id="hd-file"
                  name="attachments[]"
                  type="file"
                  className="uploader__input"
                  multiple
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className="uploader__text">
                  <i className="bi bi-paperclip"></i>
                  <span>Kéo tệp tin hoặc nhấn để chọn</span>
                </div>
              </div>

              {/* Preview */}
              <div style={{ marginTop: "15px" }}>
                {currentFiles.map((file, index) => (
                  <div
                    key={index}
                    className="file-preview"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {/* Nếu là ảnh thì hiện thumbnail */}
                    {file.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          marginRight: "10px",
                          borderRadius: "4px",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          marginRight: "10px",
                          fontSize: "20px",
                        }}
                      >
                        📄
                      </div>
                    )}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "bold" }}>{file.name}</div>
                      <div style={{ fontSize: "13px", color: "#aaa" }}>
                        {formatFileSize(file.size)}
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={() => handleRemoveFile(index)}
                    >
                      ✖
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  fontSize: "13px",
                  color: "#666",
                }}
              >
                Tổng số file: {currentFiles.length}
              </div>
            </div>
             <a href="" className="btn-more">
            Gửi <i className="bi bi-send;"></i>
          </a>
          </form>
        </div>

        {/* RIGHT COLUMN (IMAGE) */}
        <div className="helpdesk__right">
          <img src={supportArt} alt="Support Art" className="helpdesk__art" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
