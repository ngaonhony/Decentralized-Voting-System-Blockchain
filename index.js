const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();


// Middleware để xác thực người dùng
const authorizeUser = (req, res, next) => {
  // Lấy token từ header Authorization
  const token = req.query.Authorization?.split('Bearer ')[1];

  // Nếu không có token, trả về lỗi 401 và thông báo cần đăng nhập
  if (!token) {
    return res.status(401).send('<h1 align="center"> Login to Continue </h1>');
  }
  
  try {
    // Xác thực và giải mã token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] });

    // Gán người dùng đã giải mã vào req.user để sử dụng sau này
    req.user = decodedToken;
    next(); // Tiếp tục đến middleware tiếp theo
  } catch (error) {
    // Nếu có lỗi trong quá trình xác thực token, trả về lỗi 401 và thông báo token không hợp lệ
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/login.html'));
});

app.get('/js/login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/login.js'))
});

app.get('/css/login.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/login.css'))
});

app.get('/css/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/index.css'))
});

app.get('/css/admin.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/admin.css'))
});

app.get('/assets/eth5.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/eth5.jpg'))
});

app.get('/js/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/app.js'))
});

app.get('/admin.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/admin.html'));
});

app.get('/index.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.get('/dist/login.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/login.bundle.js'));
});

app.get('/dist/app.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/app.bundle.js'));
});

// Serve the favicon.ico file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

app.get('/test.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/test.html'));
});

// Thêm route để phục vụ file test.js
app.get('/js/test.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/test.js'));
});

// Thêm route cho trang Ủy ban bầu cử (Commission)
app.get('/commission.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/commission.html'));
});

// Route cho CSS của trang Commission
app.get('/css/commission.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/commission.css'));
});

// Route cho CSS của trang Commission Intro
app.get('/css/commission-intro.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/commission-intro.css'));
});

// Route cho thư mục components
app.get('/html/components/:file', (req, res) => {
  res.sendFile(path.join(__dirname, `src/html/components/${req.params.file}`));
});

// Route cho controller của Commission
app.get('/js/controllers/commission-controller.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/controllers/commission-controller.js'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
