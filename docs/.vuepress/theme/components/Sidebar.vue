<template>
  <aside class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <NavLinks />

      <slot name="top" />

      <SidebarLinks :depth="0" :items="items" />
      <slot name="bottom" />
    </el-scrollbar>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>

<style lang="stylus">

.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }
}

.el-scrollbar__view {
  & > .sidebar-links {
    padding: 1.5rem + $navbarHeight 0 1.5rem;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

// .el-scrollbar__view > .sidebar-links > li > a {
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }
// .el-scrollbar__view > .sidebar-links > li

.el-scrollbar__view > .sidebar-links > li > .sidebar-group > .sidebar-links > li {
  display: flex;
}

.el-scrollbar__view > .sidebar-links > li > .sidebar-group > .sidebar-links > li > a,
.el-scrollbar__view > .sidebar-links > li > .sidebar-group > .sidebar-heading > span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }
  }
  .el-scrollbar__view {
    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
