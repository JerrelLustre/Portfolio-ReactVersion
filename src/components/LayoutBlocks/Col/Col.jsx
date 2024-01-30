;

export default function Col({ children, className }) {
    return (
        <div className={`col basis-auto min-w-0${className ? ' ' + className : ""}` } >
            {children}
        </div>
    )
}

