export const categories = [
  { id: 'all', name: 'All Categories', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80' },
  { id: 'hot-coffee', name: 'Hot Coffee', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
  { id: 'cold-brews', name: 'Cold Brews', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
  { id: 'specialty-tea', name: 'Specialty Tea', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80' },
  { id: 'artisan-pastries', name: 'Artisan Pastries', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
  { id: 'cafe-breakfast', name: 'Cafe Breakfast', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80' },
  { id: 'sweet-desserts', name: 'Sweet Desserts', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
];

export const menuItems = [
  // Hot Coffee
  {
    id: 1,
    name: 'Pure Espresso',
    category: 'hot-coffee',
    price: 290,
    rating: 4.8,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&q=80',
    description: 'Rich double-shot espresso brewed from our specialty organic house blend, boasting tasting notes of hazelnut and dark chocolate.'
  },
  {
    id: 2,
    name: 'Vanilla Cream Coffee',
    category: 'hot-coffee',
    price: 395,
    rating: 4.9,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    description: 'Steamed milk and double shot of espresso blended with house-made Madagascar vanilla bean syrup, topped with a microfoam layer.'
  },
  {
    id: 3,
    name: 'Salted Caramel Coffee',
    category: 'hot-coffee',
    price: 415,
    rating: 4.7,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    description: 'Espresso topped with a thick, velvety layer of aerated milk foam, drizzled with house caramel sauce and a pinch of French sea salt.'
  },
  
  // Cold Brews
  {
    id: 4,
    name: 'Classic Cold Coffee',
    category: 'cold-brews',
    price: 353,
    rating: 4.8,
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    description: 'Slow-steeped for 16 hours in cold water to extract maximum sweetness, served over ice for an incredibly smooth and crisp finish.'
  },
  {
    id: 5,
    name: 'Irish Style Iced Coffee',
    category: 'cold-brews',
    price: 457,
    rating: 4.6,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    description: 'Espresso blended with milk, ice, and premium non-alcoholic Irish cream syrup, topped with fresh whipped cream and chocolate curls.'
  },
  {
    id: 6,
    name: 'Honey Lavender Cold Coffee',
    category: 'cold-brews',
    price: 477,
    rating: 4.9,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy nitro cold brew infused with organic local wildflower honey and subtle culinary lavender buds for a refreshing floral twist.'
  },
  
  // Specialty Tea
  {
    id: 7,
    name: 'Matcha Green Tea Latte',
    category: 'specialty-tea',
    price: 435,
    rating: 4.9,
    badge: 'Healthy',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    description: 'Finely ground stone-milled Japanese green tea whisked with warm oat milk, sweetened slightly with organic blue agave.'
  },
  {
    id: 8,
    name: 'Jasmine Tea',
    category: 'specialty-tea',
    price: 373,
    rating: 4.7,
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    description: 'Premium organic loose-leaf jasmine tea, steeped to perfection in a glass steeper, releasing a calming floral aroma.'
  },
  {
    id: 9,
    name: 'Masala Chai Latte',
    category: 'specialty-tea',
    price: 410,
    rating: 4.8,
    badge: 'Cozy',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'A aromatic blend of black tea, cinnamon, cardamom, ginger, and cloves mixed with steamed milk and dusted with fresh cinnamon.'
  },

  // Artisan Pastries
  {
    id: 10,
    name: 'Butter Croissant',
    category: 'artisan-pastries',
    price: 311,
    rating: 4.8,
    badge: 'Daily Fresh',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    description: 'Flaky, buttery, and golden croissant crafted using imported French butter, laminated by hand and baked to a perfect crisp.'
  },
  {
    id: 11,
    name: 'Chocolate Pastry',
    category: 'artisan-pastries',
    price: 353,
    rating: 4.9,
    badge: 'Daily Fresh',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-rolled butter croissant pastry filled with two batons of premium dark Belgian chocolate, baked fresh every morning.'
  },
  {
    id: 12,
    name: 'Almond Cake',
    category: 'artisan-pastries',
    price: 410,
    rating: 4.7,
    badge: 'Indulgence',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    description: 'A sweet shortcrust pastry shell filled with baked almond frangipane cream, topped with toasted sliced almonds and fresh berries.'
  },

  // Cafe Breakfast
  {
    id: 13,
    name: 'Avocado Toast',
    category: 'cafe-breakfast',
    price: 1037,
    rating: 4.9,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    description: 'Creamy smashed avocado, a perfectly poached organic egg, sliced radishes, heirloom cherry tomatoes, and microgreens on toasted rustic sourdough.'
  },
  {
    id: 14,
    name: 'Salmon Sandwich',
    category: 'cafe-breakfast',
    price: 1158,
    rating: 4.8,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=600&q=80',
    description: 'Toasted artisanal bagel spread with whipped dill cream cheese, wild-caught smoked salmon, sliced red onion, capers, and fresh dill.'
  },
  {
    id: 15,
    name: 'Custard Toast',
    category: 'cafe-breakfast',
    price: 954,
    rating: 4.7,
    badge: 'Indulgence',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    description: 'Thick-cut vanilla bean brioche soaked in rich custard, pan-griddled until golden, served with fresh berries, maple syrup, and whipped cream.'
  },

  // Sweet Desserts
  {
    id: 16,
    name: 'Chocolate Fudge Cake',
    category: 'sweet-desserts',
    price: 622,
    rating: 4.9,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    description: 'A slice of moist triple-layered chocolate fudge cake, frosted with silky chocolate buttercream and topped with a shiny chocolate glaze and fresh raspberry.'
  },
  {
    id: 17,
    name: 'Vanilla Cheesecake',
    category: 'sweet-desserts',
    price: 660,
    rating: 4.8,
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
    description: 'Velvety smooth vanilla bean cheesecake baked on a buttery speculoos cookie crust, served with a sweet strawberry coulis.'
  },
  {
    id: 18,
    name: 'Caramel Macarons',
    category: 'sweet-desserts',
    price: 706,
    rating: 4.6,
    badge: 'Indulgence',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80',
    description: 'A box of 4 handmade Parisian almond macarons filled with smooth house-cooked sea salt caramel butter filling.'
  }
];
