<template>
  <div class="container">
    <div class="auth-card">
      <div class="logo">
        <img src="/src/assets/logo.jpg" alt="GreenFood Logo">
        <h1>GreenFood</h1>
      </div>
      
      <h2 class="auth-title">Вход в аккаунт</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="loginPhone">Номер телефона</label>
          <input 
            type="tel" 
            id="loginPhone" 
            v-model="phone" 
            required 
            placeholder="+7 (XXX) XXX-XX-XX"
            @input="formatPhone"
          >
          <div class="error-message" v-show="phoneError">{{ phoneError }}</div>
        </div>
        
        <div class="form-group">
          <label for="loginPassword">Пароль</label>
          <input 
            type="password" 
            id="loginPassword" 
            v-model="password" 
            required
          >
          <div class="error-message" v-show="passwordError">{{ passwordError }}</div>
        </div>

        <div class="error-message" v-show="loginError">{{ loginError }}</div>
        
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Вход...' : 'Войти' }}
        </button>
      </form>
      
      <div class="auth-footer">
        Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
      phoneError: '',
      passwordError: '',
      loginError: '',
      loading: false
    }
  },
  methods: {
    formatPhone() {
      let cleaned = this.phone.replace(/\D/g, '');
      if (cleaned.startsWith('7') || cleaned.startsWith('8')) {
        cleaned = cleaned.slice(1);
      }
      let match = cleaned.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      this.phone = '+7' + 
        (match[1] ? ' (' + match[1] : '') +
        (match[2] ? ') ' + match[2] : '') +
        (match[3] ? '-' + match[3] : '') +
        (match[4] ? '-' + match[4] : '');
    },
    validateForm() {
      this.phoneError = '';
      this.passwordError = '';

      let isValid = true;

      if (!this.phone.match(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/)) {
        this.phoneError = 'Введите корректный номер телефона';
        isValid = false;
      }

      if (this.password.length < 6) {
        this.passwordError = 'Пароль должен содержать минимум 6 символов';
        isValid = false;
      }

      return isValid;
    },
    async handleSubmit() {
  if (!this.validateForm()) return;

  this.loading = true;
  this.loginError = '';

  try {
    // Убираем всё, кроме цифр (например, +7 (916) → 7916)
    const cleanPhone = this.phone.replace(/\D/g, '');

    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: cleanPhone, 
        password: this.password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message); 
    }

    this.$router.push('/');

  } catch (error) {
    this.loginError = error.message;
    this.password = ''; // Очищаем поле пароля для безопасности
  } finally {
    this.loading = false;
  }
}
  }
}
</script>

<style scoped>
@import '../styles/Login/styles.css';

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>