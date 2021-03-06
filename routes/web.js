const express = require("express");
const axios = require("axios");
const queryString = require("query-string");
// const { check, oneOf, validationResult } = require("express-validator");
const { google } = require("googleapis");
// goi controller xu ly router homepage
const loginController = require("./../controllers/login");
const gl = require("./../client_secret_695210915131-qm02kh32dfsfjldj87hkkilh3ibadl81.apps.googleusercontent.com.json");
let router = express.Router();

let oauth2Client = new google.auth.OAuth2(
    gl.web.client_id,
    gl.web.client_secret,
    // gl.web.redirect_uris[0]
    // "http://127.0.0.1:5500/receiveCode.html"
    "http://localhost:8989/auth/google"
);

let getGlAuthURL = () => {
    let scopes = [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ];
    return oauth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: scopes, // If you only need one scope you can pass it as string
    });
};
async function getGoogleUser(code) {
    const { tokens } = await oauth2Client.getToken(code);
    console.log(tokens);
    // Fetch the user's profile with the access token and bearer
    const googleUser = await axios
        .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${tokens.id_token}`,
                },
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.message);
        });

    return googleUser;
}

const stringifiedParams = queryString.stringify({
    client_id: process.env.ID_FB_APP,
    redirect_uri: "https://dttl-oauth2.herokuapp.com/authenticate/facebook/",
    scope: ["email", "user_friends"].join(","), // comma seperated string
    response_type: "code",
    auth_type: "rerequest",
    display: "popup",
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

async function getAccessTokenFromCode(code) {
    const { data } = await axios({
        url: "https://graph.facebook.com/v4.0/oauth/access_token",
        method: "get",
        params: {
            client_id: process.env.ID_FB_APP,
            client_secret: process.env.FB_APIKEY,
            redirect_uri:
                "https://dttl-oauth2.herokuapp.com/authenticate/facebook/",
            code,
        },
    });
    console.log("#########1#########");
    console.log(data); // { access_token, token_type, expires_in }
    return data.access_token;
}

async function getFacebookUserData(access_token) {
    const { data } = await axios({
        url: "https://graph.facebook.com/me",
        method: "get",
        params: {
            fields: ["id", "email", "first_name", "last_name"].join(","),
            access_token: access_token,
        },
    });
    console.log("#########2#########");
    console.log(data); // { id, email, first_name, last_name }
    return data;
}

module.exports = () => {
    router.get("/auth/google/url", (req, res, next) => {
        // console.log(getGlAuthURL());
        res.send(getGlAuthURL());
    });
    // login and register
    router.get("/auth/google", async (req, res, next) => {
        let code = req.query.code;
        console.log(code);
        // let googleUser = await getGoogleUser( code );
        // console.log(googleUser);
    });

    router.get("/authenticate/facebook", async (req, res, next) => {
        let code = req.query.code;
        console.log("#########3#########");
        console.log(code);
        let accesstoken = await getAccessTokenFromCode(code);
        let result = await getFacebookUserData(accesstoken)
    
    });
    router.get("/authenticate/facebook/url", (req, res, next) =>
        res.send(facebookLoginUrl)
    );
    router.get("/", (req, res, next) =>
        loginController.getLogin(req, res, next)
    );

    router.post("/login", (req, res, next) =>
        loginController.postLogin(req, res, next)
    );
    router.post("/verifytoken", (req, res, next) =>
        loginController.verifyToken(req, res, next)
    );
    return router;
};
