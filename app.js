/**
 * ============================================================================
 * TRỢ LÝ AI Y KHOA 24/7 & CÔNG CỤ TỰ ĐÁNH GIÁ SỨC KHỎE TRUNG NIÊN
 * - Nguồn kiến thức chính thống: Bộ Y tế Việt Nam, WHO, AHA/ESC, ADA, IOF
 * - Tuyệt đối KHÔNG quảng cáo thuốc hay thực phẩm chức năng thương mại
 * - Hotline / Zalo trực tiếp: 0912 343 858
 * ============================================================================
 */

const OFFICIAL_KNOWLEDGE_BASE = [
  {
    id: 'huyet-ap-tim-mach',
    keywords: [
      'huyết áp', 'tăng huyết áp', 'cao huyết áp', 'tim mạch', 'mỡ máu',
      'cholesterol', 'đột quỵ', 'nhồi máu cơ tim', 'tức ngực', 'khó thở', 'nhịp tim', 'muối'
    ],
    title: 'Tim mạch & Huyết áp ở tuổi Trung Niên',
    source: 'Khuyến cáo Hội Tim mạch học Việt Nam (VNHI), Bộ Y tế Việt Nam & Hiệp hội Tim mạch Hoa Kỳ (AHA/ESC)',
    response: `
      <strong>1. Ngưỡng chỉ số Huyết áp chuẩn (Bộ Y tế & VNHI):</strong><br>
      • <strong>Bình thường:</strong> Tâm thu &lt; 120 mmHg VÀ Tâm trương &lt; 80 mmHg.<br>
      • <strong>Bình thường cao (Tiền tăng huyết áp):</strong> 120–139 / 80–89 mmHg.<br>
      • <strong>Tăng huyết áp:</strong> Khi đo tại phòng khám &ge; 140/90 mmHg (hoặc đo tại nhà trung bình &ge; 135/85 mmHg).<br><br>
      <strong>2. Nguyên tắc kiểm soát không dùng thuốc quảng cáo:</strong><br>
      • <strong>Giảm muối (Natri):</strong> Tổ chức Y tế Thế giới (WHO) và Bộ Y tế khuyến cáo ăn dưới 5g muối/ngày (tương đương chưa tới 1 thìa cà phê muối; hạn chế nước chấm mặn, dưa muối, thực phẩm đóng hộp).<br>
      • <strong>Chế độ ăn DASH / Địa Trung Hải:</strong> Tăng cường rau xanh đậm, trái cây tươi, cá biển sâu (cá thu, cá hồi, cá trích) 2–3 bữa/tuần, hạn chế mỡ nội tạng.<br>
      • <strong>Tuân thủ thuốc bác sĩ kê đơn:</strong> Người bệnh tăng huyết áp tuyệt đối không tự ý ngưng thuốc khi thấy huyết áp đã hạ về bình thường, và không thay thế thuốc điều trị bằng thực phẩm chức năng truyền miệng.
    `
  },
  {
    id: 'tieu-duong-noi-tiet',
    keywords: [
      'tiểu đường', 'đái tháo đường', 'đường huyết', 'hba1c', 'insulin',
      'khát nước', 'tiểu đêm', 'nội tiết', 'tuyến giáp', 'mãn kinh', 'tiền mãn kinh', 'bốc hỏa'
    ],
    title: 'Đái tháo đường, Đường huyết & Nội tiết Trung Niên',
    source: 'Hướng dẫn Chẩn đoán và Điều trị Đái tháo đường típ 2 – Bộ Y tế Việt Nam & Hiệp hội Đái tháo đường Hoa Kỳ (ADA)',
    response: `
      <strong>1. Tiêu chuẩn chẩn đoán Đái tháo đường (Bộ Y tế & ADA):</strong><br>
      • <strong>Đường huyết lúc đói (nhịn ăn ít nhất 8 giờ):</strong> Bình thường &lt; 5.6 mmol/L (&lt; 100 mg/dL); Tiền đái tháo đường: 5.6 – 6.9 mmol/L; Đái tháo đường: &ge; 7.0 mmol/L (&ge; 126 mg/dL).<br>
      • <strong>Chỉ số HbA1c (phản ánh đường huyết 3 tháng):</strong> Bình thường &lt; 5.7%; Tiền đái tháo đường: 5.7% – 6.4%; Đái tháo đường: &ge; 6.5%.<br><br>
      <strong>2. Dinh dưỡng chuẩn y khoa cho người trung niên:</strong><br>
      • <strong>Quy tắc Đĩa ăn lành mạnh (Healthy Plate):</strong> 1/2 đĩa là rau củ không tinh bột (rau cải, bông cải, mướp đắng, bầu bí), 1/4 đĩa là đạm lành mạnh (cá, đậu phụ, thịt gia cầm bỏ da), 1/4 đĩa là tinh bột chuyển hóa chậm (gạo lứt, yến mạch, khoai củ luộc).<br>
      • <strong>Thứ tự ăn giúp giảm đỉnh đường huyết sau ăn:</strong> Ăn rau xanh trước &rarr; Ăn chất đạm &rarr; Ăn cơm/tinh bột cuối cùng.<br>
      • <strong>Cảnh báo y khoa:</strong> Tuyệt đối không dùng các loại viên hoàn, thảo dược trôi nổi quảng cáo "chữa khỏi dứt điểm tiểu đường" vì nguy cơ pha trộn chất cấm hoặc gây suy thận cấp.
    `
  },
  {
    id: 'xuong-khop',
    keywords: [
      'xương khớp', 'đau lưng', 'đau gối', 'thoái hóa', 'loãng xương',
      'canxi', 'vitamin d', 'đau vai gáy', 'thoát vị', 'cột sống', 'gout', 'axit uric'
    ],
    title: 'Cơ Xương Khớp & Phòng ngừa Loãng xương Trung Niên',
    source: 'Hội Thấp khớp học Việt Nam, Bộ Y tế & Tổ chức Loãng xương Quốc tế (IOF)',
    response: `
      <strong>1. Nhu cầu Canxi & Vitamin D chuẩn theo tuổi trung niên (Viện Dinh dưỡng Quốc gia & IOF):</strong><br>
      • Người từ 50 tuổi trở lên cần khoảng <strong>1.000 – 1.200 mg Canxi/ngày</strong> và <strong>800 – 1.000 IU Vitamin D/ngày</strong>.<br>
      • Ưu tiên bổ sung qua thực phẩm tự nhiên: sữa tách béo/ít đường, sữa chua, cá nhỏ kho nhừ ăn cả xương, tôm cua, đậu phụ, vừng (mè), rau xanh đậm.<br><br>
      <strong>2. Bảo vệ khớp gối & cột sống đúng cách:</strong><br>
      • Kiểm soát cân nặng: Giảm 1 kg cân nặng dư thừa giúp giảm tới 4 kg áp lực lên khớp gối khi bước đi.<br>
      • Môn vận động an toàn cho khớp thoái hóa: Bơi lội, đạp xe tại chỗ, đi bộ trên đường bằng phẳng với giày đế êm, tập dưỡng sinh / Thái cực quyền.<br>
      • Hạn chế ngồi xổm, quỳ gối lâu, leo cầu thang dốc liên tục hoặc khuân vác nặng sai tư thế.<br>
      • <strong>Lưu ý an toàn:</strong> Không tự ý dùng thuốc giảm đau xương khớp truyền miệng ("thuốc tàu", thuốc tễ không rõ nhãn mác) vì thường trộn Corticoid gây loét dạ dày, mục xương và suy tuyến thượng thận.
    `
  },
  {
    id: 'giac-ngu-than-kinh',
    keywords: [
      'mất ngủ', 'khó ngủ', 'giấc ngủ', 'trí nhớ', 'hay quên', 'đau đầu',
      'tiền đình', 'chóng mặt', 'căng thẳng', 'stress', 'thần kinh', 'alzheimer'
    ],
    title: 'Giấc ngủ, Trí nhớ & Sức khỏe Tinh thần Tuổi Trung Niên',
    source: 'Tổ chức Y tế Thế giới (WHO) & Viện Sức khỏe Tâm thần Quốc gia Việt Nam',
    response: `
      <strong>1. Vệ sinh giấc ngủ chuẩn y khoa (Sleep Hygiene - WHO):</strong><br>
      • Duy trì giờ đi ngủ và thức dậy cố định mỗi ngày (kể cả cuối tuần) để ổn định nhịp sinh học Melatonin tự nhiên.<br>
      • Tránh trà đặc, cà phê sau 14h chiều; tránh ăn quá no hoặc uống nhiều nước trong vòng 2 giờ trước khi ngủ.<br>
      • Ngưng nhìn màn hình điện thoại/tivi ánh sáng xanh ít nhất 45 phút trước khi lên giường; ngâm chân nước ấm 40°C trong 15 phút giúp giãn mạch, dễ vào giấc.<br><br>
      <strong>2. Bảo vệ trí não & Phòng ngừa suy giảm nhận thức:</strong><br>
      • Tập thể dục nhịp điệu 150 phút/tuần giúp tăng tưới máu não.<br>
      • Duy trì giao lưu xã hội, học kỹ năng mới, đọc sách và kiểm soát tốt huyết áp/đường huyết (vì tăng huyết áp ở tuổi trung niên là yếu tố nguy cơ hàng đầu gây sa sút trí tuệ mạch máu).
    `
  },
  {
    id: 'tam-soat-ung-thu',
    keywords: [
      'tầm soát', 'ung thư', 'khám sức khỏe', 'định kỳ', 'xét nghiệm',
      'nội soi', 'dạ dày', 'đại tràng', 'tuyến vú', 'cổ tử cung', 'tuyến tiền liệt', 'gan', 'phổi'
    ],
    title: 'Lịch Tầm soát Sức khỏe & Ung thư Định kỳ Tuổi 40–65+',
    source: 'Bộ Y tế Việt Nam, Tổ chức Y tế Thế giới (WHO) & Hiệp hội Ung thư Hoa Kỳ (ACS)',
    response: `
      <strong>Lịch tầm soát định kỳ khuyến nghị chính thống cho tuổi trung niên:</strong><br>
      • <strong>Mỗi 6 – 12 tháng:</strong> Xét nghiệm công thức máu, đường huyết lúc đói + HbA1c, bộ mỡ máu (Cholesterol toàn phần, LDL-C, HDL-C, Triglyceride), chức năng Gan (AST, ALT) & Thận (Creatinin, eGFR), tổng phân tích nước tiểu, siêu âm bụng tổng quát, đo điện tâm đồ (ECG).<br>
      • <strong>Tầm soát Ung thư Đại trực tràng (Từ 45 tuổi):</strong> Xét nghiệm máu ẩn trong phân (FIT/FOBT) mỗi năm hoặc Nội soi đại trực tràng định kỳ theo chỉ định bác sĩ.<br>
      • <strong>Tầm soát Ung thư Dạ dày (Từ 40 tuổi tại vùng nguy cơ cao Á Đông):</strong> Nội soi dạ dày kiểm tra vi khuẩn <em>H. pylori</em> và tổn thương niêm mạc.<br>
      • <strong>Ở Nữ giới trung niên:</strong> Chụp nhũ ảnh (Mammography) tầm soát ung thư vú mỗi 1–2 năm; xét nghiệm HPV/Pap smear cổ tử cung; đo mật độ xương (DEXA).<br>
      • <strong>Ở Nam giới trung niên (&ge; 50 tuổi):</strong> Khám và xét nghiệm PSA tầm soát bệnh lý tuyến tiền liệt; tầm soát phổi bằng CT liều thấp nếu có tiền sử hút thuốc lá.
    `
  },
  {
    id: 'dinh-duong-van-dong',
    keywords: [
      'dinh dưỡng', 'ăn uống', 'thực đơn', 'tập thể dục', 'đi bộ', 'vận động',
      'giảm cân', 'béo phì', 'vòng bụng', 'nước', 'cơ bắp', 'sarcopenia'
    ],
    title: 'Dinh dưỡng Khoa học & Vận động Chống mất cơ (Sarcopenia)',
    source: 'Viện Dinh dưỡng Quốc gia (Bộ Y tế Việt Nam) & Khuyến nghị Vận động Thể lực WHO',
    response: `
      <strong>1. Phòng chống hội chứng Mất khối cơ tuổi trung niên (Sarcopenia):</strong><br>
      • Từ sau tuổi 40, cơ thể tự nhiên mất đi khoảng 1% khối lượng cơ bắp mỗi năm nếu không rèn luyện. Người trung niên cần nạp đủ <strong>1.0 – 1.2g Protein/kg cân nặng/ngày</strong> (ưu tiên cá, ức gà, trứng, đậu nành, các loại hạt) chia đều trong 3 bữa chính.<br><br>
      <strong>2. Công thức Vận động WHO cho tuổi 40–65+:</strong><br>
      • <strong>150 – 300 phút/tuần</strong> vận động cường độ trung bình (đi bộ nhanh, đạp xe, bơi lội, khiêu vũ thể thao) — tức khoảng 30 phút/ngày x 5 ngày/tuần.<br>
      • Kết hợp <strong>2 buổi/tuần bài tập kháng lực nhẹ</strong> (tập tạ tay nhẹ, dây kháng lực, đứng lên ngồi xuống ghế) để giữ vững cơ bắp và mật độ xương.<br>
      • Uống đủ 1.5 – 2 lít nước lọc ấm mỗi ngày, chia thành từng ngụm nhỏ ngay cả khi chưa thấy khát.
    `
  }
];

