import * as React from "react";

// Importando estilos
import './Logo.css';

const Logo = (props)=> {
  return (
    <svg
      width={374.174}
      height={122.021}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="62.913 13.989 374.174 122.021"
      preserveAspectRatio="xMidYMid"
      {...props}
      className="Logo"
    >
      <defs>
        <filter
          id="prefix__editing-extrusion"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood result="color1" floodColor="#85a2b6" />
          <feConvolveMatrix
            order="6,6"
            divisor={1}
            kernelMatrix="1 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 1"
            in="SourceAlpha"
            result="extrude"
          />
          <feComposite
            in="color1"
            in2="extrude"
            result="comp-extrude"
            operator="in"
          />
          <feOffset dx={3} dy={3} in="comp-extrude" result="offset-extrude" />
          <feMerge>
            <feMergeNode in="offset-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrusion)">
        <path
          d="M125.772 67.822q-2.18-1.66-2.18-5.21 0-3.56 2.34-5.41 2.33-1.86 6.37-1.86 2.56 0 8.64.9l4.35.64q2.17.25 4.45.25 2.27 0 3.8-.96 2.31 2.05 2.31 5 0 2.94-2.63 5.05-2.68 2.24-6.14 2.24-1.66 0-4.35-.45-3.14 9.86-3.14 16.71 0 6.85 3.46 10.43-1.6 2.88-3.97 4t-5.92 1.12q-3.55 0-5.76-1.95t-2.21-5.99q0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.85-.19-3.77-.19-3.97 0-4.61 1.47zm39.04 32.45q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89zm1.66-27.84q-.77 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.47 0 2.4-.7.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm63.75 0q0 27.26-29.57 27.26-4.74 0-12.55-1.15l7.17-37.82q.51-2.56.83-4.03 9.73-.71 14.05-.71t8.29.9q3.97.89 6.59 2.88 5.19 3.9 5.19 12.67zm-13.19-2.37q0-9.53-6.85-9.53h-.64q-.32 0-.64.06l-6.59 34.37q.26.13.51.13h.52q2.36 0 4.83-1.48 2.46-1.47 4.38-4.48 4.48-6.97 4.48-19.07zm30.4 30.21q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62zm48.96 16.7q1.21 1.54 1.21 4.52 0 2.97-2.27 4.8-2.27 1.82-6.24 1.82-2.3 0-5.89-.51-7.04-1.09-9.05-1.09-2.02 0-2.85.1-.83.09-2.18.22l7.75-42.24h14.01l-6.4 35.2q.83.13 1.6.13h1.6q5.38 0 8.71-2.95zm20.86 6.34q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.91 20.22q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78zm34.05 19.08q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7zm12.99 16.06q0-1.73.89-6.08l3.4-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63z"
          fill="#fdfdfd"
        />
      </g>
      <style />
    </svg>
  )
}

export {Logo}