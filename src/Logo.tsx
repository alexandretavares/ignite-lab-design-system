import { SVGAttributes } from "react";

export interface LogoProps extends SVGAttributes<SVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={105}
      height={120}
      viewBox="0 0 105 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_56)">
        <path
          d="M52.5.004l51.888 29.958v59.914L52.5 119.833.612 89.876V29.962L52.5.004z"
          fill="#673AB8"
        />
        <path
          d="M14.745 89.38c6.898 8.83 28.82 2.103 49.517-14.067C84.958 59.143 96.789 39.5 89.892 30.67c-6.899-8.829-28.82-2.101-49.517 14.068-20.697 16.17-32.527 35.814-25.63 44.643zm2.947-2.302c-2.287-2.927-1.288-8.676 3.07-15.912 4.59-7.62 12.38-16.032 21.915-23.48 9.534-7.45 19.58-12.974 28.085-15.584 8.076-2.478 13.895-2.057 16.182.87 2.288 2.929 1.289 8.677-3.07 15.913-4.59 7.62-12.38 16.032-21.914 23.481-9.535 7.449-19.581 12.974-28.085 15.583-8.076 2.478-13.895 2.058-16.183-.87z"
          fill="#E1E1E6"
        />
        <path
          d="M89.891 89.38c6.899-8.828-4.933-28.471-25.629-44.642-20.697-16.17-42.62-22.897-49.517-14.068-6.898 8.83 4.933 28.473 25.63 44.643C61.07 91.483 82.993 98.21 89.89 89.38zm-2.947-2.302c-2.287 2.929-8.106 3.35-16.182.871-8.504-2.61-18.55-8.134-28.085-15.583-9.534-7.45-17.325-15.86-21.914-23.48-4.359-7.237-5.359-12.985-3.07-15.913 2.287-2.928 8.106-3.349 16.182-.87 8.504 2.609 18.55 8.134 28.084 15.582 9.535 7.45 17.326 15.861 21.915 23.481 4.359 7.236 5.358 12.984 3.07 15.913z"
          fill="#E1E1E6"
        />
        <path
          d="M52.318 67.972a7.947 7.947 0 100-15.893 7.947 7.947 0 000 15.893z"
          fill="#E1E1E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_56">
          <path
            fill="#fff"
            transform="translate(.612)"
            d="M0 0H103.776V120H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}