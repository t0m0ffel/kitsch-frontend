<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat @click.stop="loginDialog = true; toggle_login_register = 0">Login</v-btn>
    <v-btn flat @click.stop="loginDialog = true; toggle_login_register = 1">Register</v-btn>
    <v-dialog v-model="loginDialog" min-width="400px" max-width="600px">
      <v-card>
        <v-card-title>
          <v-layout row justify-center>
            <v-btn-toggle v-model="toggle_login_register">
              <v-btn flat>
                Login
              </v-btn>
              <v-btn flat>
                Register
              </v-btn>
            </v-btn-toggle>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <v-form v-if="toggle_login_register === 0">
            <v-text-field
              label="E-mail"
              v-model="email"
              required
            />
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
            />
          </v-form>
          <v-form v-else>
            <v-text-field
              label="E-mail"
              v-model="email"
              required
            />
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
            />
            <v-checkbox
              label="I accept the terms of use"
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              required
            />
          </v-form>
        </v-card-text>
        <v-alert type="error" :value="error">
          {{error}}
        </v-alert>
        <v-card-actions>
          <v-layout row justify-center>
            <v-btn color="primary" @click.stop="login">Submit</v-btn>
            <v-btn flat @click.stop="loginDialog=false; error=null">Close</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar-items>
</template>

<script>
import Authentication from '@/services/authentication'

export default {
  name: 'login-component',
  data: () => ({
    loginDialog: false,
    toggle_login_register: 0,
    checkbox: false,
    email: null,
    password: null,
    error: null
  }),

  methods: {
    async login () {
      try {
        await Authentication.login(this.email, this.password, '/secured')
      } catch ({response}) {
        console.log(response.data)
        console.log(response.data.msg)
        this.error = response.data.msg
      }
    }

  }
}
</script>

<style scoped>

</style>
