import movingCart from "../app/images/movingCart.png";
import Image from "next/image";

export default function Cart() {
  return (
    <main className="container mx-auto px-[20px] tablet:px-[40px] laptop:px-16 min-h-[400px] bg-white text-black  mt-[60px]">
      <div className="mt-5 text-5xl mb-10 tablet:my-10 desktop:my-[60px]">
        Your cart is empty
      </div>
      <div className="block laptop:flex laptop:space-x-10 desktop:space-x-[60px]">
        <div className="w-full laptop:basis-2/3 laptop:mb-5">
          <div>
            <div className="flex flex-wrap laptop:flex-nowrap laptop:justify-center items-center mb-[60px] laptop:mt-28 gap-y-2 gap-x-10">
              <Image
                className="size-48"
                alt="moving cart image"
                src={movingCart}
              />
              <div className="flex flex-col">
                <span>You haven&apos;t added any items yet.</span>
                <div className="flex flex-wrap tablet:flex-nowrap items-center mt-5 gap-5">
                  <a href="/" className="button-black">
                    Shop Glasses
                  </a>
                  <a href="/" className="button-black">
                    Shop Contacts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full laptop:max-w-[520px] laptop:basis-1/3 mb-[60px]">
          <span className="pb-5 font-serif text-3xl font-medium mt-10 laptop:mt-0 block border-b border-border">
            Summary
          </span>
        </div>
      </div>
    </main>
  );
}
