" Shows syntax 
set t_Co=256
syntax on

set tabstop=4

" Uses indentation of previous line
set autoindent

" Shows line numbers
set number

" Uses smart indent for C
set smartindent

" Set a ruler at line 80
set colorcolumn=80

" Remove whitespaces by pressing F5
nnoremap <F5> : let _s=@/<Bar>:%s/\s\+$//e<Bar> :let @/=_s<Bar><CR>

" Highlight matching braces
set showmatch

" Intellligent comments
set comments=sl:/*,mb:\**,elx:\*/

set mouse=a

"set ruler
set	statusline+=col:\ %c

"colorscheme monokai
colorscheme sublimemonokai
