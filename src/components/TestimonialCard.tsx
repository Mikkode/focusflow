
interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="testimonial-card h-full flex flex-col p-6 bg-card rounded-lg border shadow-sm">
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <div className="flex-grow">
        <p className="text-muted-foreground mb-4 min-h-[80px]">{content}</p>
      </div>
      <div className="mt-auto">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
} 