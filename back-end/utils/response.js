exports.response = (res, msg, data, status) => {
    return res.status(200).json({
        status: status,
        message: msg,
        data: data
    });
}