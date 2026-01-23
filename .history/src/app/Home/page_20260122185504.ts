import React, { JSX } from 'react'
import Link from 'next/link'

const LEVELS = [1, 2, 3, 4, 5, 6] as const

export default function Page(): JSX.Element {
    return React.createElement(
        'main',
        { style: { padding: 24, fontFamily: 'system-ui, sans-serif', maxWidth: 900, margin: '0 auto' } },
        React.createElement('header', null,
            React.createElement('h1', { style: { margin: '0 0 8px' } }, 'HSK 练习'),
            React.createElement('p', { style: { margin: 0, color: '#666' } }, '选择一个等级开始练习词汇与句子。')
        ),
        React.createElement('section', { style: { marginTop: 24 } },
            React.createElement('nav', null,
                React.createElement('ul', { style: { listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' } },
                    ...LEVELS.map(level =>
                        React.createElement('li', { key: level },
                            React.createElement(Link, { href: `/hsk/${level}`, style: { display: 'inline-block', padding: '10px 14px', background: '#0070f3', color: '#fff', borderRadius: 6, textDecoration: 'none' } },
                                `HSK ${level}`
                            )
                        )
                    )
                )
            )
        ),
        React.createElement('footer', { style: { marginTop: 40, color: '#888', fontSize: 13 } },
            'Built with Next.js — select a level to continue.'
        )
    )
}