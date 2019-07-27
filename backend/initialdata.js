const products = [
  {
    pid: 1,
    title: "Model One",
    company: "Monstruosus",
    price: "160-235",
    projectimage: [
      "https://monstruosus.com/wp-content/uploads/2018/03/23720006-1024x679.jpg",
      "https://s7d2.scene7.com/is/image/DesignWithinReach/PD_2515192_ENV4?hei=825&resMode=sharp"
    ],
    material: "Matte glazed earthenware ceramic",
    image: "image/mons_model1.png",
    specs: [
      {
        dimension: '12" W x 10" H',
        finish: "White",
        price: 160
      },
      {
        dimension: '12" W x 10" H',
        finish: "Black",
        price: 160
      },
      {
        dimension: '14" W x 11.5" H',
        finish: "White",
        price: 195
      },
      {
        dimension: '14" W x 11.5" H',
        finish: "Black",
        price: 195
      },
      {
        dimension: '15" W x 13" H',
        finish: "White",
        price: 235
      },
      {
        dimension: '15" W x 13" H',
        finish: "Black",
        price: 235
      }
    ],
    description:
      "As a geometric form, the cylinder comprises an infinite curvilinear surface that has established a timeless allure: from the columns of the Athenian acropolis to a soup can in your local grocery store. It’s tested and true. Our handcrafted Model 1 earthenware planter exudes a similar groundedness that makes it a stately addition to home or office. To achieve a placid, uninterrupted surface that compels the eye to follow its perimeter, our professional casters at Monstruosus meticulously sponge and sculpt the Model 1 before it’s fired in the kiln, bringing a bit of poetry to the objective science of geometry.",

    count: 0,
    total: 0
  },
  {
    pid: 2,
    title: "Cylinder",
    company: "Ore",
    link: "https://ore.design/products/cylinder/",
    price: "860 - 1220",
    projectimage: [],
    material: "See Specs",
    selectedPrice: 0,
    image: "image/ore-cylinder.png",
    specs: [
      {
        dimension: '20" W x 18" H',
        finish: "Linen White Powder Coat",
        price: 860
      },
      {
        dimension: '20" W x 18" H',
        finish: "Metalic Silver Power Coat",
        price: 860
      },
      { dimension: '20" W x 18" H', finish: "Rust Power Coat", price: 860 },
      {
        dimension: '25" W x 20" H',
        finish: "Linen White Powder Coat",
        price: 1010
      },
      {
        dimension: '25" W x 20" H',
        finish: "Metalic Silver Power Coat",
        price: 1010
      },
      { dimension: '25" W x 20" H', finish: "Rust Power Coat", price: 1010 },
      {
        dimension: '30" W x 22" H',
        finish: "Linen White Powder Coat",
        price: 1220
      },
      {
        dimension: '30" W x 22" H',
        finish: "Metalic Silver Power Coat",
        price: 1220
      },
      { dimension: '30" W x 22" H', finish: "Rust Power Coat", price: 1220 }
    ],
    description:
      "The CYLINDER planter group offers a versatile, clean design in a variety of shapes and colors. The \
CYLINDER is available in a variety of colors and three sizes. Designers may opt to use multiple sizes or a single, repeat  model \
to create a uniform effect. ",
    count: 0,
    total: 0
  },

  {
    pid: 3,
    title: "Model Three",
    company: "Monstruosus",
    price: "185-360",
    image: "image/mons_model3.png",
    material: "Matte glazed earthenware ceramic",
    projectimage: [
      "https://monstruosus.com/wp-content/uploads/2018/03/22230013-1024x679.jpg"
    ],
    specs: [
      {
        dimension: '12" W x 11" H',
        finish: "White",
        price: 180
      },
      {
        dimension: '12" W x 11" H',
        finish: "Black",
        price: 180
      },
      {
        dimension: '14.5" W x 13" H',
        finish: "White",
        price: 245
      },
      {
        dimension: '14.5" W x 13" H',
        finish: "Black",
        price: 245
      },
      {
        dimension: '17" W x 15" H',
        finish: "White",
        price: 360
      },
      {
        dimension: '17" W x 15" H',
        finish: "Black",
        price: 360
      }
    ],
    description:
      "The Model 3 planter juxtaposes two distinct forms: a circular truncated cone and a cylinder. This combination exemplifies Monstruosus’ mission to find a restful harmony in the complex. Our professional casters strike this accord on the potter’s wheel where they patiently hand-sculpt the planter’s trademark beveled edge to ensure a graceful transition between base and drum. In this way, you can read the craft- making process in the finished object, a story of maturity reflected in the growth of your plants.",

    count: 0,
    total: 0
  },
  {
    pid: 4,
    title: "Thornton Tapered",
    company: "Planterworx",
    price: "450",
    image: "image/planterwox_taper.png",
    material: "See Specs",
    projectimage: [
      "https://s7d2.scene7.com/is/image/DesignWithinReach/PD_1225_ENV3?hei=825&resMode=sharp"
    ],
    specs: [
      {
        dimension: '20" W x 20" H',
        finish: "Corten Steel",
        price: 450
      },
      {
        dimension: '20" W x 20" H',
        finish: "Charcoal",
        price: 450
      }
    ],
    description:
      "The Taper Planter in Corten steel and Charcoal adds a dominant element to any space. Use it as a dynamic accent piece or paired with smaller pieces for a dramatic effect. Built by hand in in Brooklyn, NY by Planterworx, an industry leader in outdoor metalwork known for their outstanding designs and meticulous craftsmanship. All Planterworx products contain a high recycled content and are recyclable.",

    count: 0,
    total: 0
  },
  {
    pid: 5,
    title: "Larkspur",
    company: "Kornegay",
    price: "825-1625",
    image: "image/kornegay_sq.png",
    material: "cast concrete",
    projectimage: [
      "http://kornegaydesign.com/wp-content/uploads/2016/08/blog-larkspur-series-featured.jpg"
    ],
    specs: [
      {
        dimension: '36" W x 24" H',
        finish: "Concrete",
        price: 825
      },
      {
        dimension: '48" W x 30" H',
        finish: "Concrete",
        price: 1380
      },
      {
        dimension: '32" W x 48" H',
        finish: "Concrete",
        price: 1625
      }
    ],
    description:
      "(Phoenix, Arizona) — Kornegay Design®, LLC is pleased to introduce the Square Series. The fifth planter series from designer Larry Kornegay, it offers a new dynamic to the company’s line of cast concrete landscape containers. The Square Series’ linear edges are a departure from the circular form and shape of the company’s other planters, yet it’s elegant silhouette and luxuriant surfaces are unmistakably Kornegay Design®. \n Graceful lines and a subtle return at the base of the planter showcase Kornegay’s commitment to fine design and quality craftsmanship. Like all Kornegay Design® products, the Square Series provides a unique and sculptural element well\n suited to any space.\nAll Kornegay Design® cast concrete and wood site furnishings are made with the intent of providing long-term value and beauty, and to withstand extreme weather environments as well as heavy pedestrian traffic.",

    count: 0,
    total: 0
  },
  {
    pid: 6,
    title: "JANUStone Chamfered",
    company: "Janice Et Cie",
    price: "340-560",
    image: "image/janecie_sq.png",
    material: "metal",
    projectimage: [
      "https://www.janusetcie.com/wp-content/uploads/Tapered-Chamfered_281HSR_218.jpg",
      "https://www.shopjanusetcie.com/media/catalog/product/cache/c2c2d60c3ea3d37c1616b809c5d89e3e/c/h/chamfered-planter-urban-grey.jpg"
    ],
    specs: [
      {
        dimension: '25" W x 20" H',
        finish: "Urban Grey",
        price: 834
      },
      {
        dimension: '25" W x 30" H',
        finish: "Urban Grey",
        price: 1037
      },
      {
        dimension: '22" W x 38" H',
        finish: "Urban Grey",
        price: 1043
      },
      {
        dimension: '25" W x 20" H',
        finish: "Pure White",
        price: 834
      },
      {
        dimension: '25" W x 30" H',
        finish: "Pure White",
        price: 1037
      },
      {
        dimension: '22" W x 38" H',
        finish: "Pure White",
        price: 1043
      }
    ],
    description:
      "Available in three sizes, Chamfered Planter adds sleek geometry to a porch, patio, or walkway. Filled with greenery, it creates a serene modern living sculpture. Overflowing with colorful flowers, it offers a burst of nature at her most joyful. Made of JANUSstone, an eco-friendly composite material that is 75% lighter and more durable than pre-cast concrete, this design is classic when solo and wonderful in a group.",

    count: 0,
    total: 0
  },
  {
    pid: 7,
    title: "Case Study Large Jewel with Plinth",
    company: "urbilis",
    price: 275,
    image: "image/large-jewel-plinth-white.png",
    material: "High fire stoneware ceramic",
    projectimage: [],
    specs: [
      {
        dimension: '13" x 12.5" H',
        finish: "White",
        price: 275
      },
      {
        dimension: '13" x 12.5" H',
        finish: "Charcoal",
        price: 275
      },
      {
        dimension: '13" x 12.5" H',
        finish: "Pebble",
        price: 275
      }
    ],
    description:
      "The Case Study Large Jewel with Plinth is clean and elegant in form. This sharp modern planter is made of high fire stoneware ceramic as well as three matte colors: pebble, charcoal, and white. The stand is available Brazilian walnut wood. The gorgeous wood stand is crafted from walnut and, with proper care, is 100% waterproof—suitable for any situation!",

    count: 0,
    total: 0
  },
  {
    pid: 8,
    title: "Regular Rectangular",
    company: "Planterworx",
    price: "395-475",
    image: "image/planterwox_rec.png",
    material: "Weather Metal",
    projectimage: [
      "https://static1.squarespace.com/static/55df87b4e4b096a14817e81b/5604839be4b0612d66a5a22c/5627e8f0e4b0a5a4d2bc779a/1543249977234/?format=2500w",
      "https://static1.squarespace.com/static/55df87b4e4b096a14817e81b/5604839be4b0612d66a5a22c/5644de6be4b0684194ef03cc/1543249977230/2015-0812_planterworx_127w79th-014.jpg?format=2500w"
    ],
    specs: [
      {
        dimension: '32" W x 16" H',
        finish: "Corten Steel",
        price: 395
      },
      {
        dimension: '32" W x 16" H',
        finish: "Charcoal",
        price: 395
      },
      {
        dimension: '40" W x 16" H',
        finish: "Corten Steel",
        price: 475
      },
      {
        dimension: '40" W x 16" H',
        finish: "Charcoal",
        price: 475
      }
    ],
    description:
      "The world's premier metal planter box manufacturer, Planterworx makes stylish architecture for urbanites with green thumbs. All their pieces are handcrafted in Brooklyn, New York from recycled metals, and each is designed to increase the architectural element of spaces - from offices to homes. Designing everything from indoor and outdoor planters to commercial and residential installations, Planterworx strives to deliver the best, most beautiful products with an unmatched aesthetic from the window box flower sets to the indoor summer garden.",

    count: 0,
    total: 0
  },
  {
    pid: 9,
    title: "Element",
    company: "Planterworx",
    price: 275,
    image: "image/planterwox_studio.png",
    material: "Weathered Steel",
    projectimage: [
      "https://images.squarespace-cdn.com/content/v1/55df87b4e4b096a14817e81b/1542819466315-VZ2QJJQ653D40PFOGS1D/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/21+Chestnut+Street+view1-0223.jpg?format=2500w"
    ],
    specs: [
      {
        dimension: '44" W x 16" W',
        finish: "Corten Steel",
        price: 386
      },
      {
        dimension: '44" W x 16" W',
        finish: "Pewter",
        price: 386
      },
      {
        dimension: '44" W x 16" W',
        finish: "Silver",
        price: 386
      }
    ],
    description:
      "Inspired by the coastal formations of rocky shorelines, the Planterworx Element Planter is avante-gardening for the urban green thumb. Available in a variety of material and finish configurations, this piece is more than a host to your favorite plants - it's a work of art.",

    count: 0,
    total: 0
  }
];

