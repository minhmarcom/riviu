const ZALO_NUMBER = "0584556556";

// Dữ liệu 45+ dịch vụ toàn quốc (Phân loại theo Region và Brand)
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
    { id: 41, title: "TTC Mekong Aqua Park", loc: "Bến Tre", region: "miennam", brand: "ttc", desc: "Thủ phủ vui chơi sông nước miệt vườn mới của miền Tây nam bộ vơi vô số trò mới lạ.", mapX: 48, mapY: 88 },

    // === BOOKING KHÁCH SẠN VINPEARL TOÀN QUỐC ===
    { id: 42, title: "Vinpearl Hotels Hà Nội", loc: "Hà Nội", region: "mienbac", brand: "vinpearl", desc: "Booking phòng khách sạn Vinpearl tại Hà Nội, phù hợp công tác, nghỉ dưỡng gia đình và lịch trình kết hợp vui chơi.", mapX: 48, mapY: 18 },
    { id: 43, title: "Vinpearl Resort & Spa Hạ Long", loc: "Hạ Long, Quảng Ninh", region: "mienbac", brand: "vinpearl", desc: "Tư vấn phòng nghỉ dưỡng vịnh Hạ Long, hỗ trợ kiểm tra hạng phòng, ngày lưu trú và gói phù hợp theo nhu cầu.", mapX: 59, mapY: 18 },
    { id: 44, title: "Vinpearl Resort Nha Trang", loc: "Nha Trang, Khánh Hòa", region: "mientrung", brand: "vinpearl", desc: "Booking hệ thống resort Vinpearl Nha Trang, có thể kết hợp vé VinWonders và lịch trình nghỉ dưỡng trên đảo.", mapX: 86, mapY: 72 },
    { id: 45, title: "Vinpearl Resort & Golf Nam Hội An", loc: "Hội An, Quảng Nam", region: "mientrung", brand: "vinpearl", desc: "Tư vấn gói lưu trú Nam Hội An cho gia đình, đoàn nghỉ dưỡng, khách chơi golf hoặc kết hợp VinWonders Nam Hội An.", mapX: 72, mapY: 56 },
    { id: 46, title: "Vinpearl Phú Quốc", loc: "Phú Quốc, Kiên Giang", region: "miennam", brand: "vinpearl", desc: "Booking chuỗi khách sạn và resort Vinpearl Phú Quốc, hỗ trợ chọn khu, hạng phòng và gói nghỉ dưỡng phù hợp.", mapX: 12, mapY: 95 },
    { id: 47, title: "Vinpearl Hotels TP.HCM", loc: "TP. Hồ Chí Minh", region: "miennam", brand: "vinpearl", desc: "Tư vấn đặt phòng Vinpearl tại TP.HCM cho công tác, du lịch ngắn ngày hoặc lịch trình kết nối miền Nam.", mapX: 57, mapY: 82 }
];

/* =========================================
   UI LOGIC HANDLER
========================================= */

const regionMeta = {
    mienbac: {
        label: "Miền Bắc",
        className: "mienbac",
        gradient: "linear-gradient(135deg, #15231f, #0f6b5f)"
    },
    mientrung: {
        label: "Miền Trung",
        className: "mientrung",
        gradient: "linear-gradient(135deg, #8d6a22, #b7664b)"
    },
    miennam: {
        label: "Miền Nam",
        className: "miennam",
        gradient: "linear-gradient(135deg, #2f7655, #168a7a)"
    }
};

const brandMeta = {
    sunworld: { label: "Sun World", icon: "fa-solid fa-sun", className: "sunworld" },
    vinwonders: { label: "VinWonders", icon: "fa-solid fa-crown", className: "vinwonders" },
    vinpearl: { label: "Vinpearl", icon: "fa-solid fa-hotel", className: "vinpearl" },
    ttc: { label: "TTC World", icon: "fa-solid fa-tree", className: "ttc" },
    other: { label: "Khác", icon: "fa-solid fa-location-dot", className: "other" }
};

let currentRegion = "all";
let currentBrand = "all";
let searchKeyword = "";

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function normalizeText(value) {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .trim();
}

