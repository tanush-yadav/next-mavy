import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
}

export function HomeIcon({ color = '#1c274c', ...props }: IconProps) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke={color} strokeWidth="1.5">
        <path d="m2 12.2039c0-2.28841 0-3.43262.5192-4.38116.5192-.94853 1.46775-1.53723 3.36483-2.71461l2-1.24126c2.00536-1.24458 3.00807-1.86687 4.11597-1.86687s2.1106.62229 4.116 1.86687l2 1.24125c1.8971 1.17739 2.8456 1.76609 3.3648 2.71462.5192.94854.5192 2.09275.5192 4.38116v1.5211c0 3.9008 0 5.8513-1.1716 7.0631-1.1715 1.2119-3.0572 1.2119-6.8284 1.2119h-4c-3.77124 0-5.65685 0-6.82843-1.2119-1.17157-1.2118-1.17157-3.1623-1.17157-7.0631z" />
        <path
          d="m9 16c.85038.6303 1.8846 1 3 1s2.1496-.3697 3-1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
