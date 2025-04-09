import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/background.svg" 
          alt="Background" 
          fill 
          priority
          className="object-cover"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80  px-4 sm:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="HahaCoin Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-lg font-medium hidden sm:inline text-black">"Laughter on the Blockchain—HahaCoin"</span>
        </div>
        <button className="bg-black text-white rounded-full px-5 py-2 font-medium text-sm hover:bg-black/80 transition-colors">
          Connect Wallet
        </button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="text-sm sm:text-base font-medium text-black">Laugh, Earn, Repeat—Powered by HahaCoin</div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight text-black">
              Turning Humor into a Rewarding Experience
            </h1>
            
            <p className="text-base sm:text-sm max-w-lg text-black">
              HahaCoin is a decentralized token for the humor revolution. Share your jokes, earn for laughs, and join a global community that's rewriting the rules of entertainment and blockchain technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="https://bscscan.com/token/0x3b597bc9bccdcad4e6871a9a7bd50c669e46d2bc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-black/90 transition-all hover:scale-105 inline-block text-center"
              >
                Explore HahaCoin
              </a>
              <a 
                href="https://drive.google.com/file/d/1cjuNy9B5CeYyeMik7-J4lU_OehloeeZ7/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-black py-3 px-6 rounded-full font-medium border border-black/10 hover:bg-gray-50 transition-all hover:scale-105 inline-block text-center"
              >
                Whitepaper
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative lg:h-[600px] md:h-[500px] h-[400px] order-1 lg:order-2">
            <Image
              src="/hero.png"
              alt="Woman with smartphone"
              fill
              priority
              className="object-contain"
            />
            
            {/* Chat Bubble 1 */}
            <div className="absolute top-[50%] right-0 animate-float">
              <Image
                src="/chat1.png"
                alt="Chat bubble joke"
                width={260}
                height={80}
              />
            </div>
            
            {/* Chat Bubble 2 */}
            <div className="absolute bottom-[10%] left-0 animate-float-delayed">
              <Image
                src="/chat2.png"
                alt="Chat bubble joke"
                width={260}
                height={80}
              />
            </div>
            
            {/* Security Icon */}
            <div className="absolute top-[30%] right-[15%] animate-pulse">
              <Image
                src="/Secure-Icon.png"
                alt="Security icon"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