function getZaloLink(item) {
    const msg = item
        ? `Xin chào RIVIU.ASIA, mình quan tâm ${item.brand === "vinpearl" ? "booking" : "vé"} "${item.title}" tại ${item.loc}. Vui lòng báo giá ưu đãi.`
        : "Xin chào RIVIU.ASIA, mình cần tư vấn voucher du lịch.";

    return `https://zalo.me/${ZALO_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function getSearchText(item) {
    return normalizeText(`${item.title} ${item.loc} ${item.desc}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("destinations-grid");
    const noResults = document.getElementById("no-results");
    const resultsLabel = document.getElementById("results-label");
    const resCount = document.getElementById("results-count");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("main-search");
    const searchSuggestions = document.getElementById("search-suggestions");
    const pinsContainer = document.getElementById("pins-container");
    const promoSlider = document.getElementById("promo-slider");

    const modal = document.getElementById("booking-modal");
    const backdrop = document.getElementById("backdrop");
    const mClose = document.getElementById("close-modal");
    const mTitle = document.getElementById("modal-title");
    const mBox = document.getElementById("modal-banner");
    const mRegion = document.getElementById("modal-region");
    const mLoc = document.getElementById("modal-location");
    const mDesc = document.getElementById("modal-desc");
    const btnZalo = document.getElementById("zalo-link");

    initPromoSlider();

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterVal = btn.dataset.filter;
            const filterType = btn.dataset.type;

            document.querySelectorAll(`.filter-btn[data-type="${filterType}"]`).forEach(item => {
                item.classList.remove("active");
            });

            if (filterType === "brand") {
                currentBrand = filterVal;
            } else {
                currentRegion = filterVal;
            }

            btn.classList.add("active");
            filterData();
        });
    });

    searchInput.addEventListener("input", event => {
        searchKeyword = normalizeText(event.target.value);

        if (searchKeyword.length > 0) {
            const matches = destinations.filter(item => getSearchText(item).includes(searchKeyword));
            renderSuggestions(matches);
        } else {
            searchSuggestions.classList.remove("active");
        }

        filterData();
    });

    searchInput.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            searchSuggestions.classList.remove("active");
            searchInput.blur();
        }
    });

    document.addEventListener("click", event => {
        if (!event.target.closest(".search-container")) {
            searchSuggestions.classList.remove("active");
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeBox();
            closePopup(true);
        }
    });

    window.highlightPin = function(id) {
        const pin = document.querySelector(`.map-pin[data-id="${id}"]`);
        if (pin) pin.classList.add("pin-hover-active");
    };

    window.unhighlightPin = function(id) {
        const pin = document.querySelector(`.map-pin[data-id="${id}"]`);
        if (pin) pin.classList.remove("pin-hover-active");
    };

    window.selectSuggestion = function(id) {
        searchInput.value = "";
        searchKeyword = "";
        searchSuggestions.classList.remove("active");
        filterData();
        openBookingModal(id);
    };

    window.resetFilters = function() {
        currentRegion = "all";
        currentBrand = "all";
        searchKeyword = "";
        searchInput.value = "";
        searchSuggestions.classList.remove("active");

        filterBtns.forEach(btn => btn.classList.remove("active"));
        document.querySelector('.filter-btn[data-type="region"][data-filter="all"]')?.classList.add("active");
        document.querySelector('.filter-btn[data-type="brand"][data-filter="all"]')?.classList.add("active");

        renderCards(destinations);
    };

    window.openBookingModal = function(id) {
        const item = destinations.find(destination => destination.id === id);
        if (!item) return;

        const region = regionMeta[item.region];
        const brand = brandMeta[item.brand] || brandMeta.other;

        mTitle.textContent = item.title;
        mRegion.textContent = region.label;
        mLoc.innerHTML = `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${escapeHtml(item.loc)}`;
        const serviceNote = item.brand === "vinpearl"
            ? "phản hồi tình trạng phòng, hạng phòng, giá theo ngày lưu trú và phương án phù hợp cho khách lẻ hoặc đoàn qua Zalo."
            : "phản hồi giá vé, tình trạng mở bán và phương án phù hợp cho khách lẻ hoặc đoàn qua Zalo.";

        mDesc.innerHTML = `${escapeHtml(item.desc)}<br><br><strong>RIVIU.ASIA</strong> ${serviceNote}`;
        btnZalo.href = getZaloLink(item);

        mBox.style.background = region.gradient;
        mBox.innerHTML = `
            <div class="modal-banner-inner">
                <div class="modal-banner-icon"><i class="${brand.icon}" aria-hidden="true"></i></div>
                <div class="modal-banner-copy">
                    <span>${escapeHtml(brand.label)}</span>
                    <strong>${escapeHtml(region.label)}</strong>
                </div>
            </div>
        `;

        modal.classList.add("open");
        backdrop.classList.add("show");
        document.body.classList.add("modal-open");
    };

    function closeBox() {
        modal.classList.remove("open");
        backdrop.classList.remove("show");
        document.body.classList.remove("modal-open");
    }

    mClose.addEventListener("click", closeBox);
    backdrop.addEventListener("click", closeBox);

    function renderSuggestions(matches) {
        if (matches.length === 0) {
            searchSuggestions.innerHTML = `
                <li class="suggestion-item" aria-disabled="true">
                    <i class="fa-regular fa-compass" aria-hidden="true"></i>
                    <div>
                        <div class="suggestion-title">Không tìm thấy điểm đến</div>
                        <div class="suggestion-loc">Thử tên tỉnh thành hoặc thương hiệu khác</div>
                    </div>
                </li>
            `;
            searchSuggestions.classList.add("active");
            return;
        }

        searchSuggestions.innerHTML = matches.slice(0, 6).map(item => `
            <li class="suggestion-item" onclick="selectSuggestion(${item.id})">
                <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                <div>
                    <div class="suggestion-title">${escapeHtml(item.title)}</div>
                    <div class="suggestion-loc">${escapeHtml(item.loc)}</div>
                </div>
            </li>
        `).join("");
        searchSuggestions.classList.add("active");
    }

    function filterData() {
        const filtered = destinations.filter(item => {
            const matchRegion = currentRegion === "all" || item.region === currentRegion;
            const matchBrand = currentBrand === "all" || item.brand === currentBrand;
            const matchSearch = searchKeyword.length === 0 || getSearchText(item).includes(searchKeyword);

            return matchRegion && matchBrand && matchSearch;
        });

        renderCards(filtered);
    }

    function renderCards(data) {
        if (resultsLabel) resultsLabel.textContent = getResultsLabel();
        resCount.textContent = data.length;
        if (noResults) noResults.hidden = data.length !== 0;

        if (data.length === 0) {
            gridContainer.innerHTML = "";
            renderPins([]);
            return;
        }

        gridContainer.innerHTML = data.map((item, index) => {
            const region = regionMeta[item.region];
            const brand = brandMeta[item.brand] || brandMeta.other;
            const delay = Math.min(index * 0.015, 0.35).toFixed(3);
            const cardNumber = String(item.id).padStart(2, "0");

            return `
                <article class="dest-card card-anim card-theme-${item.region}"
                         style="animation-delay: ${delay}s"
                         onmouseenter="highlightPin(${item.id})"
                         onmouseleave="unhighlightPin(${item.id})">
                    <div class="card-content">
                        <div class="card-header-flex">
                            <div class="card-tags">
                                <span class="tag-region ${region.className}">${region.label}</span>
                                <span class="tag-brand ${brand.className}">
                                    <i class="${brand.icon}" aria-hidden="true"></i>
                                    ${brand.label}
                                </span>
                            </div>
                            <span class="card-index">${cardNumber}</span>
                        </div>

                        <h3 class="card-title">${escapeHtml(item.title)}</h3>
                        <div class="card-loc">
                            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                            <span>${escapeHtml(item.loc)}</span>
                        </div>
                        <p class="card-desc">${escapeHtml(item.desc)}</p>

                        <div class="card-actions">
                            <button class="card-action secondary" type="button" onclick="openBookingModal(${item.id})">
                                <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
                                <span>Chi tiết</span>
                            </button>
                            <a class="card-action primary" href="${getZaloLink(item)}" target="_blank" rel="noopener">
                                <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
                                <span>Báo giá Zalo</span>
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        renderPins(data);
    }

    function getResultsLabel() {
        if (searchKeyword.length > 0) return "Kết quả tìm kiếm";

        const labels = [];
        if (currentRegion !== "all") labels.push(regionMeta[currentRegion].label);
        if (currentBrand !== "all") labels.push((brandMeta[currentBrand] || brandMeta.other).label);

        return labels.length > 0 ? labels.join(" - ") : "Tất cả điểm đến";
    }

    function renderPins(data) {
        if (!pinsContainer) return;

        pinsContainer.innerHTML = data.map(item => {
            const brand = brandMeta[item.brand] || brandMeta.other;

            return `
                <button class="map-pin pulse-${item.region}"
                        type="button"
                        data-id="${item.id}"
                        style="left: ${item.mapX}%; top: ${item.mapY}%;"
                        onclick="openBookingModal(${item.id})"
                        aria-label="${escapeHtml(item.title)}">
                    <i class="${brand.icon}" aria-hidden="true"></i>
                    <span class="pin-pulse"></span>
                </button>
            `;
        }).join("");
    }

    const advisoryPopup = document.getElementById("advisory-popup");
    const advisoryClose = document.getElementById("advisory-close");
    const advisoryZaloBtn = document.getElementById("advisory-zalo-btn");

    if (advisoryZaloBtn) {
        advisoryZaloBtn.href = getZaloLink();
    }

    function closePopup(remember = false) {
        if (!advisoryPopup) return;
        advisoryPopup.classList.remove("show");
        if (remember) sessionStorage.setItem("advisoryDismissed", "true");
    }

    if (advisoryPopup && !sessionStorage.getItem("advisoryDismissed")) {
        let hasShown = false;
        const showPopup = () => {
            if (hasShown) return;
            hasShown = true;
            advisoryPopup.classList.add("show");
        };

        const showAfterMeaningfulScroll = () => {
            if (window.scrollY < 420) return;
            window.removeEventListener("scroll", showAfterMeaningfulScroll);
            window.setTimeout(showPopup, 1800);
        };

        window.addEventListener("scroll", showAfterMeaningfulScroll, { passive: true });
    }

    if (advisoryClose) advisoryClose.addEventListener("click", () => closePopup(true));
    if (advisoryZaloBtn) advisoryZaloBtn.addEventListener("click", () => closePopup(true));

    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery) {
        searchKeyword = normalizeText(initialQuery);
        searchInput.value = initialQuery;
        filterData();
    } else {
        renderCards(destinations);
    }

    function initPromoSlider() {
        if (!promoSlider) return;

        const track = promoSlider.querySelector(".promo-track");
        const slides = Array.from(promoSlider.querySelectorAll(".promo-slide"));
        const dots = Array.from(promoSlider.querySelectorAll(".promo-dot"));
        const prevBtn = promoSlider.querySelector("[data-promo-prev]");
        const nextBtn = promoSlider.querySelector("[data-promo-next]");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let current = 0;
        let timer = null;

        if (!track || slides.length === 0) return;

        const goTo = index => {
            current = (index + slides.length) % slides.length;
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === current);
                dot.setAttribute("aria-current", dotIndex === current ? "true" : "false");
            });
        };

        const stop = () => {
            if (timer) window.clearInterval(timer);
            timer = null;
        };

        const start = () => {
            if (reduceMotion || timer || slides.length < 2) return;
            timer = window.setInterval(() => goTo(current + 1), 4200);
        };

        prevBtn?.addEventListener("click", () => {
            stop();
            goTo(current - 1);
            start();
        });

        nextBtn?.addEventListener("click", () => {
            stop();
            goTo(current + 1);
            start();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                stop();
                goTo(index);
                start();
            });
        });

        promoSlider.addEventListener("mouseenter", stop);
        promoSlider.addEventListener("mouseleave", start);
        promoSlider.addEventListener("focusin", stop);
        promoSlider.addEventListener("focusout", start);

        goTo(0);
        start();
    }
});

window.openZaloGlobal = function() {
    window.open(getZaloLink(), "_blank", "noopener");
};
