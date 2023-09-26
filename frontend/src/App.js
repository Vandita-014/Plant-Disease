import React from "react";
import { ImageUpload } from "./home";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout } from "./components/layouts";
import { LoginForm, SignUpForm } from "./components/auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ImageUpload />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
