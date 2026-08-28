/**
 * Changelog page. New entries go at the top. Keep human-readable: focus on
 * what changed for users (fixed/added/improved), not commit titles.
 *
 * Add a new release by prepending an entry to RELEASES.
 */

type Change = { type: 'fixed' | 'added' | 'improved' | 'changed'; text: string }
type Release = { version: string; date: string; changes: Change[] }

const RELEASES: Release[] = [
  {
    version: '1.8.1',
    date: 'August 2026',
    changes: [
      { type: 'fixed', text: 'Custom paint names now show up correctly on 7DTD V3.x. The game renamed its own localization table from Localization.txt to Localization.csv in V3, and a modlet file only merges when its name matches ~ so on V3 every paint fell back to displaying its raw internal key (txName_yourpack_yourpaint) in the paint menu instead of the name you gave it. Packs now ship the table under both names, so they read correctly on V2.x and V3.x alike. Rebuild your pack to pick up the fix; no other changes needed.' },
      { type: 'improved', text: 'The README bundled with your pack now spells out that OCBCustomTextures is required on EVERY machine that plays, not just the server, and that EAC has to be off or it silently blocks OCB from loading. A missing OCB install produces no error message anywhere ~ the pack just loads and the paints never appear ~ so the README now includes the log line to check when no custom paints show up.' },
    ],
  },
  {
    version: '1.8.0',
    date: 'June 2026',
    changes: [
      { type: 'added', text: 'Game-version picker (7DTD V2.x / V3.x) in Pack Info. Paint packs are version-agnostic ~ V2.x and V3.x share the same Unity runtime and paint format, so a pack works on both. The picker stamps your build target into the pack\'s ModInfo and points the bundled README at the matching OCBCustomTextures build for your game version. Defaults to V3.x.' },
    ],
  },
  {
    version: '1.7.0',
    date: 'June 2026',
    changes: [
      { type: 'changed', text: 'Updated for 7 Days to Die V3.0 ("Dead Hot Summer"). The paint pack format is unchanged from V2.x, and it runs on the V3.0-ready OCBCustomTextures fork (v0.8.1), so existing and newly built packs work on V3.0 with no changes on your end.' },
    ],
  },
  {
    version: '1.6.6',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'Unreadable image files now get a clear, accurate error. Before, a corrupt or wrong-format texture showed a misleading "the server may be busy" message ~ now it tells you the actual problem (the file couldn\'t be decoded) and how to fix it (re-export as a standard 8-bit PNG).' },
    ],
  },
  {
    version: '1.6.5',
    date: 'May 2026',
    changes: [
      { type: 'added', text: 'Duplicate paint name detection at add-time. If you try to add a paint with a name that\'s already in your pack (or one that reduces to the same ID, like "Wood Wall" vs "wood_wall"), you\'ll see a clear warning right under the name field instead of finding out at download time.' },
      { type: 'improved', text: 'The "Add to Pack" button now tells you exactly why it\'s disabled instead of just being grey.' },
      { type: 'fixed', text: 'Rate limit no longer hits real humans. Building from the browser is unlimited; only scripts and bulk callers are throttled (75/hour). If you\'ve been hitting "slow down, you\'re going too fast" with a normal 50+ paint pack ~ that should be gone now.' },
    ],
  },
  {
    version: '1.6.2',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'The auto-cropper was getting in the way of the multi-block grid feature ~ if you had a 1024x256 strip you wanted sliced into 4x1, the cropper kept asking you to make it square first. Removed.' },
      { type: 'improved', text: 'The build pipeline now handles non-square sources automatically: single-block paints get a silent center-crop, multi-block grids slice and then center-crop each tile to square.' },
      { type: 'added', text: 'Aspect hint near the Block Span selector ~ tells you which source shape works best for the grid you picked (e.g. "Best with a 1:3 vertical source").' },
    ],
  },
  {
    version: '1.6.1',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'Progress bar was jumping straight to 100% when the last paint started building, then sitting there. Now it actually tracks completion.' },
      { type: 'improved', text: 'Build errors now show a friendly dialog with a clear explanation instead of a Python traceback dumped into the modal. Full technical details still go to the dev console.' },
      { type: 'fixed', text: 'Long paint names in the Paint Pack tray now wrap to 2 lines instead of being cut off at "enchanted fo..."' },
    ],
  },
  {
    version: '1.6.0',
    date: 'May 2026',
    changes: [
      { type: 'added', text: 'Crop tool for non-square uploads! Drop in any image and a friendly cropper pops up so you can pick the 1:1 region you want, instead of getting an error.' },
      { type: 'improved', text: 'Server error messages are now parsed for the human-readable part. No more raw Python tracebacks if a build fails.' },
    ],
  },
  {
    version: '1.5.5',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'Server-side bundle builder was silently timing out on the new VPS, producing broken modpacks with raw PNGs instead of .unity3d bundles. Big thanks to the Nexus user who reported it!' },
      { type: 'improved', text: 'Large textures (over 2048px per side) now get downscaled client-side before upload. 7DTD paints map to a single block face, so anything larger was wasted bytes and slow build time.' },
      { type: 'improved', text: 'If a bundle build does fail, you now get a clear "please retry" message instead of silently downloading a broken pack.' },
    ],
  },
  {
    version: '1.5.4',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'EXIF-rotated JPGs (typically from phone cameras) were getting cut off on one side. Now respected during processing.' },
      { type: 'fixed', text: 'Non-square source images now fail clearly up front instead of producing weird modpacks.' },
      { type: 'improved', text: 'Landing page images optimized — 11MB → 592KB, much faster first paint.' },
    ],
  },
  {
    version: '1.5.3',
    date: 'May 2026',
    changes: [
      { type: 'added', text: 'Bundle Builder DIY kit — downloadable Python kit for advanced users who hit the rate limit or want to build packs offline.' },
      { type: 'added', text: 'Rate limiting on the bundle build API to keep the server responsive.' },
    ],
  },
  {
    version: '1.5.2',
    date: 'May 2026',
    changes: [
      { type: 'fixed', text: 'Bundle asset paths are now namespaced by pack ID so two packs with a paint of the same name (e.g. "wood") no longer collide on load.' },
    ],
  },
  {
    version: '1.5.1',
    date: 'April 2026',
    changes: [
      { type: 'changed', text: 'Block span now defaults to 1×1 instead of auto-detecting from image dimensions.' },
      { type: 'added', text: '"Report a bug" and "Support on Ko-fi" links in the footer.' },
      { type: 'added', text: 'Anonymous build counter ("X modpacks created since April 2026") in the footer.' },
      { type: 'added', text: 'Terms of Use & Privacy page covering data handling and acceptable use.' },
    ],
  },
  {
    version: '1.5.0',
    date: 'April 2026',
    changes: [
      { type: 'added', text: 'Multi-block paints — slice a single source texture across a 2×2, 3×3, or larger grid of blocks.' },
      { type: 'added', text: 'Building modal with the paint kitsune mascot and rotating flavor messages.' },
      { type: 'added', text: 'PaintUnlocked support — modpacks with up to 1023 paints (vanilla cap is 255).' },
    ],
  },
]

