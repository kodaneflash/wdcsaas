import { format, parseISO } from 'date-fns'

interface DateFormatterProps {
  dateString: string
}

export function CaseStudyDateFormatter({ dateString }: DateFormatterProps) {
  const date = parseISO(dateString)
  
  return (
    <time 
      dateTime={dateString}
      className="text-sm text-muted-foreground"
    >
      {format(date, 'MMMM d, yyyy')}
    </time>
  )
}
