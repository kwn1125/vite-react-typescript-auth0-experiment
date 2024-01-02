import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { LoginButton } from "@/features/top/presenter/LoginButton";

import { ProfileButton } from "../presenter/ProfileButton";

export const TopContainer = () => {
  const { isLoading, loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <ProfileButton onClick={handleProfile} />;
  }

  return <LoginButton onClick={handleLogin} />;
};
