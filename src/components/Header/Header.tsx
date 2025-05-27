import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{title}</div>
      <nav>
        <button className={styles.menuButton} onClick={onMenuClick}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
