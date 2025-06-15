<template>
  <div>
    <!-- Header -->
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="/src/assets/logo.jpg" alt="GreenFood Logo">
            <h1>GreenFood</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#programs">Программы</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#reviews">Отзывы</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <div class="auth-buttons" id="authButtons" v-if="!currentUser">
            <button class="login-btn" id="loginBtn">Вход</button>
            <button class="register-btn" id="registerBtn">Регистрация</button>
          </div>
          <div class="user-menu" id="userMenu" v-else>
            <div class="user-avatar" @click="toggleDropdown">
              {{ currentUser.name.charAt(0).toUpperCase() }}
            </div>
            <span>{{ currentUser.name }}</span>
            <div class="user-dropdown" v-show="dropdownVisible">
              <a href="#" @click.prevent="goToProfile">Мой профиль</a>
              <a href="#" @click.prevent="logout">Выйти</a>
            </div>
          </div>
          <div class="user-menu" id="userMenu" style="display: none;">
            <div class="user-avatar" id="userAvatar"></div>
            <span id="userName"></span>
            <div class="user-dropdown" id="userDropdown">
              <a href="#" id="userProfileLink">Мой профиль</a>
              <a href="#" id="logoutBtn">Выйти</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <h2>Здоровое питание</h2>
          <p>5 сбалансированных программ питания с доставкой</p>
          <a href="#programs" class="cta-button">Выбрать программу</a>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section" id="programs">
      <div class="container">
        <div class="section-title">
          <h2>Наши программы питания</h2>
          <p>Выберите подходящую программу для ваших целей</p>
        </div>
        <div class="programs-grid">
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Программа 1">
            <div class="program-info">
              <h3>Стандарт</h3>
              <p>Сбалансированное питание для поддержания веса</p>
              <span class="price">2 500 ₽ / неделя</span>
              <router-link class="view-btn" to="/standart_program">Подробнее</router-link>
            </div>
          </div>
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Программа 2">
            <div class="program-info">
              <h3>Похудение</h3>
              <p>Низкокалорийное питание для снижения веса</p>
              <span class="price">2 800 ₽ / неделя</span>
              <router-link class="view-btn" to="/weight_loss_program">Подробнее</router-link>
            </div>
          </div>
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Программа 3">
            <div class="program-info">
              <h3>Набор массы</h3>
              <p>Высокобелковое питание для набора мышечной массы</p>
              <span class="price">3 000 ₽ / неделя</span>
              <router-link class="view-btn" to="/weight_gain_program">Подробнее</router-link>
            </div>
          </div>
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Программа 4">
            <div class="program-info">
              <h3>Вегетарианская</h3>
              <p>Сбалансированное питание без мяса</p>
              <span class="price">2 700 ₽ / неделя</span>
              <router-link class="view-btn" to="/vegetarian_program">Подробнее</router-link>
            </div>
          </div>
          <div class="program-card">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Программа 6">
            <div class="program-info">
              <h3>Детокс</h3>
              <p>Очищающая программа с акцентом на овощи и смузи</p>
              <span class="price">2 900 ₽ / неделя</span>
              <router-link class="view-btn" to="/detox_program">Подробнее</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="/src/assets/logo.jpg" alt="О GreenFood">
          </div>
          <div class="about-text">
            <h2>О нас</h2>
            <p>GreenFood - это сервис доставки правильного питания в Уфе, который помогает людям питаться сбалансированно и вкусно без лишних хлопот.</p>
            <p>Мы готовим из свежих, качественных продуктов и доставляем готовые блюда прямо к вашей двери. Наши повара - профессионалы с многолетним опытом в области здорового питания.</p>
            <div class="features">
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-leaf"></i>
                </div>
                <div class="feature-text">
                  <h4>Свежие продукты</h4>
                  <p>Используем только свежие и качественные ингредиенты</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-utensils"></i>
                </div>
                <div class="feature-text">
                  <h4>Профессиональные повара</h4>
                  <p>Наши блюда готовят опытные шеф-повара</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon">
                  <i class="fas fa-truck"></i>
                </div>
                <div class="feature-text">
                  <h4>Быстрая доставка</h4>
                  <p>Доставляем в удобное для вас время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section" id="reviews">
      <div class="container">
        <div class="section-title">
          <h2>Отзывы наших клиентов</h2>
          <p>Что говорят люди о нашем сервисе</p>
        </div>
        <div class="reviews-container">
          <div class="review-card">
            <div class="review-header">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Анна" class="review-avatar">
              <div class="review-info">
                <h4>Анна К.</h4>
                <div class="review-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="review-text">"Заказываю программу "Похудение" уже третий месяц. Результат - минус 8 кг! Блюда очень вкусные, разнообразные, никогда не надоедают. Особенно нравятся супы и салаты. Доставка всегда вовремя."</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Дмитрий" class="review-avatar">
              <div class="review-info">
                <h4>Дмитрий С.</h4>
                <div class="review-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="review-text">"Как спортсмену мне важно правильное питание. Программа "Набор массы" от GreenFood - это именно то, что нужно. Калорийность, баланс БЖУ и вкус на высоте. За 2 месяца прибавил 5 кг чистой массы!"</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Елена" class="review-avatar">
              <div class="review-info">
                <h4>Елена В.</h4>
                <div class="review-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p class="review-text">"Вегетарианская программа просто прекрасна! Столько вкусных и необычных блюд, которые я бы никогда не приготовила сама. Очень удобно, что не нужно думать о готовке после работы. Рекомендую!"</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Иван" class="review-avatar">
              <div class="review-info">
                <h4>Иван П.</h4>
                <div class="review-stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="review-text">"Попробовал Keto-программу и влюбился! Блюда сытные, вкусные и действительно помогают держаться в кетозе. За месяц сбросил 6 кг без чувства голода. Теперь только GreenFood!"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="section-title">
          <h2>Часто задаваемые вопросы</h2>
          <p>Ответы на самые популярные вопросы о нашем сервисе</p>
        </div>
        
        <div class="faq-container">
          <div class="faq-item">
            <div class="faq-question">
              <span>Как происходит доставка?</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Мы доставляем готовые блюда ежедневно с 7:00 до 22:00 в удобное для вас время. Доставка осуществляется по всему городу Уфа. Вы можете выбрать удобный интервал доставки при оформлении заказа.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Как хранить блюда?</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Все блюда упакованы в герметичные контейнеры и могут храниться в холодильнике до 3 дней. Некоторые блюда можно заморозить (информация указана на упаковке). Перед употреблением просто разогрейте блюдо в микроволновке или на плите.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Можно ли изменить программу питания?</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Да, вы можете изменить программу питания перед началом следующей недели. Для этого свяжитесь с нашим менеджером по телефону или через личный кабинет.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Есть ли пробный период?</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Мы предлагаем пробный день - вы можете заказать питание на один день, чтобы оценить качество наших блюд и сервиса.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Как отменить подписку?</span>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Вы можете отменить подписку в любое время через личный кабинет или связавшись с нашим менеджером. Отмена возможна до начала следующей недели питания.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-contacts">
            <h3>Контакты</h3>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <a href="tel:+79871097603">+7 (987) 109-76-03</a>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:aigulmunasipova8@mail.ru">aigulmunasipova8@mail.ru</a>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>г. Уфа, Кооперативный переулок, д. 20</span>
            </div>
          </div>
          <div class="footer-links">
            <h3>Быстрые ссылки</h3>
            <ul>
              <li><a href="#programs">Программы</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#reviews">Отзывы</a></li>
              <li><a href="#faq">Вопросы</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          © 2025 GreenFood.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GreenFood',
  data() {
    return {
      currentUser: null,
      dropdownVisible: false
    }
  },
  mounted() {
    this.checkAuth();
    this.setupEventListeners();
    this.setupFAQAccordion();
    this.setupSmoothScrolling();
  },
  methods: {

    checkAuth() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const authButtons = document.getElementById('authButtons');
      const userMenu = document.getElementById('userMenu');
      const userName = document.getElementById('userName');
      const userAvatar = document.getElementById('userAvatar');
      
      if (currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'flex';
        userName.textContent = currentUser.name;
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
      } else {
        authButtons.style.display = 'block';
        userMenu.style.display = 'none';
      }
    },

    // Настройка обработчиков событий
    setupEventListeners() {
      const loginBtn = document.getElementById('loginBtn');
      const registerBtn = document.getElementById('registerBtn');
      const logoutBtn = document.getElementById('logoutBtn');
      const userAvatar = document.getElementById('userAvatar');
      
      if (loginBtn) {
        loginBtn.addEventListener('click', () => {
          window.location.href = 'login';
        });
      }
      
      if (registerBtn) {
        registerBtn.addEventListener('click', () => {
          window.location.href = 'register';
        });
      }
      
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('currentUser');
          this.checkAuth();
          window.location.href = 'index.html';
        });
      }

      if (userAvatar) {
        userAvatar.addEventListener('click', () => {
          document.getElementById('userDropdown').classList.toggle('show');
        });
      }

      window.addEventListener('click', (e) => {
        if (!e.target.matches('.user-avatar')) {
          const dropdown = document.getElementById('userDropdown');
          if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        }
      });
    },

    // Настройка аккордеона FAQ
    setupFAQAccordion() {
      const faqQuestions = document.querySelectorAll('.faq-question');
      
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          // Закрываем все открытые вопросы
          faqQuestions.forEach(q => {
            if (q !== question && q.classList.contains('active')) {
              q.classList.remove('active');
              const answer = q.nextElementSibling;
              answer.style.maxHeight = null;
              answer.style.padding = '0 20px';
            }
          });

          // Открываем/закрываем текущий вопрос
          question.classList.toggle('active');
          const answer = question.nextElementSibling;
          
          if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '20px';
          } else {
            answer.style.maxHeight = null;
            answer.style.padding = '0 20px';
          }
        });
      });
    },

    // Плавная прокрутка для якорных ссылок
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
    },

    // Модальное окно (если будет использоваться)
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    },

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style>
:root {
  --primary-color: #4CAF50;
  --primary-light: #81C784;
  --primary-dark: #388E3C;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --dark-gray: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--white);
  color: var(--dark-gray);
  line-height: 1.6;
}

