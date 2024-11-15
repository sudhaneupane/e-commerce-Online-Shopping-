import forever from "./forever.png";
import search_icon from "./magnifying-glass.png";
import profile_icon from "./user.png";
import cart_icon from "./shopping-bag.png";
import menu_icon from "./menu-icon.webp";
import back_icon from "./back-icon.webp";
import hero_pic from "./hero-pic.jpg";
import round_neck from "./round-neck.webp";
import men_slim_jean from "./slim-jean.webp";
import women_floral_skirt from "./women-floral-skirt.webp";
import cartoon_tshirt from "./cartoon_tshirt.webp";
import polo_tshirt from "./polo_tshirt.webp";
import denim_shorts from "./denim_shorts.webp";
import sweatshirt from "./kids_sweatshirt.webp";
import graphic_tshirt from "./graphic_tshirt.webp";
import crop_top from "./crop_top.webp";
import formal_trouser from "./formal_trouser.webp";
import kids_joggers from "./kids_joggers.webp";
import ankle_boots from "./ankle_boots.webp";
import hooded_sweatshirt from "./sweatshirt.webp";
import women_blazer from "./blazer.webp";
import maxi_dress from "./maxi_dress.webp";
import leatherjacket from "./leatherjacket.webp";
import men_pant from "./men_pant.webp";
import sport_legging from "./sport_legging.webp";
import high_waist_jean from "./high_waist_jean.webp";
import casual_tshirt from "./casual_tshirt.webp";
import exchange_icon from "./exchange.png";
import return_policy_icon from "./distribution.png";
import customer_support from "./help-call.png";
import dropdown_icon from "./arrow-down.png";
import close_icon from "./close.png";
import star_icon from "./star.png";
import dull_star_icon from "./star1.png";
import bin_icon from "./recycle-bin.png";
import about_us from "./about.jpg";
import contact_us from "./contact.jpg";

export const assets = {
  forever,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  back_icon,
  hero_pic,
  exchange_icon,
  return_policy_icon,
  customer_support,
  dropdown_icon,
  close_icon,
  star_icon,
  dull_star_icon,
  bin_icon,
  about_us,
  contact_us
};

