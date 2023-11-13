import * as React from 'react';

function User() {
    return (
        <div className="userpage">
            <div className="container-fluid registerPage">
                <h3 className="tagline">User Profile</h3>
                <div className="displayCards">
                    <h3 className="cardHeader">Account Information</h3>
                    <div className="form-floating formInputs">
                    </div>
                </div>
                <div className="usertextbottom">
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
                            <div className="container-fluid featuresTextBox">
                                <h3 className="featuresText">
                                    WalletWhiz has tools to analyze your spending habits so you can
                                    save more money for the things you want
                                </h3>
                            </div>
                            <div className="container-fluid featuresTextBox">
                                <h3 className="featuresText">
                                    WalletWhiz is made by people like you, for people like you. We
                                    implemented features that we want to track our own finances
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
