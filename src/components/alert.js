import './alert.css'
function AlertShow({ onClickedYes, onClickedNo }) {
    return (
        <div className='Alert'>
            <h1>Are you sure you want to delete?</h1>
            <div className='answer'>
                <button onClick={onClickedYes}>
                    <h2>Yes</h2>
                </button>
                <button onClick={onClickedNo}>
                    <h2>No</h2>
                </button>
            </div>
        </div>

    );
}

export default AlertShow;