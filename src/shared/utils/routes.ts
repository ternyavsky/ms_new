import { lazy } from "react";
import { RouteProps } from "react-router";

import { InterviewPage } from "../../pages/Auth/InterviewPage/InterviewPage";
import { ROUTES } from "./PATHS";
import MapPage from "@/pages/Map/MapPage";

const RegistrationClinicPage = lazy(
  () => import("@/pages/RegistrationClinicPage")
);
const RegistrationPage = lazy(() => import("@/pages/RegistrationPage"));
const WorkerLoginPage = lazy(() => import("@/pages/WorkerLoginPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const MainPage = lazy(() => import("@/pages/Main"));
const RecoveryPage = lazy(() => import("@/pages/RecoveryPage"));
const SelectCenterPage = lazy(() => import("@/pages/SelectCenter"));
const ConfirmationPage = lazy(() => import("@/pages/ConfirmationPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const NotesPage = lazy(() => import("@/pages/Notes"));
const MedicalCardPage = lazy(() => import("@/pages/MedicalCard"));
const NotesInfoPage = lazy(() => import("@/pages/NotesInfo"));
const CreateEventPage = lazy(() => import("@/pages/CreateEvent"));
const MessagesPage = lazy(() => import("@/pages/MessagesPage"));
const MedicalTestPage = lazy(() => import("@/pages/MedicalTest"));
const CreateNewPassPage = lazy(() => import("@/pages/CreateNewPass"));
const NotFoundPage = lazy(() => import("@/pages/404Page/NotFoundPage"));
const MobileNotificationPage = lazy(
  () => import("@/pages/MobileNotification/MobileNotification")
);
const UserInfoPage = lazy(() => import("@/pages/UserInfo"));
const UsersPage = lazy(() => import("@/pages/Users/UsersPage"));
const BalancePage = lazy(() => import("@/pages/Balance"));
const AppStatsPage = lazy(() => import("@/pages/AppStatsPage"));
const LeadsPage = lazy(() => import("@/pages/LeadsPage"));
const CountryInfoPage = lazy(() => import("@/pages/CountryInfo"));
const CityInfoPage = lazy(() => import("@/pages/CityInfoPage"));
const MailPage = lazy(() => import("@/pages/MailPage"));
const SocialPage = lazy(() => import("@/pages/SocialPage"));
const CenterAccount = lazy(() => import("@/pages/CenterAccount"));
const AppointmentsPage = lazy(() => import("@/pages/AppointmentsPage"));
const MedicalCenter = lazy(() => import("@/pages/MedicalCenter"));
const SubsPage = lazy(() => import("@/pages/SubsPage"));
const SavedPage = lazy(() => import("@/pages/SavedPage"));
const CenterPage = lazy(() => import("@/pages/CenterPage"));
const GeolocationPage = lazy(() => import("@/pages/GeolocationPage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage"));
const StatisticsPage = lazy(() => import("@/pages/StatisticsPage"));
const ServicePage = lazy(() => import("@/pages/ServicePage"));
const CooperationPage = lazy(() => import("@/pages/CooperationPage"));
const HardwarePage = lazy(() => import("@/pages/HardwarePage"));
const AllDoctorsPage = lazy(() => import("@/pages/AllDoctorsPage"));
const MedTasksPage = lazy(() => import("@/pages/MedTasksPage"));
const OverviewMedTaskPage = lazy(() => import("@/pages/OverviewMedTaskPage"));
const DiagnosisPage = lazy(() => import("@/pages/DiagnosisPage"));
const CreateMedTaskPage = lazy(() => import("@/pages/CreateMedTaskPage"));
const ConfirmationCodePage = lazy(() => import("@/pages/ConfirmationCodePage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const ClinicProfilePage = lazy(() => import("@/pages/ClinicProfilePage"));
const ClinicRegistrationPage = lazy(
  () => import("@/pages/ClinicRegistrationPage")
);
const ClinicServicesPage = lazy(() => import("@/pages/ClinicServicesPage"));
const ClinicSmsPage = lazy(() => import("@/pages/ClinicSmsPage"));

export const routes: RouteProps[] = [
  {
    path: "/registration",
    Component: RegistrationPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: MainPage,
  },
  { path: "*", Component: NotFoundPage },
  { path: "/recovery", Component: RecoveryPage },
  {
    path: "/select-center",
    Component: SelectCenterPage,
  },
  {
    path: "/confirmation",
    Component: ConfirmationPage,
  },
  {
    path: "/interview",
    Component: InterviewPage,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/medical-card",
    Component: MedicalCardPage,
  },
  {
    path: "/notes",
    Component: NotesPage,
  },
  {
    path: "/notes/:name",
    Component: NotesInfoPage,
  },
  {
    path: "/create-event",
    Component: CreateEventPage,
  },
  {
    path: "/messages",
    Component: MessagesPage,
  },
  {
    path: "/medical-card-test",
    Component: MedicalTestPage,
  },
  {
    path: "/create-new-password",
    Component: CreateNewPassPage,
  },
  {
    path: "/notifications",
    Component: MobileNotificationPage,
  },
  {
    path: "/user/:id",
    Component: UserInfoPage,
  },
  {
    path: "/users",
    Component: UsersPage,
  },
  {
    path: "/balance",
    Component: BalancePage,
  },

  {
    path: "/center/:id",
    Component: CenterPage,
  },
  { path: "/app", Component: AppStatsPage },
  { path: "/leads", Component: LeadsPage },
  { path: "/map", Component: MapPage },
  {
    path: "/map/:country",
    Component: CountryInfoPage,
  },
  {
    path: "/map/:country/:city",
    Component: CityInfoPage,
  },
  { path: "/services/:id/", Component: ServicePage },
  { path: "/mail", Component: MailPage },
  { path: "/news", Component: NewsPage },
  { path: "/social", Component: SocialPage },
  { path: "/center-account", Component: CenterAccount },
  { path: "/appointments", Component: AppointmentsPage },
  { path: "/medical-center", Component: MedicalCenter },
  { path: "/subscriptions", Component: SubsPage },
  { path: "/saved", Component: SavedPage },
  { path: "/geolocation", Component: GeolocationPage },
  { path: "/settings", Component: SettingsPage },
  { path: "/statistics", Component: StatisticsPage },
  {
    path: ROUTES.cooperation.path,
    Component: CooperationPage,
  },
  {
    path: ROUTES.hardware.path,
    Component: HardwarePage,
  },

  {
    path: ROUTES.allDoctors.path,
    Component: AllDoctorsPage,
  },
  {
    path: ROUTES.medTasks.path,
    Component: MedTasksPage,
  },
  {
    path: ROUTES.overviewMedTask.path,
    Component: OverviewMedTaskPage,
  },
  {
    path: ROUTES.pacientDiagnosis.path,
    Component: DiagnosisPage,
  },
  { path: ROUTES.createMedTask.path, Component: CreateMedTaskPage },

  { path: ROUTES.confirmationCode.path, Component: ConfirmationCodePage },
  {
    path: ROUTES.clinicProfile.path,
    Component: ClinicProfilePage,
  },
  {
    path: ROUTES.clinicRegistration.path,
    Component: RegistrationClinicPage,
  },

  {
    path: ROUTES.workerLogin.path,
    Component: WorkerLoginPage,
  },

  {
    path: ROUTES.clinicRegistrationPage.path,
    Component: ClinicRegistrationPage,
  },

  {
    path: ROUTES.clinicServicesPage.path,
    Component: ClinicServicesPage,
  },

  {
    path: ROUTES.clinicSmsPage.path,
    Component: ClinicSmsPage,
  },
];
