"use client";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useShoppingCart } from "use-shopping-cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  const { handleCartClick } = useShoppingCart();
  const cartCount = 1;
  return (
    <div className="relative cursor-pointer col-start-3 justify-self-end m-2" onClick={() => handleCartClick()}>
      <IoCartOutline size={36} />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default Cart;

export const CartModal = () => {
  const { shouldDisplayCart, handleCartClick, removeItem } = useShoppingCart();
  const cartDetails = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];
  const cartCount = Object.values(cartDetails ?? {}).length;
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Current items in your cart will be displayed here, clickc Checkout
            to complete
          </SheetDescription>
        </SheetHeader>
        <div className="mt-12">
          {cartCount === 0 ? (
            <div className="">
              <p>Cart is empty!</p>
            </div>
          ) : (
            <>
              {Object.values(cartDetails ?? {}).map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex gap-4">
                      <Image
                        src={item.image}
                        alt="Product image"
                        className="object-cover"
                        width={128}
                        height={128}
                      />
                      <div className="flex flex-col items-start gap-4">
                        <p className="font-semibold text-[1.25rem]">
                          {item.name}
                        </p>
                        <p className="font-bold text-[1.25rem]">
                          ${item.price}
                        </p>
                        <Button
                          className="p-1"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </React.Fragment>
                );
              })}
              <Link href={"/checkout"}>
                <Button>Checkout</Button>
              </Link>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
