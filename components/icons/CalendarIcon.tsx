import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
}

export function CalendarIcon({ color = 'currentColor', ...props }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <g opacity="0.8">
        <path
          d="M17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14Z"
          fill={color}
        />
        <path
          d="M17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17C18 16.7348 17.8946 16.4804 17.7071 16.2929C17.5196 16.1054 17.2652 16 17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18Z"
          fill={color}
        />
        <path
          d="M13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13Z"
          fill={color}
        />
        <path
          d="M13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17Z"
          fill={color}
        />
        <path
          d="M7 14C7.26522 14 7.51957 13.8946 7.70711 13.7071C7.89464 13.5196 8 13.2652 8 13C8 12.7348 7.89464 12.4804 7.70711 12.2929C7.51957 12.1054 7.26522 12 7 12C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14Z"
          fill={color}
        />
        <path
          d="M7 18C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 1.75C7.19891 1.75 7.38968 1.82902 7.53033 1.96967C7.67098 2.11032 7.75 2.30109 7.75 2.5V3.263C8.412 3.25 9.141 3.25 9.943 3.25H14.056C14.859 3.25 15.588 3.25 16.25 3.263V2.5C16.25 2.30109 16.329 2.11032 16.4697 1.96967C16.6103 1.82902 16.8011 1.75 17 1.75C17.1989 1.75 17.3897 1.82902 17.5303 1.96967C17.671 2.11032 17.75 2.30109 17.75 2.5V3.327C18.01 3.347 18.256 3.372 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V14.056C22.75 15.894 22.75 17.35 22.597 18.489C22.439 19.661 22.107 20.61 21.359 21.359C20.61 22.107 19.661 22.439 18.489 22.597C17.349 22.75 15.894 22.75 14.056 22.75H9.944C8.106 22.75 6.65 22.75 5.511 22.597C4.339 22.439 3.39 22.107 2.641 21.359C1.893 20.61 1.561 19.661 1.403 18.489C1.25 17.349 1.25 15.894 1.25 14.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C5.744 3.372 5.991 3.347 6.25 3.327V2.5C6.25 2.30109 6.32902 2.11032 6.46967 1.96967C6.61032 1.82902 6.80109 1.75 7 1.75ZM5.71 4.89C4.705 5.025 4.125 5.279 3.702 5.702C3.279 6.125 3.025 6.705 2.89 7.711C2.867 7.881 2.848 8.061 2.832 8.25H21.168C21.152 8.06 21.133 7.881 21.11 7.71C20.975 6.705 20.721 6.125 20.298 5.702C19.875 5.279 19.295 5.025 18.289 4.89C17.262 4.752 15.907 4.75 14 4.75H10C8.093 4.75 6.739 4.752 5.71 4.89ZM2.75 12C2.75 11.146 2.75 10.403 2.763 9.75H21.237C21.25 10.403 21.25 11.146 21.25 12V14C21.25 15.907 21.248 17.262 21.11 18.29C20.975 19.295 20.721 19.875 20.298 20.298C19.875 20.721 19.295 20.975 18.289 21.11C17.262 21.248 15.907 21.25 14 21.25H10C8.093 21.25 6.739 21.248 5.71 21.11C4.705 20.975 4.125 20.721 3.702 20.298C3.279 19.875 3.025 19.295 2.89 18.289C2.752 17.262 2.75 15.907 2.75 14V12Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
