import { useUser } from "../firebase/useUser";
import AdminDashboard from "../components/views/AdminDashboard";
import Layout from "../components/views/Layout";
import WriteData from "../components/cloudFirestore/Write";
import ReadData from "../components/cloudFirestore/Read";

export default function Home() {
  const { user, logout } = useUser();
  if (user) {
    return (
      <>
        <button onClick={logout}>LogOut</button>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <WriteData /> <ReadData />
        {/* <AdminDashboard user={user} /> */}
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
