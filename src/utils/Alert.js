const Alert = (props) => {

    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <h2>{props.AlertText}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;