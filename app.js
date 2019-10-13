const products = [
    {
        id: 1,
        name: 'куртка красная',
        img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
        category: 'куртки',
        oldPrice: 5880,
        price: 4790,
        brand: 'super',
        size: 31,
        color: 'красный'
    },
    {
        id: 2,
        name: 'куртка большая',
        img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
        category: 'куртки',
        oldPrice: 5900,
        price: 3790,
        brand: 'super',
        size: 42,
        color: 'зеленый'
    },
    {
        id: 3,
        name: 'куртка модная',
        img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
        category: 'куртки',
        price: 5550,
        brand: 'puper',
        size: 29,
        color: 'красный'
    },
    {
        id: 4,
        name: 'куртка выгодная',
        img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
        category: 'куртки',
        oldPrice: 7900,
        price: 1990,
        brand: 'super',
        size: 29,
        color: 'зеленый'
    }
];

var app = new Vue({
    el: '#app',
    data: {
        products: products,
        expandedProductIds: [],
        brand: '',
        size: '',
        color: ''
    },
    computed: {
        filteredProducts: function () {
            const result = [];

            for (i in this.products) {
                const product = this.products[i];

                if (this.brand && product.brand != this.brand) continue;
                if (this.size && product.size != this.size) continue;
                if (this.color && product.color != this.color) continue;

                result.push(product);
            }

            return result;
        }
    },
    methods: {
        addToCart(product) {
            alert('куплен товар ' + product.name);
        },
        toggleProductExpanded(product) {
            const productIndex = this.expandedProductIds.indexOf(product.id);
            if (productIndex >= 0) {
                this.expandedProductIds.splice(productIndex, 1);
            } else {
                this.expandedProductIds.push(product.id);
            }
        },
        isProductExpanded(product) {
            return this.expandedProductIds.indexOf(product.id) >= 0;
        }
    }
});