const WindowMaximizeIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
            height={16}
            width={16}
            {...props}
        >
            <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/>
        </svg>
    );
};

export default WindowMaximizeIcon;