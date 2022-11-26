const isAuthed = (req) => {
    return req.session.user ? true : false
}