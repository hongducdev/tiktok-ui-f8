import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

const AccountItem = (props) => {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1660820400&x-signature=jvFoV0rci8bICAs8wHwom7qdm5k%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>hoaa.hanassii</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <p className={cx('name')}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
};

AccountItem.propTypes = {

};

export default AccountItem;
