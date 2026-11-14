/**
 * JAVASCRIPT CHO TRANG WEB CÁ NHÂN HÓA: BÁC SĨ TRỊNH CÔNG VƯƠNG
 * Xử lý Dark/Light Mode, Hamburger Menu, Copy Bài Đăng Facebook,
 * Công cụ BMI chuẩn Châu Á (IDI & WHO), và Đặt lịch hẹn qua Zalo 0912 343 858.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Chế độ Giao diện Sáng / Tối (Dark/Light Mode)
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun" style="color:#fbbf24;"></i>' 
        : '<i class="fas fa-moon"></i>';
    }
  }
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. Menu di động (Mobile Menu)
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      mobileToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Tự động đóng menu khi bấm vào link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 3. Nút cuộn về đầu trang (Back to top)
  const btnTop = document.getElementById('btnBackToTop');
  window.addEventListener('scroll', function () {
    if (btnTop) {
      if (window.scrollY > 400) {
        btnTop.style.display = 'flex';
      } else {
        btnTop.style.display = 'none';
      }
    }
  });
  if (btnTop) {
    btnTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Công cụ Tính Chỉ Số BMI Chuẩn Châu Á (IDI & WHO)
  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    bmiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const height = parseFloat(document.getElementById('heightCm').value);
      const weight = parseFloat(document.getElementById('weightKg').value);
      const age = parseInt(document.getElementById('ageInput').value) || 45;

      if (!height || !weight || height <= 0 || weight <= 0) return;

      const heightM = height / 100;
      const bmi = (weight / (heightM * heightM)).toFixed(1);

      let status = '';
      let color = '';
      let advice = '';

      // Tiêu chuẩn IDI & WPRO cho người Châu Á
      if (bmi < 18.5) {
        status = 'Thiếu cân (Gầy)';
        color = '#3b82f6';
        advice = 'Cần tăng cường dinh dưỡng giàu đạm thực vật, vi chất, canxi, và vitamin D để bảo vệ mật độ xương hàm và xương toàn thân. Tránh sụt cân đột ngột.';
      } else if (bmi >= 18.5 && bmi <= 22.9) {
        status = 'Thể trạng Lý Tưởng (Bình thường chuẩn Châu Á)';
        color = '#10b981';
        advice = 'Chúc mừng bạn! Đây là chỉ số lý tưởng bảo vệ tim mạch, huyết áp, giảm tối đa nguy cơ đái tháo đường type 2 và thoái hóa khớp. Hãy tiếp tục duy trì chế độ dinh dưỡng lành mạnh và vận động 30 phút mỗi ngày.';
      } else if (bmi >= 23 && bmi <= 24.9) {
        status = 'Tiền Béo Phì (Thừa cân)';
        color = '#f59e0b';
        advice = 'Bắt đầu có nguy cơ tích tụ mỡ nội tạng và kháng insulin. Nên kiểm soát lại lượng tinh bột nhanh, giảm muối, tăng cường rau xanh và kiểm tra huyết áp định kỳ cùng BS. Vương.';
      } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Béo phì Độ I';
        color = '#f97316';
        advice = 'Nguy cơ cao mắc huyết áp, gan nhiễm mỡ, viêm nha chu mạn tính và xơ vữa động mạch. Nên xây dựng kế hoạch giảm từ 5-10% trọng lượng cơ thể kết hợp khám sức khỏe định kỳ.';
      } else {
        status = 'Béo phì Độ II (Cảnh báo cao)';
        color = '#ef4444';
        advice = 'Nguy cơ rất cao đối với biến cố tim mạch và đột quỵ. Cần được bác sĩ chuyên khoa tư vấn trực tiếp lộ trình dinh dưỡng y khoa và kiểm soát chỉ số đường huyết, mỡ máu.';
      }

      const resultBox = document.getElementById('bmiResult');
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="border-left: 5px solid ${color}; padding-left: 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <span style="font-size:1.15rem; font-weight:800; color:var(--text-main);">Chỉ số BMI của bạn: <span style="color:${color}; font-size:1.5rem;">${bmi} kg/m²</span></span>
            <span style="background:${color}; color:#fff; font-size:0.85rem; font-weight:700; padding:4px 12px; border-radius:999px;">${status}</span>
          </div>
          <p style="margin-top:12px; font-size:0.96rem; color:var(--text-secondary); line-height:1.6;">
            <strong>Khuyến nghị y khoa từ BS. Trịnh Công Vương:</strong> ${advice}
          </p>
          <div style="margin-top:14px;">
            <a href="https://zalo.me/0912343858" target="_blank" class="btn btn-zalo" style="padding:8px 16px; font-size:0.88rem;">
              <i class="fas fa-comment-medical"></i> Nhắn BS. Vương để được tư vấn thêm miễn phí
            </a>
          </div>
        </div>
      `;
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // 5. Form Đặt Lịch Hẹn Khám Bệnh
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('patientName').value.trim();
      const phone = document.getElementById('patientPhone').value.trim();
      const service = document.getElementById('patientService').value;
      const note = document.getElementById('patientNote').value.trim();

      if (!name || !phone) {
        alert('Vui lòng điền họ tên và số điện thoại liên hệ!');
        return;
      }

      const feedback = document.getElementById('bookingFeedback');
      feedback.style.display = 'block';
      feedback.innerHTML = `
        <div style="background:rgba(16,185,129,0.12); border:1.5px solid #10b981; border-radius:12px; padding:18px; margin-top:20px;">
          <h4 style="color:#059669; font-weight:800; font-size:1.1rem; margin-bottom:8px;">
            <i class="fas fa-check-circle"></i> Đã Gửi Y Cầu Đặt Lịch Thành Công!
          </h4>
          <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">
            Cảm ơn <strong>${name}</strong> (${phone}). BS. Trịnh Công Vương đã tiếp nhận yêu cầu về <em>"${service}"</em> tại địa chỉ <strong>Số 15 đường Võ Nguyên Giáp, P. Đức Xuân, TP Thái Nguyên</strong>. BS. Vương sẽ gọi lại sớm nhất cho bạn!
          </p>
          <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <a href="https://zalo.me/0912343858?text=${encodeURIComponent('Chào Bác sĩ Trịnh Công Vương, tôi tên là ' + name + ' (' + phone + '). Tôi muốn được tư vấn dịch vụ: ' + service + '. Ghi chú: ' + (note || 'Không có'))}" target="_blank" class="btn btn-zalo" style="padding:9px 18px; font-size:0.9rem;">
              <i class="fas fa-paper-plane"></i> Mở Zalo Xác Nhận Ngay Với BS. Vương
            </a>
            <a href="tel:0912343858" class="btn btn-primary" style="padding:9px 18px; font-size:0.9rem;">
              <i class="fas fa-phone-alt"></i> Gọi Hotline 0912 343 858
            </a>
          </div>
        </div>
      `;
      bookingForm.reset();
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});

// Hàm Copy Bài Đăng Facebook 1 Chạm
function copyFacebookPost() {
  const postArea = document.getElementById('fbPostHoiNgoXAI');
  if (!postArea) return;
  navigator.clipboard.writeText(postArea.value).then(() => {
    const btn = document.getElementById('btnCopyFbPost');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Đã Copy Thành Công Bài Đăng Facebook!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 3500);
    }
  }).catch(err => {
    alert('Không thể tự động copy, vui lòng chọn văn bản và nhấn Ctrl+C!');
  });
}
