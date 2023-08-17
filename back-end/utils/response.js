exports.response = (res, msg, data) => {
    return res.status(200).json({
        status: 200,
        message: msg,
        data: data
    });
}