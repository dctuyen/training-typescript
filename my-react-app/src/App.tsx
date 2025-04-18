import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <div className={"col-md-3"}>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            />
        </div>

    );
}

export default function Gallery() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1>Amazing scientists</h1>
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>

            </div>
        </>

    );
}

