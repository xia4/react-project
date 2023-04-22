import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss"

const cx = classNames.bind(styles);

function Box({ size, color }) {
    return (
      <div className = {cx('margin', size, color)}>
        세팅 완료
        </div>
    );
}

Box.defaultProps = {
  size: 'medium',
  color: 'blue',
  border: 'solid'
}

export default Box;
