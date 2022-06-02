// For index View sending path to other layout than default
const indexView = (req, res) => {
    res.render("index", { title: 'Ernest', layout: './layouts/full-width' });
}

module.exports = {
    indexView
};