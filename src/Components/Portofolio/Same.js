import './same.css';

function Same({heading, description}) {
    return (
        <div className='same'>
            <h1>{heading}</h1>
            <p>{description}</p>
            <br />
            <hr />
            <br />
        </div>
    );
}
export default Same;