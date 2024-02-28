export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  url: string;
  category: string;
  likes: number;
  like: boolean;
}

export const products = [
  {
    id: 1,
    name: "Lumene Color Correcting",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h95/h20/63984167026718.jpg?format=gallery-medium",
    price: "6 900 ₸",
    url: "https://kaspi.kz/shop/p/lumene-color-correcting-ss-krem-light-30-ml-100825007/?c=750000000",
    category: "Уход и косметика",
    likes: 0,
    like: false
  },
  {
    id: 2,
      name: "Dr.Ceuracle эссенция Vegan Kombucha Tea Essence 150 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h3c/hfc/63995919597598.jpg?format=gallery-medium",
      price: "12 300 ₸",
      url: "https://kaspi.kz/shop/p/dr-ceuracle-essentsija-vegan-kombucha-tea-essence-150-ml-101239735/?c=750000000",
      category: "Уход и косметика",
      likes: 0,
      like: false
  },
  {
    id: 3,
      name: "Round Lab тонер 1025 Dokdo Toner 200 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h74/hdf/64923792539678.jpg?format=gallery-medium",
      price: "4 600 ₸",
      url: "https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000",
      category: "Уход и косметика",
      likes: 0,
      like: false
  },
  {
    id: 4,
      name: "Avene термальная вода Thermal Spring Water 50 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h65/hc2/84844756533278.jpg?format=gallery-medium",
      price: "1 680 ₸",
      url: "https://kaspi.kz/shop/p/avene-termal-naja-voda-thermal-spring-water-50-ml-21900411/?c=750000000",
      category: "Уход и косметика",
      likes: 0,
      like: false
  },
  {
    id: 5,
      name: "Lumene Color Correcting СС крем Light 30 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/ha2/h45/64131277455390.jpg?format=gallery-medium",
      price: "5 397 ₸",
      url: "https://kaspi.kz/shop/p/manyo-toner-bifida-ampoule-mist-120-ml-101052902/?c=750000000",
      category: "Уход и косметика",
      likes: 0,
      like: false
  },
  {
    id: 6,
    name: "Смартфон Apple iPhone 15 Pro Max 256Gb серый",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    price: "248 590 ₸",
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    category: "Телефоны и Гаджеты",
    likes: 0,
    like: false
  },
  {
    id: 7,
    name: "Смартфон Google Pixel 7 8 ГБ/128 ГБ зеленый",
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h12/h86/64395683397662.jpg?format=gallery-medium",
    price: "420 290 ₸",
    url: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-zelenyi-106971462/?c=750000000",
    category: "Телефоны и Гаджеты",
    likes: 0,
    like: false
  },
  {
    id: 8,
    name: "Смартфон Google Pixel 8 8 ГБ/128 ГБ серый",
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hfc/h07/84326675808286.jpg?format=gallery-medium",
    price: "500 990 ₸",
    url: "https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-seryi-114016975/?c=750000000",
    category: "Телефоны и Гаджеты",
    likes: 0,
    like: false
  },
  {
    id: 9,
    name: "Смартфон Apple iPhone 13 128Gb белый",
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium",
    price: "233 690 ₸",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
    category: "Телефоны и Гаджеты",
    likes: 0,
    like: false
  },
  {
    id: 10,
    name: "Смартфон Apple iPhone 13 128Gb розовый",
    image:
      "https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium",
    price: "390 990 ₸",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000",
    category: "Телефоны и Гаджеты",
    likes: 0,
    like: false
  },
  {
    id: 11,
      name: "Стул ТЭТАХОУМ Модерника DSW, 80x46x55 см, коричневый, желтый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h00/h46/63958012723230.jpg?format=gallery-medium",
      price: "6 900 ₸",
      url: "https://kaspi.kz/shop/p/stul-tetahoum-modernika-dsw-80x46x55-sm-korichnevyi-zheltyi-100625597/?c=750000000",
      category: "Мебель",
      likes: 0,
      like: false
  },
  {
    id: 12,
      name: "Табурет Беквэм 90367551, 50x43x39 см, светло-коричневый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h3e/64028111929374.jpg?format=gallery-medium",
      price: "10 350 ₸",
      url: "https://kaspi.kz/shop/p/taburet-bekvem-90367551-50x43x39-sm-svetlo-korichnevyi-100438414/?c=750000000",
      category: "Мебель",
      likes: 0,
      like: false
  },
  {
    id: 13,
      name: "Табурет Nika Эконом ТЭ-2, 46.5x32x32 см, серебряный, бежевый",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h00/h73/63805400055838.jpg?format=gallery-medium",
      price: "3 240 ₸",
      url: "https://kaspi.kz/shop/p/taburet-nika-ekonom-te-2-46-5x32x32-sm-serebrjanyi-bezhevyi-16700785/?c=750000000",
      category: "Мебель",
      likes: 0,
      like: false
  },
  {
    id: 14,
      name: "Стул IKEA Адде 603.608.67, 77x39x47 см, черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf3/he7/63817819291678.jpg?format=gallery-medium",
      price: "13 000 ₸",
      url: "https://kaspi.kz/shop/p/stul-ikea-adde-603-608-67-77x39x47-sm-chernyi-100122089/?c=750000000",
      category: "Мебель",
      likes: 0,
      like: false
  },
  {
    id: 15,
      name: "Барный стул ZETA Альфа, 96x35x35 см, черный",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0b/h00/64217496092702.jpg?format=gallery-medium",
      price: "17 237 ₸",
      url: "https://kaspi.kz/shop/p/barnyi-stul-zeta-al-fa-96x35x35-sm-chernyi-102833161/?c=750000000",
      category: "Мебель",
      likes: 0,
      like: false
  },
  {
    id: 16,
      name: "NOW Vitamin D-3 5000 iu капсулы 120 шт",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1f/hce/69165915701278.jpg?format=gallery-medium",
      price: "4 344 ₸",
      url: "https://kaspi.kz/shop/p/now-vitamin-d-3-5000-iu-kapsuly-120-sht-108959948/?c=750000000",
      category: "Аптека",
      likes: 0,
      like: false
  },
  {
    id: 17,
      name: "California Gold Nutrition витамин Vitamin D-3 125 mcg (5000 IU) 90 капсул",
      image: "https://resources.cdn-kaspi.kz/img/m/p/he0/h51/84592565059614.png?format=gallery-medium",
      price: "3 285 ₸",
      url: "https://kaspi.kz/shop/p/california-gold-nutrition-vitamin-vitamin-d-3-125-mcg-5000-iu-90-kapsul-100505318/?c=750000000",
      category: "Аптека",
      likes: 0,
      like: false
  },
  {
    id: 18,
      name: "Детримакс Актив 500 МЕ (Витамин Д), капли, 30 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h00/h57/80537724846110.jpg?format=gallery-medium",
      price: "3 768 ₸",
      url: "https://kaspi.kz/shop/p/detrimaks-aktiv-500-me-vitamin-d-kapli-30-ml-102061677/?c=750000000",
      category: "Аптека",
      likes: 0,
      like: false
  },
  {
    id: 19,
      name: "Devit -3. 300.000.i.u. ампулы 1 мл",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6c/h29/84180171292702.jpg?format=gallery-medium",
      price: "1 450 ₸",
      url: "https://kaspi.kz/shop/p/devit--3-300-000-i-u-ampuly-1-ml-113833152/?c=750000000",
      category: "Аптека",
      likes: 0,
      like: false
  },
  {
    id: 20,
      name: "21st Century минерал Calcium Magnesium Zinc + D3 90 таблеток",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7b/h32/64006498877470.jpg?format=gallery-medium",
      price: "3 593 ₸",
      url: "https://kaspi.kz/shop/p/21st-century-mineral-calcium-magnesium-zinc-d3-90-tabletok-100505310/?c=750000000",
      category: "Аптека",
      likes: 0,
      like: false
  }
]
