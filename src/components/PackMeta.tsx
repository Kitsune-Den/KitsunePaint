interface PackMetaProps {
  packName: string
  packAuthor: string
  gameVersion: '2.x' | '3.x'
  onChange: (field: 'packName' | 'packAuthor', value: string) => void
  onGameVersionChange: (value: '2.x' | '3.x') => void
}

export function PackMeta({ packName, packAuthor, gameVersion, onChange, onGameVersionChange }: PackMetaProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Pack Info
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-zinc-400">Pack Name</label>
          <input
            type="text"
            value={packName}
            onChange={(e) => onChange('packName', e.target.value)}
            placeholder="My Paint Pack"
            className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-zinc-400">Author</label>
          <input
            type="text"
            value={packAuthor}
            onChange={(e) => onChange('packAuthor', e.target.value)}
            placeholder="your name"
            className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-400">Your game version</label>
        <div className="inline-flex w-fit rounded border border-zinc-700 overflow-hidden">
          {(['3.x', '2.x'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => onGameVersionChange(v)}
              className={`px-4 py-2 text-sm transition-colors ${
                gameVersion === v
                  ? 'bg-amber-500 text-zinc-950 font-medium'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              7DTD V{v}
            </button>
          ))}
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">
          Works on both ~ paint packs are version-agnostic. This picks the matching
          OCBCustomTextures build in the README and notes the target in ModInfo.
        </p>
      </div>
    </div>
  )
}
