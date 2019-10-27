export default class PropertyController {
    static renderAddPropertyPage (req, res) {
        res.render('add-property');
    }

    static renderSinglePropertiesPage(req, res) {
        res.render('property-single-slider');
    }

    static renderPropertiesPage(req, res) {
        res.render('properties-list');
    }
}