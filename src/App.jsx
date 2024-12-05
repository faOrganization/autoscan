import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from './components/dashboard/profile'
import PageTitle from "./components/PageTitle";
import Document from './components/dashboard/documents'
import Faq from './components/dashboard/faq'
import Reports from './components/dashboard/reports'
import ReportDetails from './components/dashboard/report-detail'
import CreateAccident from './components/dashboard/create-report'
import UpdatePassword from "./components/modals/UpdatePassword";
import PrivateRoute from "./components/PrivateRoute";
import Provider from './context/RefContext'


function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="update-password/*" element={<><UpdatePassword /><PageTitle title='Şifrə yeniləmə | Autoscan' /></>} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route index element={<><CreateAccident /><PageTitle title='Hesbat Yarat | Autoscan' /></>} />
              <Route path="report-details" element={<><ReportDetails /><PageTitle title='Report Detayları| Autoscan' /></>} />
              <Route path="profile" element={<><Profile /><PageTitle title='Məlumatlarım | Autoscan' /></>} />
              <Route path="faq" element={<><Faq /><PageTitle title='Faq | Autoscan' /></>} />
              <Route path="history" element={<><Reports /><PageTitle title='Əvvəlki hesabatlar | Autoscan' /></>} />
              <Route path="documents" element={<><Document /><PageTitle title='Sənədlər | Autoscan' /></>} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
