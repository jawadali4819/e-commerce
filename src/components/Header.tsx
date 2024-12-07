"use client";
import React from "react";
import { ClerkLoaded, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, User } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn } = useUser();
  const { user } = useUser();

  return (
    <header className="flex w-full flex-col mb-4">
      <div className="w-full flex flex-wrap justify-between items-center px-4 py-3 sm:gap-3 bg-white dark:bg-gray-900">
        {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-500 via-zinc-800 to-blue-500 rounded-full shadow-lg">
          <span className="absolute top-[20%] left-1/4 text-white font-bold text-xl">
            W
          </span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <Form action="/search" className="relative hidden sm:block">
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </Form>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Link href="/basket">
          <Button variant="default" className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">My Basket</span>
          </Button>
        </Link>

        <ClerkLoaded>
          {isSignedIn && (
            <Link href="/orders">
              <Button variant="default" className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                <span className="hidden sm:inline">My Orders</span>
              </Button>
            </Link>
          )}
          {isSignedIn ? (
            <div className="flex items-center space-x-2">
              <UserButton />
              <div className="hidden sm:block text-xs">
                <p className="text-gray-400">Welcome Back!</p>
                <p className="text-gray-800 dark:text-white font-bold">
                  {user?.fullName}
                </p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <Button variant="default" className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            </SignInButton>
          )}
        </ClerkLoaded>
      </div>
      </div>

      <div className="block sm:hidden px-2">
      <Form action="/search" className="relative">
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </Form>
      </div>
    </header>
  );
};

export default Header;
