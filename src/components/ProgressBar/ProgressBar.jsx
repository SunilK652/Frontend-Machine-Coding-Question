const ProgressBar = ({ progress }) => {
    return (
        
        <div className="container">
        <div className="outer">
            <div
                className="inner"
                style={{
                    //width: `${progress}%`
                    transform: `translateX(${progress - 100})`
                }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemax={100}
                aria-valuemin={0}
            >
                {progress}%
            </div>
        </div>
        </div>
    );
}
export default ProgressBar;