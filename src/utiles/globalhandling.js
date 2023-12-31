


export const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            return next(new Error(err.message, { cause: 500 }))
        })
    }
}

 const globalErrHandling = (err, req, res, next) => {
    if (err) {
        if (process.env.MOOD == 'DEV') {
            console.log(err.cause);
            return res.status(err.cause || 500).json({
                message: err.message,
                err,
                stack: err.stack
            })
        }
        return res.status(err.cause || 500).json({ message: err.message, err })
    }
}
export default globalErrHandling