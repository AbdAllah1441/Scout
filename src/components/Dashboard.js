import React, { useState } from "react";
import "../styles/Dashboard.css";
import {
  FiInbox,
  FiBarChart2,
  FiFolder,
  FiLink,
  FiFileText,
  FiSettings,
  FiCpu,
  FiUser,
  FiDollarSign,
  FiMessageSquare,
  FiFilter,
  FiSliders,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <div className="dashboard">
      {/* Mobile header */}
      <header className="mobile-header">
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu />
        </button>
        <h2 className="mobile-logo">Acme</h2>
        <button
          className="mobile-config-btn"
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
        >
          <FiSliders />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Acme</h2>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <div className="sidebar-top">
          <ul className="sidebar-menu">
            <li>
              <FiInbox /> Inbox
            </li>
            <li>
              <FiBarChart2 /> Analytics
            </li>
            <li>
              <FiFolder /> Collections
            </li>
            <li>
              <FiLink /> Integrations
            </li>
            <li>
              <FiFileText /> Templates
            </li>
            <li>
              <FiSettings /> Settings
            </li>
          </ul>
        </div>

        <div className="sidebar-apps">
          <h4>Apps</h4>
          <ul>
            <li className="active">
              <FiCpu /> Statbot
            </li>
            <li>
              <FiUser /> Chief
            </li>
            <li>
              <FiFileText /> Docs
            </li>
            <li>
              <FiDollarSign /> Accounting
            </li>
          </ul>
        </div>
      </aside>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Middle panel */}
      <main className="main-panel">
        <section className="inputs">
          <div className="heading">
            <h3>Inputs ˄</h3>
            <button className="add-btn">+</button>
          </div>

          <div className="input-field">
            <label>User Name</label>
            <input type="text" placeholder="user_name" />
          </div>
          <div className="input-field">
            <label>Profile</label>
            <textarea placeholder="profile" rows="3"></textarea>
          </div>
          <div className="button-group">
            <button className="run-btn">Run</button>
            <button
              className="mobile-config-trigger"
              onClick={() => setRightPanelOpen(!rightPanelOpen)}
            >
              Config <FiChevronRight />
            </button>
          </div>
        </section>

        <section className="actions">
          <div className="heading">
            <h3>Actions ˄</h3>
            <button className="add-btn">+</button>
          </div>
          <div className="action-card">Get Contact From Website</div>
          <div className="action-card">Save</div>
          <div className="action-card">Generate Response</div>
        </section>
      </main>

      {/* Right panel */}
      <aside className={`right-panel ${rightPanelOpen ? "open" : ""}`}>
        <div className="right-panel-header">
          <h3>Configuration</h3>
          <button
            className="right-panel-close"
            onClick={() => setRightPanelOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <section className="config-block">
          <h3>
            <FiMessageSquare /> Generate Response
          </h3>
          <label>Slug</label>
          <input type="text" placeholder="Slug" />
          <label>Message</label>
          <textarea placeholder="Message" rows="3"></textarea>
        </section>

        <section className="config-block">
          <h3>
            <FiFilter /> Conditions
          </h3>
          <input type="text" placeholder="If (input == true)" />
        </section>

        <section className="config-block">
          <h3>
            <FiSliders /> Configuration
          </h3>
          <label>Model</label>
          <select>
            <option>GPT-4 Turbo</option>
            <option>GPT-3.5</option>
          </select>
          <label>Temperature</label>
          <input type="number" step="0.1" defaultValue="0.7" />
          <label>Max Tokens</label>
          <input type="number" defaultValue="400" />
          <label>Response Type</label>
          <select>
            <option>Text</option>
          </select>
        </section>
      </aside>

      {/* Right panel overlay for mobile */}
      {rightPanelOpen && (
        <div
          className="right-panel-overlay"
          onClick={() => setRightPanelOpen(false)}
        />
      )}
    </div>
  );
}
