"use client";

import { FormEvent } from "react";
import InputWrapper from "@/components/input/InputWrapper";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function Home() {
  return (
    <div>

      <h3 className="flex flex-col items-center mb-6 font-black text-3xl text-very-dark-cyan uppercase">
        <span>spli</span>
        <span>tter</span>
      </h3>

      <article className="bg-white p-6 rounded-xl grid grid-cols-2 gap-9 shadow-zinc-500 shadow-sm">
        <form
          onSubmit={(e: FormEvent) => { e.preventDefault(); }}
        >
          <InputWrapper
            autoFocus
            label="bill"
            name="bill"
            errorMessage="any error happened"
            icon={<MdOutlineAttachMoney />}
          />
        </form>
        <section className="bg-very-dark-cyan w-full h-auto flex flex-col justify-between gap-10 p-6 rounded-lg">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-10">
              <div>
                <h3 className="text-white text-sm font-black capitalize">tip amount</h3>
                <small className="text-grayish-cyan text-xs font-medium before:content-['/'] before:mr-1">person</small>
              </div>
              <span className="text-4xl text-strong-cyan font-bold">$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-sm font-black capitalize">tip amount</h3>
                <small className="text-grayish-cyan text-xs font-medium before:content-['/'] before:mr-1">person</small>
              </div>
              <span className="text-4xl text-strong-cyan font-bold">$0.00</span>
            </div>
          </div>

          <button
            disabled
            className="bg-strong-cyan text-very-dark-cyan text-base font-black uppercase p-2 rounded-md cursor-pointer duration-150 ease-out hover:bg-light-grayish-cyan disabled:opacity-60 disabled:hover:bg-strong-cyan disabled:cursor-not-allowed">reset</button>
        </section>
      </article>

      <footer
        className="text-center text-xs text-very-dark-cyan my-6"
      >Made with love by <a href="#" target="_blank" className="underline">Luiz Carlos</a></footer>
    </div>
  );
};