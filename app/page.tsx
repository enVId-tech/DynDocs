'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.scss';

export default function DocumentationPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize theme based on user preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
      <div className={styles.container}>
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
          ) : (
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
              </svg>
          )}
        </button>

        <header className={styles.header}>
          <h1>Documentation</h1>
          <p className={styles.subtitle}>Welcome to our comprehensive guide</p>
        </header>

      <aside className={styles.sidebar}>
        <div className={styles.searchContainer}>
          <input
              type="text"
              className={styles.searchBar}
              placeholder="Search documentation..."
          />
        </div>
        <nav>
          <h3>Getting Started</h3>
          <ul>
            <li><a href="#getting-started">Introduction</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#quick-start">Quick Start</a></li>
          </ul>

          <h3>Core Concepts</h3>
          <ul>
            <li><a href="#features">Key Features</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#best-practices">Best Practices</a></li>
          </ul>

          <h3>API Reference</h3>
          <ul>
            <li><a href="#api">Methods</a></li>
            <li><a href="#endpoints">Endpoints</a></li>
            <li><a href="#error-handling">Error Handling</a></li>
          </ul>

          <h3>Examples</h3>
          <ul>
            <li><a href="#examples">Basic Examples</a></li>
            <li><a href="#advanced-examples">Advanced Usage</a></li>
            <li><a href="#integrations">Integrations</a></li>
          </ul>

          <h3>Resources</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#troubleshooting">Troubleshooting</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <section id="getting-started">
          <h2>Getting Started</h2>
          <p>This guide will help you get up and running with our platform quickly.</p>
          <div className={styles.codeBlock}>
            <pre>
              <code>npm install @your-package/core</code>
            </pre>
          </div>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <p>Follow these steps to install and configure the package:</p>
          <ol>
            <li>Install the package using npm or yarn</li>
            <li>Configure your environment variables</li>
            <li>Import the components you need</li>
          </ol>
        </section>

        <section id="features">
          <h2>Features</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Easy to Use</h3>
              <p>Simple API designed for developer productivity</p>
            </div>
            <div className={styles.card}>
              <h3>Fully Typed</h3>
              <p>Complete TypeScript support for better development experience</p>
            </div>
            <div className={styles.card}>
              <h3>Customizable</h3>
              <p>Extensive theming and configuration options</p>
            </div>
          </div>
        </section>

        <section id="api">
          <h2>API Reference</h2>
          <p>Explore the complete API documentation:</p>
          <table className={styles.apiTable}>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>initialize()</code></td>
                <td>Sets up the client with your configuration</td>
                <td><code>{`client.initialize({apiKey: '123'})`}</code></td>
              </tr>
              <tr>
                <td><code>query()</code></td>
                <td>Executes a data query</td>
                <td><code>{`client.query({id: '123'})`}</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <p>Here are some common use cases:</p>
          <div className={styles.codeBlock}>
            <pre>
              <code>{`// Example code
import { createClient } from '@your-package/core';

const client = createClient({
  apiKey: process.env.API_KEY
});

async function getData() {
  const result = await client.query({
    endpoint: '/users',
    params: { limit: 10 }
  });
  
  return result.data;
}`}</code>
            </pre>
          </div>
        </section>
      </main>

        <footer className={styles.footer}>
          <p>Need help? <a href="#">Contact Support</a></p>
        </footer>
    </div>
  );
}