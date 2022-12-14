import React from "react";
import "./Mens.css";
import { Checkbox, CheckboxGroup, color } from "@chakra-ui/react";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";

export const Mens = () => {
  let data = [
    {
      id: 1,
      name: "Men's Black Son of White Fang Graphic Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg",
      price: 499,
      discount_price: 1299,
      offer: "459For TriBe Members",
      category: "T-shirt",
      rating: 2,
      brand: "tyga",
    },
    {
      id: 2,
      name: "Men's Black No. 10 Graphic Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-no-10-graphic-printed-oversized-t-shirt-561695-1670926459-1.jpg",
      price: 499,
      discount_price: 1299,
      offer: "459For TriBe Members",
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Black Customizable Oversized Fit T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-customizable-oversized-fit-t-shirt-504365-1667496998-1.jpg",
      price: 649,
      discount_price: 949,
      offer: "599For TriBe Members",
      id: 3,
      category: "T-shirt",
      rating: 3,
      brand: "elegant",
    },
    {
      name: "Men's Green What's Up Doc Graphic Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-green-what-s-up-doc-graphic-printed-oversized-t-shirt-559367-1670603995-1.jpg",
      price: 449,
      discount_price: 1499,
      offer: "419For TriBe Members",
      id: 4,
      category: "T-shirt",
      rating: 2,
      brand: "tyga",
    },
    {
      name: "Men's Blue Son of White Fang Graphic Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-son-of-white-fang-graphic-printed-oversized-t-shirt-559350-1670598498-1.jpg",
      price: 699,
      discount_price: 1499,
      offer: "639For TriBe Members",
      id: 5,
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Black Tribute 07 Graphic Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-tribute-07-graphic-printed-oversized-t-shirt-559340-1670603750-1.jpg",
      price: 499,
      discount_price: 1299,
      offer: "459For TriBe Members",
      id: 6,
      category: "T-shirt",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's White Polo T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-bright-white-solid-polo-t-shirt-492868-1663254851-1.jpg",
      price: 419,
      discount_price: 1699,
      offer: "389For TriBe Members",
      id: 7,
      category: "T-shirt",
      rating: 2,
      brand: "tyga",
    },
    {
      name: "Customizable Men's Red Round Neck T-Shirt",
      image:
        "https://images.bewakoof.com/t640/customizable-men-s-red-round-neck-t-shirt-443961-1655814010-1.jpg",
      price: 499,
      discount_price: 830,
      offer: "459For TriBe Members",
      id: 8,
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Black House of The Dragon Graphic Printed Oversized Fit T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-house-of-the-dragon-graphic-printed-oversized-fit-t-shirt-503831-1667491878-1.jpg",
      price: 377,
      discount_price: 1299,
      offer: "349For TriBe Members",
      id: 9,
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Very Peri Contrast Thread Oversized Plus Size T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-very-peri-contrast-thread-oversized-plus-size-t-shirt-521251-1667504490-1.jpg",
      price: 335,
      discount_price: 1099,
      offer: "309For TriBe Members",
      id: 10,
      category: "T-shirt",
      rating: 2,
      brand: "tyga",
    },
    {
      name: "Men's Blue T-shirt (Pack of 2)",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-t-shirt-pack-of-2-325764-1669704980-1.jpg",
      price: 461,
      discount_price: 1299,
      offer: "429For TriBe Members",
      id: 11,
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Red Moon Rider Plus Size Typography T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-red-moon-rider-plus-size-typography-relaxed-fit-t-shirt-480016-1655750250-1.jpg",
      price: 494,
      discount_price: 1199,
      offer: "449For TriBe Members",
      id: 12,
      category: "T-shirt",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Green Yeh Dil Maange More T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-green-yeh-dil-maange-more-t-shirt-391624-1655810624-1.jpg",
      price: 205,
      discount_price: 799,
      offer: "189For TriBe Members",
      id: 13,
      category: "T-shirt",
      rating: 3,
      brand: "tyga",
    },
    {
      name: "Men's Dark Shadow Goofy Hyper Printed Oversized T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-dark-shadow-goofy-hyper-printed-oversized-t-shirt-516640-1669209141-1.jpg",
      price: 499,
      discount_price: 1449,
      offer: "459For TriBe Members",
      id: 14,
      category: "T-shirt",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Black Killmonger Graphic Printed T-shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-killmonger-graphic-printed-t-shirt-509349-1655797675-1.jpg",
      price: 399,
      discount_price: 999,
      offer: "369For TriBe Members",
      id: 15,
      category: "T-shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "AOP Mandarin Collar Full Sleeve Shirt",
      image:
        "https://images.bewakoof.com/t640/aop-mandarin-collar-full-sleeve-shirt-364799-1656142394-1.jpg",
      price: 334,
      discount_price: 1599,
      offer: "309For TriBe Members",
      id: 16,
      category: "shirt",
      rating: 3,
      brand: "tyga",
    },
    {
      name: "Men's Mandarin Collar Full Sleeves Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-mandarin-collar-full-sleeves-shirt-361291-1656151875-1.jpg",
      price: 334,
      discount_price: 1649,
      offer: "309For TriBe Members",
      id: 17,
      category: "shirt",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Black Placket Print Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-placket-print-shirt-352183-1655815621-1.jpg",
      price: 429,
      discount_price: 1399,
      offer: "399For TriBe Members",
      id: 18,
      category: "shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Brown Slim Fit Over Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-brown-slim-fit-over-shirt-559054-1670325663-1.jpg",
      price: 1499,
      discount_price: 2999,
      offer: "1409For TriBe Members",
      id: 19,
      category: "shirt",
      rating: 5,
      brand: "tyga",
    },
    {
      name: "Men's Sage Green Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-sage-green-slim-fit-shirt-560469-1670823107-1.jpg",
      price: 1399,
      discount_price: 2999,
      offer: "1319For TriBe Members",
      id: 20,
      category: "shirt",
      rating: 3,
      brand: "elegant",
    },
    {
      name: "Men's Black Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-slim-fit-shirt-560475-1670824281-1.jpg",
      price: 1399,
      discount_price: 2999,
      offer: "1319For TriBe Members",
      id: 21,
      category: "shirt",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Grey Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-slim-fit-shirt-560472-1670823214-1.jpg",
      price: 1399,
      discount_price: 2999,
      offer: "1319For TriBe Members",
      id: 22,
      category: "shirt",
      rating: 3,
      brand: "tyga",
    },
    {
      name: "Men's White Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-white-slim-fit-shirt-560479-1670824176-1.jpg",
      price: 1399,
      discount_price: 2999,
      offer: "1319For TriBe Members",
      id: 23,
      category: "shirt",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Purple All Over Animal Printed Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-purple-printed-slim-fit-shirt-558341-1670235947-1.jpg",
      price: 911,
      discount_price: 2399,
      offer: "869For TriBe Members",
      id: 24,
      category: "shirt",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Beige Striped Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-beige-striped-slim-fit-shirt-558343-1670235164-1.jpg",
      price: 911,
      discount_price: 2399,
      offer: "869For TriBe Members",
      id: 25,
      category: "shirt",
      rating: 3,
      brand: "tyga",
    },
    {
      name: "Men's White & Yellow Striped Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-multicolor-striped-slim-fit-shirt-558344-1670235905-1.jpg",
      price: 911,
      discount_price: 2399,
      offer: "869For TriBe Members",
      id: 26,
      category: "shirt",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Brown Slim Fit Over Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-brown-slim-fit-over-shirt-559056-1670325985-1.jpg",
      price: 1349,
      discount_price: 2999,
      offer: "1269For TriBe Members",
      id: 27,
      category: "shirt",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Black Slim Fit Over Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-slim-fit-over-shirt-559055-1670325694-1.jpg",
      price: 1349,
      discount_price: 2999,
      offer: "1269For TriBe Members",
      id: 28,
      category: "shirt",
      rating: 2,
      brand: "tyga",
    },
    {
      name: "Men's Grey Engraved Striped Slim Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-engraved-striped-slim-fit-shirt-552691-1667564761-1.jpg",
      price: 899,
      discount_price: 1998,
      offer: "849For TriBe Members",
      id: 29,
      category: "shirt",
      rating: 3,
      brand: "elegant",
    },
    {
      name: "Men's Cream Corduroy Slim Fit Over Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-cream-corduroy-slim-fit-over-shirt-559049-1670326011-1.jpg",
      price: 1349,
      discount_price: 2999,
      offer: "1269For TriBe Members",
      id: 30,
      category: "shirt",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Black No. 10 Graphic Printed Zipper Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-black-no-10-graphic-printed-zipper-hoodie-561701-1670926544-1.jpg",
      price: 1299,
      discount_price: 2499,
      offer: "1199For TriBe Members",
      id: 31,
      category: "hoodies",
      rating: 4,
      brand: "tyga",
    },
    {
      name: "Men's Black Hoodie",
      image:
        "https://images.bewakoof.com/t640/black-hoodie-sweatshirt-363701-1669641515-1.jpg",
      price: 1199,
      discount_price: 2399,
      offer: "1099For TriBe Members",
      id: 32,
      category: "hoodies",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Blue & Yellow Color Block Hoodie",
      image:
        "https://images.bewakoof.com/t640/blue-quartz-color-block-hoodie-sweatshirt-392783-1656146344-1.jpg",
      price: 1149,
      discount_price: 2899,
      offer: "1069For TriBe Members",
      id: 33,
      category: "hoodies",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Blue No Mad Typography Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/no-mad-layered-sweatshirt-hoodie-368592-1656181273-1.jpg",
      price: 1799,
      discount_price: 2799,
      offer: "1659For TriBe Members",
      id: 34,
      category: "hoodies",
      rating: 4,
      brand: "tyga",
    },
    {
      name: "Men's Purple Arriving From space Typography Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/arriving-from-space-layered-hoodie-sweatshirt-369814-1656184963-1.jpg",
      price: 1599,
      discount_price: 2899,
      offer: "1469For TriBe Members",
      id: 35,
      category: "hoodies",
      rating: 3,
      brand: "elegant",
    },
    {
      name: "Men's Black Lets Fight Graphic Printed Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-black-lets-fight-printed-sweatshirt-546488-1665063392-1.jpg",
      price: 1399,
      discount_price: 2099,
      offer: "1289For TriBe Members",
      id: 36,
      category: "hoodies",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Black Fist of Khonshu Graphic Printed Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-black-fist-of-khonshu-graphic-printed-hoodie-559355-1670928423-1.jpg",
      price: 1299,
      discount_price: 2499,
      offer: "1199For TriBe Members",
      id: 37,
      category: "hoodies",
      rating: 2,
      brand: "tyga",
    },
    {
      name: "Men's Blue Gravity Graphic Printed Hoodie",
      image:
        "https://images.bewakoof.com/t640/gravity-deep-rgb(255,164,28)-hoodie-sweatshirt-364990-1656196919-1.jpg",
      price: 1499,
      discount_price: 2499,
      offer: "1379For TriBe Members",
      id: 38,
      category: "hoodies",
      rating: 5,
      brand: "elegant",
    },
    {
      name: "Men's Gardenia Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-off-white-solid-oversized-hoodie-499058-1670329186-1.jpg",
      price: 1399,
      discount_price: 2999,
      offer: "1289For TriBe Members",
      id: 39,
      category: "hoodies",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Sage Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-sage-solid-oversize-fit-hoodie-499025-1669642261-1.jpg",
      price: 1499,
      discount_price: 2999,
      offer: "1379For TriBe Members",
      id: 40,
      category: "hoodies",
      rating: 4,
      brand: "tyga",
    },
    {
      name: "Men's Black No Jutsu Graphic Printed Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-black-no-jutsu-graphic-printed-oversized-hoodie-555411-1668754642-1.jpg",
      price: 1599,
      discount_price: 2999,
      offer: "1469For TriBe Members",
      id: 41,
      category: "hoodies",
      rating: 3,
      brand: "elegant",
    },
    {
      name: "Men's Grey This Pocket Has A Huge Heart Inside It Typography Hoodie",
      image:
        "https://images.bewakoof.com/t640/grey-melange-pocket-print-hoodie-sweatshirt-365002-1656171984-1.jpg",
      price: 1199,
      discount_price: 2599,
      offer: "1099For TriBe Members",
      id: 42,
      category: "hoodies",
      rating: 2,
      brand: "elegant",
    },
    {
      name: "Men's Black Oversized Zipper Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-black-solid-oversized-hoodie-504087-1669642760-1.jpg",
      price: 1399,
      discount_price: 3399,
      offer: "1289For TriBe Members",
      id: 43,
      category: "hoodies",
      rating: 4,
      brand: "tyga",
    },
    {
      name: "Men's Black Wakanda Forever War Cry Graphic Printed Oversized Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-black-wakanda-forever-war-cry-graphic-printed-oversized-hoodie-555502-1669015404-1.jpg",
      price: 1599,
      discount_price: 2999,
      offer: "1469For TriBe Members",
      id: 44,
      category: "hoodies",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's rgb(255,164,28) Plus Size Hoodie",
      image:
        "https://images.bewakoof.com/t640/men-s-rgb(255,164,28)-solid-hoodie-499034-1667812418-1.jpg",
      price: 1399,
      discount_price: 3199,
      offer: "1289For TriBe Members",
      id: 45,
      category: "hoodies",
      rating: 4,
      brand: "elegant",
    },
    {
      name: "Men's Olive Basic Trackpants",
      image:
        "https://images.bewakoof.com/t640/men-s-olive-basic-trackpants-459501-1661434183-1.jpg",
      price: 829,
      discount_price: 1499,
      offer: "759For TriBe Members",
      brand: "Bewakoof",
      id: 46,
      category: "track__pant",
      rating: 3,
    },
    {
      name: "Men's Grey Basic Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-basic-track-pants-459503-1659607918-1.jpg",
      price: 839,
      discount_price: 1499,
      offer: "769For TriBe Members",
      brand: "Bewakoof",
      id: 47,
      category: "track__pant",
      rating: 2,
    },
    {
      name: "Men's Blue Basic Trackpants",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-basic-trackpants-459502-1661434104-1.jpg",
      price: 839,
      discount_price: 1499,
      offer: "769For TriBe Members",
      brand: "Bewakoof",
      id: 48,
      category: "track__pant",
      rating: 3,
    },
    {
      name: "Men's Red Basic Trackpants",
      image:
        "https://images.bewakoof.com/t640/men-s-red-basic-trackpants-459497-1661434729-1.jpg",
      price: 829,
      discount_price: 1499,
      offer: "759For TriBe Members",
      brand: "Bewakoof",
      id: 49,
      category: "track__pant",
      rating: 5,
    },
    {
      name: "Men's Grey & Maroon Color Block Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-and-maroon-color-block-track-pants-556675-1669359242-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 50,
      category: "track__pant",
      rating: 2,
    },
    {
      name: "Men's Black Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-black-track-pant-557902-1670248692-1.jpg",
      price: 799,
      discount_price: 1999,
      offer: "759For TriBe Members",
      brand: "Chkokko",
      id: 51,
      category: "track__pant",
      rating: 2,
    },
    {
      name: "Men's Grey Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-track-pant-557910-1670248258-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 52,
      category: "track__pant",
      rating: 2,
    },
    {
      name: "Men's Grey Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-track-pants-556676-1669358742-1.JPG",
      price: 652,
      discount_price: 2230,
      offer: "619For TriBe Members",
      brand: "Chkokko",
      id: 53,
      category: "track__pant",
      rating: 4,
    },
    {
      name: "Men's Grey & Black Color Block Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-and-black-color-block-track-pants-556665-1669358678-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 54,
      category: "track__pant",
      rating: 5,
    },
    {
      name: "Men's Black Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-black-track-pants-558029-1670314866-1.jpg",
      price: 719,
      discount_price: 1499,
      offer: "679For TriBe Members",
      brand: "Blue Tyga",
      id: 55,
      category: "track__pant",
      rating: 5,
    },
    {
      name: "Men's Blue Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-track-pants-558031-1670314835-1.jpg",
      price: 719,
      discount_price: 1499,
      offer: "679For TriBe Members",
      brand: "Blue Tyga",
      id: 56,
      category: "track__pant",
      rating: 5,
    },
    {
      name: "Men's Grey and Black Color Block Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-and-black-color-block-track-pant-557907-1670248899-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 57,
      category: "track__pant",
      rating: 2,
    },
    {
      name: "Men's Grey Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-track-pant-557932-1670248660-1.JPG",
      price: 999,
      discount_price: 2470,
      offer: "939For TriBe Members",
      brand: "Chkokko",
      id: 58,
      category: "track__pant",
      rating: 4,
    },
    {
      name: "Men's Grey Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-track-pant-557934-1670247796-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 59,
      category: "track__pant",
      rating: 3,
    },
    {
      name: "Men's Grey and Black Color Block Track Pants",
      image:
        "https://images.bewakoof.com/t640/men-s-grey-and-black-color-block-track-pant-557937-1670248135-1.JPG",
      price: 999,
      discount_price: 2999,
      offer: "949For TriBe Members",
      brand: "Chkokko",
      id: 60,
      category: "track__pant",
      rating: 3,
    },
    {
      name: "Men's Black Casual Joggers",
      image:
        "https://images.bewakoof.com/t640/jet-black-casual-jogger-pant-293063-1660652156-1.jpg",
      price: 899,
      discount_price: 999,
      offer: "819For TriBe Members",
      brand: "Bewakoof",
      id: 61,
      category: "joggers",
      rating: 3,
    },
    {
      name: "Men's Grey & Blue Color Block Joggers",
      image:
        "https://images.bewakoof.com/t640/men-s-plain-color-block-cargo-joggers-337793-1655814345-1.jpg",
      price: 429,
      discount_price: 1899,
      offer: "399For TriBe Members",
      brand: "Bewakoof",
      id: 62,
      category: "joggers",
      rating: 3,
    },
    {
      name: "Men's Blue Casual Joggers",
      image:
        "https://images.bewakoof.com/t640/navy-blue-casual-jogger-pant-293071-1655748181-1.jpg",
      price: 699,
      discount_price: 999,
      offer: "639For TriBe Members",
      brand: "Bewakoof",
      id: 63,
      category: "joggers",
      rating: 4,
    },
    {
      name: "Men's Green Joggers",
      image:
        "https://images.bewakoof.com/t640/sage-green-cotton-jogger-pants-330852-1663661717-1.jpg",
      price: 749,
      discount_price: 1699,
      offer: "689For TriBe Members",
      brand: "Bewakoof",
      id: 64,
      category: "joggers",
      rating: 4,
    },
    {
      name: "Men's Blue Joggers",
      image:
        "https://images.bewakoof.com/t640/navy-blue-zipper-jogger-321139-1655747796-1.jpg",
      price: 899,
      discount_price: 1299,
      offer: "829For TriBe Members",
      brand: "Bewakoof",
      id: 65,
      category: "joggers",
      rating: 5,
    },
    {
      name: "Men's Sky Blue Joggers",
      image:
        "https://images.bewakoof.com/t640/men-s-sky-blue-cotton-jogger-pants-330846-1664197182-1.jpg",
      price: 719,
      discount_price: 1699,
      offer: "659For TriBe Members",
      brand: "Bewakoof",
      id: 66,
      category: "joggers",
      rating: 5,
    },
    {
      name: "Men's Blue Plus Size Casual Joggers",
      image:
        "https://images.bewakoof.com/t640/navy-blue-plus-size-casual-jogger-pants-324702-1655752010-1.jpg",
      price: 899,
      discount_price: 1299,
      offer: "829For TriBe Members",
      brand: "Bewakoof",
      id: 67,
      category: "joggers",
      rating: 5,
    },
    {
      name: "Men's White Side Printed Joggers",
      image:
        "https://images.bewakoof.com/t640/men-s-white-yellow-colorblock-joggers-451638-1656145457-1.jpg",
      price: 566,
      discount_price: 1899,
      offer: "529For TriBe Members",
      brand: "Bewakoof",
      id: 68,
      category: "joggers",
      rating: 2,
    },
    {
      name: "Men's Grey Joggers",
      image:
        "https://images.bewakoof.com/t640/light-grey-zipper-jogger-321136-1655751312-1.jpg",
      price: 999,
      discount_price: 1299,
      offer: "919For TriBe Members",
      brand: "Bewakoof",
      id: 69,
      category: "joggers",
      rating: 2,
    },
    {
      name: "Men's Black Zipper Casual Joggers",
      image:
        "https://images.bewakoof.com/t640/jet-black-casual-jogger-pants-with-zipper-321141-1655750994-1.jpg",
      price: 1099,
      discount_price: 1299,
      offer: "999For TriBe Members",
      brand: "Bewakoof",
      id: 70,
      category: "joggers",
      rating: 2,
    },
    {
      name: "Men's Charcoal Grey Casual Joggers",
      image:
        "https://images.bewakoof.com/t640/moss-green-casual-jogger-pant-293068-1656193408-1.jpg",
      price: 799,
      discount_price: 999,
      offer: "739For TriBe Members",
      brand: "Bewakoof",
      id: 71,
      category: "joggers",
      rating: 2,
    },
    {
      name: "Jet Black Plain Boxer",
      image:
        "https://images.bewakoof.com/t640/jet-black-plain-boxer-26554-1659078235-1.jpg",
      price: 299,
      discount_price: 399,
      offer: "279For TriBe Members",
      brand: "Bewakoof",
      id: 72,
      category: "boxer",
      rating: 3,
    },
    {
      name: "Men's Blue Avengers All Over Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-avengers-all-over-printed-boxers-464425-1656186159-1.jpg",
      price: 274,
      discount_price: 799,
      offer: "249For TriBe Members",
      brand: "Bewakoof",
      id: 73,
      category: "boxer",
      rating: 2,
    },
    {
      name: "Men's Blue Chibi Skulls All Over Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/chibi-skulls-464481-1659078278-1.jpg",
      price: 259,
      discount_price: 699,
      offer: "239For TriBe Members",
      brand: "Bewakoof",
      id: 74,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Green Boxers",
      image:
        "https://images.bewakoof.com/t640/kayaking-solid-boxer-460014-1659077607-1.jpg",
      price: 209,
      discount_price: 599,
      offer: "189For TriBe Members",
      brand: "Bewakoof",
      id: 75,
      category: "boxer",
      rating: 2,
    },
    {
      name: "Beer Brewer All Over Printed Boxer",
      image:
        "https://images.bewakoof.com/t640/beer-brewer-all-over-printed-boxer-287516-1661526585-1.jpg",
      price: 239,
      discount_price: 399,
      offer: "219For TriBe Members",
      brand: "Bewakoof",
      id: 76,
      category: "boxer",
      rating: 4,
    },
    {
      name: "Men's Black Paperplanes All Over Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/men-s-black-paperplanes-all-over-printed-boxers-523312-1670949123-1.jpg",
      price: 349,
      discount_price: 649,
      offer: "319For TriBe Members",
      brand: "Bewakoof",
      id: 77,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Black Stoners Delight AOP Boxers",
      image:
        "https://images.bewakoof.com/t640/stoners-delight-all-over-printed-boxer-235809-1655751256-1.jpg",
      price: 279,
      discount_price: 399,
      offer: "259For TriBe Members",
      brand: "Bewakoof",
      id: 78,
      category: "boxer",
      rating: 3,
    },
    {
      name: "Men's Blue Origami Birds All Over Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-origami-birds-all-over-printed-boxers-273022-1670934963-1.jpg",
      price: 349,
      discount_price: 399,
      offer: "319For TriBe Members",
      brand: "Bewakoof",
      id: 79,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Blue Sleepy Sheep All Over Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-sleepy-sheep-all-over-printed-boxers-523311-1670948994-1.jpg",
      price: 349,
      discount_price: 649,
      offer: "319For TriBe Members",
      brand: "Bewakoof",
      id: 80,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Blue All Over Game Consoles Printed Boxers",
      image:
        "https://images.bewakoof.com/t640/game-consoles-464437-1659017615-1.jpg",
      price: 409,
      discount_price: 699,
      offer: "379For TriBe Members",
      brand: "Bewakoof",
      id: 81,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Red All Over Signs Printed Boxers",
      image: "https://images.bewakoof.com/t640/signs-464400-1659076909-1.jpg",
      price: 329,
      discount_price: 699,
      offer: "299For TriBe Members",
      brand: "Bewakoof",
      id: 82,
      category: "boxer",
      rating: 5,
    },
    {
      name: "Men's Orange Mandarin Collar Relaxed Fit Festive Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-mandarin-collar-festive-long-kurta-415379-1656155215-1.jpg",
      price: 334,
      discount_price: 1849,
      offer: "309For TriBe Members",
      brand: "Bewakoof",
      id: 83,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Moonlit Ocean Plus Size Relaxed Fit Short Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-plus-size-moonlit-ocean-short-kurta-504183-1665064914-1.jpg",
      price: 659,
      discount_price: 2849,
      offer: "609For TriBe Members",
      brand: "Bewakoof",
      id: 84,
      category: "kurta",
      rating: 2,
    },
    {
      name: "Men's Mustard Relaxed Fit Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-mustard-relaxed-fit-long-kurta-317794-1663931527-1.jpg",
      price: 764,
      discount_price: 1499,
      offer: "699For TriBe Members",
      brand: "Bewakoof",
      id: 85,
      category: "kurta",
      rating: 5,
    },
    {
      name: "Men's Black Relaxed Fit Short Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-black-relaxed-fit-short-kurta-302583-1663931104-1.jpg",
      price: 629,
      discount_price: 999,
      offer: "579For TriBe Members",
      brand: "Bewakoof",
      id: 86,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Olive Relaxed Fit Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-solid-olive-relaxed-fit-long-kurta-317775-1663931378-1.jpg",
      price: 719,
      discount_price: 1499,
      offer: "659For TriBe Members",
      brand: "Bewakoof",
      id: 87,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Black Relaxed Fit Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-black-relaxed-fit-long-kurta-317776-1663931262-1.jpg",
      price: 764,
      discount_price: 1499,
      offer: "699For TriBe Members",
      brand: "Bewakoof",
      id: 88,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Wine Relaxed Fit Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-solid-wine-relaxed-fit-kurta-352164-1663662102-1.jpg",
      price: 764,
      discount_price: 1499,
      offer: "699For TriBe Members",
      brand: "Bewakoof",
      id: 89,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Solid Sky Blue Tape Relaxed Fit Shirt",
      image:
        "https://images.bewakoof.com/t640/men-s-solid-sky-blue-tape-relaxed-fit-shirt-317823-1663661755-1.jpg",
      price: 368,
      discount_price: 1499,
      offer: "339For TriBe Members",
      brand: "Bewakoof",
      id: 90,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Men's Olive Night Plus Size Relaxed Fit Long Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-plus-size-olive-night-long-kurta-504182-1663931183-1.jpg",
      price: 659,
      discount_price: 2949,
      offer: "609For TriBe Members",
      brand: "Bewakoof",
      id: 91,
      category: "kurta",
      rating: 2,
    },
    {
      name: "Men's Gold Flame Relaxed Fit Short Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-gold-flame-solid-short-kurta-502497-1663931320-1.jpg",
      price: 539,
      discount_price: 2149,
      offer: "499For TriBe Members",
      brand: "Bewakoof",
      id: 92,
      category: "kurta",
      rating: 5,
    },
    {
      name: "Men's White Relaxed Fit Short Kurta",
      image:
        "https://images.bewakoof.com/t640/men-s-white-relaxed-fit-short-kurta-302579-1664280682-1.jpg",
      price: 629,
      discount_price: 999,
      offer: "579For TriBe Members",
      brand: "Bewakoof",
      id: 93,
      category: "kurta",
      rating: 4,
    },
    {
      name: "Pessifist Carpenter Jeans",
      image:
        "https://images.bewakoof.com/t320/snitch-pessifist-carpenter-jeans-snitch-men-s-denim-till-ankle-length-345072-1617104096.jpg",
      price: 1299,
      discount_price: 1499,
      offer: "1249For TriBe Members",
      brand: "Snitch",
      id: 94,
      category: "denim",
      rating: 5,
    },
    {
      name: "Xoritte Carpenter Jeans",
      image:
        "https://images.bewakoof.com/t320/snitch-xoritte-carpenter-jeans-snitch-men-s-denim-till-ankle-length-345077-1617104398.jpg",
      price: 1299,
      discount_price: 1499,
      offer: "1249For TriBe Members",
      brand: "Snitch",
      id: 95,
      category: "denim",
      rating: 4,
    },
    {
      name: "Camo Biker Cargo Denim",
      image:
        "https://images.bewakoof.com/t320/fugazee-camo-biker-cargo-denim-denim-386494-1638442392.jpg",
      price: 1799,
      discount_price: 2499,
      offer: "1709For TriBe Members",
      brand: "FUGAZEE",
      id: 96,
      category: "denim",
      rating: 5,
    },
  ];
  return (
    <div className="Productpage-main">
      <div className="Productpage-top">
        <h1>Men Clothing</h1>
      </div>
      <div className="Productpage-body">
        <div className="Productpage-body-left">
          <br />
          <h5>PREMIUM</h5>
          <Checkbox defaultunChecked >Verified</Checkbox>
          <br />
          <br />
          <h5>CATEGORIES</h5>
          <Checkbox defaultunChecked>T-Shirt</Checkbox>
          <br />
          <Checkbox defaultunChecked>Shirt</Checkbox>
          <br />
          <Checkbox defaultunChecked>Hoodies</Checkbox>
          <br />
          <Checkbox defaultunChecked>track__pant</Checkbox>
          <br />
          <Checkbox defaultunChecked>joggers</Checkbox>
          <br />
          <Checkbox defaultunChecked>boxer</Checkbox>
          <br />
          <Checkbox defaultunChecked>kurta</Checkbox>
          <br />
          <Checkbox defaultunChecked>denim</Checkbox>
          <br />
          <br />
          <h5>RATING</h5>
          <Checkbox defaultunChecked>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 5 ? "rgb(255,164,28)" : "grey"} />
              ))}
          </Checkbox>
          <br />
          <Checkbox defaultunChecked>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 4 ? "rgb(255,164,28)" : "grey"} />
              ))}
          </Checkbox>
          <br />
          <Checkbox defaultunChecked>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 3 ? "rgb(255,164,28)" : "grey"} />
              ))}
          </Checkbox>
          <br />
          <Checkbox defaultunChecked>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  outline="black"
                  key={i}
                  color={i < 2 ? "rgb(255,164,28)" : "grey"}
                />
              ))}
          </Checkbox>
          <br />
          <Checkbox defaultunChecked>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 1 ? "rgb(255,164,28)" : "grey"} />
              ))}
          </Checkbox>
          <br />
          <br />
          <h5>BRAND</h5>
          <Checkbox defaultunChecked>Tyga</Checkbox>
          <br />
          <Checkbox defaultunChecked>Elegant</Checkbox>
          <br />
          <Checkbox defaultunChecked>Bewakoof</Checkbox>
          <br />
          <Checkbox defaultunChecked>Chkokko</Checkbox>
          <br />
          <Checkbox defaultunChecked>Blue Tyga</Checkbox>
          <br />
          <Checkbox defaultunChecked>Snitch</Checkbox>
          <br />
          <Checkbox defaultunChecked>FUGAZEE</Checkbox>
          <br />
        </div>
        <div className="Productpage-body-right">
          {data
            .filter((e) => e.category == "shirt")
            .map((e, i) => (
              <div key={i}>
                {<img width="100%" src={e.image} />}
                <br />
                {e.name}
                <br />
                {e.category}
                <br />₹{e.price}
                <br />
                {e.rating}
                <br />₹{e.discount_price}
                <br />
                {e.offer}
                <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
