import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Menu,
  BookOpen,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  LogOut,
} from "lucide-react";
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className={`app ${menuOpen ? "menu-open" : ""}`}>
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brandIcon">
            <BookOpen size={22} />
          </div>
          <div>
            <strong>Controle de Oficinas</strong>
            <span>Sistema Educacional</span>
          </div>
        </div>
        <nav>
          <NavLink to="/" end onClick={closeMenu}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
          <NavLink to="/oficinas" onClick={closeMenu}>
            <BookOpen size={18} />
            Oficinas
          </NavLink>
          <NavLink to="/usuarios" onClick={closeMenu}>
            <Users size={18} />
            Usuários
          </NavLink>
          <NavLink to="/presenca" onClick={closeMenu}>
            <ClipboardCheck size={18} />
            Presença
          </NavLink>
        </nav>
        <button className="logout" onClick={logout}>
          <LogOut size={18} />
          Sair
        </button>
      </aside>
      {menuOpen && <div className="menuBackdrop" onClick={closeMenu} />}
      <main className="main">
        <header className="topbar">
          <button
            className="menuButton"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={20} />
          </button>
          <input placeholder="Buscar..." />
          <div className="avatar">AD</div>
        </header>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
