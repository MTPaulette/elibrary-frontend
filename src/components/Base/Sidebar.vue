<template>
    <div>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">UI Elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Form elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title">Charts</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Tables</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i class="icon-contract menu-icon"></i>
              <span class="menu-title">Icons</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="icons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
              <i class="icon-ban menu-icon"></i>
              <span class="menu-title">Error pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="error">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/documentation/documentation.html">
              <i class="icon-paper menu-icon"></i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>
<script>
export default {
  name: "Sidebar",
    
}
</script>
<style scoped>
/* Sidebar */

.sidebar {
  min-height: calc(100vh - 60px);
  background: #fff;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  padding: 0;
  width: 235px;
  z-index: 11;
  transition: width 0.25s ease, background 0.25s ease;
  -webkit-transition: width 0.25s ease, background 0.25s ease;
  -moz-transition: width 0.25s ease, background 0.25s ease;
  -ms-transition: width 0.25s ease, background 0.25s ease;
}
  .sidebarv .nav {
    overflow: hidden;
    flex-wrap: nowrap;
    flex-direction: column;
    margin-bottom: 60px;
  }
    .nav-item {
    transition-duration: 0.25s;
      transition-property: background;
      -webkit-transition-property: background;
    }
      .nav-item .collapse {
        z-index: 999;
      }

      .nav-item .nav-link {
        display: flex;
        align-items: center;
        white-space: nowrap;
        padding: .8125rem 1.937rem .8125rem 1rem;
        color: #6C7383;
        border-radius: 8px;
        transition-duration: 0.45s;
        transition-property: color;
        -webkit-transition-property: color;
      }
        .nav-item .nav-link i {
          color: inherit;
        }
        /*
          &.menu-icon {
            font-size: $sidebar-icon-font-size;
            line-height: 1;
            margin-right: 1rem;
            .rtl & {
              margin-left: 2rem;
              margin-right: 0;
            }
            color: $sidebar-light-menu-icon-color;
            &:before {
              vertical-align: middle;
            }
          }
          &.menu-arrow {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin-left: auto;
            margin-right: 0;
            color: $sidebar-light-menu-arrow-color;
            .rtl & {
              margin-left: 0;
              margin-right: auto;
            }

            &:before {
              content: "\e649";
              font-family: "themify";
              font-style: normal;
              display: block;
              font-size: 0.687rem;
              line-height: 10px;
              @include transition(all .2s ease-in);
            }
          }
        }

        .menu-title {
          color: inherit;
          display: inline-block;
          font-size: $sidebar-menu-font-size;
          line-height: 1;
          vertical-align: middle;
        }

        .badge {
          margin-left: auto;
          .rtl & {
            margin-left: 0;
            margin-right: auto;
          }
        }
        &[aria-expanded="true"] {
          i {
            &.menu-arrow {
              &:before {
                @include rotate(90);
              }
            }
          }
        }
      }

      &.active {
        border-radius: 8px;
        > .nav-link {
            background: $sidebar-light-menu-active-bg;
            position: relative;
            i,
            .menu-title,
            .menu-arrow {
              color: $sidebar-light-menu-active-color;
            }
            i {
              &.menu-arrow {
                &::before {
                  content: "\e64b";
                }
              }
            }
        }
      }
      &:hover {
        > .nav-link {
          i,
          .menu-title,
          .menu-arrow {
            color: $sidebar-light-menu-active-color;
          }
        }

      }
    }

    &:not(.sub-menu) {
      margin-top: 1.45rem;
      margin-left: 1rem;
      margin-right: 1rem;
      > .nav-item {
        margin-top: .2rem;
        &:hover {
          > .nav-link, &[aria-expanded="true"] {
            background: $sidebar-light-menu-hover-bg;
            color: $sidebar-light-menu-hover-color;                    
          }
        }
        > .nav-link {
          margin: 0;
          &[aria-expanded="true"] {
            border-radius: 8px 8px 0 0;
            background: $sidebar-light-menu-hover-bg;
            color: $sidebar-light-menu-active-color;
          }
        }
        &.active {
          background: $sidebar-light-menu-hover-bg;
        }
      }
    }
    &.sub-menu {
      margin-bottom: 0;
      margin-top:0;
      list-style: none;
      padding: $sidebar-submenu-padding;
      background: $sidebar-light-menu-hover-bg;
      padding-bottom: 12px;

      .nav-item {
        padding: 0;
        &::before {
          content: '';
          width: 5px;
          height: 5px;
          position: absolute;
          margin-top: 16px;
          border-radius: 50%;
          background: #b2b2b2;
        }
        .nav-link {
          color: $sidebar-light-submenu-color;
          padding: $sidebar-submenu-item-padding;
          position: relative;
          font-size: $sidebar-submenu-font-size;
          line-height: 1;
          height: auto;
          border-top: 0;
          &:hover {
            color: $sidebar-light-submenu-hover-color;
          }
          &.active {
            color: $sidebar-light-submenu-active-color;
            background: transparent;
          }
        }
        &:hover {
          background: transparent;
        }
      }
    }
  }
}
//sidebar color variation
.sidebar-dark {
  .sidebar {
    background: $sidebar-dark-bg;
    .nav {
      .nav-item {
        .nav-link {
          color: $sidebar-dark-menu-color;
          i {
            color: inherit;
            &.menu-icon {
              color: $sidebar-dark-menu-icon-color;
            }
          }
          .menu-title {
            color: inherit;
          }
          &[aria-expanded="true"] {
            .menu-title {
              color: $sidebar-dark-submenu-color;
            }
          }
        }
        &.active {
          > .nav-link {
            background: $sidebar-dark-menu-active-bg;
            .menu-title,
            i {
              color: $sidebar-dark-menu-active-color; 
            }
          }
        }
      }
      &:not(.sub-menu) {
        > .nav-item {
          &:hover {
            > .nav-link {
              background: $sidebar-dark-menu-hover-bg;
              color: $sidebar-dark-menu-hover-color;                                    
            }
          }
          .nav-link {
            &[aria-expanded="true"] {
              background: #1a1f26;
            }
          }
        }
      }
      &.sub-menu {
        background: #1a1f26;
        .nav-item {
          .nav-link {
            color: $sidebar-dark-submenu-color;
            &:before {
              color: lighten($sidebar-dark-submenu-color, 10%);
            }
            &.active {
              color: $sidebar-dark-menu-active-color;
              background: transparent;
            }
            &:hover {
              color: $sidebar-dark-submenu-hover-color;
            }
          }
          &:hover {
            background: transparent;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .sidebar-offcanvas {
    position: fixed;
    max-height: calc(100vh - 60px);
    top: $navbar-height;
    bottom: 0;
    overflow: auto;
    right: -235px;
    -webkit-transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    &.active {
      right: 0;
    }
  }
}
*/
</style>
