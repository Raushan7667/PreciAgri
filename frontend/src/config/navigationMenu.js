export const navigation = {
  categories: [
    {
      id: 'seed',
      name: 'Seed',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AoXxEa-ufs2oXHUnrQrGCiY1mtUm3O7xBQ&s',
          imageAlt: '',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: '',
          imageAlt: '.',
        },
      ],
      sections: [
        {
          id: 'monocotyledons',
          name: 'Monocotyledons',
          items: [
            { name: 'Wheat', id: "wheat", href: `{women/clothing/tops}` },
            { name: 'Rice', id: "rice", href: '#' },
            { name: 'Maize', id: 'maze' },

            { name: 'Barley', id: 'barley' },

            { name: 'Sugarcane', id: 'sugarcane' },
            { name: 'Millet', id: 'millet' },
            { name: 'Coconut', id: 'coconut' },
            { name: 'Oil Palm', id: 'oilpalm' },
          ],
        },
        {
          id: 'dicotyledons',
          name: 'Dicotyledons',
          items: [
            { name: 'Sunflower', id: 'sunflower' },
            { name: 'Soybean', id: 'soybean' },
            { name: 'Peanut', id: 'peanut' },
            { name: 'Tomato', id: 'tomato' },
            { name: 'Mustard', id: 'mustard' },
            { name: 'Almond', id: 'almond' },
          ],
        },

      ],
    },
    {
      id: 'pesticides',
      name: 'Pesticides',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'insecticides',
          name: 'Insecticides',
          items: [
            { name: 'Malathion 50% EC', id: 'malathion' },
            { name: 'Dichlorvos (DPVP) 76% EC', id: 'dichlorvos' },
            { name: 'Dicofol 18 5', id: 'dicofol' },
            { name: 'Phosphamidon 40% SL', id: 'phosphamidon' },
            { name: 'Monocrotophos 36% SL', id: 'monocrotophos' },
            { name: 'Phorate 10% CG', id: 'phorateCG' },
            { name: 'Carbofuran 3%', id: 'carbofuran' },
            { name: 'Dimethoate 30% EC', id: 'dimethoateEC' },
            { name: 'Chlorpyriphos 20% EC', id: 'chlorpyriphos' },
            { name: 'Cpermethrin 10% c', id: 'ypermethrin' },


          ],
        },
        {
          id: 'herbicides',
          name: 'Herbicides',
          items: [
            { name: 'Butachlor', id: 'butachlor' },
            { name: 'Glyphosate', id: 'glyphosate' },
          ],

        },
        {
          id: 'fungicides',
          name: 'Fungicides',
          items: [
            { name: 'Mancozeb', id: 'mancozeb' },
            { name: 'Sulphur', id: 'sulphur' },
            { name: 'Metalaxyl', id: 'metalaxyl' },
            { name: 'Captan', id: 'captan' },
            { name: 'Thiophanate Methyl', id: 'thiophanate methyl' },
            { name: 'Hexaconazole', id: 'hexaconazole' },
            { name: 'Propiconazole', id: 'propiconazole' },
          ],

        },
      ],
    },
    {
      id: 'crops',
      name: 'Crops',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: '',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            '',
        },
      ],
      sections: [
        {
          id: 'fruits:',
          name: 'Fruits',
          items: [
            { name: 'Apple', id: 'apple' },
            { name: 'Banana', id: 'banana' },
            { name: 'Mango', id: 'mango' },
            { name: 'Grape', id: 'grape' },
            { name: 'Orange', id: 'orange' },
          ],

        },
        {
          id: 'vegetables',
          name: 'Vegetables',
          items: [
            { name: 'Potato', id: 'potato' },
            { name: 'Tomato', id: 'tomato' },
            { name: 'Onion', id: 'onion' },
            { name: 'Carrot', id: 'carrot' },
            { name: 'Spinach', id: 'spinach' },
          ],

        },
        {
          id: 'grains and pulses',
          name: 'Grains and Pulses',
          items: [
            { name: 'Wheat', id: 'wheat' },
            { name: 'Rice', id: 'rice' },
            { name: 'Barley', id: 'barley' },
            { name: 'Corn', id: 'corn' },
            { name: 'Oats', id: 'oats' },
            { name: 'Lentils', id: 'lentils' },
            { name: 'Chickpeas', id: 'chickpeas' },
            { name: 'Black Beans', id: 'black beans' },
            { name: 'Kidney Beans', id: 'kidney beans' },
            { name: 'Green Gram', id: 'green gram' },
          ],

        },
      ],

    },

  ],


  pages: [
    {
      name: 'Company',
      id: '/',
      path: '/companies',
    },

    { name: 'News', 
      id: '/',
      path:"/news"
     },

     {
      name:"Farming Tips",
      id: 'farming-tips',
      path: '/farming-tips',
     }
  ],
}