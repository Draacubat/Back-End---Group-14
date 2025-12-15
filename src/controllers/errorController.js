import httpsStatus from "http-status-codes";

const pageNotFound = (req, res) => {
    let errorCode = httpsStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

const serverError = (error, req, res, next) => {
    let errorCode = httpsStatus.INTERNAL_SERVER_ERROR;
    console.log(`Error occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, the website has hit against some unknown invisible code barrier!`)
};

export const errorController = {
    pageNotFound,
    serverError
};