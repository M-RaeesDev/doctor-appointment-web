import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  

export default function Header(){
    return(
        <div className="bg-secondary py-3 ">
            <div className="flex justify-between items-center container mx-auto ">
            <h1 className="txt-2xl font-bold font-mono">LOGO</h1>
            <Menubar>
            <MenubarMenu>
            <MenubarTrigger>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>IMG</AvatarFallback>
</Avatar>

            </MenubarTrigger>
             <MenubarContent>
                <MenubarItem>
                     New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
             <MenubarSeparator />
         <MenubarItem>Print</MenubarItem>
         </MenubarContent>
        </MenubarMenu>
        </Menubar>

            </div>
        </div>
    )
}