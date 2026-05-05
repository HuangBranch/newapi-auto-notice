/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

interface MarkdownProps {
  children: string
  className?: string
}

export function Markdown({ children, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        'max-w-none space-y-3 text-sm leading-relaxed',
        '[overflow-wrap:anywhere] break-words',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node: _node, className, ...props }) => (
            <h1
              {...props}
              className={cn('mt-5 mb-3 text-2xl font-semibold', className)}
            />
          ),
          h2: ({ node: _node, className, ...props }) => (
            <h2
              {...props}
              className={cn('mt-5 mb-3 text-xl font-semibold', className)}
            />
          ),
          h3: ({ node: _node, className, ...props }) => (
            <h3
              {...props}
              className={cn('mt-4 mb-2 text-lg font-semibold', className)}
            />
          ),
          h4: ({ node: _node, className, ...props }) => (
            <h4
              {...props}
              className={cn('mt-4 mb-2 text-base font-semibold', className)}
            />
          ),
          p: ({ node: _node, className, ...props }) => (
            <p {...props} className={cn('my-2 leading-relaxed', className)} />
          ),
          a: ({ node: _node, className, ...props }) => (
            <a
              {...props}
              className={cn(
                'text-primary font-medium underline underline-offset-4 hover:opacity-80',
                className
              )}
              target='_blank'
              rel='noopener noreferrer'
            />
          ),
          ul: ({ node: _node, className, ...props }) => (
            <ul
              {...props}
              className={cn('my-2 list-disc space-y-1 pl-6', className)}
            />
          ),
          ol: ({ node: _node, className, ...props }) => (
            <ol
              {...props}
              className={cn('my-2 list-decimal space-y-1 pl-6', className)}
            />
          ),
          li: ({ node: _node, className, ...props }) => (
            <li {...props} className={cn('pl-1 leading-relaxed', className)} />
          ),
          code: ({ node: _node, className, children, ...props }) => (
            <code
              {...props}
              className={cn(
                'bg-muted rounded px-1.5 py-0.5 font-mono text-[0.9em]',
                className
              )}
            >
              {children}
            </code>
          ),
          pre: ({ node: _node, className, ...props }) => (
            <pre
              {...props}
              className={cn(
                'bg-muted my-3 overflow-x-auto rounded-md border p-3 text-sm',
                className
              )}
            />
          ),
          blockquote: ({ node: _node, className, ...props }) => (
            <blockquote
              {...props}
              className={cn(
                'border-primary bg-muted/50 my-3 border-l-4 py-2 pr-3 pl-4',
                className
              )}
            />
          ),
          table: ({ node: _node, className, ...props }) => (
            <div className='my-3 overflow-x-auto'>
              <table
                {...props}
                className={cn('w-full border-collapse text-sm', className)}
              />
            </div>
          ),
          th: ({ node: _node, className, ...props }) => (
            <th
              {...props}
              className={cn('bg-muted border px-3 py-2 text-left', className)}
            />
          ),
          td: ({ node: _node, className, ...props }) => (
            <td {...props} className={cn('border px-3 py-2', className)} />
          ),
          img: ({ node: _node, className, alt, ...props }) => (
            <img
              {...props}
              className={cn('my-3 max-w-full rounded-md', className)}
              loading='lazy'
              alt={alt ?? ''}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