/* ==========================================================================
   1. CHỨC NĂNG PHÓNG TO CHỮ CHO NGƯỜI TRUNG NIÊN
   ========================================================================== */
function toggleFontSize() {
  const body = document.body;
  const btn = document.getElementById('btnFontToggle');
  body.classList.toggle('large-text-mode');
  const isLarge = body.classList.contains('large-text-mode');
  if (btn) {
    btn.classList.toggle('active', isLarge);
    btn.innerHTML = isLarge ? '🔍 Cỡ chữ: RẤT LỚN (Đang bật)' : '🔍 Phóng to chữ dễ đọc';
  }
}

/* ==========================================================================
   2. BỘ LỌC CHUYÊN MỤC KIẾN THỨC Y KHOA
   ========================================================================== */
function filterKnowledge(category, btnEl) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const cards = document.querySelectorAll('.medical-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================================================
   3. CÔNG CỤ TÍNH BMI CHUẨN CHÂU Á - THÁI BÌNH DƯƠNG (WHO WPRO & BỘ Y TẾ)
   ========================================================================== */
function calculateAsianBMI() {
  const heightCm = parseFloat(document.getElementById('bmiHeight').value);
  const weightKg = parseFloat(document.getElementById('bmiWeight').value);
  const waistCm = parseFloat(document.getElementById('bmiWaist').value);
  const gender = document.getElementById('bmiGender').value;
  const resultBox = document.getElementById('bmiResult');

  if (!heightCm || !weightKg || heightCm < 100 || heightCm > 230 || weightKg < 25 || weightKg > 200) {
    resultBox.innerHTML = `<span style="color:#dc2626;font-weight:800;">⚠️ Vui lòng nhập chiều cao (cm) và cân nặng (kg) hợp lệ!</span>`;
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weightKg / (heightM * heightM)).toFixed(1);

  let status = '';
  let color = '';
  let advice = '';

  // Tiêu chuẩn IDI & WPRO (WHO Tây Thái Bình Dương áp dụng cho người Việt Nam)
  if (bmi < 18.5) {
    status = 'Thiếu cân (Gầy)';
    color = '#0284c7';
    advice = 'Cần bổ sung thêm đạm chất lượng cao (cá, trứng, sữa hạt/sữa tươi) và tập kháng lực nhẹ để tăng khối cơ.';
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    status = 'Bình thường lý tưởng (Chuẩn người Việt & Châu Á)';
    color = '#16a34a';
    advice = 'Chỉ số rất tốt! Hãy duy trì đi bộ nhanh 30 phút/ngày và chế độ ăn nhiều rau xanh, cá biển.';
  } else if (bmi >= 23.0 && bmi <= 24.9) {
    status = 'Thừa cân (Tiền béo phì theo chuẩn Châu Á)';
    color = '#d97706';
    advice = 'Theo chuẩn WHO Châu Á, từ BMI 23 trở lên đã bắt đầu tăng nguy cơ tiểu đường và huyết áp. Nên giảm tinh bột trắng, đồ ngọt và tăng vận động.';
  } else {
    status = 'Béo phì (Nguy cơ tim mạch & khớp cao)';
    color = '#dc2626';
    advice = 'Cần giảm 5–7% cân nặng hiện tại để giảm tải cho khớp gối và bảo vệ mạch vành. Hạn chế tối đa mỡ động vật, rượu bia và thức ăn nhanh.';
  }

  let waistNote = '';
  if (!isNaN(waistCm) && waistCm > 40) {
    const threshold = gender === 'male' ? 90 : 80;
    if (waistCm >= threshold) {
      waistNote = `<div style="margin-top:8px;padding:8px 10px;background:#fff1f2;border-left:4px solid #e11d48;color:#9f1239;font-weight:700;">
        ⚠️ Cảnh báo Béo bụng nội tạng: Vòng eo ${waistCm} cm vượt ngưỡng an toàn Châu Á (&ge; ${threshold} cm), làm tăng nguy cơ gan nhiễm mỡ và đề kháng Insulin.
      </div>`;
    } else {
      waistNote = `<div style="margin-top:8px;color:#15803d;font-weight:700;">✔ Vòng eo ${waistCm} cm nằm trong ngưỡng an toàn (&lt; ${threshold} cm).</div>`;
    }
  }

  resultBox.innerHTML = `
    <div style="font-size:1.1rem;font-weight:900;color:${color};margin-bottom:4px;">
      Chỉ số BMI của bạn: ${bmi} kg/m² — ${status}
    </div>
    <div style="font-size:0.9rem;color:#334155;"><strong>Khuyến nghị Bộ Y tế & WHO:</strong> ${advice}</div>
    ${waistNote}
  `;
}

/* ==========================================================================
   4. CÔNG CỤ KIỂM TRA PHÂN ĐỘ HUYẾT ÁP & ĐƯỜNG HUYẾT TẠI NHÀ
   ========================================================================== */
function checkVitals() {
  const sys = parseFloat(document.getElementById('bpSys').value);
  const dia = parseFloat(document.getElementById('bpDia').value);
  const glu = parseFloat(document.getElementById('bloodGlu').value);
  const resultBox = document.getElementById('vitalsResult');

  if (!sys || !dia || sys < 60 || sys > 260 || dia < 40 || dia > 160) {
    resultBox.innerHTML = `<span style="color:#dc2626;font-weight:800;">⚠️ Vui lòng nhập chỉ số Huyết áp Tâm thu và Tâm trương hợp lệ (ví dụ: 125 và 80).</span>`;
    return;
  }

  let bpCategory = '';
  let bpColor = '';
  let bpAdvice = '';

  if (sys >= 180 || dia >= 120) {
    bpCategory = 'CƠN TĂNG HUYẾT ÁP KHẨN CẤP';
    bpColor = '#dc2626';
    bpAdvice = 'Cần nghỉ ngơi tuyệt đối và liên hệ cơ sở y tế / cấp cứu 115 ngay nếu kèm đau đầu dữ dội, tức ngực, khó thở hoặc tê yếu tay chân!';
  } else if (sys >= 140 || dia >= 90) {
    bpCategory = 'Tăng huyết áp (Ngưỡng &ge; 140/90 mmHg)';
    bpColor = '#e11d48';
    bpAdvice = 'Theo Bộ Y tế & Hội Tim mạch VN: Cần khám chuyên khoa Tim mạch, ăn giảm muối (&lt; 5g/ngày) và theo dõi huyết áp sáng - tối.';
  } else if ((sys >= 130 && sys <= 139) || (dia >= 85 && dia <= 89)) {
    bpCategory = 'Huyết áp bình thường cao (Tiền tăng huyết áp)';
    bpColor = '#d97706';
    bpAdvice = 'Cần điều chỉnh lối sống ngay: giảm mặn, tập thể dục 30 phút/ngày, hạn chế rượu bia để ngăn tiến triển thành tăng huyết áp.';
  } else if (sys < 90 || dia < 60) {
    bpCategory = 'Huyết áp thấp (&lt; 90/60 mmHg)';
    bpColor = '#0284c7';
    bpAdvice = 'Chú ý uống đủ nước, tránh thay đổi tư thế đứng dậy đột ngột gây hoa mắt chóng mặt.';
  } else {
    bpCategory = 'Huyết áp tối ưu / Bình thường';
    bpColor = '#16a34a';
    bpAdvice = 'Chỉ số huyết áp rất tốt! Hãy tiếp tục duy trì lối sống năng động và kiểm tra định kỳ.';
  }

  let gluHtml = '';
  if (!isNaN(glu) && glu > 1) {
    if (glu >= 7.0) {
      gluHtml = `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed #cbd5e1;color:#dc2626;font-weight:700;">
        🩸 Đường huyết đói ${glu} mmol/L: Cao (&ge; 7.0 mmol/L theo chuẩn ADA/Bộ Y tế). Nên xét nghiệm thêm HbA1c tại bệnh viện.
      </div>`;
    } else if (glu >= 5.6) {
      gluHtml = `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed #cbd5e1;color:#d97706;font-weight:700;">
        🩸 Đường huyết đói ${glu} mmol/L: Ngưỡng Tiền đái tháo đường (5.6 – 6.9 mmol/L). Cần giảm tinh bột trắng và ăn nhiều rau xanh trước bữa ăn.
      </div>`;
    } else {
      gluHtml = `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed #cbd5e1;color:#16a34a;font-weight:700;">
        🩸 Đường huyết đói ${glu} mmol/L: Nằm trong giới hạn bình thường (&lt; 5.6 mmol/L).
      </div>`;
    }
  }

  resultBox.innerHTML = `
    <div style="font-size:1.05rem;font-weight:900;color:${bpColor};margin-bottom:4px;">
      ❤️ Huyết áp ${sys}/${dia} mmHg: ${bpCategory}
    </div>
    <div style="font-size:0.9rem;color:#334155;">${bpAdvice}</div>
    ${gluHtml}
  `;
}

/* ==========================================================================
   5. TRỢ LÝ AI Y KHOA 24/7 (HYBRID: CHÍNH THỐNG OFFLINE + GEMINI API)
   ========================================================================== */
function askAITopic(questionText) {
  const chatSection = document.getElementById('ai-assistant-section');
  if (chatSection) {
    chatSection.scrollIntoView({ behavior: 'smooth' });
  }
  const input = document.getElementById('aiUserInput');
  if (input) {
    input.value = questionText;
    handleSendChatMessage();
  }
}

function appendMessage(role, htmlContent) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const row = document.createElement('div');
  row.className = `msg-row ${role}`;

  if (role === 'bot') {
    row.innerHTML = `
      <img src="avatar.jpg" alt="Chủ nhiệm đồng hành" class="msg-avatar" />
      <div class="msg-bubble">${htmlContent}</div>
    `;
  } else {
    row.innerHTML = `
      <div class="msg-bubble">${htmlContent}</div>
    `;
  }

  container.appendChild(row);
  container.scrollTop = container.scrollHeight;
}

