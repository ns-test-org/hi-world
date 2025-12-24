export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center p-6">
      <div className="text-center space-y-8">
        {/* v0 Logo */}
        <div className="flex items-center justify-center gap-3">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            v0
          </div>
        </div>
        
        {/* Hello World */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hello World
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          A simple template built with v0
        </p>
        
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-2 pt-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}


