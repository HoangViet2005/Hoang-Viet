<template>
  <div>
    <button class="btn btn-primary" @click="showModal = true">Tài khoản</button>
    <div
      class="modal"
      tabindex="-1"
      v-if="showModal"
      @click.self="showModal = false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Quản lý Tài Khoản</h5>
            <button
              type="button"
              class="btn-close"
              @click="showModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Tabs Navigation -->
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: isActive('register') }"
                  @click="setActive('register')"
                  >Đăng Ký</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: isActive('login') }"
                  @click="setActive('login')"
                  >Đăng Nhập</a
                >
              </li>
            </ul>

            <!-- Registration Form -->
            <div v-if="activeTab === 'register'" class="mt-3">
              <h3>Form Đăng Ký Thông Tin</h3>
              <form @submit.prevent="handleRegister">
                <div class="mb-3">
                  <label for="name" class="form-label">Họ và Tên</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    v-model="registerForm.name"
                    placeholder="Nhập họ và tên"
                    required
                  />
                  <div v-if="errors.name" class="text-danger">
                    {{ errors.name }}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="registerForm.email"
                    placeholder="Nhập email"
                    required
                  />
                  <div v-if="errors.email" class="text-danger">
                    {{ errors.email }}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="phone" class="form-label">Số Điện Thoại</label>
                  <input
                    type="text"
                    id="phone"
                    class="form-control"
                    v-model="registerForm.phone"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                  <div v-if="errors.phone" class="text-danger">
                    {{ errors.phone }}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Mật Khẩu</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="registerForm.password"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                  <div v-if="errors.password" class="text-danger">
                    {{ errors.password }}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="confirmPassword" class="form-label"
                    >Xác Nhận Mật Khẩu</label
                  >
                  <input
                    type="password"
                    id="confirmPassword"
                    class="form-control"
                    v-model="registerForm.confirmPassword"
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                  <div v-if="errors.confirmPassword" class="text-danger">
                    {{ errors.confirmPassword }}
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Giới Tính:</label>
                  <div class="d-flex align-items-center">
                    <input
                      type="radio"
                      id="male"
                      value="Nam"
                      v-model="registerForm.gender"
                      required
                    />
                    <label for="male" class="ms-2">Nam</label>
                    <input
                      type="radio"
                      id="female"
                      value="Nữ"
                      v-model="registerForm.gender"
                      required
                      class="ms-3"
                    />
                    <label for="female" class="ms-2">Nữ</label>
                  </div>
                  <div v-if="errors.gender" class="text-danger">
                    {{ errors.gender }}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="language" class="form-label">Ngôn Ngữ</label>
                  <select
                    id="language"
                    class="form-select"
                    v-model="registerForm.language"
                    required
                  >
                    <option value="Vietnamese">Tiếng Việt</option>
                    <option value="English">English</option>
                  </select>
                </div>

                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    id="agreement"
                    class="form-check-input"
                    v-model="registerForm.agreement"
                    required
                  />
                  <label for="agreement" class="form-check-label"
                    >Tôi đồng ý với các điều khoản và điều kiện</label
                  >
                </div>

                <button type="submit" class="btn btn-primary">Đăng Ký</button>
              </form>
            </div>

            <!-- Login Form -->
            <div v-else class="mt-3">
              <h3>Form Đăng Nhập</h3>
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    class="form-control"
                    v-model="loginForm.email"
                    placeholder="Nhập email"
                    required
                  />
                  <div v-if="errors.loginEmail" class="text-danger">
                    {{ errors.loginEmail }}
                  </div>
                </div>

                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Mật Khẩu</label>
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    v-model="loginForm.password"
                    placeholder="Nhập mật khẩu"
                    required
                  />
                  <div v-if="errors.loginPassword" class="text-danger">
                    {{ errors.loginPassword }}
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab2Bai2",
  data() {
    return {
      showModal: false,
      activeTab: "register",
      registerForm: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        language: "Vietnamese",
        agreement: false,
      },
      loginForm: {
        email: "",
        password: "",
      },
      errors: {}, // Object to hold validation errors
    };
  },
  methods: {
    setActive(tab) {
      this.activeTab = tab; // Chuyển đổi tab
      this.errors = {}; // Reset errors when changing tab
    },
    isActive(tab) {
      return this.activeTab === tab; // Kiểm tra tab đang hoạt động
    },
    validateRegisterForm() {
      this.errors = {}; // Reset errors
      if (!this.registerForm.name) {
        this.errors.name = "Họ và tên là bắt buộc.";
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.registerForm.email) {
        this.errors.email = "Email là bắt buộc.";
      } else if (!emailPattern.test(this.registerForm.email)) {
        this.errors.email = "Email không hợp lệ.";
      }
      if (!this.registerForm.phone) {
        this.errors.phone = "Số điện thoại là bắt buộc.";
      }
      if (!this.registerForm.password) {
        this.errors.password = "Mật khẩu là bắt buộc.";
      } else if (this.registerForm.password.length < 6) {
        this.errors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
      }
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        this.errors.confirmPassword =
          "Mật khẩu và xác nhận mật khẩu không khớp.";
      }
      if (!this.registerForm.gender) {
        this.errors.gender = "Giới tính là bắt buộc.";
      }
      if (!this.registerForm.agreement) {
        this.errors.agreement =
          "Bạn phải đồng ý với các điều khoản và điều kiện.";
      }
      return Object.keys(this.errors).length === 0; // Return true if no errors
    },
    handleRegister() {
      if (!this.validateRegisterForm()) {
        return; // Don't proceed if validation fails
      }
      // Xử lý logic khi nhấn Đăng Ký
      console.log("Đăng ký:", this.registerForm);
      // Reset form sau khi đăng ký
      this.resetRegisterForm();
    },
    handleLogin() {
      this.errors = {}; // Reset errors
      // Basic validation for login
      if (!this.loginForm.email) {
        this.errors.loginEmail = "Email là bắt buộc.";
      }
      if (!this.loginForm.password) {
        this.errors.loginPassword = "Mật khẩu là bắt buộc.";
      }
      if (Object.keys(this.errors).length > 0) {
        return; // Don't proceed if validation fails
      }
      // Xử lý logic khi nhấn Đăng Nhập
      console.log("Đăng nhập:", this.loginForm);
      // Reset form sau khi đăng nhập
      this.resetLoginForm();
    },
    resetRegisterForm() {
      this.registerForm = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        language: "Vietnamese",
        agreement: false,
      };
      this.errors = {}; // Reset errors
    },
    resetLoginForm() {
      this.loginForm = {
        email: "",
        password: "",
      };
      this.errors = {}; // Reset errors
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  z-index: 1050;
}
.nav-tabs .nav-link.active {
  background-color: black;
  color: white;
}

.form-label {
  text-align: left;
  display: block;
}
.text-danger {
  font-size: 0.875rem; /* Thay đổi kích thước font chữ cho thông báo lỗi */
}
</style>
