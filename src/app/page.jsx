import BannerComponent from "@/components/BannerComponent";
import FooterComponent from "@/components/FooterComponent";
import NavBarComponent from "@/components/NavBarComponent";
import ProductListComponent from "@/components/ProductListComponent";

export default function Home() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 m-4 rounded-lg bg-white main_container">
        <div className="text-black">
          <BannerComponent></BannerComponent>
          <ProductListComponent></ProductListComponent>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
}
