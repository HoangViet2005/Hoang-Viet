<template>
  <nav>
    <h1>Nav Bar</h1>
    <ul>
      <li><a href="/lab1">Lab1</a></li>
      <li><a href="/lab2">Lab2Bai1</a></li>
      <li><a href="/lab2Bai2">Lab2Bai2</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa; /* Màu nền của navbar */
}

nav h1 {
  margin: 0;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin-left: auto; /* Đẩy danh sách menu sang bên phải */
  padding: 0;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #007bff; /* Màu khi hover */
}
</style>
