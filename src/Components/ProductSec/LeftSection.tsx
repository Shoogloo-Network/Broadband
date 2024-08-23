import styles from './Filter.module.scss';
import LeftAdComponents from '../Ad/LeftAd';
import { useRef } from 'react';
import { BsFileArrowDown, BsFileArrowUp } from 'react-icons/bs';
const LeftFilterSection = ({
  totalCount,
  filterCount,
  clickOnFilter,
  _data,
  uniqueProvidersArray,
  resetHandler,
  handleClickMweb,
  mwebFilterShow,
}: any) => {
  const speedFilter = _data && _data.speedFilter ? _data.speedFilter : [];
  const newFilter = _data && _data.newFilter ? _data.newFilter : [];
  const selectRef = useRef<HTMLSelectElement>(null);
  const providerList =
    uniqueProvidersArray && uniqueProvidersArray.length > 0
      ? uniqueProvidersArray
      : [];
  const filterClickHandler = (e: any) => {
    const filterType = e.target.name;
    const filterValue = e.target.value;
    const filterCheck = e.target.checked;
    const data = { filterType, filterValue, filterCheck };
    clickOnFilter(data);
  };

  //let radioButtonRef = null;
  const RadioHtmlGen = () => {
    return speedFilter.map((item: any, index: number) => {
      return (
        <li key={index}>
          <input
            //ref={(input) => (radioButtonRef = input)}
            name="speed"
            onClick={filterClickHandler}
            type="radio"
            defaultValue={item.value}
            className={`hide ${styles.checkBoxInput}`}
            id={`speed-${index}`}
          />
          <label className={styles.filterWrap} htmlFor={`speed-${index}`}>
            <span className={styles.checkInput}></span>
            <span className={styles.lableTxtWrap}>
              <span className={styles.labelHead}>{item.labelHead}</span>
              <span className={styles.labelTxt}>{item.labelText}</span>
            </span>
          </label>
        </li>
      );
    });
  };
  const CheckBoxHtmlGen = () => {
    return newFilter.map((item: any, index: number) => {
      return (
        <li key={index}>
          <input
            name="attribute"
            defaultValue={item.value}
            type="checkbox"
            onClick={filterClickHandler}
            className={`hide ${styles.checkBoxInputSlider}`}
            id={`newFilter-${index}`}
          />
          <label
            className={styles.filterWrapSlider}
            htmlFor={`newFilter-${index}`}
          >
            <span className={styles.txt}>{item.title}</span>
            <span className={styles.sliderSec}>
              <span className={styles.sliderRound}></span>
            </span>
          </label>
        </li>
      );
    });
  };
  const resetFilter = () => {
    // Reset the select element value
    if (selectRef.current) {
      selectRef.current.value = '';
    }

    // Uncheck all radio buttons
    // radioRefs.current.forEach((radio) => {
    //   if (radio && radio.current && radio.current.checked) {
    //     radio.current.checked = false;
    //   }
    // });
    const radioButtons = document.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
    // Uncheck all checkboxes
    // checkboxRefs.current.forEach((checkbox) => {
    //   if (checkbox && checkbox.current && checkbox.current.checked) {
    //     checkbox.current.checked = false;
    //   }
    // });

    const checkedButtons = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]'
    );
    checkedButtons.forEach((checkedButton) => {
      checkedButton.checked = false;
    });
    resetHandler();
  };

  return (
    <>
      <div className="leftSecFilter">
        <div className={styles.topWrap} onClick={handleClickMweb}>
          <h3>
            Filters{' '}
            <span className={styles.filterToggle}>
              {mwebFilterShow ? <BsFileArrowUp /> : <BsFileArrowDown />}
            </span>
            <span onClick={resetFilter} className={styles.linkBtn}>
              Reset
            </span>
          </h3>
          <h4>
            Showing {filterCount} of {totalCount} offers
          </h4>
        </div>
        <div
          className={`${styles.filterWraSec} ${
            mwebFilterShow ? styles.mwebClass : ''
          }`}
        >
          <ul className={styles.filterListWrap}>
            <li>
              <h4 className={styles.filterHead}>Speed</h4>
            </li>
            {RadioHtmlGen()}
          </ul>
          <ul className={`${styles.filterListWrap} ${styles.provider}`}>
            <li>
              <h4 className={styles.filterHead}>Providers</h4>
            </li>
          </ul>
          <div id='hideContent' className={styles.providers}>
            <select
              ref={selectRef}
              name="providerlist"
              onChange={filterClickHandler}
              className={styles.providerList}
            >
              <option value="">Please choose one</option>
              {providerList.map((item: any) => {
                return (
                  <option key={item.provider.id} value={item.provider.id}>
                    {item.provider.name}
                  </option>
                );
              })}
            </select>
          </div>
          <ul className={styles.newFilter}>{CheckBoxHtmlGen()}</ul>
          <LeftAdComponents />
          <LeftAdComponents />
        </div>
      </div>
    </>
  );
};

export default LeftFilterSection;
