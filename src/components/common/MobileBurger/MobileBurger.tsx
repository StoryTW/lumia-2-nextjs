import { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileBurger.module.scss';

interface IMobileNav {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const navItems = [
  {
    id: 0,
    path: '#',
    name: 'Products',
  },
  {
    id: 1,
    path: '#',
    name: 'Docs',
  },
  {
    id: 3,
    path: '#',
    name: 'Governance',
  },
];

export const MobileBurger: React.FC<IMobileNav> = ({ openMenu, setOpenMenu }) => {
  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <AnimatePresence mode='wait'>
      {openMenu && (
        <div className={styles.mobileNav}>
          <div className={styles.wrapper}>
            <motion.div
              className={styles.content}
              initial={{
                x: window.innerWidth,
              }}
              animate={{
                x: 0,
              }}
              exit={{ x: window.outerWidth, opacity: 0 }}
              transition={{ duration: 0.3, bounce: false }}
            >
              <ul className={styles.navigation_list}>
                {navItems.map((item) => {
                  return (
                    <li key={item.name} className={styles.list_item}>
                      <a href={item.path as string} onClick={handleClose}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
