"use client"

import { useState } from "react"

const logoTests = [
  { name: "Trace VFX", path: "/logos/trace-vfx.png" },
  { name: "Basilicfly", path: "/logos/basilicfly.png" },
  { name: "Redefine", path: "/logos/redefine.png" },
  { name: "MPC", path: "/logos/mpc.png" },
  { name: "Framestore", path: "/logos/framestore.png" },
  { name: "Blam Pictures", path: "/logos/blam.png" },
  { name: "Ingenuity", path: "/logos/ingenuity.png" },
  { name: "Digital Domain", path: "/logos/digitaldomain.png" },
]

function LogoTest({ name, path }: { name: string; path: string }) {
  const [status, setStatus] = useState("loading")
  const [error, setError] = useState("")
  const [actualUrl, setActualUrl] = useState("")

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-2">Expected Path: {path}</p>
      {actualUrl && <p className="text-yellow-400 text-xs mb-2">Actual URL: {actualUrl}</p>}

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <img
            src={path || "/placeholder.svg"}
            alt={name}
            className="w-12 h-12 object-contain"
            onLoad={(e) => {
              setStatus("loaded")
              setActualUrl(e.currentTarget.src)
            }}
            onError={(e) => {
              setStatus("error")
              setError(e.currentTarget.src)
              setActualUrl(e.currentTarget.src)
            }}
          />
        </div>

        <div>
          <p
            className={`font-bold ${
              status === "loaded" ? "text-green-400" : status === "error" ? "text-red-400" : "text-yellow-400"
            }`}
          >
            Status: {status.toUpperCase()}
          </p>
          {error && <p className="text-red-300 text-xs">Failed URL: {error}</p>}
        </div>
      </div>

      <div className="mt-2 space-x-2">
        <a href={path} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
          Test direct access →
        </a>
      </div>
    </div>
  )
}

export default function DebugLogosPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Logo Debug Page</h1>

      <div className="mb-8 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
        <h2 className="text-red-400 font-bold mb-2">⚠️ Issue Found:</h2>
        <p className="text-red-200 text-sm mb-2">
          The console shows it's trying to load from <code>/pavan/</code> instead of <code>/logos/</code>
        </p>
        <p className="text-red-200 text-sm">
          This suggests there might be a path configuration issue or the files are in the wrong folder.
        </p>
      </div>

      <div className="mb-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
        <h2 className="text-yellow-400 font-bold mb-2">Quick Fix Options:</h2>
        <ol className="text-yellow-200 text-sm space-y-1">
          <li>
            1. <strong>Option A:</strong> Move your logo files to <code>public/logos/</code> folder
          </li>
          <li>
            2. <strong>Option B:</strong> If your files are in <code>public/pavan/</code>, I can update the paths
          </li>
          <li>
            3. <strong>Option C:</strong> Upload the logos again and I'll integrate them properly
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {logoTests.map((test) => (
          <LogoTest key={test.name} name={test.name} path={test.path} />
        ))}
      </div>

      <div className="mt-8 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white mb-2">Current Expected File Structure</h3>
        <pre className="text-green-400 text-xs bg-black p-2 rounded">
          {`your-project/
├── public/
│   └── logos/          ← Files should be here
│       ├── trace-vfx.png
│       ├── basilicfly.png
│       ├── redefine.png
│       ├── mpc.png
│       ├── framestore.png
│       ├── blam.png
│       ├── ingenuity.png
│       └── digitaldomain.png
├── app/
├── components/
└── ...`}
        </pre>
      </div>

      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white mb-2">If your files are in public/pavan/ instead:</h3>
        <pre className="text-blue-400 text-xs bg-black p-2 rounded">
          {`your-project/
├── public/
│   └── pavan/          ← If files are here
│       └── *.png files
└── ...`}
        </pre>
        <p className="text-gray-400 text-sm mt-2">
          Let me know and I'll update the paths to use <code>/pavan/</code> instead of <code>/logos/</code>
        </p>
      </div>
    </div>
  )
}
