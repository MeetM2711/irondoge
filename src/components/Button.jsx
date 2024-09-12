
function Button({ buttonName, disabled, onClick }) {
  const buttonClass = disabled ? 'button-disabled' : (disabled === undefined ? 'button-active' : 'button');

  return (
    <button 
      className={`button ${buttonClass}`} 
      role="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="text">{buttonName}</span>
      <span className="button-background"></span>
      <span className="button-border"></span>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="remove-black-button" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -1 -1 -1 0 1"
            result="black-pixels"
          />
          <feComposite in="SourceGraphic" in2="black-pixels" operator="out" />
        </filter>
      </svg>
    </button>
  );
}

export default Button;
