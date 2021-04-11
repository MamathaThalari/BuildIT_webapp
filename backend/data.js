import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Mamatha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      
    },
    {
      name: 'Devi',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
       
        name: 'Grey Basin Tap',
        category: 'Plumbing',
        image: './images/grey_basin_tap.jpg ',
        price: 800,
        countInStock: 10,
        brand: 'Cera',
        rating: 4.5,
        numReviews: 15,
        description: 'Wash Basin Mixer tap',
      },

      {
       
        name: 'kitchen Tap',
        category: 'Plumbing',
        image: './images/kitchen_mixer.jpeg',
        price: 500,
        countInStock: 10,
        brand: 'Cera',
        rating: 5,
        numReviews: 10,
        description: 'Kitchen Wash Basin Mixer tap',
      },
      {
     
        name: 'Wash Basin',
        category: 'Plumbing',
        image: './images/ceramic_washbasin.jpg',
        price: 2500,
        countInStock: 10,
        brand: 'Hindware',
        rating: 4.5,
        numReviews: 20,
        description: 'Ceramic washbasin',
      },
      {
       
        name: 'Modern Wash basin',
        category: 'Plumbing',
        image: './images/Baasin.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Somany',
        rating: 4.5,
        numReviews: 10,
        description: 'Stylish stone basin for living room',
      },
      {
      
        name: 'parking tiles(1pc)',
        category: 'Tiles',
        image: './images/parking-tiles.jpeg',
        price: 25,
        countInStock: 0,
        brand: 'Ivory Neo',
        rating: 3.5,
        numReviews: 10,
        description: 'Thickness: 14 mm, Size: 305x305 mm.',
      },
      {
        
        name: 'Modren Car Parking tiles(1pc)',
        category: 'Tiles',
        image: './images/car_parking_tiles.jpg',
        price: 120,
        countInStock: 20,
        brand: 'Ivory Neo',
        rating: 4.5,
        numReviews: 10,
        description: 'Thickness: 14 mm, Size: 305x305 mm.',
      },
      
      
    ],
  };
  export default data;
