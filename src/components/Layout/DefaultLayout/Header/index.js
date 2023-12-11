


import classNames from 'classnames/bind';
import styles from './header.module.scss'
import images from '~/assets/images';
import Search from '~/components/Search';

const cx = classNames.bind(styles)

function Header() {

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt='Tiktok'></img>
                </div>

                <Search />

                <div className='actions'>

                </div>
            </div>
        </header>
    )



        ;
}

export default Header;