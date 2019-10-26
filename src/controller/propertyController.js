export default class PropertyController {
    static renderSinglePropertiesPage(req, res) {
        res.render('property-single-slider');
    }

    static renderPropertiesPage(req, res) {
        res.render('properties-list');
    }
}