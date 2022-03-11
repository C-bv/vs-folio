const Elipsis = (props) => {
    return (
        <svg
            height={16}
            width={16}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
    );
}

export default Elipsis;