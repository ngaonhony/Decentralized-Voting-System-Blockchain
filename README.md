# Hệ Thống Bầu Cử Phi Tập Trung Trên Blockchain

Hệ thống bầu cử phi tập trung (Decentralized Voting System) là một ứng dụng blockchain cho phép tổ chức các cuộc bầu cử minh bạch, an toàn và đáng tin cậy trên nền tảng Ethereum.

## Tính Năng Chính

- **Quản lý nhiều cuộc bầu cử cùng lúc**: Hỗ trợ tạo và quản lý nhiều cuộc bầu cử đồng thời với các danh sách ứng viên riêng biệt.
- **Bộ ba vai trò**: Hệ thống gồm 3 vai trò chính - Admin (quản trị viên), Commission (ủy ban bầu cử), và Voter (cử tri).
- **Quy trình phê duyệt**: Admin đề xuất cuộc bầu cử, Ủy ban bầu cử phê duyệt trước khi công khai.
- **Bảo mật cao**: Mỗi cử tri chỉ được bỏ phiếu một lần trong mỗi cuộc bầu cử, đảm bảo tính công bằng.
- **Minh bạch hoàn toàn**: Kết quả bầu cử được lưu trữ trên blockchain, không thể sửa đổi hoặc xóa bỏ.
- **Theo dõi kết quả theo thời gian thực**: Cập nhật kết quả bầu cử ngay sau mỗi lượt bỏ phiếu.

## Cấu Trúc Dự Án

```
Decentralized-Voting-System/
├── contracts/           # Smart contracts Solidity
├── migrations/          # Tập lệnh migration của Truffle
├── src/
│   ├── css/             # Tệp CSS và styles
│   ├── html/            # Trang HTML
│   ├── js/
│   │   ├── config/      # Cấu hình (Web3, kết nối blockchain)
│   │   ├── controllers/ # Controllers xử lý logic UI
│   │   ├── services/    # Dịch vụ tương tác với smart contracts
│   │   └── utils/       # Tiện ích
│   └── dist/            # Tệp đã build (JS, CSS)
├── test/                # Test scripts
└── truffle-config.js    # Cấu hình Truffle
```

## Phân Quyền Trong Hệ Thống

### 1. Admin
- Quản lý danh sách ứng cử viên
- Tạo đề xuất cuộc bầu cử mới
- Theo dõi trạng thái phê duyệt đề xuất
- Quản lý thời gian bầu cử
- Xem kết quả bầu cử
- Công bố kết quả chính thức

### 2. Ủy Ban Bầu Cử (Commission)
- Xem xét các đề xuất cuộc bầu cử
- Phê duyệt hoặc từ chối các đề xuất
- Theo dõi các cuộc bầu cử đang diễn ra
- Kiểm tra kết quả bầu cử
- Xác minh tính hợp lệ của cuộc bầu cử

### 3. Cử Tri (Voter)
- Xem danh sách các cuộc bầu cử đang diễn ra
- Tham gia bỏ phiếu trong các cuộc bầu cử
- Xem lịch sử bỏ phiếu cá nhân
- Xem kết quả cuộc bầu cử

## Quy Trình Bầu Cử

1. **Đề xuất cuộc bầu cử**: Admin tạo đề xuất cuộc bầu cử với thông tin chi tiết (tiêu đề, mô tả, thời gian).
2. **Phê duyệt**: Ủy ban bầu cử xem xét và phê duyệt đề xuất.
3. **Thêm ứng viên**: Admin thêm các ứng viên vào cuộc bầu cử.
4. **Mở cổng bỏ phiếu**: Cuộc bầu cử tự động bắt đầu theo thời gian đã cài đặt.
5. **Bỏ phiếu**: Cử tri tham gia bỏ phiếu cho ứng viên họ lựa chọn.
6. **Kết thúc bầu cử**: Cuộc bầu cử tự động kết thúc khi hết thời gian hoặc có thể kết thúc sớm bởi Admin.
7. **Công bố kết quả**: Admin công bố kết quả chính thức sau khi kiểm tra.

## Cài Đặt

### Yêu Cầu
- Node.js v14.0.0 hoặc cao hơn
- Truffle Framework v5.0.0 hoặc cao hơn
- Ganache hoặc một mạng Ethereum test (Rinkeby, Ropsten, etc.)
- MetaMask hoặc ví Ethereum tương thích

### Hướng Dẫn Cài Đặt

1. Clone repository:
```bash
```

2. Cài đặt các dependencies:
```bash
npm install
```

3. Compile các smart contracts:
```bash
truffle compile
```

4. Triển khai smart contracts (đảm bảo đã chạy Ganache):
```bash
truffle migrate --reset
```

5. Chạy ứng dụng:
```bash
npm start
```

## Hướng Dẫn Sử Dụng

### Dành cho Admin

1. Truy cập trang admin bằng tài khoản được cấp quyền admin
2. Tạo đề xuất cuộc bầu cử mới thông qua tab "Đề Xuất Cuộc Bầu Cử"
3. Quản lý ứng viên trong tab "Danh Sách Ứng Cử Viên"
4. Theo dõi kết quả trong tab "Kết Quả Bầu Cử"

### Dành cho Ủy Ban Bầu Cử

1. Truy cập trang ủy ban bầu cử bằng tài khoản được cấp quyền ủy ban
2. Xem và phê duyệt các đề xuất trong tab "Đề Xuất Chờ Duyệt"
3. Theo dõi các cuộc bầu cử đã phê duyệt trong tab "Cuộc Bầu Cử Đã Duyệt"

### Dành cho Cử Tri

1. Truy cập trang chủ hệ thống
2. Xem danh sách các cuộc bầu cử đang diễn ra
3. Chọn một cuộc bầu cử để tham gia
4. Bỏ phiếu cho ứng viên bạn chọn
5. Xem lịch sử bỏ phiếu cá nhân

## Bảo Mật

- Hệ thống sử dụng Metamask để xác thực người dùng
- Mỗi cử tri chỉ được bỏ phiếu một lần trong mỗi cuộc bầu cử
- Toàn bộ dữ liệu được lưu trữ trên blockchain Ethereum
- Không có quyền sửa đổi hoặc xóa phiếu bầu sau khi đã gửi
- Smart contract được thiết kế với các cơ chế bảo vệ chống lại các cuộc tấn công phổ biến

## Đóng Góp

Chúng tôi hoan nghênh mọi đóng góp! Hãy tạo pull request hoặc mở issue để báo cáo lỗi hoặc đề xuất tính năng mới.

## Giấy Phép

Dự án này được phân phối dưới Giấy phép MIT. Xem tệp `LICENSE` để biết thêm thông tin.
