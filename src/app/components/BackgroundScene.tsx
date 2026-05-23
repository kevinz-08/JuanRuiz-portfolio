export function BackgroundScene() {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-sphere bs-1">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="body1" cx="40%" cy="38%" r="60%">
              <stop offset="0%"  stopColor="#3a0c0c" stopOpacity="1"/>
              <stop offset="35%" stopColor="#1c0608" stopOpacity="1"/>
              <stop offset="100%" stopColor="#080208" stopOpacity="1"/>
            </radialGradient>
            <radialGradient id="rim1" cx="50%" cy="50%" r="50%">
              <stop offset="80%" stopColor="rgba(220,38,38,0)"/>
              <stop offset="92%" stopColor="rgba(220,38,38,.45)"/>
              <stop offset="98%" stopColor="rgba(255,90,90,.85)"/>
              <stop offset="100%" stopColor="rgba(255,140,140,0)"/>
            </radialGradient>
            <radialGradient id="halo1" cx="50%" cy="50%" r="50%">
              <stop offset="48%" stopColor="rgba(220,38,38,0)"/>
              <stop offset="55%" stopColor="rgba(220,38,38,.08)"/>
              <stop offset="100%" stopColor="rgba(220,38,38,0)"/>
            </radialGradient>
            <radialGradient id="spec1" cx="38%" cy="32%" r="22%">
              <stop offset="0%" stopColor="rgba(255,200,200,.45)"/>
              <stop offset="100%" stopColor="rgba(255,200,200,0)"/>
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="295" fill="url(#halo1)"/>
          <circle cx="300" cy="300" r="240" fill="url(#body1)"/>
          <circle cx="300" cy="300" r="240" fill="url(#rim1)"/>
          <ellipse cx="240" cy="200" rx="80" ry="50" fill="url(#spec1)"/>
        </svg>
      </div>

      <div className="bg-sphere bs-2">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="body2" cx="55%" cy="42%" r="60%">
              <stop offset="0%"  stopColor="#2c0808" stopOpacity="1"/>
              <stop offset="100%" stopColor="#050208" stopOpacity="1"/>
            </radialGradient>
            <radialGradient id="rim2" cx="50%" cy="50%" r="50%">
              <stop offset="82%" stopColor="rgba(220,38,38,0)"/>
              <stop offset="94%" stopColor="rgba(220,38,38,.4)"/>
              <stop offset="100%" stopColor="rgba(255,90,90,.8)"/>
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="240" fill="url(#body2)"/>
          <circle cx="300" cy="300" r="240" fill="url(#rim2)"/>
        </svg>
      </div>

      <div className="bg-sphere bs-3">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="body3" cx="42%" cy="50%" r="55%">
              <stop offset="0%"  stopColor="#1f0606" stopOpacity="1"/>
              <stop offset="100%" stopColor="#040108" stopOpacity="1"/>
            </radialGradient>
            <radialGradient id="rim3" cx="50%" cy="50%" r="50%">
              <stop offset="85%" stopColor="rgba(220,38,38,0)"/>
              <stop offset="96%" stopColor="rgba(220,38,38,.35)"/>
              <stop offset="100%" stopColor="rgba(255,90,90,.7)"/>
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="240" fill="url(#body3)"/>
          <circle cx="300" cy="300" r="240" fill="url(#rim3)"/>
        </svg>
      </div>
    </div>
  );
}
