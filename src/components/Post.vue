<template>
  <div class="container-fluid p-0">
    <!-- Navbar with dark background and custom shadow -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary shadow-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="/img/Screenshot 2024-11-09 223224.png"
            alt="Risk to Rich"
            width="110"
            height="40"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active text-warning" href="#">
                <i class="bi bi-list"></i> Bài viết
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                <i class="bi bi-camera-video"></i> Video
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                <i class="bi bi-info-circle"></i> Giới thiệu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                <i class="bi bi-calendar-event"></i> Sự kiện
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle"></i> Tài khoản
              </a>
              <ul class="dropdown-menu bg-primary">
                <li>
                  <a class="dropdown-item text-light" href="#">Đăng nhập</a>
                </li>
                <li>
                  <a class="dropdown-item text-light" href="#">Quên mật khẩu</a>
                </li>
                <li>
                  <a class="dropdown-item text-light" href="#"
                    >Đăng ký thành viên</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid p-0">
      <img src="/img/poster1.jpg" class="img-fluid w-100" alt="Banner" />
    </div>

    <!-- Main content with rounded corners and background -->
    <div class="container mt-4">
      <div class="row">
        <!-- Sidebar for categories and featured posts -->
        <div class="col-md-3">
          <h5 class="text-info">Chuyên mục</h5>
          <ul class="list-group mb-4">
            <li
              class="list-group-item d-flex justify-content-between align-items-center bg-info text-white"
            >
              <a href="#" class="text-white">Chế độ tập</a>
              <span class="badge bg-warning rounded-pill">12</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a href="#" class="text-dark">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <a href="#" class="text-dark">Cẩm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">8</span>
            </li>
          </ul>

          <h5 class="text-info">Bài viết nổi bật</h5>
          <ul class="list-group">
            <li class="list-group-item">
              <img
                src="img/poster1.jpg"
                alt="Lợi ích khi ăn rau mỗi ngày"
                class="img-fluid rounded-circle me-2"
                width="50"
              />
              <a href="#" class="text-dark">Lợi ích khi ăn rau mỗi ngày</a>
            </li>
            <li class="list-group-item">
              <img
                src="img/poster2.jpg"
                alt="9 tác dụng tuyệt vời của cam"
                class="img-fluid rounded-circle me-2"
                width="50"
              />
              <a href="#" class="text-dark">9 tác dụng tuyệt vời của cam</a>
            </li>
            <li class="list-group-item">
              <img
                src="img/poster3.jpg"
                alt="10 công dụng bất ngờ của chuối"
                class="img-fluid rounded-circle me-2"
                width="50"
              />
              <a href="#" class="text-dark">10 công dụng bất ngờ của chuối</a>
            </li>
          </ul>
        </div>

        <!-- Main content for blog posts -->
        <div class="col-md-9">
          <h5 class="text-info">Tất cả bài viết</h5>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="/img/rich.webp" class="card-img-top" alt="Post 1" />
                <div class="card-body">
                  <h6 class="card-title">Risk to Rich là gì?</h6>
                  <p class="card-text">
                    "Risk to Rich" là một khái niệm thường được sử dụng trong
                    lĩnh vực tài chính, đầu tư và khởi nghiệp, đề cập đến quá
                    trình chấp nhận rủi ro để đạt được thành công và tạo ra sự
                    giàu có.
                  </p>
                </div>
              </div>
            </div>
            <!-- Add more cards for additional posts -->
          </div>
          <!-- Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-light text-center py-3">
      © Copyright by FPT Polytechnic
    </footer>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
};
</script>
