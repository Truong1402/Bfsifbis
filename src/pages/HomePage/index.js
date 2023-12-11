import classNames from 'classnames/bind'

import styles from './home.module.scss'

const cx = classNames.bind(styles)

function HomePage() {


    return (
        <div className={cx('wapper')}></div>
    )
}

export default HomePage