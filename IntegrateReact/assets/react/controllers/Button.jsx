
export default function ({disabled}) {
    return <button disabled={disabled}
                   type="submit" className="btn btn-primary">
        <span className="indicator-label">Sign In</span>
        <span className="indicator-progress">Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </span>
    </button>;
}
