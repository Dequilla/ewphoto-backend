module.exports = {
  categories: [
    {
      name: "Print",
      slug: "print",
    },
    {
      name: "Calender",
      slug: "calender",
    },
  ],
  products: [
    {
      id: 1,
      title: "Autumn in Röttle",
      description:
        "En amazing autumn night in Röttle Village outside of Gränna. Today the property is renovated and yet as beautiful, however the vines are gone.",
      price: 100.00,
      slug: "autumn-in-rottle",
      status: "published",
      Custom_field: [
        {
          id: 1,
          title: "Select the size of your Print",
          required: true,
          options: "Small (30x45cm)[+45.00]|Medium (50x75cm)[+158.00]|Large (70x100)[+305.00]",
        },
      ],
      image: "06102019_img_0958_photoshopped_small_edd79814de.jpg",
      categories: [
        {
          id: 1,
        },
      ],
    },
  ],
};
