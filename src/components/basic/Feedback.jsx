const Feedback = (props) => {
  return (
    <div className="p-3 m-2 border rounded shadow-sm d-flex flex-column" id="feedbackbox">
      <div>
        <div className="d-flex align-items-center mb-3">
          <img
            src={props.image}
            alt={props.name}
            className="rounded-circle me-3 img-fluid"
          />
          <div>
            <p className="m-0 fw-bold">{props.name}</p>
            <p className="m-0 text-muted">{props.occ}</p>
          </div>
        </div>
        <p className="text-muted">“{props.feedback}”</p>
      </div>
    </div>
  );
}

export default Feedback;
