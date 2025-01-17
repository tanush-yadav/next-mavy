'use client'

import Image from 'next/image'

interface RedirectOverlayProps {
  show: boolean
}

export function RedirectOverlay({ show }: RedirectOverlayProps) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm">
      <Image
        src="https://s3-alpha-sig.figma.com/img/8b09/a13a/ee6e5f8bfa02e7b1be4f77c0ff3bd9d8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLwXNJAFds4KZ8A779JdtS7bbYz3ElPV-W-Rm5bk0j2D0e51TPuj9~5UlMAfWlALSXFsp5pEFWsIFwHYPlU9LmYza0xH2VnwyPJfjA1chTTX-kGokAItBggwqvPznG3fsJBFv3TnnIa163Ut4KTbfaZW8y2ia8NQXsvS~JsP9Q4zkrLLdQwZyK9njuXZersZBDNdkSgqBo88aSgj0uNNLEIP~3kT0Dn7jlHCbWSHc3N9HMXqS89xWPGqgSBo-8T1h5XVT5aah~5KG05Z5i~geyPUeJI2Ko5mYZwHO0avxH3qVrixMX~5jRf6wEyL2ZgzaXqbfUy3eIBibSHI5C70nw__"
        alt="Email animation"
        width={150}
        height={150}
        className="mb-8"
      />
      <h2 className="text-2xl font-semibold text-white mb-2">
        Redirecting to Gmail
      </h2>
      <p className="text-white/80">
        You've initiated your first meeting with Mavy
      </p>
    </div>
  )
}