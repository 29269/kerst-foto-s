const foto=[
  "https://images.pexels.com/photos/3334355/pexels-photo-3334355.jpeg?cs=srgb&dl=happy-new-year-text-3334355.jpg&fm=jpg",
  "https://images.pexels.com/photos/3274588/pexels-photo-3274588.jpeg?cs=srgb&dl=snowman-with-red-hat-3274588.jpg&fm=jpg",
  "https://images.pexels.com/photos/3394266/pexels-photo-3394266.jpeg?cs=srgb&dl=wine-glasses-and-pictures-on-table-3394266.jpg&fm=jpg",
  "https://images.pexels.com/photos/1268667/pexels-photo-1268667.png?cs=srgb&dl=buildings-celebration-city-1268667.jpg&fm=jpg",
  "https://images.pexels.com/photos/1652419/pexels-photo-1652419.jpeg?cs=srgb&dl=selective-focus-photo-of-sweater-christmas-tree-ornament-1652419.jpg&fm=jpg",
  "https://images.pexels.com/photos/6279/purple-animal-tree-animals.jpg?cs=srgb&dl=animal-animals-ball-6279.jpg&fm=jpg",
  "https://images.pexels.com/photos/3183392/pexels-photo-3183392.jpeg?cs=srgb&dl=man-and-woman-wearing-santa-hats-sitting-on-sofa-popping-a-3183392.jpg&fm=jpg",
  "https://images.pexels.com/photos/3171830/pexels-photo-3171830.jpeg?cs=srgb&dl=selective-focus-photography-of-smiling-women-standing-behind-3171830.jpg&fm=jpg",
  "https://images.pexels.com/photos/1261373/pexels-photo-1261373.jpeg?cs=srgb&dl=woman-in-gray-cardigan-giving-white-gift-box-1261373.jpg&fm=jpg",
  "https://images.pexels.com/photos/284011/pexels-photo-284011.jpeg?cs=srgb&dl=beautiful-bokeh-christmas-284011.jpg&fm=jpg"
];

for(i=0; i < 10; i++) {
  container.innerHTML+='<img src="'+foto[i]+'" alt="newyear '+ i +'" id="plaatje'+ i +'">'
};
