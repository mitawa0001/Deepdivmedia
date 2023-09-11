const Alert = (props) => {

    return (
        props.AlertText && <div class={`alert alert-${props.AlertText.type} alert-dismissible fade show`} role="alert">
            <h3>{props.AlertText.msg} : {props.AlertText.type}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;