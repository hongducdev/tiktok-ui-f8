import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
        .then(res => res.json())
        .then(async (res) => {
            setSearchResult(res.data);
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
        })
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setSearchResult(false)
    }

    return ( 
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    placeholder="Search accounts and videos" 
                    value={searchValue}
                    spellCheck={false} 
                    onChange={((e) => {setSearchValue(e.target.value)})} 
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> }

                <button className={cx('search-btn')}>
                    <SearchIcon/>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;