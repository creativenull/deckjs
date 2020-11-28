let g:ale_linters = extend(copy(g:ale_linters), { 'javascript': ['tsserver', 'eslint'] })
let g:ale_fixers = extend(copy(g:ale_fixers), { 'javascript': ['prettier_standard'] })
