import React from "react";
import PropTypes from 'prop-types';

import Overlay from "@j4jinxx/overlay";

/**
 * Minimal Loader/Spinner React Component.
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Loader = (props) => {
    const { opened = false, size = 32, color = '#212121', overlayColor = '#e0e0e0', style = {}, ...rest } = props;
    let elemRef = React.useRef(null);

    React.useEffect(() => {
        if (opened) {
            const divElem = elemRef.current.querySelector('div.am-loader-id');
            let rotate360 = [
                { transform: 'rotate(360deg)' }
            ];
            let slowInfinite = {
                easing: 'linear',
                duration: 2000,
                iterations: Infinity
            };
            divElem.animate(rotate360, slowInfinite);
        }
    }, [opened]);

    return (
        <React.Fragment  >
            <Overlay opened={opened} color={overlayColor} />
            <div style={{
                cursor: `auto`,
                visibility: `hidden`,
                overflow: `hidden`,
                userSelect: `none`,
                display: `block`,
                position: `fixed`,
                zIndex: 1011,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                visibility: (opened ? `visible` : `hidden`),
                ...style,
            }}
                {...rest}
                ref={elemRef}
            >
                {
                    opened
                        ?
                        <div style={{
                            border: `4px solid #f3f3f3`,
                            borderRadius: `50%`,
                            borderTop: `4px solid ${color}`,
                            borderBottom: `4px solid ${color}`,
                            width: `${size - 4}px`,
                            height: `${size - 4}px`
                        }}
                            className="am-loader-id"
                        />
                        :
                        null
                }
            </div>
        </React.Fragment>
    );
};

Loader.propTypes = {
    /**
   * If true, the loader is open   
   */
    opened: PropTypes.bool,
    /**
    * Loader size
    */
    size: PropTypes.number,
    /**
    * Loader Color
    */
    color: PropTypes.string,
    /**
   * Overlay Color
   */
    overlayColor: PropTypes.string,
    /**
     *@ignore
     */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

Loader.defaultProps = {
    opened: false,
    size: 32,
    color: "#212121",
    overlayColor: "#e0e0e0",
};

export default Loader;