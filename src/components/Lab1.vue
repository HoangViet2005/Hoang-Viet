<template>
  <body>
    <!-- Header Section -->
    <header class="bg-light border-bottom py-2">
      <nav class="navbar navbar-expand-sm navbar-light bg-light border-bottom">
        <div class="container">
          <a class="navbar-brand" href="Lab3Index.html">
            <img src="" alt="risk to rich" style="width: 150px" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navigation Menu -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/post">
                  <i class="fa-solid fa-list"></i> Bài viết
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-film"></i> Video
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-circle-info"></i> Giới thiệu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-calendar-days"></i> Sự kiện
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i class="fa-solid fa-user"></i> Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content Section -->
    <div class="container my-4">
      <div class="row">
        <!-- Sidebar Section -->
        <aside class="col-md-3">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="/img/avt.png"
                alt="Avatar"
                class="img-fluid rounded-circle mb-3"
                style="width: 80px"
              />
              <h5 class="card-title">Giới thiệu bản thân</h5>
              <p>Nguyễn Lê Hoàng Việt, sinh viên FPOLY QUY NHƠN</p>
              <p>Châm ngôn: "RISK TO RICH."</p>
            </div>
          </div>
          <div>
            <h5 class="mb-3">Chuyên mục</h5>
            <ul class="list-group">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Chế độ tập
                <span class="badge bg-primary rounded-pill">12</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Chế độ dinh dưỡng
                <span class="badge bg-primary rounded-pill">3</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Cẩm nang cuộc sống
                <span class="badge bg-primary rounded-pill">6</span>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Blog Section -->
        <section class="col-md-9">
          <h4 class="mb-3">Blog của tôi</h4>
          <div class="card mb-3">
            <img src="/img/rich.webp" class="card-img-top" alt="Blog Image" />
            <div class="card-body">
              <h5 class="card-title">
                Định nghĩa đánh giá rủi ro, phương pháp, định tính so với định
                lượng
              </h5>
              <p class="card-text">
                Đánh giá rủi ro là thuật ngữ chung được sử dụng trong nhiều
                ngành để xác định khả năng mất mát của một tài sản, khoản vay
                hoặc khoản đầu tư.
              </p>
              <button class="btn btn-primary">Xem thêm</button>
            </div>
          </div>
          <div class="list-group">
            <a
              href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <span>Biết ơn đời, đời sẽ thương ta</span>
              <span class="badge bg-primary rounded-pill">8</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <span>9 tác dụng tuyệt vời của quả cam</span>
              <span class="badge bg-primary rounded-pill">28</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <span>10 công dụng bất ngờ từ dứa</span>
              <span class="badge bg-primary rounded-pill">4</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <span>Lợi ích khi ăn rau mỗi ngày</span>
              <span class="badge bg-primary rounded-pill">12</span>
            </a>
          </div>
        </section>
      </div>

      <!-- Video Section -->
      <h4 class="mt-5 mb-3">VIDEO - ĐỪNG BỎ LỠ</h4>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="img/video1.jpg" class="card-img-top" alt="Video 1" />
            <div class="card-body">
              <p class="card-text">Đi xa hơn để trưởng thành hơn</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="img/video2.jpg" class="card-img-top" alt="Video 2" />
            <div class="card-body">
              <p class="card-text">Chút tâm tư những ngày cuối năm</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="img/video3.jpg" class="card-img-top" alt="Video 3" />
            <div class="card-body">
              <p class="card-text">Ước gì ta được trẻ và tươi thắm</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-dark text-center text-white py-3">
      <p>
        © Copyright by FPT Polytechnic Quy Nhơn, Bình Định, Việt Nam, Trái Đất
      </p>
    </footer>
  </body>
</template>

<script>
export default {
  name: "Lab1Page",
};
</script>

<style>
#carouselExample .carousel-inner img {
  max-height: 400px;
  object-fit: cover;
}
</style>
