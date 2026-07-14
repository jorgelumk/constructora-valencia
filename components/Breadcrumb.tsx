import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 border-b border-slate-100">
      <div className="container-xl">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-brand-accent transition-colors">Inicio</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="text-slate-300">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-accent transition-colors">{item.name}</Link>
              ) : (
                <span className="text-slate-900 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
