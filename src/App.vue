<template>
  <v-app>

      <v-toolbar dark class="black">
        <v-toolbar-side-icon @click="sideNav = !sideNav"
       ></v-toolbar-side-icon>
        <v-toolbar-title>MeetUp Tracker</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat >
            <v-icon dark left>supervisor_account</v-icon>
            View Meetups
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer v-model="sideNav">
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content> {{item.title}}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups'},
        {icon: 'room', title: 'Organize Meetip'},
        {icon: 'person', title: 'Profile'},
        {icon: 'face', title: 'Sign up'},
        {icon: 'lock_open', title: 'Sign in'}
      ]
  }

  }
}
</script>
