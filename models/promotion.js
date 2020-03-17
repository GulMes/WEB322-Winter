const promotion =
{
    promotions: [],

    init() {
        this.promotions.push({ image: "img/promotion1.jpg" });
        this.promotions.push({ image: "img/promotion2.jpg" });
    },

    getAllPromotions() {
        return this.promotions;
    }
}

promotion.init();
module.exports = promotion;