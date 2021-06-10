import { useUser } from "../firebase/useUser";
import Header from "../components/views/Header";
import AdminDashboard from "../components/views/AdminDashboard";
import Layout from "../components/views/Layout";

export default function Home() {
  const { user, logout } = useUser();
  if (user) {
    return (
      <>
        <Header />
        {/* <button onClick={logout}>LogOut</button> */}
        <AdminDashboard user={user}/>
      </>
    );
  } else
    return (
      <>
        <Layout />
        {/* <AdminDashboard /> */}
      </>
    );
}
