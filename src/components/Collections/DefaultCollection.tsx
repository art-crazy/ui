import styles from './Collections.module.scss';
import { Collection } from '@/types/collections';
import ScrollableContainer from './ScrollableContainer';
import ShowAllButton from './ShowAllButton';

interface DefaultCollectionProps {
  collection: Collection;
}

export function DefaultCollection({ collection }: DefaultCollectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{collection.title}</h2>
        <a href={collection.link} className={styles.sectionLink}>
          Смотреть все
        </a>
      </header>
      <ScrollableContainer scrollAmount={300}>
        <ul className={styles.cardsContainer}>
          {collection.recipes.map((recipe) => (
            <li key={recipe.id} className={styles.card}>
              <a href={`/recept/${recipe.name}-${recipe.id}`}>
                {recipe.imageMain && (
                  <img
                    src={recipe.imageMain}
                    alt={recipe.title}
                    width={300}
                    height={200}
                    className={styles.cardImage}
                  />
                )}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{recipe.title}</h3>
                  <p className={styles.cardDescription}>{recipe.description}</p>
                  <div className={styles.cardMeta}>
                    <span>{recipe.cookTime}</span>
                    <span>★ {recipe.rating}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
          <li><ShowAllButton link={collection.link} /></li>
        </ul>
      </ScrollableContainer>
    </section>
  );
}
