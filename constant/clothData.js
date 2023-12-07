let clothData = [
    {
        clothID: 0,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Stylish T-Shirt',
        galleryImages: {
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image2: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1701986952~exp=1701987552~hmac=d80897ff4d80f95f70ef4c849efdd7e94ab6538503b99506b8a6f614e39eeccb',
            Image4: 'https://www.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_27828397.htm#query=background%20t%20shirt&position=16&from_view=keyword&track=ais&uuid=d1121ef4-f680-498c-87d3-6d63bfad2a58',
        },
        clothCon: 'Elevate your style with this tailored formal blazer.',
        clothPrice: '700',
        category: 'blazer'
    },
]

export default clothData