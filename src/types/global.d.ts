type Recordable<T = any> = Record<string, T>
type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_APP_NAME: string
  VITE_USE_IMAGEMIN: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  VITE_USE_CDN: boolean
}
