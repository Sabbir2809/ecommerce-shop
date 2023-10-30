const Button = ({ onClick, isSubmit, text, className }) => {
  if (isSubmit === false) {
    return (
      <button onClick={onClick} type="submit" className={className}>
        {text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={className}>
        <div className="spinner-border spinner-border-sm" role="status"></div>
        Processing...
      </button>
    );
  }
};

export default Button;