const detailedproducts = {
  pid: 4,
  title: "detail product",
  company: "urbilis",
  price: 275,
  image: "image/large-jewel-plinth-white.jpg",
  link: "https://ore.design/products/cylinder/",
  specs: [
    {
      dimension: '20" x 18" H',
      finish: "Linen White Powder Coat",
      price: 860
    },
    {
      dimension: '20" x 18" H',
      finish: "Metalic Silver Power Coat",
      price: 860
    },
    { dimension: '20" x 18" H', finish: "Rust Power Coat", price: 860 },
    {
      dimension: '25" x 20" H',
      finish: "Linen White Powder Coat",
      price: 1010
    },
    {
      dimension: '25" x 20" H',
      finish: "Metalic Silver Power Coat",
      price: 1010
    },
    { dimension: '25" x 20" H', finish: "Rust Power Coat", price: 1010 },
    {
      dimension: '30" x 22" H',
      finish: "Linen White Powder Coat",
      price: 1220
    },
    {
      dimension: '30" x 22" H',
      finish: "Metalic Silver Power Coat",
      price: 1220
    },
    { dimension: '30" x 22" H', finish: "Rust Power Coat", price: 1220 }
  ],
  description:
    "The Case Study Large Jewel with Plinth is clean and elegant in form. This sharp modern planter is made of high fire stoneware ceramic as well as three matte colors: pebble, charcoal, and white. The stand is available Brazilian walnut wood. The gorgeous wood stand is crafted from walnut and, with proper care, is 100% waterproof—suitable for any situation!",

  count: 0,
  total: 0
};

module.exports = { products, detailedproducts };
