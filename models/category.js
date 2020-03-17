const category =
{
    categories: [],

    init() {
        this.categories.push({ title: 'Automotive', image: "img/auto-category.jpg" });

        this.categories.push({ title: 'Computers', image: "img/comp-category.jpg" });

        this.categories.push({ title: 'Home&Kitchen', image: "img/home-category.jpg" });

        this.categories.push({ title: 'Sports', image: "img/sport-category.jpg" });

    },

    getAllCategories() {
        return this.categories;
    }
}

category.init();
module.exports = category;