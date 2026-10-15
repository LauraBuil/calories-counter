import styles from "./BottomNavigation.module.scss";

const navigationItems = ["Accueil", "Journal", "Ajouter", "Recettes", "Profil"];
const navigationIcons = ["⌂", "▤", "+", "♡", "○"];

export function BottomNavigation() {
  return (
    <nav className={styles.navigation} aria-label="Navigation principale">
      {navigationItems.map((item, index) => (
        <button
          className={index === 2 ? styles.add : index === 0 ? styles.active : undefined}
          type="button"
          key={item}
        >
          <span aria-hidden="true">{navigationIcons[index]}</span>
          <small>{item}</small>
        </button>
      ))}
    </nav>
  );
}
