import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    instock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    instock: false,
  },
  {
    id: 3,
    name: "Desk Chair",
    category: "Furniture",
    price: 150,
    instock: true,
  },
  {
    id: 4,
    name: "Wristwatch",
    category: "Accessories",
    price: 200,
    instock: true,
  },
  {
    id: 5,
    name: "Blender",
    category: "Appliances",
    price: 100,
    instock: false,
  },
  {
    id: 6,
    name: "Sneakers",
    category: "Footwear",
    price: 90,
    instock: true,
  },
  {
    id: 7,
    name: "Backpack",
    category: "Bags",
    price: 60,
    instock: true,
  },
  {
    id: 8,
    name: "LED TV",
    category: "Electronics",
    price: 500,
    instock: false,
  },
  {
    id: 9,
    name: "Bookshelf",
    category: "Furniture",
    price: 300,
    instock: true,
  },
  {
    id: 10,
    name: "Headphones",
    category: "Electronics",
    price: 150,
    instock: true,
  },
];

export function GET(request, { params }) {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return NextResponse.json(
      { error: "Product Does not exist" },
      { status: 404 }
    );
  }
  return NextResponse.json(product);
}
