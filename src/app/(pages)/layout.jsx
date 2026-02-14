import Header from "@/components/Header";

export default function AppLayout({children}){
    return(
        <>
        <Header/>
        <main className="mx-[25px] mt-[30px] mb-[37px]">
          {children} 
        </main>
        </>
    )
}