import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const user = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navBackground">
                    <img
                        src="./assets/WalletWiz logo.png"
                        className="logoP2"
                        alt="WalletWiz header logo"
                    />
                    <a className="navbar-brand" href="#">
                        WalletWhiz
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-fluid registerPage">
                <h3 className="tagline">User Profile</h3>
                <div className="displayCards">
                    <h3 className="formBoxHeader">Link Bank Account</h3>
                    <div className="form-floating formInputs">
                        <input
                            type="email"
                            className="form-control"
                            id="registerEmail"
                            name="email"
                            placeholder="name@example.com"
                        />
                        <label className="formLabel" for="floatingInput">
                            Bank Name
                        </label>
                    </div>
                    <div className="form-floating formInputs">
                        <input
                            type="password"
                            className="form-control"
                            id="registerPassword"
                            name="password"
                            placeholder="Password"
                        />
                        <label className="formLabel" for="floatingPassword">
                            Checking #
                        </label>
                    </div>
                    <div className="form-floating formInputs">
                        <input
                            type="password"
                            className="form-control"
                            id="repeatPassword"
                            name="passwordConfirm"
                            placeholder="Password"
                        />
                        <label className="formLabel" for="floatingPassword">
                            Routing #
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg">
                        Link
                    </button>
                </div>
            </div>
            <div className="container-fluid appFeaturesBox">
                <h2 className="featuresHeader">
                    What does WalletWhiz have to offer you?
                </h2>
                <div className="container-fluid featuresBoxInner">
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz tracks your transactions in real time so that you can
                            accurately manage incoming and outgoing finances
                        </h3>
                    </div>
                    <div className="line"></div>
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz has tools to analyze your spending habits so you can
                            save more money for the things you want
                        </h3>
                    </div>
                    <div className="line"></div>
                    <div className="container-fluid featuresTextBox">
                        <h3 className="featuresText">
                            WalletWhiz is made by people like you, for people like you. We
                            implemented features that we want to track our own finances
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default user;
