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
          <span class="search-icon">
            <svg style="width: 14px; height: 14px; color: #555;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
          <input type="text" placeholder="搜尋..." class="search-input" />
        </div>
        <a href="#">登入</a>
        <a href="#">
            <svg style="width: 20px; height: 20px; padding-top: 4px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

        </a>
        <a href="#" class="text-black">
          <svg style="width: 13px; height: 13px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
             <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>

        </a>
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
  padding: 0.5rem;
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
  margin: -13px;
  padding: 0;
}

.main-nav a {
  color: black;
  text-decoration: none;
  position: relative;
  padding: 0.2rem;
  font-size: 0.7rem;
}

.dropdown {
  position: relative;
}

.sub-menu {
  position: absolute;
  top: calc(100% + 1.72rem);
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


.sub-menu li {
  padding: 4px 10px;
  margin: 0;
  line-height: 1.2px;
}

.sub-menu li a {
  padding: 0;
  margin: 0;
  color: black;
  text-decoration: none;
  display: block;
  width: 100%;
}

.dropdown:hover .sub-menu {
  display: flex;
}

.right {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  font-size: 0.7rem;
}

/* 右側按鈕 */
.right a {
  color: black;
  text-decoration: none;
  margin-left: 0.6rem;
}

.right a i {
  font-size: 0.7rem;
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
  font-size: 0.6rem;
  width: 60px;
  height: 16px;
  transition: width 0.3s ease;
  background: transparent;
  color: black;
  line-height: 1.2;
  padding: 2px 0;
}

.search-input:focus {
  width: 140px;
  height: 18px;
  font-size: 0.6rem;
}

</style>
