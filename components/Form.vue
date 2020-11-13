<template>
  <form class="form">
    <div class="form_row">
      <div class="group">
        <input v-model="name" type="text" required placeholder="placeholder" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name *</label>
      </div>

      <div class="group">
        <input
          v-model="email"
          type="email"
          required
          placeholder="placeholder"
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email *</label>
      </div>
    </div>

    <div class="form_row">
      <div class="group">
        <input v-model="tel" type="tel" required placeholder="placeholder" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Tel. *</label>
      </div>

      <div class="group">
        <input v-model="company" type="text" placeholder="placeholder" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Company</label>
      </div>
    </div>

    <div class="form_row">
      <div class="group w100">
        <input v-model="message" type="text" placeholder="placeholder" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Message</label>
      </div>
    </div>

    <div class="form_button">
      <span v-if="callback.length" class="form-success">{{ callback }}</span>
      <button @click.prevent="submit">Send message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',

  data() {
    return {
      name: '',
      email: '',
      tel: '',
      company: '',
      message: '',
      callback: ''
      // isSuccess: false
    }
  },

  methods: {
    submit() {
      if (this.name.length && this.email.length && this.tel.length) {
        const body = new FormData()
        body.append('name', this.name)
        body.append('email', this.email)
        body.append('tel', this.tel)
        body.append('company', this.company)
        body.append('message', this.message)

        const options = {
          method: 'POST',
          body: body
        }

        fetch('../mail.php', options).then(res => {
          this.name = ''
          this.email = ''
          this.tel = ''
          this.company = ''
          this.message = ''
          this.callback = 'Thank you for your application.'
          // this.isSuccess = true
        })
      } else {
        this.callback = 'Fields Name, Email and Phone Required!'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.form {
  width: 100%;
  background-color: $white;
  padding: vh(90px) vw(95px) vh(60px) vw(105px);

  @media (max-width: $osx) {
    padding: vh(60px) vw(40px) vh(60px) vw(50px);
  }

  @media (max-width: $lg) {
    width: 350px;
  }

  @media (max-width: $md) {
    width: 100%;
  }

  &_row {
    width: 100%;
    display: flex;
  }

  &_button {
    display: flex;
    justify-content: space-between;

    button {
      line-height: 1;
      background-color: transparent;
      border: 0;
      text-transform: uppercase;
      color: $black2;
      padding: 0;
      padding-bottom: 3px;
      border-bottom: 1px dashed $black2;
      margin-left: auto;

      &:hover {
        color: $red;
        border-color: $red;
      }
    }
  }
}

.form-success {
  font-size: em(17px);
  color: $red;
}

.group {
  position: relative;
  margin-bottom: 35px;
  width: vw(220px);

  @media (max-width: $osx) {
    width: 45%;
  }

  @media (max-width: $md) {
    width: 48%;
  }

  &:last-of-type {
    margin-left: auto;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &.w100 {
    width: 100%;
  }
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;

  &::placeholder {
    opacity: 0;
  }
}

input:focus {
  outline: none;
}

label {
  color: #a4aeb0;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  top: -10px;
  font-size: 12px;
  color: $red;
}

.bar {
  position: relative;
  display: block;
  width: 100%;
}
.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: $red;
  transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
</style>
