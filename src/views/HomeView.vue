<template>
  <header class="site-header">
    <div class="container">
      <!-- 左邊：Logo + 分類 -->
      <div class="left">
        <h1 class="logo">玩拍</h1>
        <nav class="main-nav">
          <ul>
            <li class="dropdown" v-for="item in categories" :key="item.name">
              <a href="#">{{ item.name }}</a>
              <ul class="sub-menu">
                <li v-for="sub in item.sub" :key="sub"><a href="#">{{ sub }}</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 右邊：功能按鈕 -->
      <div class="right">
        <div class="search-group">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜尋..." class="search-input" />
        </div>
        <a href="#">登入</a>
        <a href="#">❤️</a>
        <a href="#"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </div>
  </header>
</template>

<script setup>
const categories = [
  { name: '模型', sub: ['子項 1-1', '子項 1-2'] },
  { name: '公仔', sub: ['子項 2-1', '子項 2-2'] },
  { name: '玩偶', sub: ['子項 3-1', '子項 3-2'] },
  { name: '景品', sub: ['子項 4-1', '子項 4-2'] },
  { name: '總分類', sub: ['子項 5-1', '子項 5-2'] }
]
</script>

<style scoped>

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.site-header {
  background-color: #52C197;
  color: white;
  padding: 1rem;
  height: 50px;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center; /* ✅ 加上這行讓垂直置中 */
  flex-wrap: nowrap;   /* ✅ 禁止換行，全部塞一行 */
}

.left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  font-size: 1.5rem;
  margin: 0;
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: -15px;
  padding: 0;
}

.main-nav a {
  color: white;
  text-decoration: none;
  position: relative;
  padding: 0.2rem;

}

.dropdown {
  position: relative;
}

.sub-menu {
  position: absolute;
  top: calc(100% + 1.5rem);
  left: 0;
  background-color: white;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 0; /* 收起時不留空間 */
  z-index: 10;
}

.dropdown:hover .sub-menu {
  max-height: 300px;  /* 足夠容納所有子選單 */
  opacity: 1;
  padding: 0.5rem 0;
}


.sub-menu li {
  padding: 0.3rem 1rem;
}

.sub-menu li a {
  color: black;
  text-decoration: none;
}

.dropdown:hover .sub-menu {
  display: flex;
}

.right {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  white-space: nowrap;
}

/* 右側按鈕 */
.right a {
  color: black;
  text-decoration: none;
  margin-left: 1rem;
}

.right a i {
  font-size: 1.2rem;
  color: black;
  transition: transform 0.3s ease;
}

.right a:hover i {
  transform: scale(1.2);
  color: #52C197;
}


.search-group {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 0.1rem 0.6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-right: 1rem;
}

.search-group:focus-within {
  box-shadow: 0 0 0 3px #c1f2e3;
  transform: scale(1.05);
}

.search-icon {
  margin-right: 0.4rem;
  font-size: 0.9rem;
  color: #666;
}

.search-input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  width: 80px;
  height: 5px;
  transition: width 0.3s ease;
  background: transparent;
  color: black;
}

.search-input:focus {
  width: 140px;
  height: 5px;
}

</style>
