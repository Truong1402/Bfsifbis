
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';



import styles from "./search.module.scss"
import AccountItem from "~/components/AccountItem"

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()
    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
            })

    }, [searchValue])

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <Tippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {searchResult.map((result) => (
                        <AccountItem key={result.id} data = {result}/>

                    ))}
                </div>
            )}
        >
            <div className={cx('seach')}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    className={cx('search-input')} placeholder='Tìm Kiếm' />
                {!!searchValue && (
                    <button className={cx('seach-btn')} onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus()

                    }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                )}


            </div>
        </Tippy>
    );
}

export default Search;