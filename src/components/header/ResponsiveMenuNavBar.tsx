import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const ResponsiveMenuNavBar = () => {
  return (
    <div>
      <Sheet>
        <div className="flex gap-2">
          <SheetTrigger className="cursor-custom-hand">
            <Menu className="w-8 h-8 cursor-hand hover:opacity-75 text-white" />
          </SheetTrigger>
        </div>
        <SheetContent className="bg-blue-800 border-none">
          <VisuallyHidden>
            <SheetTitle>Rose Online Brasil</SheetTitle>
          </VisuallyHidden>

          {/* SheetDescription apenas para textos simples */}
          <SheetDescription>
            {/* Se quiser colocar um texto breve, pode deixar aqui */}
          </SheetDescription>

          {/* Coloque seus links e accordion FORA da SheetDescription */}
          <div className="flex flex-col mt-10 gap-y-2 p-1">
            <Link href="/">
              <SheetClose className="cursor-custom-hand w-full text-left font-semibold p-2 transition duration-200 rounded bg-slate-300">
                Home
              </SheetClose>
            </Link>
            <Link href="/Donation/login">
              <SheetClose className="cursor-custom-hand w-full text-left font-semibold p-2 transition duration-200 rounded bg-slate-300">
                Donate
              </SheetClose>
            </Link>
            <Link href="/Downloads/download">
              <SheetClose className="cursor-custom-hand w-full text-left font-semibold p-2 transition duration-200 rounded bg-slate-300">
                Download
              </SheetClose>
            </Link>

            {/* freature inicio */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-2 cursor-custom-hand bg-slate-300 hover:opacity-85 rounded hover:no-underline">
                  <div className="flex gap-x-4 items-center flex-wrap">
                    <p className="font-semibold cursor-custom-hand uppercase">
                      Freature
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <section className="grid grid-cols-2 gap-1 mt-1">
                    <Link
                      href="/freatures/craft"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Craft
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/collector"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Collector
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/box"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full h-full cursor-cust p-2om-hand">
                        Sistema de Box
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/clan"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Sistema de clan
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/refines"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Refines
                      </SheetClose>
                    </Link>
                    <Link
                      href="/freatures/quick-switch"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Quick Switch
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/game-arena"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Game Arena
                      </SheetClose>
                    </Link>

                    <Link
                      href="/freatures/offVending"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Off Vending
                      </SheetClose>
                    </Link>
                  </section>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* guides */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-2 cursor-custom-hand bg-slate-300 hover:opacity-85 rounded hover:no-underline">
                  <div className="flex gap-x-4 items-center flex-wrap">
                    <p className="font-semibold cursor-custom-hand uppercase">
                      Guias
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <section className="grid grid-cols-2 gap-1 mt-1">
                    <Link
                      href="/guides/starting"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Guia para iniciantes
                      </SheetClose>
                    </Link>

                    <Link
                      href="/guides/questPlanets"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Quests Planetaria
                      </SheetClose>
                    </Link>

                    <Link
                      href="/guides/interfaceScreen"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Interface
                      </SheetClose>
                    </Link>

                    <Link
                      href="/guides/jobs"
                      className="w-full cursor-custom-hand font-semibold bg-slate-300 rounded hover:opacity-85"
                    >
                      <SheetClose className="w-full cursor-custom-hand p-2">
                        Classes
                      </SheetClose>
                    </Link>
                  </section>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <SheetFooter className=" w-full flex flex-row gap-x-2 justify-end mb-5">
            <Link href={"/Account/login"}>
              <SheetClose>
                <p className="cursor-custom-hand px-3 py-2 rounded bg-yellow-300 text-desc hover:bg-yellow-200">
                  Login
                </p>
              </SheetClose>
            </Link>

            <Link href={"/Account/createAccount"}>
              <SheetClose>
                <p className="cursor-custom-hand px-3 py-2 rounded bg-yellow-300 text-desc hover:bg-yellow-200">
                  Register
                </p>
              </SheetClose>
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ResponsiveMenuNavBar;
