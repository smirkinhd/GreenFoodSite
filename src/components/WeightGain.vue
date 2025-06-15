<template>
  <div class="app">
    <!-- Header -->
    <header>
      <div class="container">
        <div class="header-content">
          <router-link to="/" class="logo">
            <img src="/src/assets/logo.jpg" alt="GreenFood Logo">
            <h1>GreenFood</h1>
          </router-link>
          <router-link class="back-btn" to="/">Назад</router-link>
        </div>
      </div>
    </header>

    <!-- Week Selector -->
    <div class="container">
      <div class="week-selector">
        <button v-for="week in weeks" :key="week"
                class="week-btn"
                :class="{ active: selectedWeek === week }"
                @click="selectWeek(week)">
          Неделя {{ week }}
        </button>
      </div>
    </div>

    <!-- Program Page -->
    <section class="program-page">
      <div class="container">
        <div class="program-header">
          <h1>{{ program.name }}</h1>
          <span class="price">{{ program.price }}</span>
          <p>Высокобелковое питание для набора мышечной массы.</p>
        </div>

        <!-- Day Buttons -->
        <div class="week-days">
          <button v-for="day in days" :key="day.id"
                  class="day-btn"
                  :class="{ active: selectedDay === day.id }"
                  :data-day="day.id"
                  @click="selectDay(day.id)">
            {{ day.name }}
          </button>
        </div>

        <!-- Meals Grid -->
        <div class="day-meals" id="dayMeals">
          <div v-for="meal in weeklyMenu[selectedDay]" :key="meal.name" class="meal-card">
            <img :src="meal.image" :alt="meal.name">
            <div class="meal-info">
              <span class="meal-time">{{ meal.time }}</span>
              <h3>{{ meal.name }}</h3>
              <p class="meal-kbju">{{ meal.kbju }}</p>
            </div>
          </div>
        </div>

        <!-- Order Section -->
        <div class="order-section">
          <a href="#" class="order-btn" @click.prevent="orderProgram">Выбрать программу</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/src/assets/logo.jpg" alt="GreenFood Logo">
            <h3>GreenFood</h3>
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Оплата</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          © 2023 GreenFood. Все права защищены.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      programs: {
        1: {name: "Программа для набора массы", price: "3 000 ₽ / неделя" },
      },
      weeklyMenu: {
        monday: [
          {
            time: "Завтрак",
            name: "Овсяная каша с ягодами и орехами",
            kbju: "К: 350, Б: 12г, Ж: 10г, У: 50г",
            image: "/src/images/день_1_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Куриная грудка с гречкой и овощами",
            kbju: "К: 420, Б: 35г, Ж: 12г, У: 45г",
            image: "/src/images/день_1_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Творог с медом",
            kbju: "К: 250, Б: 20г, Ж: 8г, У: 15г",
            image: "/src/images/день_1_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Рыба на пару с брокколи",
            kbju: "К: 300, Б: 25г, Ж: 10г, У: 20г",
            image: "/src/images/день_1_ужин1.jpeg"
          }
        ],
        tuesday: [
          {
            time: "Завтрак",
            name: "Омлет с овощами и цельнозерновой хлеб",
            kbju: "К: 380, Б: 22г, Ж: 18г, У: 30г",
            image: "/src/images/день_2_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Индейка с булгуром и салатом",
            kbju: "К: 400, Б: 30г, Ж: 15г, У: 40г",
            image: "/src/images/день_2_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Йогурт с гранолой",
            kbju: "К: 280, Б: 12г, Ж: 10г, У: 35г",
            image: "/src/images/день_2_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Куриные котлеты с цветной капустой",
            kbju: "К: 350, Б: 28г, Ж: 15г, У: 25г",
            image: "/src/images/день_2_ужин1.jpeg"
          }
        ],
        wednesday: [
          {
            time: "Завтрак",
            name: "Гречневая каша с молоком",
            kbju: "К: 320, Б: 15г, Ж: 8г, У: 45г",
            image: "/src/images/день_3_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Говядина с киноа и овощами",
            kbju: "К: 450, Б: 35г, Ж: 18г, У: 35г",
            image: "/src/images/день_3_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Фруктовый салат",
            kbju: "К: 200, Б: 3г, Ж: 1г, У: 45г",
            image: "/src/images/день_3_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Тушеные овощи с курицей",
            kbju: "К: 320, Б: 25г, Ж: 12г, У: 30г",
            image: "/src/images/день_3_ужин1.jpeg"
          }
        ],
        thursday: [
          {
            time: "Завтрак",
            name: "Творожная запеканка с ягодами",
            kbju: "К: 350, Б: 20г, Ж: 12г, У: 30г",
            image: "/src/images/день_4_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Лосось с бурым рисом и спаржей",
            kbju: "К: 480, Б: 30г, Ж: 22г, У: 40г",
            image: "/src/images/день_4_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Орехи и сухофрукты",
            kbju: "К: 300, Б: 8г, Ж: 20г, У: 25г",
            image: "/src/images/день_4_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Овощное рагу с индейкой",
            kbju: "К: 380, Б: 28г, Ж: 15г, У: 35г",
            image: "/src/images/день_4_ужин1.jpeg"
          }
        ],
        friday: [
          {
            time: "Завтрак",
            name: "Смузи из банана, шпината и овсяных хлопьев",
            kbju: "К: 320, Б: 12г, Ж: 8г, У: 45г",
            image: "/src/images/день_5_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Телятина с картофелем и зеленью",
            kbju: "К: 420, Б: 32г, Ж: 15г, У: 40г",
            image: "/src/images/день_5_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Сырники с медом",
            kbju: "К: 280, Б: 18г, Ж: 10г, У: 25г",
            image: "/src/images/день_5_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Креветки с овощным салатом",
            kbju: "К: 350, Б: 30г, Ж: 12г, У: 20г",
            image: "/src/images/день_5_ужин1.jpeg"
          }
        ],
        saturday: [
          {
            time: "Завтрак",
            name: "Пшенная каша с тыквой",
            kbju: "К: 340, Б: 10г, Ж: 8, У: 55г",
            image: "/src/images/день_6_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Куриные бедра с киноа и овощами",
            kbju: "К: 430, Б: 35г, Ж: 35г, У: 15г, У",
            image: "/src/images/день_6_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Творожный десерт с фруктами",
            kbju: "К: 250, Б: 15г, Ж: 8г, У: 25г, У",
            image: "/src/images/день_6_перекус1.jpeg"
          },
          {
            time: "Ужин",
            name: "Запеченные овощи с сыром",
            kbju: "К: 320, Б: 12г, Ж: 18г, У: 25г",
            image: "/src/images/день_6_ужин1.jpeg"
          }
        ],
        sunday: [
          {
            time: "Завтрак",
            name: "Яичница с авокадо и цельнозерновым хлебом",
            kbju: "К: 380, Б: 18г, Ж: Ж22г, У: 25г",
            image: "/src/images/день_7_завтрак1.jpeg"
          },
          {
            time: "Обед",
            name: "Баранина с картофелем",
            kbju: "КГ: 480, Б: 30г, У: 35г",
            image: "/src/images/день_7_обед1.jpeg"
          },
          {
            time: "Полдник",
            name: "Протеиновый коктейль",
            kbju: "К: 280, Б: 25г,",
            image: "/src/images/день_7_перекус1.jpeg"
          },
          {
            time: "Ужинн",
            name: "Салат с тунцом и яйцом",
            kbju: "КК: 350, Б: 360,",
            image: "/src/images/день_7_ужин1.jpeg"
          }
        ]
      },
      days: [
        { id: 'monday', name: 'Понедельник' },
        { id: 'tuesday', name: 'Вторник' },
        { id: 'wednesday', name: 'Среда' },
        { id: 'thursday', name: 'Четверг' },
        { id: 'friday', name: 'Пятница' },
        { id: 'saturday', name: 'Суббота' },
        { id: 'sunday', name: 'Воскресенье' }
      ],
      weeks: [1, 2, 3],
      selectedDay: 'monday',
      selectedWeek: 1,
      programId: 1
    }
  },
  computed: {
    program() {
      return this.programs[this.programId] || this.programs[1]
    }
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day
    },
    selectWeek(week) {
      this.selectedWeek = week
    },
    orderProgram() {
      alert(`Вы выбрали программу "${this.program.name}" за ${this.program.price}. Перенаправляем на страницу оплаты...`)
    }
  },
  created() {
    // Get program ID from URL
    const urlParams = new URLSearchParams(window.location.search)
    this.programId = parseInt(urlParams.get('id')) || 1
  }
}
</script>

