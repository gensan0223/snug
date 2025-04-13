<template>
  <div class="h-screen w-screen flex flex-col">
    <!-- Header -->
    <header class="navbar bg-base-200 px-4">
      <div class="flex-1">
        <button class="btn btn-ghost" @click="toggleSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <a class="btn btn-ghost normal-case text-xl" @click="goToBacklog">snug</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placehold.co/40x40" />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a @click="logout">Logout</a></li>
          </ul>
        </div>
        <span class="ml-2">{{ username }}</span>
      </div>
    </header>

    <!-- Body -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside v-show="showSidebar" class="w-60 bg-base-100 border-r p-4 space-y-2">
        <ul class="menu">
          <li><a @click="navigate('backlog')">Backlog</a></li>
          <li><a @click="navigate('kanban')">Kanban</a></li>
          <li><a @click="navigate('settings')">Settings</a></li>
          <li><a @click="navigate('help')">Help</a></li>
        </ul>
      </aside>

      <!-- Main View -->
      <main class="flex-1 p-4 overflow-auto">
        <component :is="currentView" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSidebar = ref(true)
const currentView = ref('BacklogView')
const username = ref('John Doe')

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function navigate(view) {
  currentView.value = {
    backlog: 'BacklogView',
    kanban: 'KanbanView',
    settings: 'SettingsView',
    help: 'HelpView'
  }[view]
}

function goToBacklog() {
  currentView.value = 'BacklogView'
}

function logout() {
  console.log('Logout logic here')
}
</script>

<style scoped>
/* Optional: fine-tune for your Tailwind theme */
</style>
