import Vue from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Importing Navbar as a Vue plugin. This plugin includes all of the above listed individual components. Plugins also include any component aliases.
import { Navbar, FormInput, Form, FormGroup, InputGroup, ListGroup, Layout, Collapse, Button, Table, Pagination, Alert, Card } from 'bootstrap-vue/es/components'
Vue.use(Navbar)
Vue.use(FormInput);
Vue.use(Form);
Vue.use(FormGroup);
Vue.use(InputGroup);
Vue.use(ListGroup);
Vue.use(Layout);
Vue.use(Collapse);
Vue.use(Button);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(Alert);
Vue.use(Card);

// Import all components from bootstrap-vue -> heavy site -> not use
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)
