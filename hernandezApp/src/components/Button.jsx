function Button({ label, onClick, variant = 'primary', children }) {
	return (
		<button className={`button button-${variant}`} type="button" onClick={onClick}>
			<span>{label}</span>
			{children}
		</button>
	)
}

export default Button