header {
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 15px 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo h1 {
  color: var(--primary-dark);
  font-size: 24px;
  font-weight: 700;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 25px;
}

nav ul li a {
  text-decoration: none;
  color: var(--dark-gray);
  font-weight: 500;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: var(--primary-color);
}

.auth-buttons button {
  padding: 8px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  margin-left: 10px;
}

.login-btn {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.login-btn:hover {
  background-color: var(--primary-light);
  color: var(--white);
}

.register-btn {
  background-color: var(--primary-color);
  color: var(--white);
}

.register-btn:hover {
  background-color: var(--primary-dark);
}

.hero {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 70px;
}

.hero-content {
  width: 100%;
}

.hero h2 {
  font-size: 48px;
  color: var(--primary-dark);
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-in-out;
}

.hero p {
  font-size: 20px;
  color: var(--dark-gray);
  margin-bottom: 30px;
  animation: fadeIn 2s ease-in-out;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s;
  animation: fadeIn 2.5s ease-in-out;
}

.cta-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.programs-section {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 36px;
  color: var(--primary-dark);
  margin-bottom: 15px;
}

.section-title p {
  color: var(--dark-gray);
  font-size: 18px;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.program-card {
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.program-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.program-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.program-info {
  padding: 20px;
}

.program-info h3 {
  color: var(--primary-dark);
  margin-bottom: 10px;
}

.program-info p {
  color: var(--dark-gray);
  margin-bottom: 15px;
  font-size: 14px;
}

.program-info .price {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 18px;
  margin-bottom: 15px;
  display: block;
}

.view-btn {
  display: inline-block;
  padding: 8px 20px;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s;
}

.view-btn:hover {
  background-color: var(--primary-dark);
}

.about-section {
  padding: 80px 0;
  background-color: var(--white);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 36px;
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 20px;
  color: var(--dark-gray);
}

.features {
  margin-top: 30px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.feature-icon {
  background-color: var(--primary-light);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--white);
  font-size: 20px;
}

.feature-text h4 {
  color: var(--primary-dark);
  margin-bottom: 5px;
}

.reviews-section {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.reviews-container {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
}

.review-card {
  min-width: 300px;
  background-color: var(--white);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.review-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.review-info h4 {
  color: var(--primary-dark);
  margin-bottom: 5px;
}

.review-stars {
  color: #FFC107;
  font-size: 14px;
}

.review-text {
  color: var(--dark-gray);
  font-style: italic;
}

.faq-section {
  padding: 80px 0;
  background-color: var(--white);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  padding: 15px 20px;
  background-color: var(--primary-light);
  color: var(--white);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.faq-answer {
  padding: 20px;
  background-color: var(--light-gray);
  display: none;
}

.faq-question.active + .faq-answer {
  display: block;
}

.contact-section {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.contact-container {
  display: flex;
  gap: 50px;
}

.contact-info {
  flex: 1;
}

.contact-info h2 {
  font-size: 36px;
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.contact-info p {
  margin-bottom: 30px;
  color: var(--dark-gray);
}

.contact-details {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--white);
  font-size: 18px;
}

.contact-map {
  flex: 1;
}

.contact-map iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

footer {
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 30px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo img {
  height: 30px;
  margin-right: 10px;
}

.footer-logo h3 {
  font-size: 20px;
}

.footer-links ul {
  display: flex;
  list-style: none;
}

.footer-links ul li {
  margin-left: 20px;
}

.footer-links ul li a {
  color: var(--white);
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-links ul li a:hover {
  opacity: 0.8;
}

.social-links {
  margin-top: 20px;
}

.social-links a {
  display: inline-block;
  margin: 0 10px;
  color: var(--white);
  font-size: 20px;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 0.8;
}

.copyright {
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
}

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: var(--white);
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: modalFadeIn 0.3s;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: var(--dark-gray);
}

.modal-title {
  font-size: 24px;
  color: var(--primary-dark);
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--dark-gray);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: var(--primary-color);
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: var(--primary-dark);
}

/* Program details modal */
.program-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.program-modal-content {
  background-color: var(--white);
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: modalFadeIn 0.3s;
}

.program-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.program-modal-title {
  font-size: 24px;
  color: var(--primary-dark);
}

.program-days {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.day-btn {
  padding: 8px 15px;
  background-color: var(--light-gray);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.day-btn.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.day-meals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.meal-card {
  background-color: var(--light-gray);
  border-radius: 8px;
  overflow: hidden;
}

.meal-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.meal-info {
  padding: 15px;
}

.meal-info h4 {
  color: var(--primary-dark);
  margin-bottom: 10px;
}

.meal-kbju {
  font-size: 14px;
  color: var(--dark-gray);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive styles */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
  
  .contact-container {
    flex-direction: column;
  }
  
  .contact-map {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  nav ul {
    margin-top: 15px;
    flex-wrap: wrap;
  }
  
  nav ul li {
    margin: 5px 15px 5px 0;
  }
  
  .auth-buttons {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  
  .hero h2 {
    font-size: 36px;
  }
  
  .hero p {
    font-size: 18px;
  }
  
  .footer-content {
    flex-direction: column;
  }
  
  .footer-links {
    margin: 20px 0;
  }
  
  .footer-links ul {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .hero h2 {
    font-size: 28px;
  }
  
  .hero p {
    font-size: 16px;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .programs-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    width: 95%;
  }
}

.user-menu {
  display: flex;
  align-items: center;
  position: relative;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--white);
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 5px;
  z-index: 1;
  padding: 10px 0;
}

.user-dropdown.show {
  display: block;
}

.user-dropdown a {
  color: var(--dark-gray);
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s;
}

.user-dropdown a:hover {
  background-color: var(--light-gray);
}
</style>