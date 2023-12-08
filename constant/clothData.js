let clothData = [
    {
        clothID: 0,
        clothStatus: 'In Stock',
        clothImg: 'shirt.png',
        clothTitle: 'Stylish T-Shirt',
        galleryImages: {
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
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
            Image1: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image2: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
            Image3: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448807.jpg?w=740&t=st=1702039140~exp=1702039740~hmac=db175b89a800d5b802f40fa514ae9c4ba7f3cdd7f76ac66b48a436039d585574',
            Image4: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448767.jpg?w=740&t=st=1702039141~exp=1702039741~hmac=8d218c6cff93512da5ee6926a69b382e7276968f9e0a4ed9d534b3aa1163a630',
        },
        clothCon: 'Elevate your style with this tailored formal blazer.',
        clothPrice: '700',
        category: 'blazer'
    },
]

export default clothData