<style scoped>
/* Importing styles from styles.css */
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

.back-btn {
  display: inline-block;
  padding: 8px 15px;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s;
}

.back-btn:hover {
  background-color: var(--primary-dark);
}

.program-page {
  padding: 50px 0;
}

.program-header {
  text-align: center;
  margin-bottom: 40px;
}

.program-header h1 {
  font-size: 36px;
  color: var(--primary-dark);
  margin-bottom: 15px;
}

.program-header .price {
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 20px;
  display: block;
}

.program-header p {
  color: var(--dark-gray);
  max-width: 700px;
  margin: 0 auto;
}

.week-days {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.day-btn {
  padding: 10px 20px;
  background-color: var(--light-gray);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.day-btn.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.day-meals {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.meal-card {
  background-color: var(--light-gray);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.meal-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.meal-info {
  padding: 20px;
}

.meal-time {
  font-size: 14px;
  color: var(--primary-dark);
  font-weight: 500;
  margin-bottom: 5px;
}

.meal-info h3 {
  margin-bottom: 10px;
  color: var(--dark-gray);
}

.meal-kbju {
  font-size: 14px;
  color: var(--dark-gray);
  margin-bottom: 10px;
}

.order-section {
  text-align: center;
  padding: 30px 0;
  border-top: 1px solid #eee;
}

.order-btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.3s;
}

.order-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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

.copyright {
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
}

.week-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 30px;
  flex-wrap: wrap;
}

.week-btn {
  padding: 10px 20px;
  background-color: var(--light-gray);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.week-btn.active {
  background-color: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .program-header h1 {
    font-size: 28px;
  }
  .program-header .price {
    font-size: 20px;
  }
  .week-days {
    justify-content: flex-start;
  }
}

@media (max-width: 576px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }
  .program-header h1 {
    font-size: 24px;
  }
  .day-meals {
    grid-template-columns: 1fr;
  }
}
</style>