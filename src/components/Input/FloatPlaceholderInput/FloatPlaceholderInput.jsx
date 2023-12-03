import React, { useState } from "react";
import classNames from "classnames";
import style from "./FloatPlaceholderInput.module.css";

/**
 * @readonly
 * @enum {string}
 */
const InputStatus = {
  default: "default",
  valid: "valid",
  invalid: "invalid"
}

/**
 * @callback validatorCb
 * @param {?string} value
 * @returns {?string}
 */

/**
 * @module FloatPlaceholder
 * @param {object} props
 * @param {?string} props.placeholder
 * @param {?boolean} props.required
 * @param {?string} props.errorText
 * @param {?boolean} props.readOnly
 * @param {?validatorCb} props.validator
 * @param {?string} props.className
 * @returns {JSX.Element}
 * @export module:FloatPlaceholder
 */
export default function FloatPlaceholder(props) {
  const { placeholder, errorText, required = false, readOnly = false, className, validator } = props;
  const [ inputStatus, setInputStatus ] = useState({
    errorText: null,
    className: InputStatus.default,
  });
  const onValueChange = (e) => {
    const value = e.target.value;
    if (typeof validator === "function") {
      const errorText = validator(value);
      if (errorText) {
        setInputStatus({
          errorText,
          className: InputStatus.invalid,
        });
      } else {
        setInputStatus({
          errorText,
          className: InputStatus.valid
        });
      }
      return;
    }
    if (required && !value) {
      setInputStatus({
        errorText,
        className: InputStatus.invalid
      });
      return;
    }
    if (!required && !value) {
      setInputStatus({
        errorText: null,
        className: InputStatus.default
      });
      return;
    }
    if (value) {
      setInputStatus({
        errorText: null,
        className: InputStatus.valid
      });
      return;
    }
  }

  return (
    <div className={classNames(style["input-box"], className)}>
      <input
        type="text"
        className={classNames(style["input"], {
          [style[InputStatus.invalid]]: inputStatus.className === InputStatus.invalid,
          [style[InputStatus.valid]]: inputStatus.className === InputStatus.valid
        })}
        required={required}
        readOnly={readOnly}
        onChange={onValueChange}
      />
      <span className={style["placeholder"]}>{placeholder}</span>
      <span
        className={classNames(style["error-text"], {
          [style["error-text__show"]]: !!inputStatus.errorText,
          [style["error-text__hide"]]: !inputStatus.errorText
        })}
      >
          {inputStatus.errorText}
      </span>
    </div>
  )
}