import { Menu, ShoppingCart, UserCircle, Search, SlidersHorizontal, X, Plus } from 'lucide-react';

export default function Marketplace() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-12">
      <header className="sticky top-0 z-50 bg-primary px-5 h-16 flex justify-between items-center border-b border-outline-variant/10 shadow-sm text-on-primary">
        <div className="flex items-center gap-3">
          <Menu size={24} />
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span className="text-xl font-bold">Marketplace</span>
          </div>
        </div>
        <div className="flex items-center">
          <UserCircle size={28} />
        </div>
      </header>

      <main className="px-5 mt-6">
        <div className="flex items-center bg-surface-container-lowest rounded-3xl p-3 shadow-sm border border-outline-variant/20 mb-6">
          <Search className="text-outline ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Cari produk daur ulang..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-base placeholder:text-outline/60 ml-2 outline-none" 
          />
          <button className="bg-surface-container p-2 rounded-2xl">
            <SlidersHorizontal className="text-on-surface-variant" size={20} />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5">
          <button className="flex-shrink-0 bg-surface-container w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/30">
            <X className="text-on-surface-variant" size={20} />
          </button>
          <button className="flex-shrink-0 bg-primary text-on-primary px-5 py-2 rounded-full font-bold text-sm shadow-sm">
            Plastic
          </button>
          <button className="flex-shrink-0 bg-surface-container text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium border border-outline-variant/30">
            Paper
          </button>
          <button className="flex-shrink-0 bg-surface-container text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium border border-outline-variant/30">
            Bottles
          </button>
          <button className="flex-shrink-0 bg-surface-container text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium border border-outline-variant/30">
            Glass
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden group border border-outline-variant/10 flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-surface flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCOSqgbz99dlFTtY_qaTnoNPCA7AqgpMu-ULWe3fpgN5zJ9bI6Im6jAC-aQEmaF4GnBJWXeU8A6RhqMy6ksSDp2r3lu6Hfmt2fgXetp7aq0emvDVQcmjl3lT4FaqjyatGmua7Fsa9Td8m5CnMvl2-jUISl3in_73zSvrzasME-LVYR5WsXg1DpAlXkQpnicl4rnCsbYsp8oiOLZBh-H1F1cxr6dKATR1uVigbFh6kfpORojYfFKug1qtzAy_BmXenQ-ajkJrKql94" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="" 
              />
              <button className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md active:scale-90 transition-all text-primary">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            <div className="p-3.5 flex flex-col flex-1">
              <h3 className="text-on-surface font-bold text-sm truncate">Bottle Plant Pot</h3>
              <p className="text-primary font-bold text-sm mt-1">IDR 35.000</p>
              <p className="text-outline text-[11px] mt-auto pt-2 font-medium">@eco_maker23</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden group border border-outline-variant/10 flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-surface flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsMw2_HU8ZsMil0gOi2FCJ8nXwDeMa83af33__QXFYJf98SaZBEuKnVfWjoqvNos6waqfTbktUOG4nAM0ePkQs7do96RI_DOHkmFq10LiFfdcyY_zDuaFh_Jf0RK8P-_k4-gg9kT7bU0k-AjZf0GTnvd2dKYGpSO9A9blmQV1fEnlidV6auQ7KS7I5YiT9Kpvmndh4CN7G3OmUFxkXwTxsOvd2x76qZGq_JmqtOClE9gTSl2Piw1WvfssCyIXUOZmSmfvmyuhN3LI" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="" 
              />
              <button className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md active:scale-90 transition-all text-primary">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            <div className="p-3.5 flex flex-col flex-1">
              <h3 className="text-on-surface font-bold text-sm truncate">Recycled Pulp Lamp</h3>
              <p className="text-primary font-bold text-sm mt-1">IDR 125.000</p>
              <p className="text-outline text-[11px] mt-auto pt-2 font-medium">@paper_craft_id</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden group border border-outline-variant/10 flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-surface flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAou9ycjjheWmVUhaV_A9zV3a9s4KLFX9x3R1HNXFgDaNZYJAegat140tGfzSt8JBaoM9R1W2-7C3xn2WjEld4eurYtgbikwaM2OYX4Z--E2GA4YM_SEpKOpT1jGzgbrM6NLqMGOfKpvVZqbqS-P8xMF9tWWmm0mOFHjEOfOcWx0YpsiGg4FVR9syf0dLZxJU7OkRheXlv0c9nyQ3LT1p5CV3Ao-pS7OpCAOgTW7y1sXsUPYrNBsfthW0A1Xv26OawoAchPbctkUA" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="" 
              />
              <button className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md active:scale-90 transition-all text-primary">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            <div className="p-3.5 flex flex-col flex-1">
              <h3 className="text-on-surface font-bold text-sm truncate">Ocean Plastic Coasters</h3>
              <p className="text-primary font-bold text-sm mt-1">IDR 45.000</p>
              <p className="text-outline text-[11px] mt-auto pt-2 font-medium">@re_ocean</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden group border border-outline-variant/10 flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-surface flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDus80j7OVZUYqcdT4pBUjNduPjtoNBQySbUT3UC8IYV1wBMXDkW1wwEewZrZf0ffp1_VJfFNGpva4r4KeccU5R8Nw2mYxaH2MGERKBJbyhszvhpn35Z6XnZzKPb8siyq-6uxtV8r71ifqrqLgzQqel45JkT2S6cyZulVxQCQRS8fCXb_B3uy1D0QPCnLs5TiJKxI47RWvQg4UbJN-NlfTslxEpUIgJNdD-ASXAQBhQjMtuZegdaHiI_x2MoljjXNQzT0wGjbj_9Qk" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="" 
              />
              <button className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md active:scale-90 transition-all text-primary">
                <Plus size={20} strokeWidth={3} />
              </button>
            </div>
            <div className="p-3.5 flex flex-col flex-1">
              <h3 className="text-on-surface font-bold text-sm truncate">Mesh Tote Bag</h3>
              <p className="text-primary font-bold text-sm mt-1">IDR 55.000</p>
              <p className="text-outline text-[11px] mt-auto pt-2 font-medium">@green_thread</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
