import re

# 1. Read SVG download
with open("vn_temp.svg", "r") as f:
    svg_content = f.read()

# Extract just the <path d="..."> part
path_match = re.search(r'<path d="(.*?)"/>', svg_content, re.DOTALL)
if not path_match:
    print("Cannot find SVG path")
    exit(1)

path_data = path_match.group(1)

# 2. Build our super beautiful Inline SVG with Hoang Sa and Truong Sa drawn
inline_svg = f"""<!-- Hình nền Bản đồ Việt Nam (Sử dụng SVG nội tuyến siêu nhẹ và mượt) -->
<svg class="map-artwork" viewBox="0 0 1024 1024" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <!-- Nền đất liền -->
    <g transform="translate(0,1024) scale(0.1,-0.1)">
        <path d="{path_data}" fill="rgba(88, 166, 255, 0.1)" stroke="rgba(0, 240, 255, 0.6)" stroke-width="20" stroke-linejoin="round"/>
        
        <!-- Quần đảo Hoàng Sa (Được vẽ tay tương đối theo tỷ lệ) -->
        <g class="vn-island" fill="rgba(248, 197, 28, 0.3)" stroke="#f8c51c" stroke-width="15">
            <circle cx="8500" cy="5500" r="50"/>
            <circle cx="8650" cy="5400" r="35"/>
            <circle cx="8400" cy="5300" r="40"/>
        </g>

        <!-- Quần đảo Trường Sa (Được vẽ tay) -->
        <g class="vn-island" fill="rgba(248, 197, 28, 0.3)" stroke="#f8c51c" stroke-width="15">
            <circle cx="9200" cy="2500" r="45"/>
            <circle cx="9400" cy="2300" r="30"/>
            <circle cx="9000" cy="2200" r="40"/>
            <circle cx="9300" cy="2100" r="35"/>
            <circle cx="9100" cy="1900" r="55"/>
            <circle cx="9450" cy="1800" r="25"/>
        </g>
    </g>
</svg>"""

# 3. Read index html
with open("index.html", "r") as f:
    html = f.read()

# Find the new SVG block and replace it
new_html = re.sub(r'<!-- Hình nền Bản đồ.*?END BẢN ĐỒ -->', inline_svg, html, flags=re.DOTALL)

with open("index.html", "w") as f:
    f.write(new_html)

print("Injected Inline SVG properly!")
