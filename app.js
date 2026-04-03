const ZALO_NUMBER = "0584556556";

// Dữ liệu 35+ KDL toàn quốc (Phân loại theo Region và Brand)
// Đã bổ sung mapX, mapY = Toạ độ % tuyệt đối trên bản đồ Việt Nam SVG (#0f172a)
const destinations = [
    // === MIỀN BẮC (mienbac) ===
    { id: 1, title: "VinKE & Aquarium Times City", loc: "Hà Nội", region: "mienbac", brand: "vinwonders", desc: "Thủy cung siêu chân thực và khu vui chơi giáo dục nghề nghiệp cho trẻ em giữa lòng thủ đô.", mapX: 47, mapY: 18 },
    { id: 2, title: "Thủy cung Lotte Mall Tây Hồ", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Khám phá đại dương thu nhỏ siêu ảo diệu lớn nhất khu vực với hàng ngàn sinh vật quy tụ.", mapX: 46, mapY: 17 },
    { id: 3, title: "Tour đêm Văn Miếu Quốc Tử Giám", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Sự kiện ánh sáng huyền ảo khơi dậy tinh hoa hiếu học, chiêm ngưỡng công nghệ mapping 3D.", mapX: 48, mapY: 18 },
    { id: 4, title: "Bảo tàng Gốm Bát Tràng", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Kiến trúc con xoay đất nung độc đáo, cùng trải nghiệm tự tay vuốt nặn gốm chuẩn thủ công.", mapX: 49, mapY: 19 },
    { id: 5, title: "Công viên nước Hồ Tây", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Điểm đến giải nhiệt mùa hè kinh điển tại Hà Nội với vô vàn trò chơi cảm giác mạnh dưới nước.", mapX: 45, mapY: 16 },
    { id: 6, title: "SIGHTSEEING HÀ NỘI (City Tour)", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Trải nghiệm tầm nhìn cực chill trên xe buýt 2 tầng qua 30+ di tích mười tám phố phường.", mapX: 47, mapY: 19 },
    { id: 7, title: "Wolfoo World", loc: "Hà Nội", region: "mienbac", brand: "other", desc: "Khu vui chơi theo concept phim hoạt hình Wolfoo lớn nhất, thiên đường sáng tạo cho trẻ nhỏ.", mapX: 44, mapY: 17 },
    
    { id: 8, title: "Sun World Cát Bà", loc: "Hải Phòng", region: "mienbac", brand: "sunworld", desc: "Cáp treo vượt biển siêu đỉnh, chiêm ngưỡng trọn vẹn vịnh ngọc Cát Bà hoang sơ rực rỡ.", mapX: 55, mapY: 20 },
    { id: 9, title: "VinWonders Vũ Yên", loc: "Hải Phòng", region: "mienbac", brand: "vinwonders", desc: "Siêu quần thể giải trí lớn nhất Hải Phòng, công viên chủ đề Safari và Vịnh biển nhân tạo.", mapX: 53, mapY: 19 },
    { id: 10, title: "KDL Quốc tế Đồi Rồng", loc: "Đồ Sơn, Hải Phòng", region: "mienbac", brand: "other", desc: "Trải nghiệm bãi biển nhân tạo trong vắt cùng công viên nước Thủy Tinh Thần Xuyên hot nhất.", mapX: 54, mapY: 21 },
    
    { id: 11, title: "Sun World Fansipan Legend", loc: "Sapa, Lào Cai", region: "mienbac", brand: "sunworld", desc: "Chinh phục nóc nhà Đông Dương qua hệ thống cáp treo kỳ vĩ giữa biển mây và thung lũng Mường Hoa.", mapX: 30, mapY: 8 },
    { id: 12, title: "Cổng trời Ô Quy Hồ", loc: "Sapa, Lào Cai", region: "mienbac", brand: "other", desc: "Check-in tứ đại đỉnh đèo ngoạn mục, săn trọn hoàng hôn đỏ quạch đẹp nhất Tây Bắc.", mapX: 29, mapY: 9 },
    { id: 13, title: "The Best View Sapa", loc: "Sapa, Lào Cai", region: "mienbac", brand: "other", desc: "Khu cắm trại và checkin cực chill ngắm thung lũng ruộng bậc thang hùng vĩ Tây Bắc.", mapX: 31, mapY: 10 },
    
    { id: 14, title: "Sun World Hạ Long", loc: "Hạ Long, Quảng Ninh", region: "mienbac", brand: "sunworld", desc: "Khu vui chơi giải trí phức hợp, đi Cáp treo Nữ Hoàng và trải nghiệm Công viên Nước/Rồng lớn nhất.", mapX: 58, mapY: 18 },
    { id: 15, title: "Khu du lịch Tràng An", loc: "Ninh Bình", region: "mienbac", brand: "other", desc: "Di sản thế giới kép, xuôi thuyền trên non nước hữu tình xuyên qua các hang động bí ẩn.", mapX: 45, mapY: 25 },
    { id: 16, title: "VinWonders Hà Nội (Wave/Water Park)", loc: "Ocean City, Hưng Yên", region: "mienbac", brand: "vinwonders", desc: "Đón sóng thần hồ mặn nhân tạo, đua thuyền kayak tại quần thể vui chơi Ocean Park đẳng cấp.", mapX: 50, mapY: 20 },
    { id: 17, title: "VinWonders Aquafield", loc: "Ocean City, Hưng Yên", region: "mienbac", brand: "vinwonders", desc: "Tổ hợp phòng xông hơi kiểu Hàn Quốc (Jjimjilbang) kết hợp thư giãn phong cách chuẩn 5 sao.", mapX: 51, mapY: 21 },
    { id: 18, title: "Sun World Hà Nam", loc: "Hà Nam", region: "mienbac", brand: "sunworld", desc: "Siêu dự án giải trí và lễ hội mới từ Sun Group, hứa hẹn mang đến nhiều trải nghiệm đỉnh cao.", mapX: 46, mapY: 22 },
    { id: 19, title: "Mộc Châu Island (Cầu Bạch Long)", loc: "Sơn La", region: "mienbac", brand: "other", desc: "Chiêm ngưỡng và thử thách đi dây trên Vách đá vô danh ngắm cầu kính đi bộ dài nhất thế giới.", mapX: 33, mapY: 15 },

    // === MIỀN TRUNG (mientrung) ===
    { id: 20, title: "Sun World Ba Na Hills", loc: "Đà Nẵng", region: "mientrung", brand: "sunworld", desc: "Trải nghiệm tiên cảnh, ngắm Cầu Vàng huyền thoại, khám phá làng Pháp với lễ hội bia hoành tráng.", mapX: 68, mapY: 52 },
    { id: 21, title: "Công viên nước Mikazuki 365", loc: "Đà Nẵng", region: "mientrung", brand: "other", desc: "Chuẩn phong cách Nhật Bản với tắm khoáng nóng Onsen và bể bơi vô cực quanh năm mát mẻ.", mapX: 69, mapY: 51 },
    { id: 22, title: "Lễ hội Pháo hoa DIFF 2026", loc: "Đà Nẵng", region: "mientrung", brand: "other", desc: "Sự kiện quốc tế hoành tráng, chiêm ngưỡng những tràng pháo hoa thắp sáng rực rỡ bầu trời sông Hàn.", mapX: 70, mapY: 53 },
    { id: 23, title: "VinWonders Nam Hội An", loc: "Hội An, Quảng Nam", region: "mientrung", brand: "vinwonders", desc: "Giao thoa văn hóa Á-Âu. Phá đảo thế giới nước và vườn thú River Safari thám hiểm trên sông.", mapX: 72, mapY: 56 },
    { id: 24, title: "Ký Ức Hội An Gami", loc: "Hội An, Quảng Nam", region: "mientrung", brand: "other", desc: "Đỉnh cao show tấu diễn thực cảnh ngoài trời hoành tráng tái hiện 400 năm vinh quang Hội An.", mapX: 71, mapY: 55 },
    { id: 25, title: "VinWonders Nha Trang", loc: "Nha Trang, Khánh Hòa", region: "mientrung", brand: "vinwonders", desc: "Khu vui chơi trên đảo Hòn Tre siêu cấp: Tata Show, đu quay khổng lồ, trò chơi cảm giác siêu mạnh.", mapX: 86, mapY: 72 },
    { id: 26, title: "Vườn Ánh Sáng Lumiere", loc: "Đà Lạt, Lâm Đồng", region: "mientrung", brand: "other", desc: "Triển lãm mapping nghệ thuật ánh sáng tương tác đa chiều. Nơi 1 mét vuông ra ngàn bức ảnh.", mapX: 76, mapY: 73 },
    { id: 27, title: "Samten Hills Dalat", loc: "Đơn Dương, Lâm Đồng", region: "mientrung", brand: "other", desc: "KDL văn hóa tâm linh độc nhất trên cao nguyên. Nơi sở hữu đại bảo tháp kinh luân bằng đồng mạ vàng.", mapX: 75, mapY: 74 },
    { id: 28, title: "TTC Thung Lũng Tình Yêu", loc: "Đà Lạt, Lâm Đồng", region: "mientrung", brand: "ttc", desc: "Điểm đến lãng mạn vạn người mê, khám phá vườn hồng, các tác phẩm điêu khắc tình yêu và mặt hồ than thở.", mapX: 77, mapY: 72 },
    { id: 29, title: "VinWonders Cửa Hội", loc: "Nghệ An", region: "mientrung", brand: "vinwonders", desc: "Thiên đường vui chơi bãi biển miền Trung. Quần thể Vịnh sóng, cáp treo xuyên biển mới tại Nghệ An.", mapX: 43, mapY: 35 },
    { id: 30, title: "Sun World Sầm Sơn", loc: "Thanh Hóa", region: "mientrung", brand: "sunworld", desc: "Thành phố đêm giải trí, đại nhạc hội đường phố, công viên chủ đề rực rỡ nhất Bắc Trung Bộ.", mapX: 45, mapY: 30 },
    { id: 31, title: "TTC World - Tà Cú", loc: "Bình Thuận", region: "mientrung", brand: "ttc", desc: "Hành hương bái Phật ngọa dài 49m trên cáp treo leo núi hùng vĩ, vãn cảnh thiên nhiên thanh bình.", mapX: 75, mapY: 82 },

    // === MIỀN NAM (miennam) ===
    { id: 32, title: "KDL Văn Hóa Suối Tiên", loc: "TP. Hồ Chí Minh", region: "miennam", brand: "other", desc: "Đỉnh cao vui chơi mang đậm bản sắc văn hóa cội nguồn dân tộc. Tắm biển Tiên Đồng và công viên thú.", mapX: 58, mapY: 82 },
    { id: 33, title: "VinWonders Grand Park", loc: "Thủ Đức, TP.HCM", region: "miennam", brand: "vinwonders", desc: "Không gian giải trí kiểu mới ngay trung tâm Sài Gòn quy mô ấn tượng.", mapX: 59, mapY: 81 },
    { id: 34, title: "Van Gogh Art Lighting", loc: "TP. Hồ Chí Minh", region: "miennam", brand: "other", desc: "Bay bổng đắm chìm vào không gian hội họa siêu thực của thiên tài Van Gogh ngay tại Giga Mall.", mapX: 57, mapY: 80 },
    { id: 35, title: "SIGHTSEEING HỒ CHÍ MINH", loc: "TP. Hồ Chí Minh", region: "miennam", brand: "other", desc: "Xe bus 2 tầng lộng gió Sài Thành, dạo quanh chợ Bến Thành, Dinh Độc Lập sầm uất phố thị.", mapX: 56, mapY: 83 },
    { id: 36, title: "Sun World Hòn Thơm", loc: "Phú Quốc, Kiên Giang", region: "miennam", brand: "sunworld", desc: "Bay trên cáp treo dài nhất thế giới vượt biển ngoạn mục, đắm mình với Aquatopia Water Park.", mapX: 13, mapY: 96 },
    { id: 37, title: "VinWonders Phú Quốc", loc: "Phú Quốc, Kiên Giang", region: "miennam", brand: "vinwonders", desc: "Công viên chủ đề khổng lồ, thủy cung hình rùa biển đặc trưng cùng khu Cung Điện Hải Vương cực khủng.", mapX: 12, mapY: 94 },
    { id: 38, title: "Sun World Ba Den", loc: "Tây Ninh", region: "miennam", brand: "sunworld", desc: "Chinh phục nóc nhà Đông Nam Bộ linh thiêng, ngắm tượng bồ tát Tây Bổ Đà Sơn sừng sững trên mây.", mapX: 52, mapY: 78 },
    { id: 39, title: "Sun World Vũng Tàu", loc: "Bà Rịa - Vũng Tàu", region: "miennam", brand: "sunworld", desc: "Vui chơi ngắm trọn thành phố Vũng Tàu từ hồ thiên đường trên núi lớn sảng khoái.", mapX: 63, mapY: 86 },
    { id: 40, title: "Công viên Vịnh Diệu Kỳ", loc: "Đồng Nai", region: "miennam", brand: "other", desc: "Amazing Bay - siêu công viên nước có ngọn sóng nhân tạo vắt ngang và bãi biển lớn nhất Việt Nam.", mapX: 60, mapY: 80 },
    { id: 41, title: "TTC Mekong Aqua Park", loc: "Bến Tre", region: "miennam", brand: "ttc", desc: "Thủ phủ vui chơi sông nước miệt vườn mới của miền Tây nam bộ vơi vô số trò mới lạ.", mapX: 48, mapY: 88 }
];

/* =========================================
   UI LOGIC HANDLER
========================================= */

// Filter state
let currentRegion = 'all';
let currentBrand = 'all';
let searchKeyword = ''; // Đảm bảo biến này được khai báo toàn cục

document.addEventListener('DOMContentLoaded', () => {
    
    const gridContainer = document.getElementById('destinations-grid');
    const noResults = document.getElementById('no-results');
    const resCount = document.getElementById('results-count');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Mặc định Render All
    renderCards(destinations);

    // Xử lý sự kiện click filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterVal = btn.dataset.filter;
            const filterType = btn.dataset.type;

            // Xóa active class của nhóm đó
            document.querySelectorAll(`.filter-btn[data-type="${filterType}"]`).forEach(b => b.classList.remove('active'));
            
            // Cập nhật giá trị filter tương ứng
            if(filterType === 'brand') {
                currentBrand = filterVal;
            } else {
                currentRegion = filterVal;
            }

            btn.classList.add('active');
            
            // Thực hiện lọc ngay lập tức
            filterData();
        });
    });

    // Hover Sync (Đồng bộ Card hover - Map Pin highlight)
    window.highlightPin = function(id) {
        const pin = document.querySelector(`.map-pin[data-id="${id}"]`);
        if (pin) pin.classList.add('pin-hover-active');
    };

    window.unhighlightPin = function(id) {
        const pin = document.querySelector(`.map-pin[data-id="${id}"]`);
        if (pin) pin.classList.remove('pin-hover-active');
    };

    // Lắng nghe sự kiện tìm kiếm
    const searchInput = document.getElementById('main-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    searchInput.addEventListener('input', function(e) {
        const val = e.target.value.toLowerCase().trim();
        searchKeyword = val;
        
        if (val.length > 0) {
            const matches = destinations.filter(d => 
                d.title.toLowerCase().includes(val) || 
                d.loc.toLowerCase().includes(val)
            );
            renderSuggestions(matches);
        } else {
            searchSuggestions.classList.remove('active');
        }
        filterData();
    });

    // Render danh sách gợi ý
    function renderSuggestions(matches) {
        if (matches.length === 0) {
            searchSuggestions.innerHTML = `<li class="suggestion-item"><span class="suggestion-title">Không tìm thấy địa điểm</span></li>`;
            searchSuggestions.classList.add('active');
            return;
        }

        const html = matches.slice(0, 6).map(m => `
            <li class="suggestion-item" onclick="selectSuggestion(${m.id})">
                <i class="fa-solid fa-location-dot" style="color:var(--text-secondary)"></i>
                <div>
                    <div class="suggestion-title">${m.title}</div>
                    <div class="suggestion-loc">${m.loc}</div>
                </div>
            </li>
        `).join('');
        
        searchSuggestions.innerHTML = html;
        searchSuggestions.classList.add('active');
    }

    window.selectSuggestion = function(id) {
        searchInput.value = "";
        searchKeyword = "";
        searchSuggestions.classList.remove('active');
        filterData();
        openBookingModal(id);
    };

    // Đóng gợi ý khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });

    function filterData() {
        const filtered = destinations.filter(item => {
            // Kiểm tra Filter
            let matchRegion = true;
            if (currentRegion !== 'all') {
                matchRegion = item.region === currentRegion;
            }

            let matchBrand = true;
            if (currentBrand !== 'all') {
                matchBrand = item.brand === currentBrand;
            }

            // Kiểm tra Search
            let matchSearch = true;
            if (searchKeyword.length > 0) {
                matchSearch = item.title.toLowerCase().includes(searchKeyword) || item.loc.toLowerCase().includes(searchKeyword);
            }

            return matchRegion && matchBrand && matchSearch;
        });

        // Cập nhật số lượng
        document.getElementById('results-count').textContent = filtered.length;

        renderCards(filtered);
    }

    function renderCards(data) {
        // Cập nhật số lượng
        resCount.textContent = data.length;

        if (data.length === 0) {
            gridContainer.innerHTML = '';
            return;
        }

        // Render Danh sách Thẻ bài
        const htmlParams = data.map((item, index) => {
            let bName = "Khám Phá";
            let bEmoji = "✨";
            if(item.brand === 'sunworld') { bName = "Sun World"; bEmoji = "☀️"; }
            if(item.brand === 'vinwonders') { bName = "VinWonders"; bEmoji = "🏰"; }
            if(item.brand === 'ttc') { bName = "TTC World"; bEmoji = "🌲"; }
            let cardClass = `card-theme-${item.region}`;
            let rName = item.region === "mienbac" ? "Miền Bắc" : (item.region === "mientrung" ? "Miền Trung" : "Miền Nam");

            // Giảm độ trễ cực nhỏ hoặc bằng 0 để tránh cảm giác "trễ" khi filter
            let delay = (index * 0.015);
            if (delay > 0.5) delay = 0.5;

            return `
                <article class="dest-card card-anim ${cardClass}" 
                         style="animation-delay: ${delay}s" 
                         onclick="toggleCard(this, event)" 
                         onmouseenter="highlightPin(${item.id})" 
                         onmouseleave="unhighlightPin(${item.id})">
                    <div class="card-content">
                        <div class="card-header-flex">
                            <div class="card-tags">
                                <span class="tag-region">${rName}</span>
                                <span class="tag-brand">${bEmoji} ${bName}</span>
                            </div>
                            <div class="expand-icon"><i class="fa-solid fa-chevron-down"></i></div>
                        </div>
                        
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-loc"><i class="fa-solid fa-location-dot"></i> ${item.loc}</div>
                        
                        <div class="card-expand-content">
                            <p class="card-desc">${item.desc}</p>
                            <div class="card-cta" onclick="event.stopPropagation(); openBookingModal(${item.id})">
                                <span class="cta-text">🔥 Mua vé ngay</span>
                                <span class="cta-icon"><i class="fa-brands fa-zalo"></i></span>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        gridContainer.innerHTML = htmlParams;

        // Render Các điểm Ghim (Pins) trên Bản đồ SVG
        const pinsContainer = document.getElementById('pins-container');
        if (pinsContainer) {
            const htmlPins = data.map(item => {
                let pEmoji = "✨";
                if(item.brand === 'sunworld') pEmoji = "☀️";
                if(item.brand === 'vinwonders') pEmoji = "🏰";
                if(item.brand === 'ttc') pEmoji = "🌲";
                
                let pulseClass = `pulse-${item.region}`;

                return `
                    <div class="map-pin ${pulseClass}" data-id="${item.id}" style="left: ${item.mapX}%; top: ${item.mapY}%;" onclick="openBookingModal(${item.id})" title="${item.title}">
                        <span class="pin-emoji">${pEmoji}</span>
                        <div class="pin-pulse"></div>
                    </div>
                `;
            }).join('');
            pinsContainer.innerHTML = htmlPins;
        }
    }

    // Slider Hero Image
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active-slide');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active-slide');
        }, 5000);
    }

    // Gắn Filter Reset function ra global
    window.resetFilters = function() {
        // Reset state
        currentRegion = 'all';
        currentBrand = 'all';
        searchKeyword = '';
        searchInput.value = '';
        
        // Reset CSS
        filterBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

        // Render
        renderCards(destinations);
    };

    /* =========================================
       MODAL ZALO LOGIC
    ========================================= */
    const modal = document.getElementById('booking-modal');
    const backdrop = document.getElementById('backdrop');
    const mClose = document.getElementById('close-modal');

    const mTitle = document.getElementById('modal-title');
    const mBox = document.getElementById('modal-banner');
    const mRegion = document.getElementById('modal-region');
    const mLoc = document.getElementById('modal-location');
    const mDesc = document.getElementById('modal-desc');
    const btnZalo = document.getElementById('zalo-link');

    window.toggleCard = function(el, event) {
        // Đóng các thẻ đang mở khác (tùy chọn - nếu muốn chế độ accordion)
        /*
        document.querySelectorAll('.dest-card.expanded').forEach(card => {
            if(card !== el) card.classList.remove('expanded');
        });
        */
        el.classList.toggle('expanded');
    };

    window.openBookingModal = function(id) {
        const item = destinations.find(d => d.id === id);
        if(!item) return;

        mTitle.textContent = item.title;
        // Bỏ Background Modal Banner, thay bằng màu theo vùng:
        const colorMap = {
            'mienbac': '#e0e7ff',   // Soft Indigo
            'mientrung': '#fef08a', // Soft Yellow
            'miennam': '#bbf7d0'    // Soft Green
        };
        mBox.style.background = colorMap[item.region] || '#f1f5f9';
        
        mRegion.textContent = item.region === "mienbac" ? "📍 Miền Bắc" : (item.region === "mientrung" ? "📍 Miền Trung" : "📍 Miền Nam");
        mLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.loc}`;
        mDesc.innerHTML = `<strong>🌟 Tuyến điểm:</strong> ${item.desc} <br><br>👉 Nhấn nút bên dưới để chuyển qua Zalo và nhận Mã ưu đãi Booking nhanh chóng!`;

        // Zalo Message
        const msg = `Xin chào RIVIU.ASIA, mình quan tâm và muốn mua vé cho "[${item.title}]" tại ${item.loc}. Vui lòng báo giá ưu đãi.`;
        btnZalo.href = `https://zalo.me/${ZALO_NUMBER}/?text=${encodeURIComponent(msg)}`;

        modal.classList.add('open');
        backdrop.classList.add('show');
    };

    function closeBox() {
        modal.classList.remove('open');
        backdrop.classList.remove('show');
    }

    mClose.addEventListener('click', closeBox);
    backdrop.addEventListener('click', closeBox);
});

window.openZaloGlobal = function() {
    window.open(`https://zalo.me/${ZALO_NUMBER}`, '_blank');
};
