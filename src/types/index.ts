export interface TextureLayer {
  diffuse: File
  normal?: File
  specular?: File
}

export interface PaintEntry {
  id: string
  name: string
  group: PaintGroup
  tilingX: number
  tilingY: number
  gridWidth: number
  gridHeight: number
  textures: TextureLayer
  previewUrl?: string
}

export type PaintGroup =
  | 'wood'
  | 'stone'
  | 'wallpaper'
  | 'tile'
  | 'plaster'
  | 'metal'
  | 'carpet'
  | 'custom'

export interface PackConfig {
  packName: string
  packAuthor: string
  packVersion: string
  /**
   * Which 7DTD release line the user is building for. The generated pack
   * (painting.xml + .unity3d bundles) is version-agnostic ~ V2.x and V3.x share
   * the same Unity runtime (2022.3.62f2) and paint schema, so a pack works on
   * both. This drives the compatibility note in ModInfo + which OCBCustomTextures
   * build the README points at. Optional; absent ⇒ treated as '3.x'.
   */
  gameVersion?: '2.x' | '3.x'
  paints: PaintEntry[]
}
