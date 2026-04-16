import { useAuth } from "@/contexts/AuthContext";
import HomePage from "@/components/HomePage";
import Login from "@/pages/Login";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (user) return <HomePage />;

  return <Login />;
};

export default Index;
