import React from "react";
import { Header, Footer } from ".";
import { Container } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="pt-2 mt-2">{children}</main>

      <Footer />
    </>
  );
};
