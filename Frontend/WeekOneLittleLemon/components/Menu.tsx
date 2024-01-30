import { faBook, faLemon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface Food {
    name: string;
    description?: string;
    price?: number;
    image?: string;
}

interface MenuTab {
    name: string;
    selected: boolean;
    foods: Food[];
}


interface MenuProps {
    tabs: MenuTab[];
}



const Menu = () => {

    const selected = "bg-gray-100 text-gray-900 inline-block p-4 rounded-t-lg";
    const unselected = "text-white hover:bg-gray-50 hover:text-gray-900 inline-block p-4 border-1 border rounded";


    return (

        <>
            <div className="container px-5 pt-12 mx-auto flex-wrap min-w-full">
                <nav className="flex flex-wrap text-sm font-medium text-center text-white overflow-x-auto gap-2">
                    <a href="#" className={selected}>Main Dishes</a>
                    <a href="#" className={unselected}>Salads</a>
                    <a href="#" className={unselected}>Soups</a>
                    <a href="#" className={unselected}>Main Dishes</a>
                    <a href="#" className={unselected}>Desserts</a>
                    <a href="#" className={unselected}>Drinks</a>
                </nav>

            </div>
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap min-w-full pt-12 h-full">
                <div className=" rounded-lg sm:mr-10 flex ">
                    {/* fill this div with the menu items and have it scrollable to end of page */}
                    <div className="relative flex flex-wrap overflow-y-auto gap-2">
                        {/* The Catalina */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Catalina</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Benjamin */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Benjamin</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Pasta */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Pasta</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Catalina */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Catalina</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Benjamin */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Benjamin</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Pasta */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Pasta</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Catalina */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Catalina</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Benjamin */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Benjamin</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Pasta */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Pasta</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Catalina */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Catalina</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Benjamin */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Benjamin</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                        {/* The Pasta */}
                        <div className="w-40 aspect-[3/2] rounded-t-lg bg-white">
                            <img alt="gallery" src="https://dummyimage.com/200x100" className="object-cover object-center rounded" />
                            <div className="px-6 py-4">
                                {/* title */}
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">The Pasta</h2>
                                {/* description */}
                                <p className="leading-relaxed text-black text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                {/* price */}
                                <p className="leading-relaxed text-black text-sm font-semibold">$15.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );

}

export default Menu;