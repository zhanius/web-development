export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  rating: number;
  image: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: "Смартфон Apple iPhone 15 Pro Max 256Gb серый",
    price: "248 590 ₸",
    description:
      "-технология NFC: Да \n-цвет: серый \n-тип экрана: OLED, Super Retina XDR display\n-диагональ: 6.7 дюйм\n-размер оперативной памяти: 8 ГБ",
    rating: 4.8,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
  },
  {
    id: 2,
    name: "Смартфон Google Pixel 7 8 ГБ/128 ГБ зеленый",
    price: "420 290 ₸",
    description: "-технология NFC: Да\n-цвет: зеленый\n-тип экрана: FHD+ (1080 x 2400) OLED\n-диагональ: 6.3 дюйм\n-размер оперативной памяти: 8 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h12/h86/64395683397662.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-zelenyi-106971462/?c=750000000",
  },
  {
    id: 3,
    name: "Смартфон Google Pixel 8 8 ГБ/128 ГБ серый",
    price: "500 990 ₸",
    description: "технология NFC: Да\n-цвет: серый\n-тип экрана: OLED, Gorilla Glass Victus\n-диагональ: 6.2 дюйм\n-размер оперативной памяти: 8 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/84326675808286.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-seryi-114016975/?c=750000000",
  },
  {
    id: 4,
    name: "Смартфон Apple iPhone 13 128Gb белый",
    price: "233 690 ₸",
    description: "технология NFC: Да \n-цвет: белый\n-тип экрана: OLED, Super Retina XDR\n-диагональ: 6.1 дюйм\n-размер оперативной памяти: 4 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
  },
  {
    id: 5,
    name: "Смартфон Apple iPhone 13 128Gb розовый",
    price: "390 990 ₸",
    description: "технология NFC: Да\n-цвет: розовый\n-тип экрана: OLED, Super Retina XDR\n-диагональ: 6.1 дюйм\n-размер оперативной памяти: 4 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000",
  },
  {
    id: 6,
    name: "Смартфон Poco M5s 8 ГБ/256 ГБ синий",
    price: "450 590 ₸",
    description: "технология NFC: Да\n-цвет: синий\n-тип экрана: AMOLED, сенсорный, Corning Gorilla Glass\n-диагональ: 6.43 дюйм\n-размер оперативной памяти: 8 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/ha2/h95/81116240183326.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/poco-m5s-8-gb-256-gb-sinii-110704040/?c=750000000",
  },
  {
    id: 7,
    name: "Смартфон Poco X6 Pro 12 ГБ/512 ГБ желтый",
    price: "295 990 ₸",
    description: "технология NFC: Да\n-цвет: желтый\n-тип экрана: AMOLED, сенсорный, Corning Gorilla Glass 5\n-диагональ: 6.67 дюйм\n-размер оперативной памяти: 12 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h07/h12/85181330522142.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-zheltyi-115961491/?c=750000000",
  },
  {
    id: 8,
    name: "Смартфон Poco X5 5G 8 ГБ/256 ГБ зеленый",
    price: "245 390 ₸",
    description: "технология NFC: Да\n-цвет: зеленый\n-тип экрана: AMOLED, сенсорный\n-диагональ: 6.67 дюйм\n-размер оперативной памяти: 8 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h6f/hd9/68716153962526.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/poco-x5-5g-8-gb-256-gb-zelenyi-108887258/?c=750000000",
  },
  {
    id: 9,
    name: "Смартфон Samsung Galaxy A05s 4 ГБ/128 ГБ фиолетовый",
    price: "233 990 ₸",
    description: "технология NFC: Да\n-цвет: фиолетовый\n-тип экрана: PLS LCD\n-диагональ: 6.7 дюйм\n-размер оперативной памяти: 4 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h61/hd2/84523124916254.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a05s-4-gb-128-gb-fioletovyi-114693084/?c=750000000",
  },
  {
    id: 10,
    name: "Samsung Galaxy A05s 4 ГБ/128 ГБ фиолетовый",
    price: "334 990 ₸",
    description: "технология NFC: Да\n-цвет: серебристый\n-тип экрана: Super AMOLED, сенсорный\n-диагональ: 6.6 дюйм\n-размер оперативной памяти: 6 ГБ",
    rating: 4.9,
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h04/h6b/80075316527134.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-6-gb-128-gb-serebristyi-109880741/?c=750000000",
  },
];
