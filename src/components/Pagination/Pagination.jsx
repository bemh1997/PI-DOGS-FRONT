import React from 'react';
import styles from './Pagination.module.css';

export default function Pagination({ dogsPerPage, allDogs, pagination, currentPage }) {
  const pageNumbersc = Math.ceil(allDogs / dogsPerPage);
  const getNumbersToDisplay = () => {
    let pageRange = [currentPage];
    for (let i = 1; i <= 2; i++) {
      if (currentPage - i > 0) {
        pageRange.unshift(currentPage - i);
      }
      if (currentPage + i <= pageNumbersc) {
        pageRange.push(currentPage + i);
      }
    }
    return pageRange;
  };

  const handleOnClick = (arg) => {
    var newPage = 0;
    if(arg === 1){
      newPage = 1;
    }else if(arg === pageNumbersc){
      newPage = pageNumbersc;
    }else if(arg === -1){
      newPage = currentPage -1;
    }else{
      newPage = currentPage +1;
    }

    
    
    if (newPage >= 1 && newPage <= pageNumbersc) {
      pagination(newPage);
    }
  };

  return (
    <div className={styles.crumbs}>
      <span 
        className={currentPage === 1? styles.crumb_IncFin_active : styles.crumb_IncFin}
        onClick={() => handleOnClick(1)}
        disabled={currentPage === 1}
      >
        {'<Incio'}
      </span>
      <span
        className={currentPage === 1? styles.crumb__active : styles.crumb}
        onClick={() => handleOnClick(-1)}
        disabled={currentPage === 1}
      >
        {'<<'}
      </span>
      {/* <span className={styles.crumb__info }> {pageNumbersc=== 0? '0 de 0':currentPage+' de '+pageNumbersc}</span> */}
      {getNumbersToDisplay().map((number) => (
          <span
            className={currentPage === number ? styles.crumb__active : styles.crumb}
            onClick={() => pagination(number)}
          >
            {number}
          </span>
      ))}
      <span
        className={currentPage === pageNumbersc || pageNumbersc < 1 ? styles.crumb__active : styles.crumb}
        onClick={() => handleOnClick('+1')}
        disabled={currentPage === pageNumbersc }
      >
        {'>>'}
      </span>
      <span 
        className={currentPage === pageNumbersc || pageNumbersc < 1? styles.crumb_IncFin_active : styles.crumb_IncFin}
        onClick={() => handleOnClick(pageNumbersc)}
        disabled={currentPage === pageNumbersc}
      >
        {'Fin>'}
      </span>
    </div>
  );
}