export const products = [
  {
    _id: "01",
    bestseller: true,
    category: "Women",
    date: "2024-05-01",
    name: "Women Round Neck T-shirt",
    price: "1200",
    image: round_neck,
    sizes: ["M", "S", "L", "XL"],
    subCategory: "TopWear",
  },
  {
    _id: "02",
    bestseller: false,
    category: "Men",
    date: "2024-06-12",
    name: "Men Slim Fit Jeans",
    price: "1800",
    image: men_slim_jean,
    sizes: ["M", "L", "XL"],
    subCategory: "BottomWear",
    description: "knjsdfhbgtidfknjc",
  },
  {
    _id: "03",
    bestseller: true,
    category: "Women",
    date: "2024-04-18",
    name: "Women Floral Skirt",
    price: "1500",
    image: women_floral_skirt,
    sizes: ["S", "M", "L"],
    subCategory: "BottomWear",
  },
  {
    _id: "04",
    bestseller: false,
    category: "Kids",
    date: "2024-03-20",
    name: "Kids Cartoon T-shirt",
    price: "700",
    image: cartoon_tshirt,
    sizes: ["S", "M"],
    subCategory: "TopWear",
  },
  {
    _id: "05",
    bestseller: true,
    category: "Men",
    date: "2024-07-15",
    name: "Men Classic Polo Shirt",
    price: "1400",
    image: polo_tshirt,
    sizes: ["L", "XL", "XXL"],
    subCategory: "TopWear",
  },
  {
    _id: "06",
    bestseller: false,
    category: "Women",
    date: "2024-08-02",
    name: "Women Maxi Dress",
    image: maxi_dress,
    price: "2000",
    sizes: ["M", "S", "L"],
    subCategory: "Dresses",
  },
  {
    _id: "07",
    bestseller: true,
    category: "Kids",
    date: "2024-09-05",
    name: "Kids Denim Shorts",
    price: "800",
    image: denim_shorts,
    sizes: ["S", "M", "L"],
    subCategory: "BottomWear",
  },
  {
    _id: "08",
    bestseller: false,
    category: "Men",
    date: "2024-02-11",
    name: "Men Leather Jacket",
    price: "3500",
    image: leatherjacket,
    sizes: ["M", "L", "XL"],
    subCategory: "Outerwear",
  },
  {
    _id: "09",
    bestseller: true,
    category: "Women",
    date: "2024-10-15",
    name: "Women High Waist Jeans",
    price: "1700",
    image: high_waist_jean,
    sizes: ["S", "M", "L", "XL"],
    subCategory: "BottomWear",
  },
  {
    _id: "10",
    bestseller: true,
    category: "Men",
    date: "2024-09-25",
    name: "Men Striped Casual T-shirt",
    price: "1300",
    image: casual_tshirt,
    sizes: ["M", "L", "XL"],
    subCategory: "TopWear",
  },
  {
    _id: "11",
    bestseller: false,
    category: "Women",
    date: "2024-01-29",
    name: "Women Blazer",
    price: "2500",
    image: women_blazer,
    sizes: ["S", "M", "L"],
    subCategory: "Outerwear",
  },
  {
    _id: "12",
    bestseller: false,
    category: "Men",
    date: "2024-07-10",
    name: "Men Chino Pants",
    price: "1600",
    image: men_pant,
    sizes: ["M", "L", "XL", "XXL"],
    subCategory: "BottomWear",
  },
  {
    _id: "13",
    bestseller: true,
    category: "Women",
    date: "2024-03-22",
    name: "Women Sports Leggings",
    price: "900",
    image: sport_legging,
    sizes: ["S", "M", "L"],
    subCategory: "ActiveWear",
  },
  {
    _id: "14",
    bestseller: true,
    category: "Kids",
    date: "2024-04-09",
    name: "Kids Sweatshirt",
    image: sweatshirt,
    price: "1100",
    sizes: ["S", "M", "L"],
    subCategory: "Outerwear",
  },
  {
    _id: "15",
    bestseller: false,
    category: "Men",
    date: "2024-08-14",
    name: "Men Graphic T-shirt",
    price: "900",
    image: graphic_tshirt,
    sizes: ["M", "L", "XL"],
    subCategory: "TopWear",
  },
  {
    _id: "16",
    bestseller: true,
    category: "Women",
    date: "2024-06-18",
    name: "Women Crop Top",
    price: "800",
    image: crop_top,
    sizes: ["S", "M", "L"],
    subCategory: "TopWear",
  },
  {
    _id: "17",
    bestseller: true,
    category: "Kids",
    date: "2024-07-02",
    name: "Kids Joggers",
    price: "950",
    image: kids_joggers,
    sizes: ["S", "M"],
    subCategory: "BottomWear",
  },
  {
    _id: "18",
    bestseller: false,
    category: "Men",
    date: "2024-11-05",
    name: "Men Formal Trousers",
    price: "2000",
    image: formal_trouser,
    sizes: ["M", "L", "XL", "XXL"],
    subCategory: "BottomWear",
  },
  {
    _id: "19",
    bestseller: true,
    category: "Women",
    date: "2024-05-28",
    name: "Women Ankle Boots",
    price: "3000",
    image: ankle_boots,
    sizes: ["36", "37", "38", "39"],
    subCategory: "Footwear",
  },
  {
    _id: "20",
    bestseller: false,
    category: "Men",
    date: "2024-04-14",
    name: "Men Hooded Sweatshirt",
    price: "1500",
    image: hooded_sweatshirt,
    sizes: ["M", "L", "XL"],
    subCategory: "Outerwear",
  },
];
