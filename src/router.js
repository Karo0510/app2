import Vue from 'vue';
import VueRouter from 'vue-router';
import '@/screens/Employee.vue'
import EmployeeVue from '@/screens/Employee.vue';
import EmployeeDataVue from './screens/EmployeeData.vue';
import AccidentsVue from './screens/Accidents.vue';
import AccidentsDataVue from './screens/AccidentsData.vue';
import JobsData from './screens/JobsData.vue';
import RiskDataVue from './screens/JobRisk.vue'
import LoginPageVue from './screens/login.vue'
import EmployeeFormVue from './forms/EmployeeForm.vue'
import RiskFormVue from './forms/RiskForm.vue'
import AccidentsFormVue from './forms/AccidentsForm.vue'
import errorInfoVue from './screens/errorInfo.vue'
import NotFoundVue from './screens/NotFound.vue'
import TrainingVue from './screens/Training.vue';
import TrainingDataVue from './screens/TrainingData.vue';
import TrainingFormVue from './forms/TrainingForm.vue'
import RegisterFormVue from './forms/RegisterForm.vue'
import JobFormVue from './forms/JobForm.vue'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPageVue,
    meta: { requiresAuth: false}
  },
  {
    path: '/employees',
    name: 'Employees',
    component: EmployeeVue,
    meta: { requiresAuth: true }
  }
  ,
  {
    path: '/employees/$id=:id',
    name: 'EmployeeData',
    component: EmployeeDataVue,
    props: true,
    meta: { requiresAuth: true }

  },
  {
    path: '/accidents',
    name: 'Accidents',
    component: AccidentsVue,
    meta: { requiresAuth: true }
  },
  {
    path: '/accidents/$data=:data',
    name: 'AccidentData',
    component: AccidentsDataVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/jobs',
    name: 'JobsList',
    component: JobsData,
    meta: { requiresAuth: true }
  },
  {
    path: '/jobs/$id=:id',
    name: 'RiskData',
    component:RiskDataVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_employee',
    name: 'AddEmployee',
    component:EmployeeFormVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_risk/$id=:id',
    name: 'AddRisk',
    component:RiskFormVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_accident',
    name: 'AddAccident',
    component:AccidentsFormVue,
    props: false,
    meta: { requiresAuth: true }
  },
  {
    path: '/error',
    name: 'Error',
    component:errorInfoVue,
    props: false,
    meta: { requiresAuth: false }
  },
  {
    path: '/trainings',
    name: 'Trainings',
    component: TrainingVue,
    meta: { requiresAuth: true }
  },
  {
    path: '/trainings/$data=:data',
    name: 'TrainingsData',
    component: TrainingDataVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_trainings',
    name: 'AddTraining',
    component: TrainingFormVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_users',
    name: 'AddUser',
    component: RegisterFormVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/add_job',
    name: 'JobForm',
    component: JobFormVue,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    component: NotFoundVue,
  },
];


const router = new VueRouter({
  routes,
  mode: 'history'
});



export default router;