function generateLocalMedicalAnswer(query) {
  const qLower = query.toLowerCase();

  // Kiểm tra dấu hiệu cấp cứu trước tiên
  const emergencyKeywords = ['đau ngực dữ dội', 'méo miệng', 'liệt nửa người', 'nói ngọng', 'khó thở cấp', 'bất tỉnh', 'đột quỵ'];
  for (const kw of emergencyKeywords) {
    if (qLower.includes(kw)) {
      return `
        <div style="background:#fff1f2;border:2px solid #e11d48;padding:12px;border-radius:12px;color:#881337;">
          <strong>🚨 CẢNH BÁO Y KHOA KHẨN CẤP (BỘ Y TẾ & WHO):</strong><br>
          Triệu chứng bạn vừa mô tả có thể là dấu hiệu của <strong>Đột quỵ não (FAST)</strong> hoặc <strong>Nhồi máu cơ tim cấp</strong>.<br>
          • <strong>Hành động ngay:</strong> Gọi cấp cứu <strong>115</strong> hoặc đưa người bệnh đến bệnh viện có khả năng cấp cứu đột quỵ/tim mạch gần nhất trong "giờ vàng"!<br>
          • <strong>Tuyệt đối KHÔNG:</strong> Không tự ý chích máu đầu ngón tay, không cạo gió, không cho uống thuốc hạ áp ngậm dưới lưỡi hay nước chanh khi người bệnh đang lơ mơ!<br>
          • Liên hệ hỗ trợ trực tiếp: <strong>0912 343 858 (Đt / Zalo)</strong>.
        </div>
      `;
    }
  }

  // Tìm kiếm trong cơ sở tri thức y khoa chính thống
  let matchedTopics = [];
  for (const item of OFFICIAL_KNOWLEDGE_BASE) {
    for (const kw of item.keywords) {
      if (qLower.includes(kw)) {
        matchedTopics.push(item);
        break;
      }
    }
  }

  if (matchedTopics.length > 0) {
    const primary = matchedTopics[0];
    return `
      <div style="margin-bottom:6px;color:#0f766e;font-weight:800;font-size:1rem;">
        🩺 ${primary.title}
      </div>
      <div style="font-size:0.8rem;background:#e0f2fe;color:#1e40af;padding:4px 10px;border-radius:6px;margin-bottom:10px;font-weight:700;">
        📚 Nguồn dẫn chiếu: ${primary.source}
      </div>
      <div>${primary.response}</div>
      <div style="margin-top:12px;padding-top:10px;border-top:1px dashed #cbd5e1;font-size:0.86rem;color:#0f172a;">
        💬 <strong>Đồng hành trực tiếp cùng học viên & cộng đồng:</strong> Nếu anh/chị cần trao đổi sâu hơn, hãy gọi hoặc nhắn Zalo số <a href="https://zalo.me/0912343858" target="_blank" style="color:#0068ff;font-weight:800;">0912 343 858</a> (Trợ lý AI trực 24/7 khi vắng mặt).
      </div>
    `;
  }

  // Câu trả lời tổng quát khi câu hỏi mở
  return `
    <div style="margin-bottom:6px;color:#0f766e;font-weight:800;">
      🌟 Trợ lý AI Sức Khỏe Trung Niên 24/7 xin phản hồi câu hỏi của anh/chị:
    </div>
    <div>
      Dựa trên <strong>Khuyến cáo của Bộ Y tế Việt Nam & Tổ chức Y tế Thế giới (WHO)</strong> cho lứa tuổi trung niên (40–65+):<br>
      1. <strong>Kiểm soát 4 chỉ số vàng:</strong> Huyết áp (&lt; 130/80 mmHg), Đường huyết đói (&lt; 5.6 mmol/L), Mỡ máu LDL-C và Vòng eo (&lt; 90cm ở nam, &lt; 80cm ở nữ).<br>
      2. <strong>Dinh dưỡng tự nhiên, không lệ thuộc thực phẩm quảng cáo:</strong> Giảm muối dưới 5g/ngày, ăn đủ 400g rau xanh + trái cây ít ngọt mỗi ngày, ưu tiên đạm từ cá và các loại đậu.<br>
      3. <strong>Vận động & Giấc ngủ:</strong> Duy trì 30 phút đi bộ nhanh hoặc dưỡng sinh mỗi ngày, ngủ đủ 7–8 tiếng.<br><br>
      <em>Anh/chị có thể hỏi cụ thể hơn về: <strong>Huyết áp, Tiểu đường, Xương khớp, Mất ngủ, hoặc Lịch tầm soát ung thư</strong> để nhận phác đồ chi tiết!</em>
    </div>
    <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #cbd5e1;font-size:0.86rem;">
      📞 <strong>Hotline / Zalo kết nối trực tiếp:</strong> <a href="https://zalo.me/0912343858" target="_blank" style="color:#0068ff;font-weight:800;">0912 343 858</a>
    </div>
  `;
}

