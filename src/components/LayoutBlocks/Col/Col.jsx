;

export default function Col({ children, className }) {
    return (
        <div className={`col basis-auto${className ? ' ' + className : ""}` } >
            {children}
        </div>
    )
}

