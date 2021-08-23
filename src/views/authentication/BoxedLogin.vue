<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card class="elevation-4">
          <v-row>
            <v-col
              lg="7"
              class="info d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10">
                  <div>
                    <h2 class="display-1 white--text font-weight-medium">
                      Best Email Verifier
                    </h2>
                    <h6
                      class="subtitle-1 mt-4 white--text op-5 font-weight-regular"
                    >
                      Your ultimate tool to enhance email deliverability.
                    </h6>
                    <v-btn
                      class="mt-4 text-capitalize"
                      x-large
                      outlined
                      color="white"
                      @click="handleBack"
                      >Back To Main Page</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <div class="text-center mt-6">
                  <v-chip pill class="mr-2">
                    <v-avatar left>
                      <v-btn color="#21c1d6" class="white--text">
                        <v-icon>mdi-google</v-icon>
                      </v-btn> </v-avatar
                    >Use Google account
                  </v-chip>
                </div>
                <!-- <img src="@/assets/images/logo-icon.png" />-->
                <h2
                  class="font-weight-bold mt-4 blue-grey--text text--darken-2"
                >
                  Login
                </h2>

                <h6 class="subtitle-1">
                  Don't have an account?
                  <a href="/authentication/BoxedRegister" class>Register</a>
                </h6>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/dashboards/analytical"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    class="mt-4"
                    required
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="Password"
                    required
                    outlined
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[v => !!v || 'You must agree to continue!']"
                      label="Remember me?"
                      required
                    ></v-checkbox>
                    <div class="ml-auto">
                      <v-btn
                        text
                        to="boxedforgotpassword"
                        class="link"
                        style="text-transform:none"
                        >Forgot pwd?</v-btn
                      >
                    </div>
                  </div>
                  <div class="form-group row">
                    <!-- <label for="robot" class="col-sm-2 col-form-label"></label> -->
                    <div class="col-sm-10">
                      <vue-recaptcha
                        ref="recaptcha"
                        :loadRecaptchaScript="true"
                        @verify="onVerify"
                        sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
                      >
                      </vue-recaptcha>
                    </div>
                  </div>
                  <v-btn
                    :disabled="!valid"
                    color="info"
                    block
                    class="mr-4"
                    submit
                    @click="submit"
                    >Login
                  </v-btn>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "BoxedLogin",

  data: () => ({
    valid: true,
    password: "",
    show1: false,
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 10) || "Password must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false,
    robot: false
  }),
  computed: {},
  methods: {
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate(true) && this.robot) {
        this.$router.push({ path: "/dashboards" });
      }
    },
    handleBack() {
      this.$router.push({ path: "/" });
    },
    onVerify: function(response) {
      if (response) this.robot = true;
    }
  },
  components: {
    "vue-recaptcha": VueRecaptcha
  }
};
</script>
<style scoped>
#login .info {
  background-color: #21c1d6 !important;
}
</style>