async function callGeminiMedicalAI(userQuestion, apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  const systemInstruction = `
    Bạn là Trợ lý AI Y khoa 24/7 của Cổng Sức Khỏe Vàng Tuổi Trung Niên (đồng hành cùng số điện thoại/Zalo duy nhất: 0912 343 858).
    NGUYÊN TẮC BẮT BUỘC:
    1. Chỉ cung cấp kiến thức y học chính thống từ Bộ Y tế Việt Nam, Tổ chức Y tế Thế giới (WHO), Hiệp hội Tim mạch (AHA/ESC), Hiệp hội Đái tháo đường (ADA).
    2. TUYỆT ĐỐI KHÔNG quảng cáo, không giới thiệu hay bán bất kỳ loại thực phẩm chức năng hay thuốc thương mại nào.
    3. Giải thích rõ ràng, ấm áp, sinh động, dễ hiểu cho người trung niên.
    4. Luôn kèm lời nhắn kết nối Zalo/Điện thoại 0912 343 858 ở cuối câu trả lời.
  `;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemInstruction}\n\nCâu hỏi của người dùng: ${userQuestion}` }]
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }
  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return rawText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

async function handleSendChatMessage() {
  const input = document.getElementById('aiUserInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendMessage('user', text);
  input.value = '';

  const savedApiKey = localStorage.getItem('HEALTH_AI_GEMINI_KEY') || '';

  if (savedApiKey) {
    appendMessage('bot', '⏳ <em>Trợ lý AI 24/7 đang tra cứu dữ liệu y khoa chính thống (Bộ Y tế & WHO)...</em>');
    try {
      const aiReply = await callGeminiMedicalAI(text, savedApiKey);
      const container = document.getElementById('chatMessages');
      if (container && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
      appendMessage('bot', aiReply);
      return;
    } catch (err) {
      const container = document.getElementById('chatMessages');
      if (container && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
    }
  }

  // Phản hồi tức thì bằng Hệ thống Tri thức Y khoa Chính thống tích hợp sẵn (hoạt động 24/7 không cần mạng hay key)
  setTimeout(() => {
    const replyHtml = generateLocalMedicalAnswer(text);
    appendMessage('bot', replyHtml);
  }, 320);
}

/* ==========================================================================
   6. QUẢN LÝ CẤU HÌNH API KEY MỞ RỘNG (TÙY CHỌN)
   ========================================================================== */
function openApiModal() {
  const modal = document.getElementById('apiModal');
  const keyInput = document.getElementById('geminiKeyInput');
  if (keyInput) {
    keyInput.value = localStorage.getItem('HEALTH_AI_GEMINI_KEY') || '';
  }
  if (modal) modal.classList.add('open');
}

function closeApiModal() {
  const modal = document.getElementById('apiModal');
  if (modal) modal.classList.remove('open');
}

function saveApiKey() {
  const keyInput = document.getElementById('geminiKeyInput');
  if (keyInput) {
    const val = keyInput.value.trim();
    if (val) {
      localStorage.setItem('HEALTH_AI_GEMINI_KEY', val);
      alert('Đã lưu khóa kết nối AI nâng cao! Hệ thống AI 24/7 đã sẵn sàng.');
    } else {
      localStorage.removeItem('HEALTH_AI_GEMINI_KEY');
      alert('Đã chuyển về Chế độ AI Tri thức Y khoa Chính thống Tích hợp sẵn (Hoạt động 24/7 không cần khóa).');
    }
  }
  closeApiModal();
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('aiUserInput');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendChatMessage();
      }
    });
  }
});
