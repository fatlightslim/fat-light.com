const blue = "#0070f3"

export default function CheckMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={blue}
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
