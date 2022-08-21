import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './AccountPreview.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660820400&x-signature=jvFoV0rci8bICAs8wHwom7qdm5k%3D"
                    alt=""
                    className={cx('avatar')}
                />
                <Button primary className={cx('btn')}>Follow</Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>hoaa.hanassii</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('name')}>Đào Lê Phương Hoa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>13M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>309.4M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