const TYPE_STYLES: Record<Change['type'], string> = {
  fixed: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40',
  added: 'bg-amber-950/40 text-amber-400 border-amber-800/40',
  improved: 'bg-sky-950/40 text-sky-400 border-sky-800/40',
  changed: 'bg-violet-950/40 text-violet-400 border-violet-800/40',
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <a href="/" className="text-xs text-zinc-600 hover:text-amber-500 transition-colors mb-8 inline-block">
          &larr; Back to KitsunePaint
        </a>

        <h1 className="text-2xl font-bold text-zinc-100 mb-2">Changelog</h1>
        <p className="text-sm text-zinc-500 mb-12">
          Recent updates to KitsunePaint. Newest at the top.
        </p>

        <div className="space-y-12">
          {RELEASES.map((release) => (
            <section key={release.version}>
              <div className="flex items-baseline gap-3 mb-4 pb-2 border-b border-zinc-800/60">
                <h2 className="text-xl font-bold text-amber-400">v{release.version}</h2>
                <span className="text-xs text-zinc-600">{release.date}</span>
              </div>

              <ul className="space-y-3">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className={`shrink-0 inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded border ${TYPE_STYLES[change.type]}`}>
                      {change.type}
                    </span>
                    <span className="text-zinc-300">{change.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="text-xs text-zinc-700 mt-16 pt-4 border-t border-zinc-800/40">
          Full commit history on{' '}
          <a href="https://github.com/Kitsune-Den/KitsunePaint/commits/main" target="_blank" rel="noopener noreferrer"
            className="text-amber-500/80 hover:text-amber-400 transition-colors">
            GitHub
          </a>.
        </p>
      </div>
    </div>
  )
}
