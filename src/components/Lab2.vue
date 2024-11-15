<template>
  <div class="container mt-5">
    <div class="table-wrapper">
      <h2 class="text-center text-danger mb-4">Bảng Thành Phần Dinh Dưỡng</h2>
      <table class="table table-bordered nutrition-table">
        <thead class="bg-warning text-center">
          <tr>
            <th rowspan="2" class="align-middle">Thành Phần</th>
            <th colspan="2">Giá Trị</th>
          </tr>
          <tr>
            <th>Khối Lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>200 kcal</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Béo</td>
            <td>9 g</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>Chất Béo Bão Hòa</td>
            <td>4 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Đạm</td>
            <td>8 g</td>
            <td>16%</td>
          </tr>
          <tr>
            <td>Chất Xơ</td>
            <td>5 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Đường</td>
            <td>12 g</td>
            <td>6%</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">Vitamin</td>
            <td>Vitamin C</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Vitamin D</td>
            <td>10%</td>
          </tr>
        </tbody>
      </table>
      <p class="text-muted text-center mt-3">
        * Giá trị hàng ngày (DV) dựa trên một chế độ ăn 2000 kcal/ngày.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab2Page",
};
</script>

<style scoped>
/* Định dạng bảng */
.nutrition-table th,
.nutrition-table td {
  vertical-align: middle;
  padding: 10px;
}

.nutrition-table thead th {
  font-weight: bold;
}

.bg-warning {
  background-color: burlywood !important;
}

.text-danger {
  color: blanchedalmond !important;
}

.container {
  max-width: 600px;
}

.table-wrapper {
  border: 2px solid #c2bdbd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
