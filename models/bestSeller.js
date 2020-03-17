const bestSeller =
{

    bestSell: [],

    init() {
        this.bestSell.push({
            image: 'img/comp3.jpg', title: `Acer Chromebook R 11 Convertible Laptop, Celeron N3060`,
            price: `$209.99 + $39.72 Shipping`, category: 'Computers', bestSeller: true
        });

        this.bestSell.push({
            image: 'img/home3.jpg', title: `Eureka PowerSpeed Bagless Upright Vacuum Cleaner, Lite, Blue`,
            price: `$69.99 + $40.91 Shipping`, category: 'Home&Kitchen', bestSeller: true
        });

        this.bestSell.push({
            image: 'img/sport1.jpg', title: `Swimming Goggles No Leaking Anti Fog UV Protection`,
            price: `$12.99 + $7.21 shipping`, category: 'Sports', bestSeller: true
        });
    },

    getAllBestSell() {
        return this.bestSell;
    }
}

bestSeller.init();
module.exports = bestSeller;