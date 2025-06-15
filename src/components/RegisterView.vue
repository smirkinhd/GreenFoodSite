<template>
  <div class="container">
    <div class="auth-card">
      <div class="logo">
        <h1>GreenFood</h1>
      </div>

      <h2 class="auth-title">Создайте аккаунт</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group" v-for="field in fields" :key="field.name">
          <label :for="field.name">{{ field.label }}</label>
          <input
            :type="field.type"
            :id="field.name"
            v-model="form[field.name]"
            :placeholder="field.placeholder || ''"
            :required="field.required"
            :minlength="field.minlength"
            @input="field.name === 'phone' && formatPhone"
          />
          <div class="error-message" v-if="errors[field.name]">{{ errors[field.name] }}</div>
        </div>

        <button type="submit" class="submit-btn">Зарегистрироваться</button>
      </form>

      <div class="auth-footer">
        Уже есть аккаунт? <router-link to="/login">Войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        password: ''
      },
      errors: {},
      fields: [
        { name: 'name', label: 'Имя', type: 'text', required: true },
        { name: 'phone', label: 'Номер телефона', type: 'tel', required: true, placeholder: '+7 (XXX) XXX-XX-XX' },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'password', label: 'Пароль', type: 'password', required: true, minlength: 6 }
      ]
    };
  },
  methods: {
    formatPhone() {
      let cleaned = this.form.phone.replace(/\D/g, '');
      let match = cleaned.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      this.form.phone = '+7' + 
        (match[2] ? ' (' + match[2] : '') +
        (match[3] ? ') ' + match[3] : '') +
        (match[4] ? '-' + match[4] : '') +
        (match[5] ? '-' + match[5] : '');
    },
    validateForm() {
      this.errors = {};
      const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.form.name.length < 2) {
        this.errors.name = 'Имя должно содержать минимум 2 символа';
      }

      if (!phoneRegex.test(this.form.phone)) {
        this.errors.phone = 'Введите корректный номер телефона';
      }

      if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Введите корректный email';
      }

      if (this.form.password.length < 6) {
        this.errors.password = 'Пароль должен содержать минимум 6 символов';
      }

      return Object.keys(this.errors).length === 0;
    },
    async handleSubmit() {
      if (!this.validateForm()) return;

      try {
        const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        });

        const data = await response.json();

        if (data.success) {
          alert(data.message);
          this.$router.push('/login');
        } else if (data.errors) {
          this.errors = data.errors;
        } else {
          alert('Произошла ошибка при регистрации');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('Произошла ошибка при соединении с сервером');
      }
    }
  }
};
</script>

<style scoped>
@import '../styles/Register/styles.css';
</style>
