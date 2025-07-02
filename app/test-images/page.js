"use client"

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl mb-8">Image Loading Test</h1>

      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded">
          <h3 className="mb-2">Test 1: Direct Image Access</h3>
          <p className="text-sm text-gray-400 mb-2">Try accessing: http://localhost:3000/logos/trace-vfx.png</p>
          <a href="/logos/trace-vfx.png" target="_blank" className="text-blue-400 hover:text-blue-300" rel="noreferrer">
            Click here to test direct access
          </a>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h3 className="mb-2">Test 2: Image in HTML</h3>
          <img
            src="/logos/trace-vfx.png"
            alt="Trace VFX"
            className="w-16 h-16 bg-white rounded border-2 border-red-500"
            onError={(e) => {
              console.error("Image failed to load")
              e.currentTarget.style.border = "2px solid red"
            }}
            onLoad={() => {
              console.log("Image loaded successfully")
            }}
          />
          <p className="text-xs text-gray-400 mt-1">Red border = failed to load</p>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h3 className="mb-2">Test 3: Check Console</h3>
          <p className="text-sm text-gray-400">Open browser DevTools (F12) and check Console for error messages</p>
        </div>
      </div>
    </div>
  )
}
