const product =
{

    proData: [],

    init() {
        this.proData.push({
            image: 'img/auto1.jpg', title: `Security Chain Company SC1022 Radial Cable Traction Tire Chain`,
            price: `$24.41 + $14.83 Shipping `, category: 'Automotive', bestSeller: false
        });

        this.proData.push({
            image: 'img/comp3.jpg', title: `Acer Chromebook R 11 Convertible Laptop, Celeron N3060`,
            price: `$209.99 + $39.72 Shipping`, category: 'Computers', bestSeller: true
        });

        this.proData.push({
            image: 'img/home3.jpg', title: `Eureka PowerSpeed Bagless Upright Vacuum Cleaner, Lite, Blue`,
            price: `$69.99 + $40.91 Shipping`, category: 'Home&Kitchen', bestSeller: true
        });

        this.proData.push({
            image: 'img/home4.jpg', title: `Deconovo Darkening Thermal Insulated Blackout Grommet Curtain`,
            price: `$9.99 + No Import Fees`, category: 'Home&Kitchen', bestSeller: false
        });

        this.proData.push({
            image: 'img/sport1.jpg', title: `Swimming Goggles No Leaking Anti Fog UV Protection`,
            price: `$12.99 + $7.21 shipping`, category: 'Sports', bestSeller: true
        });

        this.proData.push({
            image: 'img/sport6.jpg', title: `Timberland Men's White Ledge Mid Waterproof Ankle Boot`,
            price: `$64.19 - $215.56`, category: 'Sports', bestSeller: false
        });

    },

    getAllProduct() {
        return this.proData;
    }
}

product.init();
module.exports = product;