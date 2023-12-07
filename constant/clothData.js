let clothData = [
    {
        clothID: 0,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Stylish T-Shirt',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmbGD6XnqPrVOfuQZINrrDRfdHKeN8-LZrSUewI6wc8saiT0ENSq160wOJLxvP3RXFgk&usqp=CAU',
            Image2: 'https://www.dickies.ca/dw/image/v2/AAYI_PRD/on/demandware.static/-/Sites-master-catalog-dickies/default/dwbc789c58/images/main/FP888_BK_FR.jpg?sw=1563&sh=2000&sm=fit',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmbGD6XnqPrVOfuQZINrrDRfdHKeN8-LZrSUewI6wc8saiT0ENSq160wOJLxvP3RXFgk&usqp=CAU',
        },
        clothCon: 'A comfortable and stylish t-shirt for everyday wear.',
        clothPrice: '200',
        category: 'shirt'
    },
    {
        clothID: 1,
        clothStatus: 'Out of Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Slim Fit Jeans',
        galleryImages: {
            Image1: 'https://i.ebayimg.com/images/g/C-8AAOSwELZjz0-j/s-l1600.jpg',
            Image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQXh-7eID4eVSBvETib9pR480XqG4lW85iLAtR8vhza5ONeGbDnsNzCpvQeeKe_lS-AQ&usqp=CAU',
            Image3: 'https://i.ebayimg.com/images/g/C-8AAOSwELZjz0-j/s-l1600.jpg',
        },
        clothCon: 'High-quality slim fit jeans for a modern look.',
        clothPrice: '400',
        category: 'jeans'
    },
    {
        clothID: 2,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Casual Hoodie',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWo7pkvLGwcKCKx3q7oLyKn1Nemh8Z_RGi2wweZ3rCDZAbOpOZnEhO1xuFyZ4oSEoHfY&usqp=CAU',
            Image2: 'https://images-eu.ssl-images-amazon.com/images/I/91tRtqkri0L._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWo7pkvLGwcKCKx3q7oLyKn1Nemh8Z_RGi2wweZ3rCDZAbOpOZnEhO1xuFyZ4oSEoHfY&usqp=CAU',
        },
        clothCon: 'Stay warm and comfortable with this casual hoodie.',
        clothPrice: '600',
        category: 'hoodie'
    },
    {
        clothID: 3,
        clothStatus: 'Out of Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Formal Blazer',
        galleryImages: {
            Image1: 'https://assets.ajio.com/medias/sys_master/root/20220810/Anwg/62f3cfeff007dd03e239d47e/-1117Wx1400H-463496392-beige-MODEL2.jpg',
            Image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PQYgmHqAJPQL2XONA1FyIVkU46iTLpxbEqvybZlmesZcTDfSekUpBzqrwh4ZETJplCQ&usqp=CAU',
            Image3: 'https://assets.ajio.com/medias/sys_master/root/20220810/Anwg/62f3cfeff007dd03e239d47e/-1117Wx1400H-463496392-beige-MODEL2.jpg',
        },
        clothCon: 'Elevate your style with this tailored formal blazer.',
        clothPrice: '700',
        category: 'blazer'
    },
    {
        clothID: 4,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Sneakers',
        galleryImages: {
            Image1: 'https://pa.namshicdn.com/product/A9/795831W/4-mobile-web-zoom.jpg',
            Image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12YPtAVGGu70hAYiQ34jS7eyDBe-tGBnuAHgYIVMDEb9qMIWNyPJy36nWT2kfd6q1DaM&usqp=CAU',
            Image3: 'https://pa.namshicdn.com/product/A9/795831W/4-mobile-web-zoom.jpg',
        },
        clothCon: 'Stylish sneakers for a trendy and casual look.',
        clothPrice: '400',
        category: 'footwear'
    },
    {
        clothID: 5,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Summer Dress',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASW46VXGHMl42hiW0fHJiEmLSEJwf_C9qyGiDw_kfNoe-ic0wWAXdgwOcnOOzuLZYmKQ&usqp=CAU',
            Image2: 'https://i.pinimg.com/474x/e3/b8/71/e3b8710046759690d9cfe68279f383c4.jpg',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASW46VXGHMl42hiW0fHJiEmLSEJwf_C9qyGiDw_kfNoe-ic0wWAXdgwOcnOOzuLZYmKQ&usqp=CAU',
        },
        clothCon: 'A light and comfortable dress for the summer season.',
        clothPrice: '300',
        category: 'dress'
    },
    {
        clothID: 6,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Leather Jacket',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z4Gzih1U_wPhC0jLxtpmDy1k4gkFO07TcxcKf6B008OAxIt1zhAN5j_7Eag3Pe-dDYE&usqp=CAU',
            Image2: 'https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666055318.jpg',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z4Gzih1U_wPhC0jLxtpmDy1k4gkFO07TcxcKf6B008OAxIt1zhAN5j_7Eag3Pe-dDYE&usqp=CAU',
        },
        clothCon: 'Add a touch of edginess to your wardrobe with this leather jacket.',
        clothPrice: '1000',
        category: 'jacket'
    },
    {
        clothID: 7,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Stylish T-Shirt',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDInMbIS7Bg5-LXv6OWke25gN9ZzavxfKYrHiDEWbppwtz38ZDY8bQDKRlqHWaX9VFYA&usqp=CAU',
            Image2: 'https://exportbrands.pk/cdn/shop/products/0_2464d0b9-7697-4302-af7f-3e5227e1cd3c_2000x.jpg?v=1555176660',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDInMbIS7Bg5-LXv6OWke25gN9ZzavxfKYrHiDEWbppwtz38ZDY8bQDKRlqHWaX9VFYA&usqp=CAU',
        },
        clothCon: 'A comfortable and stylish t-shirt for everyday wear.',
        clothPrice: '200',
        category: 'shirt'
    },
    {
        clothID: 8,
        clothStatus: 'Out of Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Black Jeans',
        galleryImages: {
            Image1: 'https://focusclothing.pk/cdn/shop/files/1_9c8fc923-5ffe-4987-9dbb-c6847d13dfca_1024x1024.jpg?v=1692700324',
            Image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYsPO-h2iHz2fjZb6V-b05ZFFUZ-kMuykpkPiT2BeDhepQ1PNX8NWOBKw0a3wWHEMUWI&usqp=CAU',
            Image3: 'https://focusclothing.pk/cdn/shop/files/1_9c8fc923-5ffe-4987-9dbb-c6847d13dfca_1024x1024.jpg?v=1692700324',
        },
        clothCon: 'High-quality slim fit jeans for a modern look.',
        clothPrice: '400',
        category: 'jeans'
    },
    {
        clothID: 9,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Black Hoodie',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1Fkn5BuRmdICe4T_mW0MSJn0bweLM6fTOlAlqR2QajHPhK77m2rLsrCgdumLpiDKB1Y&usqp=CAU',
            Image2: 'https://d2z0lqci37nukm.cloudfront.net/media/catalog/product/cache/59d1d247a0855e7654a8594881fa0c03/a/k/akp-42-black_1_d4zcp5hdk3s5hqtt.jpg',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1Fkn5BuRmdICe4T_mW0MSJn0bweLM6fTOlAlqR2QajHPhK77m2rLsrCgdumLpiDKB1Y&usqp=CAU',
        },
        clothCon: 'Stay warm and comfortable with this casual hoodie.',
        clothPrice: '600',
        category: 'hoodie'
    },
    {
        clothID: 10,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Formal Blazer',
        galleryImages: {
            Image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkbbSSWUpEjl9ZwV_Z2oTS1eNElUHuvgCscxlLW3CaXi9IgVbMsktI0IRZ1MiMAxFqMw&usqp=CAU',
            Image2: 'https://imagescdn.planetfashion.in/img/app/product/8/800319-9445037.jpg?auto=format',
            Image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkbbSSWUpEjl9ZwV_Z2oTS1eNElUHuvgCscxlLW3CaXi9IgVbMsktI0IRZ1MiMAxFqMw&usqp=CAU',
        },
        clothCon: 'Elevate your style with this tailored formal blazer.',
        clothPrice: '700',
        category: 'blazer'
    },
]

export default clothData