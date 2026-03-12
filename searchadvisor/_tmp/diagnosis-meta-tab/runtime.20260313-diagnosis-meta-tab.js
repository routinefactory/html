var process=globalThis.process||{env:{NODE_ENV:"production"}};
(function(){var styleId="sadv-react-style";var style=document.getElementById(styleId);if(!style){style=document.createElement("style");style.id=styleId;style.textContent="/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-emerald-400:oklch(76.5% .177 163.223);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-300:oklch(82.8% .111 230.318);--color-sky-400:oklch(74.6% .16 232.661);--color-sky-500:oklch(68.5% .169 237.323);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-950:oklch(12.9% .042 264.695);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-\\[calc\\(100\\%\\+8px\\)\\]{top:calc(100% + 8px)}.right-0{right:calc(var(--spacing) * 0)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-5{bottom:calc(var(--spacing) * 5)}.left-0{left:calc(var(--spacing) * 0)}.left-3{left:calc(var(--spacing) * 3)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-\\[10000001\\]{z-index:10000001}.z-\\[10000012\\]{z-index:10000012}.col-span-2{grid-column:span 2/span 2}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.h-2{height:calc(var(--spacing) * 2)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-8{height:calc(var(--spacing) * 8)}.h-8\\.5{height:calc(var(--spacing) * 8.5)}.h-9{height:calc(var(--spacing) * 9)}.h-9\\.5{height:calc(var(--spacing) * 9.5)}.h-10{height:calc(var(--spacing) * 10)}.h-11{height:calc(var(--spacing) * 11)}.h-\\[280px\\]{height:280px}.h-full{height:100%}.max-h-\\[280px\\]{max-height:280px}.min-h-4{min-height:calc(var(--spacing) * 4)}.w-2{width:calc(var(--spacing) * 2)}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-\\[min\\(var\\(--radix-popover-trigger-width\\)\\,448px\\)\\]{width:min(var(--radix-popover-trigger-width),448px)}.w-full{width:100%}.max-w-\\[150px\\]{max-width:150px}.max-w-\\[calc\\(100vw-32px\\)\\]{max-width:calc(100vw - 32px)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-\\[min\\(var\\(--radix-popover-trigger-width\\)\\,448px\\)\\]{min-width:min(var(--radix-popover-trigger-width),448px)}.min-w-max{min-width:max-content}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\]{grid-template-columns:minmax(0,1fr) auto}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.gap-x-2{column-gap:calc(var(--spacing) * 2)}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.gap-y-1{row-gap:calc(var(--spacing) * 1)}.gap-y-1\\.5{row-gap:calc(var(--spacing) * 1.5)}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px * var(--tw-divide-x-reverse));border-inline-end-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-bs{border-block-start-style:var(--tw-border-style);border-block-start-width:1px}.border-be{border-block-end-style:var(--tw-border-style);border-block-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-sky-300{border-color:var(--color-sky-300)}.border-sky-300\\/45{border-color:#77d4ff73}@supports (color:color-mix(in lab,red,red)){.border-sky-300\\/45{border-color:color-mix(in oklab,var(--color-sky-300) 45%,transparent)}}.border-sky-400{border-color:var(--color-sky-400)}.border-sky-400\\/15{border-color:#00bcfe26}@supports (color:color-mix(in lab,red,red)){.border-sky-400\\/15{border-color:color-mix(in oklab,var(--color-sky-400) 15%,transparent)}}.border-sky-400\\/18{border-color:#00bcfe2e}@supports (color:color-mix(in lab,red,red)){.border-sky-400\\/18{border-color:color-mix(in oklab,var(--color-sky-400) 18%,transparent)}}.border-sky-400\\/35{border-color:#00bcfe59}@supports (color:color-mix(in lab,red,red)){.border-sky-400\\/35{border-color:color-mix(in oklab,var(--color-sky-400) 35%,transparent)}}.border-transparent{border-color:#0000}.border-white{border-color:var(--color-white)}.border-white\\/6{border-color:#ffffff0f}@supports (color:color-mix(in lab,red,red)){.border-white\\/6{border-color:color-mix(in oklab,var(--color-white) 6%,transparent)}}.border-white\\/8{border-color:#ffffff14}@supports (color:color-mix(in lab,red,red)){.border-white\\/8{border-color:color-mix(in oklab,var(--color-white) 8%,transparent)}}.border-white\\/10{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.border-white\\/10{border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.bg-black{background-color:var(--color-black)}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.bg-black\\/10{background-color:color-mix(in oklab,var(--color-black) 10%,transparent)}}.bg-emerald-400{background-color:var(--color-emerald-400)}.bg-emerald-400\\/90{background-color:#00d294e6}@supports (color:color-mix(in lab,red,red)){.bg-emerald-400\\/90{background-color:color-mix(in oklab,var(--color-emerald-400) 90%,transparent)}}.bg-sky-400{background-color:var(--color-sky-400)}.bg-sky-400\\/\\[0\\.08\\]{background-color:#00bcfe14}@supports (color:color-mix(in lab,red,red)){.bg-sky-400\\/\\[0\\.08\\]{background-color:color-mix(in oklab,var(--color-sky-400) 8%,transparent)}}.bg-slate-500{background-color:var(--color-slate-500)}.bg-slate-950{background-color:var(--color-slate-950)}.bg-slate-950\\/60{background-color:#02061899}@supports (color:color-mix(in lab,red,red)){.bg-slate-950\\/60{background-color:color-mix(in oklab,var(--color-slate-950) 60%,transparent)}}.bg-slate-950\\/96{background-color:#020618f5}@supports (color:color-mix(in lab,red,red)){.bg-slate-950\\/96{background-color:color-mix(in oklab,var(--color-slate-950) 96%,transparent)}}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.bg-white\\/\\[0\\.02\\]{background-color:#ffffff05}@supports (color:color-mix(in lab,red,red)){.bg-white\\/\\[0\\.02\\]{background-color:color-mix(in oklab,var(--color-white) 2%,transparent)}}.bg-white\\/\\[0\\.03\\]{background-color:#ffffff08}@supports (color:color-mix(in lab,red,red)){.bg-white\\/\\[0\\.03\\]{background-color:color-mix(in oklab,var(--color-white) 3%,transparent)}}.bg-white\\/\\[0\\.04\\]{background-color:#ffffff0a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/\\[0\\.04\\]{background-color:color-mix(in oklab,var(--color-white) 4%,transparent)}}.bg-linear-to-b{--tw-gradient-position:to bottom}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-b{--tw-gradient-position:to bottom in oklab}}.bg-linear-to-b{background-image:linear-gradient(var(--tw-gradient-stops))}.from-sky-300{--tw-gradient-from:var(--color-sky-300);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-sky-500{--tw-gradient-to:var(--color-sky-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.p-2{padding:calc(var(--spacing) * 2)}.p-\\[1px\\]{padding:1px}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pl-9{padding-left:calc(var(--spacing) * 9)}.text-left{text-align:left}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[16px\\]{font-size:16px}.leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[-0\\.01em\\]{--tw-tracking:-.01em;letter-spacing:-.01em}.tracking-\\[-0\\.025em\\]{--tw-tracking:-.025em;letter-spacing:-.025em}.tracking-\\[0\\.14em\\]{--tw-tracking:.14em;letter-spacing:.14em}.text-wrap{text-wrap:wrap}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-emerald-400{color:var(--color-emerald-400)}.text-sky-50{color:var(--color-sky-50)}.text-sky-100{color:var(--color-sky-100)}.text-slate-50{color:var(--color-slate-50)}.text-slate-100{color:var(--color-slate-100)}.text-slate-300{color:var(--color-slate-300)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-950{color:var(--color-slate-950)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_0_0_4px_rgba\\(16\\,185\\,129\\,0\\.12\\)\\]{--tw-shadow:0 0 0 4px var(--tw-shadow-color,#10b9811f);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_14px_32px_rgba\\(56\\,189\\,248\\,0\\.35\\)\\]{--tw-shadow:0 14px 32px var(--tw-shadow-color,#38bdf859);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_24px_80px_rgba\\(0\\,0\\,0\\,0\\.45\\)\\]{--tw-shadow:0 24px 80px var(--tw-shadow-color,#00000073);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,0\\.04\\)\\]{--tw-shadow:inset 0 1px 0 var(--tw-shadow-color,#ffffff0a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}.placeholder\\:text-slate-500::placeholder{color:var(--color-slate-500)}@media(hover:hover){.hover\\:-translate-y-0\\.5:hover{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:border-sky-400\\/25:hover{border-color:#00bcfe40}@supports (color:color-mix(in lab,red,red)){.hover\\:border-sky-400\\/25:hover{border-color:color-mix(in oklab,var(--color-sky-400) 25%,transparent)}}.hover\\:border-sky-400\\/30:hover{border-color:#00bcfe4d}@supports (color:color-mix(in lab,red,red)){.hover\\:border-sky-400\\/30:hover{border-color:color-mix(in oklab,var(--color-sky-400) 30%,transparent)}}.hover\\:border-sky-400\\/40:hover{border-color:#00bcfe66}@supports (color:color-mix(in lab,red,red)){.hover\\:border-sky-400\\/40:hover{border-color:color-mix(in oklab,var(--color-sky-400) 40%,transparent)}}.hover\\:border-white\\/10:hover{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:border-white\\/10:hover{border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.hover\\:bg-white\\/\\[0\\.04\\]:hover{background-color:#ffffff0a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/\\[0\\.04\\]:hover{background-color:color-mix(in oklab,var(--color-white) 4%,transparent)}}.hover\\:bg-white\\/\\[0\\.05\\]:hover{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/\\[0\\.05\\]:hover{background-color:color-mix(in oklab,var(--color-white) 5%,transparent)}}.hover\\:bg-white\\/\\[0\\.07\\]:hover{background-color:#ffffff12}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/\\[0\\.07\\]:hover{background-color:color-mix(in oklab,var(--color-white) 7%,transparent)}}.hover\\:from-sky-200:hover{--tw-gradient-from:var(--color-sky-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-sky-400:hover{--tw-gradient-to:var(--color-sky-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:text-slate-50:hover{color:var(--color-slate-50)}.hover\\:text-slate-100:hover{color:var(--color-slate-100)}.hover\\:shadow-\\[0_18px_38px_rgba\\(56\\,189\\,248\\,0\\.42\\)\\]:hover{--tw-shadow:0 18px 38px var(--tw-shadow-color,#38bdf86b);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-sky-400\\/30:focus{border-color:#00bcfe4d}@supports (color:color-mix(in lab,red,red)){.focus\\:border-sky-400\\/30:focus{border-color:color-mix(in oklab,var(--color-sky-400) 30%,transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.data-\\[active\\=true\\]\\:border-sky-400\\/35[data-active=true]{border-color:#00bcfe59}@supports (color:color-mix(in lab,red,red)){.data-\\[active\\=true\\]\\:border-sky-400\\/35[data-active=true]{border-color:color-mix(in oklab,var(--color-sky-400) 35%,transparent)}}.data-\\[active\\=true\\]\\:bg-sky-400\\/\\[0\\.08\\][data-active=true]{background-color:#00bcfe14}@supports (color:color-mix(in lab,red,red)){.data-\\[active\\=true\\]\\:bg-sky-400\\/\\[0\\.08\\][data-active=true]{background-color:color-mix(in oklab,var(--color-sky-400) 8%,transparent)}}.data-\\[active\\=true\\]\\:text-sky-50[data-active=true]{color:var(--color-sky-50)}.data-\\[mode\\=all\\]\\:hidden[data-mode=all]{display:none}.data-\\[state\\=active\\]\\:border-sky-400\\/30[data-state=active]{border-color:#00bcfe4d}@supports (color:color-mix(in lab,red,red)){.data-\\[state\\=active\\]\\:border-sky-400\\/30[data-state=active]{border-color:color-mix(in oklab,var(--color-sky-400) 30%,transparent)}}.data-\\[state\\=active\\]\\:bg-sky-400\\/\\[0\\.08\\][data-state=active]{background-color:#00bcfe14}@supports (color:color-mix(in lab,red,red)){.data-\\[state\\=active\\]\\:bg-sky-400\\/\\[0\\.08\\][data-state=active]{background-color:color-mix(in oklab,var(--color-sky-400) 8%,transparent)}}.data-\\[state\\=active\\]\\:text-slate-50[data-state=active]{color:var(--color-slate-50)}}:root{color-scheme:dark}#sadv-react-shell-root{isolation:isolate;contain:layout paint style;flex-shrink:0;font-family:Pretendard Variable,SUIT Variable,Apple SD Gothic Neo,Noto Sans KR,sans-serif;position:relative;width:100%!important;padding:10px 14px 0!important;display:block!important}#sadv-react-shell-root,#sadv-react-shell-root *,#sadv-react-shell-root :before,#sadv-react-shell-root :after{box-sizing:border-box}#sadv-react-shell-root:before{display:none}#sadv-react-shell-root button,#sadv-react-shell-root input,#sadv-react-shell-root [role=tab],#sadv-react-shell-root [role=tablist]{font:inherit!important;letter-spacing:inherit!important;text-transform:none!important}#sadv-react-shell-root button,#sadv-react-shell-root input{appearance:none!important;margin:0!important}#sadv-react-shell-root svg{flex-shrink:0}#sadv-header,#sadv-tabs{display:none!important}#sadv-p{overflow:hidden}#sadv-bd{padding-top:10px!important}.sadvx-shell{background:linear-gradient(#060b14fb,#070d16f4),radial-gradient(circle at 0 0,#40c4ff14,#0000 42%);border:1px solid #ffffff14;border-radius:18px;width:100%;position:relative;overflow:hidden;box-shadow:inset 0 -1px #0a121fb8,0 14px 34px #0003}.sadvx-shell:before{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#38bdf86b,#0000);height:1px;position:absolute;inset:0 0 auto}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-pan-x{syntax:\"*\";inherits:false}@property --tw-pan-y{syntax:\"*\";inherits:false}@property --tw-pinch-zoom{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}\n";document.head.appendChild(style);}})();
(function(){"use strict";function hy(a,s){for(var f=0;f<s.length;f++){const v=s[f];if(typeof v!="string"&&!Array.isArray(v)){for(const p in v)if(p!=="default"&&!(p in a)){const S=Object.getOwnPropertyDescriptor(v,p);S&&Object.defineProperty(a,p,S.get?S:{enumerable:!0,get:()=>v[p]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function Yv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ah={exports:{}},ks={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function vy(){if(Pv)return ks;Pv=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(v,p,S){var E=null;if(S!==void 0&&(E=""+S),p.key!==void 0&&(E=""+p.key),"key"in p){S={};for(var T in p)T!=="key"&&(S[T]=p[T])}else S=p;return p=S.ref,{$$typeof:a,type:v,key:E,ref:p!==void 0?p:null,props:S}}return ks.Fragment=s,ks.jsx=f,ks.jsxs=f,ks}var Gv;function gy(){return Gv||(Gv=1,ah.exports=vy()),ah.exports}var Y=gy(),rh={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function by(){if(Xv)return lt;Xv=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),U=Symbol.iterator;function V(_){return _===null||typeof _!="object"?null:(_=U&&_[U]||_["@@iterator"],typeof _=="function"?_:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,$={};function oe(_,se,Ae){this.props=_,this.context=se,this.refs=$,this.updater=Ae||K}oe.prototype.isReactComponent={},oe.prototype.setState=function(_,se){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,se,"setState")},oe.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function me(){}me.prototype=oe.prototype;function de(_,se,Ae){this.props=_,this.context=se,this.refs=$,this.updater=Ae||K}var ve=de.prototype=new me;ve.constructor=de,Z(ve,oe.prototype),ve.isPureReactComponent=!0;var Te=Array.isArray;function Ee(){}var be={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function ye(_,se,Ae){var Re=Ae.ref;return{$$typeof:a,type:_,key:se,ref:Re!==void 0?Re:null,props:Ae}}function He(_,se){return ye(_.type,se,_.props)}function Ze(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function $e(_){var se={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(Ae){return se[Ae]})}var st=/\/+/g;function Ge(_,se){return typeof _=="object"&&_!==null&&_.key!=null?$e(""+_.key):se.toString(36)}function Ve(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Ee,Ee):(_.status="pending",_.then(function(se){_.status==="pending"&&(_.status="fulfilled",_.value=se)},function(se){_.status==="pending"&&(_.status="rejected",_.reason=se)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function D(_,se,Ae,Re,pe){var _e=typeof _;(_e==="undefined"||_e==="boolean")&&(_=null);var Xe=!1;if(_===null)Xe=!0;else switch(_e){case"bigint":case"string":case"number":Xe=!0;break;case"object":switch(_.$$typeof){case a:case s:Xe=!0;break;case k:return Xe=_._init,D(Xe(_._payload),se,Ae,Re,pe)}}if(Xe)return pe=pe(_),Xe=Re===""?"."+Ge(_,0):Re,Te(pe)?(Ae="",Xe!=null&&(Ae=Xe.replace(st,"$&/")+"/"),D(pe,se,Ae,"",function(ea){return ea})):pe!=null&&(Ze(pe)&&(pe=He(pe,Ae+(pe.key==null||_&&_.key===pe.key?"":(""+pe.key).replace(st,"$&/")+"/")+Xe)),se.push(pe)),1;Xe=0;var Vt=Re===""?".":Re+":";if(Te(_))for(var Qe=0;Qe<_.length;Qe++)Re=_[Qe],_e=Vt+Ge(Re,Qe),Xe+=D(Re,se,Ae,_e,pe);else if(Qe=V(_),typeof Qe=="function")for(_=Qe.call(_),Qe=0;!(Re=_.next()).done;)Re=Re.value,_e=Vt+Ge(Re,Qe++),Xe+=D(Re,se,Ae,_e,pe);else if(_e==="object"){if(typeof _.then=="function")return D(Ve(_),se,Ae,Re,pe);throw se=String(_),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Xe}function J(_,se,Ae){if(_==null)return _;var Re=[],pe=0;return D(_,Re,"","",function(_e){return se.call(Ae,_e,pe++)}),Re}function we(_){if(_._status===-1){var se=_._result;se=se(),se.then(function(Ae){(_._status===0||_._status===-1)&&(_._status=1,_._result=Ae)},function(Ae){(_._status===0||_._status===-1)&&(_._status=2,_._result=Ae)}),_._status===-1&&(_._status=0,_._result=se)}if(_._status===1)return _._result.default;throw _._result}var Pe=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},W={map:J,forEach:function(_,se,Ae){J(_,function(){se.apply(this,arguments)},Ae)},count:function(_){var se=0;return J(_,function(){se++}),se},toArray:function(_){return J(_,function(se){return se})||[]},only:function(_){if(!Ze(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return lt.Activity=L,lt.Children=W,lt.Component=oe,lt.Fragment=f,lt.Profiler=p,lt.PureComponent=de,lt.StrictMode=v,lt.Suspense=O,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be,lt.__COMPILER_RUNTIME={__proto__:null,c:function(_){return be.H.useMemoCache(_)}},lt.cache=function(_){return function(){return _.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(_,se,Ae){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var Re=Z({},_.props),pe=_.key;if(se!=null)for(_e in se.key!==void 0&&(pe=""+se.key),se)!ce.call(se,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&se.ref===void 0||(Re[_e]=se[_e]);var _e=arguments.length-2;if(_e===1)Re.children=Ae;else if(1<_e){for(var Xe=Array(_e),Vt=0;Vt<_e;Vt++)Xe[Vt]=arguments[Vt+2];Re.children=Xe}return ye(_.type,pe,Re)},lt.createContext=function(_){return _={$$typeof:E,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:S,_context:_},_},lt.createElement=function(_,se,Ae){var Re,pe={},_e=null;if(se!=null)for(Re in se.key!==void 0&&(_e=""+se.key),se)ce.call(se,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(pe[Re]=se[Re]);var Xe=arguments.length-2;if(Xe===1)pe.children=Ae;else if(1<Xe){for(var Vt=Array(Xe),Qe=0;Qe<Xe;Qe++)Vt[Qe]=arguments[Qe+2];pe.children=Vt}if(_&&_.defaultProps)for(Re in Xe=_.defaultProps,Xe)pe[Re]===void 0&&(pe[Re]=Xe[Re]);return ye(_,_e,pe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(_){return{$$typeof:T,render:_}},lt.isValidElement=Ze,lt.lazy=function(_){return{$$typeof:k,_payload:{_status:-1,_result:_},_init:we}},lt.memo=function(_,se){return{$$typeof:R,type:_,compare:se===void 0?null:se}},lt.startTransition=function(_){var se=be.T,Ae={};be.T=Ae;try{var Re=_(),pe=be.S;pe!==null&&pe(Ae,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(Ee,Pe)}catch(_e){Pe(_e)}finally{se!==null&&Ae.types!==null&&(se.types=Ae.types),be.T=se}},lt.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()},lt.use=function(_){return be.H.use(_)},lt.useActionState=function(_,se,Ae){return be.H.useActionState(_,se,Ae)},lt.useCallback=function(_,se){return be.H.useCallback(_,se)},lt.useContext=function(_){return be.H.useContext(_)},lt.useDebugValue=function(){},lt.useDeferredValue=function(_,se){return be.H.useDeferredValue(_,se)},lt.useEffect=function(_,se){return be.H.useEffect(_,se)},lt.useEffectEvent=function(_){return be.H.useEffectEvent(_)},lt.useId=function(){return be.H.useId()},lt.useImperativeHandle=function(_,se,Ae){return be.H.useImperativeHandle(_,se,Ae)},lt.useInsertionEffect=function(_,se){return be.H.useInsertionEffect(_,se)},lt.useLayoutEffect=function(_,se){return be.H.useLayoutEffect(_,se)},lt.useMemo=function(_,se){return be.H.useMemo(_,se)},lt.useOptimistic=function(_,se){return be.H.useOptimistic(_,se)},lt.useReducer=function(_,se,Ae){return be.H.useReducer(_,se,Ae)},lt.useRef=function(_){return be.H.useRef(_)},lt.useState=function(_){return be.H.useState(_)},lt.useSyncExternalStore=function(_,se,Ae){return be.H.useSyncExternalStore(_,se,Ae)},lt.useTransition=function(){return be.H.useTransition()},lt.version="19.2.4",lt}var Iv;function Ns(){return Iv||(Iv=1,rh.exports=by()),rh.exports}var H=Ns();const _o=Yv(H),Zv=hy({__proto__:null,default:_o},[H]);var ih={exports:{}},Ls={},oh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function my(){return Vv||(Vv=1,(function(a){function s(D,J){var we=D.length;D.push(J);e:for(;0<we;){var Pe=we-1>>>1,W=D[Pe];if(0<p(W,J))D[Pe]=J,D[we]=W,we=Pe;else break e}}function f(D){return D.length===0?null:D[0]}function v(D){if(D.length===0)return null;var J=D[0],we=D.pop();if(we!==J){D[0]=we;e:for(var Pe=0,W=D.length,_=W>>>1;Pe<_;){var se=2*(Pe+1)-1,Ae=D[se],Re=se+1,pe=D[Re];if(0>p(Ae,we))Re<W&&0>p(pe,Ae)?(D[Pe]=pe,D[Re]=we,Pe=Re):(D[Pe]=Ae,D[se]=we,Pe=se);else if(Re<W&&0>p(pe,we))D[Pe]=pe,D[Re]=we,Pe=Re;else break e}}return J}function p(D,J){var we=D.sortIndex-J.sortIndex;return we!==0?we:D.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;a.unstable_now=function(){return S.now()}}else{var E=Date,T=E.now();a.unstable_now=function(){return E.now()-T}}var O=[],R=[],k=1,L=null,U=3,V=!1,K=!1,Z=!1,$=!1,oe=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;function ve(D){for(var J=f(R);J!==null;){if(J.callback===null)v(R);else if(J.startTime<=D)v(R),J.sortIndex=J.expirationTime,s(O,J);else break;J=f(R)}}function Te(D){if(Z=!1,ve(D),!K)if(f(O)!==null)K=!0,Ee||(Ee=!0,$e());else{var J=f(R);J!==null&&Ve(Te,J.startTime-D)}}var Ee=!1,be=-1,ce=5,ye=-1;function He(){return $?!0:!(a.unstable_now()-ye<ce)}function Ze(){if($=!1,Ee){var D=a.unstable_now();ye=D;var J=!0;try{e:{K=!1,Z&&(Z=!1,me(be),be=-1),V=!0;var we=U;try{t:{for(ve(D),L=f(O);L!==null&&!(L.expirationTime>D&&He());){var Pe=L.callback;if(typeof Pe=="function"){L.callback=null,U=L.priorityLevel;var W=Pe(L.expirationTime<=D);if(D=a.unstable_now(),typeof W=="function"){L.callback=W,ve(D),J=!0;break t}L===f(O)&&v(O),ve(D)}else v(O);L=f(O)}if(L!==null)J=!0;else{var _=f(R);_!==null&&Ve(Te,_.startTime-D),J=!1}}break e}finally{L=null,U=we,V=!1}J=void 0}}finally{J?$e():Ee=!1}}}var $e;if(typeof de=="function")$e=function(){de(Ze)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ge=st.port2;st.port1.onmessage=Ze,$e=function(){Ge.postMessage(null)}}else $e=function(){oe(Ze,0)};function Ve(D,J){be=oe(function(){D(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return U},a.unstable_next=function(D){switch(U){case 1:case 2:case 3:var J=3;break;default:J=U}var we=U;U=J;try{return D()}finally{U=we}},a.unstable_requestPaint=function(){$=!0},a.unstable_runWithPriority=function(D,J){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var we=U;U=D;try{return J()}finally{U=we}},a.unstable_scheduleCallback=function(D,J,we){var Pe=a.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Pe+we:Pe):we=Pe,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=we+W,D={id:k++,callback:J,priorityLevel:D,startTime:we,expirationTime:W,sortIndex:-1},we>Pe?(D.sortIndex=we,s(R,D),f(O)===null&&D===f(R)&&(Z?(me(be),be=-1):Z=!0,Ve(Te,we-Pe))):(D.sortIndex=W,s(O,D),K||V||(K=!0,Ee||(Ee=!0,$e()))),D},a.unstable_shouldYield=He,a.unstable_wrapCallback=function(D){var J=U;return function(){var we=U;U=J;try{return D.apply(this,arguments)}finally{U=we}}}})(ch)),ch}var Qv;function yy(){return Qv||(Qv=1,oh.exports=my()),oh.exports}var uh={exports:{}},Ml={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function py(){if(Wv)return Ml;Wv=1;var a=Ns();function s(O){var R="https://react.dev/errors/"+O;if(1<arguments.length){R+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)R+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+O+"; visit "+R+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var v={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},p=Symbol.for("react.portal");function S(O,R,k){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:L==null?null:""+L,children:O,containerInfo:R,implementation:k}}var E=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(O,R){if(O==="font")return"";if(typeof R=="string")return R==="use-credentials"?R:""}return Ml.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,Ml.createPortal=function(O,R){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error(s(299));return S(O,R,null,k)},Ml.flushSync=function(O){var R=E.T,k=v.p;try{if(E.T=null,v.p=2,O)return O()}finally{E.T=R,v.p=k,v.d.f()}},Ml.preconnect=function(O,R){typeof O=="string"&&(R?(R=R.crossOrigin,R=typeof R=="string"?R==="use-credentials"?R:"":void 0):R=null,v.d.C(O,R))},Ml.prefetchDNS=function(O){typeof O=="string"&&v.d.D(O)},Ml.preinit=function(O,R){if(typeof O=="string"&&R&&typeof R.as=="string"){var k=R.as,L=T(k,R.crossOrigin),U=typeof R.integrity=="string"?R.integrity:void 0,V=typeof R.fetchPriority=="string"?R.fetchPriority:void 0;k==="style"?v.d.S(O,typeof R.precedence=="string"?R.precedence:void 0,{crossOrigin:L,integrity:U,fetchPriority:V}):k==="script"&&v.d.X(O,{crossOrigin:L,integrity:U,fetchPriority:V,nonce:typeof R.nonce=="string"?R.nonce:void 0})}},Ml.preinitModule=function(O,R){if(typeof O=="string")if(typeof R=="object"&&R!==null){if(R.as==null||R.as==="script"){var k=T(R.as,R.crossOrigin);v.d.M(O,{crossOrigin:k,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0})}}else R==null&&v.d.M(O)},Ml.preload=function(O,R){if(typeof O=="string"&&typeof R=="object"&&R!==null&&typeof R.as=="string"){var k=R.as,L=T(k,R.crossOrigin);v.d.L(O,k,{crossOrigin:L,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0,type:typeof R.type=="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority=="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy=="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet=="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes=="string"?R.imageSizes:void 0,media:typeof R.media=="string"?R.media:void 0})}},Ml.preloadModule=function(O,R){if(typeof O=="string")if(R){var k=T(R.as,R.crossOrigin);v.d.m(O,{as:typeof R.as=="string"&&R.as!=="script"?R.as:void 0,crossOrigin:k,integrity:typeof R.integrity=="string"?R.integrity:void 0})}else v.d.m(O)},Ml.requestFormReset=function(O){v.d.r(O)},Ml.unstable_batchedUpdates=function(O,R){return O(R)},Ml.useFormState=function(O,R,k){return E.H.useFormState(O,R,k)},Ml.useFormStatus=function(){return E.H.useHostTransitionStatus()},Ml.version="19.2.4",Ml}var Jv;function Uf(){if(Jv)return uh.exports;Jv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),uh.exports=py(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function xy(){if(Kv)return Ls;Kv=1;var a=yy(),s=Ns(),f=Uf();function v(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(S(e)!==e)throw Error(v(188))}function R(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,l=t;;){var u=n.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){n=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===n)return O(u),e;if(d===l)return O(u),t;d=d.sibling}throw Error(v(188))}if(n.return!==l.return)n=u,l=d;else{for(var x=!1,A=u.child;A;){if(A===n){x=!0,n=u,l=d;break}if(A===l){x=!0,l=u,n=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===n){x=!0,n=d,l=u;break}if(A===l){x=!0,l=d,n=u;break}A=A.sibling}if(!x)throw Error(v(189))}}if(n.alternate!==l)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,U=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),me=Symbol.for("react.consumer"),de=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=Ze&&e[Ze]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case oe:return"Profiler";case $:return"StrictMode";case Te:return"Suspense";case Ee:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case de:return e.displayName||"Context";case me:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:Ge(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return Ge(e(t))}catch{}}return null}var Ve=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Pe=[],W=-1;function _(e){return{current:e}}function se(e){0>W||(e.current=Pe[W],Pe[W]=null,W--)}function Ae(e,t){W++,Pe[W]=e.current,e.current=t}var Re=_(null),pe=_(null),_e=_(null),Xe=_(null);function Vt(e,t){switch(Ae(_e,t),Ae(pe,e),Ae(Re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bm(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(Re),Ae(Re,e)}function Qe(){se(Re),se(pe),se(_e)}function ea(e){e.memoizedState!==null&&Ae(Xe,e);var t=Re.current,n=Hm(t,e.type);t!==n&&(Ae(pe,e),Ae(Re,n))}function _t(e){pe.current===e&&(se(Re),se(pe)),Xe.current===e&&(se(Xe),Nf._currentValue=we)}var Fl,Ue;function ol(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||"",Ue=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fl+e+Ue}var $r=!1;function Fo(e,t){if(!e||$r)return"";$r=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(re){var te=re}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(re){te=re}e.call(ge.prototype)}}else{try{throw Error()}catch(re){te=re}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(re){if(re&&te&&typeof re.stack=="string")return[re.stack,te.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var F=x.split(`
`),q=A.split(`
`);for(u=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;if(l===F.length||u===q.length)for(l=F.length-1,u=q.length-1;1<=l&&0<=u&&F[l]!==q[u];)u--;for(;1<=l&&0<=u;l--,u--)if(F[l]!==q[u]){if(l!==1||u!==1)do if(l--,u--,0>u||F[l]!==q[u]){var ue=`
`+F[l].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=l&&0<=u);break}}}finally{$r=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ol(n):""}function ei(e,t){switch(e.tag){case 26:case 27:case 5:return ol(e.type);case 16:return ol("Lazy");case 13:return e.child!==t&&t!==null?ol("Suspense Fallback"):ol("Suspense");case 19:return ol("SuspenseList");case 0:case 15:return Fo(e.type,!1);case 11:return Fo(e.type.render,!1);case 1:return Fo(e.type,!0);case 31:return ol("Activity");default:return""}}function ma(e){try{var t="",n=null;do t+=ei(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fn=Object.prototype.hasOwnProperty,Yo=a.unstable_scheduleCallback,pl=a.unstable_cancelCallback,xl=a.unstable_shouldYield,gr=a.unstable_requestPaint,cl=a.unstable_now,gt=a.unstable_getCurrentPriorityLevel,ul=a.unstable_ImmediatePriority,qu=a.unstable_UserBlockingPriority,ti=a.unstable_NormalPriority,Cn=a.unstable_LowPriority,Po=a.unstable_IdlePriority,lu=a.log,ni=a.unstable_setDisableYieldValue,ja=null,gn=null;function ta(e){if(typeof lu=="function"&&ni(e),gn&&typeof gn.setStrictMode=="function")try{gn.setStrictMode(ja,e)}catch{}}var Bn=Math.clz32?Math.clz32:Qt,Go=Math.log,au=Math.LN2;function Qt(e){return e>>>=0,e===0?32:31-(Go(e)/au|0)|0}var rn=256,li=262144,Yl=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function br(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?u=ya(l):(x&=A,x!==0?u=ya(x):n||(n=A&~e,n!==0&&(u=ya(n))))):(A=l&~d,A!==0?u=ya(A):x!==0?u=ya(x):n||(n=l&~e,n!==0&&(u=ya(n)))),u===0?0:t!==0&&t!==u&&(t&d)===0&&(d=u&-u,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:u}function pa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Pl(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ru(){var e=Yl;return Yl<<=1,(Yl&62914560)===0&&(Yl=4194304),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $u(e,t,n,l,u,d){var x=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,q=e.hiddenUpdates;for(n=x&~n;0<n;){var ue=31-Bn(n),ge=1<<ue;A[ue]=0,F[ue]=-1;var te=q[ue];if(te!==null)for(q[ue]=null,ue=0;ue<te.length;ue++){var re=te[ue];re!==null&&(re.lane&=-536870913)}n&=~ge}l!==0&&ai(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~t))}function ai(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Bn(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function ri(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Bn(n),u=1<<l;u&t|e[l]&t&&(e[l]|=t),n&=~u}}function bn(e,t){var n=t&-t;return n=(n&42)!==0?1:sl(n),(n&(e.suspendedLanes|t))!==0?0:n}function sl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ht(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vi(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:iy(e.type))}function fl(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var yt=Math.random().toString(36).slice(2),mn="__reactFiber$"+yt,Wn="__reactProps$"+yt,qa="__reactContainer$"+yt,Io="__reactEvents$"+yt,Qi="__reactListeners$"+yt,es="__reactHandles$"+yt,pt="__reactResources$"+yt,St="__reactMarker$"+yt;function mr(e){delete e[mn],delete e[Wn],delete e[Io],delete e[Qi],delete e[es]}function yn(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qa]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Im(e);e!==null;){if(n=e[mn])return n;e=Im(e)}return t}e=n,n=e.parentNode}return null}function ii(e){if(e=e[mn]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(v(33))}function pr(e){var t=e[pt];return t||(t=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function dn(e){e[St]=!0}var ts=new Set,oi={};function Ut(e,t){xa(e,t),xa(e+"Capture",t)}function xa(e,t){for(oi[e]=t,e=0;e<t.length;e++)ts.add(t[e])}var Zo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wa={},Wi={};function Xs(e){return fn.call(Wi,e)?!0:fn.call(wa,e)?!1:Zo.test(e)?Wi[e]=!0:(wa[e]=!0,!1)}function Vo(e,t,n){if(Xs(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Sa(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ol(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ea(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iu(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(x){n=""+x,d.call(this,x)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(x){n=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ou(e){if(!e._valueTracker){var t=Ea(e)?"checked":"value";e._valueTracker=iu(e,t,""+e[t])}}function ci(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ea(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xr=/[\n"\\]/g;function Kn(e){return e.replace(xr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ji(e,t,n,l,u,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Jn(t)):e.value!==""+Jn(t)&&(e.value=""+Jn(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?Ki(e,x,Jn(t)):n!=null?Ki(e,x,Jn(n)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Jn(A):e.removeAttribute("name")}function Ca(e,t,n,l,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){ou(e);return}n=n!=null?""+Jn(n):"",t=t!=null?""+Jn(t):n,A||t===e.value||(e.value=t),e.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),ou(e)}function Ki(e,t,n){t==="number"&&Wt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function $a(e,t,n,l){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ta(e,t,n){if(t!=null&&(t=""+Jn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Jn(n):""}function cu(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(v(92));if(Ve(l)){if(1<l.length)throw Error(v(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Jn(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),ou(e)}function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ji(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||wr.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ns(e,t,n){if(t!=null&&typeof t!="object")throw Error(v(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&n[u]!==l&&ji(e,u,l)}else for(var d in t)t.hasOwnProperty(d)&&ji(e,d,t[d])}function uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hn(e){return jn.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ra(){}var si=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,Sr=null;function na(e){var t=ii(e);if(t&&(e=t.stateNode)){var n=e[Wn]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ji(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var u=l[Wn]||null;if(!u)throw Error(v(90));Ji(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ci(l)}break e;case"textarea":Ta(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&$a(e,!!n.multiple,t,!1)}}}var qi=!1;function Qo(e,t,n){if(qi)return e(t,n);qi=!0;try{var l=e(t);return l}finally{if(qi=!1,(di!==null||Sr!==null)&&(Bd(),di&&(t=di,e=Sr,Sr=di=null,na(t),e)))for(t=0;t<e.length;t++)na(e[t])}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Wn]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var zl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Et=!1;if(zl)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Et=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Et=!1}var Gl=null,Cr=null,er=null;function hi(){if(er)return er;var e,t=Cr,n=t.length,l,u="value"in Gl?Gl.value:Gl.textContent,d=u.length;for(e=0;e<n&&t[e]===u[e];e++);var x=n-e;for(l=1;l<=x&&t[n-l]===u[d-l];l++);return er=u.slice(e,1<l?1-l:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function Ma(){return!1}function Tn(e){function t(n,l,u,d,x){this._reactName=n,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_a:Ma,this.isPropagationStopped=Ma,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Tn(qn),Rr=L({},qn,{view:0,detail:0}),vi=Tn(Rr),Ar,Wo,gi,eo=L({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(Ar=e.screenX-gi.screenX,Wo=e.screenY-gi.screenY):Wo=Ar=0,gi=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),ls=Tn(eo),Zs=L({},eo,{dataTransfer:0}),Vs=Tn(Zs),Qs=L({},Rr,{relatedTarget:0}),to=Tn(Qs),as=L({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ws=Tn(as),rs=L({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jo=Tn(rs),Js=L({},qn,{data:0}),Ko=Tn(Js),is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bi={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jo(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=su[e])?!!t[e]:!1}function qo(){return jo}var mi=L({},Rr,{key:function(e){if(e.key){var t=is[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bi[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ks=Tn(mi),js=L({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),os=Tn(js),Rn=L({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),yi=Tn(Rn),fu=L({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$o=Tn(fu),cs=L({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_r=Tn(cs),tr=L({},qn,{newState:0,oldState:0}),no=Tn(tr),nr=[9,13,27,32],pn=zl&&"CompositionEvent"in window,la=null;zl&&"documentMode"in document&&(la=document.documentMode);var Dt=zl&&"TextEvent"in window&&!la,Xl=zl&&(!pn||la&&8<la&&11>=la),ec=" ",pi=!1;function du(e,t){switch(e){case"keyup":return nr.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function nc(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(pi=!0,ec);case"textInput":return e=t.data,e===ec&&pi?null:e;default:return null}}function lc(e,t){if(Mr)return e==="compositionend"||!pn&&du(e,t)?(e=hi(),er=Cr=Gl=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xl&&t.locale!=="ko"?null:t.data;default:return null}}var Dl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dl[e.type]:t==="textarea"}function lo(e,t,n,l){di?Sr?Sr.push(l):Sr=[l]:di=l,t=Xd(t,"onChange"),0<t.length&&(n=new $i("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Oa=null,lr=null;function rc(e){Om(e,0)}function Or(e){var t=yr(e);if(ci(t))return e}function ao(e,t){if(e==="change")return t}var hn=!1;if(zl){var hu;if(zl){var za="oninput"in document;if(!za){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),za=typeof ic.oninput=="function"}hu=za}else hu=!1;hn=hu&&(!document.documentMode||9<document.documentMode)}function oc(){Oa&&(Oa.detachEvent("onpropertychange",cc),lr=Oa=null)}function cc(e){if(e.propertyName==="value"&&Or(lr)){var t=[];lo(t,lr,e,fi(e)),Qo(rc,t)}}function uc(e,t,n){e==="focusin"?(oc(),Oa=t,lr=n,Oa.attachEvent("onpropertychange",cc)):e==="focusout"&&oc()}function ro(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(lr)}function ar(e,t){if(e==="click")return Or(t)}function us(e,t){if(e==="input"||e==="change")return Or(t)}function zr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var An=typeof Object.is=="function"?Object.is:zr;function Il(e,t){if(An(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var u=n[l];if(!fn.call(t,u)||!An(e[u],t[u]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rr(e,t){var n=Dr(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dr(n)}}function ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ir(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kr=zl&&"documentMode"in document&&11>=document.documentMode,aa=null,xi=null,Zl=null,wi=!1;function vu(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||aa==null||aa!==Wt(l)||(l=aa,"selectionStart"in l&&fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zl&&Il(Zl,l)||(Zl=l,l=Xd(xi,"onSelect"),0<l.length&&(t=new $i("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=aa)))}function Un(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Da={animationend:Un("Animation","AnimationEnd"),animationiteration:Un("Animation","AnimationIteration"),animationstart:Un("Animation","AnimationStart"),transitionrun:Un("Transition","TransitionRun"),transitionstart:Un("Transition","TransitionStart"),transitioncancel:Un("Transition","TransitionCancel"),transitionend:Un("Transition","TransitionEnd")},io={},i={};zl&&(i=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function c(e){if(io[e])return io[e];if(!Da[e])return e;var t=Da[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in i)return io[e]=t[n];return e}var g=c("animationend"),m=c("animationiteration"),w=c("animationstart"),M=c("transitionrun"),N=c("transitionstart"),ne=c("transitioncancel"),P=c("transitionend"),le=new Map,he="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");he.push("scrollEnd");function ie(e,t){le.set(e,t),Ut(t,[e])}var Ce=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Oe=[],at=0,je=0;function Je(){for(var e=at,t=je=at=0;t<e;){var n=Oe[t];Oe[t++]=null;var l=Oe[t];Oe[t++]=null;var u=Oe[t];Oe[t++]=null;var d=Oe[t];if(Oe[t++]=null,l!==null&&u!==null){var x=l.pending;x===null?u.next=u:(u.next=x.next,x.next=u),l.pending=u}d!==0&&Gt(n,u,d)}}function We(e,t,n,l){Oe[at++]=e,Oe[at++]=t,Oe[at++]=n,Oe[at++]=l,je|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function et(e,t,n,l){return We(e,t,n,l),it(e)}function xt(e,t){return We(e,null,null,t),it(e)}function Gt(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var u=!1,d=e.return;d!==null;)d.childLanes|=n,l=d.alternate,l!==null&&(l.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&t!==null&&(u=31-Bn(n),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[t]:l.push(t),t.lane=n|536870912),d):null}function it(e){if(50<Af)throw Af=0,sv=null,Error(v(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ot={};function dt(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,l){return new dt(e,t,n,l)}function ft(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wt(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Jt(e,t,n,l,u,d){var x=0;if(l=e,typeof e=="function")ft(e)&&(x=1);else if(typeof e=="string")x=gE(e,n,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=kt(31,n,t,u),e.elementType=ye,e.lanes=d,e;case Z:return Ft(n.children,u,d,t);case $:x=8,u|=24;break;case oe:return e=kt(12,n,t,u|2),e.elementType=oe,e.lanes=d,e;case Te:return e=kt(13,n,t,u),e.elementType=Te,e.lanes=d,e;case Ee:return e=kt(19,n,t,u),e.elementType=Ee,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:x=10;break e;case me:x=9;break e;case ve:x=11;break e;case be:x=14;break e;case ce:x=16,l=null;break e}x=29,n=Error(v(130,e===null?"null":typeof e,"")),l=null}return t=kt(x,n,t,u),t.elementType=e,t.type=l,t.lanes=d,t}function Ft(e,t,n,l){return e=kt(7,e,l,t),e.lanes=n,e}function Nt(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Fn(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function ka(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dl=new WeakMap;function Yn(e,t){if(typeof e=="object"&&e!==null){var n=dl.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ma(t)},dl.set(e,t),t)}return{value:e,source:t,stack:ma(t)}}var Vl=[],tn=0,$n=null,el=0,jt=[],on=0,tl=null,Mt=1,Pn="";function wl(e,t){Vl[tn++]=el,Vl[tn++]=$n,$n=e,el=t}function dc(e,t,n){jt[on++]=Mt,jt[on++]=Pn,jt[on++]=tl,tl=e;var l=Mt;e=Pn;var u=32-Bn(l)-1;l&=~(1<<u),n+=1;var d=32-Bn(t)+u;if(30<d){var x=u-u%5;d=(l&(1<<x)-1).toString(32),l>>=x,u-=x,Mt=1<<32-Bn(t)+u|n<<u|l,Pn=d+e}else Mt=1<<d|n<<u|l,Pn=e}function oo(e){e.return!==null&&(wl(e,1),dc(e,1,0))}function hc(e){for(;e===$n;)$n=Vl[--tn],Vl[tn]=null,el=Vl[--tn],Vl[tn]=null;for(;e===tl;)tl=jt[--on],jt[on]=null,Pn=jt[--on],jt[on]=null,Mt=jt[--on],jt[on]=null}function vc(e,t){jt[on++]=Mt,jt[on++]=Pn,jt[on++]=tl,Mt=t.id,Pn=t.overflow,tl=e}var nn=null,Lt=null,nt=!1,_n=null,xn=!1,Si=Error(v(519));function nl(e){var t=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Na(Yn(t,e)),Si}function gc(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[mn]=e,t[Wn]=l,n){case"dialog":vt("cancel",t),vt("close",t);break;case"iframe":case"object":case"embed":vt("load",t);break;case"video":case"audio":for(n=0;n<Mf.length;n++)vt(Mf[n],t);break;case"source":vt("error",t);break;case"img":case"image":case"link":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"input":vt("invalid",t),Ca(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":vt("invalid",t);break;case"textarea":vt("invalid",t),cu(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Nm(t.textContent,n)?(l.popover!=null&&(vt("beforetoggle",t),vt("toggle",t)),l.onScroll!=null&&vt("scroll",t),l.onScrollEnd!=null&&vt("scrollend",t),l.onClick!=null&&(t.onclick=Ra),t=!0):t=!1,t||nl(e,!0)}function Sl(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:nn=nn.return}}function ra(e){if(e!==nn)return!1;if(!nt)return Sl(e),nt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tv(e.type,e.memoizedProps)),n=!n),n&&Lt&&nl(e),Sl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));Lt=Xm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));Lt=Xm(e)}else t===27?(t=Lt,Xc(e.type)?(e=Ov,Ov=null,Lt=e):Lt=t):Lt=nn?fr(e.stateNode.nextSibling):null;return!0}function kl(){Lt=nn=null,nt=!1}function or(){var e=_n;return e!==null&&(ha===null?ha=e:ha.push.apply(ha,e),_n=null),e}function Na(e){_n===null?_n=[e]:_n.push(e)}var Ql=_(null),La=null,Ot=null;function ll(e,t,n){Ae(Ql,t._currentValue),t._currentValue=n}function hl(e){e._currentValue=Ql.current,se(Ql)}function ia(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t,n,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var F=0;F<t.length;F++)if(A.context===t[F]){d.lanes|=n,A=d.alternate,A!==null&&(A.lanes|=n),ia(d.return,n,e),l||(x=null);break e}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(v(341));x.lanes|=n,d=x.alternate,d!==null&&(d.lanes|=n),ia(x,n,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Mn(e,t,n,l){e=null;for(var u=t,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(v(387));if(x=x.memoizedProps,x!==null){var A=u.type;An(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===Xe.current){if(x=u.alternate,x===null)throw Error(v(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Nf):e=[Nf])}u=u.return}e!==null&&Ei(t,e,n,l),t.flags|=262144}function Wl(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function El(e){La=e,Ot=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return Nr(La,e)}function cn(e,t){return La===null&&El(e),Nr(e,t)}function Nr(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ot===null){if(e===null)throw Error(v(308));Ot=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ot=Ot.next=t;return n}var Gn=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},gu=a.unstable_scheduleCallback,co=a.unstable_NormalPriority,Xt={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new Gn,data:new Map,refCount:0}}function Ci(e){e.refCount--,e.refCount===0&&gu(co,function(){e.controller.abort()})}var Cl=null,Ba=0,Tl=0,qt=null;function Ti(e,t){if(Cl===null){var n=Cl=[];Ba=0,Tl=bv(),qt={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Ba++,t.then(Lr,Lr),t}function Lr(){if(--Ba===0&&Cl!==null){qt!==null&&(qt.status="fulfilled");var e=Cl;Cl=null,Tl=0,qt=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function mc(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),l}var uo=D.S;D.S=function(e,t){am=cl(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ti(e,t),uo!==null&&uo(e,t)};var Ha=_(null);function Ri(){var e=Ha.current;return e!==null?e:Kt.pooledCache}function Ai(e,t){t===null?Ae(Ha,Ha.current):Ae(Ha,t.pool)}function $t(){var e=Ri();return e===null?null:{parent:Xt._currentValue,pool:e}}var Ua=Error(v(460)),cr=Error(v(474)),Fa=Error(v(542)),ur={then:function(){}};function so(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _i(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ra,Ra),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yc(e),e;default:if(typeof t.status=="string")t.then(Ra,Ra);else{if(e=Kt,e!==null&&100<e.shellSuspendCounter)throw Error(v(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,yc(e),e}throw al=t,Ua}}function Jl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(al=n,Ua):n}}var al=null;function vl(){if(al===null)throw Error(v(459));var e=al;return al=null,e}function yc(e){if(e===Ua||e===Fa)throw Error(v(483))}var Rl=null,Br=0;function Nl(e){var t=Br;return Br+=1,Rl===null&&(Rl=[]),_i(Rl,e,t)}function Kl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ll(e,t){throw t.$$typeof===U?Error(v(525)):(e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hr(e){function t(Q,G){if(e){var j=Q.deletions;j===null?(Q.deletions=[G],Q.flags|=16):j.push(G)}}function n(Q,G){if(!e)return null;for(;G!==null;)t(Q,G),G=G.sibling;return null}function l(Q){for(var G=new Map;Q!==null;)Q.key!==null?G.set(Q.key,Q):G.set(Q.index,Q),Q=Q.sibling;return G}function u(Q,G){return Q=en(Q,G),Q.index=0,Q.sibling=null,Q}function d(Q,G,j){return Q.index=j,e?(j=Q.alternate,j!==null?(j=j.index,j<G?(Q.flags|=67108866,G):j):(Q.flags|=67108866,G)):(Q.flags|=1048576,G)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,G,j,fe){return G===null||G.tag!==6?(G=Nt(j,Q.mode,fe),G.return=Q,G):(G=u(G,j),G.return=Q,G)}function F(Q,G,j,fe){var Ye=j.type;return Ye===Z?ue(Q,G,j.props.children,fe,j.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Jl(Ye)===G.type)?(G=u(G,j.props),Kl(G,j),G.return=Q,G):(G=Jt(j.type,j.key,j.props,null,Q.mode,fe),Kl(G,j),G.return=Q,G)}function q(Q,G,j,fe){return G===null||G.tag!==4||G.stateNode.containerInfo!==j.containerInfo||G.stateNode.implementation!==j.implementation?(G=ka(j,Q.mode,fe),G.return=Q,G):(G=u(G,j.children||[]),G.return=Q,G)}function ue(Q,G,j,fe,Ye){return G===null||G.tag!==7?(G=Ft(j,Q.mode,fe,Ye),G.return=Q,G):(G=u(G,j),G.return=Q,G)}function ge(Q,G,j){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Nt(""+G,Q.mode,j),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return j=Jt(G.type,G.key,G.props,null,Q.mode,j),Kl(j,G),j.return=Q,j;case K:return G=ka(G,Q.mode,j),G.return=Q,G;case ce:return G=Jl(G),ge(Q,G,j)}if(Ve(G)||$e(G))return G=Ft(G,Q.mode,j,null),G.return=Q,G;if(typeof G.then=="function")return ge(Q,Nl(G),j);if(G.$$typeof===de)return ge(Q,cn(Q,G),j);Ll(Q,G)}return null}function te(Q,G,j,fe){var Ye=G!==null?G.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Ye!==null?null:A(Q,G,""+j,fe);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case V:return j.key===Ye?F(Q,G,j,fe):null;case K:return j.key===Ye?q(Q,G,j,fe):null;case ce:return j=Jl(j),te(Q,G,j,fe)}if(Ve(j)||$e(j))return Ye!==null?null:ue(Q,G,j,fe,null);if(typeof j.then=="function")return te(Q,G,Nl(j),fe);if(j.$$typeof===de)return te(Q,G,cn(Q,j),fe);Ll(Q,j)}return null}function re(Q,G,j,fe,Ye){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return Q=Q.get(j)||null,A(G,Q,""+fe,Ye);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case V:return Q=Q.get(fe.key===null?j:fe.key)||null,F(G,Q,fe,Ye);case K:return Q=Q.get(fe.key===null?j:fe.key)||null,q(G,Q,fe,Ye);case ce:return fe=Jl(fe),re(Q,G,j,fe,Ye)}if(Ve(fe)||$e(fe))return Q=Q.get(j)||null,ue(G,Q,fe,Ye,null);if(typeof fe.then=="function")return re(Q,G,j,Nl(fe),Ye);if(fe.$$typeof===de)return re(Q,G,j,cn(G,fe),Ye);Ll(G,fe)}return null}function ze(Q,G,j,fe){for(var Ye=null,Rt=null,Ne=G,rt=G=0,mt=null;Ne!==null&&rt<j.length;rt++){Ne.index>rt?(mt=Ne,Ne=null):mt=Ne.sibling;var At=te(Q,Ne,j[rt],fe);if(At===null){Ne===null&&(Ne=mt);break}e&&Ne&&At.alternate===null&&t(Q,Ne),G=d(At,G,rt),Rt===null?Ye=At:Rt.sibling=At,Rt=At,Ne=mt}if(rt===j.length)return n(Q,Ne),nt&&wl(Q,rt),Ye;if(Ne===null){for(;rt<j.length;rt++)Ne=ge(Q,j[rt],fe),Ne!==null&&(G=d(Ne,G,rt),Rt===null?Ye=Ne:Rt.sibling=Ne,Rt=Ne);return nt&&wl(Q,rt),Ye}for(Ne=l(Ne);rt<j.length;rt++)mt=re(Ne,Q,rt,j[rt],fe),mt!==null&&(e&&mt.alternate!==null&&Ne.delete(mt.key===null?rt:mt.key),G=d(mt,G,rt),Rt===null?Ye=mt:Rt.sibling=mt,Rt=mt);return e&&Ne.forEach(function(Wc){return t(Q,Wc)}),nt&&wl(Q,rt),Ye}function Ie(Q,G,j,fe){if(j==null)throw Error(v(151));for(var Ye=null,Rt=null,Ne=G,rt=G=0,mt=null,At=j.next();Ne!==null&&!At.done;rt++,At=j.next()){Ne.index>rt?(mt=Ne,Ne=null):mt=Ne.sibling;var Wc=te(Q,Ne,At.value,fe);if(Wc===null){Ne===null&&(Ne=mt);break}e&&Ne&&Wc.alternate===null&&t(Q,Ne),G=d(Wc,G,rt),Rt===null?Ye=Wc:Rt.sibling=Wc,Rt=Wc,Ne=mt}if(At.done)return n(Q,Ne),nt&&wl(Q,rt),Ye;if(Ne===null){for(;!At.done;rt++,At=j.next())At=ge(Q,At.value,fe),At!==null&&(G=d(At,G,rt),Rt===null?Ye=At:Rt.sibling=At,Rt=At);return nt&&wl(Q,rt),Ye}for(Ne=l(Ne);!At.done;rt++,At=j.next())At=re(Ne,Q,rt,At.value,fe),At!==null&&(e&&At.alternate!==null&&Ne.delete(At.key===null?rt:At.key),G=d(At,G,rt),Rt===null?Ye=At:Rt.sibling=At,Rt=At);return e&&Ne.forEach(function(RE){return t(Q,RE)}),nt&&wl(Q,rt),Ye}function Zt(Q,G,j,fe){if(typeof j=="object"&&j!==null&&j.type===Z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case V:e:{for(var Ye=j.key;G!==null;){if(G.key===Ye){if(Ye=j.type,Ye===Z){if(G.tag===7){n(Q,G.sibling),fe=u(G,j.props.children),fe.return=Q,Q=fe;break e}}else if(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Jl(Ye)===G.type){n(Q,G.sibling),fe=u(G,j.props),Kl(fe,j),fe.return=Q,Q=fe;break e}n(Q,G);break}else t(Q,G);G=G.sibling}j.type===Z?(fe=Ft(j.props.children,Q.mode,fe,j.key),fe.return=Q,Q=fe):(fe=Jt(j.type,j.key,j.props,null,Q.mode,fe),Kl(fe,j),fe.return=Q,Q=fe)}return x(Q);case K:e:{for(Ye=j.key;G!==null;){if(G.key===Ye)if(G.tag===4&&G.stateNode.containerInfo===j.containerInfo&&G.stateNode.implementation===j.implementation){n(Q,G.sibling),fe=u(G,j.children||[]),fe.return=Q,Q=fe;break e}else{n(Q,G);break}else t(Q,G);G=G.sibling}fe=ka(j,Q.mode,fe),fe.return=Q,Q=fe}return x(Q);case ce:return j=Jl(j),Zt(Q,G,j,fe)}if(Ve(j))return ze(Q,G,j,fe);if($e(j)){if(Ye=$e(j),typeof Ye!="function")throw Error(v(150));return j=Ye.call(j),Ie(Q,G,j,fe)}if(typeof j.then=="function")return Zt(Q,G,Nl(j),fe);if(j.$$typeof===de)return Zt(Q,G,cn(Q,j),fe);Ll(Q,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,G!==null&&G.tag===6?(n(Q,G.sibling),fe=u(G,j),fe.return=Q,Q=fe):(n(Q,G),fe=Nt(j,Q.mode,fe),fe.return=Q,Q=fe),x(Q)):n(Q,G)}return function(Q,G,j,fe){try{Br=0;var Ye=Zt(Q,G,j,fe);return Rl=null,Ye}catch(Ne){if(Ne===Ua||Ne===Fa)throw Ne;var Rt=kt(29,Ne,null,Q.mode);return Rt.lanes=fe,Rt.return=Q,Rt}finally{}}}var rl=Hr(!0),pc=Hr(!1),oa=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=it(e),Gt(e,null,n),t}return We(e,l,t,n),it(e)}function Bl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ri(e,n)}}function bl(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var u=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var x={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,n=n.next}while(n!==null);d===null?u=d=t:d=d.next=t}else u=d=t;n={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Mi=!1;function Fr(){if(Mi){var e=qt;if(e!==null)throw e}}function ca(e,t,n,l){Mi=!1;var u=e.updateQueue;oa=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,q=F.next;F.next=null,x===null?d=q:x.next=q,x=F;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,A=ue.lastBaseUpdate,A!==x&&(A===null?ue.firstBaseUpdate=q:A.next=q,ue.lastBaseUpdate=F))}if(d!==null){var ge=u.baseState;x=0,ue=q=F=null,A=d;do{var te=A.lane&-536870913,re=te!==A.lane;if(re?(bt&te)===te:(l&te)===te){te!==0&&te===Tl&&(Mi=!0),ue!==null&&(ue=ue.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ze=e,Ie=A;te=t;var Zt=n;switch(Ie.tag){case 1:if(ze=Ie.payload,typeof ze=="function"){ge=ze.call(Zt,ge,te);break e}ge=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ie.payload,te=typeof ze=="function"?ze.call(Zt,ge,te):ze,te==null)break e;ge=L({},ge,te);break e;case 2:oa=!0}}te=A.callback,te!==null&&(e.flags|=64,re&&(e.flags|=8192),re=u.callbacks,re===null?u.callbacks=[te]:re.push(te))}else re={lane:te,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ue===null?(q=ue=re,F=ge):ue=ue.next=re,x|=te;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;re=A,A=re.next,re.next=null,u.lastBaseUpdate=re,u.shared.pending=null}}while(!0);ue===null&&(F=ge),u.baseState=F,u.firstBaseUpdate=q,u.lastBaseUpdate=ue,d===null&&(u.shared.lanes=0),Uc|=x,e.lanes=x,e.memoizedState=ge}}function r(e,t){if(typeof e!="function")throw Error(v(191,e));e.call(t)}function o(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)r(n[e],t)}var h=_(null),b=_(0);function y(e,t){e=To,Ae(b,e),Ae(h,t),To=e|t.baseLanes}function C(){Ae(b,To),Ae(h,h.current)}function z(){To=b.current,se(h),se(b)}var X=_(null),B=null;function I(e){var t=e.alternate;Ae(Le,Le.current&1),Ae(X,e),B===null&&(t===null||h.current!==null||t.memoizedState!==null)&&(B=e)}function ee(e){Ae(Le,Le.current),Ae(X,e),B===null&&(B=e)}function ae(e){e.tag===22?(Ae(Le,Le.current),Ae(X,e),B===null&&(B=e)):xe()}function xe(){Ae(Le,Le.current),Ae(X,X.current)}function Se(e){se(X),B===e&&(B=null),se(Le)}var Le=_(0);function tt(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_v(n)||Mv(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ke=0,Me=null,Be=null,ct=null,On=!1,zn=!1,Fe=!1,vn=0,Bt=0,un=null,Ya=0;function qe(){throw Error(v(321))}function ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!An(e[n],t[n]))return!1;return!0}function Hl(e,t,n,l,u,d){return Ke=d,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Cu:ki,Fe=!1,d=n(l,u),Fe=!1,zn&&(d=Al(t,n,l,u)),wn(e),d}function wn(e){D.H=Eu;var t=Be!==null&&Be.next!==null;if(Ke=0,ct=Be=Me=null,On=!1,Bt=0,un=null,t)throw Error(v(300));e===null||Sn||(e=e.dependencies,e!==null&&Wl(e)&&(Sn=!0))}function Al(e,t,n,l){Me=e;var u=0;do{if(zn&&(un=null),Bt=0,zn=!1,25<=u)throw Error(v(301));if(u+=1,ct=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=Td,d=t(n,l)}while(zn);return d}function fo(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ho(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(Me.flags|=1024),t}function Yr(){var e=vn!==0;return vn=0,e}function Pa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Pr(e){if(On){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}On=!1}Ke=0,ct=Be=Me=null,zn=!1,Bt=vn=0,un=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Me.memoizedState=ct=e:ct=ct.next=e,ct}function Tt(){if(Be===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=ct===null?Me.memoizedState:ct.next;if(t!==null)ct=t,Be=e;else{if(e===null)throw Me.alternate===null?Error(v(467)):Error(v(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ct===null?Me.memoizedState=ct=e:ct=ct.next=e}return ct}function Ga(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var t=Bt;return Bt+=1,un===null&&(un=[]),e=_i(un,e,t),t=Me,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Cu:ki),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===de)return Ct(e)}throw Error(v(438,String(e)))}function vo(e){var t=null,n=Me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ga(),Me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=He;return t.index++,n}function kn(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=Tt();return go(t,Be,e)}function go(e,t,n){var l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=n;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}t.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{t=u.next;var A=x=null,F=null,q=t,ue=!1;do{var ge=q.lane&-536870913;if(ge!==q.lane?(bt&ge)===ge:(Ke&ge)===ge){var te=q.revertLane;if(te===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ge===Tl&&(ue=!0);else if((Ke&te)===te){q=q.next,te===Tl&&(ue=!0);continue}else ge={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},F===null?(A=F=ge,x=d):F=F.next=ge,Me.lanes|=te,Uc|=te;ge=q.action,Fe&&n(d,ge),d=q.hasEagerState?q.eagerState:n(d,ge)}else te={lane:ge,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},F===null?(A=F=te,x=d):F=F.next=te,Me.lanes|=ge,Uc|=ge;q=q.next}while(q!==null&&q!==t);if(F===null?x=d:F.next=A,!An(d,e.memoizedState)&&(Sn=!0,ue&&(n=qt,n!==null)))throw n;e.memoizedState=d,e.baseState=x,e.baseQueue=F,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ss(e){var t=Tt(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var l=n.dispatch,u=n.pending,d=t.memoizedState;if(u!==null){n.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);An(d,t.memoizedState)||(Sn=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,l]}function qs(e,t,n){var l=Me,u=Tt(),d=nt;if(d){if(n===void 0)throw Error(v(407));n=n()}else n=t();var x=!An((Be||u).memoizedState,n);if(x&&(u.memoizedState=n,Sn=!0),u=u.queue,yo(tf.bind(null,l,u,e),[e]),u.getSnapshot!==t||x||ct!==null&&ct.memoizedState.tag&1){if(l.flags|=2048,mo(9,{destroy:void 0},ef.bind(null,l,u,n,t),null),Kt===null)throw Error(v(349));d||(Ke&127)!==0||$s(l,t,n)}return n}function $s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t=Ga(),Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ef(e,t,n,l){t.value=n,t.getSnapshot=l,nf(t)&&wc(e)}function tf(e,t,n){return n(function(){nf(t)&&wc(e)})}function nf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!An(e,n)}catch{return!0}}function wc(e){var t=xt(e,2);t!==null&&va(t,e,2)}function Xa(e){var t=Dn();if(typeof e=="function"){var n=e;if(e=n(),Fe){ta(!0);try{n()}finally{ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:e},t}function lf(e,t,n,l){return e.baseState=n,go(e,Be,typeof l=="function"?l:kn)}function yd(e,t,n,l,u){if(zc(e))throw Error(v(485));if(e=t.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};D.T!==null?n(!0):d.isTransition=!1,l(d),n=t.pending,n===null?(d.next=t.pending=d,Sc(t,d)):(d.next=n.next,t.pending=n.next=d)}}function Sc(e,t){var n=t.action,l=t.payload,u=e.state;if(t.isTransition){var d=D.T,x={};D.T=x;try{var A=n(u,l),F=D.S;F!==null&&F(x,A),af(e,t,A)}catch(q){bo(e,t,q)}finally{d!==null&&x.types!==null&&(d.types=x.types),D.T=d}}else try{d=n(u,l),af(e,t,d)}catch(q){bo(e,t,q)}}function af(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Oi(e,t,l)},function(l){return bo(e,t,l)}):Oi(e,t,n)}function Oi(e,t,n){t.status="fulfilled",t.value=n,Ec(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sc(e,n)))}function bo(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ec(t),t=t.next;while(t!==l)}e.action=null}function Ec(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cc(e,t){return t}function Tc(e,t){if(nt){var n=Kt.formState;if(n!==null){e:{var l=Me;if(nt){if(Lt){t:{for(var u=Lt,d=xn;u.nodeType!==8;){if(!d){u=null;break t}if(u=fr(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Lt=fr(u.nextSibling),l=u.data==="F!";break e}}nl(l)}l=!1}l&&(t=n[0])}}return n=Dn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cc,lastRenderedState:t},n.queue=l,n=Su.bind(null,Me,l),l.dispatch=n,l=Xa(!1),d=Oc.bind(null,Me,!1,l.queue),l=Dn(),u={state:t,dispatch:null,action:e,pending:null},l.queue=u,n=yd.bind(null,Me,u,d,n),u.dispatch=n,l.memoizedState=e,[t,n,!1]}function Gr(e){var t=Tt();return fs(t,Be,e)}function fs(e,t,n){if(t=go(e,t,Cc)[0],e=bu(kn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ho(t)}catch(x){throw x===Ua?Fa:x}else l=t;t=Tt();var u=t.queue,d=u.dispatch;return n!==t.memoizedState&&(Me.flags|=2048,mo(9,{destroy:void 0},rf.bind(null,u,n),null)),[l,d,e]}function rf(e,t){e.action=t}function zi(e){var t=Tt(),n=Be;if(n!==null)return fs(t,n,e);Tt(),t=t.memoizedState,n=Tt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function mo(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Me.updateQueue,t===null&&(t=Ga(),Me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function mu(){return Tt().memoizedState}function yu(e,t,n,l){var u=Dn();Me.flags|=e,u.memoizedState=mo(1|t,{destroy:void 0},n,l===void 0?null:l)}function Di(e,t,n,l){var u=Tt();l=l===void 0?null:l;var d=u.memoizedState.inst;Be!==null&&l!==null&&ua(l,Be.memoizedState.deps)?u.memoizedState=mo(t,d,n,l):(Me.flags|=e,u.memoizedState=mo(1|t,d,n,l))}function of(e,t){yu(8390656,8,e,t)}function yo(e,t){Di(2048,8,e,t)}function pu(e){Me.flags|=4;var t=Me.updateQueue;if(t===null)t=Ga(),Me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function cf(e){var t=Tt().memoizedState;return pu({ref:t,nextImpl:e}),function(){if((zt&2)!==0)throw Error(v(440));return t.impl.apply(void 0,arguments)}}function uf(e,t){return Di(4,2,e,t)}function pd(e,t){return Di(4,4,e,t)}function xd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ds(e,t,n){n=n!=null?n.concat([e]):null,Di(4,4,xd.bind(null,t,e),n)}function sf(){}function wd(e,t){var n=Tt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&ua(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=Tt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&ua(t,l[1]))return l[0];if(l=e(),Fe){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[l,t],l}function sr(e,t,n){return n===void 0||(Ke&1073741824)!==0&&(bt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=im(),Me.lanes|=e,Uc|=e,n)}function xu(e,t,n,l){return An(n,t)?n:h.current!==null?(e=sr(e,n,l),An(e,t)||(Sn=!0),e):(Ke&42)===0||(Ke&1073741824)!==0&&(bt&261930)===0?(Sn=!0,e.memoizedState=n):(e=im(),Me.lanes|=e,Uc|=e,t)}function Rc(e,t,n,l,u){var d=J.p;J.p=d!==0&&8>d?d:8;var x=D.T,A={};D.T=A,Oc(e,!1,t,n);try{var F=u(),q=D.S;if(q!==null&&q(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ue=mc(F,l);Mc(e,t,ue,Wa(e))}else Mc(e,t,l,Wa(e))}catch(ge){Mc(e,t,{then:function(){},status:"rejected",reason:ge},Wa())}finally{J.p=d,x!==null&&A.types!==null&&(x.types=A.types),D.T=x}}function Ac(){}function _c(e,t,n,l){if(e.tag!==5)throw Error(v(476));var u=wu(e).queue;Rc(e,u,t,we,n===null?Ac:function(){return hs(e),n(l)})}function wu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hs(e){var t=wu(e);t.next===null&&(t=e.alternate.memoizedState),Mc(e,t.next.queue,{},Wa())}function vs(){return Ct(Nf)}function Ed(){return Tt().memoizedState}function gs(){return Tt().memoizedState}function Cd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wa();e=gl(n);var l=Xn(t,e,n);l!==null&&(va(l,t,n),Bl(l,t,n)),t={cache:bc()},e.payload=t;return}t=t.return}}function bs(e,t,n){var l=Wa();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zc(e)?ff(t,n):(n=et(e,t,n,l),n!==null&&(va(n,e,l),df(n,t,l)))}function Su(e,t,n){var l=Wa();Mc(e,t,n,l)}function Mc(e,t,n,l){var u={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zc(e))ff(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var x=t.lastRenderedState,A=d(x,n);if(u.hasEagerState=!0,u.eagerState=A,An(A,x))return We(e,t,u,0),Kt===null&&Je(),!1}catch{}finally{}if(n=et(e,t,u,l),n!==null)return va(n,e,l),df(n,t,l),!0}return!1}function Oc(e,t,n,l){if(l={lane:2,revertLane:bv(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zc(e)){if(t)throw Error(v(479))}else t=et(e,n,l,2),t!==null&&va(t,e,2)}function zc(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function ff(e,t){zn=On=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ri(e,n)}}var Eu={readContext:Ct,use:xc,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Eu.useEffectEvent=qe;var Cu={readContext:Ct,use:xc,useCallback:function(e,t){return Dn().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:of,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,yu(4194308,4,xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yu(4194308,4,e,t)},useInsertionEffect:function(e,t){yu(4,2,e,t)},useMemo:function(e,t){var n=Dn();t=t===void 0?null:t;var l=e();if(Fe){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Dn();if(n!==void 0){var u=n(t);if(Fe){ta(!0);try{n(t)}finally{ta(!1)}}}else u=t;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=bs.bind(null,Me,e),[l.memoizedState,e]},useRef:function(e){var t=Dn();return e={current:e},t.memoizedState=e},useState:function(e){e=Xa(e);var t=e.queue,n=Su.bind(null,Me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:sf,useDeferredValue:function(e,t){var n=Dn();return sr(n,e,t)},useTransition:function(){var e=Xa(!1);return e=Rc.bind(null,Me,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Me,u=Dn();if(nt){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Kt===null)throw Error(v(349));(bt&127)!==0||$s(l,t,n)}u.memoizedState=n;var d={value:n,getSnapshot:t};return u.queue=d,of(tf.bind(null,l,d,e),[e]),l.flags|=2048,mo(9,{destroy:void 0},ef.bind(null,l,d,n,t),null),n},useId:function(){var e=Dn(),t=Kt.identifierPrefix;if(nt){var n=Pn,l=Mt;n=(l&~(1<<32-Bn(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=vn++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ya++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:vs,useFormState:Tc,useActionState:Tc,useOptimistic:function(e){var t=Dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Oc.bind(null,Me,!0,n),n.dispatch=t,[e,t]},useMemoCache:vo,useCacheRefresh:function(){return Dn().memoizedState=Cd.bind(null,Me)},useEffectEvent:function(e){var t=Dn(),n={impl:e};return t.memoizedState=n,function(){if((zt&2)!==0)throw Error(v(440));return n.impl.apply(void 0,arguments)}}},ki={readContext:Ct,use:xc,useCallback:wd,useContext:Ct,useEffect:yo,useImperativeHandle:ds,useInsertionEffect:uf,useLayoutEffect:pd,useMemo:Sd,useReducer:bu,useRef:mu,useState:function(){return bu(kn)},useDebugValue:sf,useDeferredValue:function(e,t){var n=Tt();return xu(n,Be.memoizedState,e,t)},useTransition:function(){var e=bu(kn)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:ho(e),t]},useSyncExternalStore:qs,useId:Ed,useHostTransitionStatus:vs,useFormState:Gr,useActionState:Gr,useOptimistic:function(e,t){var n=Tt();return lf(n,Be,e,t)},useMemoCache:vo,useCacheRefresh:gs};ki.useEffectEvent=cf;var Td={readContext:Ct,use:xc,useCallback:wd,useContext:Ct,useEffect:yo,useImperativeHandle:ds,useInsertionEffect:uf,useLayoutEffect:pd,useMemo:Sd,useReducer:ss,useRef:mu,useState:function(){return ss(kn)},useDebugValue:sf,useDeferredValue:function(e,t){var n=Tt();return Be===null?sr(n,e,t):xu(n,Be.memoizedState,e,t)},useTransition:function(){var e=ss(kn)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:ho(e),t]},useSyncExternalStore:qs,useId:Ed,useHostTransitionStatus:vs,useFormState:zi,useActionState:zi,useOptimistic:function(e,t){var n=Tt();return Be!==null?lf(n,Be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vo,useCacheRefresh:gs};Td.useEffectEvent=cf;function Ni(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ms={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Wa(),u=gl(l);u.payload=t,n!=null&&(u.callback=n),t=Xn(e,u,l),t!==null&&(va(t,e,l),Bl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Wa(),u=gl(l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Xn(e,u,l),t!==null&&(va(t,e,l),Bl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wa(),l=gl(n);l.tag=2,t!=null&&(l.callback=t),t=Xn(e,l,n),t!==null&&(va(t,e,n),Bl(t,e,n))}};function Dc(e,t,n,l,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,x):t.prototype&&t.prototype.isPureReactComponent?!Il(n,l)||!Il(u,d):!0}function Tu(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ms.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=L({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}function hf(e){Ce(e)}function Li(e){console.error(e)}function vf(e){Ce(e)}function Ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function po(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ys(e,t,n){return n=gl(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(e,t)},n}function Au(e){return e=gl(e),e.tag=3,e}function ps(e,t,n,l){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){po(t,n,l)}}var x=n.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){po(t,n,l),typeof u!="function"&&(Fc===null?Fc=new Set([this]):Fc.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function _u(e,t,n,l,u){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Mn(t,n,u,!0),n=X.current,n!==null){switch(n.tag){case 31:case 13:return B===null?Hd():n.alternate===null&&En===0&&(En=3),n.flags&=-257,n.flags|=65536,n.lanes=u,l===ur?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),hv(e,l,u)),!1;case 22:return n.flags|=65536,l===ur?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),hv(e,l,u)),!1}throw Error(v(435,n.tag))}return hv(e,l,u),Hd(),!1}if(nt)return t=X.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==Si&&(e=Error(v(422),{cause:l}),Na(Yn(e,n)))):(l!==Si&&(t=Error(v(423),{cause:l}),Na(Yn(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Yn(l,n),u=ys(e.stateNode,l,u),bl(e,u),En!==4&&(En=2)),!1;var d=Error(v(520),{cause:l});if(d=Yn(d,n),Rf===null?Rf=[d]:Rf.push(d),En!==4&&(En=2),t===null)return!0;l=Yn(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=ys(n.stateNode,l,e),bl(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Fc===null||!Fc.has(d))))return n.flags|=65536,u&=-u,n.lanes|=u,u=Au(u),ps(u,e,n,l),bl(n,u),!1}n=n.return}while(n!==null);return!1}var gf=Error(v(461)),Sn=!1;function In(e,t,n,l){t.child=e===null?pc(t,null,n,l):rl(t,e.child,n,l)}function kc(e,t,n,l,u){n=n.render;var d=t.ref;if("ref"in l){var x={};for(var A in l)A!=="ref"&&(x[A]=l[A])}else x=l;return El(t),l=Hl(e,t,n,x,d,u),A=Yr(),e!==null&&!Sn?(Pa(e,t,u),Ul(e,t,u)):(nt&&A&&oo(t),t.flags|=1,In(e,t,l,u),t.child)}function Nc(e,t,n,l,u){if(e===null){var d=n.type;return typeof d=="function"&&!ft(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,Lc(e,t,d,l,u)):(e=Jt(n.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!ql(e,u)){var x=d.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(x,l)&&e.ref===t.ref)return Ul(e,t,u)}return t.flags|=1,e=en(d,l),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,l,u){if(e!==null){var d=e.memoizedProps;if(Il(d,l)&&e.ref===t.ref)if(Sn=!1,t.pendingProps=l=d,ql(e,u))(e.flags&131072)!==0&&(Sn=!0);else return t.lanes=e.lanes,Ul(e,t,u)}return Ou(e,t,n,l,u)}function Mu(e,t,n,l){var u=l.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,t.child=null;return Rd(e,t,d,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ai(t,d!==null?d.cachePool:null),d!==null?y(t,d):C(),ae(t);else return l=t.lanes=536870912,Rd(e,t,d!==null?d.baseLanes|n:n,n,l)}else d!==null?(Ai(t,d.cachePool),y(t,d),xe(),t.memoizedState=null):(e!==null&&Ai(t,null),C(),xe());return In(e,t,u,n),t.child}function Za(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,n,l,u){var d=Ri();return d=d===null?null:{parent:Xt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Ai(t,null),C(),ae(t),e!==null&&Mn(e,t,l,!0),t.childLanes=u,null}function Nn(e,t){return t=Nu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zn(e,t,n){return rl(t,e.child,null,n),e=Nn(t,t.pendingProps),e.flags|=2,Se(t),t.memoizedState=null,e}function Ad(e,t,n){var l=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(nt){if(l.mode==="hidden")return e=Nn(t,l),t.lanes=536870912,Za(null,e);if(ee(t),(e=Lt)?(e=Gm(e,xn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tl!==null?{id:Mt,overflow:Pn}:null,retryLane:536870912,hydrationErrors:null},n=Fn(e),n.return=t,t.child=n,nn=t,Lt=null)):e=null,e===null)throw nl(t);return t.lanes=536870912,null}return Nn(t,l)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(ee(t),u)if(t.flags&256)t.flags&=-257,t=Zn(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(v(558));else if(Sn||Mn(e,t,n,!1),u=(n&e.childLanes)!==0,Sn||u){if(l=Kt,l!==null&&(x=bn(l,n),x!==0&&x!==d.retryLane))throw d.retryLane=x,xt(e,x),va(l,e,x),gf;Hd(),t=Zn(e,t,n)}else e=d.treeContext,Lt=fr(x.nextSibling),nn=t,nt=!0,_n=null,xn=!1,e!==null&&vc(t,e),t=Nn(t,l),t.flags|=4096;return t}return e=en(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(v(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ou(e,t,n,l,u){return El(t),n=Hl(e,t,n,l,void 0,u),l=Yr(),e!==null&&!Sn?(Pa(e,t,u),Ul(e,t,u)):(nt&&l&&oo(t),t.flags|=1,In(e,t,n,u),t.child)}function Bi(e,t,n,l,u,d){return El(t),t.updateQueue=null,n=Al(t,l,n,u),wn(e),l=Yr(),e!==null&&!Sn?(Pa(e,t,d),Ul(e,t,d)):(nt&&l&&oo(t),t.flags|=1,In(e,t,n,d),t.child)}function xs(e,t,n,l,u){if(El(t),t.stateNode===null){var d=ot,x=n.contextType;typeof x=="object"&&x!==null&&(d=Ct(x)),d=new n(l,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ms,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=l,d.state=t.memoizedState,d.refs={},jl(t),x=n.contextType,d.context=typeof x=="object"&&x!==null?Ct(x):ot,d.state=t.memoizedState,x=n.getDerivedStateFromProps,typeof x=="function"&&(Ni(t,n,x,l),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ms.enqueueReplaceState(d,d.state,null),ca(t,l,d,u),Fr(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){d=t.stateNode;var A=t.memoizedProps,F=Ia(n,A);d.props=F;var q=d.context,ue=n.contextType;x=ot,typeof ue=="object"&&ue!==null&&(x=Ct(ue));var ge=n.getDerivedStateFromProps;ue=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,ue||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||q!==x)&&Tu(t,d,l,x),oa=!1;var te=t.memoizedState;d.state=te,ca(t,l,d,u),Fr(),q=t.memoizedState,A||te!==q||oa?(typeof ge=="function"&&(Ni(t,n,ge,l),q=t.memoizedState),(F=oa||Dc(t,n,F,l,te,q,x))?(ue||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=q),d.props=l,d.state=q,d.context=x,l=F):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{d=t.stateNode,Ur(e,t),x=t.memoizedProps,ue=Ia(n,x),d.props=ue,ge=t.pendingProps,te=d.context,q=n.contextType,F=ot,typeof q=="object"&&q!==null&&(F=Ct(q)),A=n.getDerivedStateFromProps,(q=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==ge||te!==F)&&Tu(t,d,l,F),oa=!1,te=t.memoizedState,d.state=te,ca(t,l,d,u),Fr();var re=t.memoizedState;x!==ge||te!==re||oa||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof A=="function"&&(Ni(t,n,A,l),re=t.memoizedState),(ue=oa||Dc(t,n,ue,l,te,re,F)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,re,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,re,F)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=re),d.props=l,d.state=re,d.context=F,l=ue):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),l=!1)}return d=l,Xr(e,t),l=(t.flags&128)!==0,d||l?(d=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&l?(t.child=rl(t,e.child,null,u),t.child=rl(t,null,n,u)):In(e,t,n,u),t.memoizedState=d.state,e=t.child):e=Ul(e,t,u),e}function bf(e,t,n,l){return kl(),t.flags|=256,In(e,t,n,l),t.child}var Ir={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(e){return{baseLanes:e,cachePool:$t()}}function Du(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qa),e}function mf(e,t,n){var l=t.pendingProps,u=!1,d=(t.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),x&&(u=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(nt){if(u?I(t):xe(),(e=Lt)?(e=Gm(e,xn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:tl!==null?{id:Mt,overflow:Pn}:null,retryLane:536870912,hydrationErrors:null},n=Fn(e),n.return=t,t.child=n,nn=t,Lt=null)):e=null,e===null)throw nl(t);return Mv(e)?t.lanes=32:t.lanes=536870912,null}var A=l.children;return l=l.fallback,u?(xe(),u=t.mode,A=Nu({mode:"hidden",children:A},u),l=Ft(l,u,n,null),A.return=t,l.return=t,A.sibling=l,t.child=A,l=t.child,l.memoizedState=zu(n),l.childLanes=Du(e,x,n),t.memoizedState=Ir,Za(null,l)):(I(t),ku(t,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(d)t.flags&256?(I(t),t.flags&=-257,t=Lu(e,t,n)):t.memoizedState!==null?(xe(),t.child=e.child,t.flags|=128,t=null):(xe(),A=l.fallback,u=t.mode,l=Nu({mode:"visible",children:l.children},u),A=Ft(A,u,n,null),A.flags|=2,l.return=t,A.return=t,l.sibling=A,t.child=l,rl(t,e.child,null,n),l=t.child,l.memoizedState=zu(n),l.childLanes=Du(e,x,n),t.memoizedState=Ir,t=Za(null,l));else if(I(t),Mv(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var q=x.dgst;x=q,l=Error(v(419)),l.stack="",l.digest=x,Na({value:l,source:null,stack:null}),t=Lu(e,t,n)}else if(Sn||Mn(e,t,n,!1),x=(n&e.childLanes)!==0,Sn||x){if(x=Kt,x!==null&&(l=bn(x,n),l!==0&&l!==F.retryLane))throw F.retryLane=l,xt(e,l),va(x,e,l),gf;_v(A)||Hd(),t=Lu(e,t,n)}else _v(A)?(t.flags|=192,t.child=e.child,t=null):(e=F.treeContext,Lt=fr(A.nextSibling),nn=t,nt=!0,_n=null,xn=!1,e!==null&&vc(t,e),t=ku(t,l.children),t.flags|=4096);return t}return u?(xe(),A=l.fallback,u=t.mode,F=e.child,q=F.sibling,l=en(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,q!==null?A=en(q,A):(A=Ft(A,u,n,null),A.flags|=2),A.return=t,l.return=t,l.sibling=A,t.child=l,Za(null,l),l=t.child,A=e.child.memoizedState,A===null?A=zu(n):(u=A.cachePool,u!==null?(F=Xt._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=$t(),A={baseLanes:A.baseLanes|n,cachePool:u}),l.memoizedState=A,l.childLanes=Du(e,x,n),t.memoizedState=Ir,Za(e.child,l)):(I(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=n,t.memoizedState=null,n)}function ku(e,t){return t=Nu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nu(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function Lu(e,t,n){return rl(t,e.child,null,n),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ia(e.return,t,n)}function Bu(e,t,n,l,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:u,treeForkCount:d}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=n,x.tailMode=u,x.treeForkCount=d)}function pf(e,t,n){var l=t.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var x=Le.current,A=(x&2)!==0;if(A?(x=x&1|2,t.flags|=128):x&=1,Ae(Le,x),In(e,t,l,n),l=nt?el:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,n,t);else if(e.tag===19)yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&tt(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),Bu(t,!1,u,n,d,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&tt(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}Bu(t,!0,n,null,d,l);break;case"together":Bu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Ul(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Uc|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Mn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ql(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function _d(e,t,n){switch(t.tag){case 3:Vt(t,t.stateNode.containerInfo),ll(t,Xt,e.memoizedState.cache),kl();break;case 27:case 5:ea(t);break;case 4:Vt(t,t.stateNode.containerInfo);break;case 10:ll(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ee(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(I(t),t.flags|=128,null):(n&t.child.childLanes)!==0?mf(e,t,n):(I(t),e=Ul(e,t,n),e!==null?e.sibling:null);I(t);break;case 19:var u=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Mn(e,t,n,!1),l=(n&t.childLanes)!==0),u){if(l)return pf(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(Le,Le.current),l)break;return null;case 22:return t.lanes=0,Mu(e,t,n,t.pendingProps);case 24:ll(t,Xt,e.memoizedState.cache)}return Ul(e,t,n)}function H0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Sn=!0;else{if(!ql(e,n)&&(t.flags&128)===0)return Sn=!1,_d(e,t,n);Sn=(e.flags&131072)!==0}else Sn=!1,nt&&(t.flags&1048576)!==0&&dc(t,el,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Jl(t.elementType),t.type=e,typeof e=="function")ft(e)?(l=Ia(e,l),t.tag=1,t=xs(null,t,e,l,n)):(t.tag=0,t=Ou(null,t,e,l,n));else{if(e!=null){var u=e.$$typeof;if(u===ve){t.tag=11,t=kc(null,t,e,l,n);break e}else if(u===be){t.tag=14,t=Nc(null,t,e,l,n);break e}}throw t=Ge(e)||e,Error(v(306,t,""))}}return t;case 0:return Ou(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,u=Ia(l,t.pendingProps),xs(e,t,l,u,n);case 3:e:{if(Vt(t,t.stateNode.containerInfo),e===null)throw Error(v(387));l=t.pendingProps;var d=t.memoizedState;u=d.element,Ur(e,t),ca(t,l,null,n);var x=t.memoizedState;if(l=x.cache,ll(t,Xt,l),l!==d.cache&&Ei(t,[Xt],n,!0),Fr(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=bf(e,t,l,n);break e}else if(l!==u){u=Yn(Error(v(424)),t),Na(u),t=bf(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Lt=fr(e.firstChild),nn=t,nt=!0,_n=null,xn=!0,n=pc(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(kl(),l===u){t=Ul(e,t,n);break e}In(e,t,l,n)}t=t.child}return t;case 26:return Xr(e,t),e===null?(n=Wm(t.type,null,t.pendingProps,null))?t.memoizedState=n:nt||(n=t.type,e=t.pendingProps,l=Id(_e.current).createElement(n),l[mn]=t,l[Wn]=e,_l(l,n,e),dn(l),t.stateNode=l):t.memoizedState=Wm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ea(t),e===null&&nt&&(l=t.stateNode=Zm(t.type,t.pendingProps,_e.current),nn=t,xn=!0,u=Lt,Xc(t.type)?(Ov=u,Lt=fr(l.firstChild)):Lt=u),In(e,t,t.pendingProps.children,n),Xr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&nt&&((u=l=Lt)&&(l=nE(l,t.type,t.pendingProps,xn),l!==null?(t.stateNode=l,nn=t,Lt=fr(l.firstChild),xn=!1,u=!0):u=!1),u||nl(t)),ea(t),u=t.type,d=t.pendingProps,x=e!==null?e.memoizedProps:null,l=d.children,Tv(u,d)?l=null:x!==null&&Tv(u,x)&&(t.flags|=32),t.memoizedState!==null&&(u=Hl(e,t,fo,null,null,n),Nf._currentValue=u),Xr(e,t),In(e,t,l,n),t.child;case 6:return e===null&&nt&&((e=n=Lt)&&(n=lE(n,t.pendingProps,xn),n!==null?(t.stateNode=n,nn=t,Lt=null,e=!0):e=!1),e||nl(t)),null;case 13:return mf(e,t,n);case 4:return Vt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=rl(t,null,l,n):In(e,t,l,n),t.child;case 11:return kc(e,t,t.type,t.pendingProps,n);case 7:return In(e,t,t.pendingProps,n),t.child;case 8:return In(e,t,t.pendingProps.children,n),t.child;case 12:return In(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,ll(t,t.type,l.value),In(e,t,l.children,n),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,El(t),u=Ct(u),l=l(u),t.flags|=1,In(e,t,l,n),t.child;case 14:return Nc(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return pf(e,t,n);case 31:return Ad(e,t,n);case 22:return Mu(e,t,n,t.pendingProps);case 24:return El(t),l=Ct(Xt),e===null?(u=Ri(),u===null&&(u=Kt,d=bc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=n),u=d),t.memoizedState={parent:l,cache:u},jl(t),ll(t,Xt,u)):((e.lanes&n)!==0&&(Ur(e,t),ca(t,null,null,n),Fr()),u=e.memoizedState,d=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),ll(t,Xt,l)):(l=d.cache,ll(t,Xt,l),l!==u.cache&&Ei(t,[Xt],n,!0))),In(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(v(156,t.tag))}function xo(e){e.flags|=4}function qh(e,t,n,l,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(sm())e.flags|=8192;else throw al=ur,cr}else e.flags&=-16777217}function U0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$m(t))if(sm())e.flags|=8192;else throw al=ur,cr}function Md(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ru():536870912,e.lanes|=t,Cs|=t)}function xf(e,t){if(!nt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ln(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function AS(e,t,n){var l=t.pendingProps;switch(hc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(t),null;case 1:return ln(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),hl(Xt),Qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ra(t)?xo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),ln(t),null;case 26:var u=t.type,d=t.memoizedState;return e===null?(xo(t),d!==null?(ln(t),U0(t,d)):(ln(t),qh(t,u,null,l,n))):d?d!==e.memoizedState?(xo(t),ln(t),U0(t,d)):(ln(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&xo(t),ln(t),qh(t,u,e,l,n)),null;case 27:if(_t(t),n=_e.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xo(t);else{if(!l){if(t.stateNode===null)throw Error(v(166));return ln(t),null}e=Re.current,ra(t)?gc(t):(e=Zm(u,l,n),t.stateNode=e,xo(t))}return ln(t),null;case 5:if(_t(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xo(t);else{if(!l){if(t.stateNode===null)throw Error(v(166));return ln(t),null}if(d=Re.current,ra(t))gc(t);else{var x=Id(_e.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(u,{is:l.is}):x.createElement(u)}}d[mn]=t,d[Wn]=l;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=d;e:switch(_l(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&xo(t)}}return ln(t),qh(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xo(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(v(166));if(e=_e.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,u=nn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[mn]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Nm(e.nodeValue,n)),e||nl(t,!0)}else e=Id(e).createTextNode(l),e[mn]=t,t.stateNode=e}return ln(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ra(t),n!==null){if(e===null){if(!l)throw Error(v(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(557));e[mn]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ln(t),e=!1}else n=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Se(t),t):(Se(t),null);if((t.flags&128)!==0)throw Error(v(558))}return ln(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ra(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(v(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(v(317));u[mn]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ln(t),u=!1}else u=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Se(t),t):(Se(t),null)}return Se(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Md(t,t.updateQueue),ln(t),null);case 4:return Qe(),e===null&&xv(t.stateNode.containerInfo),ln(t),null;case 10:return hl(t.type),ln(t),null;case 19:if(se(Le),l=t.memoizedState,l===null)return ln(t),null;if(u=(t.flags&128)!==0,d=l.rendering,d===null)if(u)xf(l,!1);else{if(En!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=tt(e),d!==null){for(t.flags|=128,xf(l,!1),e=d.updateQueue,t.updateQueue=e,Md(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wt(n,e),n=n.sibling;return Ae(Le,Le.current&1|2),nt&&wl(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&cl()>Nd&&(t.flags|=128,u=!0,xf(l,!1),t.lanes=4194304)}else{if(!u)if(e=tt(d),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Md(t,e),xf(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!nt)return ln(t),null}else 2*cl()-l.renderingStartTime>Nd&&n!==536870912&&(t.flags|=128,u=!0,xf(l,!1),t.lanes=4194304);l.isBackwards?(d.sibling=t.child,t.child=d):(e=l.last,e!==null?e.sibling=d:t.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=cl(),e.sibling=null,n=Le.current,Ae(Le,u?n&1|2:n&1),nt&&wl(t,l.treeForkCount),e):(ln(t),null);case 22:case 23:return Se(t),z(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(ln(t),t.subtreeFlags&6&&(t.flags|=8192)):ln(t),n=t.updateQueue,n!==null&&Md(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&se(Ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hl(Xt),ln(t),null;case 25:return null;case 30:return null}throw Error(v(156,t.tag))}function _S(e,t){switch(hc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hl(Xt),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _t(t),null;case 31:if(t.memoizedState!==null){if(Se(t),t.alternate===null)throw Error(v(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Se(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(Le),null;case 4:return Qe(),null;case 10:return hl(t.type),null;case 22:case 23:return Se(t),z(),e!==null&&se(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hl(Xt),null;case 25:return null;default:return null}}function F0(e,t){switch(hc(t),t.tag){case 3:hl(Xt),Qe();break;case 26:case 27:case 5:_t(t);break;case 4:Qe();break;case 31:t.memoizedState!==null&&Se(t);break;case 13:Se(t);break;case 19:se(Le);break;case 10:hl(t.type);break;case 22:case 23:Se(t),z(),e!==null&&se(Ha);break;case 24:hl(Xt)}}function wf(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){l=void 0;var d=n.create,x=n.inst;l=d(),x.destroy=l}n=n.next}while(n!==u)}}catch(A){Pt(t,t.return,A)}}function Bc(e,t,n){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var x=l.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=t;var F=n,q=A;try{q()}catch(ue){Pt(u,F,ue)}}}l=l.next}while(l!==d)}}catch(ue){Pt(t,t.return,ue)}}function Y0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{o(t,n)}catch(l){Pt(e,e.return,l)}}}function P0(e,t,n){n.props=Ia(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Pt(e,t,l)}}function Sf(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(u){Pt(e,t,u)}}function Hi(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(u){Pt(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Pt(e,t,u)}else n.current=null}function G0(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(u){Pt(e,e.return,u)}}function $h(e,t,n){try{var l=e.stateNode;KS(l,e.type,n,t),l[Wn]=t}catch(u){Pt(e,e.return,u)}}function X0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xc(e.type)||e.tag===4}function ev(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xc(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tv(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ra));else if(l!==4&&(l===27&&Xc(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tv(e,t,n),e=e.sibling;e!==null;)tv(e,t,n),e=e.sibling}function Od(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Xc(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}function I0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);_l(t,l,n),t[mn]=e,t[Wn]=n}catch(d){Pt(e,e.return,d)}}var wo=!1,Vn=!1,nv=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,ml=null;function MS(e,t){if(e=e.containerInfo,Ev=jd,e=sc(e),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var x=0,A=-1,F=-1,q=0,ue=0,ge=e,te=null;t:for(;;){for(var re;ge!==n||u!==0&&ge.nodeType!==3||(A=x+u),ge!==d||l!==0&&ge.nodeType!==3||(F=x+l),ge.nodeType===3&&(x+=ge.nodeValue.length),(re=ge.firstChild)!==null;)te=ge,ge=re;for(;;){if(ge===e)break t;if(te===n&&++q===u&&(A=x),te===d&&++ue===l&&(F=x),(re=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=re}n=A===-1||F===-1?null:{start:A,end:F}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cv={focusedElem:e,selectionRange:n},jd=!1,ml=t;ml!==null;)if(t=ml,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ml=e;else for(;ml!==null;){switch(t=ml,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)u=e[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,u=d.memoizedProps,d=d.memoizedState,l=n.stateNode;try{var ze=Ia(n.type,u);e=l.getSnapshotBeforeUpdate(ze,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Ie){Pt(n,n.return,Ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Av(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Av(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(v(163))}if(e=t.sibling,e!==null){e.return=t.return,ml=e;break}ml=t.return}}function V0(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Eo(e,n),l&4&&wf(5,n);break;case 1:if(Eo(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(x){Pt(n,n.return,x)}else{var u=Ia(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Pt(n,n.return,x)}}l&64&&Y0(n),l&512&&Sf(n,n.return);break;case 3:if(Eo(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{o(e,t)}catch(x){Pt(n,n.return,x)}}break;case 27:t===null&&l&4&&I0(n);case 26:case 5:Eo(e,n),t===null&&l&4&&G0(n),l&512&&Sf(n,n.return);break;case 12:Eo(e,n);break;case 31:Eo(e,n),l&4&&J0(e,n);break;case 13:Eo(e,n),l&4&&K0(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=US.bind(null,n),aE(e,n))));break;case 22:if(l=n.memoizedState!==null||wo,!l){t=t!==null&&t.memoizedState!==null||Vn,u=wo;var d=Vn;wo=l,(Vn=t)&&!d?Co(e,n,(n.subtreeFlags&8772)!==0):Eo(e,n),wo=u,Vn=d}break;case 30:break;default:Eo(e,n)}}function Q0(e){var t=e.alternate;t!==null&&(e.alternate=null,Q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,sa=!1;function So(e,t,n){for(n=n.child;n!==null;)W0(e,t,n),n=n.sibling}function W0(e,t,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ja,n)}catch{}switch(n.tag){case 26:Vn||Hi(n,t),So(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Vn||Hi(n,t);var l=sn,u=sa;Xc(n.type)&&(sn=n.stateNode,sa=!1),So(e,t,n),zf(n.stateNode),sn=l,sa=u;break;case 5:Vn||Hi(n,t);case 6:if(l=sn,u=sa,sn=null,So(e,t,n),sn=l,sa=u,sn!==null)if(sa)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(n.stateNode)}catch(d){Pt(n,t,d)}else try{sn.removeChild(n.stateNode)}catch(d){Pt(n,t,d)}break;case 18:sn!==null&&(sa?(e=sn,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ds(e)):Ym(sn,n.stateNode));break;case 4:l=sn,u=sa,sn=n.stateNode.containerInfo,sa=!0,So(e,t,n),sn=l,sa=u;break;case 0:case 11:case 14:case 15:Bc(2,n,t),Vn||Bc(4,n,t),So(e,t,n);break;case 1:Vn||(Hi(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&P0(n,t,l)),So(e,t,n);break;case 21:So(e,t,n);break;case 22:Vn=(l=Vn)||n.memoizedState!==null,So(e,t,n),Vn=l;break;default:So(e,t,n)}}function J0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ds(e)}catch(n){Pt(t,t.return,n)}}}function K0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ds(e)}catch(n){Pt(t,t.return,n)}}function OS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Z0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Z0),t;default:throw Error(v(435,e.tag))}}function zd(e,t){var n=OS(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var u=FS.bind(null,e,l);l.then(u,u)}})}function fa(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var u=n[l],d=e,x=t,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(Xc(A.type)){sn=A.stateNode,sa=!1;break e}break;case 5:sn=A.stateNode,sa=!1;break e;case 3:case 4:sn=A.stateNode.containerInfo,sa=!0;break e}A=A.return}if(sn===null)throw Error(v(160));W0(d,x,u),sn=null,sa=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)j0(t,e),t=t.sibling}var Zr=null;function j0(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fa(t,e),da(e),l&4&&(Bc(3,e,e.return),wf(3,e),Bc(5,e,e.return));break;case 1:fa(t,e),da(e),l&512&&(Vn||n===null||Hi(n,n.return)),l&64&&wo&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var u=Zr;if(fa(t,e),da(e),l&512&&(Vn||n===null||Hi(n,n.return)),l&4){var d=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[St]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),_l(d,l,n),d[mn]=e,dn(d),l=d;break e;case"link":var x=jm("link","href",u).get(l+(n.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){x.splice(A,1);break t}}d=u.createElement(l),_l(d,l,n),u.head.appendChild(d);break;case"meta":if(x=jm("meta","content",u).get(l+(n.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){x.splice(A,1);break t}}d=u.createElement(l),_l(d,l,n),u.head.appendChild(d);break;default:throw Error(v(468,l))}d[mn]=e,dn(d),l=d}e.stateNode=l}else qm(u,e.type,e.stateNode);else e.stateNode=Km(u,l,e.memoizedProps);else d!==l?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,l===null?qm(u,e.type,e.stateNode):Km(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$h(e,e.memoizedProps,n.memoizedProps)}break;case 27:fa(t,e),da(e),l&512&&(Vn||n===null||Hi(n,n.return)),n!==null&&l&4&&$h(e,e.memoizedProps,n.memoizedProps);break;case 5:if(fa(t,e),da(e),l&512&&(Vn||n===null||Hi(n,n.return)),e.flags&32){u=e.stateNode;try{ui(u,"")}catch(ze){Pt(e,e.return,ze)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,$h(e,u,n!==null?n.memoizedProps:u)),l&1024&&(nv=!0);break;case 6:if(fa(t,e),da(e),l&4){if(e.stateNode===null)throw Error(v(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ze){Pt(e,e.return,ze)}}break;case 3:if(Qd=null,u=Zr,Zr=Zd(t.containerInfo),fa(t,e),Zr=u,da(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(t.containerInfo)}catch(ze){Pt(e,e.return,ze)}nv&&(nv=!1,q0(e));break;case 4:l=Zr,Zr=Zd(e.stateNode.containerInfo),fa(t,e),da(e),Zr=l;break;case 12:fa(t,e),da(e);break;case 31:fa(t,e),da(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zd(e,l)));break;case 13:fa(t,e),da(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(kd=cl()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zd(e,l)));break;case 22:u=e.memoizedState!==null;var F=n!==null&&n.memoizedState!==null,q=wo,ue=Vn;if(wo=q||u,Vn=ue||F,fa(t,e),Vn=ue,wo=q,da(e),l&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||F||wo||Vn||Hu(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){F=n=t;try{if(d=F.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=F.stateNode;var ge=F.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ze){Pt(F,F.return,ze)}}}else if(t.tag===6){if(n===null){F=t;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ze){Pt(F,F.return,ze)}}}else if(t.tag===18){if(n===null){F=t;try{var re=F.stateNode;u?Pm(re,!0):Pm(F.stateNode,!1)}catch(ze){Pt(F,F.return,ze)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,zd(e,n))));break;case 19:fa(t,e),da(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zd(e,l)));break;case 30:break;case 21:break;default:fa(t,e),da(e)}}function da(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(X0(l)){n=l;break}l=l.return}if(n==null)throw Error(v(160));switch(n.tag){case 27:var u=n.stateNode,d=ev(e);Od(e,d,u);break;case 5:var x=n.stateNode;n.flags&32&&(ui(x,""),n.flags&=-33);var A=ev(e);Od(e,A,x);break;case 3:case 4:var F=n.stateNode.containerInfo,q=ev(e);tv(e,q,F);break;default:throw Error(v(161))}}catch(ue){Pt(e,e.return,ue)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;q0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Eo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)V0(e,t.alternate,t),t=t.sibling}function Hu(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bc(4,t,t.return),Hu(t);break;case 1:Hi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&P0(t,t.return,n),Hu(t);break;case 27:zf(t.stateNode);case 26:case 5:Hi(t,t.return),Hu(t);break;case 22:t.memoizedState===null&&Hu(t);break;case 30:Hu(t);break;default:Hu(t)}e=e.sibling}}function Co(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=e,d=t,x=d.flags;switch(d.tag){case 0:case 11:case 15:Co(u,d,n),wf(4,d);break;case 1:if(Co(u,d,n),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(q){Pt(l,l.return,q)}if(l=d,u=l.updateQueue,u!==null){var A=l.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)r(F[u],A)}catch(q){Pt(l,l.return,q)}}n&&x&64&&Y0(d),Sf(d,d.return);break;case 27:I0(d);case 26:case 5:Co(u,d,n),n&&l===null&&x&4&&G0(d),Sf(d,d.return);break;case 12:Co(u,d,n);break;case 31:Co(u,d,n),n&&x&4&&J0(u,d);break;case 13:Co(u,d,n),n&&x&4&&K0(u,d);break;case 22:d.memoizedState===null&&Co(u,d,n),Sf(d,d.return);break;case 30:break;default:Co(u,d,n)}t=t.sibling}}function lv(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ci(n))}function av(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ci(e))}function Vr(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$0(e,t,n,l),t=t.sibling}function $0(e,t,n,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Vr(e,t,n,l),u&2048&&wf(9,t);break;case 1:Vr(e,t,n,l);break;case 3:Vr(e,t,n,l),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ci(e)));break;case 12:if(u&2048){Vr(e,t,n,l),e=t.stateNode;try{var d=t.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Pt(t,t.return,F)}}else Vr(e,t,n,l);break;case 31:Vr(e,t,n,l);break;case 13:Vr(e,t,n,l);break;case 23:break;case 22:d=t.stateNode,x=t.alternate,t.memoizedState!==null?d._visibility&2?Vr(e,t,n,l):Ef(e,t):d._visibility&2?Vr(e,t,n,l):(d._visibility|=2,ws(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),u&2048&&lv(x,t);break;case 24:Vr(e,t,n,l),u&2048&&av(t.alternate,t);break;default:Vr(e,t,n,l)}}function ws(e,t,n,l,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,x=t,A=n,F=l,q=x.flags;switch(x.tag){case 0:case 11:case 15:ws(d,x,A,F,u),wf(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?ws(d,x,A,F,u):Ef(d,x):(ue._visibility|=2,ws(d,x,A,F,u)),u&&q&2048&&lv(x.alternate,x);break;case 24:ws(d,x,A,F,u),u&&q&2048&&av(x.alternate,x);break;default:ws(d,x,A,F,u)}t=t.sibling}}function Ef(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,u=l.flags;switch(l.tag){case 22:Ef(n,l),u&2048&&lv(l.alternate,l);break;case 24:Ef(n,l),u&2048&&av(l.alternate,l);break;default:Ef(n,l)}t=t.sibling}}var Cf=8192;function Ss(e,t,n){if(e.subtreeFlags&Cf)for(e=e.child;e!==null;)em(e,t,n),e=e.sibling}function em(e,t,n){switch(e.tag){case 26:Ss(e,t,n),e.flags&Cf&&e.memoizedState!==null&&bE(n,Zr,e.memoizedState,e.memoizedProps);break;case 5:Ss(e,t,n);break;case 3:case 4:var l=Zr;Zr=Zd(e.stateNode.containerInfo),Ss(e,t,n),Zr=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Cf,Cf=16777216,Ss(e,t,n),Cf=l):Ss(e,t,n));break;default:Ss(e,t,n)}}function tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ml=l,lm(l,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:Tf(e),e.flags&2048&&Bc(9,e,e.return);break;case 3:Tf(e);break;case 12:Tf(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dd(e)):Tf(e);break;default:Tf(e)}}function Dd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ml=l,lm(l,e)}tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bc(8,t,t.return),Dd(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dd(t));break;default:Dd(t)}e=e.sibling}}function lm(e,t){for(;ml!==null;){var n=ml;switch(n.tag){case 0:case 11:case 15:Bc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ci(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ml=l;else e:for(n=e;ml!==null;){l=ml;var u=l.sibling,d=l.return;if(Q0(l),l===n){ml=null;break e}if(u!==null){u.return=d,ml=u;break e}ml=d}}}var zS={getCacheForType:function(e){var t=Ct(Xt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ct(Xt).controller.signal}},DS=typeof WeakMap=="function"?WeakMap:Map,zt=0,Kt=null,ht=null,bt=0,Yt=0,Va=null,Hc=!1,Es=!1,rv=!1,To=0,En=0,Uc=0,Uu=0,iv=0,Qa=0,Cs=0,Rf=null,ha=null,ov=!1,kd=0,am=0,Nd=1/0,Ld=null,Fc=null,il=0,Yc=null,Ts=null,Ro=0,cv=0,uv=null,rm=null,Af=0,sv=null;function Wa(){return(zt&2)!==0&&bt!==0?bt&-bt:D.T!==null?bv():Vi()}function im(){if(Qa===0)if((bt&536870912)===0||nt){var e=li;li<<=1,(li&3932160)===0&&(li=262144),Qa=e}else Qa=536870912;return e=X.current,e!==null&&(e.flags|=32),Qa}function va(e,t,n){(e===Kt&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(Rs(e,0),Pc(e,bt,Qa,!1)),Zi(e,n),((zt&2)===0||e!==Kt)&&(e===Kt&&((zt&2)===0&&(Uu|=n),En===4&&Pc(e,bt,Qa,!1)),Ui(e))}function om(e,t,n){if((zt&6)!==0)throw Error(v(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||pa(e,t),u=l?LS(e,t):dv(e,t,!0),d=l;do{if(u===0){Es&&!l&&Pc(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!kS(n)){u=dv(e,t,!1),d=!1;continue}if(u===2){if(d=t,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var A=e;u=Rf;var F=A.current.memoizedState.isDehydrated;if(F&&(Rs(A,x).flags|=256),x=dv(A,x,!1),x!==2){if(rv&&!F){A.errorRecoveryDisabledLanes|=d,Uu|=d,u=4;break e}d=ha,ha=u,d!==null&&(ha===null?ha=d:ha.push.apply(ha,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Rs(e,0),Pc(e,t,0,!0);break}e:{switch(l=e,d=u,d){case 0:case 1:throw Error(v(345));case 4:if((t&4194048)!==t)break;case 6:Pc(l,t,Qa,!Hc);break e;case 2:ha=null;break;case 3:case 5:break;default:throw Error(v(329))}if((t&62914560)===t&&(u=kd+300-cl(),10<u)){if(Pc(l,t,Qa,!Hc),br(l,0,!0)!==0)break e;Ro=t,l.timeoutHandle=Um(cm.bind(null,l,n,ha,Ld,ov,t,Qa,Uu,Cs,Hc,d,"Throttled",-0,0),u);break e}cm(l,n,ha,Ld,ov,t,Qa,Uu,Cs,Hc,d,null,-0,0)}}break}while(!0);Ui(e)}function cm(e,t,n,l,u,d,x,A,F,q,ue,ge,te,re){if(e.timeoutHandle=-1,ge=t.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ra},em(t,d,ge);var ze=(d&62914560)===d?kd-cl():(d&4194048)===d?am-cl():0;if(ze=mE(ge,ze),ze!==null){Ro=d,e.cancelPendingCommit=ze(bm.bind(null,e,t,d,n,l,u,x,A,F,ue,ge,null,te,re)),Pc(e,d,x,!q);return}}bm(e,t,d,n,l,u,x,A,F)}function kS(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var u=n[l],d=u.getSnapshot;u=u.value;try{if(!An(d(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pc(e,t,n,l){t&=~iv,t&=~Uu,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var u=t;0<u;){var d=31-Bn(u),x=1<<d;l[d]=-1,u&=~x}n!==0&&ai(e,n,t)}function Bd(){return(zt&6)===0?(_f(0),!1):!0}function fv(){if(ht!==null){if(Yt===0)var e=ht.return;else e=ht,Ot=La=null,Pr(e),Rl=null,Br=0,e=ht;for(;e!==null;)F0(e.alternate,e),e=e.return;ht=null}}function Rs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$S(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ro=0,fv(),Kt=e,ht=n=en(e.current,null),bt=t,Yt=0,Va=null,Hc=!1,Es=pa(e,t),rv=!1,Cs=Qa=iv=Uu=Uc=En=0,ha=Rf=null,ov=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var u=31-Bn(l),d=1<<u;t|=e[u],l&=~d}return To=t,Je(),n}function um(e,t){Me=null,D.H=Eu,t===Ua||t===Fa?(t=vl(),Yt=3):t===cr?(t=vl(),Yt=4):Yt=t===gf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Va=t,ht===null&&(En=1,Ru(e,Yn(t,e.current)))}function sm(){var e=X.current;return e===null?!0:(bt&4194048)===bt?B===null:(bt&62914560)===bt||(bt&536870912)!==0?e===B:!1}function fm(){var e=D.H;return D.H=Eu,e===null?Eu:e}function dm(){var e=D.A;return D.A=zS,e}function Hd(){En=4,Hc||(bt&4194048)!==bt&&X.current!==null||(Es=!0),(Uc&134217727)===0&&(Uu&134217727)===0||Kt===null||Pc(Kt,bt,Qa,!1)}function dv(e,t,n){var l=zt;zt|=2;var u=fm(),d=dm();(Kt!==e||bt!==t)&&(Ld=null,Rs(e,t)),t=!1;var x=En;e:do try{if(Yt!==0&&ht!==null){var A=ht,F=Va;switch(Yt){case 8:fv(),x=6;break e;case 3:case 2:case 9:case 6:X.current===null&&(t=!0);var q=Yt;if(Yt=0,Va=null,As(e,A,F,q),n&&Es){x=0;break e}break;default:q=Yt,Yt=0,Va=null,As(e,A,F,q)}}NS(),x=En;break}catch(ue){um(e,ue)}while(!0);return t&&e.shellSuspendCounter++,Ot=La=null,zt=l,D.H=u,D.A=d,ht===null&&(Kt=null,bt=0,Je()),x}function NS(){for(;ht!==null;)hm(ht)}function LS(e,t){var n=zt;zt|=2;var l=fm(),u=dm();Kt!==e||bt!==t?(Ld=null,Nd=cl()+500,Rs(e,t)):Es=pa(e,t);e:do try{if(Yt!==0&&ht!==null){t=ht;var d=Va;t:switch(Yt){case 1:Yt=0,Va=null,As(e,t,d,1);break;case 2:case 9:if(so(d)){Yt=0,Va=null,vm(t);break}t=function(){Yt!==2&&Yt!==9||Kt!==e||(Yt=7),Ui(e)},d.then(t,t);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:so(d)?(Yt=0,Va=null,vm(t)):(Yt=0,Va=null,As(e,t,d,7));break;case 5:var x=null;switch(ht.tag){case 26:x=ht.memoizedState;case 5:case 27:var A=ht;if(x?$m(x):A.stateNode.complete){Yt=0,Va=null;var F=A.sibling;if(F!==null)ht=F;else{var q=A.return;q!==null?(ht=q,Ud(q)):ht=null}break t}}Yt=0,Va=null,As(e,t,d,5);break;case 6:Yt=0,Va=null,As(e,t,d,6);break;case 8:fv(),En=6;break e;default:throw Error(v(462))}}BS();break}catch(ue){um(e,ue)}while(!0);return Ot=La=null,D.H=l,D.A=u,zt=n,ht!==null?0:(Kt=null,bt=0,Je(),En)}function BS(){for(;ht!==null&&!xl();)hm(ht)}function hm(e){var t=H0(e.alternate,e,To);e.memoizedProps=e.pendingProps,t===null?Ud(e):ht=t}function vm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bi(n,t,t.pendingProps,t.type,void 0,bt);break;case 11:t=Bi(n,t,t.pendingProps,t.type.render,t.ref,bt);break;case 5:Pr(t);default:F0(n,t),t=ht=wt(t,To),t=H0(n,t,To)}e.memoizedProps=e.pendingProps,t===null?Ud(e):ht=t}function As(e,t,n,l){Ot=La=null,Pr(t),Rl=null,Br=0;var u=t.return;try{if(_u(e,u,t,n,bt)){En=1,Ru(e,Yn(n,e.current)),ht=null;return}}catch(d){if(u!==null)throw ht=u,d;En=1,Ru(e,Yn(n,e.current)),ht=null;return}t.flags&32768?(nt||l===1?e=!0:Es||(bt&536870912)!==0?e=!1:(Hc=e=!0,(l===2||l===9||l===3||l===6)&&(l=X.current,l!==null&&l.tag===13&&(l.flags|=16384))),gm(t,e)):Ud(t)}function Ud(e){var t=e;do{if((t.flags&32768)!==0){gm(t,Hc);return}e=t.return;var n=AS(t.alternate,t,To);if(n!==null){ht=n;return}if(t=t.sibling,t!==null){ht=t;return}ht=t=e}while(t!==null);En===0&&(En=5)}function gm(e,t){do{var n=_S(e.alternate,e);if(n!==null){n.flags&=32767,ht=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ht=e;return}ht=e=n}while(e!==null);En=6,ht=null}function bm(e,t,n,l,u,d,x,A,F){e.cancelPendingCommit=null;do Fd();while(il!==0);if((zt&6)!==0)throw Error(v(327));if(t!==null){if(t===e.current)throw Error(v(177));if(d=t.lanes|t.childLanes,d|=je,$u(e,n,d,x,A,F),e===Kt&&(ht=Kt=null,bt=0),Ts=t,Yc=e,Ro=n,cv=d,uv=u,rm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,YS(ti,function(){return wm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=J.p,J.p=2,x=zt,zt|=4;try{MS(e,t,n)}finally{zt=x,J.p=u,D.T=l}}il=1,mm(),ym(),pm()}}function mm(){if(il===1){il=0;var e=Yc,t=Ts,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=J.p;J.p=2;var u=zt;zt|=4;try{j0(t,e);var d=Cv,x=sc(e.containerInfo),A=d.focusedElem,F=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&ir(A.ownerDocument.documentElement,A)){if(F!==null&&fc(A)){var q=F.start,ue=F.end;if(ue===void 0&&(ue=q),"selectionStart"in A)A.selectionStart=q,A.selectionEnd=Math.min(ue,A.value.length);else{var ge=A.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var re=te.getSelection(),ze=A.textContent.length,Ie=Math.min(F.start,ze),Zt=F.end===void 0?Ie:Math.min(F.end,ze);!re.extend&&Ie>Zt&&(x=Zt,Zt=Ie,Ie=x);var Q=rr(A,Ie),G=rr(A,Zt);if(Q&&G&&(re.rangeCount!==1||re.anchorNode!==Q.node||re.anchorOffset!==Q.offset||re.focusNode!==G.node||re.focusOffset!==G.offset)){var j=ge.createRange();j.setStart(Q.node,Q.offset),re.removeAllRanges(),Ie>Zt?(re.addRange(j),re.extend(G.node,G.offset)):(j.setEnd(G.node,G.offset),re.addRange(j))}}}}for(ge=[],re=A;re=re.parentNode;)re.nodeType===1&&ge.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var fe=ge[A];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}jd=!!Ev,Cv=Ev=null}finally{zt=u,J.p=l,D.T=n}}e.current=t,il=2}}function ym(){if(il===2){il=0;var e=Yc,t=Ts,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=J.p;J.p=2;var u=zt;zt|=4;try{V0(e,t.alternate,t)}finally{zt=u,J.p=l,D.T=n}}il=3}}function pm(){if(il===4||il===3){il=0,gr();var e=Yc,t=Ts,n=Ro,l=rm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?il=5:(il=0,Ts=Yc=null,xm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fc=null),Ht(n),t=t.stateNode,gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ja,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,u=J.p,J.p=2,D.T=null;try{for(var d=e.onRecoverableError,x=0;x<l.length;x++){var A=l[x];d(A.value,{componentStack:A.stack})}}finally{D.T=t,J.p=u}}(Ro&3)!==0&&Fd(),Ui(e),u=e.pendingLanes,(n&261930)!==0&&(u&42)!==0?e===sv?Af++:(Af=0,sv=e):Af=0,_f(0)}}function xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ci(t)))}function Fd(){return mm(),ym(),pm(),wm()}function wm(){if(il!==5)return!1;var e=Yc,t=cv;cv=0;var n=Ht(Ro),l=D.T,u=J.p;try{J.p=32>n?32:n,D.T=null,n=uv,uv=null;var d=Yc,x=Ro;if(il=0,Ts=Yc=null,Ro=0,(zt&6)!==0)throw Error(v(331));var A=zt;if(zt|=4,nm(d.current),$0(d,d.current,x,n),zt=A,_f(0,!1),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ja,d)}catch{}return!0}finally{J.p=u,D.T=l,xm(e,t)}}function Sm(e,t,n){t=Yn(n,t),t=ys(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(Zi(e,2),Ui(e))}function Pt(e,t,n){if(e.tag===3)Sm(e,e,n);else for(;t!==null;){if(t.tag===3){Sm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fc===null||!Fc.has(l))){e=Yn(n,e),n=Au(2),l=Xn(t,n,2),l!==null&&(ps(n,l,t,e),Zi(l,2),Ui(l));break}}t=t.return}}function hv(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new DS;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(n)||(rv=!0,u.add(n),e=HS.bind(null,e,t,n),t.then(e,e))}function HS(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Kt===e&&(bt&n)===n&&(En===4||En===3&&(bt&62914560)===bt&&300>cl()-kd?(zt&2)===0&&Rs(e,0):iv|=n,Cs===bt&&(Cs=0)),Ui(e)}function Em(e,t){t===0&&(t=ru()),e=xt(e,t),e!==null&&(Zi(e,t),Ui(e))}function US(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Em(e,n)}function FS(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(v(314))}l!==null&&l.delete(t),Em(e,n)}function YS(e,t){return Yo(e,t)}var Yd=null,_s=null,vv=!1,Pd=!1,gv=!1,Gc=0;function Ui(e){e!==_s&&e.next===null&&(_s===null?Yd=_s=e:_s=_s.next=e),Pd=!0,vv||(vv=!0,GS())}function _f(e,t){if(!gv&&Pd){gv=!0;do for(var n=!1,l=Yd;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var x=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Bn(42|e)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,Am(l,d))}else d=bt,d=br(l,l===Kt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||pa(l,d)||(n=!0,Am(l,d));l=l.next}while(n);gv=!1}}function PS(){Cm()}function Cm(){Pd=vv=!1;var e=0;Gc!==0&&qS()&&(e=Gc);for(var t=cl(),n=null,l=Yd;l!==null;){var u=l.next,d=Tm(l,t);d===0?(l.next=null,n===null?Yd=u:n.next=u,u===null&&(_s=n)):(n=l,(e!==0||(d&3)!==0)&&(Pd=!0)),l=u}il!==0&&il!==5||_f(e),Gc!==0&&(Gc=0)}function Tm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Bn(d),A=1<<x,F=u[x];F===-1?((A&n)===0||(A&l)!==0)&&(u[x]=Pl(A,t)):F<=t&&(e.expiredLanes|=A),d&=~A}if(t=Kt,n=bt,n=br(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&pl(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&pl(l),Ht(n)){case 2:case 8:n=qu;break;case 32:n=ti;break;case 268435456:n=Po;break;default:n=ti}return l=Rm.bind(null,e),n=Yo(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&pl(l),e.callbackPriority=2,e.callbackNode=null,2}function Rm(e,t){if(il!==0&&il!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fd()&&e.callbackNode!==n)return null;var l=bt;return l=br(e,e===Kt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(om(e,l,t),Tm(e,cl()),e.callbackNode!=null&&e.callbackNode===n?Rm.bind(null,e):null)}function Am(e,t){if(Fd())return null;om(e,t,!0)}function GS(){eE(function(){(zt&6)!==0?Yo(ul,PS):Cm()})}function bv(){if(Gc===0){var e=Tl;e===0&&(e=rn,rn<<=1,(rn&261888)===0&&(rn=256)),Gc=e}return Gc}function _m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hn(""+e)}function Mm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function XS(e,t,n,l,u){if(t==="submit"&&n&&n.stateNode===u){var d=_m((u[Wn]||null).action),x=l.submitter;x&&(t=(t=x[Wn]||null)?_m(t.formAction):x.getAttribute("formAction"),t!==null&&(d=t,x=null));var A=new $i("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gc!==0){var F=x?Mm(u,x):new FormData(u);_c(n,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(A.preventDefault(),F=x?Mm(u,x):new FormData(u),_c(n,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var mv=0;mv<he.length;mv++){var yv=he[mv],IS=yv.toLowerCase(),ZS=yv[0].toUpperCase()+yv.slice(1);ie(IS,"on"+ZS)}ie(g,"onAnimationEnd"),ie(m,"onAnimationIteration"),ie(w,"onAnimationStart"),ie("dblclick","onDoubleClick"),ie("focusin","onFocus"),ie("focusout","onBlur"),ie(M,"onTransitionRun"),ie(N,"onTransitionStart"),ie(ne,"onTransitionCancel"),ie(P,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mf));function Om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],u=l.event;l=l.listeners;e:{var d=void 0;if(t)for(var x=l.length-1;0<=x;x--){var A=l[x],F=A.instance,q=A.currentTarget;if(A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=q;try{d(u)}catch(ue){Ce(ue)}u.currentTarget=null,d=F}else for(x=0;x<l.length;x++){if(A=l[x],F=A.instance,q=A.currentTarget,A=A.listener,F!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=q;try{d(u)}catch(ue){Ce(ue)}u.currentTarget=null,d=F}}}}function vt(e,t){var n=t[Io];n===void 0&&(n=t[Io]=new Set);var l=e+"__bubble";n.has(l)||(zm(t,e,2,!1),n.add(l))}function pv(e,t,n){var l=0;t&&(l|=4),zm(n,e,l,t)}var Gd="_reactListening"+Math.random().toString(36).slice(2);function xv(e){if(!e[Gd]){e[Gd]=!0,ts.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||pv(n,!1,e),pv(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gd]||(t[Gd]=!0,pv("selectionchange",!1,t))}}function zm(e,t,n,l){switch(iy(t)){case 2:var u=xE;break;case 8:u=wE;break;default:u=Lv}n=u.bind(null,t,n,e),u=void 0,!Et||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function wv(e,t,n,l,u){var d=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var A=l.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=l.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=yn(A),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){l=d=x;continue e}A=A.parentNode}}l=l.return}Qo(function(){var q=d,ue=fi(n),ge=[];e:{var te=le.get(e);if(te!==void 0){var re=$i,ze=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":re=Ks;break;case"focusin":ze="focus",re=to;break;case"focusout":ze="blur",re=to;break;case"beforeblur":case"afterblur":re=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Vs;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=yi;break;case g:case m:case w:re=Ws;break;case P:re=$o;break;case"scroll":case"scrollend":re=vi;break;case"wheel":re=_r;break;case"copy":case"cut":case"paste":re=Jo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=os;break;case"toggle":case"beforetoggle":re=no}var Ie=(t&4)!==0,Zt=!Ie&&(e==="scroll"||e==="scrollend"),Q=Ie?te!==null?te+"Capture":null:te;Ie=[];for(var G=q,j;G!==null;){var fe=G;if(j=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||j===null||Q===null||(fe=Er(G,Q),fe!=null&&Ie.push(Of(G,fe,j))),Zt)break;G=G.return}0<Ie.length&&(te=new re(te,ze,null,n,ue),ge.push({event:te,listeners:Ie}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",te&&n!==si&&(ze=n.relatedTarget||n.fromElement)&&(yn(ze)||ze[qa]))break e;if((re||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,re?(ze=n.relatedTarget||n.toElement,re=q,ze=ze?yn(ze):null,ze!==null&&(Zt=S(ze),Ie=ze.tag,ze!==Zt||Ie!==5&&Ie!==27&&Ie!==6)&&(ze=null)):(re=null,ze=q),re!==ze)){if(Ie=ls,fe="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Ie=os,fe="onPointerLeave",Q="onPointerEnter",G="pointer"),Zt=re==null?te:yr(re),j=ze==null?te:yr(ze),te=new Ie(fe,G+"leave",re,n,ue),te.target=Zt,te.relatedTarget=j,fe=null,yn(ue)===q&&(Ie=new Ie(Q,G+"enter",ze,n,ue),Ie.target=j,Ie.relatedTarget=Zt,fe=Ie),Zt=fe,re&&ze)t:{for(Ie=QS,Q=re,G=ze,j=0,fe=Q;fe;fe=Ie(fe))j++;fe=0;for(var Ye=G;Ye;Ye=Ie(Ye))fe++;for(;0<j-fe;)Q=Ie(Q),j--;for(;0<fe-j;)G=Ie(G),fe--;for(;j--;){if(Q===G||G!==null&&Q===G.alternate){Ie=Q;break t}Q=Ie(Q),G=Ie(G)}Ie=null}else Ie=null;re!==null&&Dm(ge,te,re,Ie,!1),ze!==null&&Zt!==null&&Dm(ge,Zt,ze,Ie,!0)}}e:{if(te=q?yr(q):window,re=te.nodeName&&te.nodeName.toLowerCase(),re==="select"||re==="input"&&te.type==="file")var Rt=ao;else if(ac(te))if(hn)Rt=us;else{Rt=ro;var Ne=uc}else re=te.nodeName,!re||re.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?q&&uu(q.elementType)&&(Rt=ao):Rt=ar;if(Rt&&(Rt=Rt(e,q))){lo(ge,Rt,n,ue);break e}Ne&&Ne(e,te,q),e==="focusout"&&q&&te.type==="number"&&q.memoizedProps.value!=null&&Ki(te,"number",te.value)}switch(Ne=q?yr(q):window,e){case"focusin":(ac(Ne)||Ne.contentEditable==="true")&&(aa=Ne,xi=q,Zl=null);break;case"focusout":Zl=xi=aa=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,vu(ge,n,ue);break;case"selectionchange":if(kr)break;case"keydown":case"keyup":vu(ge,n,ue)}var rt;if(pn)e:{switch(e){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Mr?du(e,n)&&(mt="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(mt="onCompositionStart");mt&&(Xl&&n.locale!=="ko"&&(Mr||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Mr&&(rt=hi()):(Gl=ue,Cr="value"in Gl?Gl.value:Gl.textContent,Mr=!0)),Ne=Xd(q,mt),0<Ne.length&&(mt=new Ko(mt,e,null,n,ue),ge.push({event:mt,listeners:Ne}),rt?mt.data=rt:(rt=tc(n),rt!==null&&(mt.data=rt)))),(rt=Dt?nc(e,n):lc(e,n))&&(mt=Xd(q,"onBeforeInput"),0<mt.length&&(Ne=new Ko("onBeforeInput","beforeinput",null,n,ue),ge.push({event:Ne,listeners:mt}),Ne.data=rt)),XS(ge,e,q,n,ue)}Om(ge,t)})}function Of(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xd(e,t){for(var n=t+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Er(e,n),u!=null&&l.unshift(Of(e,u,d)),u=Er(e,t),u!=null&&l.push(Of(e,u,d))),e.tag===3)return l;e=e.return}return[]}function QS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dm(e,t,n,l,u){for(var d=t._reactName,x=[];n!==null&&n!==l;){var A=n,F=A.alternate,q=A.stateNode;if(A=A.tag,F!==null&&F===l)break;A!==5&&A!==26&&A!==27||q===null||(F=q,u?(q=Er(n,d),q!=null&&x.unshift(Of(n,q,F))):u||(q=Er(n,d),q!=null&&x.push(Of(n,q,F)))),n=n.return}x.length!==0&&e.push({event:t,listeners:x})}var WS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function km(e){return(typeof e=="string"?e:""+e).replace(WS,`
`).replace(JS,"")}function Nm(e,t){return t=km(t),km(e)===t}function It(e,t,n,l,u,d){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ui(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ui(e,""+l);break;case"className":Sa(e,"class",l);break;case"tabIndex":Sa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Sa(e,n,l);break;case"style":ns(e,l,d);break;case"data":if(t!=="object"){Sa(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hn(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&It(e,t,"name",u.name,u,null),It(e,t,"formEncType",u.formEncType,u,null),It(e,t,"formMethod",u.formMethod,u,null),It(e,t,"formTarget",u.formTarget,u,null)):(It(e,t,"encType",u.encType,u,null),It(e,t,"method",u.method,u,null),It(e,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Hn(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ra);break;case"onScroll":l!=null&&vt("scroll",e);break;case"onScrollEnd":l!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(u.children!=null)throw Error(v(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Hn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":vt("beforetoggle",e),vt("toggle",e),Vo(e,"popover",l);break;case"xlinkActuate":Ol(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ol(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ol(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ol(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ol(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ol(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ol(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ol(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ol(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vo(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Is.get(n)||n,Vo(e,n,l))}}function Sv(e,t,n,l,u,d){switch(n){case"style":ns(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(v(61));if(n=l.__html,n!=null){if(u.children!=null)throw Error(v(60));e.innerHTML=n}}break;case"children":typeof l=="string"?ui(e,l):(typeof l=="number"||typeof l=="bigint")&&ui(e,""+l);break;case"onScroll":l!=null&&vt("scroll",e);break;case"onScrollEnd":l!=null&&vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),d=e[Wn]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,u);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Vo(e,n,l)}}}function _l(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var l=!1,u=!1,d;for(d in n)if(n.hasOwnProperty(d)){var x=n[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:It(e,t,d,x,n,null)}}u&&It(e,t,"srcSet",n.srcSet,n,null),l&&It(e,t,"src",n.src,n,null);return;case"input":vt("invalid",e);var A=d=x=u=null,F=null,q=null;for(l in n)if(n.hasOwnProperty(l)){var ue=n[l];if(ue!=null)switch(l){case"name":u=ue;break;case"type":x=ue;break;case"checked":F=ue;break;case"defaultChecked":q=ue;break;case"value":d=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(v(137,t));break;default:It(e,t,l,ue,n,null)}}Ca(e,d,A,F,q,x,u,!1);return;case"select":vt("invalid",e),l=x=d=null;for(u in n)if(n.hasOwnProperty(u)&&(A=n[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":l=A;default:It(e,t,u,A,n,null)}t=d,n=x,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):n!=null&&$a(e,!!l,n,!0);return;case"textarea":vt("invalid",e),d=u=l=null;for(x in n)if(n.hasOwnProperty(x)&&(A=n[x],A!=null))switch(x){case"value":l=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(v(91));break;default:It(e,t,x,A,n,null)}cu(e,l,u,d);return;case"option":for(F in n)if(n.hasOwnProperty(F)&&(l=n[F],l!=null))switch(F){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:It(e,t,F,l,n,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(l=0;l<Mf.length;l++)vt(Mf[l],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in n)if(n.hasOwnProperty(q)&&(l=n[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,t));default:It(e,t,q,l,n,null)}return;default:if(uu(t)){for(ue in n)n.hasOwnProperty(ue)&&(l=n[ue],l!==void 0&&Sv(e,t,ue,l,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(l=n[A],l!=null&&It(e,t,A,l,n,null))}function KS(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,F=null,q=null,ue=null;for(re in n){var ge=n[re];if(n.hasOwnProperty(re)&&ge!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":F=ge;default:l.hasOwnProperty(re)||It(e,t,re,null,l,ge)}}for(var te in l){var re=l[te];if(ge=n[te],l.hasOwnProperty(te)&&(re!=null||ge!=null))switch(te){case"type":d=re;break;case"name":u=re;break;case"checked":q=re;break;case"defaultChecked":ue=re;break;case"value":x=re;break;case"defaultValue":A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(v(137,t));break;default:re!==ge&&It(e,t,te,re,l,ge)}}Ji(e,x,A,F,q,ue,d,u);return;case"select":re=x=A=te=null;for(d in n)if(F=n[d],n.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":re=F;default:l.hasOwnProperty(d)||It(e,t,d,null,l,F)}for(u in l)if(d=l[u],F=n[u],l.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":te=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==F&&It(e,t,u,d,l,F)}t=A,n=x,l=re,te!=null?$a(e,!!n,te,!1):!!l!=!!n&&(t!=null?$a(e,!!n,t,!0):$a(e,!!n,n?[]:"",!1));return;case"textarea":re=te=null;for(A in n)if(u=n[A],n.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:It(e,t,A,null,l,u)}for(x in l)if(u=l[x],d=n[x],l.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":te=u;break;case"defaultValue":re=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(v(91));break;default:u!==d&&It(e,t,x,u,l,d)}Ta(e,te,re);return;case"option":for(var ze in n)if(te=n[ze],n.hasOwnProperty(ze)&&te!=null&&!l.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:It(e,t,ze,null,l,te)}for(F in l)if(te=l[F],re=n[F],l.hasOwnProperty(F)&&te!==re&&(te!=null||re!=null))switch(F){case"selected":e.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:It(e,t,F,te,l,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ie in n)te=n[Ie],n.hasOwnProperty(Ie)&&te!=null&&!l.hasOwnProperty(Ie)&&It(e,t,Ie,null,l,te);for(q in l)if(te=l[q],re=n[q],l.hasOwnProperty(q)&&te!==re&&(te!=null||re!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(v(137,t));break;default:It(e,t,q,te,l,re)}return;default:if(uu(t)){for(var Zt in n)te=n[Zt],n.hasOwnProperty(Zt)&&te!==void 0&&!l.hasOwnProperty(Zt)&&Sv(e,t,Zt,void 0,l,te);for(ue in l)te=l[ue],re=n[ue],!l.hasOwnProperty(ue)||te===re||te===void 0&&re===void 0||Sv(e,t,ue,te,l,re);return}}for(var Q in n)te=n[Q],n.hasOwnProperty(Q)&&te!=null&&!l.hasOwnProperty(Q)&&It(e,t,Q,null,l,te);for(ge in l)te=l[ge],re=n[ge],!l.hasOwnProperty(ge)||te===re||te==null&&re==null||It(e,t,ge,te,l,re)}function Lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var u=n[l],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&Lm(x)){for(x=0,A=u.responseEnd,l+=1;l<n.length;l++){var F=n[l],q=F.startTime;if(q>A)break;var ue=F.transferSize,ge=F.initiatorType;ue&&Lm(ge)&&(F=F.responseEnd,x+=ue*(F<A?1:(A-q)/(F-q)))}if(--l,t+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ev=null,Cv=null;function Id(e){return e.nodeType===9?e:e.ownerDocument}function Bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tv(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rv=null;function qS(){var e=window.event;return e&&e.type==="popstate"?e===Rv?!1:(Rv=e,!0):(Rv=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(e){return Fm.resolve(null).then(e).catch(tE)}:Um;function tE(e){setTimeout(function(){throw e})}function Xc(e){return e==="head"}function Ym(e,t){var n=t,l=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(u),Ds(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")zf(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,zf(n);for(var d=n.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[St]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=x}}else n==="body"&&zf(e.ownerDocument.body);n=u}while(n);Ds(t)}function Pm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Av(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Av(n),mr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function nE(e,t,n,l){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[St])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=fr(e.nextSibling),e===null)break}return null}function lE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fr(e.nextSibling),e===null))return null;return e}function Gm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fr(e.nextSibling),e===null))return null;return e}function _v(e){return e.data==="$?"||e.data==="$~"}function Mv(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function fr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ov=null;function Xm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Zm(e,t,n){switch(t=Id(n),e){case"html":if(e=t.documentElement,!e)throw Error(v(452));return e;case"head":if(e=t.head,!e)throw Error(v(453));return e;case"body":if(e=t.body,!e)throw Error(v(454));return e;default:throw Error(v(451))}}function zf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mr(e)}var dr=new Map,Vm=new Set;function Zd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ao=J.d;J.d={f:rE,r:iE,D:oE,C:cE,L:uE,m:sE,X:dE,S:fE,M:hE};function rE(){var e=Ao.f(),t=Bd();return e||t}function iE(e){var t=ii(e);t!==null&&t.tag===5&&t.type==="form"?hs(t):Ao.r(e)}var Ms=typeof document>"u"?null:document;function Qm(e,t,n){var l=Ms;if(l&&typeof t=="string"&&t){var u=Kn(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Vm.has(u)||(Vm.add(u),e={rel:e,crossOrigin:n,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),_l(t,"link",e),dn(t),l.head.appendChild(t)))}}function oE(e){Ao.D(e),Qm("dns-prefetch",e,null)}function cE(e,t){Ao.C(e,t),Qm("preconnect",e,t)}function uE(e,t,n){Ao.L(e,t,n);var l=Ms;if(l&&e&&t){var u='link[rel="preload"][as="'+Kn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Kn(n.imageSizes)+'"]')):u+='[href="'+Kn(e)+'"]';var d=u;switch(t){case"style":d=Os(e);break;case"script":d=zs(e)}dr.has(d)||(e=L({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),dr.set(d,e),l.querySelector(u)!==null||t==="style"&&l.querySelector(Df(d))||t==="script"&&l.querySelector(kf(d))||(t=l.createElement("link"),_l(t,"link",e),dn(t),l.head.appendChild(t)))}}function sE(e,t){Ao.m(e,t);var n=Ms;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Kn(l)+'"][href="'+Kn(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=zs(e)}if(!dr.has(d)&&(e=L({rel:"modulepreload",href:e},t),dr.set(d,e),n.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kf(d)))return}l=n.createElement("link"),_l(l,"link",e),dn(l),n.head.appendChild(l)}}}function fE(e,t,n){Ao.S(e,t,n);var l=Ms;if(l&&e){var u=pr(l).hoistableStyles,d=Os(e);t=t||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=l.querySelector(Df(d)))A.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},n),(n=dr.get(d))&&zv(e,n);var F=x=l.createElement("link");dn(F),_l(F,"link",e),F._p=new Promise(function(q,ue){F.onload=q,F.onerror=ue}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Vd(x,t,l)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function dE(e,t){Ao.X(e,t);var n=Ms;if(n&&e){var l=pr(n).hoistableScripts,u=zs(e),d=l.get(u);d||(d=n.querySelector(kf(u)),d||(e=L({src:e,async:!0},t),(t=dr.get(u))&&Dv(e,t),d=n.createElement("script"),dn(d),_l(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function hE(e,t){Ao.M(e,t);var n=Ms;if(n&&e){var l=pr(n).hoistableScripts,u=zs(e),d=l.get(u);d||(d=n.querySelector(kf(u)),d||(e=L({src:e,async:!0,type:"module"},t),(t=dr.get(u))&&Dv(e,t),d=n.createElement("script"),dn(d),_l(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function Wm(e,t,n,l){var u=(u=_e.current)?Zd(u):null;if(!u)throw Error(v(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Os(n.href),n=pr(u).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Os(n.href);var d=pr(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(Df(e)))&&!d._p&&(x.instance=d,x.state.loading=5),dr.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},dr.set(e,n),d||vE(u,e,n,x.state))),t&&l===null)throw Error(v(528,""));return x}if(t&&l!==null)throw Error(v(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zs(n),n=pr(u).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,e))}}function Os(e){return'href="'+Kn(e)+'"'}function Df(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function vE(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_l(t,"link",n),dn(t),e.head.appendChild(t))}function zs(e){return'[src="'+Kn(e)+'"]'}function kf(e){return"script[async]"+e}function Km(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(l)return t.instance=l,dn(l),l;var u=L({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dn(l),_l(l,"style",u),Vd(l,n.precedence,e),t.instance=l;case"stylesheet":u=Os(n.href);var d=e.querySelector(Df(u));if(d)return t.state.loading|=4,t.instance=d,dn(d),d;l=Jm(n),(u=dr.get(u))&&zv(l,u),d=(e.ownerDocument||e).createElement("link"),dn(d);var x=d;return x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),_l(d,"link",l),t.state.loading|=4,Vd(d,n.precedence,e),t.instance=d;case"script":return d=zs(n.src),(u=e.querySelector(kf(d)))?(t.instance=u,dn(u),u):(l=n,(u=dr.get(d))&&(l=L({},n),Dv(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),_l(u,"link",l),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(v(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Vd(l,n.precedence,e));return t.instance}function Vd(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,x=0;x<l.length;x++){var A=l[x];if(A.dataset.precedence===t)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zv(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dv(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qd=null;function jm(e,t,n){if(Qd===null){var l=new Map,u=Qd=new Map;u.set(n,l)}else u=Qd,l=u.get(n),l||(l=new Map,u.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var d=n[u];if(!(d[St]||d[mn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(t)||"";x=e+x;var A=l.get(x);A?A.push(d):l.set(x,[d])}}return l}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function gE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $m(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bE(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Os(l.href),d=t.querySelector(Df(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wd.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,dn(d);return}d=t.ownerDocument||t,l=Jm(l),(u=dr.get(u))&&zv(l,u),d=d.createElement("link"),dn(d);var x=d;x._p=new Promise(function(A,F){x.onload=A,x.onerror=F}),_l(d,"link",l),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Wd.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var kv=0;function mE(e,t){return e.stylesheets&&e.count===0&&Kd(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Kd(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&kv===0&&(kv=62500*jS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kd(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>kv?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Wd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jd=null;function Kd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jd=new Map,t.forEach(yE,e),Jd=null,Wd.call(e))}function yE(e,t){if(!(t.state.loading&4)){var n=Jd.get(e);if(n)var l=n.get(null);else{n=new Map,Jd.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(n.set(x.dataset.precedence,x),l=x)}l&&n.set(null,l)}u=t.instance,x=u.getAttribute("data-precedence"),d=n.get(x)||l,d===l&&n.set(null,u),n.set(x,u),this.count++,l=Wd.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Nf={$$typeof:de,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function pE(e,t,n,l,u,d,x,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function ey(e,t,n,l,u,d,x,A,F,q,ue,ge){return e=new pE(e,t,n,x,F,q,ue,ge,A),t=1,d===!0&&(t|=24),d=kt(3,null,null,t),e.current=d,d.stateNode=e,t=bc(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:l,isDehydrated:n,cache:t},jl(d),e}function ty(e){return e?(e=ot,e):ot}function ny(e,t,n,l,u,d){u=ty(u),l.context===null?l.context=u:l.pendingContext=u,l=gl(t),l.payload={element:n},d=d===void 0?null:d,d!==null&&(l.callback=d),n=Xn(e,l,t),n!==null&&(va(n,e,t),Bl(n,e,t))}function ly(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nv(e,t){ly(e,t),(e=e.alternate)&&ly(e,t)}function ay(e){if(e.tag===13||e.tag===31){var t=xt(e,67108864);t!==null&&va(t,e,67108864),Nv(e,67108864)}}function ry(e){if(e.tag===13||e.tag===31){var t=Wa();t=sl(t);var n=xt(e,t);n!==null&&va(n,e,t),Nv(e,t)}}var jd=!0;function xE(e,t,n,l){var u=D.T;D.T=null;var d=J.p;try{J.p=2,Lv(e,t,n,l)}finally{J.p=d,D.T=u}}function wE(e,t,n,l){var u=D.T;D.T=null;var d=J.p;try{J.p=8,Lv(e,t,n,l)}finally{J.p=d,D.T=u}}function Lv(e,t,n,l){if(jd){var u=Bv(l);if(u===null)wv(e,t,l,qd,n),oy(e,l);else if(EE(u,e,t,n,l))l.stopPropagation();else if(oy(e,l),t&4&&-1<SE.indexOf(e)){for(;u!==null;){var d=ii(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=ya(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var F=1<<31-Bn(x);A.entanglements[1]|=F,x&=~F}Ui(d),(zt&6)===0&&(Nd=cl()+500,_f(0))}}break;case 31:case 13:A=xt(d,2),A!==null&&va(A,d,2),Bd(),Nv(d,2)}if(d=Bv(l),d===null&&wv(e,t,l,qd,n),d===u)break;u=d}u!==null&&l.stopPropagation()}else wv(e,t,l,null,n)}}function Bv(e){return e=fi(e),Hv(e)}var qd=null;function Hv(e){if(qd=null,e=yn(e),e!==null){var t=S(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E(t),e!==null)return e;e=null}else if(n===31){if(e=T(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qd=e,null}function iy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case ul:return 2;case qu:return 8;case ti:case Cn:return 32;case Po:return 268435456;default:return 32}default:return 32}}var Uv=!1,Ic=null,Zc=null,Vc=null,Lf=new Map,Bf=new Map,Qc=[],SE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(e,t){switch(e){case"focusin":case"focusout":Ic=null;break;case"dragenter":case"dragleave":Zc=null;break;case"mouseover":case"mouseout":Vc=null;break;case"pointerover":case"pointerout":Lf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bf.delete(t.pointerId)}}function Hf(e,t,n,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},t!==null&&(t=ii(t),t!==null&&ay(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function EE(e,t,n,l,u){switch(t){case"focusin":return Ic=Hf(Ic,e,t,n,l,u),!0;case"dragenter":return Zc=Hf(Zc,e,t,n,l,u),!0;case"mouseover":return Vc=Hf(Vc,e,t,n,l,u),!0;case"pointerover":var d=u.pointerId;return Lf.set(d,Hf(Lf.get(d)||null,e,t,n,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Bf.set(d,Hf(Bf.get(d)||null,e,t,n,l,u)),!0}return!1}function cy(e){var t=yn(e.target);if(t!==null){var n=S(t);if(n!==null){if(t=n.tag,t===13){if(t=E(n),t!==null){e.blockedOn=t,fl(e.priority,function(){ry(n)});return}}else if(t===31){if(t=T(n),t!==null){e.blockedOn=t,fl(e.priority,function(){ry(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $d(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bv(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);si=l,n.target.dispatchEvent(l),si=null}else return t=ii(n),t!==null&&ay(t),e.blockedOn=n,!1;t.shift()}return!0}function uy(e,t,n){$d(e)&&n.delete(t)}function CE(){Uv=!1,Ic!==null&&$d(Ic)&&(Ic=null),Zc!==null&&$d(Zc)&&(Zc=null),Vc!==null&&$d(Vc)&&(Vc=null),Lf.forEach(uy),Bf.forEach(uy)}function eh(e,t){e.blockedOn===t&&(e.blockedOn=null,Uv||(Uv=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,CE)))}var th=null;function sy(e){th!==e&&(th=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){th===e&&(th=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],u=e[t+2];if(typeof l!="function"){if(Hv(l||n)===null)continue;break}var d=ii(n);d!==null&&(e.splice(t,3),t-=3,_c(d,{pending:!0,data:u,method:n.method,action:l},l,u))}}))}function Ds(e){function t(F){return eh(F,e)}Ic!==null&&eh(Ic,e),Zc!==null&&eh(Zc,e),Vc!==null&&eh(Vc,e),Lf.forEach(t),Bf.forEach(t);for(var n=0;n<Qc.length;n++){var l=Qc[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Qc.length&&(n=Qc[0],n.blockedOn===null);)cy(n),n.blockedOn===null&&Qc.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var u=n[l],d=n[l+1],x=u[Wn]||null;if(typeof d=="function")x||sy(n);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Wn]||null)A=x.formAction;else if(Hv(u)!==null)continue}else A=x.action;typeof A=="function"?n[l+1]=A:(n.splice(l,3),l-=3),sy(n)}}}function fy(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Fv(e){this._internalRoot=e}nh.prototype.render=Fv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));var n=t.current,l=Wa();ny(n,l,e,t,null,null)},nh.prototype.unmount=Fv.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ny(e.current,2,null,e,null,null),Bd(),t[qa]=null}};function nh(e){this._internalRoot=e}nh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qc.length&&t!==0&&t<Qc[n].priority;n++);Qc.splice(n,0,e),n===0&&cy(e)}};var dy=s.version;if(dy!=="19.2.4")throw Error(v(527,dy,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=R(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var TE={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lh.isDisabled&&lh.supportsFiber)try{ja=lh.inject(TE),gn=lh}catch{}}return Ls.createRoot=function(e,t){if(!p(e))throw Error(v(299));var n=!1,l="",u=hf,d=Li,x=vf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=ey(e,1,!1,null,null,n,l,null,u,d,x,fy),e[qa]=t.current,xv(e),new Fv(t)},Ls.hydrateRoot=function(e,t,n){if(!p(e))throw Error(v(299));var l=!1,u="",d=hf,x=Li,A=vf,F=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(x=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.formState!==void 0&&(F=n.formState)),t=ey(e,1,!0,t,n??null,l,u,F,d,x,A,fy),t.context=ty(null),n=t.current,l=Wa(),l=sl(l),u=gl(l),u.callback=null,Xn(n,u,l),n=l,t.current.lanes=n,Zi(t,n),Ui(t),e[qa]=t.current,xv(e),new nh(t)},Ls.version="19.2.4",Ls}var jv;function wy(){if(jv)return ih.exports;jv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),ih.exports=xy(),ih.exports}var Sy=wy();function an(a,s,{checkForDefaultPrevented:f=!0}={}){return function(p){if(a?.(p),f===!1||!p.defaultPrevented)return s?.(p)}}function qv(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function $v(...a){return s=>{let f=!1;const v=a.map(p=>{const S=qv(p,s);return!f&&typeof S=="function"&&(f=!0),S});if(f)return()=>{for(let p=0;p<v.length;p++){const S=v[p];typeof S=="function"?S():qv(a[p],null)}}}}function yl(...a){return H.useCallback($v(...a),a)}function Fu(a,s=[]){let f=[];function v(S,E){const T=H.createContext(E),O=f.length;f=[...f,E];const R=L=>{const{scope:U,children:V,...K}=L,Z=U?.[a]?.[O]||T,$=H.useMemo(()=>K,Object.values(K));return Y.jsx(Z.Provider,{value:$,children:V})};R.displayName=S+"Provider";function k(L,U){const V=U?.[a]?.[O]||T,K=H.useContext(V);if(K)return K;if(E!==void 0)return E;throw new Error(`\`${L}\` must be used within \`${S}\``)}return[R,k]}const p=()=>{const S=f.map(E=>H.createContext(E));return function(T){const O=T?.[a]||S;return H.useMemo(()=>({[`__scope${a}`]:{...T,[a]:O}}),[T,O])}};return p.scopeName=a,[v,Ey(p,...s)]}function Ey(...a){const s=a[0];if(a.length===1)return s;const f=()=>{const v=a.map(p=>({useScope:p(),scopeName:p.scopeName}));return function(S){const E=v.reduce((T,{useScope:O,scopeName:R})=>{const L=O(S)[`__scope${R}`];return{...T,...L}},{});return H.useMemo(()=>({[`__scope${s.scopeName}`]:E}),[E])}};return f.scopeName=s.scopeName,f}var Ff=Uf();const Cy=Yv(Ff);function Yf(a){const s=Ty(a),f=H.forwardRef((v,p)=>{const{children:S,...E}=v,T=H.Children.toArray(S),O=T.find(Ay);if(O){const R=O.props.children,k=T.map(L=>L===O?H.Children.count(R)>1?H.Children.only(null):H.isValidElement(R)?R.props.children:null:L);return Y.jsx(s,{...E,ref:p,children:H.isValidElement(R)?H.cloneElement(R,void 0,k):null})}return Y.jsx(s,{...E,ref:p,children:S})});return f.displayName=`${a}.Slot`,f}function Ty(a){const s=H.forwardRef((f,v)=>{const{children:p,...S}=f;if(H.isValidElement(p)){const E=My(p),T=_y(S,p.props);return p.type!==H.Fragment&&(T.ref=v?$v(v,E):E),H.cloneElement(p,T)}return H.Children.count(p)>1?H.Children.only(null):null});return s.displayName=`${a}.SlotClone`,s}var Ry=Symbol("radix.slottable");function Ay(a){return H.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===Ry}function _y(a,s){const f={...s};for(const v in s){const p=a[v],S=s[v];/^on[A-Z]/.test(v)?p&&S?f[v]=(...T)=>{const O=S(...T);return p(...T),O}:p&&(f[v]=p):v==="style"?f[v]={...p,...S}:v==="className"&&(f[v]=[p,S].filter(Boolean).join(" "))}return{...a,...f}}function My(a){let s=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,f=s&&"isReactWarning"in s&&s.isReactWarning;return f?a.ref:(s=Object.getOwnPropertyDescriptor(a,"ref")?.get,f=s&&"isReactWarning"in s&&s.isReactWarning,f?a.props.ref:a.props.ref||a.ref)}var Oy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ln=Oy.reduce((a,s)=>{const f=Yf(`Primitive.${s}`),v=H.forwardRef((p,S)=>{const{asChild:E,...T}=p,O=E?f:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),Y.jsx(O,{...T,ref:S})});return v.displayName=`Primitive.${s}`,{...a,[s]:v}},{});function zy(a,s){a&&Ff.flushSync(()=>a.dispatchEvent(s))}function $l(a){const s=H.useRef(a);return H.useEffect(()=>{s.current=a}),H.useMemo(()=>(...f)=>s.current?.(...f),[])}function Dy(a,s=globalThis?.document){const f=$l(a);H.useEffect(()=>{const v=p=>{p.key==="Escape"&&f(p)};return s.addEventListener("keydown",v,{capture:!0}),()=>s.removeEventListener("keydown",v,{capture:!0})},[f,s])}var ky="DismissableLayer",sh="dismissableLayer.update",Ny="dismissableLayer.pointerDownOutside",Ly="dismissableLayer.focusOutside",eg,tg=H.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ng=H.forwardRef((a,s)=>{const{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:v,onPointerDownOutside:p,onFocusOutside:S,onInteractOutside:E,onDismiss:T,...O}=a,R=H.useContext(tg),[k,L]=H.useState(null),U=k?.ownerDocument??globalThis?.document,[,V]=H.useState({}),K=yl(s,be=>L(be)),Z=Array.from(R.layers),[$]=[...R.layersWithOutsidePointerEventsDisabled].slice(-1),oe=Z.indexOf($),me=k?Z.indexOf(k):-1,de=R.layersWithOutsidePointerEventsDisabled.size>0,ve=me>=oe,Te=Uy(be=>{const ce=be.target,ye=[...R.branches].some(He=>He.contains(ce));!ve||ye||(p?.(be),E?.(be),be.defaultPrevented||T?.())},U),Ee=Fy(be=>{const ce=be.target;[...R.branches].some(He=>He.contains(ce))||(S?.(be),E?.(be),be.defaultPrevented||T?.())},U);return Dy(be=>{me===R.layers.size-1&&(v?.(be),!be.defaultPrevented&&T&&(be.preventDefault(),T()))},U),H.useEffect(()=>{if(k)return f&&(R.layersWithOutsidePointerEventsDisabled.size===0&&(eg=U.body.style.pointerEvents,U.body.style.pointerEvents="none"),R.layersWithOutsidePointerEventsDisabled.add(k)),R.layers.add(k),lg(),()=>{f&&R.layersWithOutsidePointerEventsDisabled.size===1&&(U.body.style.pointerEvents=eg)}},[k,U,f,R]),H.useEffect(()=>()=>{k&&(R.layers.delete(k),R.layersWithOutsidePointerEventsDisabled.delete(k),lg())},[k,R]),H.useEffect(()=>{const be=()=>V({});return document.addEventListener(sh,be),()=>document.removeEventListener(sh,be)},[]),Y.jsx(Ln.div,{...O,ref:K,style:{pointerEvents:de?ve?"auto":"none":void 0,...a.style},onFocusCapture:an(a.onFocusCapture,Ee.onFocusCapture),onBlurCapture:an(a.onBlurCapture,Ee.onBlurCapture),onPointerDownCapture:an(a.onPointerDownCapture,Te.onPointerDownCapture)})});ng.displayName=ky;var By="DismissableLayerBranch",Hy=H.forwardRef((a,s)=>{const f=H.useContext(tg),v=H.useRef(null),p=yl(s,v);return H.useEffect(()=>{const S=v.current;if(S)return f.branches.add(S),()=>{f.branches.delete(S)}},[f.branches]),Y.jsx(Ln.div,{...a,ref:p})});Hy.displayName=By;function Uy(a,s=globalThis?.document){const f=$l(a),v=H.useRef(!1),p=H.useRef(()=>{});return H.useEffect(()=>{const S=T=>{if(T.target&&!v.current){let O=function(){ag(Ny,f,R,{discrete:!0})};const R={originalEvent:T};T.pointerType==="touch"?(s.removeEventListener("click",p.current),p.current=O,s.addEventListener("click",p.current,{once:!0})):O()}else s.removeEventListener("click",p.current);v.current=!1},E=window.setTimeout(()=>{s.addEventListener("pointerdown",S)},0);return()=>{window.clearTimeout(E),s.removeEventListener("pointerdown",S),s.removeEventListener("click",p.current)}},[s,f]),{onPointerDownCapture:()=>v.current=!0}}function Fy(a,s=globalThis?.document){const f=$l(a),v=H.useRef(!1);return H.useEffect(()=>{const p=S=>{S.target&&!v.current&&ag(Ly,f,{originalEvent:S},{discrete:!1})};return s.addEventListener("focusin",p),()=>s.removeEventListener("focusin",p)},[s,f]),{onFocusCapture:()=>v.current=!0,onBlurCapture:()=>v.current=!1}}function lg(){const a=new CustomEvent(sh);document.dispatchEvent(a)}function ag(a,s,f,{discrete:v}){const p=f.originalEvent.target,S=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:f});s&&p.addEventListener(a,s,{once:!0}),v?zy(p,S):p.dispatchEvent(S)}var fh=0;function Yy(){H.useEffect(()=>{const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",a[0]??rg()),document.body.insertAdjacentElement("beforeend",a[1]??rg()),fh++,()=>{fh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(s=>s.remove()),fh--}},[])}function rg(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.outline="none",a.style.opacity="0",a.style.position="fixed",a.style.pointerEvents="none",a}var dh="focusScope.autoFocusOnMount",hh="focusScope.autoFocusOnUnmount",ig={bubbles:!1,cancelable:!0},Py="FocusScope",og=H.forwardRef((a,s)=>{const{loop:f=!1,trapped:v=!1,onMountAutoFocus:p,onUnmountAutoFocus:S,...E}=a,[T,O]=H.useState(null),R=$l(p),k=$l(S),L=H.useRef(null),U=yl(s,Z=>O(Z)),V=H.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;H.useEffect(()=>{if(v){let Z=function(de){if(V.paused||!T)return;const ve=de.target;T.contains(ve)?L.current=ve:Mo(L.current,{select:!0})},$=function(de){if(V.paused||!T)return;const ve=de.relatedTarget;ve!==null&&(T.contains(ve)||Mo(L.current,{select:!0}))},oe=function(de){if(document.activeElement===document.body)for(const Te of de)Te.removedNodes.length>0&&Mo(T)};document.addEventListener("focusin",Z),document.addEventListener("focusout",$);const me=new MutationObserver(oe);return T&&me.observe(T,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",Z),document.removeEventListener("focusout",$),me.disconnect()}}},[v,T,V.paused]),H.useEffect(()=>{if(T){sg.add(V);const Z=document.activeElement;if(!T.contains(Z)){const oe=new CustomEvent(dh,ig);T.addEventListener(dh,R),T.dispatchEvent(oe),oe.defaultPrevented||(Gy(Qy(cg(T)),{select:!0}),document.activeElement===Z&&Mo(T))}return()=>{T.removeEventListener(dh,R),setTimeout(()=>{const oe=new CustomEvent(hh,ig);T.addEventListener(hh,k),T.dispatchEvent(oe),oe.defaultPrevented||Mo(Z??document.body,{select:!0}),T.removeEventListener(hh,k),sg.remove(V)},0)}}},[T,R,k,V]);const K=H.useCallback(Z=>{if(!f&&!v||V.paused)return;const $=Z.key==="Tab"&&!Z.altKey&&!Z.ctrlKey&&!Z.metaKey,oe=document.activeElement;if($&&oe){const me=Z.currentTarget,[de,ve]=Xy(me);de&&ve?!Z.shiftKey&&oe===ve?(Z.preventDefault(),f&&Mo(de,{select:!0})):Z.shiftKey&&oe===de&&(Z.preventDefault(),f&&Mo(ve,{select:!0})):oe===me&&Z.preventDefault()}},[f,v,V.paused]);return Y.jsx(Ln.div,{tabIndex:-1,...E,ref:U,onKeyDown:K})});og.displayName=Py;function Gy(a,{select:s=!1}={}){const f=document.activeElement;for(const v of a)if(Mo(v,{select:s}),document.activeElement!==f)return}function Xy(a){const s=cg(a),f=ug(s,a),v=ug(s.reverse(),a);return[f,v]}function cg(a){const s=[],f=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:v=>{const p=v.tagName==="INPUT"&&v.type==="hidden";return v.disabled||v.hidden||p?NodeFilter.FILTER_SKIP:v.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;f.nextNode();)s.push(f.currentNode);return s}function ug(a,s){for(const f of a)if(!Iy(f,{upTo:s}))return f}function Iy(a,{upTo:s}){if(getComputedStyle(a).visibility==="hidden")return!0;for(;a;){if(s!==void 0&&a===s)return!1;if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}function Zy(a){return a instanceof HTMLInputElement&&"select"in a}function Mo(a,{select:s=!1}={}){if(a&&a.focus){const f=document.activeElement;a.focus({preventScroll:!0}),a!==f&&Zy(a)&&s&&a.select()}}var sg=Vy();function Vy(){let a=[];return{add(s){const f=a[0];s!==f&&f?.pause(),a=fg(a,s),a.unshift(s)},remove(s){a=fg(a,s),a[0]?.resume()}}}function fg(a,s){const f=[...a],v=f.indexOf(s);return v!==-1&&f.splice(v,1),f}function Qy(a){return a.filter(s=>s.tagName!=="A")}var Fi=globalThis?.document?H.useLayoutEffect:()=>{},Wy=Zv[" useId ".trim().toString()]||(()=>{}),Jy=0;function vh(a){const[s,f]=H.useState(Wy());return Fi(()=>{f(v=>v??String(Jy++))},[a]),a||(s?`radix-${s}`:"")}const Ky=["top","right","bottom","left"],Oo=Math.min,ga=Math.max,Pf=Math.round,Gf=Math.floor,Qr=a=>({x:a,y:a}),jy={left:"right",right:"left",bottom:"top",top:"bottom"};function gh(a,s,f){return ga(a,Oo(s,f))}function Yi(a,s){return typeof a=="function"?a(s):a}function Pi(a){return a.split("-")[0]}function Yu(a){return a.split("-")[1]}function bh(a){return a==="x"?"y":"x"}function mh(a){return a==="y"?"height":"width"}function Wr(a){const s=a[0];return s==="t"||s==="b"?"y":"x"}function yh(a){return bh(Wr(a))}function qy(a,s,f){f===void 0&&(f=!1);const v=Yu(a),p=yh(a),S=mh(p);let E=p==="x"?v===(f?"end":"start")?"right":"left":v==="start"?"bottom":"top";return s.reference[S]>s.floating[S]&&(E=Xf(E)),[E,Xf(E)]}function $y(a){const s=Xf(a);return[ph(a),s,ph(s)]}function ph(a){return a.includes("start")?a.replace("start","end"):a.replace("end","start")}const dg=["left","right"],hg=["right","left"],ep=["top","bottom"],tp=["bottom","top"];function np(a,s,f){switch(a){case"top":case"bottom":return f?s?hg:dg:s?dg:hg;case"left":case"right":return s?ep:tp;default:return[]}}function lp(a,s,f,v){const p=Yu(a);let S=np(Pi(a),f==="start",v);return p&&(S=S.map(E=>E+"-"+p),s&&(S=S.concat(S.map(ph)))),S}function Xf(a){const s=Pi(a);return jy[s]+a.slice(s.length)}function ap(a){return{top:0,right:0,bottom:0,left:0,...a}}function vg(a){return typeof a!="number"?ap(a):{top:a,right:a,bottom:a,left:a}}function If(a){const{x:s,y:f,width:v,height:p}=a;return{width:v,height:p,top:f,left:s,right:s+v,bottom:f+p,x:s,y:f}}function gg(a,s,f){let{reference:v,floating:p}=a;const S=Wr(s),E=yh(s),T=mh(E),O=Pi(s),R=S==="y",k=v.x+v.width/2-p.width/2,L=v.y+v.height/2-p.height/2,U=v[T]/2-p[T]/2;let V;switch(O){case"top":V={x:k,y:v.y-p.height};break;case"bottom":V={x:k,y:v.y+v.height};break;case"right":V={x:v.x+v.width,y:L};break;case"left":V={x:v.x-p.width,y:L};break;default:V={x:v.x,y:v.y}}switch(Yu(s)){case"start":V[E]-=U*(f&&R?-1:1);break;case"end":V[E]+=U*(f&&R?-1:1);break}return V}async function rp(a,s){var f;s===void 0&&(s={});const{x:v,y:p,platform:S,rects:E,elements:T,strategy:O}=a,{boundary:R="clippingAncestors",rootBoundary:k="viewport",elementContext:L="floating",altBoundary:U=!1,padding:V=0}=Yi(s,a),K=vg(V),$=T[U?L==="floating"?"reference":"floating":L],oe=If(await S.getClippingRect({element:(f=await(S.isElement==null?void 0:S.isElement($)))==null||f?$:$.contextElement||await(S.getDocumentElement==null?void 0:S.getDocumentElement(T.floating)),boundary:R,rootBoundary:k,strategy:O})),me=L==="floating"?{x:v,y:p,width:E.floating.width,height:E.floating.height}:E.reference,de=await(S.getOffsetParent==null?void 0:S.getOffsetParent(T.floating)),ve=await(S.isElement==null?void 0:S.isElement(de))?await(S.getScale==null?void 0:S.getScale(de))||{x:1,y:1}:{x:1,y:1},Te=If(S.convertOffsetParentRelativeRectToViewportRelativeRect?await S.convertOffsetParentRelativeRectToViewportRelativeRect({elements:T,rect:me,offsetParent:de,strategy:O}):me);return{top:(oe.top-Te.top+K.top)/ve.y,bottom:(Te.bottom-oe.bottom+K.bottom)/ve.y,left:(oe.left-Te.left+K.left)/ve.x,right:(Te.right-oe.right+K.right)/ve.x}}const ip=50,op=async(a,s,f)=>{const{placement:v="bottom",strategy:p="absolute",middleware:S=[],platform:E}=f,T=E.detectOverflow?E:{...E,detectOverflow:rp},O=await(E.isRTL==null?void 0:E.isRTL(s));let R=await E.getElementRects({reference:a,floating:s,strategy:p}),{x:k,y:L}=gg(R,v,O),U=v,V=0;const K={};for(let Z=0;Z<S.length;Z++){const $=S[Z];if(!$)continue;const{name:oe,fn:me}=$,{x:de,y:ve,data:Te,reset:Ee}=await me({x:k,y:L,initialPlacement:v,placement:U,strategy:p,middlewareData:K,rects:R,platform:T,elements:{reference:a,floating:s}});k=de??k,L=ve??L,K[oe]={...K[oe],...Te},Ee&&V<ip&&(V++,typeof Ee=="object"&&(Ee.placement&&(U=Ee.placement),Ee.rects&&(R=Ee.rects===!0?await E.getElementRects({reference:a,floating:s,strategy:p}):Ee.rects),{x:k,y:L}=gg(R,U,O)),Z=-1)}return{x:k,y:L,placement:U,strategy:p,middlewareData:K}},cp=a=>({name:"arrow",options:a,async fn(s){const{x:f,y:v,placement:p,rects:S,platform:E,elements:T,middlewareData:O}=s,{element:R,padding:k=0}=Yi(a,s)||{};if(R==null)return{};const L=vg(k),U={x:f,y:v},V=yh(p),K=mh(V),Z=await E.getDimensions(R),$=V==="y",oe=$?"top":"left",me=$?"bottom":"right",de=$?"clientHeight":"clientWidth",ve=S.reference[K]+S.reference[V]-U[V]-S.floating[K],Te=U[V]-S.reference[V],Ee=await(E.getOffsetParent==null?void 0:E.getOffsetParent(R));let be=Ee?Ee[de]:0;(!be||!await(E.isElement==null?void 0:E.isElement(Ee)))&&(be=T.floating[de]||S.floating[K]);const ce=ve/2-Te/2,ye=be/2-Z[K]/2-1,He=Oo(L[oe],ye),Ze=Oo(L[me],ye),$e=He,st=be-Z[K]-Ze,Ge=be/2-Z[K]/2+ce,Ve=gh($e,Ge,st),D=!O.arrow&&Yu(p)!=null&&Ge!==Ve&&S.reference[K]/2-(Ge<$e?He:Ze)-Z[K]/2<0,J=D?Ge<$e?Ge-$e:Ge-st:0;return{[V]:U[V]+J,data:{[V]:Ve,centerOffset:Ge-Ve-J,...D&&{alignmentOffset:J}},reset:D}}}),up=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(s){var f,v;const{placement:p,middlewareData:S,rects:E,initialPlacement:T,platform:O,elements:R}=s,{mainAxis:k=!0,crossAxis:L=!0,fallbackPlacements:U,fallbackStrategy:V="bestFit",fallbackAxisSideDirection:K="none",flipAlignment:Z=!0,...$}=Yi(a,s);if((f=S.arrow)!=null&&f.alignmentOffset)return{};const oe=Pi(p),me=Wr(T),de=Pi(T)===T,ve=await(O.isRTL==null?void 0:O.isRTL(R.floating)),Te=U||(de||!Z?[Xf(T)]:$y(T)),Ee=K!=="none";!U&&Ee&&Te.push(...lp(T,Z,K,ve));const be=[T,...Te],ce=await O.detectOverflow(s,$),ye=[];let He=((v=S.flip)==null?void 0:v.overflows)||[];if(k&&ye.push(ce[oe]),L){const Ge=qy(p,E,ve);ye.push(ce[Ge[0]],ce[Ge[1]])}if(He=[...He,{placement:p,overflows:ye}],!ye.every(Ge=>Ge<=0)){var Ze,$e;const Ge=(((Ze=S.flip)==null?void 0:Ze.index)||0)+1,Ve=be[Ge];if(Ve&&(!(L==="alignment"?me!==Wr(Ve):!1)||He.every(we=>Wr(we.placement)===me?we.overflows[0]>0:!0)))return{data:{index:Ge,overflows:He},reset:{placement:Ve}};let D=($e=He.filter(J=>J.overflows[0]<=0).sort((J,we)=>J.overflows[1]-we.overflows[1])[0])==null?void 0:$e.placement;if(!D)switch(V){case"bestFit":{var st;const J=(st=He.filter(we=>{if(Ee){const Pe=Wr(we.placement);return Pe===me||Pe==="y"}return!0}).map(we=>[we.placement,we.overflows.filter(Pe=>Pe>0).reduce((Pe,W)=>Pe+W,0)]).sort((we,Pe)=>we[1]-Pe[1])[0])==null?void 0:st[0];J&&(D=J);break}case"initialPlacement":D=T;break}if(p!==D)return{reset:{placement:D}}}return{}}}};function bg(a,s){return{top:a.top-s.height,right:a.right-s.width,bottom:a.bottom-s.height,left:a.left-s.width}}function mg(a){return Ky.some(s=>a[s]>=0)}const sp=function(a){return a===void 0&&(a={}),{name:"hide",options:a,async fn(s){const{rects:f,platform:v}=s,{strategy:p="referenceHidden",...S}=Yi(a,s);switch(p){case"referenceHidden":{const E=await v.detectOverflow(s,{...S,elementContext:"reference"}),T=bg(E,f.reference);return{data:{referenceHiddenOffsets:T,referenceHidden:mg(T)}}}case"escaped":{const E=await v.detectOverflow(s,{...S,altBoundary:!0}),T=bg(E,f.floating);return{data:{escapedOffsets:T,escaped:mg(T)}}}default:return{}}}}},yg=new Set(["left","top"]);async function fp(a,s){const{placement:f,platform:v,elements:p}=a,S=await(v.isRTL==null?void 0:v.isRTL(p.floating)),E=Pi(f),T=Yu(f),O=Wr(f)==="y",R=yg.has(E)?-1:1,k=S&&O?-1:1,L=Yi(s,a);let{mainAxis:U,crossAxis:V,alignmentAxis:K}=typeof L=="number"?{mainAxis:L,crossAxis:0,alignmentAxis:null}:{mainAxis:L.mainAxis||0,crossAxis:L.crossAxis||0,alignmentAxis:L.alignmentAxis};return T&&typeof K=="number"&&(V=T==="end"?K*-1:K),O?{x:V*k,y:U*R}:{x:U*R,y:V*k}}const dp=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(s){var f,v;const{x:p,y:S,placement:E,middlewareData:T}=s,O=await fp(s,a);return E===((f=T.offset)==null?void 0:f.placement)&&(v=T.arrow)!=null&&v.alignmentOffset?{}:{x:p+O.x,y:S+O.y,data:{...O,placement:E}}}}},hp=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(s){const{x:f,y:v,placement:p,platform:S}=s,{mainAxis:E=!0,crossAxis:T=!1,limiter:O={fn:oe=>{let{x:me,y:de}=oe;return{x:me,y:de}}},...R}=Yi(a,s),k={x:f,y:v},L=await S.detectOverflow(s,R),U=Wr(Pi(p)),V=bh(U);let K=k[V],Z=k[U];if(E){const oe=V==="y"?"top":"left",me=V==="y"?"bottom":"right",de=K+L[oe],ve=K-L[me];K=gh(de,K,ve)}if(T){const oe=U==="y"?"top":"left",me=U==="y"?"bottom":"right",de=Z+L[oe],ve=Z-L[me];Z=gh(de,Z,ve)}const $=O.fn({...s,[V]:K,[U]:Z});return{...$,data:{x:$.x-f,y:$.y-v,enabled:{[V]:E,[U]:T}}}}}},vp=function(a){return a===void 0&&(a={}),{options:a,fn(s){const{x:f,y:v,placement:p,rects:S,middlewareData:E}=s,{offset:T=0,mainAxis:O=!0,crossAxis:R=!0}=Yi(a,s),k={x:f,y:v},L=Wr(p),U=bh(L);let V=k[U],K=k[L];const Z=Yi(T,s),$=typeof Z=="number"?{mainAxis:Z,crossAxis:0}:{mainAxis:0,crossAxis:0,...Z};if(O){const de=U==="y"?"height":"width",ve=S.reference[U]-S.floating[de]+$.mainAxis,Te=S.reference[U]+S.reference[de]-$.mainAxis;V<ve?V=ve:V>Te&&(V=Te)}if(R){var oe,me;const de=U==="y"?"width":"height",ve=yg.has(Pi(p)),Te=S.reference[L]-S.floating[de]+(ve&&((oe=E.offset)==null?void 0:oe[L])||0)+(ve?0:$.crossAxis),Ee=S.reference[L]+S.reference[de]+(ve?0:((me=E.offset)==null?void 0:me[L])||0)-(ve?$.crossAxis:0);K<Te?K=Te:K>Ee&&(K=Ee)}return{[U]:V,[L]:K}}}},gp=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(s){var f,v;const{placement:p,rects:S,platform:E,elements:T}=s,{apply:O=()=>{},...R}=Yi(a,s),k=await E.detectOverflow(s,R),L=Pi(p),U=Yu(p),V=Wr(p)==="y",{width:K,height:Z}=S.floating;let $,oe;L==="top"||L==="bottom"?($=L,oe=U===(await(E.isRTL==null?void 0:E.isRTL(T.floating))?"start":"end")?"left":"right"):(oe=L,$=U==="end"?"top":"bottom");const me=Z-k.top-k.bottom,de=K-k.left-k.right,ve=Oo(Z-k[$],me),Te=Oo(K-k[oe],de),Ee=!s.middlewareData.shift;let be=ve,ce=Te;if((f=s.middlewareData.shift)!=null&&f.enabled.x&&(ce=de),(v=s.middlewareData.shift)!=null&&v.enabled.y&&(be=me),Ee&&!U){const He=ga(k.left,0),Ze=ga(k.right,0),$e=ga(k.top,0),st=ga(k.bottom,0);V?ce=K-2*(He!==0||Ze!==0?He+Ze:ga(k.left,k.right)):be=Z-2*($e!==0||st!==0?$e+st:ga(k.top,k.bottom))}await O({...s,availableWidth:ce,availableHeight:be});const ye=await E.getDimensions(T.floating);return K!==ye.width||Z!==ye.height?{reset:{rects:!0}}:{}}}};function Zf(){return typeof window<"u"}function Pu(a){return pg(a)?(a.nodeName||"").toLowerCase():"#document"}function ba(a){var s;return(a==null||(s=a.ownerDocument)==null?void 0:s.defaultView)||window}function Jr(a){var s;return(s=(pg(a)?a.ownerDocument:a.document)||window.document)==null?void 0:s.documentElement}function pg(a){return Zf()?a instanceof Node||a instanceof ba(a).Node:!1}function hr(a){return Zf()?a instanceof Element||a instanceof ba(a).Element:!1}function Gi(a){return Zf()?a instanceof HTMLElement||a instanceof ba(a).HTMLElement:!1}function xg(a){return!Zf()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof ba(a).ShadowRoot}function Bs(a){const{overflow:s,overflowX:f,overflowY:v,display:p}=vr(a);return/auto|scroll|overlay|hidden|clip/.test(s+v+f)&&p!=="inline"&&p!=="contents"}function bp(a){return/^(table|td|th)$/.test(Pu(a))}function Vf(a){try{if(a.matches(":popover-open"))return!0}catch{}try{return a.matches(":modal")}catch{return!1}}const mp=/transform|translate|scale|rotate|perspective|filter/,yp=/paint|layout|strict|content/,Jc=a=>!!a&&a!=="none";let xh;function wh(a){const s=hr(a)?vr(a):a;return Jc(s.transform)||Jc(s.translate)||Jc(s.scale)||Jc(s.rotate)||Jc(s.perspective)||!Sh()&&(Jc(s.backdropFilter)||Jc(s.filter))||mp.test(s.willChange||"")||yp.test(s.contain||"")}function pp(a){let s=zo(a);for(;Gi(s)&&!Gu(s);){if(wh(s))return s;if(Vf(s))return null;s=zo(s)}return null}function Sh(){return xh==null&&(xh=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),xh}function Gu(a){return/^(html|body|#document)$/.test(Pu(a))}function vr(a){return ba(a).getComputedStyle(a)}function Qf(a){return hr(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function zo(a){if(Pu(a)==="html")return a;const s=a.assignedSlot||a.parentNode||xg(a)&&a.host||Jr(a);return xg(s)?s.host:s}function wg(a){const s=zo(a);return Gu(s)?a.ownerDocument?a.ownerDocument.body:a.body:Gi(s)&&Bs(s)?s:wg(s)}function Hs(a,s,f){var v;s===void 0&&(s=[]),f===void 0&&(f=!0);const p=wg(a),S=p===((v=a.ownerDocument)==null?void 0:v.body),E=ba(p);if(S){const T=Eh(E);return s.concat(E,E.visualViewport||[],Bs(p)?p:[],T&&f?Hs(T):[])}else return s.concat(p,Hs(p,[],f))}function Eh(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function Sg(a){const s=vr(a);let f=parseFloat(s.width)||0,v=parseFloat(s.height)||0;const p=Gi(a),S=p?a.offsetWidth:f,E=p?a.offsetHeight:v,T=Pf(f)!==S||Pf(v)!==E;return T&&(f=S,v=E),{width:f,height:v,$:T}}function Ch(a){return hr(a)?a:a.contextElement}function Xu(a){const s=Ch(a);if(!Gi(s))return Qr(1);const f=s.getBoundingClientRect(),{width:v,height:p,$:S}=Sg(s);let E=(S?Pf(f.width):f.width)/v,T=(S?Pf(f.height):f.height)/p;return(!E||!Number.isFinite(E))&&(E=1),(!T||!Number.isFinite(T))&&(T=1),{x:E,y:T}}const xp=Qr(0);function Eg(a){const s=ba(a);return!Sh()||!s.visualViewport?xp:{x:s.visualViewport.offsetLeft,y:s.visualViewport.offsetTop}}function wp(a,s,f){return s===void 0&&(s=!1),!f||s&&f!==ba(a)?!1:s}function Kc(a,s,f,v){s===void 0&&(s=!1),f===void 0&&(f=!1);const p=a.getBoundingClientRect(),S=Ch(a);let E=Qr(1);s&&(v?hr(v)&&(E=Xu(v)):E=Xu(a));const T=wp(S,f,v)?Eg(S):Qr(0);let O=(p.left+T.x)/E.x,R=(p.top+T.y)/E.y,k=p.width/E.x,L=p.height/E.y;if(S){const U=ba(S),V=v&&hr(v)?ba(v):v;let K=U,Z=Eh(K);for(;Z&&v&&V!==K;){const $=Xu(Z),oe=Z.getBoundingClientRect(),me=vr(Z),de=oe.left+(Z.clientLeft+parseFloat(me.paddingLeft))*$.x,ve=oe.top+(Z.clientTop+parseFloat(me.paddingTop))*$.y;O*=$.x,R*=$.y,k*=$.x,L*=$.y,O+=de,R+=ve,K=ba(Z),Z=Eh(K)}}return If({width:k,height:L,x:O,y:R})}function Wf(a,s){const f=Qf(a).scrollLeft;return s?s.left+f:Kc(Jr(a)).left+f}function Cg(a,s){const f=a.getBoundingClientRect(),v=f.left+s.scrollLeft-Wf(a,f),p=f.top+s.scrollTop;return{x:v,y:p}}function Sp(a){let{elements:s,rect:f,offsetParent:v,strategy:p}=a;const S=p==="fixed",E=Jr(v),T=s?Vf(s.floating):!1;if(v===E||T&&S)return f;let O={scrollLeft:0,scrollTop:0},R=Qr(1);const k=Qr(0),L=Gi(v);if((L||!L&&!S)&&((Pu(v)!=="body"||Bs(E))&&(O=Qf(v)),L)){const V=Kc(v);R=Xu(v),k.x=V.x+v.clientLeft,k.y=V.y+v.clientTop}const U=E&&!L&&!S?Cg(E,O):Qr(0);return{width:f.width*R.x,height:f.height*R.y,x:f.x*R.x-O.scrollLeft*R.x+k.x+U.x,y:f.y*R.y-O.scrollTop*R.y+k.y+U.y}}function Ep(a){return Array.from(a.getClientRects())}function Cp(a){const s=Jr(a),f=Qf(a),v=a.ownerDocument.body,p=ga(s.scrollWidth,s.clientWidth,v.scrollWidth,v.clientWidth),S=ga(s.scrollHeight,s.clientHeight,v.scrollHeight,v.clientHeight);let E=-f.scrollLeft+Wf(a);const T=-f.scrollTop;return vr(v).direction==="rtl"&&(E+=ga(s.clientWidth,v.clientWidth)-p),{width:p,height:S,x:E,y:T}}const Tg=25;function Tp(a,s){const f=ba(a),v=Jr(a),p=f.visualViewport;let S=v.clientWidth,E=v.clientHeight,T=0,O=0;if(p){S=p.width,E=p.height;const k=Sh();(!k||k&&s==="fixed")&&(T=p.offsetLeft,O=p.offsetTop)}const R=Wf(v);if(R<=0){const k=v.ownerDocument,L=k.body,U=getComputedStyle(L),V=k.compatMode==="CSS1Compat"&&parseFloat(U.marginLeft)+parseFloat(U.marginRight)||0,K=Math.abs(v.clientWidth-L.clientWidth-V);K<=Tg&&(S-=K)}else R<=Tg&&(S+=R);return{width:S,height:E,x:T,y:O}}function Rp(a,s){const f=Kc(a,!0,s==="fixed"),v=f.top+a.clientTop,p=f.left+a.clientLeft,S=Gi(a)?Xu(a):Qr(1),E=a.clientWidth*S.x,T=a.clientHeight*S.y,O=p*S.x,R=v*S.y;return{width:E,height:T,x:O,y:R}}function Rg(a,s,f){let v;if(s==="viewport")v=Tp(a,f);else if(s==="document")v=Cp(Jr(a));else if(hr(s))v=Rp(s,f);else{const p=Eg(a);v={x:s.x-p.x,y:s.y-p.y,width:s.width,height:s.height}}return If(v)}function Ag(a,s){const f=zo(a);return f===s||!hr(f)||Gu(f)?!1:vr(f).position==="fixed"||Ag(f,s)}function Ap(a,s){const f=s.get(a);if(f)return f;let v=Hs(a,[],!1).filter(T=>hr(T)&&Pu(T)!=="body"),p=null;const S=vr(a).position==="fixed";let E=S?zo(a):a;for(;hr(E)&&!Gu(E);){const T=vr(E),O=wh(E);!O&&T.position==="fixed"&&(p=null),(S?!O&&!p:!O&&T.position==="static"&&!!p&&(p.position==="absolute"||p.position==="fixed")||Bs(E)&&!O&&Ag(a,E))?v=v.filter(k=>k!==E):p=T,E=zo(E)}return s.set(a,v),v}function _p(a){let{element:s,boundary:f,rootBoundary:v,strategy:p}=a;const E=[...f==="clippingAncestors"?Vf(s)?[]:Ap(s,this._c):[].concat(f),v],T=Rg(s,E[0],p);let O=T.top,R=T.right,k=T.bottom,L=T.left;for(let U=1;U<E.length;U++){const V=Rg(s,E[U],p);O=ga(V.top,O),R=Oo(V.right,R),k=Oo(V.bottom,k),L=ga(V.left,L)}return{width:R-L,height:k-O,x:L,y:O}}function Mp(a){const{width:s,height:f}=Sg(a);return{width:s,height:f}}function Op(a,s,f){const v=Gi(s),p=Jr(s),S=f==="fixed",E=Kc(a,!0,S,s);let T={scrollLeft:0,scrollTop:0};const O=Qr(0);function R(){O.x=Wf(p)}if(v||!v&&!S)if((Pu(s)!=="body"||Bs(p))&&(T=Qf(s)),v){const V=Kc(s,!0,S,s);O.x=V.x+s.clientLeft,O.y=V.y+s.clientTop}else p&&R();S&&!v&&p&&R();const k=p&&!v&&!S?Cg(p,T):Qr(0),L=E.left+T.scrollLeft-O.x-k.x,U=E.top+T.scrollTop-O.y-k.y;return{x:L,y:U,width:E.width,height:E.height}}function Th(a){return vr(a).position==="static"}function _g(a,s){if(!Gi(a)||vr(a).position==="fixed")return null;if(s)return s(a);let f=a.offsetParent;return Jr(a)===f&&(f=f.ownerDocument.body),f}function Mg(a,s){const f=ba(a);if(Vf(a))return f;if(!Gi(a)){let p=zo(a);for(;p&&!Gu(p);){if(hr(p)&&!Th(p))return p;p=zo(p)}return f}let v=_g(a,s);for(;v&&bp(v)&&Th(v);)v=_g(v,s);return v&&Gu(v)&&Th(v)&&!wh(v)?f:v||pp(a)||f}const zp=async function(a){const s=this.getOffsetParent||Mg,f=this.getDimensions,v=await f(a.floating);return{reference:Op(a.reference,await s(a.floating),a.strategy),floating:{x:0,y:0,width:v.width,height:v.height}}};function Dp(a){return vr(a).direction==="rtl"}const kp={convertOffsetParentRelativeRectToViewportRelativeRect:Sp,getDocumentElement:Jr,getClippingRect:_p,getOffsetParent:Mg,getElementRects:zp,getClientRects:Ep,getDimensions:Mp,getScale:Xu,isElement:hr,isRTL:Dp};function Og(a,s){return a.x===s.x&&a.y===s.y&&a.width===s.width&&a.height===s.height}function Np(a,s){let f=null,v;const p=Jr(a);function S(){var T;clearTimeout(v),(T=f)==null||T.disconnect(),f=null}function E(T,O){T===void 0&&(T=!1),O===void 0&&(O=1),S();const R=a.getBoundingClientRect(),{left:k,top:L,width:U,height:V}=R;if(T||s(),!U||!V)return;const K=Gf(L),Z=Gf(p.clientWidth-(k+U)),$=Gf(p.clientHeight-(L+V)),oe=Gf(k),de={rootMargin:-K+"px "+-Z+"px "+-$+"px "+-oe+"px",threshold:ga(0,Oo(1,O))||1};let ve=!0;function Te(Ee){const be=Ee[0].intersectionRatio;if(be!==O){if(!ve)return E();be?E(!1,be):v=setTimeout(()=>{E(!1,1e-7)},1e3)}be===1&&!Og(R,a.getBoundingClientRect())&&E(),ve=!1}try{f=new IntersectionObserver(Te,{...de,root:p.ownerDocument})}catch{f=new IntersectionObserver(Te,de)}f.observe(a)}return E(!0),S}function Lp(a,s,f,v){v===void 0&&(v={});const{ancestorScroll:p=!0,ancestorResize:S=!0,elementResize:E=typeof ResizeObserver=="function",layoutShift:T=typeof IntersectionObserver=="function",animationFrame:O=!1}=v,R=Ch(a),k=p||S?[...R?Hs(R):[],...s?Hs(s):[]]:[];k.forEach(oe=>{p&&oe.addEventListener("scroll",f,{passive:!0}),S&&oe.addEventListener("resize",f)});const L=R&&T?Np(R,f):null;let U=-1,V=null;E&&(V=new ResizeObserver(oe=>{let[me]=oe;me&&me.target===R&&V&&s&&(V.unobserve(s),cancelAnimationFrame(U),U=requestAnimationFrame(()=>{var de;(de=V)==null||de.observe(s)})),f()}),R&&!O&&V.observe(R),s&&V.observe(s));let K,Z=O?Kc(a):null;O&&$();function $(){const oe=Kc(a);Z&&!Og(Z,oe)&&f(),Z=oe,K=requestAnimationFrame($)}return f(),()=>{var oe;k.forEach(me=>{p&&me.removeEventListener("scroll",f),S&&me.removeEventListener("resize",f)}),L?.(),(oe=V)==null||oe.disconnect(),V=null,O&&cancelAnimationFrame(K)}}const Bp=dp,Hp=hp,Up=up,Fp=gp,Yp=sp,zg=cp,Pp=vp,Gp=(a,s,f)=>{const v=new Map,p={platform:kp,...f},S={...p.platform,_c:v};return op(a,s,{...p,platform:S})};var Xp=typeof document<"u",Ip=function(){},Jf=Xp?H.useLayoutEffect:Ip;function Kf(a,s){if(a===s)return!0;if(typeof a!=typeof s)return!1;if(typeof a=="function"&&a.toString()===s.toString())return!0;let f,v,p;if(a&&s&&typeof a=="object"){if(Array.isArray(a)){if(f=a.length,f!==s.length)return!1;for(v=f;v--!==0;)if(!Kf(a[v],s[v]))return!1;return!0}if(p=Object.keys(a),f=p.length,f!==Object.keys(s).length)return!1;for(v=f;v--!==0;)if(!{}.hasOwnProperty.call(s,p[v]))return!1;for(v=f;v--!==0;){const S=p[v];if(!(S==="_owner"&&a.$$typeof)&&!Kf(a[S],s[S]))return!1}return!0}return a!==a&&s!==s}function Dg(a){return typeof window>"u"?1:(a.ownerDocument.defaultView||window).devicePixelRatio||1}function kg(a,s){const f=Dg(a);return Math.round(s*f)/f}function Rh(a){const s=H.useRef(a);return Jf(()=>{s.current=a}),s}function Zp(a){a===void 0&&(a={});const{placement:s="bottom",strategy:f="absolute",middleware:v=[],platform:p,elements:{reference:S,floating:E}={},transform:T=!0,whileElementsMounted:O,open:R}=a,[k,L]=H.useState({x:0,y:0,strategy:f,placement:s,middlewareData:{},isPositioned:!1}),[U,V]=H.useState(v);Kf(U,v)||V(v);const[K,Z]=H.useState(null),[$,oe]=H.useState(null),me=H.useCallback(we=>{we!==Ee.current&&(Ee.current=we,Z(we))},[]),de=H.useCallback(we=>{we!==be.current&&(be.current=we,oe(we))},[]),ve=S||K,Te=E||$,Ee=H.useRef(null),be=H.useRef(null),ce=H.useRef(k),ye=O!=null,He=Rh(O),Ze=Rh(p),$e=Rh(R),st=H.useCallback(()=>{if(!Ee.current||!be.current)return;const we={placement:s,strategy:f,middleware:U};Ze.current&&(we.platform=Ze.current),Gp(Ee.current,be.current,we).then(Pe=>{const W={...Pe,isPositioned:$e.current!==!1};Ge.current&&!Kf(ce.current,W)&&(ce.current=W,Ff.flushSync(()=>{L(W)}))})},[U,s,f,Ze,$e]);Jf(()=>{R===!1&&ce.current.isPositioned&&(ce.current.isPositioned=!1,L(we=>({...we,isPositioned:!1})))},[R]);const Ge=H.useRef(!1);Jf(()=>(Ge.current=!0,()=>{Ge.current=!1}),[]),Jf(()=>{if(ve&&(Ee.current=ve),Te&&(be.current=Te),ve&&Te){if(He.current)return He.current(ve,Te,st);st()}},[ve,Te,st,He,ye]);const Ve=H.useMemo(()=>({reference:Ee,floating:be,setReference:me,setFloating:de}),[me,de]),D=H.useMemo(()=>({reference:ve,floating:Te}),[ve,Te]),J=H.useMemo(()=>{const we={position:f,left:0,top:0};if(!D.floating)return we;const Pe=kg(D.floating,k.x),W=kg(D.floating,k.y);return T?{...we,transform:"translate("+Pe+"px, "+W+"px)",...Dg(D.floating)>=1.5&&{willChange:"transform"}}:{position:f,left:Pe,top:W}},[f,T,D.floating,k.x,k.y]);return H.useMemo(()=>({...k,update:st,refs:Ve,elements:D,floatingStyles:J}),[k,st,Ve,D,J])}const Vp=a=>{function s(f){return{}.hasOwnProperty.call(f,"current")}return{name:"arrow",options:a,fn(f){const{element:v,padding:p}=typeof a=="function"?a(f):a;return v&&s(v)?v.current!=null?zg({element:v.current,padding:p}).fn(f):{}:v?zg({element:v,padding:p}).fn(f):{}}}},Qp=(a,s)=>{const f=Bp(a);return{name:f.name,fn:f.fn,options:[a,s]}},Wp=(a,s)=>{const f=Hp(a);return{name:f.name,fn:f.fn,options:[a,s]}},Jp=(a,s)=>({fn:Pp(a).fn,options:[a,s]}),Kp=(a,s)=>{const f=Up(a);return{name:f.name,fn:f.fn,options:[a,s]}},jp=(a,s)=>{const f=Fp(a);return{name:f.name,fn:f.fn,options:[a,s]}},qp=(a,s)=>{const f=Yp(a);return{name:f.name,fn:f.fn,options:[a,s]}},$p=(a,s)=>{const f=Vp(a);return{name:f.name,fn:f.fn,options:[a,s]}};var ex="Arrow",Ng=H.forwardRef((a,s)=>{const{children:f,width:v=10,height:p=5,...S}=a;return Y.jsx(Ln.svg,{...S,ref:s,width:v,height:p,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:a.asChild?f:Y.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ng.displayName=ex;var tx=Ng;function nx(a){const[s,f]=H.useState(void 0);return Fi(()=>{if(a){f({width:a.offsetWidth,height:a.offsetHeight});const v=new ResizeObserver(p=>{if(!Array.isArray(p)||!p.length)return;const S=p[0];let E,T;if("borderBoxSize"in S){const O=S.borderBoxSize,R=Array.isArray(O)?O[0]:O;E=R.inlineSize,T=R.blockSize}else E=a.offsetWidth,T=a.offsetHeight;f({width:E,height:T})});return v.observe(a,{box:"border-box"}),()=>v.unobserve(a)}else f(void 0)},[a]),s}var Ah="Popper",[Lg,Bg]=Fu(Ah),[lx,Hg]=Lg(Ah),Ug=a=>{const{__scopePopper:s,children:f}=a,[v,p]=H.useState(null);return Y.jsx(lx,{scope:s,anchor:v,onAnchorChange:p,children:f})};Ug.displayName=Ah;var Fg="PopperAnchor",Yg=H.forwardRef((a,s)=>{const{__scopePopper:f,virtualRef:v,...p}=a,S=Hg(Fg,f),E=H.useRef(null),T=yl(s,E),O=H.useRef(null);return H.useEffect(()=>{const R=O.current;O.current=v?.current||E.current,R!==O.current&&S.onAnchorChange(O.current)}),v?null:Y.jsx(Ln.div,{...p,ref:T})});Yg.displayName=Fg;var _h="PopperContent",[ax,rx]=Lg(_h),Pg=H.forwardRef((a,s)=>{const{__scopePopper:f,side:v="bottom",sideOffset:p=0,align:S="center",alignOffset:E=0,arrowPadding:T=0,avoidCollisions:O=!0,collisionBoundary:R=[],collisionPadding:k=0,sticky:L="partial",hideWhenDetached:U=!1,updatePositionStrategy:V="optimized",onPlaced:K,...Z}=a,$=Hg(_h,f),[oe,me]=H.useState(null),de=yl(s,Xe=>me(Xe)),[ve,Te]=H.useState(null),Ee=nx(ve),be=Ee?.width??0,ce=Ee?.height??0,ye=v+(S!=="center"?"-"+S:""),He=typeof k=="number"?k:{top:0,right:0,bottom:0,left:0,...k},Ze=Array.isArray(R)?R:[R],$e=Ze.length>0,st={padding:He,boundary:Ze.filter(ox),altBoundary:$e},{refs:Ge,floatingStyles:Ve,placement:D,isPositioned:J,middlewareData:we}=Zp({strategy:"fixed",placement:ye,whileElementsMounted:(...Xe)=>Lp(...Xe,{animationFrame:V==="always"}),elements:{reference:$.anchor},middleware:[Qp({mainAxis:p+ce,alignmentAxis:E}),O&&Wp({mainAxis:!0,crossAxis:!1,limiter:L==="partial"?Jp():void 0,...st}),O&&Kp({...st}),jp({...st,apply:({elements:Xe,rects:Vt,availableWidth:Qe,availableHeight:ea})=>{const{width:_t,height:Fl}=Vt.reference,Ue=Xe.floating.style;Ue.setProperty("--radix-popper-available-width",`${Qe}px`),Ue.setProperty("--radix-popper-available-height",`${ea}px`),Ue.setProperty("--radix-popper-anchor-width",`${_t}px`),Ue.setProperty("--radix-popper-anchor-height",`${Fl}px`)}}),ve&&$p({element:ve,padding:T}),cx({arrowWidth:be,arrowHeight:ce}),U&&qp({strategy:"referenceHidden",...st})]}),[Pe,W]=Ig(D),_=$l(K);Fi(()=>{J&&_?.()},[J,_]);const se=we.arrow?.x,Ae=we.arrow?.y,Re=we.arrow?.centerOffset!==0,[pe,_e]=H.useState();return Fi(()=>{oe&&_e(window.getComputedStyle(oe).zIndex)},[oe]),Y.jsx("div",{ref:Ge.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ve,transform:J?Ve.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[we.transformOrigin?.x,we.transformOrigin?.y].join(" "),...we.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:a.dir,children:Y.jsx(ax,{scope:f,placedSide:Pe,onArrowChange:Te,arrowX:se,arrowY:Ae,shouldHideArrow:Re,children:Y.jsx(Ln.div,{"data-side":Pe,"data-align":W,...Z,ref:de,style:{...Z.style,animation:J?void 0:"none"}})})})});Pg.displayName=_h;var Gg="PopperArrow",ix={top:"bottom",right:"left",bottom:"top",left:"right"},Xg=H.forwardRef(function(s,f){const{__scopePopper:v,...p}=s,S=rx(Gg,v),E=ix[S.placedSide];return Y.jsx("span",{ref:S.onArrowChange,style:{position:"absolute",left:S.arrowX,top:S.arrowY,[E]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[S.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[S.placedSide],visibility:S.shouldHideArrow?"hidden":void 0},children:Y.jsx(tx,{...p,ref:f,style:{...p.style,display:"block"}})})});Xg.displayName=Gg;function ox(a){return a!==null}var cx=a=>({name:"transformOrigin",options:a,fn(s){const{placement:f,rects:v,middlewareData:p}=s,E=p.arrow?.centerOffset!==0,T=E?0:a.arrowWidth,O=E?0:a.arrowHeight,[R,k]=Ig(f),L={start:"0%",center:"50%",end:"100%"}[k],U=(p.arrow?.x??0)+T/2,V=(p.arrow?.y??0)+O/2;let K="",Z="";return R==="bottom"?(K=E?L:`${U}px`,Z=`${-O}px`):R==="top"?(K=E?L:`${U}px`,Z=`${v.floating.height+O}px`):R==="right"?(K=`${-O}px`,Z=E?L:`${V}px`):R==="left"&&(K=`${v.floating.width+O}px`,Z=E?L:`${V}px`),{data:{x:K,y:Z}}}});function Ig(a){const[s,f="center"]=a.split("-");return[s,f]}var ux=Ug,Zg=Yg,sx=Pg,fx=Xg,dx="Portal",Vg=H.forwardRef((a,s)=>{const{container:f,...v}=a,[p,S]=H.useState(!1);Fi(()=>S(!0),[]);const E=f||p&&globalThis?.document?.body;return E?Cy.createPortal(Y.jsx(Ln.div,{...v,ref:s}),E):null});Vg.displayName=dx;function hx(a,s){return H.useReducer((f,v)=>s[f][v]??f,a)}var Do=a=>{const{present:s,children:f}=a,v=vx(s),p=typeof f=="function"?f({present:v.isPresent}):H.Children.only(f),S=yl(v.ref,gx(p));return typeof f=="function"||v.isPresent?H.cloneElement(p,{ref:S}):null};Do.displayName="Presence";function vx(a){const[s,f]=H.useState(),v=H.useRef(null),p=H.useRef(a),S=H.useRef("none"),E=a?"mounted":"unmounted",[T,O]=hx(E,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return H.useEffect(()=>{const R=jf(v.current);S.current=T==="mounted"?R:"none"},[T]),Fi(()=>{const R=v.current,k=p.current;if(k!==a){const U=S.current,V=jf(R);a?O("MOUNT"):V==="none"||R?.display==="none"?O("UNMOUNT"):O(k&&U!==V?"ANIMATION_OUT":"UNMOUNT"),p.current=a}},[a,O]),Fi(()=>{if(s){let R;const k=s.ownerDocument.defaultView??window,L=V=>{const Z=jf(v.current).includes(CSS.escape(V.animationName));if(V.target===s&&Z&&(O("ANIMATION_END"),!p.current)){const $=s.style.animationFillMode;s.style.animationFillMode="forwards",R=k.setTimeout(()=>{s.style.animationFillMode==="forwards"&&(s.style.animationFillMode=$)})}},U=V=>{V.target===s&&(S.current=jf(v.current))};return s.addEventListener("animationstart",U),s.addEventListener("animationcancel",L),s.addEventListener("animationend",L),()=>{k.clearTimeout(R),s.removeEventListener("animationstart",U),s.removeEventListener("animationcancel",L),s.removeEventListener("animationend",L)}}else O("ANIMATION_END")},[s,O]),{isPresent:["mounted","unmountSuspended"].includes(T),ref:H.useCallback(R=>{v.current=R?getComputedStyle(R):null,f(R)},[])}}function jf(a){return a?.animationName||"none"}function gx(a){let s=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,f=s&&"isReactWarning"in s&&s.isReactWarning;return f?a.ref:(s=Object.getOwnPropertyDescriptor(a,"ref")?.get,f=s&&"isReactWarning"in s&&s.isReactWarning,f?a.props.ref:a.props.ref||a.ref)}var bx=Zv[" useInsertionEffect ".trim().toString()]||Fi;function Mh({prop:a,defaultProp:s,onChange:f=()=>{},caller:v}){const[p,S,E]=mx({defaultProp:s,onChange:f}),T=a!==void 0,O=T?a:p;{const k=H.useRef(a!==void 0);H.useEffect(()=>{const L=k.current;L!==T&&console.warn(`${v} is changing from ${L?"controlled":"uncontrolled"} to ${T?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),k.current=T},[T,v])}const R=H.useCallback(k=>{if(T){const L=yx(k)?k(a):k;L!==a&&E.current?.(L)}else S(k)},[T,a,S,E]);return[O,R]}function mx({defaultProp:a,onChange:s}){const[f,v]=H.useState(a),p=H.useRef(f),S=H.useRef(s);return bx(()=>{S.current=s},[s]),H.useEffect(()=>{p.current!==f&&(S.current?.(f),p.current=f)},[f,p]),[f,v,S]}function yx(a){return typeof a=="function"}var px=function(a){if(typeof document>"u")return null;var s=Array.isArray(a)?a[0]:a;return s.ownerDocument.body},Iu=new WeakMap,qf=new WeakMap,$f={},Oh=0,Qg=function(a){return a&&(a.host||Qg(a.parentNode))},xx=function(a,s){return s.map(function(f){if(a.contains(f))return f;var v=Qg(f);return v&&a.contains(v)?v:(console.error("aria-hidden",f,"in not contained inside",a,". Doing nothing"),null)}).filter(function(f){return!!f})},wx=function(a,s,f,v){var p=xx(s,Array.isArray(a)?a:[a]);$f[f]||($f[f]=new WeakMap);var S=$f[f],E=[],T=new Set,O=new Set(p),R=function(L){!L||T.has(L)||(T.add(L),R(L.parentNode))};p.forEach(R);var k=function(L){!L||O.has(L)||Array.prototype.forEach.call(L.children,function(U){if(T.has(U))k(U);else try{var V=U.getAttribute(v),K=V!==null&&V!=="false",Z=(Iu.get(U)||0)+1,$=(S.get(U)||0)+1;Iu.set(U,Z),S.set(U,$),E.push(U),Z===1&&K&&qf.set(U,!0),$===1&&U.setAttribute(f,"true"),K||U.setAttribute(v,"true")}catch(oe){console.error("aria-hidden: cannot operate on ",U,oe)}})};return k(s),T.clear(),Oh++,function(){E.forEach(function(L){var U=Iu.get(L)-1,V=S.get(L)-1;Iu.set(L,U),S.set(L,V),U||(qf.has(L)||L.removeAttribute(v),qf.delete(L)),V||L.removeAttribute(f)}),Oh--,Oh||(Iu=new WeakMap,Iu=new WeakMap,qf=new WeakMap,$f={})}},Sx=function(a,s,f){f===void 0&&(f="data-aria-hidden");var v=Array.from(Array.isArray(a)?a:[a]),p=px(a);return p?(v.push.apply(v,Array.from(p.querySelectorAll("[aria-live], script"))),wx(v,p,f,"aria-hidden")):function(){return null}},Kr=function(){return Kr=Object.assign||function(s){for(var f,v=1,p=arguments.length;v<p;v++){f=arguments[v];for(var S in f)Object.prototype.hasOwnProperty.call(f,S)&&(s[S]=f[S])}return s},Kr.apply(this,arguments)};function Wg(a,s){var f={};for(var v in a)Object.prototype.hasOwnProperty.call(a,v)&&s.indexOf(v)<0&&(f[v]=a[v]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,v=Object.getOwnPropertySymbols(a);p<v.length;p++)s.indexOf(v[p])<0&&Object.prototype.propertyIsEnumerable.call(a,v[p])&&(f[v[p]]=a[v[p]]);return f}function Ex(a,s,f){if(f||arguments.length===2)for(var v=0,p=s.length,S;v<p;v++)(S||!(v in s))&&(S||(S=Array.prototype.slice.call(s,0,v)),S[v]=s[v]);return a.concat(S||Array.prototype.slice.call(s))}typeof SuppressedError=="function"&&SuppressedError;var ed="right-scroll-bar-position",td="width-before-scroll-bar",Cx="with-scroll-bars-hidden",Tx="--removed-body-scroll-bar-size";function zh(a,s){return typeof a=="function"?a(s):a&&(a.current=s),a}function Rx(a,s){var f=H.useState(function(){return{value:a,callback:s,facade:{get current(){return f.value},set current(v){var p=f.value;p!==v&&(f.value=v,f.callback(v,p))}}}})[0];return f.callback=s,f.facade}var Ax=typeof window<"u"?H.useLayoutEffect:H.useEffect,Jg=new WeakMap;function _x(a,s){var f=Rx(null,function(v){return a.forEach(function(p){return zh(p,v)})});return Ax(function(){var v=Jg.get(f);if(v){var p=new Set(v),S=new Set(a),E=f.current;p.forEach(function(T){S.has(T)||zh(T,null)}),S.forEach(function(T){p.has(T)||zh(T,E)})}Jg.set(f,a)},[a]),f}function Mx(a){return a}function Ox(a,s){s===void 0&&(s=Mx);var f=[],v=!1,p={read:function(){if(v)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return f.length?f[f.length-1]:a},useMedium:function(S){var E=s(S,v);return f.push(E),function(){f=f.filter(function(T){return T!==E})}},assignSyncMedium:function(S){for(v=!0;f.length;){var E=f;f=[],E.forEach(S)}f={push:function(T){return S(T)},filter:function(){return f}}},assignMedium:function(S){v=!0;var E=[];if(f.length){var T=f;f=[],T.forEach(S),E=f}var O=function(){var k=E;E=[],k.forEach(S)},R=function(){return Promise.resolve().then(O)};R(),f={push:function(k){E.push(k),R()},filter:function(k){return E=E.filter(k),f}}}};return p}function zx(a){a===void 0&&(a={});var s=Ox(null);return s.options=Kr({async:!0,ssr:!1},a),s}var Kg=function(a){var s=a.sideCar,f=Wg(a,["sideCar"]);if(!s)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var v=s.read();if(!v)throw new Error("Sidecar medium not found");return H.createElement(v,Kr({},f))};Kg.isSideCarExport=!0;function Dx(a,s){return a.useMedium(s),Kg}var jg=zx(),Dh=function(){},nd=H.forwardRef(function(a,s){var f=H.useRef(null),v=H.useState({onScrollCapture:Dh,onWheelCapture:Dh,onTouchMoveCapture:Dh}),p=v[0],S=v[1],E=a.forwardProps,T=a.children,O=a.className,R=a.removeScrollBar,k=a.enabled,L=a.shards,U=a.sideCar,V=a.noRelative,K=a.noIsolation,Z=a.inert,$=a.allowPinchZoom,oe=a.as,me=oe===void 0?"div":oe,de=a.gapMode,ve=Wg(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),Te=U,Ee=_x([f,s]),be=Kr(Kr({},ve),p);return H.createElement(H.Fragment,null,k&&H.createElement(Te,{sideCar:jg,removeScrollBar:R,shards:L,noRelative:V,noIsolation:K,inert:Z,setCallbacks:S,allowPinchZoom:!!$,lockRef:f,gapMode:de}),E?H.cloneElement(H.Children.only(T),Kr(Kr({},be),{ref:Ee})):H.createElement(me,Kr({},be,{className:O,ref:Ee}),T))});nd.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},nd.classNames={fullWidth:td,zeroRight:ed};var kx=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Nx(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var s=kx();return s&&a.setAttribute("nonce",s),a}function Lx(a,s){a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s))}function Bx(a){var s=document.head||document.getElementsByTagName("head")[0];s.appendChild(a)}var Hx=function(){var a=0,s=null;return{add:function(f){a==0&&(s=Nx())&&(Lx(s,f),Bx(s)),a++},remove:function(){a--,!a&&s&&(s.parentNode&&s.parentNode.removeChild(s),s=null)}}},Ux=function(){var a=Hx();return function(s,f){H.useEffect(function(){return a.add(s),function(){a.remove()}},[s&&f])}},qg=function(){var a=Ux(),s=function(f){var v=f.styles,p=f.dynamic;return a(v,p),null};return s},Fx={left:0,top:0,right:0,gap:0},kh=function(a){return parseInt(a||"",10)||0},Yx=function(a){var s=window.getComputedStyle(document.body),f=s[a==="padding"?"paddingLeft":"marginLeft"],v=s[a==="padding"?"paddingTop":"marginTop"],p=s[a==="padding"?"paddingRight":"marginRight"];return[kh(f),kh(v),kh(p)]},Px=function(a){if(a===void 0&&(a="margin"),typeof window>"u")return Fx;var s=Yx(a),f=document.documentElement.clientWidth,v=window.innerWidth;return{left:s[0],top:s[1],right:s[2],gap:Math.max(0,v-f+s[2]-s[0])}},Gx=qg(),Zu="data-scroll-locked",Xx=function(a,s,f,v){var p=a.left,S=a.top,E=a.right,T=a.gap;return f===void 0&&(f="margin"),`
  .`.concat(Cx,` {
   overflow: hidden `).concat(v,`;
   padding-right: `).concat(T,"px ").concat(v,`;
  }
  body[`).concat(Zu,`] {
    overflow: hidden `).concat(v,`;
    overscroll-behavior: contain;
    `).concat([s&&"position: relative ".concat(v,";"),f==="margin"&&`
    padding-left: `.concat(p,`px;
    padding-top: `).concat(S,`px;
    padding-right: `).concat(E,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(T,"px ").concat(v,`;
    `),f==="padding"&&"padding-right: ".concat(T,"px ").concat(v,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ed,` {
    right: `).concat(T,"px ").concat(v,`;
  }
  
  .`).concat(td,` {
    margin-right: `).concat(T,"px ").concat(v,`;
  }
  
  .`).concat(ed," .").concat(ed,` {
    right: 0 `).concat(v,`;
  }
  
  .`).concat(td," .").concat(td,` {
    margin-right: 0 `).concat(v,`;
  }
  
  body[`).concat(Zu,`] {
    `).concat(Tx,": ").concat(T,`px;
  }
`)},$g=function(){var a=parseInt(document.body.getAttribute(Zu)||"0",10);return isFinite(a)?a:0},Ix=function(){H.useEffect(function(){return document.body.setAttribute(Zu,($g()+1).toString()),function(){var a=$g()-1;a<=0?document.body.removeAttribute(Zu):document.body.setAttribute(Zu,a.toString())}},[])},Zx=function(a){var s=a.noRelative,f=a.noImportant,v=a.gapMode,p=v===void 0?"margin":v;Ix();var S=H.useMemo(function(){return Px(p)},[p]);return H.createElement(Gx,{styles:Xx(S,!s,p,f?"":"!important")})},Nh=!1;if(typeof window<"u")try{var ld=Object.defineProperty({},"passive",{get:function(){return Nh=!0,!0}});window.addEventListener("test",ld,ld),window.removeEventListener("test",ld,ld)}catch{Nh=!1}var Vu=Nh?{passive:!1}:!1,Vx=function(a){return a.tagName==="TEXTAREA"},eb=function(a,s){if(!(a instanceof Element))return!1;var f=window.getComputedStyle(a);return f[s]!=="hidden"&&!(f.overflowY===f.overflowX&&!Vx(a)&&f[s]==="visible")},Qx=function(a){return eb(a,"overflowY")},Wx=function(a){return eb(a,"overflowX")},tb=function(a,s){var f=s.ownerDocument,v=s;do{typeof ShadowRoot<"u"&&v instanceof ShadowRoot&&(v=v.host);var p=nb(a,v);if(p){var S=lb(a,v),E=S[1],T=S[2];if(E>T)return!0}v=v.parentNode}while(v&&v!==f.body);return!1},Jx=function(a){var s=a.scrollTop,f=a.scrollHeight,v=a.clientHeight;return[s,f,v]},Kx=function(a){var s=a.scrollLeft,f=a.scrollWidth,v=a.clientWidth;return[s,f,v]},nb=function(a,s){return a==="v"?Qx(s):Wx(s)},lb=function(a,s){return a==="v"?Jx(s):Kx(s)},jx=function(a,s){return a==="h"&&s==="rtl"?-1:1},qx=function(a,s,f,v,p){var S=jx(a,window.getComputedStyle(s).direction),E=S*v,T=f.target,O=s.contains(T),R=!1,k=E>0,L=0,U=0;do{if(!T)break;var V=lb(a,T),K=V[0],Z=V[1],$=V[2],oe=Z-$-S*K;(K||oe)&&nb(a,T)&&(L+=oe,U+=K);var me=T.parentNode;T=me&&me.nodeType===Node.DOCUMENT_FRAGMENT_NODE?me.host:me}while(!O&&T!==document.body||O&&(s.contains(T)||s===T));return(k&&Math.abs(L)<1||!k&&Math.abs(U)<1)&&(R=!0),R},ad=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},ab=function(a){return[a.deltaX,a.deltaY]},rb=function(a){return a&&"current"in a?a.current:a},$x=function(a,s){return a[0]===s[0]&&a[1]===s[1]},e1=function(a){return`
  .block-interactivity-`.concat(a,` {pointer-events: none;}
  .allow-interactivity-`).concat(a,` {pointer-events: all;}
`)},t1=0,Qu=[];function n1(a){var s=H.useRef([]),f=H.useRef([0,0]),v=H.useRef(),p=H.useState(t1++)[0],S=H.useState(qg)[0],E=H.useRef(a);H.useEffect(function(){E.current=a},[a]),H.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-".concat(p));var Z=Ex([a.lockRef.current],(a.shards||[]).map(rb),!0).filter(Boolean);return Z.forEach(function($){return $.classList.add("allow-interactivity-".concat(p))}),function(){document.body.classList.remove("block-interactivity-".concat(p)),Z.forEach(function($){return $.classList.remove("allow-interactivity-".concat(p))})}}},[a.inert,a.lockRef.current,a.shards]);var T=H.useCallback(function(Z,$){if("touches"in Z&&Z.touches.length===2||Z.type==="wheel"&&Z.ctrlKey)return!E.current.allowPinchZoom;var oe=ad(Z),me=f.current,de="deltaX"in Z?Z.deltaX:me[0]-oe[0],ve="deltaY"in Z?Z.deltaY:me[1]-oe[1],Te,Ee=Z.target,be=Math.abs(de)>Math.abs(ve)?"h":"v";if("touches"in Z&&be==="h"&&Ee.type==="range")return!1;var ce=window.getSelection(),ye=ce&&ce.anchorNode,He=ye?ye===Ee||ye.contains(Ee):!1;if(He)return!1;var Ze=tb(be,Ee);if(!Ze)return!0;if(Ze?Te=be:(Te=be==="v"?"h":"v",Ze=tb(be,Ee)),!Ze)return!1;if(!v.current&&"changedTouches"in Z&&(de||ve)&&(v.current=Te),!Te)return!0;var $e=v.current||Te;return qx($e,$,Z,$e==="h"?de:ve)},[]),O=H.useCallback(function(Z){var $=Z;if(!(!Qu.length||Qu[Qu.length-1]!==S)){var oe="deltaY"in $?ab($):ad($),me=s.current.filter(function(Te){return Te.name===$.type&&(Te.target===$.target||$.target===Te.shadowParent)&&$x(Te.delta,oe)})[0];if(me&&me.should){$.cancelable&&$.preventDefault();return}if(!me){var de=(E.current.shards||[]).map(rb).filter(Boolean).filter(function(Te){return Te.contains($.target)}),ve=de.length>0?T($,de[0]):!E.current.noIsolation;ve&&$.cancelable&&$.preventDefault()}}},[]),R=H.useCallback(function(Z,$,oe,me){var de={name:Z,delta:$,target:oe,should:me,shadowParent:l1(oe)};s.current.push(de),setTimeout(function(){s.current=s.current.filter(function(ve){return ve!==de})},1)},[]),k=H.useCallback(function(Z){f.current=ad(Z),v.current=void 0},[]),L=H.useCallback(function(Z){R(Z.type,ab(Z),Z.target,T(Z,a.lockRef.current))},[]),U=H.useCallback(function(Z){R(Z.type,ad(Z),Z.target,T(Z,a.lockRef.current))},[]);H.useEffect(function(){return Qu.push(S),a.setCallbacks({onScrollCapture:L,onWheelCapture:L,onTouchMoveCapture:U}),document.addEventListener("wheel",O,Vu),document.addEventListener("touchmove",O,Vu),document.addEventListener("touchstart",k,Vu),function(){Qu=Qu.filter(function(Z){return Z!==S}),document.removeEventListener("wheel",O,Vu),document.removeEventListener("touchmove",O,Vu),document.removeEventListener("touchstart",k,Vu)}},[]);var V=a.removeScrollBar,K=a.inert;return H.createElement(H.Fragment,null,K?H.createElement(S,{styles:e1(p)}):null,V?H.createElement(Zx,{noRelative:a.noRelative,gapMode:a.gapMode}):null)}function l1(a){for(var s=null;a!==null;)a instanceof ShadowRoot&&(s=a.host,a=a.host),a=a.parentNode;return s}const a1=Dx(jg,n1);var ib=H.forwardRef(function(a,s){return H.createElement(nd,Kr({},a,{ref:s,sideCar:a1}))});ib.classNames=nd.classNames;var rd="Popover",[ob]=Fu(rd,[Bg]),Us=Bg(),[r1,ko]=ob(rd),cb=a=>{const{__scopePopover:s,children:f,open:v,defaultOpen:p,onOpenChange:S,modal:E=!1}=a,T=Us(s),O=H.useRef(null),[R,k]=H.useState(!1),[L,U]=Mh({prop:v,defaultProp:p??!1,onChange:S,caller:rd});return Y.jsx(ux,{...T,children:Y.jsx(r1,{scope:s,contentId:vh(),triggerRef:O,open:L,onOpenChange:U,onOpenToggle:H.useCallback(()=>U(V=>!V),[U]),hasCustomAnchor:R,onCustomAnchorAdd:H.useCallback(()=>k(!0),[]),onCustomAnchorRemove:H.useCallback(()=>k(!1),[]),modal:E,children:f})})};cb.displayName=rd;var ub="PopoverAnchor",i1=H.forwardRef((a,s)=>{const{__scopePopover:f,...v}=a,p=ko(ub,f),S=Us(f),{onCustomAnchorAdd:E,onCustomAnchorRemove:T}=p;return H.useEffect(()=>(E(),()=>T()),[E,T]),Y.jsx(Zg,{...S,...v,ref:s})});i1.displayName=ub;var sb="PopoverTrigger",fb=H.forwardRef((a,s)=>{const{__scopePopover:f,...v}=a,p=ko(sb,f),S=Us(f),E=yl(s,p.triggerRef),T=Y.jsx(Ln.button,{type:"button","aria-haspopup":"dialog","aria-expanded":p.open,"aria-controls":p.contentId,"data-state":bb(p.open),...v,ref:E,onClick:an(a.onClick,p.onOpenToggle)});return p.hasCustomAnchor?T:Y.jsx(Zg,{asChild:!0,...S,children:T})});fb.displayName=sb;var Lh="PopoverPortal",[o1,c1]=ob(Lh,{forceMount:void 0}),db=a=>{const{__scopePopover:s,forceMount:f,children:v,container:p}=a,S=ko(Lh,s);return Y.jsx(o1,{scope:s,forceMount:f,children:Y.jsx(Do,{present:f||S.open,children:Y.jsx(Vg,{asChild:!0,container:p,children:v})})})};db.displayName=Lh;var Wu="PopoverContent",hb=H.forwardRef((a,s)=>{const f=c1(Wu,a.__scopePopover),{forceMount:v=f.forceMount,...p}=a,S=ko(Wu,a.__scopePopover);return Y.jsx(Do,{present:v||S.open,children:S.modal?Y.jsx(s1,{...p,ref:s}):Y.jsx(f1,{...p,ref:s})})});hb.displayName=Wu;var u1=Yf("PopoverContent.RemoveScroll"),s1=H.forwardRef((a,s)=>{const f=ko(Wu,a.__scopePopover),v=H.useRef(null),p=yl(s,v),S=H.useRef(!1);return H.useEffect(()=>{const E=v.current;if(E)return Sx(E)},[]),Y.jsx(ib,{as:u1,allowPinchZoom:!0,children:Y.jsx(vb,{...a,ref:p,trapFocus:f.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:an(a.onCloseAutoFocus,E=>{E.preventDefault(),S.current||f.triggerRef.current?.focus()}),onPointerDownOutside:an(a.onPointerDownOutside,E=>{const T=E.detail.originalEvent,O=T.button===0&&T.ctrlKey===!0,R=T.button===2||O;S.current=R},{checkForDefaultPrevented:!1}),onFocusOutside:an(a.onFocusOutside,E=>E.preventDefault(),{checkForDefaultPrevented:!1})})})}),f1=H.forwardRef((a,s)=>{const f=ko(Wu,a.__scopePopover),v=H.useRef(!1),p=H.useRef(!1);return Y.jsx(vb,{...a,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:S=>{a.onCloseAutoFocus?.(S),S.defaultPrevented||(v.current||f.triggerRef.current?.focus(),S.preventDefault()),v.current=!1,p.current=!1},onInteractOutside:S=>{a.onInteractOutside?.(S),S.defaultPrevented||(v.current=!0,S.detail.originalEvent.type==="pointerdown"&&(p.current=!0));const E=S.target;f.triggerRef.current?.contains(E)&&S.preventDefault(),S.detail.originalEvent.type==="focusin"&&p.current&&S.preventDefault()}})}),vb=H.forwardRef((a,s)=>{const{__scopePopover:f,trapFocus:v,onOpenAutoFocus:p,onCloseAutoFocus:S,disableOutsidePointerEvents:E,onEscapeKeyDown:T,onPointerDownOutside:O,onFocusOutside:R,onInteractOutside:k,...L}=a,U=ko(Wu,f),V=Us(f);return Yy(),Y.jsx(og,{asChild:!0,loop:!0,trapped:v,onMountAutoFocus:p,onUnmountAutoFocus:S,children:Y.jsx(ng,{asChild:!0,disableOutsidePointerEvents:E,onInteractOutside:k,onEscapeKeyDown:T,onPointerDownOutside:O,onFocusOutside:R,onDismiss:()=>U.onOpenChange(!1),children:Y.jsx(sx,{"data-state":bb(U.open),role:"dialog",id:U.contentId,...V,...L,ref:s,style:{...L.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),gb="PopoverClose",d1=H.forwardRef((a,s)=>{const{__scopePopover:f,...v}=a,p=ko(gb,f);return Y.jsx(Ln.button,{type:"button",...v,ref:s,onClick:an(a.onClick,()=>p.onOpenChange(!1))})});d1.displayName=gb;var h1="PopoverArrow",v1=H.forwardRef((a,s)=>{const{__scopePopover:f,...v}=a,p=Us(f);return Y.jsx(fx,{...p,...v,ref:s})});v1.displayName=h1;function bb(a){return a?"open":"closed"}var g1=cb,b1=fb,m1=db,y1=hb,p1=H.createContext(void 0);function Bh(a){const s=H.useContext(p1);return a||s||"ltr"}function x1(a,[s,f]){return Math.min(f,Math.max(s,a))}function w1(a,s){return H.useReducer((f,v)=>s[f][v]??f,a)}var Hh="ScrollArea",[mb]=Fu(Hh),[S1,Ja]=mb(Hh),yb=H.forwardRef((a,s)=>{const{__scopeScrollArea:f,type:v="hover",dir:p,scrollHideDelay:S=600,...E}=a,[T,O]=H.useState(null),[R,k]=H.useState(null),[L,U]=H.useState(null),[V,K]=H.useState(null),[Z,$]=H.useState(null),[oe,me]=H.useState(0),[de,ve]=H.useState(0),[Te,Ee]=H.useState(!1),[be,ce]=H.useState(!1),ye=yl(s,Ze=>O(Ze)),He=Bh(p);return Y.jsx(S1,{scope:f,type:v,dir:He,scrollHideDelay:S,scrollArea:T,viewport:R,onViewportChange:k,content:L,onContentChange:U,scrollbarX:V,onScrollbarXChange:K,scrollbarXEnabled:Te,onScrollbarXEnabledChange:Ee,scrollbarY:Z,onScrollbarYChange:$,scrollbarYEnabled:be,onScrollbarYEnabledChange:ce,onCornerWidthChange:me,onCornerHeightChange:ve,children:Y.jsx(Ln.div,{dir:He,...E,ref:ye,style:{position:"relative","--radix-scroll-area-corner-width":oe+"px","--radix-scroll-area-corner-height":de+"px",...a.style}})})});yb.displayName=Hh;var pb="ScrollAreaViewport",xb=H.forwardRef((a,s)=>{const{__scopeScrollArea:f,children:v,nonce:p,...S}=a,E=Ja(pb,f),T=H.useRef(null),O=yl(s,T,E.onViewportChange);return Y.jsxs(Y.Fragment,{children:[Y.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:p}),Y.jsx(Ln.div,{"data-radix-scroll-area-viewport":"",...S,ref:O,style:{overflowX:E.scrollbarXEnabled?"scroll":"hidden",overflowY:E.scrollbarYEnabled?"scroll":"hidden",...a.style},children:Y.jsx("div",{ref:E.onContentChange,style:{minWidth:"100%",display:"table"},children:v})})]})});xb.displayName=pb;var jr="ScrollAreaScrollbar",wb=H.forwardRef((a,s)=>{const{forceMount:f,...v}=a,p=Ja(jr,a.__scopeScrollArea),{onScrollbarXEnabledChange:S,onScrollbarYEnabledChange:E}=p,T=a.orientation==="horizontal";return H.useEffect(()=>(T?S(!0):E(!0),()=>{T?S(!1):E(!1)}),[T,S,E]),p.type==="hover"?Y.jsx(E1,{...v,ref:s,forceMount:f}):p.type==="scroll"?Y.jsx(C1,{...v,ref:s,forceMount:f}):p.type==="auto"?Y.jsx(Sb,{...v,ref:s,forceMount:f}):p.type==="always"?Y.jsx(Uh,{...v,ref:s}):null});wb.displayName=jr;var E1=H.forwardRef((a,s)=>{const{forceMount:f,...v}=a,p=Ja(jr,a.__scopeScrollArea),[S,E]=H.useState(!1);return H.useEffect(()=>{const T=p.scrollArea;let O=0;if(T){const R=()=>{window.clearTimeout(O),E(!0)},k=()=>{O=window.setTimeout(()=>E(!1),p.scrollHideDelay)};return T.addEventListener("pointerenter",R),T.addEventListener("pointerleave",k),()=>{window.clearTimeout(O),T.removeEventListener("pointerenter",R),T.removeEventListener("pointerleave",k)}}},[p.scrollArea,p.scrollHideDelay]),Y.jsx(Do,{present:f||S,children:Y.jsx(Sb,{"data-state":S?"visible":"hidden",...v,ref:s})})}),C1=H.forwardRef((a,s)=>{const{forceMount:f,...v}=a,p=Ja(jr,a.__scopeScrollArea),S=a.orientation==="horizontal",E=ud(()=>O("SCROLL_END"),100),[T,O]=w1("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return H.useEffect(()=>{if(T==="idle"){const R=window.setTimeout(()=>O("HIDE"),p.scrollHideDelay);return()=>window.clearTimeout(R)}},[T,p.scrollHideDelay,O]),H.useEffect(()=>{const R=p.viewport,k=S?"scrollLeft":"scrollTop";if(R){let L=R[k];const U=()=>{const V=R[k];L!==V&&(O("SCROLL"),E()),L=V};return R.addEventListener("scroll",U),()=>R.removeEventListener("scroll",U)}},[p.viewport,S,O,E]),Y.jsx(Do,{present:f||T!=="hidden",children:Y.jsx(Uh,{"data-state":T==="hidden"?"hidden":"visible",...v,ref:s,onPointerEnter:an(a.onPointerEnter,()=>O("POINTER_ENTER")),onPointerLeave:an(a.onPointerLeave,()=>O("POINTER_LEAVE"))})})}),Sb=H.forwardRef((a,s)=>{const f=Ja(jr,a.__scopeScrollArea),{forceMount:v,...p}=a,[S,E]=H.useState(!1),T=a.orientation==="horizontal",O=ud(()=>{if(f.viewport){const R=f.viewport.offsetWidth<f.viewport.scrollWidth,k=f.viewport.offsetHeight<f.viewport.scrollHeight;E(T?R:k)}},10);return Ju(f.viewport,O),Ju(f.content,O),Y.jsx(Do,{present:v||S,children:Y.jsx(Uh,{"data-state":S?"visible":"hidden",...p,ref:s})})}),Uh=H.forwardRef((a,s)=>{const{orientation:f="vertical",...v}=a,p=Ja(jr,a.__scopeScrollArea),S=H.useRef(null),E=H.useRef(0),[T,O]=H.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),R=Rb(T.viewport,T.content),k={...v,sizes:T,onSizesChange:O,hasThumb:R>0&&R<1,onThumbChange:U=>S.current=U,onThumbPointerUp:()=>E.current=0,onThumbPointerDown:U=>E.current=U};function L(U,V){return z1(U,E.current,T,V)}return f==="horizontal"?Y.jsx(T1,{...k,ref:s,onThumbPositionChange:()=>{if(p.viewport&&S.current){const U=p.viewport.scrollLeft,V=Ab(U,T,p.dir);S.current.style.transform=`translate3d(${V}px, 0, 0)`}},onWheelScroll:U=>{p.viewport&&(p.viewport.scrollLeft=U)},onDragScroll:U=>{p.viewport&&(p.viewport.scrollLeft=L(U,p.dir))}}):f==="vertical"?Y.jsx(R1,{...k,ref:s,onThumbPositionChange:()=>{if(p.viewport&&S.current){const U=p.viewport.scrollTop,V=Ab(U,T);S.current.style.transform=`translate3d(0, ${V}px, 0)`}},onWheelScroll:U=>{p.viewport&&(p.viewport.scrollTop=U)},onDragScroll:U=>{p.viewport&&(p.viewport.scrollTop=L(U))}}):null}),T1=H.forwardRef((a,s)=>{const{sizes:f,onSizesChange:v,...p}=a,S=Ja(jr,a.__scopeScrollArea),[E,T]=H.useState(),O=H.useRef(null),R=yl(s,O,S.onScrollbarXChange);return H.useEffect(()=>{O.current&&T(getComputedStyle(O.current))},[O]),Y.jsx(Cb,{"data-orientation":"horizontal",...p,ref:R,sizes:f,style:{bottom:0,left:S.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:S.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":cd(f)+"px",...a.style},onThumbPointerDown:k=>a.onThumbPointerDown(k.x),onDragScroll:k=>a.onDragScroll(k.x),onWheelScroll:(k,L)=>{if(S.viewport){const U=S.viewport.scrollLeft+k.deltaX;a.onWheelScroll(U),Mb(U,L)&&k.preventDefault()}},onResize:()=>{O.current&&S.viewport&&E&&v({content:S.viewport.scrollWidth,viewport:S.viewport.offsetWidth,scrollbar:{size:O.current.clientWidth,paddingStart:od(E.paddingLeft),paddingEnd:od(E.paddingRight)}})}})}),R1=H.forwardRef((a,s)=>{const{sizes:f,onSizesChange:v,...p}=a,S=Ja(jr,a.__scopeScrollArea),[E,T]=H.useState(),O=H.useRef(null),R=yl(s,O,S.onScrollbarYChange);return H.useEffect(()=>{O.current&&T(getComputedStyle(O.current))},[O]),Y.jsx(Cb,{"data-orientation":"vertical",...p,ref:R,sizes:f,style:{top:0,right:S.dir==="ltr"?0:void 0,left:S.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":cd(f)+"px",...a.style},onThumbPointerDown:k=>a.onThumbPointerDown(k.y),onDragScroll:k=>a.onDragScroll(k.y),onWheelScroll:(k,L)=>{if(S.viewport){const U=S.viewport.scrollTop+k.deltaY;a.onWheelScroll(U),Mb(U,L)&&k.preventDefault()}},onResize:()=>{O.current&&S.viewport&&E&&v({content:S.viewport.scrollHeight,viewport:S.viewport.offsetHeight,scrollbar:{size:O.current.clientHeight,paddingStart:od(E.paddingTop),paddingEnd:od(E.paddingBottom)}})}})}),[A1,Eb]=mb(jr),Cb=H.forwardRef((a,s)=>{const{__scopeScrollArea:f,sizes:v,hasThumb:p,onThumbChange:S,onThumbPointerUp:E,onThumbPointerDown:T,onThumbPositionChange:O,onDragScroll:R,onWheelScroll:k,onResize:L,...U}=a,V=Ja(jr,f),[K,Z]=H.useState(null),$=yl(s,ye=>Z(ye)),oe=H.useRef(null),me=H.useRef(""),de=V.viewport,ve=v.content-v.viewport,Te=$l(k),Ee=$l(O),be=ud(L,10);function ce(ye){if(oe.current){const He=ye.clientX-oe.current.left,Ze=ye.clientY-oe.current.top;R({x:He,y:Ze})}}return H.useEffect(()=>{const ye=He=>{const Ze=He.target;K?.contains(Ze)&&Te(He,ve)};return document.addEventListener("wheel",ye,{passive:!1}),()=>document.removeEventListener("wheel",ye,{passive:!1})},[de,K,ve,Te]),H.useEffect(Ee,[v,Ee]),Ju(K,be),Ju(V.content,be),Y.jsx(A1,{scope:f,scrollbar:K,hasThumb:p,onThumbChange:$l(S),onThumbPointerUp:$l(E),onThumbPositionChange:Ee,onThumbPointerDown:$l(T),children:Y.jsx(Ln.div,{...U,ref:$,style:{position:"absolute",...U.style},onPointerDown:an(a.onPointerDown,ye=>{ye.button===0&&(ye.target.setPointerCapture(ye.pointerId),oe.current=K.getBoundingClientRect(),me.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",V.viewport&&(V.viewport.style.scrollBehavior="auto"),ce(ye))}),onPointerMove:an(a.onPointerMove,ce),onPointerUp:an(a.onPointerUp,ye=>{const He=ye.target;He.hasPointerCapture(ye.pointerId)&&He.releasePointerCapture(ye.pointerId),document.body.style.webkitUserSelect=me.current,V.viewport&&(V.viewport.style.scrollBehavior=""),oe.current=null})})})}),id="ScrollAreaThumb",Tb=H.forwardRef((a,s)=>{const{forceMount:f,...v}=a,p=Eb(id,a.__scopeScrollArea);return Y.jsx(Do,{present:f||p.hasThumb,children:Y.jsx(_1,{ref:s,...v})})}),_1=H.forwardRef((a,s)=>{const{__scopeScrollArea:f,style:v,...p}=a,S=Ja(id,f),E=Eb(id,f),{onThumbPositionChange:T}=E,O=yl(s,L=>E.onThumbChange(L)),R=H.useRef(void 0),k=ud(()=>{R.current&&(R.current(),R.current=void 0)},100);return H.useEffect(()=>{const L=S.viewport;if(L){const U=()=>{if(k(),!R.current){const V=D1(L,T);R.current=V,T()}};return T(),L.addEventListener("scroll",U),()=>L.removeEventListener("scroll",U)}},[S.viewport,k,T]),Y.jsx(Ln.div,{"data-state":E.hasThumb?"visible":"hidden",...p,ref:O,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...v},onPointerDownCapture:an(a.onPointerDownCapture,L=>{const V=L.target.getBoundingClientRect(),K=L.clientX-V.left,Z=L.clientY-V.top;E.onThumbPointerDown({x:K,y:Z})}),onPointerUp:an(a.onPointerUp,E.onThumbPointerUp)})});Tb.displayName=id;var Fh="ScrollAreaCorner",M1=H.forwardRef((a,s)=>{const f=Ja(Fh,a.__scopeScrollArea),v=!!(f.scrollbarX&&f.scrollbarY);return f.type!=="scroll"&&v?Y.jsx(O1,{...a,ref:s}):null});M1.displayName=Fh;var O1=H.forwardRef((a,s)=>{const{__scopeScrollArea:f,...v}=a,p=Ja(Fh,f),[S,E]=H.useState(0),[T,O]=H.useState(0),R=!!(S&&T);return Ju(p.scrollbarX,()=>{const k=p.scrollbarX?.offsetHeight||0;p.onCornerHeightChange(k),O(k)}),Ju(p.scrollbarY,()=>{const k=p.scrollbarY?.offsetWidth||0;p.onCornerWidthChange(k),E(k)}),R?Y.jsx(Ln.div,{...v,ref:s,style:{width:S,height:T,position:"absolute",right:p.dir==="ltr"?0:void 0,left:p.dir==="rtl"?0:void 0,bottom:0,...a.style}}):null});function od(a){return a?parseInt(a,10):0}function Rb(a,s){const f=a/s;return isNaN(f)?0:f}function cd(a){const s=Rb(a.viewport,a.content),f=a.scrollbar.paddingStart+a.scrollbar.paddingEnd,v=(a.scrollbar.size-f)*s;return Math.max(v,18)}function z1(a,s,f,v="ltr"){const p=cd(f),S=p/2,E=s||S,T=p-E,O=f.scrollbar.paddingStart+E,R=f.scrollbar.size-f.scrollbar.paddingEnd-T,k=f.content-f.viewport,L=v==="ltr"?[0,k]:[k*-1,0];return _b([O,R],L)(a)}function Ab(a,s,f="ltr"){const v=cd(s),p=s.scrollbar.paddingStart+s.scrollbar.paddingEnd,S=s.scrollbar.size-p,E=s.content-s.viewport,T=S-v,O=f==="ltr"?[0,E]:[E*-1,0],R=x1(a,O);return _b([0,E],[0,T])(R)}function _b(a,s){return f=>{if(a[0]===a[1]||s[0]===s[1])return s[0];const v=(s[1]-s[0])/(a[1]-a[0]);return s[0]+v*(f-a[0])}}function Mb(a,s){return a>0&&a<s}var D1=(a,s=()=>{})=>{let f={left:a.scrollLeft,top:a.scrollTop},v=0;return(function p(){const S={left:a.scrollLeft,top:a.scrollTop},E=f.left!==S.left,T=f.top!==S.top;(E||T)&&s(),f=S,v=window.requestAnimationFrame(p)})(),()=>window.cancelAnimationFrame(v)};function ud(a,s){const f=$l(a),v=H.useRef(0);return H.useEffect(()=>()=>window.clearTimeout(v.current),[]),H.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(f,s)},[f,s])}function Ju(a,s){const f=$l(s);Fi(()=>{let v=0;if(a){const p=new ResizeObserver(()=>{cancelAnimationFrame(v),v=window.requestAnimationFrame(f)});return p.observe(a),()=>{window.cancelAnimationFrame(v),p.unobserve(a)}}},[a,f])}var k1=yb,N1=xb,L1=wb,B1=Tb;function H1(a){const s=a+"CollectionProvider",[f,v]=Fu(s),[p,S]=f(s,{collectionRef:{current:null},itemMap:new Map}),E=Z=>{const{scope:$,children:oe}=Z,me=_o.useRef(null),de=_o.useRef(new Map).current;return Y.jsx(p,{scope:$,itemMap:de,collectionRef:me,children:oe})};E.displayName=s;const T=a+"CollectionSlot",O=Yf(T),R=_o.forwardRef((Z,$)=>{const{scope:oe,children:me}=Z,de=S(T,oe),ve=yl($,de.collectionRef);return Y.jsx(O,{ref:ve,children:me})});R.displayName=T;const k=a+"CollectionItemSlot",L="data-radix-collection-item",U=Yf(k),V=_o.forwardRef((Z,$)=>{const{scope:oe,children:me,...de}=Z,ve=_o.useRef(null),Te=yl($,ve),Ee=S(k,oe);return _o.useEffect(()=>(Ee.itemMap.set(ve,{ref:ve,...de}),()=>void Ee.itemMap.delete(ve))),Y.jsx(U,{[L]:"",ref:Te,children:me})});V.displayName=k;function K(Z){const $=S(a+"CollectionConsumer",Z);return _o.useCallback(()=>{const me=$.collectionRef.current;if(!me)return[];const de=Array.from(me.querySelectorAll(`[${L}]`));return Array.from($.itemMap.values()).sort((Ee,be)=>de.indexOf(Ee.ref.current)-de.indexOf(be.ref.current))},[$.collectionRef,$.itemMap])}return[{Provider:E,Slot:R,ItemSlot:V},K,v]}var Yh="rovingFocusGroup.onEntryFocus",U1={bubbles:!1,cancelable:!0},Fs="RovingFocusGroup",[Ph,Ob,F1]=H1(Fs),[Y1,zb]=Fu(Fs,[F1]),[P1,G1]=Y1(Fs),Db=H.forwardRef((a,s)=>Y.jsx(Ph.Provider,{scope:a.__scopeRovingFocusGroup,children:Y.jsx(Ph.Slot,{scope:a.__scopeRovingFocusGroup,children:Y.jsx(X1,{...a,ref:s})})}));Db.displayName=Fs;var X1=H.forwardRef((a,s)=>{const{__scopeRovingFocusGroup:f,orientation:v,loop:p=!1,dir:S,currentTabStopId:E,defaultCurrentTabStopId:T,onCurrentTabStopIdChange:O,onEntryFocus:R,preventScrollOnEntryFocus:k=!1,...L}=a,U=H.useRef(null),V=yl(s,U),K=Bh(S),[Z,$]=Mh({prop:E,defaultProp:T??null,onChange:O,caller:Fs}),[oe,me]=H.useState(!1),de=$l(R),ve=Ob(f),Te=H.useRef(!1),[Ee,be]=H.useState(0);return H.useEffect(()=>{const ce=U.current;if(ce)return ce.addEventListener(Yh,de),()=>ce.removeEventListener(Yh,de)},[de]),Y.jsx(P1,{scope:f,orientation:v,dir:K,loop:p,currentTabStopId:Z,onItemFocus:H.useCallback(ce=>$(ce),[$]),onItemShiftTab:H.useCallback(()=>me(!0),[]),onFocusableItemAdd:H.useCallback(()=>be(ce=>ce+1),[]),onFocusableItemRemove:H.useCallback(()=>be(ce=>ce-1),[]),children:Y.jsx(Ln.div,{tabIndex:oe||Ee===0?-1:0,"data-orientation":v,...L,ref:V,style:{outline:"none",...a.style},onMouseDown:an(a.onMouseDown,()=>{Te.current=!0}),onFocus:an(a.onFocus,ce=>{const ye=!Te.current;if(ce.target===ce.currentTarget&&ye&&!oe){const He=new CustomEvent(Yh,U1);if(ce.currentTarget.dispatchEvent(He),!He.defaultPrevented){const Ze=ve().filter(D=>D.focusable),$e=Ze.find(D=>D.active),st=Ze.find(D=>D.id===Z),Ve=[$e,st,...Ze].filter(Boolean).map(D=>D.ref.current);Lb(Ve,k)}}Te.current=!1}),onBlur:an(a.onBlur,()=>me(!1))})})}),kb="RovingFocusGroupItem",Nb=H.forwardRef((a,s)=>{const{__scopeRovingFocusGroup:f,focusable:v=!0,active:p=!1,tabStopId:S,children:E,...T}=a,O=vh(),R=S||O,k=G1(kb,f),L=k.currentTabStopId===R,U=Ob(f),{onFocusableItemAdd:V,onFocusableItemRemove:K,currentTabStopId:Z}=k;return H.useEffect(()=>{if(v)return V(),()=>K()},[v,V,K]),Y.jsx(Ph.ItemSlot,{scope:f,id:R,focusable:v,active:p,children:Y.jsx(Ln.span,{tabIndex:L?0:-1,"data-orientation":k.orientation,...T,ref:s,onMouseDown:an(a.onMouseDown,$=>{v?k.onItemFocus(R):$.preventDefault()}),onFocus:an(a.onFocus,()=>k.onItemFocus(R)),onKeyDown:an(a.onKeyDown,$=>{if($.key==="Tab"&&$.shiftKey){k.onItemShiftTab();return}if($.target!==$.currentTarget)return;const oe=V1($,k.orientation,k.dir);if(oe!==void 0){if($.metaKey||$.ctrlKey||$.altKey||$.shiftKey)return;$.preventDefault();let de=U().filter(ve=>ve.focusable).map(ve=>ve.ref.current);if(oe==="last")de.reverse();else if(oe==="prev"||oe==="next"){oe==="prev"&&de.reverse();const ve=de.indexOf($.currentTarget);de=k.loop?Q1(de,ve+1):de.slice(ve+1)}setTimeout(()=>Lb(de))}}),children:typeof E=="function"?E({isCurrentTabStop:L,hasTabStop:Z!=null}):E})})});Nb.displayName=kb;var I1={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Z1(a,s){return s!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function V1(a,s,f){const v=Z1(a.key,f);if(!(s==="vertical"&&["ArrowLeft","ArrowRight"].includes(v))&&!(s==="horizontal"&&["ArrowUp","ArrowDown"].includes(v)))return I1[v]}function Lb(a,s=!1){const f=document.activeElement;for(const v of a)if(v===f||(v.focus({preventScroll:s}),document.activeElement!==f))return}function Q1(a,s){return a.map((f,v)=>a[(s+v)%a.length])}var W1=Db,J1=Nb,sd="Tabs",[K1]=Fu(sd,[zb]),Bb=zb(),[j1,Gh]=K1(sd),Hb=H.forwardRef((a,s)=>{const{__scopeTabs:f,value:v,onValueChange:p,defaultValue:S,orientation:E="horizontal",dir:T,activationMode:O="automatic",...R}=a,k=Bh(T),[L,U]=Mh({prop:v,onChange:p,defaultProp:S??"",caller:sd});return Y.jsx(j1,{scope:f,baseId:vh(),value:L,onValueChange:U,orientation:E,dir:k,activationMode:O,children:Y.jsx(Ln.div,{dir:k,"data-orientation":E,...R,ref:s})})});Hb.displayName=sd;var Ub="TabsList",Fb=H.forwardRef((a,s)=>{const{__scopeTabs:f,loop:v=!0,...p}=a,S=Gh(Ub,f),E=Bb(f);return Y.jsx(W1,{asChild:!0,...E,orientation:S.orientation,dir:S.dir,loop:v,children:Y.jsx(Ln.div,{role:"tablist","aria-orientation":S.orientation,...p,ref:s})})});Fb.displayName=Ub;var Yb="TabsTrigger",Pb=H.forwardRef((a,s)=>{const{__scopeTabs:f,value:v,disabled:p=!1,...S}=a,E=Gh(Yb,f),T=Bb(f),O=Xb(E.baseId,v),R=Ib(E.baseId,v),k=v===E.value;return Y.jsx(J1,{asChild:!0,...T,focusable:!p,active:k,children:Y.jsx(Ln.button,{type:"button",role:"tab","aria-selected":k,"aria-controls":R,"data-state":k?"active":"inactive","data-disabled":p?"":void 0,disabled:p,id:O,...S,ref:s,onMouseDown:an(a.onMouseDown,L=>{!p&&L.button===0&&L.ctrlKey===!1?E.onValueChange(v):L.preventDefault()}),onKeyDown:an(a.onKeyDown,L=>{[" ","Enter"].includes(L.key)&&E.onValueChange(v)}),onFocus:an(a.onFocus,()=>{const L=E.activationMode!=="manual";!k&&!p&&L&&E.onValueChange(v)})})})});Pb.displayName=Yb;var Gb="TabsContent",q1=H.forwardRef((a,s)=>{const{__scopeTabs:f,value:v,forceMount:p,children:S,...E}=a,T=Gh(Gb,f),O=Xb(T.baseId,v),R=Ib(T.baseId,v),k=v===T.value,L=H.useRef(k);return H.useEffect(()=>{const U=requestAnimationFrame(()=>L.current=!1);return()=>cancelAnimationFrame(U)},[]),Y.jsx(Do,{present:p||k,children:({present:U})=>Y.jsx(Ln.div,{"data-state":k?"active":"inactive","data-orientation":T.orientation,role:"tabpanel","aria-labelledby":O,hidden:!U,id:R,tabIndex:0,...E,ref:s,style:{...a.style,animationDuration:L.current?"0s":void 0},children:U&&S})})});q1.displayName=Gb;function Xb(a,s){return`${a}-trigger-${s}`}function Ib(a,s){return`${a}-content-${s}`}var $1=Hb,ew=Fb,tw=Pb;/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lw=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,f,v)=>v?v.toUpperCase():f.toLowerCase()),Zb=a=>{const s=lw(a);return s.charAt(0).toUpperCase()+s.slice(1)},Vb=(...a)=>a.filter((s,f,v)=>!!s&&s.trim()!==""&&v.indexOf(s)===f).join(" ").trim(),aw=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=H.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:v,className:p="",children:S,iconNode:E,...T},O)=>H.createElement("svg",{ref:O,...rw,width:s,height:s,stroke:a,strokeWidth:v?Number(f)*24/Number(s):f,className:Vb("lucide",p),...!S&&!aw(T)&&{"aria-hidden":"true"},...T},[...E.map(([R,k])=>H.createElement(R,k)),...Array.isArray(S)?S:[S]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=(a,s)=>{const f=H.forwardRef(({className:v,...p},S)=>H.createElement(iw,{ref:S,iconNode:s,className:Vb(`lucide-${nw(Zb(a))}`,`lucide-${a}`,v),...p}));return f.displayName=Zb(a),f};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=Ka("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=Ka("bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Ka("calendar-days",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Ka("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=Ka("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Ka("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=Ka("earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Ka("link-2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=Ka("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=Ka("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=Ka("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=Ka("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function t0(a){var s,f,v="";if(typeof a=="string"||typeof a=="number")v+=a;else if(typeof a=="object")if(Array.isArray(a)){var p=a.length;for(s=0;s<p;s++)a[s]&&(f=t0(a[s]))&&(v&&(v+=" "),v+=f)}else for(f in a)a[f]&&(v&&(v+=" "),v+=f);return v}function n0(){for(var a,s,f=0,v="",p=arguments.length;f<p;f++)(a=arguments[f])&&(s=t0(a))&&(v&&(v+=" "),v+=s);return v}const ow=(a,s)=>{const f=new Array(a.length+s.length);for(let v=0;v<a.length;v++)f[v]=a[v];for(let v=0;v<s.length;v++)f[a.length+v]=s[v];return f},cw=(a,s)=>({classGroupId:a,validator:s}),l0=(a=new Map,s=null,f)=>({nextPart:a,validators:s,classGroupId:f}),vd="-",a0=[],uw="arbitrary..",sw=a=>{const s=dw(a),{conflictingClassGroups:f,conflictingClassGroupModifiers:v}=a;return{getClassGroupId:E=>{if(E.startsWith("[")&&E.endsWith("]"))return fw(E);const T=E.split(vd),O=T[0]===""&&T.length>1?1:0;return r0(T,O,s)},getConflictingClassGroupIds:(E,T)=>{if(T){const O=v[E],R=f[E];return O?R?ow(R,O):O:R||a0}return f[E]||a0}}},r0=(a,s,f)=>{if(a.length-s===0)return f.classGroupId;const p=a[s],S=f.nextPart.get(p);if(S){const R=r0(a,s+1,S);if(R)return R}const E=f.validators;if(E===null)return;const T=s===0?a.join(vd):a.slice(s).join(vd),O=E.length;for(let R=0;R<O;R++){const k=E[R];if(k.validator(T))return k.classGroupId}},fw=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const s=a.slice(1,-1),f=s.indexOf(":"),v=s.slice(0,f);return v?uw+v:void 0})(),dw=a=>{const{theme:s,classGroups:f}=a;return hw(f,s)},hw=(a,s)=>{const f=l0();for(const v in a){const p=a[v];Xh(p,f,v,s)}return f},Xh=(a,s,f,v)=>{const p=a.length;for(let S=0;S<p;S++){const E=a[S];vw(E,s,f,v)}},vw=(a,s,f,v)=>{if(typeof a=="string"){gw(a,s,f);return}if(typeof a=="function"){bw(a,s,f,v);return}mw(a,s,f,v)},gw=(a,s,f)=>{const v=a===""?s:i0(s,a);v.classGroupId=f},bw=(a,s,f,v)=>{if(yw(a)){Xh(a(v),s,f,v);return}s.validators===null&&(s.validators=[]),s.validators.push(cw(f,a))},mw=(a,s,f,v)=>{const p=Object.entries(a),S=p.length;for(let E=0;E<S;E++){const[T,O]=p[E];Xh(O,i0(s,T),f,v)}},i0=(a,s)=>{let f=a;const v=s.split(vd),p=v.length;for(let S=0;S<p;S++){const E=v[S];let T=f.nextPart.get(E);T||(T=l0(),f.nextPart.set(E,T)),f=T}return f},yw=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,pw=a=>{if(a<1)return{get:()=>{},set:()=>{}};let s=0,f=Object.create(null),v=Object.create(null);const p=(S,E)=>{f[S]=E,s++,s>a&&(s=0,v=f,f=Object.create(null))};return{get(S){let E=f[S];if(E!==void 0)return E;if((E=v[S])!==void 0)return p(S,E),E},set(S,E){S in f?f[S]=E:p(S,E)}}},Ih="!",o0=":",xw=[],c0=(a,s,f,v,p)=>({modifiers:a,hasImportantModifier:s,baseClassName:f,maybePostfixModifierPosition:v,isExternal:p}),ww=a=>{const{prefix:s,experimentalParseClassName:f}=a;let v=p=>{const S=[];let E=0,T=0,O=0,R;const k=p.length;for(let Z=0;Z<k;Z++){const $=p[Z];if(E===0&&T===0){if($===o0){S.push(p.slice(O,Z)),O=Z+1;continue}if($==="/"){R=Z;continue}}$==="["?E++:$==="]"?E--:$==="("?T++:$===")"&&T--}const L=S.length===0?p:p.slice(O);let U=L,V=!1;L.endsWith(Ih)?(U=L.slice(0,-1),V=!0):L.startsWith(Ih)&&(U=L.slice(1),V=!0);const K=R&&R>O?R-O:void 0;return c0(S,V,U,K)};if(s){const p=s+o0,S=v;v=E=>E.startsWith(p)?S(E.slice(p.length)):c0(xw,!1,E,void 0,!0)}if(f){const p=v;v=S=>f({className:S,parseClassName:p})}return v},Sw=a=>{const s=new Map;return a.orderSensitiveModifiers.forEach((f,v)=>{s.set(f,1e6+v)}),f=>{const v=[];let p=[];for(let S=0;S<f.length;S++){const E=f[S],T=E[0]==="[",O=s.has(E);T||O?(p.length>0&&(p.sort(),v.push(...p),p=[]),v.push(E)):p.push(E)}return p.length>0&&(p.sort(),v.push(...p)),v}},Ew=a=>({cache:pw(a.cacheSize),parseClassName:ww(a),sortModifiers:Sw(a),...sw(a)}),Cw=/\s+/,Tw=(a,s)=>{const{parseClassName:f,getClassGroupId:v,getConflictingClassGroupIds:p,sortModifiers:S}=s,E=[],T=a.trim().split(Cw);let O="";for(let R=T.length-1;R>=0;R-=1){const k=T[R],{isExternal:L,modifiers:U,hasImportantModifier:V,baseClassName:K,maybePostfixModifierPosition:Z}=f(k);if(L){O=k+(O.length>0?" "+O:O);continue}let $=!!Z,oe=v($?K.substring(0,Z):K);if(!oe){if(!$){O=k+(O.length>0?" "+O:O);continue}if(oe=v(K),!oe){O=k+(O.length>0?" "+O:O);continue}$=!1}const me=U.length===0?"":U.length===1?U[0]:S(U).join(":"),de=V?me+Ih:me,ve=de+oe;if(E.indexOf(ve)>-1)continue;E.push(ve);const Te=p(oe,$);for(let Ee=0;Ee<Te.length;++Ee){const be=Te[Ee];E.push(de+be)}O=k+(O.length>0?" "+O:O)}return O},Rw=(...a)=>{let s=0,f,v,p="";for(;s<a.length;)(f=a[s++])&&(v=u0(f))&&(p&&(p+=" "),p+=v);return p},u0=a=>{if(typeof a=="string")return a;let s,f="";for(let v=0;v<a.length;v++)a[v]&&(s=u0(a[v]))&&(f&&(f+=" "),f+=s);return f},Aw=(a,...s)=>{let f,v,p,S;const E=O=>{const R=s.reduce((k,L)=>L(k),a());return f=Ew(R),v=f.cache.get,p=f.cache.set,S=T,T(O)},T=O=>{const R=v(O);if(R)return R;const k=Tw(O,f);return p(O,k),k};return S=E,(...O)=>S(Rw(...O))},_w=[],Qn=a=>{const s=f=>f[a]||_w;return s.isThemeGetter=!0,s},s0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,f0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Mw=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Ow=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Dw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,kw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Nw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,No=a=>Mw.test(a),ut=a=>!!a&&!Number.isNaN(Number(a)),Lo=a=>!!a&&Number.isInteger(Number(a)),Zh=a=>a.endsWith("%")&&ut(a.slice(0,-1)),Xi=a=>Ow.test(a),d0=()=>!0,Lw=a=>zw.test(a)&&!Dw.test(a),Vh=()=>!1,Bw=a=>kw.test(a),Hw=a=>Nw.test(a),Uw=a=>!De(a)&&!ke(a),Fw=a=>Bo(a,y0,Vh),De=a=>s0.test(a),jc=a=>Bo(a,p0,Lw),h0=a=>Bo(a,Qw,ut),Yw=a=>Bo(a,w0,d0),Pw=a=>Bo(a,x0,Vh),v0=a=>Bo(a,b0,Vh),Gw=a=>Bo(a,m0,Hw),gd=a=>Bo(a,S0,Bw),ke=a=>f0.test(a),Ys=a=>qc(a,p0),Xw=a=>qc(a,x0),g0=a=>qc(a,b0),Iw=a=>qc(a,y0),Zw=a=>qc(a,m0),bd=a=>qc(a,S0,!0),Vw=a=>qc(a,w0,!0),Bo=(a,s,f)=>{const v=s0.exec(a);return v?v[1]?s(v[1]):f(v[2]):!1},qc=(a,s,f=!1)=>{const v=f0.exec(a);return v?v[1]?s(v[1]):f:!1},b0=a=>a==="position"||a==="percentage",m0=a=>a==="image"||a==="url",y0=a=>a==="length"||a==="size"||a==="bg-size",p0=a=>a==="length",Qw=a=>a==="number",x0=a=>a==="family-name",w0=a=>a==="number"||a==="weight",S0=a=>a==="shadow",Ww=Aw(()=>{const a=Qn("color"),s=Qn("font"),f=Qn("text"),v=Qn("font-weight"),p=Qn("tracking"),S=Qn("leading"),E=Qn("breakpoint"),T=Qn("container"),O=Qn("spacing"),R=Qn("radius"),k=Qn("shadow"),L=Qn("inset-shadow"),U=Qn("text-shadow"),V=Qn("drop-shadow"),K=Qn("blur"),Z=Qn("perspective"),$=Qn("aspect"),oe=Qn("ease"),me=Qn("animate"),de=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ve=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Te=()=>[...ve(),ke,De],Ee=()=>["auto","hidden","clip","visible","scroll"],be=()=>["auto","contain","none"],ce=()=>[ke,De,O],ye=()=>[No,"full","auto",...ce()],He=()=>[Lo,"none","subgrid",ke,De],Ze=()=>["auto",{span:["full",Lo,ke,De]},Lo,ke,De],$e=()=>[Lo,"auto",ke,De],st=()=>["auto","min","max","fr",ke,De],Ge=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ve=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...ce()],J=()=>[No,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...ce()],we=()=>[No,"screen","full","dvw","lvw","svw","min","max","fit",...ce()],Pe=()=>[No,"screen","full","lh","dvh","lvh","svh","min","max","fit",...ce()],W=()=>[a,ke,De],_=()=>[...ve(),g0,v0,{position:[ke,De]}],se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ae=()=>["auto","cover","contain",Iw,Fw,{size:[ke,De]}],Re=()=>[Zh,Ys,jc],pe=()=>["","none","full",R,ke,De],_e=()=>["",ut,Ys,jc],Xe=()=>["solid","dashed","dotted","double"],Vt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Qe=()=>[ut,Zh,g0,v0],ea=()=>["","none",K,ke,De],_t=()=>["none",ut,ke,De],Fl=()=>["none",ut,ke,De],Ue=()=>[ut,ke,De],ol=()=>[No,"full",...ce()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Xi],breakpoint:[Xi],color:[d0],container:[Xi],"drop-shadow":[Xi],ease:["in","out","in-out"],font:[Uw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Xi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Xi],shadow:[Xi],spacing:["px",ut],text:[Xi],"text-shadow":[Xi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",No,De,ke,$]}],container:["container"],columns:[{columns:[ut,De,ke,T]}],"break-after":[{"break-after":de()}],"break-before":[{"break-before":de()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Te()}],overflow:[{overflow:Ee()}],"overflow-x":[{"overflow-x":Ee()}],"overflow-y":[{"overflow-y":Ee()}],overscroll:[{overscroll:be()}],"overscroll-x":[{"overscroll-x":be()}],"overscroll-y":[{"overscroll-y":be()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ye()}],"inset-x":[{"inset-x":ye()}],"inset-y":[{"inset-y":ye()}],start:[{"inset-s":ye(),start:ye()}],end:[{"inset-e":ye(),end:ye()}],"inset-bs":[{"inset-bs":ye()}],"inset-be":[{"inset-be":ye()}],top:[{top:ye()}],right:[{right:ye()}],bottom:[{bottom:ye()}],left:[{left:ye()}],visibility:["visible","invisible","collapse"],z:[{z:[Lo,"auto",ke,De]}],basis:[{basis:[No,"full","auto",T,...ce()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ut,No,"auto","initial","none",De]}],grow:[{grow:["",ut,ke,De]}],shrink:[{shrink:["",ut,ke,De]}],order:[{order:[Lo,"first","last","none",ke,De]}],"grid-cols":[{"grid-cols":He()}],"col-start-end":[{col:Ze()}],"col-start":[{"col-start":$e()}],"col-end":[{"col-end":$e()}],"grid-rows":[{"grid-rows":He()}],"row-start-end":[{row:Ze()}],"row-start":[{"row-start":$e()}],"row-end":[{"row-end":$e()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":st()}],"auto-rows":[{"auto-rows":st()}],gap:[{gap:ce()}],"gap-x":[{"gap-x":ce()}],"gap-y":[{"gap-y":ce()}],"justify-content":[{justify:[...Ge(),"normal"]}],"justify-items":[{"justify-items":[...Ve(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ve()]}],"align-content":[{content:["normal",...Ge()]}],"align-items":[{items:[...Ve(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ve(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ge()}],"place-items":[{"place-items":[...Ve(),"baseline"]}],"place-self":[{"place-self":["auto",...Ve()]}],p:[{p:ce()}],px:[{px:ce()}],py:[{py:ce()}],ps:[{ps:ce()}],pe:[{pe:ce()}],pbs:[{pbs:ce()}],pbe:[{pbe:ce()}],pt:[{pt:ce()}],pr:[{pr:ce()}],pb:[{pb:ce()}],pl:[{pl:ce()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mbs:[{mbs:D()}],mbe:[{mbe:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":ce()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":ce()}],"space-y-reverse":["space-y-reverse"],size:[{size:J()}],"inline-size":[{inline:["auto",...we()]}],"min-inline-size":[{"min-inline":["auto",...we()]}],"max-inline-size":[{"max-inline":["none",...we()]}],"block-size":[{block:["auto",...Pe()]}],"min-block-size":[{"min-block":["auto",...Pe()]}],"max-block-size":[{"max-block":["none",...Pe()]}],w:[{w:[T,"screen",...J()]}],"min-w":[{"min-w":[T,"screen","none",...J()]}],"max-w":[{"max-w":[T,"screen","none","prose",{screen:[E]},...J()]}],h:[{h:["screen","lh",...J()]}],"min-h":[{"min-h":["screen","lh","none",...J()]}],"max-h":[{"max-h":["screen","lh",...J()]}],"font-size":[{text:["base",f,Ys,jc]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[v,Vw,Yw]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Zh,De]}],"font-family":[{font:[Xw,Pw,s]}],"font-features":[{"font-features":[De]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[p,ke,De]}],"line-clamp":[{"line-clamp":[ut,"none",ke,h0]}],leading:[{leading:[S,...ce()]}],"list-image":[{"list-image":["none",ke,De]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ke,De]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:W()}],"text-color":[{text:W()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Xe(),"wavy"]}],"text-decoration-thickness":[{decoration:[ut,"from-font","auto",ke,jc]}],"text-decoration-color":[{decoration:W()}],"underline-offset":[{"underline-offset":[ut,"auto",ke,De]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ce()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke,De]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke,De]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:_()}],"bg-repeat":[{bg:se()}],"bg-size":[{bg:Ae()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Lo,ke,De],radial:["",ke,De],conic:[Lo,ke,De]},Zw,Gw]}],"bg-color":[{bg:W()}],"gradient-from-pos":[{from:Re()}],"gradient-via-pos":[{via:Re()}],"gradient-to-pos":[{to:Re()}],"gradient-from":[{from:W()}],"gradient-via":[{via:W()}],"gradient-to":[{to:W()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:_e()}],"border-w-x":[{"border-x":_e()}],"border-w-y":[{"border-y":_e()}],"border-w-s":[{"border-s":_e()}],"border-w-e":[{"border-e":_e()}],"border-w-bs":[{"border-bs":_e()}],"border-w-be":[{"border-be":_e()}],"border-w-t":[{"border-t":_e()}],"border-w-r":[{"border-r":_e()}],"border-w-b":[{"border-b":_e()}],"border-w-l":[{"border-l":_e()}],"divide-x":[{"divide-x":_e()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":_e()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Xe(),"hidden","none"]}],"divide-style":[{divide:[...Xe(),"hidden","none"]}],"border-color":[{border:W()}],"border-color-x":[{"border-x":W()}],"border-color-y":[{"border-y":W()}],"border-color-s":[{"border-s":W()}],"border-color-e":[{"border-e":W()}],"border-color-bs":[{"border-bs":W()}],"border-color-be":[{"border-be":W()}],"border-color-t":[{"border-t":W()}],"border-color-r":[{"border-r":W()}],"border-color-b":[{"border-b":W()}],"border-color-l":[{"border-l":W()}],"divide-color":[{divide:W()}],"outline-style":[{outline:[...Xe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ut,ke,De]}],"outline-w":[{outline:["",ut,Ys,jc]}],"outline-color":[{outline:W()}],shadow:[{shadow:["","none",k,bd,gd]}],"shadow-color":[{shadow:W()}],"inset-shadow":[{"inset-shadow":["none",L,bd,gd]}],"inset-shadow-color":[{"inset-shadow":W()}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:W()}],"ring-offset-w":[{"ring-offset":[ut,jc]}],"ring-offset-color":[{"ring-offset":W()}],"inset-ring-w":[{"inset-ring":_e()}],"inset-ring-color":[{"inset-ring":W()}],"text-shadow":[{"text-shadow":["none",U,bd,gd]}],"text-shadow-color":[{"text-shadow":W()}],opacity:[{opacity:[ut,ke,De]}],"mix-blend":[{"mix-blend":[...Vt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Vt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ut]}],"mask-image-linear-from-pos":[{"mask-linear-from":Qe()}],"mask-image-linear-to-pos":[{"mask-linear-to":Qe()}],"mask-image-linear-from-color":[{"mask-linear-from":W()}],"mask-image-linear-to-color":[{"mask-linear-to":W()}],"mask-image-t-from-pos":[{"mask-t-from":Qe()}],"mask-image-t-to-pos":[{"mask-t-to":Qe()}],"mask-image-t-from-color":[{"mask-t-from":W()}],"mask-image-t-to-color":[{"mask-t-to":W()}],"mask-image-r-from-pos":[{"mask-r-from":Qe()}],"mask-image-r-to-pos":[{"mask-r-to":Qe()}],"mask-image-r-from-color":[{"mask-r-from":W()}],"mask-image-r-to-color":[{"mask-r-to":W()}],"mask-image-b-from-pos":[{"mask-b-from":Qe()}],"mask-image-b-to-pos":[{"mask-b-to":Qe()}],"mask-image-b-from-color":[{"mask-b-from":W()}],"mask-image-b-to-color":[{"mask-b-to":W()}],"mask-image-l-from-pos":[{"mask-l-from":Qe()}],"mask-image-l-to-pos":[{"mask-l-to":Qe()}],"mask-image-l-from-color":[{"mask-l-from":W()}],"mask-image-l-to-color":[{"mask-l-to":W()}],"mask-image-x-from-pos":[{"mask-x-from":Qe()}],"mask-image-x-to-pos":[{"mask-x-to":Qe()}],"mask-image-x-from-color":[{"mask-x-from":W()}],"mask-image-x-to-color":[{"mask-x-to":W()}],"mask-image-y-from-pos":[{"mask-y-from":Qe()}],"mask-image-y-to-pos":[{"mask-y-to":Qe()}],"mask-image-y-from-color":[{"mask-y-from":W()}],"mask-image-y-to-color":[{"mask-y-to":W()}],"mask-image-radial":[{"mask-radial":[ke,De]}],"mask-image-radial-from-pos":[{"mask-radial-from":Qe()}],"mask-image-radial-to-pos":[{"mask-radial-to":Qe()}],"mask-image-radial-from-color":[{"mask-radial-from":W()}],"mask-image-radial-to-color":[{"mask-radial-to":W()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ve()}],"mask-image-conic-pos":[{"mask-conic":[ut]}],"mask-image-conic-from-pos":[{"mask-conic-from":Qe()}],"mask-image-conic-to-pos":[{"mask-conic-to":Qe()}],"mask-image-conic-from-color":[{"mask-conic-from":W()}],"mask-image-conic-to-color":[{"mask-conic-to":W()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:_()}],"mask-repeat":[{mask:se()}],"mask-size":[{mask:Ae()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ke,De]}],filter:[{filter:["","none",ke,De]}],blur:[{blur:ea()}],brightness:[{brightness:[ut,ke,De]}],contrast:[{contrast:[ut,ke,De]}],"drop-shadow":[{"drop-shadow":["","none",V,bd,gd]}],"drop-shadow-color":[{"drop-shadow":W()}],grayscale:[{grayscale:["",ut,ke,De]}],"hue-rotate":[{"hue-rotate":[ut,ke,De]}],invert:[{invert:["",ut,ke,De]}],saturate:[{saturate:[ut,ke,De]}],sepia:[{sepia:["",ut,ke,De]}],"backdrop-filter":[{"backdrop-filter":["","none",ke,De]}],"backdrop-blur":[{"backdrop-blur":ea()}],"backdrop-brightness":[{"backdrop-brightness":[ut,ke,De]}],"backdrop-contrast":[{"backdrop-contrast":[ut,ke,De]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ut,ke,De]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ut,ke,De]}],"backdrop-invert":[{"backdrop-invert":["",ut,ke,De]}],"backdrop-opacity":[{"backdrop-opacity":[ut,ke,De]}],"backdrop-saturate":[{"backdrop-saturate":[ut,ke,De]}],"backdrop-sepia":[{"backdrop-sepia":["",ut,ke,De]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":ce()}],"border-spacing-x":[{"border-spacing-x":ce()}],"border-spacing-y":[{"border-spacing-y":ce()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ke,De]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ut,"initial",ke,De]}],ease:[{ease:["linear","initial",oe,ke,De]}],delay:[{delay:[ut,ke,De]}],animate:[{animate:["none",me,ke,De]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[Z,ke,De]}],"perspective-origin":[{"perspective-origin":Te()}],rotate:[{rotate:_t()}],"rotate-x":[{"rotate-x":_t()}],"rotate-y":[{"rotate-y":_t()}],"rotate-z":[{"rotate-z":_t()}],scale:[{scale:Fl()}],"scale-x":[{"scale-x":Fl()}],"scale-y":[{"scale-y":Fl()}],"scale-z":[{"scale-z":Fl()}],"scale-3d":["scale-3d"],skew:[{skew:Ue()}],"skew-x":[{"skew-x":Ue()}],"skew-y":[{"skew-y":Ue()}],transform:[{transform:[ke,De,"","none","gpu","cpu"]}],"transform-origin":[{origin:Te()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ol()}],"translate-x":[{"translate-x":ol()}],"translate-y":[{"translate-y":ol()}],"translate-z":[{"translate-z":ol()}],"translate-none":["translate-none"],accent:[{accent:W()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:W()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke,De]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ce()}],"scroll-mx":[{"scroll-mx":ce()}],"scroll-my":[{"scroll-my":ce()}],"scroll-ms":[{"scroll-ms":ce()}],"scroll-me":[{"scroll-me":ce()}],"scroll-mbs":[{"scroll-mbs":ce()}],"scroll-mbe":[{"scroll-mbe":ce()}],"scroll-mt":[{"scroll-mt":ce()}],"scroll-mr":[{"scroll-mr":ce()}],"scroll-mb":[{"scroll-mb":ce()}],"scroll-ml":[{"scroll-ml":ce()}],"scroll-p":[{"scroll-p":ce()}],"scroll-px":[{"scroll-px":ce()}],"scroll-py":[{"scroll-py":ce()}],"scroll-ps":[{"scroll-ps":ce()}],"scroll-pe":[{"scroll-pe":ce()}],"scroll-pbs":[{"scroll-pbs":ce()}],"scroll-pbe":[{"scroll-pbe":ce()}],"scroll-pt":[{"scroll-pt":ce()}],"scroll-pr":[{"scroll-pr":ce()}],"scroll-pb":[{"scroll-pb":ce()}],"scroll-pl":[{"scroll-pl":ce()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke,De]}],fill:[{fill:["none",...W()]}],"stroke-w":[{stroke:[ut,Ys,jc,h0]}],stroke:[{stroke:["none",...W()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function md(...a){return Ww(n0(a))}const E0=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,C0=n0,Jw=((a,s)=>f=>{var v;if(s?.variants==null)return C0(a,f?.class,f?.className);const{variants:p,defaultVariants:S}=s,E=Object.keys(p).map(R=>{const k=f?.[R],L=S?.[R];if(k===null)return null;const U=E0(k)||E0(L);return p[R][U]}),T=f&&Object.entries(f).reduce((R,k)=>{let[L,U]=k;return U===void 0||(R[L]=U),R},{}),O=s==null||(v=s.compoundVariants)===null||v===void 0?void 0:v.reduce((R,k)=>{let{class:L,className:U,...V}=k;return Object.entries(V).every(K=>{let[Z,$]=K;return Array.isArray($)?$.includes({...S,...T}[Z]):{...S,...T}[Z]===$})?[...R,L,U]:R},[]);return C0(a,E,O,f?.class,f?.className)})("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border text-sm font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"border-white/10 bg-white/[0.04] text-slate-100 hover:border-sky-400/40 hover:bg-white/[0.07]",ghost:"border-transparent bg-transparent text-slate-300 hover:bg-white/[0.05] hover:text-slate-50",subtle:"border-white/8 bg-slate-950/60 text-slate-300 hover:border-sky-400/25 hover:text-slate-50"},size:{default:"h-9 px-3",sm:"h-8 px-2.5 text-xs",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),$c=H.forwardRef(({className:a,variant:s,size:f,...v},p)=>Y.jsx("button",{ref:p,className:md(Jw({variant:s,size:f}),a),...v}));$c.displayName="Button";const Kw=[{id:"overview",label:"\uAC1C\uC694",icon:dd},{id:"daily",label:"\uC77C\uBCC4",icon:fd},{id:"urls",label:"URL",icon:hd},{id:"queries",label:"\uAC80\uC0C9\uC5B4",icon:Ku},{id:"pattern",label:"\uC694\uC77C",icon:fd},{id:"crawl",label:"\uD06C\uB864",icon:Wb},{id:"backlink",label:"\uBC31\uB9C1\uD06C",icon:hd},{id:"diagnosis",label:"\uBA54\uD0C0",icon:$b},{id:"insight",label:"\uC778\uC0AC\uC774\uD2B8",icon:$b}];function jw(a){const[s,f]=H.useState(()=>a.getState());return H.useEffect(()=>a.subscribe(v=>{f({...v,rows:[...v.rows],allSites:[...v.allSites]})}),[a]),s}function T0(a){return a?a.replace(/^https?:\/\//,""):"사이트 선택"}function qw(a,s){const f=s.map(p=>p.site).filter(p=>a.includes(p)),v=new Set(f);return[...f,...a.filter(p=>!v.has(p))]}function $w(a){return a?new Intl.DateTimeFormat("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(a):"없음"}function eS(a){if(a==null)return"없음";if(a<=0)return"만료";const s=Math.max(1,Math.ceil(a/6e4)),f=Math.floor(s/1440),v=Math.floor(s%1440/60),p=s%60;return f>0?`${f}일 ${v}시간`:v>0?`${v}시간 ${p}분`:`${p}분`}function tS({api:a,portalContainer:s}){const f=jw(a),[v,p]=H.useState(""),[S,E]=H.useState(!1),[T,O]=H.useState(()=>Date.now()),R=H.useMemo(()=>qw(f.allSites,f.rows),[f.allSites,f.rows]),k=H.useMemo(()=>{const K=v.trim().toLowerCase();return K?R.filter(Z=>Z.toLowerCase().includes(K)):R},[R,v]);H.useEffect(()=>{S||p("")},[S]),H.useEffect(()=>{const K=window.setInterval(()=>{O(Date.now())},3e4);return()=>window.clearInterval(K)},[]);const L=f.cacheMeta?.remainingMs==null?null:Math.max(0,f.cacheMeta.remainingMs-(T-f.cacheMeta.measuredAt)),U=f.curMode==="all",V=()=>{document.getElementById("sadv-bd")?.scrollTo({top:0,behavior:"smooth"}),window.scrollTo({top:0,behavior:"smooth"})};return Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"sadvx-shell",children:[Y.jsxs("div",{className:"px-3.5 pt-2.5 pb-2.5",children:[Y.jsxs("div",{className:"grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-2 gap-y-1.5",children:[Y.jsx("div",{className:"min-w-0",children:Y.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[Y.jsx("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-sky-400/18 bg-white/[0.03] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",children:Y.jsx(Ku,{className:"h-4 w-4"})}),Y.jsxs("div",{className:"truncate text-[16px] font-semibold tracking-[-0.025em] text-slate-50",children:["Search",Y.jsx("span",{className:"text-emerald-400",children:"Advisor"})]}),f.accountLabel?Y.jsx("div",{className:"max-w-[150px] shrink truncate rounded-full border border-sky-400/15 bg-sky-400/[0.08] px-2 py-1 text-[9px] font-semibold leading-none text-sky-100",children:f.accountLabel}):null]})}),Y.jsxs("div",{className:"flex shrink-0 items-center justify-end gap-1",children:[Y.jsx($c,{size:"icon",variant:"subtle",title:"새로고침",onClick:()=>a.refresh(),children:Y.jsx(qb,{className:"h-4 w-4"})}),Y.jsxs($c,{variant:"subtle",size:"sm",title:"현재 화면 저장",onClick:()=>a.download(),children:[Y.jsx(Kb,{className:"h-3.5 w-3.5"}),"HTML"]}),Y.jsx($c,{size:"icon",variant:"subtle",title:"닫기",onClick:()=>{document.getElementById("sadv-react-style")?.remove(),a.close()},children:Y.jsx(e0,{className:"h-4 w-4"})})]}),Y.jsxs("div",{className:"col-span-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-white/6 pb-2 text-[10px] leading-4 text-slate-400",children:[Y.jsx("span",{className:"min-w-0 truncate",children:f.curMode==="all"?Y.jsxs("span",{children:[f.allSites.length,"개 사이트 등록됨"]}):Y.jsx("span",{children:T0(f.curSite)})}),Y.jsxs("span",{className:"ml-auto flex flex-wrap items-center justify-end gap-1.5 text-[9px] leading-none text-slate-500",children:[Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",children:["v ",f.runtimeVersion||"dev"]}),Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",title:f.cacheMeta?`${f.cacheMeta.label} 기준 최근 갱신`:"캐시 기준 없음",children:["캐시저장 ",$w(f.cacheMeta?.updatedAt??null)]}),U?Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",title:f.cacheMeta?`${f.cacheMeta.label} 기준 자동 갱신 잔여 시간`:"캐시 기준 없음",children:["재조회까지 ",eS(L)]}):null]})]})]}),Y.jsxs("div",{className:"mt-2.5 grid grid-cols-2 gap-1.5",children:[Y.jsxs($c,{variant:f.curMode==="all"?"default":"subtle",className:md("h-9.5 rounded-xl font-semibold tracking-[-0.01em]",f.curMode==="all"&&"border-sky-400/35 bg-sky-400/[0.08] text-sky-50"),onClick:()=>a.switchMode("all"),children:[Y.jsx(jb,{className:"h-3.5 w-3.5"}),"전체현황"]}),Y.jsxs($c,{variant:f.curMode==="site"?"default":"subtle",className:md("h-9.5 rounded-xl font-semibold tracking-[-0.01em]",f.curMode==="site"&&"border-sky-400/35 bg-sky-400/[0.08] text-sky-50"),onClick:()=>a.switchMode("site"),children:[Y.jsx(dd,{className:"h-3.5 w-3.5"}),"사이트별"]})]}),f.curMode==="site"?Y.jsx("div",{className:"mt-3",children:Y.jsxs(g1,{open:S,onOpenChange:E,children:[Y.jsx(b1,{asChild:!0,children:Y.jsxs("button",{className:"flex h-11 w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 text-left text-sm text-slate-100 transition-colors hover:border-sky-400/30 focus:outline-none",children:[Y.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"}),Y.jsx("span",{className:"min-w-0 flex-1 truncate font-medium",children:T0(f.curSite)}),Y.jsx(Jb,{className:"h-4 w-4 text-slate-400"})]})}),Y.jsx(m1,{container:s??void 0,children:Y.jsxs(y1,{sideOffset:8,align:"center",className:"z-[10000001] w-[min(var(--radix-popover-trigger-width),448px)] min-w-[min(var(--radix-popover-trigger-width),448px)] max-w-[calc(100vw-32px)] rounded-2xl border border-white/10 bg-slate-950/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur",children:[Y.jsxs("div",{className:"border-b border-white/8 px-2 pb-2",children:[Y.jsxs("div",{className:"relative",children:[Y.jsx(Ku,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"}),Y.jsx("input",{value:v,onChange:K=>p(K.target.value),placeholder:"사이트 검색...",className:"h-10 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-9 pr-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400/30"})]}),Y.jsxs("div",{className:"mt-2 text-[10px] font-medium tracking-[0.14em] text-slate-500",children:["전체 ",R.length,"개 · 클릭순 정렬"]})]}),Y.jsxs(k1,{className:"mt-2 h-[280px] overflow-hidden",children:[Y.jsx(N1,{className:"h-full",children:Y.jsx("div",{className:"space-y-1 pr-1",children:k.map(K=>{const Z=f.rows.find(oe=>oe.site===K),$=f.curSite===K;return Y.jsxs("button",{onClick:()=>{a.setSite(K),E(!1)},className:md("flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors",$?"border-sky-400/35 bg-sky-400/[0.08]":"border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.05]"),children:[Y.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-slate-500"}),Y.jsxs("div",{className:"min-w-0 flex-1",children:[Y.jsx("div",{className:"truncate text-[12px] font-medium text-slate-100",children:K.replace(/^https?:\/\//,"")}),Y.jsx("div",{className:"truncate text-[10px] text-slate-500",children:K})]}),Y.jsx("div",{className:"shrink-0 text-[11px] font-semibold text-emerald-400",children:Z?`${Z.totalC.toLocaleString()} 클릭`:"-"})]},K)})})}),Y.jsx(L1,{orientation:"vertical",className:"flex w-2.5 p-[1px]",children:Y.jsx(B1,{className:"flex-1 rounded-full bg-white/10"})})]})]})})]})}):null]}),f.curMode==="site"?Y.jsx("div",{className:"border-t border-white/6 bg-black/10 px-2.5 pb-2 pt-1.5",children:Y.jsx($1,{value:f.curTab,onValueChange:K=>a.setTab(K),children:Y.jsx(ew,{className:"flex flex-wrap items-center justify-center gap-1.5",children:Kw.map(K=>{const Z=K.icon;return Y.jsxs(tw,{value:K.id,className:"inline-flex h-8.5 items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-[11px] font-medium tracking-[-0.01em] text-slate-400 outline-none transition-colors data-[state=active]:border-sky-400/30 data-[state=active]:bg-sky-400/[0.08] data-[state=active]:text-slate-50 hover:bg-white/[0.04] hover:text-slate-100",children:[Y.jsx(Z,{className:"h-3.5 w-3.5"}),K.label]},K.id)})})})}):null]}),Ff.createPortal(Y.jsx($c,{type:"button",size:"icon",title:"최상단 이동",onClick:V,className:"fixed right-5 bottom-5 z-[10000012] h-10 w-10 rounded-full border border-sky-300/45 bg-linear-to-b from-sky-300 to-sky-500 text-slate-950 shadow-[0_14px_32px_rgba(56,189,248,0.35)] backdrop-blur transition-all hover:-translate-y-0.5 hover:from-sky-200 hover:to-sky-400 hover:shadow-[0_18px_38px_rgba(56,189,248,0.42)]",children:Y.jsx(Qb,{className:"h-4 w-4"})}),s??document.body)]})}const nS=`javascript: (async () => {\r
  const C = {\r
    green: "#00e676",\r
    blue: "#40c4ff",\r
    amber: "#ffca28",\r
    red: "#ff5252",\r
    purple: "#ce93d8",\r
    teal: "#64ffda",\r
    orange: "#ff9100",\r
    pink: "#f48fb1",\r
    bg0: "#060b14",\r
    bg1: "#0d1829",\r
    bg2: "#132236",\r
    border: "#1a2d45",\r
    text: "#e0ecff",\r
    muted: "#3d5a78",\r
    sub: "#7a9ab8",\r
  };\r
  const COLORS = [C.green, C.blue, C.amber, C.teal, C.purple, C.orange, C.pink];\r
  const fmt = (v) => Number(v).toLocaleString();\r
  const fmtD = (s) =>\r
    s ? s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8) : "";\r
  const fmtB = (s) => (s ? s.slice(4, 6) + "/" + s.slice(6, 8) : "");\r
  const PNL = 490;\r
  const CHART_W = PNL - 32;\r
  const DOW = ["일", "월", "화", "수", "목", "금", "토"];\r
  const SITE_COLORS_MAP = {};\r
  const SITE_LS_KEY = "sadv_sites_v1";\r
  const DATA_LS_PREFIX = "sadv_data_v2_";\r
  const DATA_TTL = 12 * 60 * 60 * 1000;
  const ALL_SITES_BATCH = 4;\r
  let TIP = null;\r
  function tip() {\r
    if (!TIP) {\r
      TIP = document.createElement("div");\r
      TIP.style.cssText =\r
        "position:fixed;background:#0d1829;border:1px solid #1a2d45;border-radius:8px;padding:6px 10px;font-size:11px;color:#e0ecff;pointer-events:none;z-index:10000000;display:none;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,.6);font-family:Apple SD Gothic Neo,system-ui";\r
      document.body.appendChild(TIP);\r
    }\r
    return TIP;\r
  }\r
  function showTip(e, h) {\r
    const t = tip();\r
    t.innerHTML = h;\r
    t.style.display = "block";\r
    moveTip(e);\r
  }\r
  function moveTip(e) {\r
    const t = tip();\r
    if (t.style.display === "none") return;\r
    const tw = t.offsetWidth;\r
    t.style.left =\r
      (e.clientX + 14 + tw > window.innerWidth\r
        ? e.clientX - tw - 10\r
        : e.clientX + 14) + "px";\r
    t.style.top = e.clientY - 36 + "px";\r
  }\r
  function hideTip() {\r
    tip().style.display = "none";\r
  }\r
  function sparkline(vals, labels, H, col, unit) {\r
    unit = unit || "";\r
    if (!vals || vals.length < 2) return document.createElement("div");\r
    const W2 = CHART_W;\r
    const pL = 4,\r
      pR = 4,\r
      pT = 6,\r
      pB = 6,\r
      mx = Math.max(...vals),\r
      mn = Math.min(...vals),\r
      rng = mx - mn || 1;\r
    const showYAxisGuides = H >= 70;\r
    const formatAxisValue = function (value) {\r
      const rounded =\r
        Math.abs(value - Math.round(value)) < 0.05\r
          ? Math.round(value)\r
          : Math.round(value * 10) / 10;\r
      return fmt(rounded) + unit;\r
    };\r
    const uid = "g" + Math.random().toString(36).slice(2, 6),\r
      cid = "c" + uid,\r
      wid = "w" + uid;\r
    const pts = vals.map((v, i) => [\r
      +(pL + (i * (W2 - pL - pR)) / (vals.length - 1)).toFixed(1),\r
      +(pT + (1 - (v - mn) / rng) * (H - pT - pB)).toFixed(1),\r
    ]);\r
    const path = "M" + pts.map((p) => p.join(",")).join(" L");\r
    const area =\r
      "M" +\r
      pts[0][0] +\r
      "," +\r
      H +\r
      " L" +\r
      pts.map((p) => p.join(",")).join(" L") +\r
      " L" +\r
      pts[pts.length - 1][0] +\r
      "," +\r
      H +\r
      " Z";\r
    const guideMarkup = showYAxisGuides\r
      ? [mx, mn + (mx - mn) / 2, mn]\r
          .reduce(function (acc, value) {\r
            const y = +(\r
              pT +\r
              (1 - (value - mn) / rng) * (H - pT - pB)\r
            ).toFixed(1);\r
            if (\r
              !acc.some(function (entry) {\r
                return Math.abs(entry.y - y) < 8;\r
              })\r
            ) {\r
              acc.push({ value, y });\r
            }\r
            return acc;\r
          }, [])\r
          .map(function (entry) {\r
            return (\r
              '<line x1="' +\r
              pL +\r
              '" y1="' +\r
              entry.y +\r
              '" x2="' +\r
              (W2 - pR) +\r
              '" y2="' +\r
              entry.y +\r
              '" stroke="#2a415d" stroke-width="1" stroke-dasharray="4,4" opacity="0.65"/>' +\r
              '<text x="' +\r
              +(W2 / 2).toFixed(1) +\r
              '" y="' +\r
              entry.y +\r
              '" fill="#5f7e9e" font-size="9" text-anchor="middle" dominant-baseline="middle" opacity="0.88" style="paint-order:stroke;stroke:#08111d;stroke-width:3;stroke-linejoin:round">' +\r
              formatAxisValue(entry.value) +\r
              "</text>"\r
            );\r
          })\r
          .join("")\r
      : "";\r
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");\r
    svg.setAttribute("width", "100%");\r
    svg.setAttribute("height", H);\r
    svg.setAttribute("viewBox", "0 0 " + W2 + " " + H);\r
    svg.setAttribute("preserveAspectRatio", "none");\r
    svg.style.cssText = "display:block;width:100%;height:auto;cursor:crosshair";\r
    svg.innerHTML =

      '<defs><linearGradient id="' +

      uid +

      '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' +

      col +

      '" stop-opacity="0.22"/><stop offset="100%" stop-color="' +

      col +

      '" stop-opacity="0.01"/></linearGradient></defs>' +

      guideMarkup +

      '<path d="' +

      area +

      '" fill="url(#' +

      uid +

      ')"/><path d="' +

      path +

      '" fill="none" stroke="' +

      col +

      '" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><line id="' +

      wid +

      '" x1="0" y1="0" x2="0" y2="' +

      H +

      '" stroke="#3d5a78" stroke-width="1" stroke-dasharray="3,2" opacity="0"/><circle id="' +

      cid +

      '" cx="0" cy="0" r="3.5" fill="' +

      col +

      '" stroke="#060b14" stroke-width="1.5" opacity="0"/>';

    svg.addEventListener("mousemove", function (e) {\r
      const rect = svg.getBoundingClientRect(),\r
        rx = e.clientX - rect.left,\r
        chartX = rect.width ? (rx / rect.width) * W2 : rx;\r
      const idx = Math.max(\r
          0,\r
          Math.min(\r
            vals.length - 1,\r
            Math.round(((chartX - pL) / (W2 - pL - pR)) * (vals.length - 1)),\r
          ),\r
        ),\r
        pt = pts[idx];\r
      svg.querySelector("#" + wid).setAttribute("x1", pt[0]);\r
      svg.querySelector("#" + wid).setAttribute("x2", pt[0]);\r
      svg.querySelector("#" + wid).setAttribute("opacity", "1");\r
      const c = svg.querySelector("#" + cid);\r
      c.setAttribute("cx", pt[0]);\r
      c.setAttribute("cy", pt[1]);\r
      c.setAttribute("opacity", "1");\r
      showTip(\r
        e,\r
        '<span style="color:#7a9ab8;font-size:10px">' +\r
          ((labels && labels[idx]) || "") +\r
          '</span><br><b style="color:' +\r
          col +\r
          '">' +\r
          fmt(vals[idx]) +\r
          unit +\r
          "</b>",\r
      );\r
    });\r
    svg.addEventListener("mouseleave", function () {\r
      svg.querySelector("#" + wid).setAttribute("opacity", "0");\r
      svg.querySelector("#" + cid).setAttribute("opacity", "0");\r
      hideTip();\r
    });\r
    svg.addEventListener("mousemove", moveTip);\r
    return svg;\r
  }\r
function barchart(vals, labels, H, col, unit) {\r
    unit = unit || "";\r
    if (!vals || !vals.length) return document.createElement("div");\r
    const W2 = CHART_W;\r
    const mx = Math.max(...vals) || 1,\r
      gap = 3,\r
      bw = Math.max(3, (W2 - gap * (vals.length + 1)) / vals.length);\r
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");\r
    svg.setAttribute("width", "100%");\r
    svg.setAttribute("height", H);\r
    svg.setAttribute("viewBox", "0 0 " + W2 + " " + H);\r
    svg.setAttribute("preserveAspectRatio", "none");\r
    svg.style.cssText = "display:block;width:100%;height:auto";\r
    const uid = "b" + Math.random().toString(36).slice(2, 5);\r
    svg.innerHTML = \`<defs><linearGradient id="\${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="\${col}" stop-opacity="0.9"/><stop offset="100%" stop-color="\${col}" stop-opacity="0.35"/></linearGradient></defs>\`;\r
    vals.forEach(function (v, i) {\r
      const bh = Math.max(2, (v / mx) * (H - 4)),\r
        x = gap + i * (bw + gap),\r
        y = H - bh,\r
        isBest = v === mx;\r
      const rect = document.createElementNS(\r
        "http://www.w3.org/2000/svg",\r
        "rect",\r
      );\r
      rect.setAttribute("x", +x.toFixed(1));\r
      rect.setAttribute("y", +y.toFixed(1));\r
      rect.setAttribute("width", +bw.toFixed(1));\r
      rect.setAttribute("height", +bh.toFixed(1));\r
      rect.setAttribute("rx", "2");\r
      rect.setAttribute("fill", isBest ? C.green : "url(#" + uid + ")");\r
      rect.setAttribute("opacity", isBest ? "1" : "0.7");\r
      rect.addEventListener("mouseenter", function (e) {\r
        rect.setAttribute("opacity", "1");\r
        showTip(\r
          e,\r
          \`<span style="color:#7a9ab8;font-size:10px">\${(labels && labels[i]) || ""}</span><br><b style="color:\${col}">\${fmt(v)}\${unit}</b>\`,\r
        );\r
      });\r
      rect.addEventListener("mouseleave", function () {\r
        rect.setAttribute("opacity", isBest ? "1" : "0.7");\r
        hideTip();\r
      });\r
      rect.addEventListener("mousemove", moveTip);\r
      svg.appendChild(rect);\r
    });\r
    return svg;\r
  }\r
  function xlbl(arr) {
    if (!arr || !arr.length) return "";
    const rankLike = arr.every(function (v) {
      return /^#\\d+$/.test(v || "");
    });
    const labels = [];
    if (rankLike && arr.length >= 20) {
      labels.push(arr[0]);
      for (let i = 9; i < arr.length; i += 10) labels.push(arr[i]);
      if (labels[labels.length - 1] !== arr[arr.length - 1]) {
        labels.push(arr[arr.length - 1]);
      }
    } else {
      labels.push(arr[0]);
      if (arr.length > 2) labels.push(arr[Math.floor(arr.length / 2)]);
      if (arr.length > 1) labels.push(arr[arr.length - 1]);
    }
    return \`<div style="display:flex;justify-content:space-between;gap:8px;padding:4px 2px 0">\${labels
      .map(function (label) {
        return \`<span style="font-size:9px;color:#3d5a78">\${label || ""}</span>\`;
      })
      .join("")}</div>\`;
  }
  function chartCard(title, valueStr, valueCol, svgEl, labelsArr) {\r
    const wrap = document.createElement("div");\r
    wrap.style.cssText =\r
      "background:#0d1829;border:1px solid #1a2d45;border-radius:12px;padding:13px 13px 11px;margin-bottom:11px;overflow:hidden";\r
    const hd = document.createElement("div");\r
    hd.style.cssText =\r
      "display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px";\r
    hd.innerHTML = \`<span style="font-size:11px;line-height:1.45;color:#7a9ab8;font-weight:700">\${title}</span><span style="font-size:13px;line-height:1.2;font-weight:800;color:\${valueCol};text-align:right">\${valueStr}</span>\`;\r
    wrap.appendChild(hd);\r
    wrap.appendChild(svgEl);\r
    if (labelsArr) {\r
      const lbl = document.createElement("div");\r
      lbl.innerHTML = xlbl(labelsArr);\r
      wrap.appendChild(lbl);\r
    }\r
    return wrap;\r
  }\r
  function kpiGrid(items) {\r
    const g = document.createElement("div");\r
    g.style.cssText = \`display:grid;grid-template-columns:repeat(\${Math.min(items.length, 4)},minmax(0,1fr));gap:8px;margin-bottom:12px\`;\r
    items.forEach(function (it) {\r
      const d = document.createElement("div");\r
      d.style.cssText =\r
        "background:#0d1829;border:1px solid #1a2d45;border-radius:11px;padding:12px 8px 11px;text-align:center;min-width:0;min-height:78px;display:flex;flex-direction:column;justify-content:center;align-items:center";\r
      d.innerHTML = \`<div style="font-size:15px;font-weight:800;color:\${it.color || C.text};line-height:1.08;letter-spacing:-.01em;word-break:keep-all">\${it.value}</div><div style="font-size:10px;color:#3d5a78;line-height:1.35;min-height:14px;margin-top:4px;visibility:\${it.sub ? "visible" : "hidden"}">\${it.sub || "&nbsp;"}</div><div style="font-size:9px;color:#6482a2;line-height:1.35;margin-top:5px;word-break:keep-all">\${it.label}</div>\`;\r
      g.appendChild(d);\r
    });\r
    return g;\r
  }\r
  function secTitle(t) {\r
    const d = document.createElement("div");\r
    d.style.cssText =\r
      "font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#5f7e9e;margin:18px 0 10px;display:flex;align-items:center;gap:8px";\r
    d.innerHTML =\r
      t +\r
      ' <span style="flex:1;height:1px;background:#1a2d45;display:inline-block"></span>';\r
    return d;\r
  }\r
  function ibox(type, html) {\r
    const col =\r
      { green: C.green, amber: C.amber, red: C.red, blue: C.blue }[type] ||\r
      C.blue;\r
    const d = document.createElement("div");\r
    d.style.cssText = \`border-left:3px solid \${col};background:\${col}0d;border-radius:0 10px 10px 0;padding:10px 12px 10px 13px;margin-bottom:9px;font-size:12px;line-height:1.72;color:#7a9ab8\`;\r
    d.innerHTML = html;\r
    return d;\r
  }\r
  function ctrBadge(v) {\r
    const n = parseFloat(v);\r
    const col = n >= 3 ? C.green : n >= 1.5 ? C.amber : C.sub;\r
    return \`<span style="display:inline-block;background:\${col}18;border:1px solid \${col}44;color:\${col};font-size:10px;font-weight:700;padding:1px 6px;border-radius:20px">\${v}%</span>\`;\r
  }\r
  function hbar(v, mx, col) {\r
    const pct = mx ? Math.round((v / mx) * 100) : 0;\r
    return \`<div style="height:4px;background:#132236;border-radius:2px;margin:6px 0 7px"><div style="width:\${pct}%;height:100%;background:\${col};border-radius:2px"></div></div>\`;\r
  }\r
  function st(arr) {\r
    if (!arr || !arr.length)\r
      return { mean: 0, std: 0, cv: 0, slope: 0, outliers: [] };\r
    const n = arr.length,\r
      mean = arr.reduce((a, b) => a + b, 0) / n;\r
    const sorted = [...arr].sort((a, b) => a - b);\r
    const std = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2, 0) / n);\r
    const cv = mean ? std / mean : 0;\r
    const xs = arr.map((_, i) => i),\r
      xm = xs.reduce((a, b) => a + b, 0) / n;\r
    const slope =\r
      xs.reduce((a, x, i) => a + (x - xm) * (arr[i] - mean), 0) /\r
      (xs.reduce((a, x) => a + (x - xm) ** 2, 0) || 1);\r
    const q1 = sorted[Math.floor(n * 0.25)],\r
      q3 = sorted[Math.floor(n * 0.75)],\r
      iqr = q3 - q1;\r
    const outliers = arr.filter(\r
      (v) => v < q1 - 1.5 * iqr || v > q3 + 1.5 * iqr,\r
    );\r
    return { mean, std, cv, slope, outliers };\r
  }\r
  function pearson(xs, ys) {\r
    const n = xs.length,\r
      mx = xs.reduce((a, b) => a + b, 0) / n,\r
      my = ys.reduce((a, b) => a + b, 0) / n;\r
    const num = xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0);\r
    const den = Math.sqrt(\r
      xs.reduce((a, x) => a + (x - mx) ** 2, 0) *\r
        ys.reduce((a, y) => a + (y - my) ** 2, 0),\r
    );\r
    return den ? num / den : 0;\r
  }\r
  const old = document.getElementById("sadv-p");\r
  if (old) {\r
    old.remove();\r
    document.getElementById("sadv-inj") &&\r
      document.getElementById("sadv-inj").remove();\r
    return;\r
  }\r
  const inj = document.createElement("style");\r
  inj.id = "sadv-inj";\r
  inj.textContent = \`html{margin-right:min(\${PNL}px,100vw) !important;transition:margin-right .25s ease;box-sizing:border-box;}\`;\r
  document.head.appendChild(inj);\r
  const p = document.createElement("div");\r
  p.id = "sadv-p";\r
  p.style.cssText = \`position:fixed;top:0;right:0;width:min(\${PNL}px,100vw);max-width:100vw;height:100vh;display:flex;flex-direction:column;background:#060b14;z-index:9999999;font-family:Apple SD Gothic Neo,system-ui,sans-serif;font-size:13px;color:#e0ecff;border-left:1px solid #1a2d45;box-sizing:border-box\`;\r
  p.innerHTML = \`<style>#sadv-p *{box-sizing:border-box}#sadv-p ::-webkit-scrollbar{width:4px}#sadv-p ::-webkit-scrollbar-thumb{background:#1a2d45;border-radius:2px}#sadv-header{flex-shrink:0;background:rgba(6,11,20,.97);backdrop-filter:blur(12px);padding:10px 14px;border-bottom:1px solid #1a2d45;z-index:10}#sadv-mode-bar{display:flex;gap:4px;margin-top:8px}.sadv-mode{flex:1;background:#0d1829;border:1px solid #1a2d45;color:#3d5a78;border-radius:7px;padding:5px 8px;font-size:11px;font-weight:700;cursor:pointer;text-align:center;transition:all .15s}.sadv-mode.on{background:#1a2d45;border-color:#40c4ff;color:#40c4ff}#sadv-site-bar{margin-top:8px;position:relative;display:none}#sadv-site-bar.show{display:block}#sadv-combo-wrap{position:relative}#sadv-combo-btn{width:100%;background:#0d1829;border:1px solid #1a2d45;color:#e0ecff;border-radius:8px;padding:7px 32px 7px 10px;font-size:12px;cursor:pointer;text-align:left;font-family:inherit;transition:border-color .15s;display:flex;align-items:center;gap:8px}#sadv-combo-btn:hover{border-color:#40c4ff}#sadv-combo-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;background:#3d5a78}#sadv-combo-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}#sadv-combo-arrow{position:absolute;right:10px;top:50%;transform:translateY(-50%);color:#3d5a78;font-size:11px;pointer-events:none;transition:transform .2s}#sadv-combo-wrap.open #sadv-combo-arrow{transform:translateY(-50%) rotate(180deg)}#sadv-combo-drop{display:none;position:absolute;top:calc(100% + 4px);left:0;right:0;background:#0d1829;border:1px solid #1a2d45;border-radius:10px;padding:4px;z-index:100;box-shadow:0 8px 32px rgba(0,0,0,.7);max-height:260px;overflow-y:auto}#sadv-combo-wrap.open #sadv-combo-drop{display:block}.sadv-combo-item{display:flex;align-items:center;gap:8px;padding:7px 9px;border-radius:7px;cursor:pointer;transition:background .1s;border:1px solid transparent}.sadv-combo-item:hover{background:#132236}.sadv-combo-item.active{background:#132236;border-color:#1a2d45}.sadv-combo-item-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}.sadv-combo-item-info{flex:1;min-width:0}.sadv-combo-item-name{font-size:11px;font-weight:700;color:#e0ecff}.sadv-combo-item-url{font-size:9px;color:#3d5a78;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sadv-combo-item-click{font-size:11px;font-weight:800;color:#00e676;flex-shrink:0}#sadv-combo-search{width:100%;background:#0d1829;border:1px solid #1a2d45;border-radius:7px;padding:5px 10px;font-size:11px;color:#e0ecff;font-family:inherit;outline:none;box-sizing:border-box;display:none;margin-bottom:4px;transition:border-color .15s}#sadv-combo-search:focus{border-color:#40c4ff}#sadv-combo-search::placeholder{color:#3d5a78}#sadv-tabs{display:none;gap:3px;padding:8px 14px 0;overflow-x:auto;scrollbar-width:none;flex-wrap:wrap;flex-shrink:0;border-bottom:1px solid #1a2d45}#sadv-tabs.show{display:flex}#sadv-tabs::-webkit-scrollbar{display:none}.sadv-t{background:#0d1829;border:1px solid #1a2d45;color:#3d5a78;border-radius:7px;padding:4px 9px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;margin-bottom:4px}.sadv-t.on{background:#00e676;border-color:#00e676;color:#060b14}#sadv-refresh-btn{display:inline-flex;align-items:center;gap:4px;background:#0d1829;border:1px solid #1a2d45;color:#3d5a78;border-radius:6px;padding:3px 8px;font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s;margin-left:4px}#sadv-refresh-btn:hover{border-color:#40c4ff;color:#40c4ff}#sadv-refresh-btn.spinning{animation:spin .8s linear infinite;pointer-events:none}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}#sadv-bd{flex:1;overflow-y:auto;overflow-x:hidden;padding:12px 14px 50px}.sadv-allcard{background:#0d1829;border:1px solid #1a2d45;border-radius:10px;padding:11px 13px;margin-bottom:8px;cursor:pointer;transition:border-color .15s}.sadv-allcard:hover{border-color:#243a56}</style><div id="sadv-header"><div style="display:flex;justify-content:space-between;align-items:center"><div><div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><div style="font-size:15px;font-weight:800">🔍 Search<span style="color:#00e676">Advisor</span></div><div id="sadv-account-badge" style="display:none;max-width:180px;align-items:center;padding:3px 8px;border-radius:999px;border:1px solid #284766;color:#a8d8ff;background:rgba(12,23,38,.72);font-size:10px;font-weight:800;line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div></div><div id="sadv-site-label" style="font-size:10px;color:#3d5a78;margin-top:1px;display:flex;align-items:center;gap:4px">로딩 중...</div></div><div style="display:flex;gap:4px;align-items:center"><button id="sadv-refresh-btn" title="새로고침">↻</button><button id="sadv-save-btn" title="현재 화면 저장">HTML</button><button id="sadv-x" style="background:none;border:1px solid #1a2d45;color:#3d5a78;width:26px;height:26px;border-radius:6px;cursor:pointer;font-size:13px;flex-shrink:0">✕</button></div></div><div id="sadv-mode-bar"><button class="sadv-mode on" data-m="all">🌐 전체현황</button><button class="sadv-mode" data-m="site">📊 사이트별</button></div><div id="sadv-site-bar"><div id="sadv-combo-wrap"><button id="sadv-combo-btn"><span id="sadv-combo-dot"></span><span id="sadv-combo-label">사이트 선택</span></button><span id="sadv-combo-arrow">▾</span><div id="sadv-combo-drop"></div></div></div></div><div id="sadv-tabs"></div><div id="sadv-bd"><div style="padding:50px 20px;text-align:center;color:#3d5a78">⏳ 로딩 중...</div></div>\`;\r
  document.body.appendChild(p);\r
  const siteUiStyle = document.createElement("style");\r
  siteUiStyle.textContent = \`\r
#sadv-tabs{\r
  position:relative;\r
}\r
#sadv-tabs.show{\r
  display:flex;\r
  flex-wrap:wrap;\r
  justify-content:center;\r
  align-content:flex-start;\r
  gap:4px;\r
  padding:10px 14px 8px;\r
  background:linear-gradient(180deg, rgba(8,15,25,.96), rgba(6,11,20,.84));\r
  border-bottom:1px solid #17304b;\r
}\r
.sadv-t{\r
  position:relative;\r
  min-height:30px;\r
  padding:7px 10px 8px;\r
  border-radius:5px;\r
  border:1px solid transparent;\r
  background:transparent;\r
  color:#6f8aa7;\r
  font-size:11px;\r
  font-weight:700;\r
  letter-spacing:.05px;\r
  line-height:1;\r
  transition:border-color .15s ease, color .15s ease, background .15s ease;\r
  margin:0;\r
}\r
.sadv-t:hover{\r
  color:#d9eeff;\r
  border-color:#203754;\r
  background:rgba(16,28,44,.72);\r
}\r
.sadv-t.on{\r
  background:linear-gradient(180deg, rgba(19,34,54,.92), rgba(11,20,32,.92));\r
  border-color:#294767;\r
  color:#f4fbff;\r
}\r
.sadv-t.on::after{\r
  content:"";\r
  position:absolute;\r
  left:10px;\r
  right:10px;\r
  bottom:4px;\r
  height:2px;\r
  border-radius:2px;\r
  background:linear-gradient(90deg, #00e676, #40c4ff);\r
}\r
#sadv-bd{\r
  padding-top:14px;\r
}\r
#sadv-save-btn{\r
  display:inline-flex;\r
  align-items:center;\r
  gap:4px;\r
  background:linear-gradient(180deg, rgba(18,31,49,.96), rgba(10,18,30,.96));\r
  border:1px solid #203754;\r
  color:#a8d8ff;\r
  border-radius:6px;\r
  padding:3px 8px;\r
  font-size:10px;\r
  font-weight:800;\r
  cursor:pointer;\r
  font-family:inherit;\r
  transition:all .15s ease;\r
}\r
#sadv-save-btn:hover{\r
  border-color:#40c4ff;\r
  color:#f3fbff;\r
  transform:translateY(-1px);\r
}\r
\`;\r
  p.appendChild(siteUiStyle);\r
  document.getElementById("sadv-x").onclick = function () {\r
    p.remove();\r
    document.getElementById("sadv-inj") &&\r
      document.getElementById("sadv-inj").remove();\r
    if (TIP) {\r
      TIP.remove();\r
      TIP = null;\r
    }\r
  };\r
  function escHtml(v) {\r
    return String(v || "")\r
      .replace(/&/g, "&amp;")\r
      .replace(/</g, "&lt;")\r
      .replace(/>/g, "&gt;")\r
      .replace(/"/g, "&quot;")\r
      .replace(/'/g, "&#39;");\r
  }\r
  function pad2(v) {\r
    return String(v).padStart(2, "0");\r
  }\r
  function stampFile(d) {\r
    return (\r
      d.getFullYear() +\r
      pad2(d.getMonth() + 1) +\r
      pad2(d.getDate()) +\r
      "-" +\r
      pad2(d.getHours()) +\r
      pad2(d.getMinutes()) +\r
      pad2(d.getSeconds())\r
    );\r
  }\r
  function stampLabel(d) {\r
    return (\r
      d.getFullYear() +\r
      "." +\r
      pad2(d.getMonth() + 1) +\r
      "." +\r
      pad2(d.getDate()) +\r
      " " +\r
      pad2(d.getHours()) +\r
      ":" +\r
      pad2(d.getMinutes()) +\r
      ":" +\r
      pad2(d.getSeconds())\r
    );\r
  }\r
  function fileSafe(v) {
    return String(v || "snapshot")
      .replace(/^https?:\\/\\//, "")
      .replace(/[\\\\/:*?"<>|]+/g, "-")\r
      .replace(/\\s+/g, "-")\r
      .replace(/-+/g, "-")\r
      .replace(/^-|-$/g, "")
      .slice(0, 80);
  }
  function accountIdFromLabel(v) {
    const raw = String(v || "").trim();
    const localPart = raw.includes("@") ? raw.split("@")[0] : raw;
    return fileSafe(localPart || "unknown");
  }
  function getAccountLabel() {\r
    try {\r
      const authUser =\r
        window.__NUXT__ &&\r
        window.__NUXT__.state &&\r
        window.__NUXT__.state.authUser;\r
      return authUser && typeof authUser.email === "string"\r
        ? authUser.email\r
        : "";\r
    } catch (e) {}\r
    return "";\r
  }\r
  function applyAccountBadge(accountLabel) {\r
    const badge = document.getElementById("sadv-account-badge");\r
    if (!badge) return;\r
    if (!accountLabel) {\r
      badge.style.display = "none";\r
      badge.textContent = "";\r
      badge.removeAttribute("title");\r
      return;\r
    }\r
    badge.style.display = "inline-flex";\r
    badge.textContent = accountLabel;\r
    badge.title = accountLabel;\r
  }\r
  async function collectExportData(onProgress) {\r
    const dataBySite = {};\r
    const summaryRows = [];\r
    const total = allSites.length;\r
    let done = 0;\r
    const batchSize = 3;\r
    for (let i = 0; i < allSites.length; i += batchSize) {\r
      const batch = allSites.slice(i, i + batchSize);\r
      const results = await Promise.allSettled(\r
        batch.map(function (site) {\r
          return fetchSiteData(site);\r
        }),\r
      );\r
      results.forEach(function (res, idx) {\r
        const site = batch[idx];\r
        const siteData =\r
          res.status === "fulfilled"\r
            ? normalizeSiteData(res.value)\r
            : { expose: null, crawl: null, backlink: null, detailLoaded: false };\r
        dataBySite[site] = siteData;\r
        summaryRows.push(buildSiteSummaryRow(site, siteData));\r
        done++;\r
        if (onProgress) onProgress(done, total, site);\r
      });\r
    }\r
    summaryRows.sort((a, b) => b.totalC - a.totalC);\r
    return {\r
      savedAt: savedAtIso(new Date()),\r
      curMode,\r
      curSite,\r
      curTab,\r
      allSites: [...allSites],\r
      summaryRows,\r
      dataBySite,\r
    };\r
  }\r
  function savedAtIso(d) {\r
    return (\r
      d.getFullYear() +\r
      "-" +\r
      pad2(d.getMonth() + 1) +\r
      "-" +\r
      pad2(d.getDate()) +\r
      "T" +\r
      pad2(d.getHours()) +\r
      ":" +\r
      pad2(d.getMinutes()) +\r
      ":" +\r
      pad2(d.getSeconds())\r
    );\r
  }\r
  function buildSnapshotHtml(savedAt, payload) {
    const clone = p.cloneNode(true);
    clone.style.setProperty("display", "flex");
    clone.style.setProperty("visibility", "visible");
    clone.style.setProperty("opacity", "1");
    clone.style.removeProperty("transform");
    clone.style.removeProperty("pointer-events");
    clone.style.removeProperty("background");
    clone.style.removeProperty("border-left-color");
    delete clone.dataset.sadvSaveHidden;
    delete clone.dataset.sadvPrevVisibility;
    delete clone.dataset.sadvPrevPointerEvents;
    delete clone.dataset.sadvPrevBackground;
    delete clone.dataset.sadvPrevBorderLeftColor;
    const savedLabel = stampLabel(savedAt);
    const modeLabel = payload.curMode === "site" ? "사이트별" : "전체현황";\r
    const activeTab = TABS.find(function (t) {\r
      return t.id === payload.curTab;\r
    });\r
    const activeTabLabel = activeTab ? activeTab.label : modeLabel;\r
    const siteLabel =\r
      payload.curMode === "site" && payload.curSite\r
        ? payload.curSite.replace(/^https?:\\/\\//, "")\r
        : payload.allSites.length + "개 사이트";\r
    const topRow = clone.querySelector("#sadv-header > div");\r
    const siteLabelEl = clone.querySelector("#sadv-site-label");\r
    const comboWrap = clone.querySelector("#sadv-combo-wrap");\r
    if (comboWrap) comboWrap.classList.remove("open");\r
    if (siteLabelEl) {\r
      siteLabelEl.innerHTML = \`<span>\${escHtml(siteLabel)}</span><span style="display:inline-flex;align-items:center;padding:2px 7px;border-radius:999px;border:1px solid #284766;color:#a8d8ff;background:rgba(12,23,38,.72)">\${escHtml(activeTabLabel)}</span>\`;\r
    }\r
    ["sadv-refresh-btn", "sadv-save-btn", "sadv-x"].forEach(function (id) {\r
      const el = clone.querySelector("#" + id);\r
      if (el) el.remove();\r
    });\r
    if (topRow && topRow.lastElementChild) {\r
      const meta = document.createElement("div");\r
      meta.style.cssText =\r
        "display:flex;align-items:center;padding:6px 10px;border-radius:999px;border:1px solid #284766;color:#d4ecff;background:rgba(7,13,22,.62);font-size:10px;font-weight:800";\r
      meta.textContent = "Saved " + savedLabel;\r
      topRow.lastElementChild.replaceWith(meta);\r
    }\r
    return \`<!doctype html>\r
<html lang="ko">\r
<head>\r
  <meta charset="utf-8">\r
  <meta name="viewport" content="width=device-width, initial-scale=1">\r
  <title>\${escHtml("SearchAdvisor Snapshot - " + siteLabel)}</title>\r
  <style>\r
    html,body{margin:0;padding:0;background:#06101a;color:#e0ecff;font-family:Apple SD Gothic Neo,system-ui,sans-serif}\r
    body{padding:28px 18px 40px}\r
    a{color:#40c4ff}\r
    :root{--snapshot-panel-width:520px}\r
    .snapshot-meta{
      width:min(100%,var(--snapshot-panel-width));
      box-sizing:border-box;
      margin:0 auto 12px;
      padding:10px 12px;
      border:1px solid #1a2d45;
      border-radius:20px;
      background:
        radial-gradient(circle at top right, rgba(64,196,255,.12), transparent 34%),
        linear-gradient(180deg, rgba(13,24,41,.98), rgba(7,13,22,.98));
      box-shadow:0 26px 60px rgba(0,0,0,.3);
      overflow:hidden;
    }
    .snapshot-meta-details{display:block}
    .snapshot-meta-details[open]{padding-bottom:2px}
    .snapshot-meta-summary{
      list-style:none;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      cursor:pointer;
      user-select:none;
      outline:none;
    }
    .snapshot-meta-summary::-webkit-details-marker{display:none}
    .snapshot-meta-summary::after{
      content:"메타 보기";
      flex-shrink:0;
      padding:4px 9px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.1);
      background:rgba(255,255,255,.03);
      font-size:10px;
      font-weight:700;
      line-height:1;
      color:#8fb4d6;
    }
    .snapshot-meta-details[open] .snapshot-meta-summary::after{content:"메타 접기"}
    .snapshot-meta-title{font-size:13px;font-weight:800;line-height:1.2;color:#f3fbff}
    .snapshot-meta-copy{margin-top:6px;font-size:11px;line-height:1.7;color:#7f9cbc}
    #sadv-p{\r
      position:relative !important;\r
      top:auto !important;\r
      right:auto !important;\r
      width:min(100%,var(--snapshot-panel-width)) !important;\r
      box-sizing:border-box !important;\r
      height:auto !important;\r
      margin:0 auto !important;\r
      border:1px solid #1a2d45 !important;\r
      border-radius:20px !important;\r
      overflow:hidden !important;\r
      box-shadow:0 26px 60px rgba(0,0,0,.3) !important;\r
    }\r
    #sadv-bd{\r
      overflow:visible !important;\r
      max-height:none !important;\r
      height:auto !important;\r
    }\r
  </style>\r
</head>\r
<body>\r
  <div class="snapshot-meta">
    <details class="snapshot-meta-details">
      <summary class="snapshot-meta-summary">
        <span class="snapshot-meta-title">SearchAdvisor Snapshot</span>
      </summary>
      <div class="snapshot-meta-copy">저장 시각: \${escHtml(savedLabel)}<br>프로그램 버전: \${escHtml((window.__SEARCHADVISOR_RUNTIME_VERSION__ || "snapshot"))}</div>
    </details>
  </div>
  \${clone.outerHTML}\r
  <script>\r
    const EXPORT_PAYLOAD = \${JSON.stringify(payload)};\r
    const C = \${JSON.stringify(C)};\r
    const COLORS = \${JSON.stringify(COLORS)};\r
    const DOW = \${JSON.stringify(DOW)};\r
    const PNL = \${JSON.stringify(PNL)};\r
    const CHART_W = PNL - 32;\r
    const TABS = \${JSON.stringify(TABS)};\r
    let TIP = null;\r
    const fmt = (v) => Number(v).toLocaleString();\r
    const fmtD = (s) => s ? s.slice(0, 4) + "-" + s.slice(4, 6) + "-" + s.slice(6, 8) : "";\r
    const fmtB = (s) => s ? s.slice(4, 6) + "/" + s.slice(6, 8) : "";\r
    \${tip.toString()}\r
    \${showTip.toString()}\r
    \${moveTip.toString()}\r
    \${hideTip.toString()}\r
    \${sparkline.toString()}\r
    \${barchart.toString()}\r
    \${xlbl.toString()}\r
    \${chartCard.toString()}\r
    \${kpiGrid.toString()}\r
    \${secTitle.toString()}\r
    \${ibox.toString()}\r
    \${ctrBadge.toString()}\r
    \${hbar.toString()}\r
    \${st.toString()}\r
    \${pearson.toString()}\r
    \${buildSiteSummaryRow.toString()}\r
    \${buildRenderers.toString()}\r
    \${assignColors.toString()}\r
    \${ensureCurrentSite.toString()}\r
    \${buildCombo.toString()}\r
    \${setComboSite.toString()}\r
    \${renderTab.toString()}\r
    \${switchMode.toString()}\r
    \${setAllSitesLabel.toString()}\r
    \${renderAllSites.toString()}\r
    \${loadSiteView.toString()}\r
    async function fetchExposeData(site) {\r
      return (\r
        EXPORT_PAYLOAD.dataBySite[site] || {\r
          expose: null,\r
          crawl: null,\r
          backlink: null,\r
          detailLoaded: false,\r
        }\r
      );\r
    }\r
    async function fetchSiteData(site) {\r
      return fetchExposeData(site);\r
    }\r
    async function fetchExposeDataBatch(sites) {\r
      return sites.map(function (site) {\r
        return {\r
          status: "fulfilled",\r
          value:\r
            EXPORT_PAYLOAD.dataBySite[site] || {\r
              expose: null,\r
              crawl: null,\r
              backlink: null,\r
              detailLoaded: false,\r
            },\r
        };\r
      });\r
    }\r
    let allSites = EXPORT_PAYLOAD.allSites || [];\r
    const INITIAL_MODE = EXPORT_PAYLOAD.curMode || "all";\r
    let curMode = "all";\r
    let curSite = EXPORT_PAYLOAD.curSite || (allSites[0] || null);\r
    let curTab = EXPORT_PAYLOAD.curTab || "overview";\r
    const SITE_COLORS_MAP = {};\r
    const memCache = {};\r
    let siteViewReqId = 0;\r
    const p = document.getElementById("sadv-p");\r
    const modeBar = document.getElementById("sadv-mode-bar");\r
    const siteBar = document.getElementById("sadv-site-bar");\r
    const tabsEl = document.getElementById("sadv-tabs");\r
    const bdEl = document.getElementById("sadv-bd");\r
    const labelEl = document.getElementById("sadv-site-label");\r
    tabsEl.innerHTML = TABS.map(function (t) {\r
      return '<button class="sadv-t' + (t.id === curTab ? " on" : "") + '" data-t="' + t.id + '">' + t.label + "</button>";\r
    }).join("");\r
    tabsEl.addEventListener("click", function (e) {\r
      const t = e.target.closest("[data-t]");\r
      if (!t || t.dataset.t === curTab) return;\r
      curTab = t.dataset.t;\r
      tabsEl.querySelectorAll(".sadv-t").forEach(function (b) {\r
        b.classList.remove("on");\r
      });\r
      t.classList.add("on");\r
      if (window.__sadvR) renderTab(window.__sadvR);\r
    });\r
    document.getElementById("sadv-combo-btn").addEventListener("click", function (e) {\r
      e.stopPropagation();\r
      const wrap = document.getElementById("sadv-combo-wrap");\r
      wrap.classList.toggle("open");\r
      if (wrap.classList.contains("open")) {\r
        setTimeout(function () {\r
          const inp = document.getElementById("sadv-combo-search");\r
          if (inp) {\r
            inp.style.display = "block";\r
            inp.value = "";\r
            inp.focus();\r
            inp.oninput = function () {\r
              const q = inp.value.toLowerCase();\r
              document.querySelectorAll(".sadv-combo-item").forEach(function (el) {\r
                el.style.display = !q || el.dataset.site.toLowerCase().includes(q) ? "flex" : "none";\r
              });\r
            };\r
          }\r
        }, 50);\r
      }\r
    });\r
    document.addEventListener("click", function (e) {\r
      const wrap = document.getElementById("sadv-combo-wrap");\r
      if (wrap && !wrap.contains(e.target)) wrap.classList.remove("open");\r
    });\r
    modeBar.addEventListener("click", function (e) {\r
      const m = e.target.closest("[data-m]");\r
      if (!m) return;\r
      switchMode(m.dataset.m);\r
    });\r
    assignColors();\r
    window.__sadvRows = (EXPORT_PAYLOAD.summaryRows || []).filter(function (row) {\r
      return row && allSites.includes(row.site);\r
    });\r
    ensureCurrentSite();\r
    buildCombo(window.__sadvRows.length ? window.__sadvRows : null);\r
    if (curSite) setComboSite(curSite);\r
    setAllSitesLabel();\r
    switchMode(INITIAL_MODE);\r
  <\/script>\r
</body>\r
</html>\`;\r
  }\r
  async function downloadSnapshot() {\r
    const btn = document.getElementById("sadv-save-btn");\r
    const originalText = btn.textContent;\r
    btn.disabled = true;\r
    btn.textContent = "0/" + allSites.length;\r
    try {\r
      const savedAt = new Date();\r
      const payload = await collectExportData(function (done, total) {\r
        btn.textContent = done + "/" + total;\r
      });\r
      const html = buildSnapshotHtml(savedAt, payload);\r
      const fileName =
        "searchadvisor-" +
        accountIdFromLabel(accountLabel) +
        "-" +
        stampFile(savedAt) +
        ".html";
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });\r
      const link = document.createElement("a");\r
      link.href = URL.createObjectURL(blob);\r
      link.download = fileName;\r
      document.body.appendChild(link);\r
      link.click();\r
      link.remove();\r
      setTimeout(function () {\r
        URL.revokeObjectURL(link.href);\r
      }, 1000);\r
    } catch (e) {\r
      console.error(e);\r
      alert("HTML 저장 중 오류가 발생했어요. 다시 시도해주세요.");\r
    } finally {\r
      btn.disabled = false;\r
      btn.textContent = originalText;\r
    }\r
  }\r
  function lsGet(k) {\r
    try {\r
      const v = localStorage.getItem(k);\r
      return v ? JSON.parse(v) : null;\r
    } catch (e) {\r
      return null;\r
    }\r
  }\r
  function lsSet(k, v) {\r
    try {\r
      localStorage.setItem(k, JSON.stringify(v));\r
    } catch (e) {}\r
  }\r
  function getCachedData(site) {\r
    const d = lsGet(DATA_LS_PREFIX + btoa(site).replace(/=/g, ""));\r
    if (!d) return null;\r
    if (Date.now() - d.ts > DATA_TTL) return null;\r
    return d.data;\r
  }\r
  function setCachedData(site, data) {\r
    lsSet(DATA_LS_PREFIX + btoa(site).replace(/=/g, ""), {\r
      ts: Date.now(),\r
      data,\r
    });\r
  }\r
  function clearCachedData(site) {\r
    try {\r
      localStorage.removeItem(DATA_LS_PREFIX + btoa(site).replace(/=/g, ""));\r
    } catch (e) {}\r
  }\r
  const accountLabel = getAccountLabel();\r
  applyAccountBadge(accountLabel);\r
  let encId = null;\r
  try {\r
    encId =\r
      (window.__NUXT__ &&\r
        window.__NUXT__.state &&\r
        window.__NUXT__.state.authUser &&\r
        window.__NUXT__.state.authUser.enc_id) ||\r
      null;\r
  } catch (e) {}\r
  if (!encId) {\r
    try {\r
      for (const k of Object.keys(window)) {\r
        const v = window[k];\r
        if (\r
          v &&\r
          typeof v === "object" &&\r
          typeof v.enc_id === "string" &&\r
          v.enc_id.length === 64\r
        ) {\r
          encId = v.enc_id;\r
          break;\r
        }\r
      }\r
    } catch (e) {}\r
  }\r
  if (!encId) {\r
    try {\r
      for (const e of performance.getEntriesByType("resource")) {\r
        const m = e.name.match(new RegExp("([a-f0-9]{64})"));\r
        if (m) {\r
          encId = m[1];\r
          break;\r
        }\r
      }\r
    } catch (e) {}\r
  }\r
  if (!encId) {\r
    const host = (location && location.hostname) || "",\r
      onAdvisor = /searchadvisor\\.naver\\.com$/i.test(host),\r
      stateLabel = onAdvisor ? "초기화 실패" : "실행 위치 오류",\r
      title = onAdvisor\r
        ? "로그인 상태를 확인해주세요"\r
        : "서치어드바이저 페이지에서 실행해주세요",\r
      desc = onAdvisor\r
        ? "네이버 서치어드바이저에 로그인한 뒤 콘솔 페이지에서 다시 실행해주세요."\r
        : "이 스크립트는 네이버 서치어드바이저 콘솔 전용입니다. 아래 버튼으로 서치어드바이저를 연 뒤 다시 실행해주세요.";\r
    document.getElementById("sadv-site-label").innerHTML =\r
      \`<span>\${stateLabel}</span>\`;\r
    document.getElementById("sadv-bd").innerHTML =\r
      \`<div style="padding:28px 20px;text-align:center"><div style="font-size:32px">\${onAdvisor ? "\\uD83D\\uDD12" : "\\uD83E\\uDDED"}</div><div style="color:#ffca28;font-weight:800;margin:10px 0 8px">\${title}</div><div style="color:#7a9ab8;font-size:12px;line-height:1.8">\${desc}</div><div style="margin-top:14px"><a href="https://searchadvisor.naver.com/" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;background:#132236;border:1px solid #40c4ff55;color:#40c4ff;text-decoration:none;border-radius:8px;padding:9px 12px;font-size:12px;font-weight:700">서치어드바이저 열기 ↗</a></div><div style="margin-top:12px;font-size:10px;color:#3d5a78">현재 페이지: \${(host || "unknown").replace(/"/g, "&quot;")}</div></div>\`;\r
    return;\r
  }\r
  let allSites = [];\r
  async function loadSiteList(force = false) {\r
    if (!force) {\r
      const c = lsGet(SITE_LS_KEY);\r
      if (c && c.ts && Date.now() - c.ts < 864e5 && c.sites && c.sites.length) {\r
        allSites = c.sites;\r
        return;\r
      }\r
    }\r
    try {\r
      const r = await fetch(\r
        "https://searchadvisor.naver.com/api-board/list/" + encId,\r
        { credentials: "include", headers: { accept: "application/json" } },\r
      );\r
      if (r.ok) {\r
        const j = await r.json();\r
        allSites = (j.items || [])\r
          .filter((s) => s.verified)\r
          .map((s) => s.site)\r
          .filter(Boolean)\r
          .sort();\r
      }\r
    } catch (e) {}\r
    if (!allSites.length) {\r
      const sm = location.search.match(/site=([^&]+)/);\r
      if (sm) allSites = [decodeURIComponent(sm[1])];\r
    }\r
    if (allSites.length)\r
      lsSet(SITE_LS_KEY, { ts: Date.now(), sites: allSites });\r
  }\r
  function assignColors() {\r
    allSites.forEach((s, i) => {\r
      if (!SITE_COLORS_MAP[s]) SITE_COLORS_MAP[s] = COLORS[i % COLORS.length];\r
    });\r
  }\r
  const memCache = {};\r
  function normalizeSiteData(data) {\r
    if (!data) return null;\r
    const expose = data.expose || null,\r
      detailLoaded =\r
        typeof data.detailLoaded === "boolean"\r
          ? data.detailLoaded\r
          : "crawl" in data || "backlink" in data;\r
    return {\r
      expose,\r
      crawl: detailLoaded ? (data.crawl ?? null) : null,\r
      backlink: detailLoaded ? (data.backlink ?? null) : null,\r
      detailLoaded,\r
    };\r
  }\r
  function buildSiteSummaryRow(site, data) {\r
    const item = (data && data.expose && data.expose.items && data.expose.items[0]) || {};\r
    const logs = (item.logs || []).sort((a, b) => a.date.localeCompare(b.date));\r
    const clicks = logs.map((r) => r.clickCount || 0);\r
    const exposes = logs.map((r) => r.exposeCount || 0);\r
    const totalC = clicks.reduce((a, b) => a + b, 0);\r
    const totalE = exposes.reduce((a, b) => a + b, 0);\r
    const avgCtr = totalE ? (totalC / totalE) * 100 : 0;\r
    const cSt = st(clicks);\r
    const period = item.period || {};\r
    return {\r
      site,\r
      totalC,\r
      totalE,\r
      avgCtr: +avgCtr.toFixed(2),\r
      trend: cSt.slope || 0,\r
      latestClick: clicks.slice(-7).reduce((a, b) => a + b, 0),\r
      prevClickRatio: period.prevClickRatio,\r
      logs,\r
      clicks,\r
    };\r
  }\r
  const inflightExpose = {};\r
  const inflightDetail = {};\r
  async function fetchExposeData(site) {\r
    if (memCache[site] && memCache[site].expose) return memCache[site];\r
    const cached = normalizeSiteData(getCachedData(site));\r
    if (cached && cached.expose) {\r
      memCache[site] = cached;\r
      return cached;\r
    }\r
    if (inflightExpose[site]) return inflightExpose[site];\r
    const enc = encodeURIComponent(site),\r
      base = "https://searchadvisor.naver.com/api-console/report";\r
    inflightExpose[site] = (async function () {\r
      try {\r
        const exposeRes = await fetch(\r
          base + "/expose/" + encId + "?site=" + enc + "&period=90&device=&topN=50",\r
          { credentials: "include", headers: { accept: "application/json" } },\r
        );\r
        const expose = exposeRes.ok ? await exposeRes.json() : null;\r
        const result = {\r
          expose,\r
          crawl: null,\r
          backlink: null,\r
          detailLoaded: false,\r
        };\r
        memCache[site] = result;\r
        setCachedData(site, result);\r
        return result;\r
      } finally {\r
        delete inflightExpose[site];\r
      }\r
    })();\r
    return inflightExpose[site];\r
  }\r
  async function fetchSiteData(site) {\r
    const baseData = await fetchExposeData(site);\r
    if (baseData.detailLoaded) return baseData;\r
    if (inflightDetail[site]) return inflightDetail[site];\r
    const enc = encodeURIComponent(site),\r
      base = "https://searchadvisor.naver.com/api-console/report";\r
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");\r
    const d90 = new Date(Date.now() - 90 * 864e5)\r
      .toISOString()\r
      .slice(0, 10)\r
      .replace(/-/g, "");\r
    inflightDetail[site] = (async function () {\r
      try {\r
        const [cR, bR] = await Promise.allSettled([\r
          fetch(\r
            base +\r
              "/crawl/" +\r
              encId +\r
              "?site=" +\r
              enc +\r
              "&start_date=" +\r
              d90 +\r
              "&end_date=" +\r
              today +\r
              "&isAlly=false&count=5",\r
            { credentials: "include", headers: { accept: "application/json" } },\r
          ),\r
          fetch(\r
            base +\r
              "/backlink/" +\r
              encId +\r
              "?site=" +\r
              enc +\r
              "&start_date=" +\r
              d90 +\r
              "&end_date=" +\r
              today,\r
            { credentials: "include", headers: { accept: "application/json" } },\r
          ),\r
        ]);\r
        const crawl =\r
          cR.status === "fulfilled" && cR.value.ok ? await cR.value.json() : null;\r
        const backlink =\r
          bR.status === "fulfilled" && bR.value.ok ? await bR.value.json() : null;\r
        const result = { ...baseData, crawl, backlink, detailLoaded: true };\r
        memCache[site] = result;\r
        setCachedData(site, result);\r
        return result;\r
      } finally {\r
        delete inflightDetail[site];\r
      }\r
    })();\r
    return inflightDetail[site];\r
  }\r
  let curMode = "all",\r
    curSite = null,\r
    curTab = "overview";\r
  let siteViewReqId = 0;\r
  const modeBar = document.getElementById("sadv-mode-bar"),\r
    siteBar = document.getElementById("sadv-site-bar"),\r
    tabsEl = document.getElementById("sadv-tabs"),\r
    bdEl = document.getElementById("sadv-bd"),\r
    labelEl = document.getElementById("sadv-site-label");\r
  function ensureCurrentSite() {\r
    if (!allSites.length) {\r
      curSite = null;\r
      return null;\r
    }\r
    if (!curSite || !allSites.includes(curSite)) curSite = allSites[0];\r
    return curSite;\r
  }\r
  function setAllSitesLabel() {\r
    labelEl.innerHTML = \`<span>\${allSites.length}개 사이트 등록됨</span>\`;\r
  }\r
  function buildCombo(rows) {\r
    const drop = document.getElementById("sadv-combo-drop");\r
    const rowsMap = {};\r
    if (rows && rows.length)\r
      rows.forEach((r) => {\r
        if (allSites.includes(r.site)) rowsMap[r.site] = r;\r
      });\r
    const rowSites =\r
      rows && rows.length\r
        ? rows.map((r) => r.site).filter((site) => allSites.includes(site))\r
        : [];\r
    const restSites = allSites.filter((s) => !rowsMap[s]);\r
    const orderedSites = [...rowSites, ...restSites];\r
    drop.innerHTML =\r
      '<div style="padding:6px 6px 4px"><input id="sadv-combo-search" placeholder="🔍  사이트 검색..."></div><div style="font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#3d5a78;padding:3px 9px 6px;border-bottom:1px solid #1a2d45;margin-bottom:3px">전체 ' +\r
      orderedSites.length +\r
      "개 · 클릭많은순</div>";\r
    orderedSites.forEach(function (s) {\r
      const col = SITE_COLORS_MAP[s] || C.muted,\r
        shortName = s.replace(/^https?:\\/\\//, ""),\r
        row = rowsMap[s],\r
        clickStr = row ? fmt(row.totalC) + "클릭" : "—",\r
        clickCol = row ? C.green : C.muted;\r
      const item = document.createElement("div");\r
      item.className = "sadv-combo-item" + (s === curSite ? " active" : "");\r
      item.dataset.site = s;\r
      item.innerHTML = \`<div class="sadv-combo-item-dot" style="background:\${col}"></div><div class="sadv-combo-item-info"><div class="sadv-combo-item-name">\${shortName.split("/")[0]}</div><div class="sadv-combo-item-url">\${shortName}</div></div><div class="sadv-combo-item-click" style="color:\${clickCol}">\${clickStr}</div>\`;\r
      item.addEventListener("click", function () {\r
        setComboSite(s);\r
        document.getElementById("sadv-combo-wrap").classList.remove("open");\r
      });\r
      drop.appendChild(item);\r
    });\r
  }\r
  function setComboSite(site) {\r
    if (!site || !allSites.includes(site)) return;\r
    curSite = site;\r
    const col = SITE_COLORS_MAP[site] || C.muted,\r
      shortName = site.replace(/^https?:\\/\\//, "");\r
    document.getElementById("sadv-combo-dot").style.background = col;\r
    document.getElementById("sadv-combo-label").textContent = shortName;\r
    document.querySelectorAll(".sadv-combo-item").forEach((el) => {\r
      el.classList.toggle("active", el.dataset.site === site);\r
    });\r
    if (curMode === "site") loadSiteView(site);\r
  }\r
  document\r
    .getElementById("sadv-combo-btn")\r
    .addEventListener("click", function (e) {\r
      e.stopPropagation();\r
      const wrap = document.getElementById("sadv-combo-wrap");\r
      wrap.classList.toggle("open");\r
      if (wrap.classList.contains("open")) {\r
        setTimeout(function () {\r
          const inp = document.getElementById("sadv-combo-search");\r
          if (inp) {\r
            inp.style.display = "block";\r
            inp.value = "";\r
            inp.focus();\r
            inp.oninput = function () {\r
              const q = inp.value.toLowerCase();\r
              document\r
                .querySelectorAll(".sadv-combo-item")\r
                .forEach(function (el) {\r
                  el.style.display =\r
                    !q || el.dataset.site.toLowerCase().includes(q)\r
                      ? "flex"\r
                      : "none";\r
                });\r
            };\r
          }\r
        }, 50);\r
      }\r
    });\r
  document.addEventListener("click", function (e) {\r
    const wrap = document.getElementById("sadv-combo-wrap");\r
    if (wrap && !wrap.contains(e.target)) wrap.classList.remove("open");\r
  });\r
  const TABS = [\r
    { id: "overview", label: "📊 개요" },\r
    { id: "daily", label: "📅 일별" },\r
    { id: "urls", label: "🔗 URL" },\r
    { id: "queries", label: "🔍 검색어" },\r
    { id: "pattern", label: "📆 요일" },\r
    { id: "crawl", label: "🕷️ 크롤" },\r
    { id: "backlink", label: "🔗 백링크" },\r
    { id: "insight", label: "💡 인사이트" },\r
  ];\r
  tabsEl.innerHTML = TABS.map(\r
    (t) =>\r
      \`<button class="sadv-t\${t.id === curTab ? " on" : ""}" data-t="\${t.id}">\${t.label}</button>\`,\r
  ).join("");\r
  tabsEl.addEventListener("click", function (e) {\r
    const t = e.target.closest("[data-t]");\r
    if (!t || t.dataset.t === curTab) return;\r
    curTab = t.dataset.t;\r
    tabsEl.querySelectorAll(".sadv-t").forEach((b) => b.classList.remove("on"));\r
    t.classList.add("on");\r
    if (window.__sadvR) renderTab(window.__sadvR);\r
  });\r
  function renderTab(R) {\r
    bdEl.innerHTML = "";\r
    bdEl.appendChild(R[curTab]());\r
    bdEl.scrollTop = 0;\r
  }\r
  modeBar.addEventListener("click", function (e) {\r
    const m = e.target.closest("[data-m]");\r
    if (!m) return;\r
    switchMode(m.dataset.m);\r
  });\r
  function switchMode(mode) {\r
    curMode = mode;\r
    modeBar\r
      .querySelectorAll(".sadv-mode")\r
      .forEach((b) => b.classList.remove("on"));\r
    modeBar.querySelector(\`[data-m="\${mode}"]\`).classList.add("on");\r
    if (mode === "all") {\r
      siteBar.classList.remove("show");\r
      tabsEl.classList.remove("show");\r
      setAllSitesLabel();\r
      renderAllSites();\r
    } else {\r
      siteBar.classList.add("show");\r
      tabsEl.classList.add("show");\r
      ensureCurrentSite();\r
      if (curSite) loadSiteView(curSite);\r
    }\r
  }\r
  async function fetchExposeDataBatch(sites) {\r
    const results = [];\r
    for (let i = 0; i < sites.length; i += ALL_SITES_BATCH) {\r
      results.push(\r
        ...(await Promise.allSettled(\r
          sites.slice(i, i + ALL_SITES_BATCH).map((s) => fetchExposeData(s)),\r
        )),\r
      );\r
    }\r
    return results;\r
  }\r
  document\r
    .getElementById("sadv-refresh-btn")\r
    .addEventListener("click", async function () {\r
      const btn = this;\r
      btn.classList.add("spinning");\r
      try {\r
        await loadSiteList(true);\r
        assignColors();\r
        ensureCurrentSite();\r
        if (curMode === "all") {\r
          allSites.forEach(function (site) {\r
            delete memCache[site];\r
            clearCachedData(site);\r
          });\r
        } else if (curSite) {\r
          delete memCache[curSite];\r
          clearCachedData(curSite);\r
        }\r
        buildCombo(window.__sadvRows || null);\r
        if (curMode === "all") await renderAllSites();\r
        else if (curSite) await loadSiteView(curSite);\r
        if (curMode === "all") setAllSitesLabel();\r
      } finally {\r
        btn.classList.remove("spinning");\r
      }\r
    });\r
  document\r
    .getElementById("sadv-save-btn")\r
    .addEventListener("click", function () {\r
      downloadSnapshot();\r
    });\r
  async function renderAllSites() {\r
    setAllSitesLabel();\r
    bdEl.innerHTML =\r
      '<div style="padding:30px 20px;text-align:center;color:#3d5a78">⏳ 전체 데이터 로딩 중...</div>';\r
    if (!allSites.length) {\r
      bdEl.innerHTML =\r
        '<div style="padding:30px 20px;text-align:center"><div style="font-size:32px">↻</div><div style="color:#ffca28;font-weight:700;margin:10px 0">사이트 목록을 찾을 수 없어요</div><div style="color:#7a9ab8;font-size:12px;line-height:2">↻ 버튼을 눌러 새로고침 해보세요<br>또는 서치어드바이저 콘솔 페이지에서 실행해주세요</div></div>';\r
      return;\r
    }\r
    const sitesToLoad = allSites;\r
    const results = await fetchExposeDataBatch(sitesToLoad);\r
    const rows = sitesToLoad.map((site, i) =>\r
      results[i].status === "fulfilled"\r
        ? buildSiteSummaryRow(site, results[i].value)\r
        : buildSiteSummaryRow(site, null),\r
    );\r
    rows.sort((a, b) => b.totalC - a.totalC);\r
    window.__sadvRows = rows;\r
    buildCombo(rows);\r
    const wrap = document.createElement("div");\r
    const grandC = rows.reduce((a, r) => a + r.totalC, 0),\r
      grandE = rows.reduce((a, r) => a + r.totalE, 0),\r
      avgCtrAll = grandE ? (grandC / grandE) * 100 : 0;\r
    wrap.appendChild(\r
      kpiGrid([\r
        {\r
          label: "전체 클릭",\r
          value: (grandC / 10000).toFixed(1) + "만",\r
          sub: "90일 합계",\r
          color: C.green,\r
        },\r
        {\r
          label: "전체 노출",\r
          value: (grandE / 10000000).toFixed(1) + "천만",\r
          sub: "90일 합계",\r
          color: C.blue,\r
        },\r
        {\r
          label: "평균CTR",\r
          value: avgCtrAll.toFixed(2) + "%",\r
          sub: "90일 평균",\r
          color: C.amber,\r
        },\r
        {\r
          label: "활성사이트",\r
          value: rows.filter((r) => r.totalC > 0).length + "개",\r
          color: C.teal,\r
        },\r
      ]),\r
    );\r
    wrap.appendChild(
      secTitle(
        "클릭 랭킹 TOP " +
          Math.min(rows.length, 30) +
          ' <span style="font-size:9px;font-weight:400;color:#3d5a78;letter-spacing:0">90일 합계</span>',
      ),
    );
    const top30 = rows.slice(0, 30);
    wrap.appendChild(
      chartCard(
        "TOP " + top30.length + " 클릭",
        "",
        C.green,
        barchart(
          top30.map((r) => r.totalC),
          top30.map((r) => r.site.replace(/^https?:\\/\\//, "")),
          80,
          C.green,
          "회",
        ),
        top30.map((_, i) => "#" + (i + 1)),
      ),
    );
    wrap.appendChild(secTitle("사이트별 상세"));\r
    rows.forEach(function (r, i) {\r
      const col = SITE_COLORS_MAP[r.site] || COLORS[i % COLORS.length];\r
      const card = document.createElement("div");\r
      card.className = "sadv-allcard";\r
      card.style.borderTop = \`2px solid \${col}33\`;\r
      const shortName = r.site.replace(/^https?:\\/\\//, ""),\r
        trendCol = r.trend > 0 ? C.green : r.trend < 0 ? C.red : C.sub,\r
        trendIcon = r.trend > 0 ? "↗" : r.trend < 0 ? "↘" : "→";\r
      const prevBadge =\r
        r.prevClickRatio != null\r
          ? \`<span style="font-size:10px;color:\${r.prevClickRatio >= 0 ? C.green : C.red};background:\${r.prevClickRatio >= 0 ? C.green : C.red}15;padding:1px 6px;border-radius:10px;margin-left:4px">\${r.prevClickRatio >= 0 ? "+" : ""}\${r.prevClickRatio}%</span>\`\r
          : "";\r
      card.innerHTML = \`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="display:flex;align-items:center;gap:6px;min-width:0"><div style="width:8px;height:8px;border-radius:50%;background:\${col};flex-shrink:0"></div><span style="font-size:12px;font-weight:700;line-height:1.3;color:#e0ecff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px">\${shortName}</span>\${prevBadge}</div><span style="font-size:11px;line-height:1.2;color:\${trendCol};flex-shrink:0">\${trendIcon}</span></div><div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-bottom:8px"><div style="text-align:center;min-width:0"><div style="font-size:13px;font-weight:800;line-height:1.1;color:\${C.green}">\${fmt(r.totalC)}</div><div style="font-size:9px;line-height:1.35;color:#6482a2;margin-top:3px">클릭</div></div><div style="text-align:center;min-width:0"><div style="font-size:13px;font-weight:800;line-height:1.1;color:\${C.blue}">\${(r.totalE / 10000).toFixed(1)}만</div><div style="font-size:9px;line-height:1.35;color:#6482a2;margin-top:3px">노출</div></div><div style="text-align:center;min-width:0"><div style="font-size:13px;font-weight:800;line-height:1.1;color:\${C.amber}">\${r.avgCtr}%</div><div style="font-size:9px;line-height:1.35;color:#6482a2;margin-top:3px">CTR</div></div><div style="text-align:center;min-width:0"><div style="font-size:13px;font-weight:800;line-height:1.1;color:\${trendCol}">\${fmt(Math.round(r.trend * 7))}</div><div style="font-size:9px;line-height:1.35;color:#6482a2;margin-top:3px">주간추세</div></div></div>\`;\r
      if (r.clicks && r.clicks.length > 1) {\r
        const miniDates = (r.logs || []).map((l) => fmtB(l.date));\r
        const mini = sparkline(r.clicks, miniDates, 34, col, "회");\r
        mini.style.cssText += "opacity:.7";\r
        card.appendChild(mini);\r
      }\r
      card.addEventListener("mouseenter", () => {\r
        card.style.borderColor = col + "66";\r
      });\r
      card.addEventListener("mouseleave", () => {\r
        card.style.borderColor = "#1a2d45";\r
        card.style.borderTopColor = col + "33";\r
      });\r
      card.addEventListener("click", function () {\r
        curSite = r.site;\r
        switchMode("site");\r
      });\r
      wrap.appendChild(card);\r
    });\r
    bdEl.innerHTML = "";\r
    bdEl.appendChild(wrap);\r
    bdEl.scrollTop = 0;\r
  }\r
  async function loadSiteView(site) {\r
    if (!site) return;\r
    const requestId = ++siteViewReqId;\r
    labelEl.innerHTML = \`<span>\${site.replace(/^https?:\\/\\//, "")}</span>\`;\r
    bdEl.innerHTML = \`<div style="padding:50px 20px;text-align:center;color:#3d5a78">⏳ 로딩 중...</div>\`;\r
    const d = await fetchSiteData(site);\r
    if (requestId !== siteViewReqId || site !== curSite) return;\r
    if (!d.expose || !d.expose.items || !d.expose.items.length) {\r
      bdEl.innerHTML =\r
        '<div style="padding:30px 20px;text-align:center"><div style="font-size:32px">⚠️</div><div style="color:#ff5252;font-weight:700">데이터 없음</div></div>';\r
      return;\r
    }\r
    const R = buildRenderers(d.expose, d.crawl, d.backlink);\r
    window.__sadvR = R;\r
    renderTab(R);\r
  }\r
  function buildRenderers(expose, crawlData, backlinkData) {\r
    const item = (expose && expose.items && expose.items[0]) || {};\r
    const period = item.period || {},\r
      rawLogs = item.logs || [],\r
      urls = item.urls || [],\r
      queries = item.querys || [];\r
    const logs = [...rawLogs].sort((a, b) => a.date.localeCompare(b.date));\r
    const dates = logs.map((r) => fmtB(r.date)),\r
      clicks = logs.map((r) => r.clickCount),\r
      exposes = logs.map((r) => r.exposeCount),\r
      ctrs = logs.map((r) => r.ctr);\r
    const cSt = st(clicks),\r
      totalC = clicks.reduce((a, b) => a + b, 0),\r
      totalE = exposes.reduce((a, b) => a + b, 0),\r
      avgCtr = totalE ? ((totalC / totalE) * 100).toFixed(2) : "0.00",\r
      corr = pearson(exposes, clicks);\r
    const dowAcc = {};\r
    logs.forEach(function (r) {\r
      const dw = new Date(fmtD(r.date)).getDay();\r
      if (!dowAcc[dw]) dowAcc[dw] = { c: 0, n: 0 };\r
      dowAcc[dw].c += r.clickCount;\r
      dowAcc[dw].n++;\r
    });\r
    const dowRows = DOW.map(function (l, i) {\r
      return {\r
        label: l,\r
        avgC: dowAcc[i] ? Math.round(dowAcc[i].c / dowAcc[i].n) : 0,\r
        n: dowAcc[i] ? dowAcc[i].n : 0,\r
      };\r
    });\r
    const bestDow = dowRows.reduce(\r
        (a, b) => (b.avgC > a.avgC ? b : a),\r
        dowRows[0],\r
      ),\r
      worstDow = dowRows\r
        .filter((x) => x.n > 0)\r
        .reduce((a, b) => (b.avgC < a.avgC ? b : a), dowRows[0]);\r
    const crawlStats =\r
      (crawlData &&\r
        crawlData.items &&\r
        crawlData.items[0] &&\r
        crawlData.items[0].stats) ||\r
      [];\r
    const crawlSorted = [...crawlStats].sort((a, b) =>\r
      a.date.localeCompare(b.date),\r
    );\r
    const blData =\r
      (backlinkData && backlinkData.items && backlinkData.items[0]) || {};\r
    const blTime = (blData.countTime || []).sort((a, b) =>\r
      a.timeStamp.localeCompare(b.timeStamp),\r
    );\r
    const blTopDomains = blData.topDomain || [];\r
    return {\r
      overview: function () {\r
        const wrap = document.createElement("div");\r
        wrap.appendChild(\r
          kpiGrid([\r
            {\r
              label: "총 클릭",\r
              value: fmt(totalC) + "회",\r
              sub: "90일 합계",\r
              color: C.green,\r
            },\r
            {\r
              label: "총 노출",\r
              value: (totalE / 10000).toFixed(1) + "만",\r
              sub: "90일 합계",\r
              color: C.blue,\r
            },\r
            {\r
              label: "평균CTR",\r
              value: avgCtr + "%",\r
              color: C.amber,\r
              sub: "90일 평균",\r
            },\r
            { label: "분석기간", value: logs.length + "일", color: C.sub },\r
          ]),\r
        );\r
        if (period.prevClickRatio !== undefined)\r
          wrap.appendChild(\r
            kpiGrid([\r
              {\r
                label: "클릭 전기비",\r
                value:\r
                  (period.prevClickRatio >= 0 ? "+" : "") +\r
                  period.prevClickRatio +\r
                  "%",\r
                color: period.prevClickRatio >= 0 ? C.green : C.red,\r
                sub: "90일 전 대비",\r
              },\r
              {\r
                label: "노출 전기비",\r
                value:\r
                  (period.prevExposeRatio >= 0 ? "+" : "") +\r
                  period.prevExposeRatio +\r
                  "%",\r
                color: period.prevExposeRatio >= 0 ? C.green : C.red,\r
                sub: "90일 전 대비",\r
              },\r
              {\r
                label: "CTR 전기비",\r
                value:\r
                  (period.prevCtrRatio >= 0 ? "+" : "") +\r
                  period.prevCtrRatio +\r
                  "%",\r
                color: period.prevCtrRatio >= 0 ? C.green : C.red,\r
                sub: "90일 전 대비",\r
              },\r
            ]),\r
          );\r
        wrap.appendChild(\r
          chartCard(\r
            "일별 클릭수",\r
            "최고 " + fmt(Math.max(...clicks)) + "회",\r
            C.green,\r
            sparkline(clicks, dates, 80, C.green, "회"),\r
            dates,\r
          ),\r
        );\r
        wrap.appendChild(\r
          chartCard(\r
            "일별 노출수",\r
            "최고 " + fmt(Math.max(...exposes)),\r
            C.blue,\r
            sparkline(exposes, dates, 65, C.blue, "회"),\r
            dates,\r
          ),\r
        );\r
        wrap.appendChild(\r
          chartCard(\r
            "일별 CTR",\r
            "평균 " + avgCtr + "%",\r
            C.amber,\r
            sparkline(ctrs, dates, 55, C.amber, "%"),\r
            dates,\r
          ),\r
        );\r
        const topEl = document.createElement("div");\r
        topEl.appendChild(secTitle("클릭 TOP 3"));\r
        [...logs]\r
          .sort((a, b) => b.clickCount - a.clickCount)\r
          .slice(0, 3)\r
          .forEach(function (r, i) {\r
            const d = document.createElement("div");\r
            d.style.cssText =\r
              "display:flex;justify-content:space-between;align-items:center;padding:8px 11px;background:#0d1829;border:1px solid " +\r
              (i === 0 ? "#00e67644" : "#1a2d45") +\r
              ";border-radius:8px;margin-bottom:4px";\r
            d.innerHTML = \`<span>\${["🥇", "🥈", "🥉"][i]} <span style="font-size:11px;color:#7a9ab8">\${fmtD(r.date)}</span></span><b style="color:#00e676">\${fmt(r.clickCount)}회</b>\`;\r
            topEl.appendChild(d);\r
          });\r
        wrap.appendChild(topEl);\r
        return wrap;\r
      },\r
      daily: function () {\r
        const wrap = document.createElement("div"),\r
          mxC = Math.max(...clicks) || 1;\r
        wrap.appendChild(\r
          chartCard(\r
            "일별 클릭 추이",\r
            "최고 " + fmt(mxC) + "회",\r
            C.green,\r
            sparkline(clicks, dates, 90, C.green, "회"),\r
            dates,\r
          ),\r
        );\r
        wrap.appendChild(secTitle("날짜별 상세"));\r
        [...logs].reverse().forEach(function (r) {\r
          const isOut = cSt.outliers && cSt.outliers.includes(r.clickCount),\r
            d = document.createElement("div");\r
          d.style.cssText = "margin-bottom:7px";\r
          d.innerHTML = \`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1px"><span style="font-size:11px;color:#7a9ab8">\${fmtD(r.date)} (\${DOW[new Date(fmtD(r.date)).getDay()]})\${isOut ? " (이상치)" : ""}</span><span style="font-size:12px;font-weight:700;color:\${r.clickCount >= (cSt.mean || 0) ? C.green : C.text}">\${fmt(r.clickCount)}회</span></div>\${hbar(r.clickCount, mxC, r.clickCount >= (cSt.mean || 0) ? C.green : C.blue)}<div style="display:flex;gap:10px;font-size:10px;color:#3d5a78"><span>노출 <b style="color:#7a9ab8">\${fmt(r.exposeCount)}</b></span><span>CTR \${ctrBadge(r.ctr)}</span></div>\`;\r
          wrap.appendChild(d);\r
        });\r
        return wrap;\r
      },\r
      urls: function () {\r
        const wrap = document.createElement("div"),\r
          mxC = Math.max(...urls.map((u) => u.clickCount)) || 1;\r
        if (!urls.length) {\r
          const em = document.createElement("div");\r
          em.style.cssText = "text-align:center;padding:30px;color:#3d5a78";\r
          em.textContent = "URL 데이터 없음";\r
          wrap.appendChild(em);\r
          return wrap;\r
        }\r
        wrap.appendChild(\r
          chartCard(\r
            "URL별 클릭 TOP 10",\r
            "총 " + urls.length + "개",\r
            C.green,\r
            barchart(\r
              urls.slice(0, 10).map((u) => u.clickCount),\r
              urls.slice(0, 10).map((_, i) => "#" + (i + 1)),\r
              65,\r
              C.green,\r
              "회",\r
            ),\r
            urls.slice(0, 10).map((_, i) => "#" + (i + 1)),\r
          ),\r
        );\r
        wrap.appendChild(secTitle("URL 상세"));\r
        urls.forEach(function (u, i) {\r
          const pageUrl = (() => {\r
              try {\r
                return /^https?:\\/\\//.test(u.key)\r
                  ? u.key\r
                  : new URL(u.key, curSite).toString();\r
              } catch (e) {\r
                return u.key;\r
              }\r
            })(),\r
            linkLabel =\r
              pageUrl.length > 92 ? pageUrl.slice(0, 92) + "..." : pageUrl,\r
            d = document.createElement("div");\r
          d.style.cssText =\r
            "background:#0d1829;border:1px solid " +\r
            (i === 0 ? "#00e67633" : "#1a2d45") +\r
            ";border-radius:9px;padding:10px;margin-bottom:7px";\r
          d.innerHTML = \`<div style="display:flex;gap:8px;align-items:flex-start"><span style="font-size:10px;font-weight:800;color:\${i === 0 ? C.green : "#3d5a78"};min-width:20px">#\${i + 1}</span><div style="flex:1;min-width:0"><a href="\${pageUrl.replace(/"/g, "&quot;")}" target="_blank" rel="noopener noreferrer" style="display:block;font-size:11px;color:#40c4ff;line-height:1.5;margin-bottom:4px;word-break:break-all;text-decoration:none">\${linkLabel.replace(/"/g, "&quot;")}</a>\${hbar(u.clickCount, mxC, i === 0 ? C.green : C.blue)}<div style="display:flex;gap:9px;font-size:10px;color:#3d5a78"><span>클릭 <b style="color:#00e676">\${fmt(u.clickCount)}</b></span><span>노출 <b style="color:#40c4ff">\${fmt(u.exposeCount)}</b></span><span>CTR \${ctrBadge(u.ctr)}</span></div></div></div>\`;\r
          wrap.appendChild(d);\r
        });\r
        return wrap;\r
      },\r
      queries: function () {\r
        const wrap = document.createElement("div"),\r
          mxC = Math.max(...queries.map((q) => q.clickCount)) || 1;\r
        if (!queries.length) {\r
          const em = document.createElement("div");\r
          em.style.cssText = "text-align:center;padding:30px;color:#3d5a78";\r
          em.textContent = "검색어 데이터 없음";\r
          wrap.appendChild(em);\r
          return wrap;\r
        }\r
        wrap.appendChild(\r
          chartCard(\r
            "검색어별 클릭 TOP 10",\r
            "총 " + queries.length + "개",\r
            C.teal,\r
            barchart(\r
              queries.slice(0, 10).map((q) => q.clickCount),\r
              queries.slice(0, 10).map((_, i) => "#" + (i + 1)),\r
              65,\r
              C.teal,\r
              "회",\r
            ),\r
            queries.slice(0, 10).map((_, i) => "#" + (i + 1)),\r
          ),\r
        );\r
        wrap.appendChild(secTitle("검색어 상세"));\r
        queries.forEach(function (q, i) {\r
          const searchUrl =\r
              "https://search.naver.com/search.naver?query=" +\r
              encodeURIComponent(q.key),\r
            d = document.createElement("div");\r
          d.style.cssText =\r
            "background:#0d1829;border:1px solid " +\r
            (i === 0 ? "#64ffda33" : "#1a2d45") +\r
            ";border-radius:9px;padding:10px 11px;margin-bottom:6px";\r
          d.innerHTML = \`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="display:flex;align-items:center;gap:7px;min-width:0"><span style="font-size:10px;font-weight:800;color:\${i < 3 ? C.teal : "#3d5a78"}">#\${i + 1}</span><a href="\${searchUrl}" target="_blank" rel="noopener noreferrer" style="font-size:12px;font-weight:600;color:#40c4ff;text-decoration:none;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${q.key.replace(/"/g, "&quot;")}</a></div><span style="font-size:11px;font-weight:700;color:#00e676">\${fmt(q.clickCount)}회</span></div>\${hbar(q.clickCount, mxC, C.teal)}<div style="display:flex;gap:9px;font-size:10px;color:#3d5a78"><span>노출 <b style="color:#7a9ab8">\${fmt(q.exposeCount)}</b></span><span>CTR \${ctrBadge(q.ctr)}</span></div>\`;\r
          wrap.appendChild(d);\r
        });\r
        return wrap;\r
      },\r
      pattern: function () {\r
        const wrap = document.createElement("div"),\r
          mxC = Math.max(...dowRows.map((x) => x.avgC)) || 1;\r
        wrap.appendChild(\r
          chartCard(\r
            "요일별 평균 클릭",\r
            bestDow.label + "요일 최고 " + fmt(bestDow.avgC) + "회",\r
            C.green,\r
            barchart(\r
              dowRows.map((x) => x.avgC),\r
              dowRows.map((d) => d.label + "요일"),\r
              70,\r
              C.purple,\r
              "회",\r
            ),\r
            dowRows.map((d) => d.label),\r
          ),\r
        );\r
        const grid = document.createElement("div");\r
        grid.style.cssText =\r
          "display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:14px";\r
        dowRows.forEach(function (d) {\r
          const isB = d.label === bestDow.label,\r
            isW = d.label === worstDow.label && d.n > 0,\r
            hh = d.avgC ? Math.max(4, Math.round((d.avgC / mxC) * 36)) : 2;\r
          const cell = document.createElement("div");\r
          cell.style.cssText =\r
            "background:#0d1829;border:1px solid " +\r
            (isB ? "#00e67655" : isW ? "#ff525255" : "#1a2d45") +\r
            ";border-radius:7px;padding:7px 3px;text-align:center";\r
          cell.innerHTML = \`<div style="font-size:10px;color:#7a9ab8;margin-bottom:3px">\${d.label}</div><div style="height:\${hh}px;background:\${isB ? C.green : isW ? C.red : C.blue};border-radius:2px;margin:2px auto;width:14px;min-height:2px;opacity:.8"></div><div style="font-size:10px;font-weight:700;color:\${isB ? C.green : isW ? C.red : C.text};margin-top:4px">\${d.avgC ? (d.avgC / 1000).toFixed(1) + "k" : "-"}</div><div style="font-size:9px;color:#3d5a78">\${d.n}일</div>\`;\r
          grid.appendChild(cell);\r
        });\r
        wrap.appendChild(secTitle("요일별"));\r
        wrap.appendChild(grid);\r
        if (logs.length > 0) {\r
          const lastDate = new Date(fmtD(logs[logs.length - 1].date));\r
          const fc = Array.from({ length: 7 }, function (_, i) {\r
            const fd = new Date(lastDate);\r
            fd.setDate(fd.getDate() + i + 1);\r
            return {\r
              date: fd.toISOString().slice(0, 10),\r
              pred: Math.max(\r
                0,\r
                Math.round(\r
                  (cSt.mean || 0) + (cSt.slope || 0) * (logs.length + i),\r
                ),\r
              ),\r
              dow: DOW[fd.getDay()],\r
            };\r
          });\r
          wrap.appendChild(secTitle("향후 7일 예상"));\r
          wrap.appendChild(ibox("amber", "📌 추세 기반 참고용 예상치입니다."));\r
          wrap.appendChild(\r
            chartCard(\r
              "예상 클릭",\r
              "",\r
              \`#f59e0b\`,\r
              sparkline(\r
                fc.map((x) => x.pred),\r
                fc.map((x) => x.date.slice(5)),\r
                65,\r
                "#f59e0b",\r
                "회",\r
              ),\r
              fc.map((x) => x.date.slice(5)),\r
            ),\r
          );\r
          fc.forEach(function (x, i) {\r
            const d = document.createElement("div");\r
            d.style.cssText =\r
              "display:flex;justify-content:space-between;padding:8px 11px;background:#0d1829;border:1px solid #1a2d45;border-radius:8px;margin-bottom:4px";\r
            d.innerHTML = \`<span style="font-size:11px;color:#7a9ab8">\${x.date} (\${x.dow}) +\${i + 1}일</span><b style="color:\${cSt.slope >= 0 ? C.green : C.red}">약 \${fmt(x.pred)}회</b>\`;\r
            wrap.appendChild(d);\r
          });\r
        }\r
        return wrap;\r
      },\r
      crawl: function () {\r
        const wrap = document.createElement("div");\r
        if (!crawlSorted.length) {\r
          wrap.innerHTML =\r
            '<div style="padding:30px;text-align:center;color:#3d5a78">크롤 데이터 없음</div>';\r
          return wrap;\r
        }\r
        const pageCounts = crawlSorted.map((r) => r.pageCount),\r
          cDates = crawlSorted.map((r) => fmtB(r.date)),\r
          totalPages = pageCounts.reduce((a, b) => a + b, 0),\r
          totalSize = crawlSorted.reduce((a, r) => a + r.downloadSize, 0),\r
          avgPage = Math.round(totalPages / crawlSorted.length),\r
          maxPage = Math.max(...pageCounts);\r
        const errDays = crawlSorted.filter(\r
          (r) => r.sumErrorCount > 0 || r.notFound > 0,\r
        ).length;\r
        const total404 = crawlSorted.reduce((a, r) => a + (r.notFound || 0), 0);\r
        wrap.appendChild(\r
          kpiGrid([\r
            {\r
              label: "총 크롤",\r
              value: (totalPages / 10000).toFixed(1) + "만",\r
              sub: "90일 합계",\r
              color: C.blue,\r
            },\r
            { label: "일평균", value: fmt(avgPage), color: C.teal },\r
            {\r
              label: "에러·404일",\r
              value: errDays + "일",\r
              color: errDays > 5 ? C.red : errDays > 0 ? C.amber : C.green,\r
            },\r
            {\r
              label: "총 용량",\r
              value: (totalSize / 1024 / 1024 / 1024).toFixed(1) + "GB",\r
              color: C.sub,\r
            },\r
          ]),\r
        );\r
        wrap.appendChild(\r
          chartCard(\r
            "일별 크롤 페이지",\r
            "최고 " + fmt(maxPage) + "p",\r
            C.blue,\r
            sparkline(pageCounts, cDates, 80, C.blue, "p"),\r
            cDates,\r
          ),\r
        );\r
        if (total404 > 0)\r
          wrap.appendChild(\r
            ibox(\r
              "amber",\r
              \`⚠️ 404 Not Found 누적 <b style="color:\${C.amber}">\${fmt(total404)}건</b> · 삭제된 URL 확인 권장\`,\r
            ),\r
          );\r
        wrap.appendChild(secTitle("에러 상세"));\r
        const errRows = crawlSorted\r
          .filter((r) => r.sumErrorCount > 0 || r.notFound > 0)\r
          .reverse();\r
        if (!errRows.length) {\r
          const ok = document.createElement("div");\r
          ok.style.cssText =\r
            "text-align:center;padding:20px;color:#00e676;font-size:13px";\r
          ok.textContent = "✅ 크롤 상태 양호!";\r
          wrap.appendChild(ok);\r
        } else {\r
          errRows.forEach(function (r) {\r
            const hasServerErr = r.sumErrorCount > 0,\r
              has404 = r.notFound > 0;\r
            const d = document.createElement("div");\r
            d.style.cssText =\r
              "background:#0d1829;border:1px solid " +\r
              (hasServerErr ? "#ff525233" : has404 ? "#ffca2833" : "#1a2d45") +\r
              ";border-radius:9px;padding:10px 12px;margin-bottom:6px";\r
            const errs =\r
              [\r
                r.serverError && \`서버오류 \${r.serverError}\`,\r
                r.notFound && \`404 \${r.notFound}\`,\r
                r.connectTimeout && \`타임아웃 \${r.connectTimeout}\`,\r
              ]\r
                .filter(Boolean)\r
                .join(" · ") || "-";\r
            const dispErrCnt = (r.sumErrorCount || 0) + (r.notFound || 0);\r
            d.innerHTML = \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;color:#7a9ab8">\${fmtD(r.date)}</span><span style="font-size:11px;font-weight:700;color:\${hasServerErr ? C.red : C.amber}">에러·404 \${fmt(dispErrCnt)}건</span></div><div style="font-size:10px;color:\${hasServerErr ? "#ff525299" : "#ffca2899"}">\${errs}</div><div style="font-size:10px;color:#3d5a78;margin-top:3px">크롤 \${fmt(r.pageCount)}p · 시도 \${fmt(r.sumTryCount)}</div>\`;\r
            wrap.appendChild(d);\r
          });\r
        }\r
        return wrap;\r
      },\r
      backlink: function () {\r
        const wrap = document.createElement("div");\r
        if (!blTime.length) {\r
          wrap.innerHTML =\r
            '<div style="padding:30px;text-align:center;color:#3d5a78">백링크 데이터 없음</div>';\r
          return wrap;\r
        }\r
        const blVals = blTime.map((r) => r.backlinkCnt),\r
          blDates = blTime.map((r) => fmtB(r.timeStamp)),\r
          latestBl = blVals[blVals.length - 1] || 0,\r
          maxBl = Math.max(...blVals),\r
          minBl = Math.min(...blVals),\r
          blChange = latestBl - blVals[0];\r
        wrap.appendChild(\r
          kpiGrid([\r
            { label: "현재 백링크", value: fmt(latestBl), color: C.teal },\r
            { label: "기간 최고", value: fmt(maxBl), color: C.green },\r
            { label: "기간 최저", value: fmt(minBl), color: C.sub },\r
            {\r
              label: "증감",\r
              value: (blChange >= 0 ? "+" : "") + blChange,\r
              color: blChange >= 0 ? C.green : C.red,\r
            },\r
          ]),\r
        );\r
        wrap.appendChild(\r
          chartCard(\r
            "백링크 추이 (기간별)",\r
            "현재 " + fmt(latestBl) + "개",\r
            C.teal,\r
            sparkline(blVals, blDates, 80, C.teal, "개"),\r
            blDates,\r
          ),\r
        );\r
        if (blTopDomains.length) {\r
          wrap.appendChild(\r
            secTitle(\r
              '탑 도메인 <span style="font-size:9px;font-weight:400;letter-spacing:0;text-transform:none;color:#3d5a78">도메인별 누적 링크수</span>',\r
            ),\r
          );\r
          const mxD = Math.max(...blTopDomains.map((d) => d.backlinkCnt)) || 1;\r
          blTopDomains.forEach(function (d, i) {\r
            const row = document.createElement("div");\r
            row.style.cssText =\r
              "background:#0d1829;border:1px solid " +\r
              (i === 0 ? "#64ffda33" : "#1a2d45") +\r
              ";border-radius:9px;padding:10px 12px;margin-bottom:6px";\r
            row.innerHTML = \`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="display:flex;align-items:center;gap:7px"><span style="font-size:10px;font-weight:800;color:\${i === 0 ? C.teal : "#3d5a78"}">#\${i + 1}</span><span style="font-size:12px;color:#e0ecff;font-weight:600">\${d.domain}</span></div><span style="font-size:11px;color:\${C.teal};font-weight:700">\${fmt(d.backlinkCnt)}개</span></div>\${hbar(d.backlinkCnt, mxD, C.teal)}\`;\r
            wrap.appendChild(row);\r
          });\r
        }\r
        return wrap;\r
      },\r
      insight: function () {\r
        const wrap = document.createElement("div"),\r
          ctrNum = parseFloat(avgCtr);\r
        wrap.appendChild(secTitle("종합 분석"));\r
        wrap.appendChild(\r
          ibox(\r
            cSt.slope >= 0 ? "green" : "red",\r
            \`📈 <b>클릭 추세:</b> \${cSt.slope >= 0 ? '하루 평균 <b style="color:#00e676">+' + fmt(Math.round(cSt.slope)) + "회</b> 증가" : '하루 평균 <b style="color:#ff5252">' + fmt(Math.round(Math.abs(cSt.slope || 0))) + "회</b> 감소"}\`,\r
          ),\r
        );\r
        wrap.appendChild(\r
          ibox(\r
            ctrNum >= 3 ? "green" : ctrNum >= 1.5 ? "amber" : "red",\r
            \`🎯 <b>평균 CTR \${avgCtr}%:</b> \${ctrNum >= 3 ? "우수해요." : ctrNum >= 1.5 ? "보통이에요. 제목을 개선하세요." : "낮아요. 메타 타이틀을 전면 개선하세요."}\`,\r
          ),\r
        );\r
        wrap.appendChild(\r
          ibox(\r
            Math.abs(corr) > 0.7\r
              ? "green"\r
              : Math.abs(corr) > 0.4\r
                ? "amber"\r
                : "red",\r
            \`🔗 <b>노출↔클릭 상관 \${corr.toFixed(2)}:</b> \${Math.abs(corr) > 0.7 ? "노출 확대가 효과적이에요." : Math.abs(corr) > 0.4 ? "CTR 개선과 노출 확대를 병행하세요." : "클릭 전환이 낮아요. 콘텐츠 품질을 점검하세요."}\`,\r
          ),\r
        );\r
        wrap.appendChild(\r
          ibox(\r
            "green",\r
            \`🗓 <b>\${bestDow.label}요일</b> 평균 \${fmt(bestDow.avgC)}회 최고, <b>\${worstDow.label}요일</b> \${fmt(worstDow.avgC)}회 최저\`,\r
          ),\r
        );\r
        if (cSt.outliers && cSt.outliers.length)\r
          wrap.appendChild(\r
            ibox("amber", \`📌 이상치 <b>\${cSt.outliers.length}개</b> 감지\`),\r
          );\r
        wrap.appendChild(\r
          ibox(\r
            cSt.cv < 0.3 ? "green" : cSt.cv < 0.5 ? "amber" : "red",\r
            \`📊 <b>안정성 CV=\${((cSt.cv || 0) * 100).toFixed(0)}%:</b> \${cSt.cv < 0.3 ? "매우 안정적" : cSt.cv < 0.5 ? "약간 변동 있음" : "일별 편차 큼"}\`,\r
          ),\r
        );\r
        if (urls.length > 0) {\r
          const top = urls[0],\r
            slug =\r
              decodeURIComponent(top.key).split("/").filter(Boolean).pop() ||\r
              "";\r
          wrap.appendChild(\r
            ibox(\r
              "blue",\r
              \`🏆 <b>최고 URL:</b> "\${slug.replace(/-/g, " ").slice(0, 30)}…" CTR <b style="color:#ffca28">\${top.ctr}%</b> 클릭 <b style="color:#00e676">\${fmt(top.clickCount)}회</b>\`,\r
            ),\r
          );\r
        }\r
        const todo = document.createElement("div");\r
        todo.style.cssText =\r
          "background:#0d1829;border:1px solid #00e67622;border-radius:9px;padding:11px 13px;margin-top:6px";\r
        todo.innerHTML =\r
          '<div style="font-size:12px;font-weight:700;color:#e0ecff;margin-bottom:8px">✅ 지금 바로 해볼 것</div>' +\r
          [\r
            bestDow\r
              ? bestDow.label + "요일에 신규 콘텐츠 집중 발행"\r
              : "꾸준한 발행 주기 확립",\r
            ctrNum < 2\r
              ? "상위 URL 제목/메타설명 A/B 테스트"\r
              : "현재 CTR 유지, 노출 확대 집중",\r
            (cSt.slope || 0) < 0\r
              ? "클릭 감소 원인 파악"\r
              : "상승 패턴 분석 후 성공 공식 반복",\r
            queries.length\r
              ? \`"\${queries[0].key}" 키워드 변형 글 발행\`\r
              : "검색어 다양화로 롱테일 트래픽 확보",\r
          ]\r
            .map(\r
              (a) =>\r
                \`<div style="font-size:12px;color:#7a9ab8;padding:5px 0;border-bottom:1px solid #1a2d45;display:flex;gap:7px"><span style="color:#00e676">→</span>\${a}</div>\`,\r
            )\r
            .join("");\r
        wrap.appendChild(todo);\r
        return wrap;\r
      },\r
    };\r
  }\r
  await loadSiteList(false);\r
  assignColors();\r
  const curSiteMatch = location.search.match(/site=([^&]+)/);\r
  if (curSiteMatch) {\r
    const cur = decodeURIComponent(curSiteMatch[1]);\r
    if (allSites.includes(cur)) curSite = cur;\r
  }\r
  ensureCurrentSite();\r
  buildCombo(null);\r
  if (curSite) setComboSite(curSite);\r
  setAllSitesLabel();\r
  renderAllSites();\r
})();\r
`,lS="sadv_data_v2_",R0=720*60*1e3;function aS(a){return lS+btoa(a).replace(/=/g,"")}function A0(a){try{const s=localStorage.getItem(aS(a));if(!s)return null;const f=JSON.parse(s);return typeof f?.ts=="number"?{ts:f.ts}:null}catch{return null}}function rS(a){const s=Date.now();if(a.curMode==="site"&&a.curSite){const v=A0(a.curSite);return v?{label:a.curSite.replace(/^https?:\/\//,""),updatedAt:v.ts,remainingMs:Math.max(0,v.ts+R0-s),sourceCount:1,measuredAt:s}:null}const f=a.allSites.map(v=>({site:v,record:A0(v)})).filter(v=>!!v.record);return f.length?{label:`전체 ${f.length}개`,updatedAt:Math.max(...f.map(v=>v.record.ts)),remainingMs:Math.max(0,Math.min(...f.map(v=>v.record.ts+R0))-s),sourceCount:f.length,measuredAt:s}:null}function _0(a){return{...a,runtimeVersion:window.__SEARCHADVISOR_RUNTIME_VERSION__||"dev",runtimeLoadedAt:window.__SEARCHADVISOR_RUNTIME_LOADED_AT__||null,cacheMeta:rS(a)}}function Ho(a,s,f){if(!a.includes(s))throw new Error(`Legacy patch point not found: ${s.slice(0,48)}`);return a.replace(s,f)}function iS(a){let s=a.replace(/^javascript:\s*/,"").replace(/\r\n/g,`
`);return s=Ho(s,`  let curMode = "all",
    curSite = null,
    curTab = "overview";
  let siteViewReqId = 0;`,`  let curMode = "all",
    curSite = null,
    curTab = "overview";
  let siteViewReqId = 0;
  const __sadvListeners = new Set();
  let __sadvInitialReady = false;
  const __sadvReadyResolvers = [];
  function __sadvSnapshot() {
    return {
      curMode,
      curSite,
      curTab,
      allSites: [...allSites],
      rows: window.__sadvRows || [],
      accountLabel,
    };
  }
  function __sadvNotify() {
    const snap = __sadvSnapshot();
    __sadvListeners.forEach(function (fn) {
      try {
        fn(snap);
      } catch (e) {}
    });
  }
  function __sadvMarkReady() {
    if (__sadvInitialReady) return;
    __sadvInitialReady = true;
    while (__sadvReadyResolvers.length) {
      const resolve = __sadvReadyResolvers.shift();
      try {
        resolve(true);
      } catch (e) {}
    }
    __sadvNotify();
  }
  window.__sadvApi = {
    getState: __sadvSnapshot,
    isReady: function () {
      return __sadvInitialReady;
    },
    waitUntilReady: function (timeoutMs) {
      return new Promise(function (resolve, reject) {
        if (__sadvInitialReady) {
          resolve(true);
          return;
        }
        let timer = null;
        const done = function (ok) {
          if (timer) clearTimeout(timer);
          resolve(ok);
        };
        __sadvReadyResolvers.push(done);
        if (timeoutMs && timeoutMs > 0) {
          timer = setTimeout(function () {
            const idx = __sadvReadyResolvers.indexOf(done);
            if (idx >= 0) __sadvReadyResolvers.splice(idx, 1);
            reject(new Error("legacy init timeout"));
          }, timeoutMs);
        }
      });
    },
    subscribe: function (fn) {
      __sadvListeners.add(fn);
      return function () {
        __sadvListeners.delete(fn);
      };
    },
    switchMode: function (mode) {
      switchMode(mode);
    },
    setSite: function (site) {
      setComboSite(site);
    },
    setTab: function (tab) {
      if (!TABS.some(function (item) { return item.id === tab; }) || curTab === tab) return;
      curTab = tab;
      tabsEl.querySelectorAll(".sadv-t").forEach(function (b) {
        b.classList.remove("on");
      });
      const btn = tabsEl.querySelector('[data-t="' + tab + '"]');
      if (btn) btn.classList.add("on");
      if (window.__sadvR) renderTab(window.__sadvR);
      __sadvNotify();
    },
    refresh: function () {
      const btn = document.getElementById("sadv-refresh-btn");
      if (btn) btn.click();
    },
    download: function () {
      downloadSnapshot();
    },
    exportSnapshotData: function (onProgress) {
      return collectExportData(onProgress);
    },
    buildLegacySnapshotHtml: function (savedAt, payload) {
      return buildSnapshotHtml(savedAt, payload);
    },
    close: function () {
      const panel = document.getElementById("sadv-p");
      const inj = document.getElementById("sadv-inj");
      if (panel) panel.remove();
      if (inj) inj.remove();
      delete window.__sadvApi;
    },
  };`),s=Ho(s,'    if (curMode === "site") loadSiteView(site);',`    if (curMode === "site") loadSiteView(site);
    __sadvNotify();`),s=Ho(s,`    if (window.__sadvR) renderTab(window.__sadvR);
  });`,`    if (window.__sadvR) renderTab(window.__sadvR);
    __sadvNotify();
  });`),s=Ho(s,`    } else {
      siteBar.classList.add("show");
      tabsEl.classList.add("show");
      ensureCurrentSite();
      if (curSite) loadSiteView(curSite);
    }
  }`,`    } else {
      siteBar.classList.add("show");
      tabsEl.classList.add("show");
      ensureCurrentSite();
      if (curSite) loadSiteView(curSite);
    }
    __sadvNotify();
  }`),s=Ho(s,`    bdEl.innerHTML = "";
    bdEl.appendChild(wrap);
    bdEl.scrollTop = 0;
  }`,`    bdEl.innerHTML = "";
    bdEl.appendChild(wrap);
    bdEl.scrollTop = 0;
    __sadvNotify();
  }`),s=Ho(s,`    const R = buildRenderers(d.expose, d.crawl, d.backlink);
    window.__sadvR = R;
    renderTab(R);
  }`,`    const R = buildRenderers(d.expose, d.crawl, d.backlink, d.diagnosisMeta, d.diagnosisMetaStatus, d.diagnosisMetaRange);
    window.__sadvR = R;
    renderTab(R);
    __sadvNotify();
  }`),s=Ho(s,`          res.status === "fulfilled"
            ? normalizeSiteData(res.value)
            : { expose: null, crawl: null, backlink: null, detailLoaded: false };`,`          res.status === "fulfilled"
            ? normalizeSiteData(res.value)
            : {
                expose: null,
                crawl: null,
                backlink: null,
                diagnosisMeta: null,
                diagnosisMetaStatus: null,
                diagnosisMetaRange: null,
                detailLoaded: false,
              };`),s=Ho(s,`  function normalizeSiteData(data) {
    if (!data) return null;
    const expose = data.expose || null,
      detailLoaded =
        typeof data.detailLoaded === "boolean"
          ? data.detailLoaded
          : "crawl" in data || "backlink" in data;
    return {
      expose,
      crawl: detailLoaded ? (data.crawl ?? null) : null,
      backlink: detailLoaded ? (data.backlink ?? null) : null,
      detailLoaded,
    };
  }`,`  function normalizeSiteData(data) {
    if (!data) return null;
    const expose = data.expose || null,
      detailLoaded =
        typeof data.detailLoaded === "boolean"
          ? data.detailLoaded
          : "crawl" in data || "backlink" in data || "diagnosisMeta" in data;
    return {
      expose,
      crawl: detailLoaded ? (data.crawl ?? null) : null,
      backlink: detailLoaded ? (data.backlink ?? null) : null,
      diagnosisMeta: detailLoaded ? (data.diagnosisMeta ?? null) : null,
      diagnosisMetaStatus: detailLoaded ? (data.diagnosisMetaStatus ?? null) : null,
      diagnosisMetaRange: detailLoaded ? (data.diagnosisMetaRange ?? null) : null,
      detailLoaded,
    };
  }`),s=Ho(s,`        const result = {
          expose,
          crawl: null,
          backlink: null,
          detailLoaded: false,
        };`,`        const result = {
          expose,
          crawl: null,
          backlink: null,
          diagnosisMeta: null,
          diagnosisMetaStatus: null,
          diagnosisMetaRange: null,
          detailLoaded: false,
        };`),s=Ho(s,`  async function fetchSiteData(site) {
    const baseData = await fetchExposeData(site);
    if (baseData.detailLoaded) return baseData;
    if (inflightDetail[site]) return inflightDetail[site];
    const enc = encodeURIComponent(site),
      base = "https://searchadvisor.naver.com/api-console/report";
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const d90 = new Date(Date.now() - 90 * 864e5)
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");
    inflightDetail[site] = (async function () {
      try {
        const [cR, bR] = await Promise.allSettled([
          fetch(
            base +
              "/crawl/" +
              encId +
              "?site=" +
              enc +
              "&start_date=" +
              d90 +
              "&end_date=" +
              today +
              "&isAlly=false&count=5",
            { credentials: "include", headers: { accept: "application/json" } },
          ),
          fetch(
            base +
              "/backlink/" +
              encId +
              "?site=" +
              enc +
              "&start_date=" +
              d90 +
              "&end_date=" +
              today,
            { credentials: "include", headers: { accept: "application/json" } },
          ),
        ]);
        const crawl =
          cR.status === "fulfilled" && cR.value.ok ? await cR.value.json() : null;
        const backlink =
          bR.status === "fulfilled" && bR.value.ok ? await bR.value.json() : null;
        const result = { ...baseData, crawl, backlink, detailLoaded: true };
        memCache[site] = result;
        setCachedData(site, result);
        return result;
      } finally {
        delete inflightDetail[site];
      }
    })();
    return inflightDetail[site];
  }`,`  async function fetchSiteData(site) {
    const baseData = await fetchExposeData(site);
    if (
      baseData.detailLoaded &&
      "diagnosisMeta" in baseData &&
      "diagnosisMetaStatus" in baseData &&
      "diagnosisMetaRange" in baseData
    )
      return baseData;
    if (inflightDetail[site]) return inflightDetail[site];
    const enc = encodeURIComponent(site),
      base = "https://searchadvisor.naver.com/api-console/report";
    const exposeItem =
      (baseData.expose && baseData.expose.items && baseData.expose.items[0]) || {};
    const exposeLogs = [...(exposeItem.logs || [])].sort((a, b) =>
      (a.date || "").localeCompare(b.date || ""),
    );
    const fmtRangeDate = function (value) {
      return String(value || "").replace(/[^\d]/g, "").slice(0, 8);
    };
    const parseYmd = function (value) {
      const normalized = fmtRangeDate(value);
      if (normalized.length !== 8) return null;
      const year = Number(normalized.slice(0, 4));
      const month = Number(normalized.slice(4, 6));
      const day = Number(normalized.slice(6, 8));
      const time = Date.UTC(year, month - 1, day);
      return Number.isFinite(time) ? new Date(time) : null;
    };
    const formatYmd = function (date) {
      if (!date) return "";
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      return String(year) + month + day;
    };
    // diagnosis/meta does not follow the wider expose/crawl window.
    // Match the live diagnosis page behavior: today in KST plus the trailing 41-day window.
    const todayKstLocal = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
    );
    const todayKst = new Date(
      Date.UTC(
        todayKstLocal.getFullYear(),
        todayKstLocal.getMonth(),
        todayKstLocal.getDate(),
      ),
    );
    const latestExposeDate =
      exposeLogs.length && exposeLogs[exposeLogs.length - 1].date
        ? parseYmd(exposeLogs[exposeLogs.length - 1].date)
        : null;
    const earliestExposeDate =
      exposeLogs.length && exposeLogs[0].date
        ? parseYmd(exposeLogs[0].date)
        : null;
    const effectiveEndDate =
      latestExposeDate && latestExposeDate < todayKst ? latestExposeDate : todayKst;
    const windowStartDate = new Date(effectiveEndDate.getTime() - 40 * 864e5);
    const effectiveStartDate =
      earliestExposeDate && earliestExposeDate > windowStartDate
        ? earliestExposeDate
        : windowStartDate;
    const endDate = formatYmd(effectiveEndDate);
    const startDate = formatYmd(effectiveStartDate);
    inflightDetail[site] = (async function () {
      try {
        const [cR, bR, mR] = await Promise.allSettled([
          fetch(
            base +
              "/crawl/" +
              encId +
              "?site=" +
              enc +
              "&start_date=" +
              startDate +
              "&end_date=" +
              endDate +
              "&isAlly=false&count=5",
            { credentials: "include", headers: { accept: "application/json" } },
          ),
          fetch(
            base +
              "/backlink/" +
              encId +
              "?site=" +
              enc +
              "&start_date=" +
              startDate +
              "&end_date=" +
              endDate,
            { credentials: "include", headers: { accept: "application/json" } },
          ),
          fetch(
            base +
              "/diagnosis/meta/" +
              encId +
              "?site=" +
              enc +
              "&startDate=" +
              startDate +
              "&endDate=" +
              endDate,
            { credentials: "include", headers: { accept: "application/json" } },
          ),
        ]);
        const crawl =
          cR.status === "fulfilled" && cR.value.ok ? await cR.value.json() : null;
        const backlink =
          bR.status === "fulfilled" && bR.value.ok ? await bR.value.json() : null;
        const diagnosisMetaResponse = mR.status === "fulfilled" ? mR.value : null;
        const diagnosisMeta =
          diagnosisMetaResponse && diagnosisMetaResponse.ok
            ? await diagnosisMetaResponse.json()
            : null;
        const result = {
          ...baseData,
          crawl,
          backlink,
          diagnosisMeta,
          diagnosisMetaStatus: diagnosisMetaResponse
            ? diagnosisMetaResponse.status
            : null,
          diagnosisMetaRange: { startDate, endDate },
          detailLoaded: true,
        };
        memCache[site] = result;
        setCachedData(site, result);
        return result;
      } finally {
        delete inflightDetail[site];
      }
    })();
    return inflightDetail[site];
  }`),s=Ho(s,`  const TABS = [
    { id: "overview", label: "📊 개요" },
    { id: "daily", label: "📅 일별" },
    { id: "urls", label: "🔗 URL" },
    { id: "queries", label: "🔍 검색어" },
    { id: "pattern", label: "📆 요일" },
    { id: "crawl", label: "🕷️ 크롤" },
    { id: "backlink", label: "🔗 백링크" },
    { id: "insight", label: "💡 인사이트" },
  ];`,`  const TABS = [
    { id: "overview", label: "📊 개요" },
    { id: "daily", label: "📅 일별" },
    { id: "urls", label: "🔗 URL" },
    { id: "queries", label: "🔍 검색어" },
    { id: "pattern", label: "📆 요일" },
    { id: "crawl", label: "🕷️ 크롤" },
    { id: "backlink", label: "🔗 백링크" },
    { id: "diagnosis", label: "🧪 메타" },
    { id: "insight", label: "💡 인사이트" },
  ];`),s=Ho(s,`  function buildRenderers(expose, crawlData, backlinkData) {
    const item = (expose && expose.items && expose.items[0]) || {};
    const period = item.period || {},
      rawLogs = item.logs || [],
      urls = item.urls || [],
      queries = item.querys || [];
    const logs = [...rawLogs].sort((a, b) => a.date.localeCompare(b.date));
    const dates = logs.map((r) => fmtB(r.date)),
      clicks = logs.map((r) => r.clickCount),
      exposes = logs.map((r) => r.exposeCount),
      ctrs = logs.map((r) => r.ctr);
    const cSt = st(clicks),
      totalC = clicks.reduce((a, b) => a + b, 0),
      totalE = exposes.reduce((a, b) => a + b, 0),
      avgCtr = totalE ? ((totalC / totalE) * 100).toFixed(2) : "0.00",
      corr = pearson(exposes, clicks);
    const dowAcc = {};
    logs.forEach(function (r) {
      const dw = new Date(fmtD(r.date)).getDay();
      if (!dowAcc[dw]) dowAcc[dw] = { c: 0, n: 0 };
      dowAcc[dw].c += r.clickCount;
      dowAcc[dw].n++;
    });
    const dowRows = DOW.map(function (l, i) {
      return {
        label: l,
        avgC: dowAcc[i] ? Math.round(dowAcc[i].c / dowAcc[i].n) : 0,
        n: dowAcc[i] ? dowAcc[i].n : 0,
      };
    });
    const bestDow = dowRows.reduce(
        (a, b) => (b.avgC > a.avgC ? b : a),
        dowRows[0],
      ),
      worstDow = dowRows
        .filter((x) => x.n > 0)
        .reduce((a, b) => (b.avgC < a.avgC ? b : a), dowRows[0]);
    const crawlStats =
      (crawlData &&
        crawlData.items &&
        crawlData.items[0] &&
        crawlData.items[0].stats) ||
      [];
    const crawlSorted = [...crawlStats].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    const blData =
      (backlinkData && backlinkData.items && backlinkData.items[0]) || {};
    const blTime = (blData.countTime || []).sort((a, b) =>
      a.timeStamp.localeCompare(b.timeStamp),
    );
    const blTopDomains = blData.topDomain || [];
`,`  function buildRenderers(expose, crawlData, backlinkData, diagnosisMeta, diagnosisMetaStatus, diagnosisMetaRange) {
    const item = (expose && expose.items && expose.items[0]) || {};
    const period = item.period || {},
      rawLogs = item.logs || [],
      urls = item.urls || [],
      queries = item.querys || [];
    const logs = [...rawLogs].sort((a, b) => a.date.localeCompare(b.date));
    const dates = logs.map((r) => fmtB(r.date)),
      clicks = logs.map((r) => r.clickCount),
      exposes = logs.map((r) => r.exposeCount),
      ctrs = logs.map((r) => r.ctr);
    const cSt = st(clicks),
      totalC = clicks.reduce((a, b) => a + b, 0),
      totalE = exposes.reduce((a, b) => a + b, 0),
      avgCtr = totalE ? ((totalC / totalE) * 100).toFixed(2) : "0.00",
      corr = pearson(exposes, clicks);
    const dowAcc = {};
    logs.forEach(function (r) {
      const dw = new Date(fmtD(r.date)).getDay();
      if (!dowAcc[dw]) dowAcc[dw] = { c: 0, n: 0 };
      dowAcc[dw].c += r.clickCount;
      dowAcc[dw].n++;
    });
    const dowRows = DOW.map(function (l, i) {
      return {
        label: l,
        avgC: dowAcc[i] ? Math.round(dowAcc[i].c / dowAcc[i].n) : 0,
        n: dowAcc[i] ? dowAcc[i].n : 0,
      };
    });
    const bestDow = dowRows.reduce(
        (a, b) => (b.avgC > a.avgC ? b : a),
        dowRows[0],
      ),
      worstDow = dowRows
        .filter((x) => x.n > 0)
        .reduce((a, b) => (b.avgC < a.avgC ? b : a), dowRows[0]);
    const crawlStats =
      (crawlData &&
        crawlData.items &&
        crawlData.items[0] &&
        crawlData.items[0].stats) ||
      [];
    const crawlSorted = [...crawlStats].sort((a, b) =>
      a.date.localeCompare(b.date),
    );
    const blData =
      (backlinkData && backlinkData.items && backlinkData.items[0]) || {};
    const blTime = (blData.countTime || []).sort((a, b) =>
      a.timeStamp.localeCompare(b.timeStamp),
    );
    const blTopDomains = blData.topDomain || [];
    const diagnosisItem =
      (diagnosisMeta && diagnosisMeta.items && diagnosisMeta.items[0]) || {};
    const diagnosisLogs = [...(diagnosisItem.meta || [])].sort((a, b) =>
      (a.date || "").localeCompare(b.date || ""),
    );
    const diagnosisDates = diagnosisLogs.map(function (row) {
      return (row.date || "").slice(5);
    });
    const diagnosisStates = ["1", "2", "3", "4"];
    const diagnosisStateMeta = {
      "1": { label: "\uC0C9\uC778", color: C.green },
      "2": { label: "\uC218\uC9D1\uC81C\uD55C", color: C.amber },
      "3": { label: "\uC0C9\uC778 \uC81C\uC678", color: C.teal },
      "4": { label: "SEO \uBB38\uC81C", color: C.red },
    };
    const diagnosisCodeMeta = {
      "1000": {
        label: "\uC0C9\uC778 \uD398\uC774\uC9C0",
        group: "indexed",
        color: C.green,
      },
      "2300": {
        label: "\uAE30\uD0C0 \uC81C\uD55C \uD398\uC774\uC9C0",
        group: "restricted",
        color: C.amber,
      },
      "2400": {
        label: "\uC811\uADFC \uBD88\uAC00 \uD398\uC774\uC9C0",
        group: "restricted",
        color: C.amber,
      },
      "2500": {
        label: "\uC11C\uBC84 \uC811\uADFC \uBD88\uAC00\uB85C \uC218\uC9D1 \uC2E4\uD328",
        group: "restricted",
        color: C.orange,
      },
      "3003": {
        label:
          "meta robots\uC73C\uB85C \uC0C9\uC778\uC5D0\uC11C \uC81C\uC678\uB41C \uD398\uC774\uC9C0",
        group: "excluded",
        color: C.teal,
      },
      "4001": {
        label: "meta description \uB204\uB77D",
        group: "seo",
        color: C.red,
      },
      "4002": {
        label: "title \uC694\uC18C 2\uAC1C \uC774\uC0C1",
        group: "seo",
        color: C.red,
      },
      "4007": {
        label: "H1 \uC694\uC18C 2\uAC1C \uC774\uC0C1",
        group: "seo",
        color: C.red,
      },
      "4008": {
        label: "alt \uC18D\uC131 \uB204\uB77D",
        group: "seo",
        color: C.red,
      },
    };
    const diagnosisLatest =
      diagnosisLogs.length > 0 ? diagnosisLogs[diagnosisLogs.length - 1] : null;
    const diagnosisFirst =
      diagnosisLogs.length > 0 ? diagnosisLogs[0] : null;
    const diagnosisLatestCounts =
      diagnosisLatest && diagnosisLatest.stateCount
        ? diagnosisLatest.stateCount
        : {};
    const diagnosisTotals = diagnosisStates.map(function (key) {
      return diagnosisLatestCounts[key] || 0;
    });
    const diagnosisTotalLatest = diagnosisTotals.reduce((a, b) => a + b, 0);
    const diagnosisTypeBuckets = diagnosisItem.typeCount || {};
    const diagnosisTypeBucketKey = diagnosisTypeBuckets["0"]
      ? "0"
      : diagnosisTypeBuckets["90"]
        ? "90"
        : Object.keys(diagnosisTypeBuckets)
            .sort(function (a, b) {
              return Number(a) - Number(b);
            })
            .slice(-1)[0] || null;
    const diagnosisTypeCountsLatest = diagnosisTypeBucketKey
      ? diagnosisTypeBuckets[diagnosisTypeBucketKey] || {}
      : {};
    const diagnosisSeries = diagnosisStates.map(function (key) {
      const meta = diagnosisStateMeta[key] || {
        label: "S" + key,
        color: C.sub,
      };
      const current = diagnosisLatestCounts[key] || 0;
      const prev =
        diagnosisFirst && diagnosisFirst.stateCount
          ? diagnosisFirst.stateCount[key] || 0
          : 0;
      return {
        key,
        label: meta.label,
        color: meta.color,
        current,
        prev,
        delta: current - prev,
        values: diagnosisLogs.map(function (row) {
          return (row.stateCount && row.stateCount[key]) || 0;
        }),
      };
    });
    const diagnosisIndexedSeries = diagnosisSeries[0];
    const diagnosisRestrictedSeries = diagnosisSeries[1];
    const diagnosisExcludedSeries = diagnosisSeries[2];
    const diagnosisSeoSeries = diagnosisSeries[3];
    const diagnosisIndexShare = diagnosisTotalLatest
      ? Math.round((diagnosisIndexedSeries.current / diagnosisTotalLatest) * 100)
      : 0;
    const diagnosisCodeRows = Object.entries(diagnosisTypeCountsLatest)
      .map(function (entry) {
        const meta = diagnosisCodeMeta[entry[0]] || null;
        return {
          code: entry[0],
          count: entry[1] || 0,
          label: meta ? meta.label : "\uCF54\uB4DC " + entry[0],
          group: meta ? meta.group : "other",
          color: meta ? meta.color : C.sub,
        };
      })
      .sort(function (a, b) {
        return b.count - a.count;
      });
    const diagnosisSeoCodes = diagnosisCodeRows.filter(function (row) {
      return row.group === "seo";
    });
    const diagnosisRestrictedCodes = diagnosisCodeRows.filter(function (row) {
      return row.group === "restricted";
    });
    const diagnosisExcludedCodes = diagnosisCodeRows.filter(function (row) {
      return row.group === "excluded";
    });
    const diagnosisUnknownCodes = diagnosisCodeRows.filter(function (row) {
      return row.group === "other";
    });
    const diagnosisTopSeoCode =
      diagnosisSeoCodes.length > 0 ? diagnosisSeoCodes[0] : null;
    const diagnosisTopRestrictedCode =
      diagnosisRestrictedCodes.length > 0 ? diagnosisRestrictedCodes[0] : null;
    const diagnosisTopExcludedCode =
      diagnosisExcludedCodes.length > 0 ? diagnosisExcludedCodes[0] : null;
    const diagnosisTopUnknownCode =
      diagnosisUnknownCodes.length > 0 ? diagnosisUnknownCodes[0] : null;
    const diagnosisUnknownTotal = diagnosisUnknownCodes.reduce(function (
      sum,
      row,
    ) {
      return sum + row.count;
    },
    0);
    const diagnosisStatus =
      diagnosisMeta && typeof diagnosisMeta.code !== "undefined"
        ? diagnosisMeta.code
        : null;
    const diagnosisHttpStatus =
      diagnosisMeta && diagnosisMetaStatus == null ? 200 : diagnosisMetaStatus;
    const diagnosisRangeText =
      diagnosisMetaRange &&
      diagnosisMetaRange.startDate &&
      diagnosisMetaRange.endDate
        ? diagnosisMetaRange.startDate + " ~ " + diagnosisMetaRange.endDate
        : "-";
`),s=Ho(s,`      insight: function () {`,`      diagnosis: function () {
        const wrap = document.createElement("div");
        if (!diagnosisLogs.length) {
          wrap.innerHTML =
            '<div style="padding:22px 18px;text-align:left;color:#7a9ab8;line-height:1.7">' +
            '<div style="font-size:13px;font-weight:700;color:#d4ecff;margin-bottom:6px">\uBA54\uD0C0 \uC9C4\uB2E8 \uC751\uB2F5 \uD655\uC778 \uD544\uC694</div>' +
            '<div style="font-size:11px">HTTP: <b style="color:#d4ecff">' +
            (diagnosisHttpStatus == null ? "-" : diagnosisHttpStatus) +
            '</b></div>' +
            '<div style="font-size:11px">code: <b style="color:#d4ecff">' +
            (diagnosisStatus == null ? "-" : diagnosisStatus) +
            '</b></div>' +
            '<div style="font-size:11px">period: <b style="color:#d4ecff">' +
            diagnosisRangeText +
            '</b></div>' +
            '<div style="font-size:11px;margin-top:6px;color:#3d5a78">\uBE48 \uC751\uB2F5\uACFC \uC694\uCCAD \uC2E4\uD328\uB97C \uAD6C\uBD84\uD574\uC11C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</div>' +
            "</div>";
          return wrap;
        }
        const latestDate = diagnosisLatest && diagnosisLatest.date ? diagnosisLatest.date : "-";
        const buildCodeCard = function (title, rows, accent, emptyText) {
          const card = document.createElement("div");
          card.style.cssText =
            "background:#0d1829;border:1px solid #1a2d45;border-radius:12px;padding:11px 12px 10px;margin-bottom:10px";
          if (!rows.length) {
            card.innerHTML =
              '<div style="font-size:12px;font-weight:700;color:#e0ecff;margin-bottom:6px">' +
              title +
              '</div><div style="font-size:11px;color:#7a9ab8;line-height:1.65">' +
              emptyText +
              "</div>";
            return card;
          }
          card.innerHTML =
            '<div style="font-size:12px;font-weight:700;color:#e0ecff;margin-bottom:7px">' +
            title +
            "</div>" +
            rows
              .map(function (row) {
                return (
                  '<div style="padding:6px 0;border-bottom:1px solid #1a2d45">' +
                  '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">' +
                  '<span style="font-size:11px;line-height:1.55;color:#7a9ab8">' +
                  row.label +
                  '</span><b style="font-size:11px;color:' +
                  accent +
                  '">' +
                  fmt(row.count) +
                  '\uAC74</b></div>' +
                  '<div style="font-size:10px;color:#3d5a78;margin-top:2px">code ' +
                  row.code +
                  "</div></div>"
                );
              })
              .join("");
          return card;
        };
        wrap.appendChild(
          kpiGrid([
            {
              label: "\uC0C9\uC778 \uD398\uC774\uC9C0",
              value: fmt(diagnosisIndexedSeries.current),
              sub: latestDate,
              color: diagnosisIndexedSeries.color,
            },
            {
              label: "SEO \uBB38\uC81C \uD398\uC774\uC9C0",
              value: fmt(diagnosisSeoSeries.current),
              sub: diagnosisTopSeoCode
                ? diagnosisTopSeoCode.label
                : "\uC8FC\uC694 SEO \uBB38\uC81C \uC5C6\uC74C",
              color: diagnosisSeoSeries.color,
            },
            {
              label: "\uC218\uC9D1\uC81C\uD55C \uD398\uC774\uC9C0",
              value: fmt(diagnosisRestrictedSeries.current),
              sub: diagnosisTopRestrictedCode
                ? diagnosisTopRestrictedCode.label
                : "\uC8FC\uC694 \uC81C\uD55C \uC5C6\uC74C",
              color: diagnosisRestrictedSeries.color,
            },
            {
              label: "\uC0C9\uC778 \uC81C\uC678 \uD398\uC774\uC9C0",
              value: fmt(diagnosisExcludedSeries.current),
              sub: diagnosisTopExcludedCode
                ? diagnosisTopExcludedCode.label
                : "\uC8FC\uC694 \uC0C9\uC778 \uC81C\uC678 \uC5C6\uC74C",
              color: diagnosisExcludedSeries.color,
            },
          ]),
        );
        wrap.appendChild(
          chartCard(
            "\uC0C9\uC778 \uCD94\uC774",
            fmt(diagnosisIndexedSeries.current),
            diagnosisIndexedSeries.color,
            sparkline(
              diagnosisIndexedSeries.values,
              diagnosisDates,
              80,
              diagnosisIndexedSeries.color,
              "\uAC74",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(
          chartCard(
            "\uC218\uC9D1\uC81C\uD55C \uCD94\uC774",
            fmt(diagnosisRestrictedSeries.current),
            diagnosisRestrictedSeries.color,
            sparkline(
              diagnosisRestrictedSeries.values,
              diagnosisDates,
              80,
              diagnosisRestrictedSeries.color,
              "\uAC74",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(
          chartCard(
            "SEO \uBB38\uC81C \uCD94\uC774",
            fmt(diagnosisSeoSeries.current),
            diagnosisSeoSeries.color,
            sparkline(
              diagnosisSeoSeries.values,
              diagnosisDates,
              80,
              diagnosisSeoSeries.color,
              "\uAC74",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(
          chartCard(
            "\uC0C9\uC778 \uC81C\uC678 \uCD94\uC774",
            fmt(diagnosisExcludedSeries.current),
            diagnosisExcludedSeries.color,
            sparkline(
              diagnosisExcludedSeries.values,
              diagnosisDates,
              80,
              diagnosisExcludedSeries.color,
              "\uAC74",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(secTitle("SEO \uBB38\uC81C \uCF54\uB4DC"));
        wrap.appendChild(
          buildCodeCard(
            "\uCD5C\uC2E0 SEO \uBB38\uC81C \uC0C1\uC704 \uCF54\uB4DC",
            diagnosisSeoCodes.slice(0, 6),
            C.red,
            "SEO \uBB38\uC81C \uCF54\uB4DC \uC9D1\uACC4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
          ),
        );
        wrap.appendChild(secTitle("\uC218\uC9D1\uC81C\uD55C \uCF54\uB4DC"));
        wrap.appendChild(
          buildCodeCard(
            "\uCD5C\uC2E0 \uC218\uC9D1\uC81C\uD55C \uC0C1\uC704 \uCF54\uB4DC",
            diagnosisRestrictedCodes.slice(0, 6),
            C.amber,
            "\uC218\uC9D1\uC81C\uD55C \uCF54\uB4DC \uC9D1\uACC4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
          ),
        );
        wrap.appendChild(secTitle("\uC0C9\uC778 \uC81C\uC678 \uCF54\uB4DC"));
        wrap.appendChild(
          buildCodeCard(
            "\uCD5C\uC2E0 \uC0C9\uC778 \uC81C\uC678 \uC0C1\uC704 \uCF54\uB4DC",
            diagnosisExcludedCodes.slice(0, 6),
            C.teal,
            "\uC0C9\uC778 \uC81C\uC678 \uCF54\uB4DC \uC9D1\uACC4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
          ),
        );
        if (diagnosisUnknownCodes.length) {
          wrap.appendChild(secTitle("\uBBF8\uC2DD\uBCC4 \uCF54\uB4DC"));
          wrap.appendChild(
            chartCard(
              "\uCD5C\uC2E0 \uBBF8\uC2DD\uBCC4 \uBB38\uC81C \uBD84\uD3EC",
              fmt(diagnosisUnknownTotal) +
                "\uAC74" +
                (diagnosisTopUnknownCode
                  ? " / " + diagnosisTopUnknownCode.code
                  : ""),
              C.sub,
              barchart(
                diagnosisUnknownCodes.slice(0, 6).map(function (row) {
                  return row.count;
                }),
                diagnosisUnknownCodes.slice(0, 6).map(function (row) {
                  return row.code;
                }),
                70,
                C.sub,
                "\uAC74",
              ),
              diagnosisUnknownCodes.slice(0, 6).map(function (row) {
                return row.code;
              }),
            ),
          );
          wrap.appendChild(
            buildCodeCard(
              "\uCD5C\uC2E0 \uBBF8\uC2DD\uBCC4 \uC0C1\uC704 \uCF54\uB4DC",
              diagnosisUnknownCodes.slice(0, 6),
              C.sub,
              "\uBBF8\uC2DD\uBCC4 \uCF54\uB4DC \uC9D1\uACC4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
            ),
          );
        }
        wrap.appendChild(
          ibox(
            "blue",
            "\uC0C9\uC778\uC740 state 1, \uC218\uC9D1\uC81C\uD55C\uC740 state 2, \uC0C9\uC778 \uC81C\uC678\uB294 state 3, SEO \uBB38\uC81C\uB294 state 4 \uAE30\uC900\uC73C\uB85C \uD45C\uC2DC\uD588\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC \uBD84\uD574\uB294 latest typeCount bucket " +
              (diagnosisTypeBucketKey || "-") +
              " \uAE30\uC900 \uD604\uC7AC \uBD84\uD3EC\uB9CC \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
          ),
        );
        wrap.appendChild(
          ibox(
            "amber",
            "1000\uC740 \uC0C9\uC778, 2300/2400/2500\uC740 \uC218\uC9D1\uC81C\uD55C, 3003\uC740 meta robots\uC73C\uB85C \uC0C9\uC778\uC5D0\uC11C \uC81C\uC678\uB41C \uD398\uC774\uC9C0, 4001/4002/4007/4008\uC740 SEO \uBB38\uC81C\uB85C \uD574\uC11D\uD588\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB418\uC9C0 \uC54A\uC740 \uCF54\uB4DC\uB294 \uBBF8\uC2DD\uBCC4 \uBB38\uC81C\uB85C \uBB36\uC5B4 \uCD5C\uC2E0 \uBD84\uD3EC\uB97C \uBCC4\uB3C4 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
          ),
        );
        return wrap;
        const splitCount =
          diagnosisMeta && diagnosisMeta.meta && diagnosisMeta.meta.splitCount
            ? diagnosisMeta.meta.splitCount
            : 0;
        wrap.appendChild(
          kpiGrid([
            {
              label: "최신 총 URL",
              value: fmt(diagnosisTotalLatest),
              sub: latestDate,
              color: C.blue,
            },
            { label: "관측일수", value: diagnosisLogs.length + "일", color: C.teal },
            {
              label: "분할 기준",
              value: fmt(splitCount),
              sub: "splitCount",
              color: C.amber,
            },
            {
              label: "유형 버킷",
              value: Object.keys(diagnosisTypeBuckets).length + "개",
              color: C.sub,
            },
          ]),
        );
        wrap.appendChild(
          chartCard(
            "상태 1 추이",
            latestDate,
            C.green,
            sparkline(
              diagnosisLogs.map(function (row) {
                return (row.stateCount && row.stateCount["1"]) || 0;
              }),
              diagnosisDates,
              80,
              C.green,
              "개",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(
          chartCard(
            "상태 4 추이",
            latestDate,
            C.red,
            sparkline(
              diagnosisLogs.map(function (row) {
                return (row.stateCount && row.stateCount["4"]) || 0;
              }),
              diagnosisDates,
              80,
              C.red,
              "개",
            ),
            diagnosisDates,
          ),
        );
        wrap.appendChild(
          chartCard(
            "최신 상태 분포",
            latestDate,
            C.purple,
            barchart(
              diagnosisTotals,
              diagnosisStates.map(function (key) {
                return "S" + key;
              }),
              70,
              C.purple,
              "개",
            ),
            diagnosisStates.map(function (key) {
              return "S" + key;
            }),
          ),
        );
        wrap.appendChild(secTitle("최신 상태 상세"));
        diagnosisStates.forEach(function (key) {
          const current = diagnosisLatestCounts[key] || 0;
          const prev =
            diagnosisFirst && diagnosisFirst.stateCount
              ? diagnosisFirst.stateCount[key] || 0
              : 0;
          const delta = current - prev;
          const box = document.createElement("div");
          box.style.cssText =
            "background:#0d1829;border:1px solid #1a2d45;border-radius:9px;padding:10px 11px;margin-bottom:6px";
          box.innerHTML =
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:11px;color:#7a9ab8">상태 ' +
            key +
            '</span><b style="color:' +
            (delta >= 0 ? C.green : C.red) +
            '">' +
            fmt(current) +
            '개</b></div>' +
            hbar(
              current,
              diagnosisTotalLatest || 1,
              key === "1"
                ? C.green
                : key === "2"
                  ? C.amber
                  : key === "3"
                    ? C.teal
                    : C.red,
            ) +
            '<div style="font-size:10px;color:#3d5a78;margin-top:5px">기간 변화 <b style="color:' +
            (delta >= 0 ? C.green : C.red) +
            '">' +
            (delta >= 0 ? "+" : "") +
            fmt(delta) +
            "</b></div>";
          wrap.appendChild(box);
        });
        const bucketKeys = Object.keys(diagnosisTypeBuckets).sort(function (a, b) {
          return Number(a) - Number(b);
        });
        if (bucketKeys.length) {
          wrap.appendChild(secTitle("유형 코드 집계"));
          bucketKeys.forEach(function (bucket) {
            const entries = Object.entries(diagnosisTypeBuckets[bucket] || {})
              .sort(function (a, b) {
                return b[1] - a[1];
              })
              .slice(0, 6);
            const card = document.createElement("div");
            card.style.cssText =
              "background:#0d1829;border:1px solid #1a2d45;border-radius:9px;padding:10px 11px;margin-bottom:7px";
            card.innerHTML =
              '<div style="font-size:12px;font-weight:700;color:#e0ecff;margin-bottom:6px">기간 ' +
              bucket +
              '일</div>' +
              entries
                .map(function (entry) {
                  return '<div style="display:flex;justify-content:space-between;gap:8px;padding:4px 0;border-bottom:1px solid #1a2d45"><span style="font-size:11px;color:#7a9ab8">코드 ' +
                    entry[0] +
                    '</span><b style="font-size:11px;color:#d4ecff">' +
                    fmt(entry[1]) +
                    "개</b></div>";
                })
                .join("");
            wrap.appendChild(card);
          });
        }
        wrap.appendChild(
          ibox(
            "blue",
            "상태/유형 코드는 응답 원문 기준으로만 노출합니다. 라벨 추정 없이 변화량과 규모만 보여줍니다.",
          ),
        );
        return wrap;
      },
      insight: function () {`),s=Ho(s,`        EXPORT_PAYLOAD.dataBySite[site] || {
          expose: null,
          crawl: null,
          backlink: null,
          detailLoaded: false,
        }
      );`,`        EXPORT_PAYLOAD.dataBySite[site] || {
          expose: null,
          crawl: null,
          backlink: null,
          diagnosisMeta: null,
          detailLoaded: false,
        }
      );`),s=Ho(s,`            EXPORT_PAYLOAD.dataBySite[site] || {
              expose: null,
              crawl: null,
              backlink: null,
              detailLoaded: false,
            },`,`            EXPORT_PAYLOAD.dataBySite[site] || {
              expose: null,
              crawl: null,
              backlink: null,
              diagnosisMeta: null,
              detailLoaded: false,
            },`),s=Ho(s,`  renderAllSites();
})();`,`  await renderAllSites();
  __sadvMarkReady();
})();`),s=Ho(s,`    let allSites = EXPORT_PAYLOAD.allSites || [];
`,`    function __sadvNotify() {}
    let allSites = EXPORT_PAYLOAD.allSites || [];
`),s}let Qh=null;function oS(){Qh||(Qh=iS(nS)),new Function(Qh)();const a=window.__sadvApi;return a?{getState:()=>_0(a.getState()),isReady:()=>!!a.isReady?.(),waitUntilReady:s=>a.waitUntilReady?a.waitUntilReady(s):Promise.resolve(!0),subscribe:s=>a.subscribe(f=>{s(_0(f))}),switchMode:a.switchMode,setSite:a.setSite,setTab:a.setTab,refresh:a.refresh,download:a.download,exportSnapshotData:a.exportSnapshotData,buildLegacySnapshotHtml:a.buildLegacySnapshotHtml,close:a.close}:null}var eu={},Ps={};/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function cS(){if(M0)return Ps;M0=1;var a=Ns(),s=Uf();function f(i){var c="https://react.dev/errors/"+i;if(1<arguments.length){c+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)c+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+i+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Z=Symbol.for("react.scope"),$=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),me=Symbol.for("react.memo_cache_sentinel"),de=Symbol.for("react.view_transition"),ve=Symbol.iterator;function Te(i){return i===null||typeof i!="object"?null:(i=ve&&i[ve]||i["@@iterator"],typeof i=="function"?i:null)}var Ee=Array.isArray;function be(i,c){var g=i.length&3,m=i.length-g,w=c;for(c=0;c<m;){var M=i.charCodeAt(c)&255|(i.charCodeAt(++c)&255)<<8|(i.charCodeAt(++c)&255)<<16|(i.charCodeAt(++c)&255)<<24;++c,M=3432918353*(M&65535)+((3432918353*(M>>>16)&65535)<<16)&4294967295,M=M<<15|M>>>17,M=461845907*(M&65535)+((461845907*(M>>>16)&65535)<<16)&4294967295,w^=M,w=w<<13|w>>>19,w=5*(w&65535)+((5*(w>>>16)&65535)<<16)&4294967295,w=(w&65535)+27492+(((w>>>16)+58964&65535)<<16)}switch(M=0,g){case 3:M^=(i.charCodeAt(c+2)&255)<<16;case 2:M^=(i.charCodeAt(c+1)&255)<<8;case 1:M^=i.charCodeAt(c)&255,M=3432918353*(M&65535)+((3432918353*(M>>>16)&65535)<<16)&4294967295,M=M<<15|M>>>17,w^=461845907*(M&65535)+((461845907*(M>>>16)&65535)<<16)&4294967295}return w^=i.length,w^=w>>>16,w=2246822507*(w&65535)+((2246822507*(w>>>16)&65535)<<16)&4294967295,w^=w>>>13,w=3266489909*(w&65535)+((3266489909*(w>>>16)&65535)<<16)&4294967295,(w^w>>>16)>>>0}var ce=Object.assign,ye=Object.prototype.hasOwnProperty,He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},$e={};function st(i){return ye.call($e,i)?!0:ye.call(Ze,i)?!1:He.test(i)?$e[i]=!0:(Ze[i]=!0,!1)}var Ge=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),Ve=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D=/["'&<>]/;function J(i){if(typeof i=="boolean"||typeof i=="number"||typeof i=="bigint")return""+i;i=""+i;var c=D.exec(i);if(c){var g="",m,w=0;for(m=c.index;m<i.length;m++){switch(i.charCodeAt(m)){case 34:c="&quot;";break;case 38:c="&amp;";break;case 39:c="&#x27;";break;case 60:c="&lt;";break;case 62:c="&gt;";break;default:continue}w!==m&&(g+=i.slice(w,m)),w=m+1,g+=c}i=w!==m?g+i.slice(w,m):g}return i}var we=/([A-Z])/g,Pe=/^ms-/,W=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _(i){return W.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var se=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re={pending:!1,data:null,method:null,action:null},pe=Ae.d;Ae.d={f:pe.f,r:pe.r,D:mr,C:yn,L:ii,m:yr,X:dn,S:pr,M:ts};var _e=[],Xe=null,Vt=/(<\/|<)(s)(cript)/gi;function Qe(i,c,g,m){return""+c+(g==="s"?"\\u0073":"\\u0053")+m}function ea(i,c,g,m,w){return{idPrefix:i===void 0?"":i,nextFormID:0,streamingFormat:0,bootstrapScriptContent:g,bootstrapScripts:m,bootstrapModules:w,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function _t(i,c,g,m){return{insertionMode:i,selectedValue:c,tagScope:g,viewTransition:m}}function Fl(i,c,g){var m=i.tagScope&-25;switch(c){case"noscript":return _t(2,null,m|1,null);case"select":return _t(2,g.value!=null?g.value:g.defaultValue,m,null);case"svg":return _t(4,null,m,null);case"picture":return _t(2,null,m|2,null);case"math":return _t(5,null,m,null);case"foreignObject":return _t(2,null,m,null);case"table":return _t(6,null,m,null);case"thead":case"tbody":case"tfoot":return _t(7,null,m,null);case"colgroup":return _t(9,null,m,null);case"tr":return _t(8,null,m,null);case"head":if(2>i.insertionMode)return _t(3,null,m,null);break;case"html":if(i.insertionMode===0)return _t(1,null,m,null)}return 6<=i.insertionMode||2>i.insertionMode?_t(2,null,m,null):i.tagScope!==m?_t(i.insertionMode,i.selectedValue,m,null):i}function Ue(i){return i===null?null:{update:i.update,enter:"none",exit:"none",share:i.update,name:i.autoName,autoName:i.autoName,nameIdx:0}}function ol(i,c){return c.tagScope&32&&(i.instructions|=128),_t(c.insertionMode,c.selectedValue,c.tagScope|12,Ue(c.viewTransition))}function $r(i,c){i=Ue(c.viewTransition);var g=c.tagScope|16;return i!==null&&i.share!=="none"&&(g|=64),_t(c.insertionMode,c.selectedValue,g,i)}var Fo=new Map;function ei(i,c){if(typeof c!="object")throw Error(f(62));var g=!0,m;for(m in c)if(ye.call(c,m)){var w=c[m];if(w!=null&&typeof w!="boolean"&&w!==""){if(m.indexOf("--")===0){var M=J(m);w=J((""+w).trim())}else M=Fo.get(m),M===void 0&&(M=J(m.replace(we,"-$1").toLowerCase().replace(Pe,"-ms-")),Fo.set(m,M)),w=typeof w=="number"?w===0||Ge.has(m)?""+w:w+"px":J((""+w).trim());g?(g=!1,i.push(' style="',M,":",w)):i.push(";",M,":",w)}}g||i.push('"')}function ma(i,c,g){g&&typeof g!="function"&&typeof g!="symbol"&&i.push(" ",c,'=""')}function fn(i,c,g){typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&i.push(" ",c,'="',J(g),'"')}var Yo=J("javascript:throw new Error('React form unexpectedly submitted.')");function pl(i,c){this.push('<input type="hidden"'),xl(i),fn(this,"name",c),fn(this,"value",i),this.push("/>")}function xl(i){if(typeof i!="string")throw Error(f(480))}function gr(i,c){if(typeof c.$$FORM_ACTION=="function"){var g=i.nextFormID++;i=i.idPrefix+g;try{var m=c.$$FORM_ACTION(i);if(m){var w=m.data;w?.forEach(xl)}return m}catch(M){if(typeof M=="object"&&M!==null&&typeof M.then=="function")throw M}}return null}function cl(i,c,g,m,w,M,N,ne){var P=null;if(typeof m=="function"){var le=gr(c,m);le!==null?(ne=le.name,m=le.action||"",w=le.encType,M=le.method,N=le.target,P=le.data):(i.push(" ","formAction",'="',Yo,'"'),N=M=w=m=ne=null,ti(c,g))}return ne!=null&&gt(i,"name",ne),m!=null&&gt(i,"formAction",m),w!=null&&gt(i,"formEncType",w),M!=null&&gt(i,"formMethod",M),N!=null&&gt(i,"formTarget",N),P}function gt(i,c,g){switch(c){case"className":fn(i,"class",g);break;case"tabIndex":fn(i,"tabindex",g);break;case"dir":case"role":case"viewBox":case"width":case"height":fn(i,c,g);break;case"style":ei(i,g);break;case"src":case"href":if(g==="")break;case"action":case"formAction":if(g==null||typeof g=="function"||typeof g=="symbol"||typeof g=="boolean")break;g=_(""+g),i.push(" ",c,'="',J(g),'"');break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":ma(i,c.toLowerCase(),g);break;case"xlinkHref":if(typeof g=="function"||typeof g=="symbol"||typeof g=="boolean")break;g=_(""+g),i.push(" ","xlink:href",'="',J(g),'"');break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof g!="function"&&typeof g!="symbol"&&i.push(" ",c,'="',J(g),'"');break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":g&&typeof g!="function"&&typeof g!="symbol"&&i.push(" ",c,'=""');break;case"capture":case"download":g===!0?i.push(" ",c,'=""'):g!==!1&&typeof g!="function"&&typeof g!="symbol"&&i.push(" ",c,'="',J(g),'"');break;case"cols":case"rows":case"size":case"span":typeof g!="function"&&typeof g!="symbol"&&!isNaN(g)&&1<=g&&i.push(" ",c,'="',J(g),'"');break;case"rowSpan":case"start":typeof g=="function"||typeof g=="symbol"||isNaN(g)||i.push(" ",c,'="',J(g),'"');break;case"xlinkActuate":fn(i,"xlink:actuate",g);break;case"xlinkArcrole":fn(i,"xlink:arcrole",g);break;case"xlinkRole":fn(i,"xlink:role",g);break;case"xlinkShow":fn(i,"xlink:show",g);break;case"xlinkTitle":fn(i,"xlink:title",g);break;case"xlinkType":fn(i,"xlink:type",g);break;case"xmlBase":fn(i,"xml:base",g);break;case"xmlLang":fn(i,"xml:lang",g);break;case"xmlSpace":fn(i,"xml:space",g);break;default:if((!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N")&&(c=Ve.get(c)||c,st(c))){switch(typeof g){case"function":case"symbol":return;case"boolean":var m=c.toLowerCase().slice(0,5);if(m!=="data-"&&m!=="aria-")return}i.push(" ",c,'="',J(g),'"')}}}function ul(i,c,g){if(c!=null){if(g!=null)throw Error(f(60));if(typeof c!="object"||!("__html"in c))throw Error(f(61));c=c.__html,c!=null&&i.push(""+c)}}function qu(i){var c="";return a.Children.forEach(i,function(g){g!=null&&(c+=g)}),c}function ti(i,c){if((i.instructions&16)===0){i.instructions|=16;var g=c.preamble,m=c.bootstrapChunks;(g.htmlChunks||g.headChunks)&&m.length===0?(m.push(c.startInlineScript),Qi(m,i),m.push(">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,"<\/script>")):m.unshift(c.startInlineScript,">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,"<\/script>")}}function Cn(i,c){i.push(Qt("link"));for(var g in c)if(ye.call(c,g)){var m=c[g];if(m!=null)switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"link"));default:gt(i,g,m)}}return i.push("/>"),null}var Po=/(<\/|<)(s)(tyle)/gi;function lu(i,c,g,m){return""+c+(g==="s"?"\\73 ":"\\53 ")+m}function ni(i,c,g){i.push(Qt(g));for(var m in c)if(ye.call(c,m)){var w=c[m];if(w!=null)switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,g));default:gt(i,m,w)}}return i.push("/>"),null}function ja(i,c){i.push(Qt("title"));var g=null,m=null,w;for(w in c)if(ye.call(c,w)){var M=c[w];if(M!=null)switch(w){case"children":g=M;break;case"dangerouslySetInnerHTML":m=M;break;default:gt(i,w,M)}}return i.push(">"),c=Array.isArray(g)?2>g.length?g[0]:null:g,typeof c!="function"&&typeof c!="symbol"&&c!==null&&c!==void 0&&i.push(J(""+c)),ul(i,m,g),i.push(Yl("title")),null}function gn(i,c){i.push(Qt("script"));var g=null,m=null,w;for(w in c)if(ye.call(c,w)){var M=c[w];if(M!=null)switch(w){case"children":g=M;break;case"dangerouslySetInnerHTML":m=M;break;default:gt(i,w,M)}}return i.push(">"),ul(i,m,g),typeof g=="string"&&i.push((""+g).replace(Vt,Qe)),i.push(Yl("script")),null}function ta(i,c,g){i.push(Qt(g));var m=g=null,w;for(w in c)if(ye.call(c,w)){var M=c[w];if(M!=null)switch(w){case"children":g=M;break;case"dangerouslySetInnerHTML":m=M;break;default:gt(i,w,M)}}return i.push(">"),ul(i,m,g),g}function Bn(i,c,g){i.push(Qt(g));var m=g=null,w;for(w in c)if(ye.call(c,w)){var M=c[w];if(M!=null)switch(w){case"children":g=M;break;case"dangerouslySetInnerHTML":m=M;break;default:gt(i,w,M)}}return i.push(">"),ul(i,m,g),typeof g=="string"?(i.push(J(g)),null):g}var Go=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,au=new Map;function Qt(i){var c=au.get(i);if(c===void 0){if(!Go.test(i))throw Error(f(65,i));c="<"+i,au.set(i,c)}return c}function rn(i,c,g,m,w,M,N,ne,P){switch(c){case"div":case"span":case"svg":case"path":break;case"a":i.push(Qt("a"));var le=null,he=null,ie;for(ie in g)if(ye.call(g,ie)){var Ce=g[ie];if(Ce!=null)switch(ie){case"children":le=Ce;break;case"dangerouslySetInnerHTML":he=Ce;break;case"href":Ce===""?fn(i,"href",""):gt(i,ie,Ce);break;default:gt(i,ie,Ce)}}if(i.push(">"),ul(i,he,le),typeof le=="string"){i.push(J(le));var Oe=null}else Oe=le;return Oe;case"g":case"p":case"li":break;case"select":i.push(Qt("select"));var at=null,je=null,Je;for(Je in g)if(ye.call(g,Je)){var We=g[Je];if(We!=null)switch(Je){case"children":at=We;break;case"dangerouslySetInnerHTML":je=We;break;case"defaultValue":case"value":break;default:gt(i,Je,We)}}return i.push(">"),ul(i,je,at),at;case"option":var et=ne.selectedValue;i.push(Qt("option"));var xt=null,Gt=null,it=null,ot=null,dt;for(dt in g)if(ye.call(g,dt)){var kt=g[dt];if(kt!=null)switch(dt){case"children":xt=kt;break;case"selected":it=kt;break;case"dangerouslySetInnerHTML":ot=kt;break;case"value":Gt=kt;default:gt(i,dt,kt)}}if(et!=null){var ft=Gt!==null?""+Gt:qu(xt);if(Ee(et)){for(var en=0;en<et.length;en++)if(""+et[en]===ft){i.push(' selected=""');break}}else""+et===ft&&i.push(' selected=""')}else it&&i.push(' selected=""');return i.push(">"),ul(i,ot,xt),xt;case"textarea":i.push(Qt("textarea"));var wt=null,Jt=null,Ft=null,Nt;for(Nt in g)if(ye.call(g,Nt)){var Fn=g[Nt];if(Fn!=null)switch(Nt){case"children":Ft=Fn;break;case"value":wt=Fn;break;case"defaultValue":Jt=Fn;break;case"dangerouslySetInnerHTML":throw Error(f(91));default:gt(i,Nt,Fn)}}if(wt===null&&Jt!==null&&(wt=Jt),i.push(">"),Ft!=null){if(wt!=null)throw Error(f(92));if(Ee(Ft)){if(1<Ft.length)throw Error(f(93));wt=""+Ft[0]}wt=""+Ft}return typeof wt=="string"&&wt[0]===`
`&&i.push(`
`),wt!==null&&i.push(J(""+wt)),null;case"input":i.push(Qt("input"));var ka=null,dl=null,Yn=null,Vl=null,tn=null,$n=null,el=null,jt=null,on=null,tl;for(tl in g)if(ye.call(g,tl)){var Mt=g[tl];if(Mt!=null)switch(tl){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"input"));case"name":ka=Mt;break;case"formAction":dl=Mt;break;case"formEncType":Yn=Mt;break;case"formMethod":Vl=Mt;break;case"formTarget":tn=Mt;break;case"defaultChecked":on=Mt;break;case"defaultValue":el=Mt;break;case"checked":jt=Mt;break;case"value":$n=Mt;break;default:gt(i,tl,Mt)}}var Pn=cl(i,m,w,dl,Yn,Vl,tn,ka);return jt!==null?ma(i,"checked",jt):on!==null&&ma(i,"checked",on),$n!==null?gt(i,"value",$n):el!==null&&gt(i,"value",el),i.push("/>"),Pn?.forEach(pl,i),null;case"button":i.push(Qt("button"));var wl=null,dc=null,oo=null,hc=null,vc=null,nn=null,Lt=null,nt;for(nt in g)if(ye.call(g,nt)){var _n=g[nt];if(_n!=null)switch(nt){case"children":wl=_n;break;case"dangerouslySetInnerHTML":dc=_n;break;case"name":oo=_n;break;case"formAction":hc=_n;break;case"formEncType":vc=_n;break;case"formMethod":nn=_n;break;case"formTarget":Lt=_n;break;default:gt(i,nt,_n)}}var xn=cl(i,m,w,hc,vc,nn,Lt,oo);if(i.push(">"),xn?.forEach(pl,i),ul(i,dc,wl),typeof wl=="string"){i.push(J(wl));var Si=null}else Si=wl;return Si;case"form":i.push(Qt("form"));var nl=null,gc=null,Sl=null,ra=null,kl=null,or=null,Na;for(Na in g)if(ye.call(g,Na)){var Ql=g[Na];if(Ql!=null)switch(Na){case"children":nl=Ql;break;case"dangerouslySetInnerHTML":gc=Ql;break;case"action":Sl=Ql;break;case"encType":ra=Ql;break;case"method":kl=Ql;break;case"target":or=Ql;break;default:gt(i,Na,Ql)}}var La=null,Ot=null;if(typeof Sl=="function"){var ll=gr(m,Sl);ll!==null?(Sl=ll.action||"",ra=ll.encType,kl=ll.method,or=ll.target,La=ll.data,Ot=ll.name):(i.push(" ","action",'="',Yo,'"'),or=kl=ra=Sl=null,ti(m,w))}if(Sl!=null&&gt(i,"action",Sl),ra!=null&&gt(i,"encType",ra),kl!=null&&gt(i,"method",kl),or!=null&&gt(i,"target",or),i.push(">"),Ot!==null&&(i.push('<input type="hidden"'),fn(i,"name",Ot),i.push("/>"),La?.forEach(pl,i)),ul(i,gc,nl),typeof nl=="string"){i.push(J(nl));var hl=null}else hl=nl;return hl;case"menuitem":i.push(Qt("menuitem"));for(var ia in g)if(ye.call(g,ia)){var Ei=g[ia];if(Ei!=null)switch(ia){case"children":case"dangerouslySetInnerHTML":throw Error(f(400));default:gt(i,ia,Ei)}}return i.push(">"),null;case"object":i.push(Qt("object"));var Mn=null,Wl=null,El;for(El in g)if(ye.call(g,El)){var Ct=g[El];if(Ct!=null)switch(El){case"children":Mn=Ct;break;case"dangerouslySetInnerHTML":Wl=Ct;break;case"data":var cn=_(""+Ct);if(cn==="")break;i.push(" ","data",'="',J(cn),'"');break;default:gt(i,El,Ct)}}if(i.push(">"),ul(i,Wl,Mn),typeof Mn=="string"){i.push(J(Mn));var Nr=null}else Nr=Mn;return Nr;case"title":var Gn=ne.tagScope&1,gu=ne.tagScope&4;if(ne.insertionMode===4||Gn||g.itemProp!=null)var co=ja(i,g);else gu?co=null:(ja(w.hoistableChunks,g),co=void 0);return co;case"link":var Xt=ne.tagScope&1,bc=ne.tagScope&4,Ci=g.rel,Cl=g.href,Ba=g.precedence;if(ne.insertionMode===4||Xt||g.itemProp!=null||typeof Ci!="string"||typeof Cl!="string"||Cl===""){Cn(i,g);var Tl=null}else if(g.rel==="stylesheet")if(typeof Ba!="string"||g.disabled!=null||g.onLoad||g.onError)Tl=Cn(i,g);else{var qt=w.styles.get(Ba),Ti=m.styleResources.hasOwnProperty(Cl)?m.styleResources[Cl]:void 0;if(Ti!==null){m.styleResources[Cl]=null,qt||(qt={precedence:J(Ba),rules:[],hrefs:[],sheets:new Map},w.styles.set(Ba,qt));var Lr={state:0,props:ce({},g,{"data-precedence":g.precedence,precedence:null})};if(Ti){Ti.length===2&&oi(Lr.props,Ti);var mc=w.preloads.stylesheets.get(Cl);mc&&0<mc.length?mc.length=0:Lr.state=1}qt.sheets.set(Cl,Lr),N&&N.stylesheets.add(Lr)}else if(qt){var uo=qt.sheets.get(Cl);uo&&N&&N.stylesheets.add(uo)}P&&i.push("<!-- -->"),Tl=null}else g.onLoad||g.onError?Tl=Cn(i,g):(P&&i.push("<!-- -->"),Tl=bc?null:Cn(w.hoistableChunks,g));return Tl;case"script":var Ha=ne.tagScope&1,Ri=g.async;if(typeof g.src!="string"||!g.src||!Ri||typeof Ri=="function"||typeof Ri=="symbol"||g.onLoad||g.onError||ne.insertionMode===4||Ha||g.itemProp!=null)var Ai=gn(i,g);else{var $t=g.src;if(g.type==="module")var Ua=m.moduleScriptResources,cr=w.preloads.moduleScripts;else Ua=m.scriptResources,cr=w.preloads.scripts;var Fa=Ua.hasOwnProperty($t)?Ua[$t]:void 0;if(Fa!==null){Ua[$t]=null;var ur=g;if(Fa){Fa.length===2&&(ur=ce({},g),oi(ur,Fa));var so=cr.get($t);so&&(so.length=0)}var _i=[];w.scripts.add(_i),gn(_i,ur)}P&&i.push("<!-- -->"),Ai=null}return Ai;case"style":var Jl=ne.tagScope&1,al=g.precedence,vl=g.href,yc=g.nonce;if(ne.insertionMode===4||Jl||g.itemProp!=null||typeof al!="string"||typeof vl!="string"||vl===""){i.push(Qt("style"));var Rl=null,Br=null,Nl;for(Nl in g)if(ye.call(g,Nl)){var Kl=g[Nl];if(Kl!=null)switch(Nl){case"children":Rl=Kl;break;case"dangerouslySetInnerHTML":Br=Kl;break;default:gt(i,Nl,Kl)}}i.push(">");var Ll=Array.isArray(Rl)?2>Rl.length?Rl[0]:null:Rl;typeof Ll!="function"&&typeof Ll!="symbol"&&Ll!==null&&Ll!==void 0&&i.push((""+Ll).replace(Po,lu)),ul(i,Br,Rl),i.push(Yl("style"));var Hr=null}else{var rl=w.styles.get(al);if((m.styleResources.hasOwnProperty(vl)?m.styleResources[vl]:void 0)!==null){m.styleResources[vl]=null,rl||(rl={precedence:J(al),rules:[],hrefs:[],sheets:new Map},w.styles.set(al,rl));var pc=w.nonce.style;if(!pc||pc===yc){rl.hrefs.push(J(vl));var oa=rl.rules,jl=null,Ur=null,gl;for(gl in g)if(ye.call(g,gl)){var Xn=g[gl];if(Xn!=null)switch(gl){case"children":jl=Xn;break;case"dangerouslySetInnerHTML":Ur=Xn}}var Bl=Array.isArray(jl)?2>jl.length?jl[0]:null:jl;typeof Bl!="function"&&typeof Bl!="symbol"&&Bl!==null&&Bl!==void 0&&oa.push((""+Bl).replace(Po,lu)),ul(oa,Ur,jl)}}rl&&N&&N.styles.add(rl),P&&i.push("<!-- -->"),Hr=void 0}return Hr;case"meta":var bl=ne.tagScope&1,Mi=ne.tagScope&4;if(ne.insertionMode===4||bl||g.itemProp!=null)var Fr=ni(i,g,"meta");else P&&i.push("<!-- -->"),Fr=Mi?null:typeof g.charSet=="string"?ni(w.charsetChunks,g,"meta"):g.name==="viewport"?ni(w.viewportChunks,g,"meta"):ni(w.hoistableChunks,g,"meta");return Fr;case"listing":case"pre":i.push(Qt(c));var ca=null,r=null,o;for(o in g)if(ye.call(g,o)){var h=g[o];if(h!=null)switch(o){case"children":ca=h;break;case"dangerouslySetInnerHTML":r=h;break;default:gt(i,o,h)}}if(i.push(">"),r!=null){if(ca!=null)throw Error(f(60));if(typeof r!="object"||!("__html"in r))throw Error(f(61));var b=r.__html;b!=null&&(typeof b=="string"&&0<b.length&&b[0]===`
`?i.push(`
`,b):i.push(""+b))}return typeof ca=="string"&&ca[0]===`
`&&i.push(`
`),ca;case"img":var y=ne.tagScope&3,C=g.src,z=g.srcSet;if(!(g.loading==="lazy"||!C&&!z||typeof C!="string"&&C!=null||typeof z!="string"&&z!=null||g.fetchPriority==="low"||y)&&(typeof C!="string"||C[4]!==":"||C[0]!=="d"&&C[0]!=="D"||C[1]!=="a"&&C[1]!=="A"||C[2]!=="t"&&C[2]!=="T"||C[3]!=="a"&&C[3]!=="A")&&(typeof z!="string"||z[4]!==":"||z[0]!=="d"&&z[0]!=="D"||z[1]!=="a"&&z[1]!=="A"||z[2]!=="t"&&z[2]!=="T"||z[3]!=="a"&&z[3]!=="A")){N!==null&&ne.tagScope&64&&(N.suspenseyImages=!0);var X=typeof g.sizes=="string"?g.sizes:void 0,B=z?z+`
`+(X||""):C,I=w.preloads.images,ee=I.get(B);if(ee)(g.fetchPriority==="high"||10>w.highImagePreloads.size)&&(I.delete(B),w.highImagePreloads.add(ee));else if(!m.imageResources.hasOwnProperty(B)){m.imageResources[B]=_e;var ae=g.crossOrigin,xe=typeof ae=="string"?ae==="use-credentials"?ae:"":void 0,Se=w.headers,Le;Se&&0<Se.remainingCapacity&&typeof g.srcSet!="string"&&(g.fetchPriority==="high"||500>Se.highImagePreloads.length)&&(Le=Ut(C,"image",{imageSrcSet:g.srcSet,imageSizes:g.sizes,crossOrigin:xe,integrity:g.integrity,nonce:g.nonce,type:g.type,fetchPriority:g.fetchPriority,referrerPolicy:g.refererPolicy}),0<=(Se.remainingCapacity-=Le.length+2))?(w.resets.image[B]=_e,Se.highImagePreloads&&(Se.highImagePreloads+=", "),Se.highImagePreloads+=Le):(ee=[],Cn(ee,{rel:"preload",as:"image",href:z?void 0:C,imageSrcSet:z,imageSizes:X,crossOrigin:xe,integrity:g.integrity,type:g.type,fetchPriority:g.fetchPriority,referrerPolicy:g.referrerPolicy}),g.fetchPriority==="high"||10>w.highImagePreloads.size?w.highImagePreloads.add(ee):(w.bulkPreloads.add(ee),I.set(B,ee)))}}return ni(i,g,"img");case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return ni(i,g,c);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>ne.insertionMode){var tt=M||w.preamble;if(tt.headChunks)throw Error(f(545,"`<head>`"));M!==null&&i.push("<!--head-->"),tt.headChunks=[];var Ke=ta(tt.headChunks,g,"head")}else Ke=Bn(i,g,"head");return Ke;case"body":if(2>ne.insertionMode){var Me=M||w.preamble;if(Me.bodyChunks)throw Error(f(545,"`<body>`"));M!==null&&i.push("<!--body-->"),Me.bodyChunks=[];var Be=ta(Me.bodyChunks,g,"body")}else Be=Bn(i,g,"body");return Be;case"html":if(ne.insertionMode===0){var ct=M||w.preamble;if(ct.htmlChunks)throw Error(f(545,"`<html>`"));M!==null&&i.push("<!--html-->"),ct.htmlChunks=[""];var On=ta(ct.htmlChunks,g,"html")}else On=Bn(i,g,"html");return On;default:if(c.indexOf("-")!==-1){i.push(Qt(c));var zn=null,Fe=null,vn;for(vn in g)if(ye.call(g,vn)){var Bt=g[vn];if(Bt!=null){var un=vn;switch(vn){case"children":zn=Bt;break;case"dangerouslySetInnerHTML":Fe=Bt;break;case"style":ei(i,Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":un="class";default:if(st(vn)&&typeof Bt!="function"&&typeof Bt!="symbol"&&Bt!==!1){if(Bt===!0)Bt="";else if(typeof Bt=="object")continue;i.push(" ",un,'="',J(Bt),'"')}}}}return i.push(">"),ul(i,Fe,zn),zn}}return Bn(i,g,c)}var li=new Map;function Yl(i){var c=li.get(i);return c===void 0&&(c="</"+i+">",li.set(i,c)),c}function ya(i,c){i=i.preamble,i.htmlChunks===null&&c.htmlChunks&&(i.htmlChunks=c.htmlChunks),i.headChunks===null&&c.headChunks&&(i.headChunks=c.headChunks),i.bodyChunks===null&&c.bodyChunks&&(i.bodyChunks=c.bodyChunks)}function br(i,c){c=c.bootstrapChunks;for(var g=0;g<c.length-1;g++)i.push(c[g]);return g<c.length?(g=c[g],c.length=0,i.push(g)):!0}function pa(i,c,g){if(i.push('<!--$?--><template id="'),g===null)throw Error(f(395));return i.push(c.boundaryPrefix),c=g.toString(16),i.push(c),i.push('"></template>')}function Pl(i,c,g,m){switch(g.insertionMode){case 0:case 1:case 3:case 2:return i.push('<div hidden id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 4:return i.push('<svg aria-hidden="true" style="display:none" id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 5:return i.push('<math aria-hidden="true" style="display:none" id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 6:return i.push('<table hidden id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 7:return i.push('<table hidden><tbody id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 8:return i.push('<table hidden><tr id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');case 9:return i.push('<table hidden><colgroup id="'),i.push(c.segmentPrefix),c=m.toString(16),i.push(c),i.push('">');default:throw Error(f(397))}}function ru(i,c){switch(c.insertionMode){case 0:case 1:case 3:case 2:return i.push("</div>");case 4:return i.push("</svg>");case 5:return i.push("</math>");case 6:return i.push("</table>");case 7:return i.push("</tbody></table>");case 8:return i.push("</tr></table>");case 9:return i.push("</colgroup></table>");default:throw Error(f(397))}}var Xo=/[<\u2028\u2029]/g;function Zi(i){return JSON.stringify(i).replace(Xo,function(c){switch(c){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var $u=/[&><\u2028\u2029]/g;function ai(i){return JSON.stringify(i).replace($u,function(c){switch(c){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var ri=!1,bn=!0;function sl(i){var c=i.rules,g=i.hrefs,m=0;if(g.length){for(this.push(Xe.startInlineStyle),this.push(' media="not all" data-precedence="'),this.push(i.precedence),this.push('" data-href="');m<g.length-1;m++)this.push(g[m]),this.push(" ");for(this.push(g[m]),this.push('">'),m=0;m<c.length;m++)this.push(c[m]);bn=this.push("</style>"),ri=!0,c.length=0,g.length=0}}function Ht(i){return i.state!==2?ri=!0:!1}function Vi(i,c,g){return ri=!1,bn=!0,Xe=g,c.styles.forEach(sl,i),Xe=null,c.stylesheets.forEach(Ht),ri&&(g.stylesToHoist=!0),bn}function fl(i){for(var c=0;c<i.length;c++)this.push(i[c]);i.length=0}var yt=[];function mn(i){Cn(yt,i.props);for(var c=0;c<yt.length;c++)this.push(yt[c]);yt.length=0,i.state=2}function Wn(i){var c=0<i.sheets.size;i.sheets.forEach(mn,this),i.sheets.clear();var g=i.rules,m=i.hrefs;if(!c||m.length){if(this.push(Xe.startInlineStyle),this.push(' data-precedence="'),this.push(i.precedence),i=0,m.length){for(this.push('" data-href="');i<m.length-1;i++)this.push(m[i]),this.push(" ");this.push(m[i])}for(this.push('">'),i=0;i<g.length;i++)this.push(g[i]);this.push("</style>"),g.length=0,m.length=0}}function qa(i){if(i.state===0){i.state=1;var c=i.props;for(Cn(yt,{rel:"preload",as:"style",href:i.props.href,crossOrigin:c.crossOrigin,fetchPriority:c.fetchPriority,integrity:c.integrity,media:c.media,hrefLang:c.hrefLang,referrerPolicy:c.referrerPolicy}),i=0;i<yt.length;i++)this.push(yt[i]);yt.length=0}}function Io(i){i.sheets.forEach(qa,this),i.sheets.clear()}function Qi(i,c){(c.instructions&32)===0&&(c.instructions|=32,i.push(' id="',J("_"+c.idPrefix+"R_"),'"'))}function es(i,c){i.push("[");var g="[";c.stylesheets.forEach(function(m){if(m.state!==2)if(m.state===3)i.push(g),m=ai(""+m.props.href),i.push(m),i.push("]"),g=",[";else{i.push(g);var w=m.props["data-precedence"],M=m.props,N=_(""+m.props.href);N=ai(N),i.push(N),w=""+w,i.push(","),w=ai(w),i.push(w);for(var ne in M)if(ye.call(M,ne)&&(w=M[ne],w!=null))switch(ne){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"link"));default:pt(i,ne,w)}i.push("]"),g=",[",m.state=3}}),i.push("]")}function pt(i,c,g){var m=c.toLowerCase();switch(typeof g){case"function":case"symbol":return}switch(c){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":m="class",c=""+g;break;case"hidden":if(g===!1)return;c="";break;case"src":case"href":g=_(g),c=""+g;break;default:if(2<c.length&&(c[0]==="o"||c[0]==="O")&&(c[1]==="n"||c[1]==="N")||!st(c))return;c=""+g}i.push(","),m=ai(m),i.push(m),i.push(","),m=ai(c),i.push(m)}function St(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function mr(i){var c=Rn||null;if(c){var g=c.resumableState,m=c.renderState;if(typeof i=="string"&&i){if(!g.dnsResources.hasOwnProperty(i)){g.dnsResources[i]=null,g=m.headers;var w,M;(M=g&&0<g.remainingCapacity)&&(M=(w="<"+(""+i).replace(xa,Zo)+">; rel=dns-prefetch",0<=(g.remainingCapacity-=w.length+2))),M?(m.resets.dns[i]=null,g.preconnects&&(g.preconnects+=", "),g.preconnects+=w):(w=[],Cn(w,{href:i,rel:"dns-prefetch"}),m.preconnects.add(w))}Zl(c)}}else pe.D(i)}function yn(i,c){var g=Rn||null;if(g){var m=g.resumableState,w=g.renderState;if(typeof i=="string"&&i){var M=c==="use-credentials"?"credentials":typeof c=="string"?"anonymous":"default";if(!m.connectResources[M].hasOwnProperty(i)){m.connectResources[M][i]=null,m=w.headers;var N,ne;if(ne=m&&0<m.remainingCapacity){if(ne="<"+(""+i).replace(xa,Zo)+">; rel=preconnect",typeof c=="string"){var P=(""+c).replace(wa,Wi);ne+='; crossorigin="'+P+'"'}ne=(N=ne,0<=(m.remainingCapacity-=N.length+2))}ne?(w.resets.connect[M][i]=null,m.preconnects&&(m.preconnects+=", "),m.preconnects+=N):(M=[],Cn(M,{rel:"preconnect",href:i,crossOrigin:c}),w.preconnects.add(M))}Zl(g)}}else pe.C(i,c)}function ii(i,c,g){var m=Rn||null;if(m){var w=m.resumableState,M=m.renderState;if(c&&i){switch(c){case"image":if(g)var N=g.imageSrcSet,ne=g.imageSizes,P=g.fetchPriority;var le=N?N+`
`+(ne||""):i;if(w.imageResources.hasOwnProperty(le))return;w.imageResources[le]=_e,w=M.headers;var he;w&&0<w.remainingCapacity&&typeof N!="string"&&P==="high"&&(he=Ut(i,c,g),0<=(w.remainingCapacity-=he.length+2))?(M.resets.image[le]=_e,w.highImagePreloads&&(w.highImagePreloads+=", "),w.highImagePreloads+=he):(w=[],Cn(w,ce({rel:"preload",href:N?void 0:i,as:c},g)),P==="high"?M.highImagePreloads.add(w):(M.bulkPreloads.add(w),M.preloads.images.set(le,w)));break;case"style":if(w.styleResources.hasOwnProperty(i))return;N=[],Cn(N,ce({rel:"preload",href:i,as:c},g)),w.styleResources[i]=!g||typeof g.crossOrigin!="string"&&typeof g.integrity!="string"?_e:[g.crossOrigin,g.integrity],M.preloads.stylesheets.set(i,N),M.bulkPreloads.add(N);break;case"script":if(w.scriptResources.hasOwnProperty(i))return;N=[],M.preloads.scripts.set(i,N),M.bulkPreloads.add(N),Cn(N,ce({rel:"preload",href:i,as:c},g)),w.scriptResources[i]=!g||typeof g.crossOrigin!="string"&&typeof g.integrity!="string"?_e:[g.crossOrigin,g.integrity];break;default:if(w.unknownResources.hasOwnProperty(c)){if(N=w.unknownResources[c],N.hasOwnProperty(i))return}else N={},w.unknownResources[c]=N;if(N[i]=_e,(w=M.headers)&&0<w.remainingCapacity&&c==="font"&&(le=Ut(i,c,g),0<=(w.remainingCapacity-=le.length+2)))M.resets.font[i]=_e,w.fontPreloads&&(w.fontPreloads+=", "),w.fontPreloads+=le;else switch(w=[],i=ce({rel:"preload",href:i,as:c},g),Cn(w,i),c){case"font":M.fontPreloads.add(w);break;default:M.bulkPreloads.add(w)}}Zl(m)}}else pe.L(i,c,g)}function yr(i,c){var g=Rn||null;if(g){var m=g.resumableState,w=g.renderState;if(i){var M=c&&typeof c.as=="string"?c.as:"script";switch(M){case"script":if(m.moduleScriptResources.hasOwnProperty(i))return;M=[],m.moduleScriptResources[i]=!c||typeof c.crossOrigin!="string"&&typeof c.integrity!="string"?_e:[c.crossOrigin,c.integrity],w.preloads.moduleScripts.set(i,M);break;default:if(m.moduleUnknownResources.hasOwnProperty(M)){var N=m.unknownResources[M];if(N.hasOwnProperty(i))return}else N={},m.moduleUnknownResources[M]=N;M=[],N[i]=_e}Cn(M,ce({rel:"modulepreload",href:i},c)),w.bulkPreloads.add(M),Zl(g)}}else pe.m(i,c)}function pr(i,c,g){var m=Rn||null;if(m){var w=m.resumableState,M=m.renderState;if(i){c=c||"default";var N=M.styles.get(c),ne=w.styleResources.hasOwnProperty(i)?w.styleResources[i]:void 0;ne!==null&&(w.styleResources[i]=null,N||(N={precedence:J(c),rules:[],hrefs:[],sheets:new Map},M.styles.set(c,N)),c={state:0,props:ce({rel:"stylesheet",href:i,"data-precedence":c},g)},ne&&(ne.length===2&&oi(c.props,ne),(M=M.preloads.stylesheets.get(i))&&0<M.length?M.length=0:c.state=1),N.sheets.set(i,c),Zl(m))}}else pe.S(i,c,g)}function dn(i,c){var g=Rn||null;if(g){var m=g.resumableState,w=g.renderState;if(i){var M=m.scriptResources.hasOwnProperty(i)?m.scriptResources[i]:void 0;M!==null&&(m.scriptResources[i]=null,c=ce({src:i,async:!0},c),M&&(M.length===2&&oi(c,M),i=w.preloads.scripts.get(i))&&(i.length=0),i=[],w.scripts.add(i),gn(i,c),Zl(g))}}else pe.X(i,c)}function ts(i,c){var g=Rn||null;if(g){var m=g.resumableState,w=g.renderState;if(i){var M=m.moduleScriptResources.hasOwnProperty(i)?m.moduleScriptResources[i]:void 0;M!==null&&(m.moduleScriptResources[i]=null,c=ce({src:i,type:"module",async:!0},c),M&&(M.length===2&&oi(c,M),i=w.preloads.moduleScripts.get(i))&&(i.length=0),i=[],w.scripts.add(i),gn(i,c),Zl(g))}}else pe.M(i,c)}function oi(i,c){i.crossOrigin==null&&(i.crossOrigin=c[0]),i.integrity==null&&(i.integrity=c[1])}function Ut(i,c,g){i=(""+i).replace(xa,Zo),c=(""+c).replace(wa,Wi),c="<"+i+'>; rel=preload; as="'+c+'"';for(var m in g)ye.call(g,m)&&(i=g[m],typeof i=="string"&&(c+="; "+m.toLowerCase()+'="'+(""+i).replace(wa,Wi)+'"'));return c}var xa=/[<>\r\n]/g;function Zo(i){switch(i){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var wa=/["';,\r\n]/g;function Wi(i){switch(i){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function Xs(i){this.styles.add(i)}function Vo(i){this.stylesheets.add(i)}function Sa(i,c){c.styles.forEach(Xs,i),c.stylesheets.forEach(Vo,i),c.suspenseyImages&&(i.suspenseyImages=!0)}function Ol(i,c){var g=i.idPrefix,m=[],w=i.bootstrapScriptContent,M=i.bootstrapScripts,N=i.bootstrapModules;w!==void 0&&(m.push("<script"),Qi(m,i),m.push(">",(""+w).replace(Vt,Qe),"<\/script>")),w=g+"P:";var ne=g+"S:";g+="B:";var P=new Set,le=new Set,he=new Set,ie=new Map,Ce=new Set,Oe=new Set,at=new Set,je={images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map};if(M!==void 0)for(var Je=0;Je<M.length;Je++){var We=M[Je],et,xt=void 0,Gt=void 0,it={rel:"preload",as:"script",fetchPriority:"low",nonce:void 0};typeof We=="string"?it.href=et=We:(it.href=et=We.src,it.integrity=Gt=typeof We.integrity=="string"?We.integrity:void 0,it.crossOrigin=xt=typeof We=="string"||We.crossOrigin==null?void 0:We.crossOrigin==="use-credentials"?"use-credentials":""),We=i;var ot=et;We.scriptResources[ot]=null,We.moduleScriptResources[ot]=null,We=[],Cn(We,it),Ce.add(We),m.push('<script src="',J(et),'"'),typeof Gt=="string"&&m.push(' integrity="',J(Gt),'"'),typeof xt=="string"&&m.push(' crossorigin="',J(xt),'"'),Qi(m,i),m.push(' async=""><\/script>')}if(N!==void 0)for(M=0;M<N.length;M++)it=N[M],xt=et=void 0,Gt={rel:"modulepreload",fetchPriority:"low",nonce:void 0},typeof it=="string"?Gt.href=Je=it:(Gt.href=Je=it.src,Gt.integrity=xt=typeof it.integrity=="string"?it.integrity:void 0,Gt.crossOrigin=et=typeof it=="string"||it.crossOrigin==null?void 0:it.crossOrigin==="use-credentials"?"use-credentials":""),it=i,We=Je,it.scriptResources[We]=null,it.moduleScriptResources[We]=null,it=[],Cn(it,Gt),Ce.add(it),m.push('<script type="module" src="',J(Je),'"'),typeof xt=="string"&&m.push(' integrity="',J(xt),'"'),typeof et=="string"&&m.push(' crossorigin="',J(et),'"'),Qi(m,i),m.push(' async=""><\/script>');return{placeholderPrefix:w,segmentPrefix:ne,boundaryPrefix:g,startInlineScript:"<script",startInlineStyle:"<style",preamble:{htmlChunks:null,headChunks:null,bodyChunks:null},externalRuntimeScript:null,bootstrapChunks:m,importMapChunks:[],onHeaders:void 0,headers:null,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:P,fontPreloads:le,highImagePreloads:he,styles:ie,bootstrapScripts:Ce,scripts:Oe,bulkPreloads:at,preloads:je,nonce:{script:void 0,style:void 0},stylesToHoist:!1,generateStaticMarkup:c}}function Jn(i,c,g,m){return g.generateStaticMarkup?(i.push(J(c)),!1):(c===""?i=m:(m&&i.push("<!-- -->"),i.push(J(c)),i=!0),i)}function Ea(i,c,g,m){c.generateStaticMarkup||g&&m&&i.push("<!-- -->")}var iu=Function.prototype.bind,ou=Symbol.for("react.client.reference");function ci(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===ou?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case S:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case $:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case p:return"Portal";case R:return i.displayName||"Context";case O:return(i._context.displayName||"Context")+".Consumer";case k:var c=i.render;return i=i.displayName,i||(i=c.displayName||c.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case V:return c=i.displayName||null,c!==null?c:ci(i.type)||"Memo";case K:c=i._payload,i=i._init;try{return ci(i(c))}catch{}}return null}var Wt={},xr=null;function Kn(i,c){if(i!==c){i.context._currentValue2=i.parentValue,i=i.parent;var g=c.parent;if(i===null){if(g!==null)throw Error(f(401))}else{if(g===null)throw Error(f(401));Kn(i,g)}c.context._currentValue2=c.value}}function Ji(i){i.context._currentValue2=i.parentValue,i=i.parent,i!==null&&Ji(i)}function Ca(i){var c=i.parent;c!==null&&Ca(c),i.context._currentValue2=i.value}function Ki(i,c){if(i.context._currentValue2=i.parentValue,i=i.parent,i===null)throw Error(f(402));i.depth===c.depth?Kn(i,c):Ki(i,c)}function $a(i,c){var g=c.parent;if(g===null)throw Error(f(402));i.depth===g.depth?Kn(i,g):$a(i,g),c.context._currentValue2=c.value}function Ta(i){var c=xr;c!==i&&(c===null?Ca(i):i===null?Ji(c):c.depth===i.depth?Kn(c,i):c.depth>i.depth?Ki(c,i):$a(c,i),xr=i)}var cu={enqueueSetState:function(i,c){i=i._reactInternals,i.queue!==null&&i.queue.push(c)},enqueueReplaceState:function(i,c){i=i._reactInternals,i.replace=!0,i.queue=[c]},enqueueForceUpdate:function(){}},ui={id:1,overflow:""};function wr(i,c,g){var m=i.id;i=i.overflow;var w=32-ji(m)-1;m&=~(1<<w),g+=1;var M=32-ji(c)+w;if(30<M){var N=w-w%5;return M=(m&(1<<N)-1).toString(32),m>>=N,w-=N,{id:1<<32-ji(c)+w|g<<w|m,overflow:M+i}}return{id:1<<M|g<<w|m,overflow:i}}var ji=Math.clz32?Math.clz32:Is,ns=Math.log,uu=Math.LN2;function Is(i){return i>>>=0,i===0?32:31-(ns(i)/uu|0)|0}function jn(){}var Hn=Error(f(460));function Ra(i,c,g){switch(g=i[g],g===void 0?i.push(c):g!==c&&(c.then(jn,jn),c=g),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(jn,jn):(i=c,i.status="pending",i.then(function(m){if(c.status==="pending"){var w=c;w.status="fulfilled",w.value=m}},function(m){if(c.status==="pending"){var w=c;w.status="rejected",w.reason=m}})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}throw si=c,Hn}}var si=null;function fi(){if(si===null)throw Error(f(459));var i=si;return si=null,i}function di(i,c){return i===c&&(i!==0||1/i===1/c)||i!==i&&c!==c}var Sr=typeof Object.is=="function"?Object.is:di,na=null,qi=null,Qo=null,Er=null,zl=null,Et=null,Aa=!1,Gl=!1,Cr=0,er=0,hi=-1,Tr=0,_a=null,Ma=null,Tn=0;function qn(){if(na===null)throw Error(f(321));return na}function $i(){if(0<Tn)throw Error(f(312));return{memoizedState:null,queue:null,next:null}}function Rr(){return Et===null?zl===null?(Aa=!1,zl=Et=$i()):(Aa=!0,Et=zl):Et.next===null?(Aa=!1,Et=Et.next=$i()):(Aa=!0,Et=Et.next),Et}function vi(){var i=_a;return _a=null,i}function Ar(){Er=Qo=qi=na=null,Gl=!1,zl=null,Tn=0,Et=Ma=null}function Wo(i,c){return typeof c=="function"?c(i):c}function gi(i,c,g){if(na=qn(),Et=Rr(),Aa){var m=Et.queue;if(c=m.dispatch,Ma!==null&&(g=Ma.get(m),g!==void 0)){Ma.delete(m),m=Et.memoizedState;do m=i(m,g.action),g=g.next;while(g!==null);return Et.memoizedState=m,[m,c]}return[Et.memoizedState,c]}return i=i===Wo?typeof c=="function"?c():c:g!==void 0?g(c):c,Et.memoizedState=i,i=Et.queue={last:null,dispatch:null},i=i.dispatch=ls.bind(null,na,i),[Et.memoizedState,i]}function eo(i,c){if(na=qn(),Et=Rr(),c=c===void 0?null:c,Et!==null){var g=Et.memoizedState;if(g!==null&&c!==null){var m=g[1];e:if(m===null)m=!1;else{for(var w=0;w<m.length&&w<c.length;w++)if(!Sr(c[w],m[w])){m=!1;break e}m=!0}if(m)return g[0]}}return i=i(),Et.memoizedState=[i,c],i}function ls(i,c,g){if(25<=Tn)throw Error(f(301));if(i===na)if(Gl=!0,i={action:g,next:null},Ma===null&&(Ma=new Map),g=Ma.get(c),g===void 0)Ma.set(c,i);else{for(c=g;c.next!==null;)c=c.next;c.next=i}}function Zs(){throw Error(f(440))}function Vs(){throw Error(f(394))}function Qs(){throw Error(f(479))}function to(i,c,g){qn();var m=er++,w=Qo;if(typeof i.$$FORM_ACTION=="function"){var M=null,N=Er;w=w.formState;var ne=i.$$IS_SIGNATURE_EQUAL;if(w!==null&&typeof ne=="function"){var P=w[1];ne.call(i,w[2],w[3])&&(M=g!==void 0?"p"+g:"k"+be(JSON.stringify([N,null,m]),0),P===M&&(hi=m,c=w[0]))}var le=i.bind(null,c);return i=function(ie){le(ie)},typeof le.$$FORM_ACTION=="function"&&(i.$$FORM_ACTION=function(ie){ie=le.$$FORM_ACTION(ie),g!==void 0&&(g+="",ie.action=g);var Ce=ie.data;return Ce&&(M===null&&(M=g!==void 0?"p"+g:"k"+be(JSON.stringify([N,null,m]),0)),Ce.append("$ACTION_KEY",M)),ie}),[c,i,!1]}var he=i.bind(null,c);return[c,function(ie){he(ie)},!1]}function as(i){var c=Tr;return Tr+=1,_a===null&&(_a=[]),Ra(_a,i,c)}function Ws(){throw Error(f(393))}var rs={readContext:function(i){return i._currentValue2},use:function(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return as(i);if(i.$$typeof===R)return i._currentValue2}throw Error(f(438,String(i)))},useContext:function(i){return qn(),i._currentValue2},useMemo:eo,useReducer:gi,useRef:function(i){na=qn(),Et=Rr();var c=Et.memoizedState;return c===null?(i={current:i},Et.memoizedState=i):c},useState:function(i){return gi(Wo,i)},useInsertionEffect:jn,useLayoutEffect:jn,useCallback:function(i,c){return eo(function(){return i},c)},useImperativeHandle:jn,useEffect:jn,useDebugValue:jn,useDeferredValue:function(i,c){return qn(),c!==void 0?c:i},useTransition:function(){return qn(),[!1,Vs]},useId:function(){var i=qi.treeContext,c=i.overflow;i=i.id,i=(i&~(1<<32-ji(i)-1)).toString(32)+c;var g=Jo;if(g===null)throw Error(f(404));return c=Cr++,i="_"+g.idPrefix+"R_"+i,0<c&&(i+="H"+c.toString(32)),i+"_"},useSyncExternalStore:function(i,c,g){if(g===void 0)throw Error(f(407));return g()},useOptimistic:function(i){return qn(),[i,Qs]},useActionState:to,useFormState:to,useHostTransitionStatus:function(){return qn(),Re},useMemoCache:function(i){for(var c=Array(i),g=0;g<i;g++)c[g]=me;return c},useCacheRefresh:function(){return Ws},useEffectEvent:function(){return Zs}},Jo=null,Js={getCacheForType:function(){throw Error(f(248))},cacheSignal:function(){throw Error(f(248))}},Ko,is;function bi(i){if(Ko===void 0)try{throw Error()}catch(g){var c=g.stack.trim().match(/\n( *(at )?)/);Ko=c&&c[1]||"",is=-1<g.stack.indexOf(`
    at`)?" (<anonymous>)":-1<g.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ko+i+is}var su=!1;function jo(i,c){if(!i||su)return"";su=!0;var g=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var m={DetermineComponentFrameRoot:function(){try{if(c){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Oe){var Ce=Oe}Reflect.construct(i,[],ie)}else{try{ie.call()}catch(Oe){Ce=Oe}i.call(ie.prototype)}}else{try{throw Error()}catch(Oe){Ce=Oe}(ie=i())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Oe){if(Oe&&Ce&&typeof Oe.stack=="string")return[Oe.stack,Ce.stack]}return[null,null]}};m.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var w=Object.getOwnPropertyDescriptor(m.DetermineComponentFrameRoot,"name");w&&w.configurable&&Object.defineProperty(m.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var M=m.DetermineComponentFrameRoot(),N=M[0],ne=M[1];if(N&&ne){var P=N.split(`
`),le=ne.split(`
`);for(w=m=0;m<P.length&&!P[m].includes("DetermineComponentFrameRoot");)m++;for(;w<le.length&&!le[w].includes("DetermineComponentFrameRoot");)w++;if(m===P.length||w===le.length)for(m=P.length-1,w=le.length-1;1<=m&&0<=w&&P[m]!==le[w];)w--;for(;1<=m&&0<=w;m--,w--)if(P[m]!==le[w]){if(m!==1||w!==1)do if(m--,w--,0>w||P[m]!==le[w]){var he=`
`+P[m].replace(" at new "," at ");return i.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",i.displayName)),he}while(1<=m&&0<=w);break}}}finally{su=!1,Error.prepareStackTrace=g}return(g=i?i.displayName||i.name:"")?bi(g):""}function qo(i){if(typeof i=="string")return bi(i);if(typeof i=="function")return i.prototype&&i.prototype.isReactComponent?jo(i,!0):jo(i,!1);if(typeof i=="object"&&i!==null){switch(i.$$typeof){case k:return jo(i.render,!1);case V:return jo(i.type,!1);case K:var c=i,g=c._payload;c=c._init;try{i=c(g)}catch{return bi("Lazy")}return qo(i)}if(typeof i.name=="string"){e:{g=i.name,c=i.env;var m=i.debugLocation;if(m!=null&&(i=Error.prepareStackTrace,Error.prepareStackTrace=void 0,m=m.stack,Error.prepareStackTrace=i,m.startsWith(`Error: react-stack-top-frame
`)&&(m=m.slice(29)),i=m.indexOf(`
`),i!==-1&&(m=m.slice(i+1)),i=m.indexOf("react_stack_bottom_frame"),i!==-1&&(i=m.lastIndexOf(`
`,i)),i=i!==-1?m=m.slice(0,i):"",m=i.lastIndexOf(`
`),i=m===-1?i:i.slice(m+1),i.indexOf(g)!==-1)){g=`
`+i;break e}g=bi(g+(c?" ["+c+"]":""))}return g}}switch(i){case U:return bi("SuspenseList");case L:return bi("Suspense")}return""}function mi(i,c){return(500<c.byteSize||!1)&&c.contentPreamble===null}function Ks(i){if(typeof i=="object"&&i!==null&&typeof i.environmentName=="string"){var c=i.environmentName;i=[i].slice(0),typeof i[0]=="string"?i.splice(0,1,"[%s] "+i[0]," "+c+" "):i.splice(0,0,"[%s]"," "+c+" "),i.unshift(console),c=iu.apply(console.error,i),c()}else console.error(i);return null}function js(i,c,g,m,w,M,N,ne,P,le,he){var ie=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=i,this.renderState=c,this.rootFormatContext=g,this.progressiveChunkSize=m===void 0?12800:m,this.status=10,this.fatalError=null,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=ie,this.pingedTasks=[],this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.trackedPostpones=null,this.onError=w===void 0?Ks:w,this.onPostpone=le===void 0?jn:le,this.onAllReady=M===void 0?jn:M,this.onShellReady=N===void 0?jn:N,this.onShellError=ne===void 0?jn:ne,this.onFatalError=P===void 0?jn:P,this.formState=he===void 0?null:he}function os(i,c,g,m,w,M,N,ne,P,le,he,ie){return c=new js(c,g,m,w,M,N,ne,P,le,he,ie),g=_r(c,0,null,m,!1,!1),g.parentFlushed=!0,i=$o(c,null,i,-1,null,g,null,null,c.abortableTasks,null,m,null,ui,null,null),tr(i),c.pingedTasks.push(i),c}var Rn=null;function yi(i,c){i.pingedTasks.push(c),i.pingedTasks.length===1&&(i.flushScheduled=i.destination!==null,us(i))}function fu(i,c,g,m,w){return g={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:c,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null,contentState:St(),fallbackState:St(),contentPreamble:m,fallbackPreamble:w,trackedContentKeyPath:null,trackedFallbackNode:null},c!==null&&(c.pendingTasks++,m=c.boundaries,m!==null&&(i.allPendingTasks++,g.pendingTasks++,m.push(g)),i=c.inheritedHoistables,i!==null&&Sa(g.contentState,i)),g}function $o(i,c,g,m,w,M,N,ne,P,le,he,ie,Ce,Oe,at){i.allPendingTasks++,w===null?i.pendingRootTasks++:w.pendingTasks++,Oe!==null&&Oe.pendingTasks++;var je={replay:null,node:g,childIndex:m,ping:function(){return yi(i,je)},blockedBoundary:w,blockedSegment:M,blockedPreamble:N,hoistableState:ne,abortSet:P,keyPath:le,formatContext:he,context:ie,treeContext:Ce,row:Oe,componentStack:at,thenableState:c};return P.add(je),je}function cs(i,c,g,m,w,M,N,ne,P,le,he,ie,Ce,Oe){i.allPendingTasks++,M===null?i.pendingRootTasks++:M.pendingTasks++,Ce!==null&&Ce.pendingTasks++,g.pendingTasks++;var at={replay:g,node:m,childIndex:w,ping:function(){return yi(i,at)},blockedBoundary:M,blockedSegment:null,blockedPreamble:null,hoistableState:N,abortSet:ne,keyPath:P,formatContext:le,context:he,treeContext:ie,row:Ce,componentStack:Oe,thenableState:c};return ne.add(at),at}function _r(i,c,g,m,w,M){return{status:0,parentFlushed:!1,id:-1,index:c,chunks:[],children:[],preambleChildren:[],parentFormatContext:m,boundary:g,lastPushedText:w,textEmbedded:M}}function tr(i){var c=i.node;if(typeof c=="object"&&c!==null)switch(c.$$typeof){case v:i.componentStack={parent:i.componentStack,type:c.type}}}function no(i){return i===null?null:{parent:i.parent,type:"Suspense Fallback"}}function nr(i){var c={};return i&&Object.defineProperty(c,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var g="",m=i;do g+=qo(m.type),m=m.parent;while(m);var w=g}catch(M){w=`
Error generating stack: `+M.message+`
`+M.stack}return Object.defineProperty(c,"componentStack",{value:w}),w}}),c}function pn(i,c,g){if(i=i.onError,c=i(c,g),c==null||typeof c=="string")return c}function la(i,c){var g=i.onShellError,m=i.onFatalError;g(c),m(c),i.destination!==null?(i.status=14,i.destination.destroy(c)):(i.status=13,i.fatalError=c)}function Dt(i,c){Xl(i,c.next,c.hoistables)}function Xl(i,c,g){for(;c!==null;){g!==null&&(Sa(c.hoistables,g),c.inheritedHoistables=g);var m=c.boundaries;if(m!==null){c.boundaries=null;for(var w=0;w<m.length;w++){var M=m[w];g!==null&&Sa(M.contentState,g),ar(i,M,null,null)}}if(c.pendingTasks--,0<c.pendingTasks)break;g=c.hoistables,c=c.next}}function ec(i,c){var g=c.boundaries;if(g!==null&&c.pendingTasks===g.length){for(var m=!0,w=0;w<g.length;w++){var M=g[w];if(M.pendingTasks!==1||M.parentFlushed||mi(i,M)){m=!1;break}}m&&Xl(i,c,c.hoistables)}}function pi(i){var c={pendingTasks:1,boundaries:null,hoistables:St(),inheritedHoistables:null,together:!1,next:null};return i!==null&&0<i.pendingTasks&&(c.pendingTasks++,c.boundaries=[],i.next=c),c}function du(i,c,g,m,w){var M=c.keyPath,N=c.treeContext,ne=c.row;c.keyPath=g,g=m.length;var P=null;if(c.replay!==null){var le=c.replay.slots;if(le!==null&&typeof le=="object")for(var he=0;he<g;he++){var ie=w!=="backwards"&&w!=="unstable_legacy-backwards"?he:g-1-he,Ce=m[ie];c.row=P=pi(P),c.treeContext=wr(N,g,ie);var Oe=le[ie];typeof Oe=="number"?(lc(i,c,Oe,Ce,ie),delete le[ie]):hn(i,c,Ce,ie),--P.pendingTasks===0&&Dt(i,P)}else for(le=0;le<g;le++)he=w!=="backwards"&&w!=="unstable_legacy-backwards"?le:g-1-le,ie=m[he],c.row=P=pi(P),c.treeContext=wr(N,g,he),hn(i,c,ie,he),--P.pendingTasks===0&&Dt(i,P)}else if(w!=="backwards"&&w!=="unstable_legacy-backwards")for(w=0;w<g;w++)le=m[w],c.row=P=pi(P),c.treeContext=wr(N,g,w),hn(i,c,le,w),--P.pendingTasks===0&&Dt(i,P);else{for(w=c.blockedSegment,le=w.children.length,he=w.chunks.length,ie=g-1;0<=ie;ie--){Ce=m[ie],c.row=P=pi(P),c.treeContext=wr(N,g,ie),Oe=_r(i,he,null,c.formatContext,ie===0?w.lastPushedText:!0,!0),w.children.splice(le,0,Oe),c.blockedSegment=Oe;try{hn(i,c,Ce,ie),Ea(Oe.chunks,i.renderState,Oe.lastPushedText,Oe.textEmbedded),Oe.status=1,--P.pendingTasks===0&&Dt(i,P)}catch(at){throw Oe.status=i.status===12?3:4,at}}c.blockedSegment=w,w.lastPushedText=!1}ne!==null&&P!==null&&0<P.pendingTasks&&(ne.pendingTasks++,P.next=ne),c.treeContext=N,c.row=ne,c.keyPath=M}function tc(i,c,g,m,w,M){var N=c.thenableState;for(c.thenableState=null,na={},qi=c,Qo=i,Er=g,er=Cr=0,hi=-1,Tr=0,_a=N,i=m(w,M);Gl;)Gl=!1,er=Cr=0,hi=-1,Tr=0,Tn+=1,Et=null,i=m(w,M);return Ar(),i}function Mr(i,c,g,m,w,M,N){var ne=!1;if(M!==0&&i.formState!==null){var P=c.blockedSegment;if(P!==null){ne=!0,P=P.chunks;for(var le=0;le<M;le++)le===N?P.push("<!--F!-->"):P.push("<!--F-->")}}M=c.keyPath,c.keyPath=g,w?(g=c.treeContext,c.treeContext=wr(g,1,0),hn(i,c,m,-1),c.treeContext=g):ne?hn(i,c,m,-1):Dl(i,c,m,-1),c.keyPath=M}function nc(i,c,g,m,w,M){if(typeof m=="function")if(m.prototype&&m.prototype.isReactComponent){var N=w;if("ref"in w){N={};for(var ne in w)ne!=="ref"&&(N[ne]=w[ne])}var P=m.defaultProps;if(P){N===w&&(N=ce({},N,w));for(var le in P)N[le]===void 0&&(N[le]=P[le])}w=N,N=Wt,P=m.contextType,typeof P=="object"&&P!==null&&(N=P._currentValue2),N=new m(w,N);var he=N.state!==void 0?N.state:null;if(N.updater=cu,N.props=w,N.state=he,P={queue:[],replace:!1},N._reactInternals=P,M=m.contextType,N.context=typeof M=="object"&&M!==null?M._currentValue2:Wt,M=m.getDerivedStateFromProps,typeof M=="function"&&(M=M(w,he),he=M==null?he:ce({},he,M),N.state=he),typeof m.getDerivedStateFromProps!="function"&&typeof N.getSnapshotBeforeUpdate!="function"&&(typeof N.UNSAFE_componentWillMount=="function"||typeof N.componentWillMount=="function"))if(m=N.state,typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount(),m!==N.state&&cu.enqueueReplaceState(N,N.state,null),P.queue!==null&&0<P.queue.length)if(m=P.queue,M=P.replace,P.queue=null,P.replace=!1,M&&m.length===1)N.state=m[0];else{for(P=M?m[0]:N.state,he=!0,M=M?1:0;M<m.length;M++)le=m[M],le=typeof le=="function"?le.call(N,P,w,void 0):le,le!=null&&(he?(he=!1,P=ce({},P,le)):ce(P,le));N.state=P}else P.queue=null;if(m=N.render(),i.status===12)throw null;w=c.keyPath,c.keyPath=g,Dl(i,c,m,-1),c.keyPath=w}else{if(m=tc(i,c,g,m,w,void 0),i.status===12)throw null;Mr(i,c,g,m,Cr!==0,er,hi)}else if(typeof m=="string")if(N=c.blockedSegment,N===null)N=w.children,P=c.formatContext,he=c.keyPath,c.formatContext=Fl(P,m,w),c.keyPath=g,hn(i,c,N,-1),c.formatContext=P,c.keyPath=he;else{if(he=rn(N.chunks,m,w,i.resumableState,i.renderState,c.blockedPreamble,c.hoistableState,c.formatContext,N.lastPushedText),N.lastPushedText=!1,P=c.formatContext,M=c.keyPath,c.keyPath=g,(c.formatContext=Fl(P,m,w)).insertionMode===3){g=_r(i,0,null,c.formatContext,!1,!1),N.preambleChildren.push(g),c.blockedSegment=g;try{g.status=6,hn(i,c,he,-1),Ea(g.chunks,i.renderState,g.lastPushedText,g.textEmbedded),g.status=1}finally{c.blockedSegment=N}}else hn(i,c,he,-1);c.formatContext=P,c.keyPath=M;e:{switch(c=N.chunks,i=i.resumableState,m){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=P.insertionMode){i.hasBody=!0;break e}break;case"html":if(P.insertionMode===0){i.hasHtml=!0;break e}break;case"head":if(1>=P.insertionMode)break e}c.push(Yl(m))}N.lastPushedText=!1}else{switch(m){case oe:case E:case T:case S:m=c.keyPath,c.keyPath=g,Dl(i,c,w.children,-1),c.keyPath=m;return;case $:m=c.blockedSegment,m===null?w.mode!=="hidden"&&(m=c.keyPath,c.keyPath=g,hn(i,c,w.children,-1),c.keyPath=m):w.mode!=="hidden"&&(i.renderState.generateStaticMarkup||m.chunks.push("<!--&-->"),m.lastPushedText=!1,N=c.keyPath,c.keyPath=g,hn(i,c,w.children,-1),c.keyPath=N,i.renderState.generateStaticMarkup||m.chunks.push("<!--/&-->"),m.lastPushedText=!1);return;case U:e:{if(m=w.children,w=w.revealOrder,w==="forwards"||w==="backwards"||w==="unstable_legacy-backwards"){if(Ee(m)){du(i,c,g,m,w);break e}if((N=Te(m))&&(N=N.call(m))){if(P=N.next(),!P.done){do P=N.next();while(!P.done);du(i,c,g,m,w)}break e}}w==="together"?(w=c.keyPath,N=c.row,P=c.row=pi(null),P.boundaries=[],P.together=!0,c.keyPath=g,Dl(i,c,m,-1),--P.pendingTasks===0&&Dt(i,P),c.keyPath=w,c.row=N,N!==null&&0<P.pendingTasks&&(N.pendingTasks++,P.next=N)):(w=c.keyPath,c.keyPath=g,Dl(i,c,m,-1),c.keyPath=w)}return;case de:case Z:throw Error(f(343));case L:e:if(c.replay!==null){m=c.keyPath,N=c.formatContext,P=c.row,c.keyPath=g,c.formatContext=$r(i.resumableState,N),c.row=null,g=w.children;try{hn(i,c,g,-1)}finally{c.keyPath=m,c.formatContext=N,c.row=P}}else{m=c.keyPath,M=c.formatContext;var ie=c.row,Ce=c.blockedBoundary;le=c.blockedPreamble;var Oe=c.hoistableState;ne=c.blockedSegment;var at=w.fallback;w=w.children;var je=new Set,Je=fu(i,c.row,je,null,null);i.trackedPostpones!==null&&(Je.trackedContentKeyPath=g);var We=_r(i,ne.chunks.length,Je,c.formatContext,!1,!1);ne.children.push(We),ne.lastPushedText=!1;var et=_r(i,0,null,c.formatContext,!1,!1);if(et.parentFlushed=!0,i.trackedPostpones!==null){N=c.componentStack,P=[g[0],"Suspense Fallback",g[2]],he=[P[1],P[2],[],null],i.trackedPostpones.workingMap.set(P,he),Je.trackedFallbackNode=he,c.blockedSegment=We,c.blockedPreamble=Je.fallbackPreamble,c.keyPath=P,c.formatContext=ol(i.resumableState,M),c.componentStack=no(N),We.status=6;try{hn(i,c,at,-1),Ea(We.chunks,i.renderState,We.lastPushedText,We.textEmbedded),We.status=1}catch(xt){throw We.status=i.status===12?3:4,xt}finally{c.blockedSegment=ne,c.blockedPreamble=le,c.keyPath=m,c.formatContext=M}c=$o(i,null,w,-1,Je,et,Je.contentPreamble,Je.contentState,c.abortSet,g,$r(i.resumableState,c.formatContext),c.context,c.treeContext,null,N),tr(c),i.pingedTasks.push(c)}else{c.blockedBoundary=Je,c.blockedPreamble=Je.contentPreamble,c.hoistableState=Je.contentState,c.blockedSegment=et,c.keyPath=g,c.formatContext=$r(i.resumableState,M),c.row=null,et.status=6;try{if(hn(i,c,w,-1),Ea(et.chunks,i.renderState,et.lastPushedText,et.textEmbedded),et.status=1,ro(Je,et),Je.pendingTasks===0&&Je.status===0){if(Je.status=1,!mi(i,Je)){ie!==null&&--ie.pendingTasks===0&&Dt(i,ie),i.pendingRootTasks===0&&c.blockedPreamble&&Il(i);break e}}else ie!==null&&ie.together&&ec(i,ie)}catch(xt){Je.status=4,i.status===12?(et.status=3,N=i.fatalError):(et.status=4,N=xt),P=nr(c.componentStack),he=pn(i,N,P),Je.errorDigest=he,rc(i,Je)}finally{c.blockedBoundary=Ce,c.blockedPreamble=le,c.hoistableState=Oe,c.blockedSegment=ne,c.keyPath=m,c.formatContext=M,c.row=ie}c=$o(i,null,at,-1,Ce,We,Je.fallbackPreamble,Je.fallbackState,je,[g[0],"Suspense Fallback",g[2]],ol(i.resumableState,c.formatContext),c.context,c.treeContext,c.row,no(c.componentStack)),tr(c),i.pingedTasks.push(c)}}return}if(typeof m=="object"&&m!==null)switch(m.$$typeof){case k:if("ref"in w)for(at in N={},w)at!=="ref"&&(N[at]=w[at]);else N=w;m=tc(i,c,g,m.render,N,M),Mr(i,c,g,m,Cr!==0,er,hi);return;case V:nc(i,c,g,m.type,w,M);return;case R:if(P=w.children,N=c.keyPath,w=w.value,he=m._currentValue2,m._currentValue2=w,M=xr,xr=m={parent:M,depth:M===null?0:M.depth+1,context:m,parentValue:he,value:w},c.context=m,c.keyPath=g,Dl(i,c,P,-1),i=xr,i===null)throw Error(f(403));i.context._currentValue2=i.parentValue,i=xr=i.parent,c.context=i,c.keyPath=N;return;case O:w=w.children,m=w(m._context._currentValue2),w=c.keyPath,c.keyPath=g,Dl(i,c,m,-1),c.keyPath=w;return;case K:if(N=m._init,m=N(m._payload),i.status===12)throw null;nc(i,c,g,m,w,M);return}throw Error(f(130,m==null?m:typeof m,""))}}function lc(i,c,g,m,w){var M=c.replay,N=c.blockedBoundary,ne=_r(i,0,null,c.formatContext,!1,!1);ne.id=g,ne.parentFlushed=!0;try{c.replay=null,c.blockedSegment=ne,hn(i,c,m,w),ne.status=1,N===null?i.completedRootSegment=ne:(ro(N,ne),N.parentFlushed&&i.partialBoundaries.push(N))}finally{c.replay=M,c.blockedSegment=null}}function Dl(i,c,g,m){c.replay!==null&&typeof c.replay.slots=="number"?lc(i,c,c.replay.slots,g,m):(c.node=g,c.childIndex=m,g=c.componentStack,tr(c),ac(i,c),c.componentStack=g)}function ac(i,c){var g=c.node,m=c.childIndex;if(g!==null){if(typeof g=="object"){switch(g.$$typeof){case v:var w=g.type,M=g.key,N=g.props;g=N.ref;var ne=g!==void 0?g:null,P=ci(w),le=M??(m===-1?0:m);if(M=[c.keyPath,P,le],c.replay!==null)e:{var he=c.replay;for(m=he.nodes,g=0;g<m.length;g++){var ie=m[g];if(le===ie[1]){if(ie.length===4){if(P!==null&&P!==ie[0])throw Error(f(490,ie[0],P));var Ce=ie[2];P=ie[3],le=c.node,c.replay={nodes:Ce,slots:P,pendingTasks:1};try{if(nc(i,c,M,w,N,ne),c.replay.pendingTasks===1&&0<c.replay.nodes.length)throw Error(f(488));c.replay.pendingTasks--}catch(ot){if(typeof ot=="object"&&ot!==null&&(ot===Hn||typeof ot.then=="function"))throw c.node===le?c.replay=he:m.splice(g,1),ot;c.replay.pendingTasks--,N=nr(c.componentStack),M=i,i=c.blockedBoundary,w=ot,N=pn(M,w,N),za(M,i,Ce,P,w,N)}c.replay=he}else{if(w!==L)throw Error(f(490,"Suspense",ci(w)||"Unknown"));t:{he=void 0,w=ie[5],ne=ie[2],P=ie[3],le=ie[4]===null?[]:ie[4][2],ie=ie[4]===null?null:ie[4][3];var Oe=c.keyPath,at=c.formatContext,je=c.row,Je=c.replay,We=c.blockedBoundary,et=c.hoistableState,xt=N.children,Gt=N.fallback,it=new Set;N=fu(i,c.row,it,null,null),N.parentFlushed=!0,N.rootSegmentID=w,c.blockedBoundary=N,c.hoistableState=N.contentState,c.keyPath=M,c.formatContext=$r(i.resumableState,at),c.row=null,c.replay={nodes:ne,slots:P,pendingTasks:1};try{if(hn(i,c,xt,-1),c.replay.pendingTasks===1&&0<c.replay.nodes.length)throw Error(f(488));if(c.replay.pendingTasks--,N.pendingTasks===0&&N.status===0){N.status=1,i.completedBoundaries.push(N);break t}}catch(ot){N.status=4,Ce=nr(c.componentStack),he=pn(i,ot,Ce),N.errorDigest=he,c.replay.pendingTasks--,i.clientRenderedBoundaries.push(N)}finally{c.blockedBoundary=We,c.hoistableState=et,c.replay=Je,c.keyPath=Oe,c.formatContext=at,c.row=je}Ce=cs(i,null,{nodes:le,slots:ie,pendingTasks:0},Gt,-1,We,N.fallbackState,it,[M[0],"Suspense Fallback",M[2]],ol(i.resumableState,c.formatContext),c.context,c.treeContext,c.row,no(c.componentStack)),tr(Ce),i.pingedTasks.push(Ce)}}m.splice(g,1);break e}}}else nc(i,c,M,w,N,ne);return;case p:throw Error(f(257));case K:if(Ce=g._init,g=Ce(g._payload),i.status===12)throw null;Dl(i,c,g,m);return}if(Ee(g)){lo(i,c,g,m);return}if((Ce=Te(g))&&(Ce=Ce.call(g))){if(g=Ce.next(),!g.done){N=[];do N.push(g.value),g=Ce.next();while(!g.done);lo(i,c,N,m)}return}if(typeof g.then=="function")return c.thenableState=null,Dl(i,c,as(g),m);if(g.$$typeof===R)return Dl(i,c,g._currentValue2,m);throw m=Object.prototype.toString.call(g),Error(f(31,m==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":m))}typeof g=="string"?(m=c.blockedSegment,m!==null&&(m.lastPushedText=Jn(m.chunks,g,i.renderState,m.lastPushedText))):(typeof g=="number"||typeof g=="bigint")&&(m=c.blockedSegment,m!==null&&(m.lastPushedText=Jn(m.chunks,""+g,i.renderState,m.lastPushedText)))}}function lo(i,c,g,m){var w=c.keyPath;if(m!==-1&&(c.keyPath=[c.keyPath,"Fragment",m],c.replay!==null)){for(var M=c.replay,N=M.nodes,ne=0;ne<N.length;ne++){var P=N[ne];if(P[1]===m){m=P[2],P=P[3],c.replay={nodes:m,slots:P,pendingTasks:1};try{if(lo(i,c,g,-1),c.replay.pendingTasks===1&&0<c.replay.nodes.length)throw Error(f(488));c.replay.pendingTasks--}catch(ie){if(typeof ie=="object"&&ie!==null&&(ie===Hn||typeof ie.then=="function"))throw ie;c.replay.pendingTasks--,g=nr(c.componentStack);var le=c.blockedBoundary,he=ie;g=pn(i,he,g),za(i,le,m,P,he,g)}c.replay=M,N.splice(ne,1);break}}c.keyPath=w;return}if(M=c.treeContext,N=g.length,c.replay!==null&&(ne=c.replay.slots,ne!==null&&typeof ne=="object")){for(m=0;m<N;m++)P=g[m],c.treeContext=wr(M,N,m),le=ne[m],typeof le=="number"?(lc(i,c,le,P,m),delete ne[m]):hn(i,c,P,m);c.treeContext=M,c.keyPath=w;return}for(ne=0;ne<N;ne++)m=g[ne],c.treeContext=wr(M,N,ne),hn(i,c,m,ne);c.treeContext=M,c.keyPath=w}function Oa(i,c,g){if(g.status=5,g.rootSegmentID=i.nextSegmentId++,i=g.trackedContentKeyPath,i===null)throw Error(f(486));var m=g.trackedFallbackNode,w=[],M=c.workingMap.get(i);return M===void 0?(g=[i[1],i[2],w,null,m,g.rootSegmentID],c.workingMap.set(i,g),Un(g,i[0],c),g):(M[4]=m,M[5]=g.rootSegmentID,M)}function lr(i,c,g,m){m.status=5;var w=g.keyPath,M=g.blockedBoundary;if(M===null)m.id=i.nextSegmentId++,c.rootSlots=m.id,i.completedRootSegment!==null&&(i.completedRootSegment.status=5);else{if(M!==null&&M.status===0){var N=Oa(i,c,M);if(M.trackedContentKeyPath===w&&g.childIndex===-1){m.id===-1&&(m.id=m.parentFlushed?M.rootSegmentID:i.nextSegmentId++),N[3]=m.id;return}}if(m.id===-1&&(m.id=m.parentFlushed&&M!==null?M.rootSegmentID:i.nextSegmentId++),g.childIndex===-1)w===null?c.rootSlots=m.id:(g=c.workingMap.get(w),g===void 0?(g=[w[1],w[2],[],m.id],Un(g,w[0],c)):g[3]=m.id);else{if(w===null){if(i=c.rootSlots,i===null)i=c.rootSlots={};else if(typeof i=="number")throw Error(f(491))}else if(M=c.workingMap,N=M.get(w),N===void 0)i={},N=[w[1],w[2],[],i],M.set(w,N),Un(N,w[0],c);else if(i=N[3],i===null)i=N[3]={};else if(typeof i=="number")throw Error(f(491));i[g.childIndex]=m.id}}}function rc(i,c){i=i.trackedPostpones,i!==null&&(c=c.trackedContentKeyPath,c!==null&&(c=i.workingMap.get(c),c!==void 0&&(c.length=4,c[2]=[],c[3]=null)))}function Or(i,c,g){return cs(i,g,c.replay,c.node,c.childIndex,c.blockedBoundary,c.hoistableState,c.abortSet,c.keyPath,c.formatContext,c.context,c.treeContext,c.row,c.componentStack)}function ao(i,c,g){var m=c.blockedSegment,w=_r(i,m.chunks.length,null,c.formatContext,m.lastPushedText,!0);return m.children.push(w),m.lastPushedText=!1,$o(i,g,c.node,c.childIndex,c.blockedBoundary,w,c.blockedPreamble,c.hoistableState,c.abortSet,c.keyPath,c.formatContext,c.context,c.treeContext,c.row,c.componentStack)}function hn(i,c,g,m){var w=c.formatContext,M=c.context,N=c.keyPath,ne=c.treeContext,P=c.componentStack,le=c.blockedSegment;if(le===null){le=c.replay;try{return Dl(i,c,g,m)}catch(Ce){if(Ar(),g=Ce===Hn?fi():Ce,i.status!==12&&typeof g=="object"&&g!==null){if(typeof g.then=="function"){m=Ce===Hn?vi():null,i=Or(i,c,m).ping,g.then(i,i),c.formatContext=w,c.context=M,c.keyPath=N,c.treeContext=ne,c.componentStack=P,c.replay=le,Ta(M);return}if(g.message==="Maximum call stack size exceeded"){g=Ce===Hn?vi():null,g=Or(i,c,g),i.pingedTasks.push(g),c.formatContext=w,c.context=M,c.keyPath=N,c.treeContext=ne,c.componentStack=P,c.replay=le,Ta(M);return}}}}else{var he=le.children.length,ie=le.chunks.length;try{return Dl(i,c,g,m)}catch(Ce){if(Ar(),le.children.length=he,le.chunks.length=ie,g=Ce===Hn?fi():Ce,i.status!==12&&typeof g=="object"&&g!==null){if(typeof g.then=="function"){le=g,g=Ce===Hn?vi():null,i=ao(i,c,g).ping,le.then(i,i),c.formatContext=w,c.context=M,c.keyPath=N,c.treeContext=ne,c.componentStack=P,Ta(M);return}if(g.message==="Maximum call stack size exceeded"){le=Ce===Hn?vi():null,le=ao(i,c,le),i.pingedTasks.push(le),c.formatContext=w,c.context=M,c.keyPath=N,c.treeContext=ne,c.componentStack=P,Ta(M);return}}}}throw c.formatContext=w,c.context=M,c.keyPath=N,c.treeContext=ne,Ta(M),g}function hu(i){var c=i.blockedBoundary,g=i.blockedSegment;g!==null&&(g.status=3,ar(this,c,i.row,g))}function za(i,c,g,m,w,M){for(var N=0;N<g.length;N++){var ne=g[N];if(ne.length===4)za(i,c,ne[2],ne[3],w,M);else{ne=ne[5];var P=i,le=M,he=fu(P,null,new Set,null,null);he.parentFlushed=!0,he.rootSegmentID=ne,he.status=4,he.errorDigest=le,he.parentFlushed&&P.clientRenderedBoundaries.push(he)}}if(g.length=0,m!==null){if(c===null)throw Error(f(487));if(c.status!==4&&(c.status=4,c.errorDigest=M,c.parentFlushed&&i.clientRenderedBoundaries.push(c)),typeof m=="object")for(var ie in m)delete m[ie]}}function ic(i,c,g){var m=i.blockedBoundary,w=i.blockedSegment;if(w!==null){if(w.status===6)return;w.status=3}var M=nr(i.componentStack);if(m===null){if(c.status!==13&&c.status!==14){if(m=i.replay,m===null){c.trackedPostpones!==null&&w!==null?(m=c.trackedPostpones,pn(c,g,M),lr(c,m,i,w),ar(c,null,i.row,w)):(pn(c,g,M),la(c,g));return}m.pendingTasks--,m.pendingTasks===0&&0<m.nodes.length&&(w=pn(c,g,M),za(c,null,m.nodes,m.slots,g,w)),c.pendingRootTasks--,c.pendingRootTasks===0&&cc(c)}}else{var N=c.trackedPostpones;if(m.status!==4){if(N!==null&&w!==null)return pn(c,g,M),lr(c,N,i,w),m.fallbackAbortableTasks.forEach(function(ne){return ic(ne,c,g)}),m.fallbackAbortableTasks.clear(),ar(c,m,i.row,w);m.status=4,w=pn(c,g,M),m.status=4,m.errorDigest=w,rc(c,m),m.parentFlushed&&c.clientRenderedBoundaries.push(m)}m.pendingTasks--,w=m.row,w!==null&&--w.pendingTasks===0&&Dt(c,w),m.fallbackAbortableTasks.forEach(function(ne){return ic(ne,c,g)}),m.fallbackAbortableTasks.clear()}i=i.row,i!==null&&--i.pendingTasks===0&&Dt(c,i),c.allPendingTasks--,c.allPendingTasks===0&&uc(c)}function oc(i,c){try{var g=i.renderState,m=g.onHeaders;if(m){var w=g.headers;if(w){g.headers=null;var M=w.preconnects;if(w.fontPreloads&&(M&&(M+=", "),M+=w.fontPreloads),w.highImagePreloads&&(M&&(M+=", "),M+=w.highImagePreloads),!c){var N=g.styles.values(),ne=N.next();e:for(;0<w.remainingCapacity&&!ne.done;ne=N.next())for(var P=ne.value.sheets.values(),le=P.next();0<w.remainingCapacity&&!le.done;le=P.next()){var he=le.value,ie=he.props,Ce=ie.href,Oe=he.props,at=Ut(Oe.href,"style",{crossOrigin:Oe.crossOrigin,integrity:Oe.integrity,nonce:Oe.nonce,type:Oe.type,fetchPriority:Oe.fetchPriority,referrerPolicy:Oe.referrerPolicy,media:Oe.media});if(0<=(w.remainingCapacity-=at.length+2))g.resets.style[Ce]=_e,M&&(M+=", "),M+=at,g.resets.style[Ce]=typeof ie.crossOrigin=="string"||typeof ie.integrity=="string"?[ie.crossOrigin,ie.integrity]:_e;else break e}}m(M?{Link:M}:{})}}}catch(je){pn(i,je,{})}}function cc(i){i.trackedPostpones===null&&oc(i,!0),i.trackedPostpones===null&&Il(i),i.onShellError=jn,i=i.onShellReady,i()}function uc(i){oc(i,i.trackedPostpones===null?!0:i.completedRootSegment===null||i.completedRootSegment.status!==5),Il(i),i=i.onAllReady,i()}function ro(i,c){if(c.chunks.length===0&&c.children.length===1&&c.children[0].boundary===null&&c.children[0].id===-1){var g=c.children[0];g.id=c.id,g.parentFlushed=!0,g.status!==1&&g.status!==3&&g.status!==4||ro(i,g)}else i.completedSegments.push(c)}function ar(i,c,g,m){if(g!==null&&(--g.pendingTasks===0?Dt(i,g):g.together&&ec(i,g)),i.allPendingTasks--,c===null){if(m!==null&&m.parentFlushed){if(i.completedRootSegment!==null)throw Error(f(389));i.completedRootSegment=m}i.pendingRootTasks--,i.pendingRootTasks===0&&cc(i)}else if(c.pendingTasks--,c.status!==4)if(c.pendingTasks===0){if(c.status===0&&(c.status=1),m!==null&&m.parentFlushed&&(m.status===1||m.status===3)&&ro(c,m),c.parentFlushed&&i.completedBoundaries.push(c),c.status===1)g=c.row,g!==null&&Sa(g.hoistables,c.contentState),mi(i,c)||(c.fallbackAbortableTasks.forEach(hu,i),c.fallbackAbortableTasks.clear(),g!==null&&--g.pendingTasks===0&&Dt(i,g)),i.pendingRootTasks===0&&i.trackedPostpones===null&&c.contentPreamble!==null&&Il(i);else if(c.status===5&&(c=c.row,c!==null)){if(i.trackedPostpones!==null){g=i.trackedPostpones;var w=c.next;if(w!==null&&(m=w.boundaries,m!==null))for(w.boundaries=null,w=0;w<m.length;w++){var M=m[w];Oa(i,g,M),ar(i,M,null,null)}}--c.pendingTasks===0&&Dt(i,c)}}else m===null||!m.parentFlushed||m.status!==1&&m.status!==3||(ro(c,m),c.completedSegments.length===1&&c.parentFlushed&&i.partialBoundaries.push(c)),c=c.row,c!==null&&c.together&&ec(i,c);i.allPendingTasks===0&&uc(i)}function us(i){if(i.status!==14&&i.status!==13){var c=xr,g=se.H;se.H=rs;var m=se.A;se.A=Js;var w=Rn;Rn=i;var M=Jo;Jo=i.resumableState;try{var N=i.pingedTasks,ne;for(ne=0;ne<N.length;ne++){var P=N[ne],le=i,he=P.blockedSegment;if(he===null){var ie=le;if(P.replay.pendingTasks!==0){Ta(P.context);try{if(typeof P.replay.slots=="number"?lc(ie,P,P.replay.slots,P.node,P.childIndex):ac(ie,P),P.replay.pendingTasks===1&&0<P.replay.nodes.length)throw Error(f(488));P.replay.pendingTasks--,P.abortSet.delete(P),ar(ie,P.blockedBoundary,P.row,null)}catch(Nt){Ar();var Ce=Nt===Hn?fi():Nt;if(typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"){var Oe=P.ping;Ce.then(Oe,Oe),P.thenableState=Nt===Hn?vi():null}else{P.replay.pendingTasks--,P.abortSet.delete(P);var at=nr(P.componentStack);le=void 0;var je=ie,Je=P.blockedBoundary,We=ie.status===12?ie.fatalError:Ce,et=P.replay.nodes,xt=P.replay.slots;le=pn(je,We,at),za(je,Je,et,xt,We,le),ie.pendingRootTasks--,ie.pendingRootTasks===0&&cc(ie),ie.allPendingTasks--,ie.allPendingTasks===0&&uc(ie)}}finally{}}}else if(ie=void 0,je=he,je.status===0){je.status=6,Ta(P.context);var Gt=je.children.length,it=je.chunks.length;try{ac(le,P),Ea(je.chunks,le.renderState,je.lastPushedText,je.textEmbedded),P.abortSet.delete(P),je.status=1,ar(le,P.blockedBoundary,P.row,je)}catch(Nt){Ar(),je.children.length=Gt,je.chunks.length=it;var ot=Nt===Hn?fi():le.status===12?le.fatalError:Nt;if(le.status===12&&le.trackedPostpones!==null){var dt=le.trackedPostpones,kt=nr(P.componentStack);P.abortSet.delete(P),pn(le,ot,kt),lr(le,dt,P,je),ar(le,P.blockedBoundary,P.row,je)}else if(typeof ot=="object"&&ot!==null&&typeof ot.then=="function"){je.status=0,P.thenableState=Nt===Hn?vi():null;var ft=P.ping;ot.then(ft,ft)}else{var en=nr(P.componentStack);P.abortSet.delete(P),je.status=4;var wt=P.blockedBoundary,Jt=P.row;if(Jt!==null&&--Jt.pendingTasks===0&&Dt(le,Jt),le.allPendingTasks--,ie=pn(le,ot,en),wt===null)la(le,ot);else if(wt.pendingTasks--,wt.status!==4){wt.status=4,wt.errorDigest=ie,rc(le,wt);var Ft=wt.row;Ft!==null&&--Ft.pendingTasks===0&&Dt(le,Ft),wt.parentFlushed&&le.clientRenderedBoundaries.push(wt),le.pendingRootTasks===0&&le.trackedPostpones===null&&wt.contentPreamble!==null&&Il(le)}le.allPendingTasks===0&&uc(le)}}finally{}}}N.splice(0,ne),i.destination!==null&&xi(i,i.destination)}catch(Nt){pn(i,Nt,{}),la(i,Nt)}finally{Jo=M,se.H=g,se.A=m,g===rs&&Ta(c),Rn=w}}}function zr(i,c,g){c.preambleChildren.length&&g.push(c.preambleChildren);for(var m=!1,w=0;w<c.children.length;w++)m=An(i,c.children[w],g)||m;return m}function An(i,c,g){var m=c.boundary;if(m===null)return zr(i,c,g);var w=m.contentPreamble,M=m.fallbackPreamble;if(w===null||M===null)return!1;switch(m.status){case 1:if(ya(i.renderState,w),i.byteSize+=m.byteSize,c=m.completedSegments[0],!c)throw Error(f(391));return zr(i,c,g);case 5:if(i.trackedPostpones!==null)return!0;case 4:if(c.status===1)return ya(i.renderState,M),zr(i,c,g);default:return!0}}function Il(i){if(i.completedRootSegment&&i.completedPreambleSegments===null){var c=[],g=i.byteSize,m=An(i,i.completedRootSegment,c),w=i.renderState.preamble;m===!1||w.headChunks&&w.bodyChunks?i.completedPreambleSegments=c:i.byteSize=g}}function Dr(i,c,g,m){switch(g.parentFlushed=!0,g.status){case 0:g.id=i.nextSegmentId++;case 5:return m=g.id,g.lastPushedText=!1,g.textEmbedded=!1,i=i.renderState,c.push('<template id="'),c.push(i.placeholderPrefix),i=m.toString(16),c.push(i),c.push('"></template>');case 1:g.status=2;var w=!0,M=g.chunks,N=0;g=g.children;for(var ne=0;ne<g.length;ne++){for(w=g[ne];N<w.index;N++)c.push(M[N]);w=ir(i,c,w,m)}for(;N<M.length-1;N++)c.push(M[N]);return N<M.length&&(w=c.push(M[N])),w;case 3:return!0;default:throw Error(f(390))}}var rr=0;function ir(i,c,g,m){var w=g.boundary;if(w===null)return Dr(i,c,g,m);if(w.parentFlushed=!0,w.status===4){var M=w.row;return M!==null&&--M.pendingTasks===0&&Dt(i,M),i.renderState.generateStaticMarkup||(w=w.errorDigest,c.push("<!--$!-->"),c.push("<template"),w&&(c.push(' data-dgst="'),w=J(w),c.push(w),c.push('"')),c.push("></template>")),Dr(i,c,g,m),i=i.renderState.generateStaticMarkup?!0:c.push("<!--/$-->"),i}if(w.status!==1)return w.status===0&&(w.rootSegmentID=i.nextSegmentId++),0<w.completedSegments.length&&i.partialBoundaries.push(w),pa(c,i.renderState,w.rootSegmentID),m&&Sa(m,w.fallbackState),Dr(i,c,g,m),c.push("<!--/$-->");if(!aa&&mi(i,w)&&rr+w.byteSize>i.progressiveChunkSize)return w.rootSegmentID=i.nextSegmentId++,i.completedBoundaries.push(w),pa(c,i.renderState,w.rootSegmentID),Dr(i,c,g,m),c.push("<!--/$-->");if(rr+=w.byteSize,m&&Sa(m,w.contentState),g=w.row,g!==null&&mi(i,w)&&--g.pendingTasks===0&&Dt(i,g),i.renderState.generateStaticMarkup||c.push("<!--$-->"),g=w.completedSegments,g.length!==1)throw Error(f(391));return ir(i,c,g[0],m),i=i.renderState.generateStaticMarkup?!0:c.push("<!--/$-->"),i}function sc(i,c,g,m){return Pl(c,i.renderState,g.parentFormatContext,g.id),ir(i,c,g,m),ru(c,g.parentFormatContext)}function fc(i,c,g){rr=g.byteSize;for(var m=g.completedSegments,w=0;w<m.length;w++)kr(i,c,g,m[w]);m.length=0,m=g.row,m!==null&&mi(i,g)&&--m.pendingTasks===0&&Dt(i,m),Vi(c,g.contentState,i.renderState),m=i.resumableState,i=i.renderState,w=g.rootSegmentID,g=g.contentState;var M=i.stylesToHoist;return i.stylesToHoist=!1,c.push(i.startInlineScript),c.push(">"),M?((m.instructions&4)===0&&(m.instructions|=4,c.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};')),(m.instructions&2)===0&&(m.instructions|=2,c.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),(m.instructions&8)===0?(m.instructions|=8,c.push(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`)):c.push('$RR("')):((m.instructions&2)===0&&(m.instructions|=2,c.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),c.push('$RC("')),m=w.toString(16),c.push(i.boundaryPrefix),c.push(m),c.push('","'),c.push(i.segmentPrefix),c.push(m),M?(c.push('",'),es(c,g)):c.push('"'),g=c.push(")<\/script>"),br(c,i)&&g}function kr(i,c,g,m){if(m.status===2)return!0;var w=g.contentState,M=m.id;if(M===-1){if((m.id=g.rootSegmentID)===-1)throw Error(f(392));return sc(i,c,m,w)}return M===g.rootSegmentID?sc(i,c,m,w):(sc(i,c,m,w),g=i.resumableState,i=i.renderState,c.push(i.startInlineScript),c.push(">"),(g.instructions&1)===0?(g.instructions|=1,c.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')):c.push('$RS("'),c.push(i.segmentPrefix),M=M.toString(16),c.push(M),c.push('","'),c.push(i.placeholderPrefix),c.push(M),c=c.push('")<\/script>'),c)}var aa=!1;function xi(i,c){try{if(!(0<i.pendingRootTasks)){var g,m=i.completedRootSegment;if(m!==null){if(m.status===5)return;var w=i.completedPreambleSegments;if(w===null)return;rr=i.byteSize;var M=i.resumableState,N=i.renderState,ne=N.preamble,P=ne.htmlChunks,le=ne.headChunks,he;if(P){for(he=0;he<P.length;he++)c.push(P[he]);if(le)for(he=0;he<le.length;he++)c.push(le[he]);else{var ie=Qt("head");c.push(ie),c.push(">")}}else if(le)for(he=0;he<le.length;he++)c.push(le[he]);var Ce=N.charsetChunks;for(he=0;he<Ce.length;he++)c.push(Ce[he]);Ce.length=0,N.preconnects.forEach(fl,c),N.preconnects.clear();var Oe=N.viewportChunks;for(he=0;he<Oe.length;he++)c.push(Oe[he]);Oe.length=0,N.fontPreloads.forEach(fl,c),N.fontPreloads.clear(),N.highImagePreloads.forEach(fl,c),N.highImagePreloads.clear(),Xe=N,N.styles.forEach(Wn,c),Xe=null;var at=N.importMapChunks;for(he=0;he<at.length;he++)c.push(at[he]);at.length=0,N.bootstrapScripts.forEach(fl,c),N.scripts.forEach(fl,c),N.scripts.clear(),N.bulkPreloads.forEach(fl,c),N.bulkPreloads.clear(),M.instructions|=32;var je=N.hoistableChunks;for(he=0;he<je.length;he++)c.push(je[he]);for(M=je.length=0;M<w.length;M++){var Je=w[M];for(N=0;N<Je.length;N++)ir(i,c,Je[N],null)}var We=i.renderState.preamble,et=We.headChunks;if(We.htmlChunks||et){var xt=Yl("head");c.push(xt)}var Gt=We.bodyChunks;if(Gt)for(w=0;w<Gt.length;w++)c.push(Gt[w]);ir(i,c,m,null),i.completedRootSegment=null;var it=i.renderState;if(i.allPendingTasks!==0||i.clientRenderedBoundaries.length!==0||i.completedBoundaries.length!==0||i.trackedPostpones!==null&&(i.trackedPostpones.rootNodes.length!==0||i.trackedPostpones.rootSlots!==null)){var ot=i.resumableState;if((ot.instructions&64)===0){if(ot.instructions|=64,c.push(it.startInlineScript),(ot.instructions&32)===0){ot.instructions|=32;var dt="_"+ot.idPrefix+"R_";c.push(' id="');var kt=J(dt);c.push(kt),c.push('"')}c.push(">"),c.push("requestAnimationFrame(function(){$RT=performance.now()});"),c.push("<\/script>")}}br(c,it)}var ft=i.renderState;m=0;var en=ft.viewportChunks;for(m=0;m<en.length;m++)c.push(en[m]);en.length=0,ft.preconnects.forEach(fl,c),ft.preconnects.clear(),ft.fontPreloads.forEach(fl,c),ft.fontPreloads.clear(),ft.highImagePreloads.forEach(fl,c),ft.highImagePreloads.clear(),ft.styles.forEach(Io,c),ft.scripts.forEach(fl,c),ft.scripts.clear(),ft.bulkPreloads.forEach(fl,c),ft.bulkPreloads.clear();var wt=ft.hoistableChunks;for(m=0;m<wt.length;m++)c.push(wt[m]);wt.length=0;var Jt=i.clientRenderedBoundaries;for(g=0;g<Jt.length;g++){var Ft=Jt[g];ft=c;var Nt=i.resumableState,Fn=i.renderState,ka=Ft.rootSegmentID,dl=Ft.errorDigest;ft.push(Fn.startInlineScript),ft.push(">"),(Nt.instructions&4)===0?(Nt.instructions|=4,ft.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')):ft.push('$RX("'),ft.push(Fn.boundaryPrefix);var Yn=ka.toString(16);if(ft.push(Yn),ft.push('"'),dl){ft.push(",");var Vl=Zi(dl||"");ft.push(Vl)}var tn=ft.push(")<\/script>");if(!tn){i.destination=null,g++,Jt.splice(0,g);return}}Jt.splice(0,g);var $n=i.completedBoundaries;for(g=0;g<$n.length;g++)if(!fc(i,c,$n[g])){i.destination=null,g++,$n.splice(0,g);return}$n.splice(0,g),aa=!0;var el=i.partialBoundaries;for(g=0;g<el.length;g++){var jt=el[g];e:{Jt=i,Ft=c,rr=jt.byteSize;var on=jt.completedSegments;for(tn=0;tn<on.length;tn++)if(!kr(Jt,Ft,jt,on[tn])){tn++,on.splice(0,tn);var tl=!1;break e}on.splice(0,tn);var Mt=jt.row;Mt!==null&&Mt.together&&jt.pendingTasks===1&&(Mt.pendingTasks===1?Xl(Jt,Mt,Mt.hoistables):Mt.pendingTasks--),tl=Vi(Ft,jt.contentState,Jt.renderState)}if(!tl){i.destination=null,g++,el.splice(0,g);return}}el.splice(0,g),aa=!1;var Pn=i.completedBoundaries;for(g=0;g<Pn.length;g++)if(!fc(i,c,Pn[g])){i.destination=null,g++,Pn.splice(0,g);return}Pn.splice(0,g)}}finally{aa=!1,i.allPendingTasks===0&&i.clientRenderedBoundaries.length===0&&i.completedBoundaries.length===0&&(i.flushScheduled=!1,g=i.resumableState,g.hasBody&&(el=Yl("body"),c.push(el)),g.hasHtml&&(g=Yl("html"),c.push(g)),i.status=14,c.push(null),i.destination=null)}}function Zl(i){if(i.flushScheduled===!1&&i.pingedTasks.length===0&&i.destination!==null){i.flushScheduled=!0;var c=i.destination;c?xi(i,c):i.flushScheduled=!1}}function wi(i,c){if(i.status===13)i.status=14,c.destroy(i.fatalError);else if(i.status!==14&&i.destination===null){i.destination=c;try{xi(i,c)}catch(g){pn(i,g,{}),la(i,g)}}}function vu(i,c){(i.status===11||i.status===10)&&(i.status=12);try{var g=i.abortableTasks;if(0<g.size){var m=c===void 0?Error(f(432)):typeof c=="object"&&c!==null&&typeof c.then=="function"?Error(f(530)):c;i.fatalError=m,g.forEach(function(w){return ic(w,i,m)}),g.clear()}i.destination!==null&&xi(i,i.destination)}catch(w){pn(i,w,{}),la(i,w)}}function Un(i,c,g){if(c===null)g.rootNodes.push(i);else{var m=g.workingMap,w=m.get(c);w===void 0&&(w=[c[1],c[2],[],null],m.set(c,w),Un(w,c[0],g)),w[2].push(i)}}function Da(){}function io(i,c,g,m){var w=!1,M=null,N="",ne=!1;if(c=ea(c?c.identifierPrefix:void 0),i=os(i,c,Ol(c,g),_t(0,null,0,null),1/0,Da,void 0,function(){ne=!0},void 0,void 0,void 0),i.flushScheduled=i.destination!==null,us(i),i.status===10&&(i.status=11),i.trackedPostpones===null&&oc(i,i.pendingRootTasks===0),vu(i,m),wi(i,{push:function(P){return P!==null&&(N+=P),!0},destroy:function(P){w=!0,M=P}}),w&&M!==m)throw M;if(!ne)throw Error(f(426));return N}return Ps.renderToStaticMarkup=function(i,c){return io(i,c,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Ps.renderToString=function(i,c){return io(i,c,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Ps.version="19.2.4",Ps}var tu={};/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function uS(){if(O0)return tu;O0=1;var a=Ns(),s=Uf();function f(r){var o="https://react.dev/errors/"+r;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)o+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Z=Symbol.for("react.scope"),$=Symbol.for("react.activity"),oe=Symbol.for("react.legacy_hidden"),me=Symbol.for("react.memo_cache_sentinel"),de=Symbol.for("react.view_transition"),ve=Symbol.iterator;function Te(r){return r===null||typeof r!="object"?null:(r=ve&&r[ve]||r["@@iterator"],typeof r=="function"?r:null)}var Ee=Array.isArray;function be(r,o){var h=r.length&3,b=r.length-h,y=o;for(o=0;o<b;){var C=r.charCodeAt(o)&255|(r.charCodeAt(++o)&255)<<8|(r.charCodeAt(++o)&255)<<16|(r.charCodeAt(++o)&255)<<24;++o,C=3432918353*(C&65535)+((3432918353*(C>>>16)&65535)<<16)&4294967295,C=C<<15|C>>>17,C=461845907*(C&65535)+((461845907*(C>>>16)&65535)<<16)&4294967295,y^=C,y=y<<13|y>>>19,y=5*(y&65535)+((5*(y>>>16)&65535)<<16)&4294967295,y=(y&65535)+27492+(((y>>>16)+58964&65535)<<16)}switch(C=0,h){case 3:C^=(r.charCodeAt(o+2)&255)<<16;case 2:C^=(r.charCodeAt(o+1)&255)<<8;case 1:C^=r.charCodeAt(o)&255,C=3432918353*(C&65535)+((3432918353*(C>>>16)&65535)<<16)&4294967295,C=C<<15|C>>>17,y^=461845907*(C&65535)+((461845907*(C>>>16)&65535)<<16)&4294967295}return y^=r.length,y^=y>>>16,y=2246822507*(y&65535)+((2246822507*(y>>>16)&65535)<<16)&4294967295,y^=y>>>13,y=3266489909*(y&65535)+((3266489909*(y>>>16)&65535)<<16)&4294967295,(y^y>>>16)>>>0}var ce=new MessageChannel,ye=[];ce.port1.onmessage=function(){var r=ye.shift();r&&r()};function He(r){ye.push(r),ce.port2.postMessage(null)}function Ze(r){setTimeout(function(){throw r})}var $e=Promise,st=typeof queueMicrotask=="function"?queueMicrotask:function(r){$e.resolve(null).then(r).catch(Ze)},Ge=null,Ve=0;function D(r,o){if(o.byteLength!==0)if(2048<o.byteLength)0<Ve&&(r.enqueue(new Uint8Array(Ge.buffer,0,Ve)),Ge=new Uint8Array(2048),Ve=0),r.enqueue(o);else{var h=Ge.length-Ve;h<o.byteLength&&(h===0?r.enqueue(Ge):(Ge.set(o.subarray(0,h),Ve),r.enqueue(Ge),o=o.subarray(h)),Ge=new Uint8Array(2048),Ve=0),Ge.set(o,Ve),Ve+=o.byteLength}}function J(r,o){return D(r,o),!0}function we(r){Ge&&0<Ve&&(r.enqueue(new Uint8Array(Ge.buffer,0,Ve)),Ge=null,Ve=0)}var Pe=new TextEncoder;function W(r){return Pe.encode(r)}function _(r){return Pe.encode(r)}function se(r){return r.byteLength}function Ae(r,o){typeof r.error=="function"?r.error(o):r.close()}var Re=Object.assign,pe=Object.prototype.hasOwnProperty,_e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Vt={};function Qe(r){return pe.call(Vt,r)?!0:pe.call(Xe,r)?!1:_e.test(r)?Vt[r]=!0:(Xe[r]=!0,!1)}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),_t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fl=/["'&<>]/;function Ue(r){if(typeof r=="boolean"||typeof r=="number"||typeof r=="bigint")return""+r;r=""+r;var o=Fl.exec(r);if(o){var h="",b,y=0;for(b=o.index;b<r.length;b++){switch(r.charCodeAt(b)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#x27;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}y!==b&&(h+=r.slice(y,b)),y=b+1,h+=o}r=y!==b?h+r.slice(y,b):h}return r}var ol=/([A-Z])/g,$r=/^ms-/,Fo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ei(r){return Fo.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var ma=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yo={pending:!1,data:null,method:null,action:null},pl=fn.d;fn.d={f:pl.f,r:pl.r,D:ic,C:oc,L:cc,m:uc,X:ar,S:ro,M:us};var xl=[],gr=null;_('"></template>');var cl=_("<script"),gt=_("<\/script>"),ul=_('<script src="'),qu=_('<script type="module" src="'),ti=_(' nonce="'),Cn=_(' integrity="'),Po=_(' crossorigin="'),lu=_(' async=""><\/script>'),ni=_("<style"),ja=/(<\/|<)(s)(cript)/gi;function gn(r,o,h,b){return""+o+(h==="s"?"\\u0073":"\\u0053")+b}var ta=_('<script type="importmap">'),Bn=_("<\/script>");function Go(r,o,h,b,y,C){h=typeof o=="string"?o:o&&o.script;var z=h===void 0?cl:_('<script nonce="'+Ue(h)+'"'),X=typeof o=="string"?void 0:o&&o.style,B=X===void 0?ni:_('<style nonce="'+Ue(X)+'"'),I=r.idPrefix,ee=[],ae=r.bootstrapScriptContent,xe=r.bootstrapScripts,Se=r.bootstrapModules;if(ae!==void 0&&(ee.push(z),Oa(ee,r),ee.push(St,W((""+ae).replace(ja,gn)),gt)),ae=[],b!==void 0&&(ae.push(ta),ae.push(W((""+JSON.stringify(b)).replace(ja,gn))),ae.push(Bn)),b=y?{preconnects:"",fontPreloads:"",highImagePreloads:"",remainingCapacity:2+(typeof C=="number"?C:2e3)}:null,y={placeholderPrefix:_(I+"P:"),segmentPrefix:_(I+"S:"),boundaryPrefix:_(I+"B:"),startInlineScript:z,startInlineStyle:B,preamble:Qt(),externalRuntimeScript:null,bootstrapChunks:ee,importMapChunks:ae,onHeaders:y,headers:b,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:new Set,fontPreloads:new Set,highImagePreloads:new Set,styles:new Map,bootstrapScripts:new Set,scripts:new Set,bulkPreloads:new Set,preloads:{images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map},nonce:{script:h,style:X},hoistableState:null,stylesToHoist:!1},xe!==void 0)for(b=0;b<xe.length;b++)I=xe[b],X=z=void 0,B={rel:"preload",as:"script",fetchPriority:"low",nonce:o},typeof I=="string"?B.href=C=I:(B.href=C=I.src,B.integrity=X=typeof I.integrity=="string"?I.integrity:void 0,B.crossOrigin=z=typeof I=="string"||I.crossOrigin==null?void 0:I.crossOrigin==="use-credentials"?"use-credentials":""),I=r,ae=C,I.scriptResources[ae]=null,I.moduleScriptResources[ae]=null,I=[],Ut(I,B),y.bootstrapScripts.add(I),ee.push(ul,W(Ue(C)),Ht),h&&ee.push(ti,W(Ue(h)),Ht),typeof X=="string"&&ee.push(Cn,W(Ue(X)),Ht),typeof z=="string"&&ee.push(Po,W(Ue(z)),Ht),Oa(ee,r),ee.push(lu);if(Se!==void 0)for(o=0;o<Se.length;o++)X=Se[o],C=b=void 0,z={rel:"modulepreload",fetchPriority:"low",nonce:h},typeof X=="string"?z.href=xe=X:(z.href=xe=X.src,z.integrity=C=typeof X.integrity=="string"?X.integrity:void 0,z.crossOrigin=b=typeof X=="string"||X.crossOrigin==null?void 0:X.crossOrigin==="use-credentials"?"use-credentials":""),X=r,B=xe,X.scriptResources[B]=null,X.moduleScriptResources[B]=null,X=[],Ut(X,z),y.bootstrapScripts.add(X),ee.push(qu,W(Ue(xe)),Ht),h&&ee.push(ti,W(Ue(h)),Ht),typeof C=="string"&&ee.push(Cn,W(Ue(C)),Ht),typeof b=="string"&&ee.push(Po,W(Ue(b)),Ht),Oa(ee,r),ee.push(lu);return y}function au(r,o,h,b,y){return{idPrefix:r===void 0?"":r,nextFormID:0,streamingFormat:0,bootstrapScriptContent:h,bootstrapScripts:b,bootstrapModules:y,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function Qt(){return{htmlChunks:null,headChunks:null,bodyChunks:null}}function rn(r,o,h,b){return{insertionMode:r,selectedValue:o,tagScope:h,viewTransition:b}}function li(r){return rn(r==="http://www.w3.org/2000/svg"?4:r==="http://www.w3.org/1998/Math/MathML"?5:0,null,0,null)}function Yl(r,o,h){var b=r.tagScope&-25;switch(o){case"noscript":return rn(2,null,b|1,null);case"select":return rn(2,h.value!=null?h.value:h.defaultValue,b,null);case"svg":return rn(4,null,b,null);case"picture":return rn(2,null,b|2,null);case"math":return rn(5,null,b,null);case"foreignObject":return rn(2,null,b,null);case"table":return rn(6,null,b,null);case"thead":case"tbody":case"tfoot":return rn(7,null,b,null);case"colgroup":return rn(9,null,b,null);case"tr":return rn(8,null,b,null);case"head":if(2>r.insertionMode)return rn(3,null,b,null);break;case"html":if(r.insertionMode===0)return rn(1,null,b,null)}return 6<=r.insertionMode||2>r.insertionMode?rn(2,null,b,null):r.tagScope!==b?rn(r.insertionMode,r.selectedValue,b,null):r}function ya(r){return r===null?null:{update:r.update,enter:"none",exit:"none",share:r.update,name:r.autoName,autoName:r.autoName,nameIdx:0}}function br(r,o){return o.tagScope&32&&(r.instructions|=128),rn(o.insertionMode,o.selectedValue,o.tagScope|12,ya(o.viewTransition))}function pa(r,o){r=ya(o.viewTransition);var h=o.tagScope|16;return r!==null&&r.share!=="none"&&(h|=64),rn(o.insertionMode,o.selectedValue,h,r)}var Pl=_("<!-- -->");function ru(r,o,h,b){return o===""?b:(b&&r.push(Pl),r.push(W(Ue(o))),!0)}var Xo=new Map,Zi=_(' style="'),$u=_(":"),ai=_(";");function ri(r,o){if(typeof o!="object")throw Error(f(62));var h=!0,b;for(b in o)if(pe.call(o,b)){var y=o[b];if(y!=null&&typeof y!="boolean"&&y!==""){if(b.indexOf("--")===0){var C=W(Ue(b));y=W(Ue((""+y).trim()))}else C=Xo.get(b),C===void 0&&(C=_(Ue(b.replace(ol,"-$1").toLowerCase().replace($r,"-ms-"))),Xo.set(b,C)),y=typeof y=="number"?y===0||ea.has(b)?W(""+y):W(y+"px"):W(Ue((""+y).trim()));h?(h=!1,r.push(Zi,C,$u,y)):r.push(ai,C,$u,y)}}h||r.push(Ht)}var bn=_(" "),sl=_('="'),Ht=_('"'),Vi=_('=""');function fl(r,o,h){h&&typeof h!="function"&&typeof h!="symbol"&&r.push(bn,W(o),Vi)}function yt(r,o,h){typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&r.push(bn,W(o),sl,W(Ue(h)),Ht)}var mn=_(Ue("javascript:throw new Error('React form unexpectedly submitted.')")),Wn=_('<input type="hidden"');function qa(r,o){this.push(Wn),Io(r),yt(this,"name",o),yt(this,"value",r),this.push(mr)}function Io(r){if(typeof r!="string")throw Error(f(480))}function Qi(r,o){if(typeof o.$$FORM_ACTION=="function"){var h=r.nextFormID++;r=r.idPrefix+h;try{var b=o.$$FORM_ACTION(r);if(b){var y=b.data;y?.forEach(Io)}return b}catch(C){if(typeof C=="object"&&C!==null&&typeof C.then=="function")throw C}}return null}function es(r,o,h,b,y,C,z,X){var B=null;if(typeof b=="function"){var I=Qi(o,b);I!==null?(X=I.name,b=I.action||"",y=I.encType,C=I.method,z=I.target,B=I.data):(r.push(bn,W("formAction"),sl,mn,Ht),z=C=y=b=X=null,dn(o,h))}return X!=null&&pt(r,"name",X),b!=null&&pt(r,"formAction",b),y!=null&&pt(r,"formEncType",y),C!=null&&pt(r,"formMethod",C),z!=null&&pt(r,"formTarget",z),B}function pt(r,o,h){switch(o){case"className":yt(r,"class",h);break;case"tabIndex":yt(r,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":yt(r,o,h);break;case"style":ri(r,h);break;case"src":case"href":if(h==="")break;case"action":case"formAction":if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=ei(""+h),r.push(bn,W(o),sl,W(Ue(h)),Ht);break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":fl(r,o.toLowerCase(),h);break;case"xlinkHref":if(typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=ei(""+h),r.push(bn,W("xlink:href"),sl,W(Ue(h)),Ht);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof h!="function"&&typeof h!="symbol"&&r.push(bn,W(o),sl,W(Ue(h)),Ht);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"&&r.push(bn,W(o),Vi);break;case"capture":case"download":h===!0?r.push(bn,W(o),Vi):h!==!1&&typeof h!="function"&&typeof h!="symbol"&&r.push(bn,W(o),sl,W(Ue(h)),Ht);break;case"cols":case"rows":case"size":case"span":typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h&&r.push(bn,W(o),sl,W(Ue(h)),Ht);break;case"rowSpan":case"start":typeof h=="function"||typeof h=="symbol"||isNaN(h)||r.push(bn,W(o),sl,W(Ue(h)),Ht);break;case"xlinkActuate":yt(r,"xlink:actuate",h);break;case"xlinkArcrole":yt(r,"xlink:arcrole",h);break;case"xlinkRole":yt(r,"xlink:role",h);break;case"xlinkShow":yt(r,"xlink:show",h);break;case"xlinkTitle":yt(r,"xlink:title",h);break;case"xlinkType":yt(r,"xlink:type",h);break;case"xmlBase":yt(r,"xml:base",h);break;case"xmlLang":yt(r,"xml:lang",h);break;case"xmlSpace":yt(r,"xml:space",h);break;default:if((!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=_t.get(o)||o,Qe(o))){switch(typeof h){case"function":case"symbol":return;case"boolean":var b=o.toLowerCase().slice(0,5);if(b!=="data-"&&b!=="aria-")return}r.push(bn,W(o),sl,W(Ue(h)),Ht)}}}var St=_(">"),mr=_("/>");function yn(r,o,h){if(o!=null){if(h!=null)throw Error(f(60));if(typeof o!="object"||!("__html"in o))throw Error(f(61));o=o.__html,o!=null&&r.push(W(""+o))}}function ii(r){var o="";return a.Children.forEach(r,function(h){h!=null&&(o+=h)}),o}var yr=_(' selected=""'),pr=_(`addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`);function dn(r,o){if((r.instructions&16)===0){r.instructions|=16;var h=o.preamble,b=o.bootstrapChunks;(h.htmlChunks||h.headChunks)&&b.length===0?(b.push(o.startInlineScript),Oa(b,r),b.push(St,pr,gt)):b.unshift(o.startInlineScript,St,pr,gt)}}var ts=_("<!--F!-->"),oi=_("<!--F-->");function Ut(r,o){r.push(Wt("link"));for(var h in o)if(pe.call(o,h)){var b=o[h];if(b!=null)switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"link"));default:pt(r,h,b)}}return r.push(mr),null}var xa=/(<\/|<)(s)(tyle)/gi;function Zo(r,o,h,b){return""+o+(h==="s"?"\\73 ":"\\53 ")+b}function wa(r,o,h){r.push(Wt(h));for(var b in o)if(pe.call(o,b)){var y=o[b];if(y!=null)switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,h));default:pt(r,b,y)}}return r.push(mr),null}function Wi(r,o){r.push(Wt("title"));var h=null,b=null,y;for(y in o)if(pe.call(o,y)){var C=o[y];if(C!=null)switch(y){case"children":h=C;break;case"dangerouslySetInnerHTML":b=C;break;default:pt(r,y,C)}}return r.push(St),o=Array.isArray(h)?2>h.length?h[0]:null:h,typeof o!="function"&&typeof o!="symbol"&&o!==null&&o!==void 0&&r.push(W(Ue(""+o))),yn(r,b,h),r.push(Ca("title")),null}var Xs=_("<!--head-->"),Vo=_("<!--body-->"),Sa=_("<!--html-->");function Ol(r,o){r.push(Wt("script"));var h=null,b=null,y;for(y in o)if(pe.call(o,y)){var C=o[y];if(C!=null)switch(y){case"children":h=C;break;case"dangerouslySetInnerHTML":b=C;break;default:pt(r,y,C)}}return r.push(St),yn(r,b,h),typeof h=="string"&&r.push(W((""+h).replace(ja,gn))),r.push(Ca("script")),null}function Jn(r,o,h){r.push(Wt(h));var b=h=null,y;for(y in o)if(pe.call(o,y)){var C=o[y];if(C!=null)switch(y){case"children":h=C;break;case"dangerouslySetInnerHTML":b=C;break;default:pt(r,y,C)}}return r.push(St),yn(r,b,h),h}function Ea(r,o,h){r.push(Wt(h));var b=h=null,y;for(y in o)if(pe.call(o,y)){var C=o[y];if(C!=null)switch(y){case"children":h=C;break;case"dangerouslySetInnerHTML":b=C;break;default:pt(r,y,C)}}return r.push(St),yn(r,b,h),typeof h=="string"?(r.push(W(Ue(h))),null):h}var iu=_(`
`),ou=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ci=new Map;function Wt(r){var o=ci.get(r);if(o===void 0){if(!ou.test(r))throw Error(f(65,r));o=_("<"+r),ci.set(r,o)}return o}var xr=_("<!DOCTYPE html>");function Kn(r,o,h,b,y,C,z,X,B){switch(o){case"div":case"span":case"svg":case"path":break;case"a":r.push(Wt("a"));var I=null,ee=null,ae;for(ae in h)if(pe.call(h,ae)){var xe=h[ae];if(xe!=null)switch(ae){case"children":I=xe;break;case"dangerouslySetInnerHTML":ee=xe;break;case"href":xe===""?yt(r,"href",""):pt(r,ae,xe);break;default:pt(r,ae,xe)}}if(r.push(St),yn(r,ee,I),typeof I=="string"){r.push(W(Ue(I)));var Se=null}else Se=I;return Se;case"g":case"p":case"li":break;case"select":r.push(Wt("select"));var Le=null,tt=null,Ke;for(Ke in h)if(pe.call(h,Ke)){var Me=h[Ke];if(Me!=null)switch(Ke){case"children":Le=Me;break;case"dangerouslySetInnerHTML":tt=Me;break;case"defaultValue":case"value":break;default:pt(r,Ke,Me)}}return r.push(St),yn(r,tt,Le),Le;case"option":var Be=X.selectedValue;r.push(Wt("option"));var ct=null,On=null,zn=null,Fe=null,vn;for(vn in h)if(pe.call(h,vn)){var Bt=h[vn];if(Bt!=null)switch(vn){case"children":ct=Bt;break;case"selected":zn=Bt;break;case"dangerouslySetInnerHTML":Fe=Bt;break;case"value":On=Bt;default:pt(r,vn,Bt)}}if(Be!=null){var un=On!==null?""+On:ii(ct);if(Ee(Be)){for(var Ya=0;Ya<Be.length;Ya++)if(""+Be[Ya]===un){r.push(yr);break}}else""+Be===un&&r.push(yr)}else zn&&r.push(yr);return r.push(St),yn(r,Fe,ct),ct;case"textarea":r.push(Wt("textarea"));var qe=null,ua=null,Hl=null,wn;for(wn in h)if(pe.call(h,wn)){var Al=h[wn];if(Al!=null)switch(wn){case"children":Hl=Al;break;case"value":qe=Al;break;case"defaultValue":ua=Al;break;case"dangerouslySetInnerHTML":throw Error(f(91));default:pt(r,wn,Al)}}if(qe===null&&ua!==null&&(qe=ua),r.push(St),Hl!=null){if(qe!=null)throw Error(f(92));if(Ee(Hl)){if(1<Hl.length)throw Error(f(93));qe=""+Hl[0]}qe=""+Hl}return typeof qe=="string"&&qe[0]===`
`&&r.push(iu),qe!==null&&r.push(W(Ue(""+qe))),null;case"input":r.push(Wt("input"));var fo=null,Yr=null,Pa=null,Pr=null,Dn=null,Tt=null,Ga=null,ho=null,xc=null,vo;for(vo in h)if(pe.call(h,vo)){var kn=h[vo];if(kn!=null)switch(vo){case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"input"));case"name":fo=kn;break;case"formAction":Yr=kn;break;case"formEncType":Pa=kn;break;case"formMethod":Pr=kn;break;case"formTarget":Dn=kn;break;case"defaultChecked":xc=kn;break;case"defaultValue":Ga=kn;break;case"checked":ho=kn;break;case"value":Tt=kn;break;default:pt(r,vo,kn)}}var bu=es(r,b,y,Yr,Pa,Pr,Dn,fo);return ho!==null?fl(r,"checked",ho):xc!==null&&fl(r,"checked",xc),Tt!==null?pt(r,"value",Tt):Ga!==null&&pt(r,"value",Ga),r.push(mr),bu?.forEach(qa,r),null;case"button":r.push(Wt("button"));var go=null,ss=null,qs=null,$s=null,ef=null,tf=null,nf=null,wc;for(wc in h)if(pe.call(h,wc)){var Xa=h[wc];if(Xa!=null)switch(wc){case"children":go=Xa;break;case"dangerouslySetInnerHTML":ss=Xa;break;case"name":qs=Xa;break;case"formAction":$s=Xa;break;case"formEncType":ef=Xa;break;case"formMethod":tf=Xa;break;case"formTarget":nf=Xa;break;default:pt(r,wc,Xa)}}var lf=es(r,b,y,$s,ef,tf,nf,qs);if(r.push(St),lf?.forEach(qa,r),yn(r,ss,go),typeof go=="string"){r.push(W(Ue(go)));var yd=null}else yd=go;return yd;case"form":r.push(Wt("form"));var Sc=null,af=null,Oi=null,bo=null,Ec=null,Cc=null,Tc;for(Tc in h)if(pe.call(h,Tc)){var Gr=h[Tc];if(Gr!=null)switch(Tc){case"children":Sc=Gr;break;case"dangerouslySetInnerHTML":af=Gr;break;case"action":Oi=Gr;break;case"encType":bo=Gr;break;case"method":Ec=Gr;break;case"target":Cc=Gr;break;default:pt(r,Tc,Gr)}}var fs=null,rf=null;if(typeof Oi=="function"){var zi=Qi(b,Oi);zi!==null?(Oi=zi.action||"",bo=zi.encType,Ec=zi.method,Cc=zi.target,fs=zi.data,rf=zi.name):(r.push(bn,W("action"),sl,mn,Ht),Cc=Ec=bo=Oi=null,dn(b,y))}if(Oi!=null&&pt(r,"action",Oi),bo!=null&&pt(r,"encType",bo),Ec!=null&&pt(r,"method",Ec),Cc!=null&&pt(r,"target",Cc),r.push(St),rf!==null&&(r.push(Wn),yt(r,"name",rf),r.push(mr),fs?.forEach(qa,r)),yn(r,af,Sc),typeof Sc=="string"){r.push(W(Ue(Sc)));var mo=null}else mo=Sc;return mo;case"menuitem":r.push(Wt("menuitem"));for(var mu in h)if(pe.call(h,mu)){var yu=h[mu];if(yu!=null)switch(mu){case"children":case"dangerouslySetInnerHTML":throw Error(f(400));default:pt(r,mu,yu)}}return r.push(St),null;case"object":r.push(Wt("object"));var Di=null,of=null,yo;for(yo in h)if(pe.call(h,yo)){var pu=h[yo];if(pu!=null)switch(yo){case"children":Di=pu;break;case"dangerouslySetInnerHTML":of=pu;break;case"data":var cf=ei(""+pu);if(cf==="")break;r.push(bn,W("data"),sl,W(Ue(cf)),Ht);break;default:pt(r,yo,pu)}}if(r.push(St),yn(r,of,Di),typeof Di=="string"){r.push(W(Ue(Di)));var uf=null}else uf=Di;return uf;case"title":var pd=X.tagScope&1,xd=X.tagScope&4;if(X.insertionMode===4||pd||h.itemProp!=null)var ds=Wi(r,h);else xd?ds=null:(Wi(y.hoistableChunks,h),ds=void 0);return ds;case"link":var sf=X.tagScope&1,wd=X.tagScope&4,Sd=h.rel,sr=h.href,xu=h.precedence;if(X.insertionMode===4||sf||h.itemProp!=null||typeof Sd!="string"||typeof sr!="string"||sr===""){Ut(r,h);var Rc=null}else if(h.rel==="stylesheet")if(typeof xu!="string"||h.disabled!=null||h.onLoad||h.onError)Rc=Ut(r,h);else{var Ac=y.styles.get(xu),_c=b.styleResources.hasOwnProperty(sr)?b.styleResources[sr]:void 0;if(_c!==null){b.styleResources[sr]=null,Ac||(Ac={precedence:W(Ue(xu)),rules:[],hrefs:[],sheets:new Map},y.styles.set(xu,Ac));var wu={state:0,props:Re({},h,{"data-precedence":h.precedence,precedence:null})};if(_c){_c.length===2&&zr(wu.props,_c);var hs=y.preloads.stylesheets.get(sr);hs&&0<hs.length?hs.length=0:wu.state=1}Ac.sheets.set(sr,wu),z&&z.stylesheets.add(wu)}else if(Ac){var vs=Ac.sheets.get(sr);vs&&z&&z.stylesheets.add(vs)}B&&r.push(Pl),Rc=null}else h.onLoad||h.onError?Rc=Ut(r,h):(B&&r.push(Pl),Rc=wd?null:Ut(y.hoistableChunks,h));return Rc;case"script":var Ed=X.tagScope&1,gs=h.async;if(typeof h.src!="string"||!h.src||!gs||typeof gs=="function"||typeof gs=="symbol"||h.onLoad||h.onError||X.insertionMode===4||Ed||h.itemProp!=null)var Cd=Ol(r,h);else{var bs=h.src;if(h.type==="module")var Su=b.moduleScriptResources,Mc=y.preloads.moduleScripts;else Su=b.scriptResources,Mc=y.preloads.scripts;var Oc=Su.hasOwnProperty(bs)?Su[bs]:void 0;if(Oc!==null){Su[bs]=null;var zc=h;if(Oc){Oc.length===2&&(zc=Re({},h),zr(zc,Oc));var ff=Mc.get(bs);ff&&(ff.length=0)}var df=[];y.scripts.add(df),Ol(df,zc)}B&&r.push(Pl),Cd=null}return Cd;case"style":var Eu=X.tagScope&1,Cu=h.precedence,ki=h.href,Td=h.nonce;if(X.insertionMode===4||Eu||h.itemProp!=null||typeof Cu!="string"||typeof ki!="string"||ki===""){r.push(Wt("style"));var Ni=null,ms=null,Dc;for(Dc in h)if(pe.call(h,Dc)){var Tu=h[Dc];if(Tu!=null)switch(Dc){case"children":Ni=Tu;break;case"dangerouslySetInnerHTML":ms=Tu;break;default:pt(r,Dc,Tu)}}r.push(St);var Ia=Array.isArray(Ni)?2>Ni.length?Ni[0]:null:Ni;typeof Ia!="function"&&typeof Ia!="symbol"&&Ia!==null&&Ia!==void 0&&r.push(W((""+Ia).replace(xa,Zo))),yn(r,ms,Ni),r.push(Ca("style"));var hf=null}else{var Li=y.styles.get(Cu);if((b.styleResources.hasOwnProperty(ki)?b.styleResources[ki]:void 0)!==null){b.styleResources[ki]=null,Li||(Li={precedence:W(Ue(Cu)),rules:[],hrefs:[],sheets:new Map},y.styles.set(Cu,Li));var vf=y.nonce.style;if(!vf||vf===Td){Li.hrefs.push(W(Ue(ki)));var Ru=Li.rules,po=null,ys=null,Au;for(Au in h)if(pe.call(h,Au)){var ps=h[Au];if(ps!=null)switch(Au){case"children":po=ps;break;case"dangerouslySetInnerHTML":ys=ps}}var _u=Array.isArray(po)?2>po.length?po[0]:null:po;typeof _u!="function"&&typeof _u!="symbol"&&_u!==null&&_u!==void 0&&Ru.push(W((""+_u).replace(xa,Zo))),yn(Ru,ys,po)}}Li&&z&&z.styles.add(Li),B&&r.push(Pl),hf=void 0}return hf;case"meta":var gf=X.tagScope&1,Sn=X.tagScope&4;if(X.insertionMode===4||gf||h.itemProp!=null)var In=wa(r,h,"meta");else B&&r.push(Pl),In=Sn?null:typeof h.charSet=="string"?wa(y.charsetChunks,h,"meta"):h.name==="viewport"?wa(y.viewportChunks,h,"meta"):wa(y.hoistableChunks,h,"meta");return In;case"listing":case"pre":r.push(Wt(o));var kc=null,Nc=null,Lc;for(Lc in h)if(pe.call(h,Lc)){var Mu=h[Lc];if(Mu!=null)switch(Lc){case"children":kc=Mu;break;case"dangerouslySetInnerHTML":Nc=Mu;break;default:pt(r,Lc,Mu)}}if(r.push(St),Nc!=null){if(kc!=null)throw Error(f(60));if(typeof Nc!="object"||!("__html"in Nc))throw Error(f(61));var Za=Nc.__html;Za!=null&&(typeof Za=="string"&&0<Za.length&&Za[0]===`
`?r.push(iu,W(Za)):r.push(W(""+Za)))}return typeof kc=="string"&&kc[0]===`
`&&r.push(iu),kc;case"img":var Rd=X.tagScope&3,Nn=h.src,Zn=h.srcSet;if(!(h.loading==="lazy"||!Nn&&!Zn||typeof Nn!="string"&&Nn!=null||typeof Zn!="string"&&Zn!=null||h.fetchPriority==="low"||Rd)&&(typeof Nn!="string"||Nn[4]!==":"||Nn[0]!=="d"&&Nn[0]!=="D"||Nn[1]!=="a"&&Nn[1]!=="A"||Nn[2]!=="t"&&Nn[2]!=="T"||Nn[3]!=="a"&&Nn[3]!=="A")&&(typeof Zn!="string"||Zn[4]!==":"||Zn[0]!=="d"&&Zn[0]!=="D"||Zn[1]!=="a"&&Zn[1]!=="A"||Zn[2]!=="t"&&Zn[2]!=="T"||Zn[3]!=="a"&&Zn[3]!=="A")){z!==null&&X.tagScope&64&&(z.suspenseyImages=!0);var Ad=typeof h.sizes=="string"?h.sizes:void 0,Xr=Zn?Zn+`
`+(Ad||""):Nn,Ou=y.preloads.images,Bi=Ou.get(Xr);if(Bi)(h.fetchPriority==="high"||10>y.highImagePreloads.size)&&(Ou.delete(Xr),y.highImagePreloads.add(Bi));else if(!b.imageResources.hasOwnProperty(Xr)){b.imageResources[Xr]=xl;var xs=h.crossOrigin,bf=typeof xs=="string"?xs==="use-credentials"?xs:"":void 0,Ir=y.headers,zu;Ir&&0<Ir.remainingCapacity&&typeof h.srcSet!="string"&&(h.fetchPriority==="high"||500>Ir.highImagePreloads.length)&&(zu=An(Nn,"image",{imageSrcSet:h.srcSet,imageSizes:h.sizes,crossOrigin:bf,integrity:h.integrity,nonce:h.nonce,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.refererPolicy}),0<=(Ir.remainingCapacity-=zu.length+2))?(y.resets.image[Xr]=xl,Ir.highImagePreloads&&(Ir.highImagePreloads+=", "),Ir.highImagePreloads+=zu):(Bi=[],Ut(Bi,{rel:"preload",as:"image",href:Zn?void 0:Nn,imageSrcSet:Zn,imageSizes:Ad,crossOrigin:bf,integrity:h.integrity,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),h.fetchPriority==="high"||10>y.highImagePreloads.size?y.highImagePreloads.add(Bi):(y.bulkPreloads.add(Bi),Ou.set(Xr,Bi)))}}return wa(r,h,"img");case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return wa(r,h,o);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>X.insertionMode){var Du=C||y.preamble;if(Du.headChunks)throw Error(f(545,"`<head>`"));C!==null&&r.push(Xs),Du.headChunks=[];var mf=Jn(Du.headChunks,h,"head")}else mf=Ea(r,h,"head");return mf;case"body":if(2>X.insertionMode){var ku=C||y.preamble;if(ku.bodyChunks)throw Error(f(545,"`<body>`"));C!==null&&r.push(Vo),ku.bodyChunks=[];var Nu=Jn(ku.bodyChunks,h,"body")}else Nu=Ea(r,h,"body");return Nu;case"html":if(X.insertionMode===0){var Lu=C||y.preamble;if(Lu.htmlChunks)throw Error(f(545,"`<html>`"));C!==null&&r.push(Sa),Lu.htmlChunks=[xr];var yf=Jn(Lu.htmlChunks,h,"html")}else yf=Ea(r,h,"html");return yf;default:if(o.indexOf("-")!==-1){r.push(Wt(o));var Bu=null,pf=null,Ul;for(Ul in h)if(pe.call(h,Ul)){var ql=h[Ul];if(ql!=null){var _d=Ul;switch(Ul){case"children":Bu=ql;break;case"dangerouslySetInnerHTML":pf=ql;break;case"style":ri(r,ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":_d="class";default:if(Qe(Ul)&&typeof ql!="function"&&typeof ql!="symbol"&&ql!==!1){if(ql===!0)ql="";else if(typeof ql=="object")continue;r.push(bn,W(_d),sl,W(Ue(ql)),Ht)}}}}return r.push(St),yn(r,pf,Bu),Bu}}return Ea(r,h,o)}var Ji=new Map;function Ca(r){var o=Ji.get(r);return o===void 0&&(o=_("</"+r+">"),Ji.set(r,o)),o}function Ki(r,o){r=r.preamble,r.htmlChunks===null&&o.htmlChunks&&(r.htmlChunks=o.htmlChunks),r.headChunks===null&&o.headChunks&&(r.headChunks=o.headChunks),r.bodyChunks===null&&o.bodyChunks&&(r.bodyChunks=o.bodyChunks)}function $a(r,o){o=o.bootstrapChunks;for(var h=0;h<o.length-1;h++)D(r,o[h]);return h<o.length?(h=o[h],o.length=0,J(r,h)):!0}var Ta=_("requestAnimationFrame(function(){$RT=performance.now()});"),cu=_('<template id="'),ui=_('"></template>'),wr=_("<!--&-->"),ji=_("<!--/&-->"),ns=_("<!--$-->"),uu=_('<!--$?--><template id="'),Is=_('"></template>'),jn=_("<!--$!-->"),Hn=_("<!--/$-->"),Ra=_("<template"),si=_('"'),fi=_(' data-dgst="');_(' data-msg="'),_(' data-stck="'),_(' data-cstck="');var di=_("></template>");function Sr(r,o,h){if(D(r,uu),h===null)throw Error(f(395));return D(r,o.boundaryPrefix),D(r,W(h.toString(16))),J(r,Is)}var na=_('<div hidden id="'),qi=_('">'),Qo=_("</div>"),Er=_('<svg aria-hidden="true" style="display:none" id="'),zl=_('">'),Et=_("</svg>"),Aa=_('<math aria-hidden="true" style="display:none" id="'),Gl=_('">'),Cr=_("</math>"),er=_('<table hidden id="'),hi=_('">'),Tr=_("</table>"),_a=_('<table hidden><tbody id="'),Ma=_('">'),Tn=_("</tbody></table>"),qn=_('<table hidden><tr id="'),$i=_('">'),Rr=_("</tr></table>"),vi=_('<table hidden><colgroup id="'),Ar=_('">'),Wo=_("</colgroup></table>");function gi(r,o,h,b){switch(h.insertionMode){case 0:case 1:case 3:case 2:return D(r,na),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,qi);case 4:return D(r,Er),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,zl);case 5:return D(r,Aa),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,Gl);case 6:return D(r,er),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,hi);case 7:return D(r,_a),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,Ma);case 8:return D(r,qn),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,$i);case 9:return D(r,vi),D(r,o.segmentPrefix),D(r,W(b.toString(16))),J(r,Ar);default:throw Error(f(397))}}function eo(r,o){switch(o.insertionMode){case 0:case 1:case 3:case 2:return J(r,Qo);case 4:return J(r,Et);case 5:return J(r,Cr);case 6:return J(r,Tr);case 7:return J(r,Tn);case 8:return J(r,Rr);case 9:return J(r,Wo);default:throw Error(f(397))}}var ls=_('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Zs=_('$RS("'),Vs=_('","'),Qs=_('")<\/script>');_('<template data-rsi="" data-sid="'),_('" data-pid="');var to=_(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`);W(`$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`);var as=_('$RC("'),Ws=_(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`),rs=_('$RR("'),Jo=_('","'),Js=_('",'),Ko=_('"'),is=_(")<\/script>");_('<template data-rci="" data-bid="'),_('<template data-rri="" data-bid="'),_('" data-sid="'),_('" data-sty="');var bi=_('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'),su=_('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),jo=_('$RX("'),qo=_('"'),mi=_(","),Ks=_(")<\/script>");_('<template data-rxi="" data-bid="'),_('" data-dgst="'),_('" data-msg="'),_('" data-stck="'),_('" data-cstck="');var js=/[<\u2028\u2029]/g;function os(r){return JSON.stringify(r).replace(js,function(o){switch(o){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Rn=/[&><\u2028\u2029]/g;function yi(r){return JSON.stringify(r).replace(Rn,function(o){switch(o){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var fu=_(' media="not all" data-precedence="'),$o=_('" data-href="'),cs=_('">'),_r=_("</style>"),tr=!1,no=!0;function nr(r){var o=r.rules,h=r.hrefs,b=0;if(h.length){for(D(this,gr.startInlineStyle),D(this,fu),D(this,r.precedence),D(this,$o);b<h.length-1;b++)D(this,h[b]),D(this,tc);for(D(this,h[b]),D(this,cs),b=0;b<o.length;b++)D(this,o[b]);no=J(this,_r),tr=!0,o.length=0,h.length=0}}function pn(r){return r.state!==2?tr=!0:!1}function la(r,o,h){return tr=!1,no=!0,gr=h,o.styles.forEach(nr,r),gr=null,o.stylesheets.forEach(pn),tr&&(h.stylesToHoist=!0),no}function Dt(r){for(var o=0;o<r.length;o++)D(this,r[o]);r.length=0}var Xl=[];function ec(r){Ut(Xl,r.props);for(var o=0;o<Xl.length;o++)D(this,Xl[o]);Xl.length=0,r.state=2}var pi=_(' data-precedence="'),du=_('" data-href="'),tc=_(" "),Mr=_('">'),nc=_("</style>");function lc(r){var o=0<r.sheets.size;r.sheets.forEach(ec,this),r.sheets.clear();var h=r.rules,b=r.hrefs;if(!o||b.length){if(D(this,gr.startInlineStyle),D(this,pi),D(this,r.precedence),r=0,b.length){for(D(this,du);r<b.length-1;r++)D(this,b[r]),D(this,tc);D(this,b[r])}for(D(this,Mr),r=0;r<h.length;r++)D(this,h[r]);D(this,nc),h.length=0,b.length=0}}function Dl(r){if(r.state===0){r.state=1;var o=r.props;for(Ut(Xl,{rel:"preload",as:"style",href:r.props.href,crossOrigin:o.crossOrigin,fetchPriority:o.fetchPriority,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy}),r=0;r<Xl.length;r++)D(this,Xl[r]);Xl.length=0}}function ac(r){r.sheets.forEach(Dl,this),r.sheets.clear()}_('<link rel="expect" href="#'),_('" blocking="render"/>');var lo=_(' id="');function Oa(r,o){(o.instructions&32)===0&&(o.instructions|=32,r.push(lo,W(Ue("_"+o.idPrefix+"R_")),Ht))}var lr=_("["),rc=_(",["),Or=_(","),ao=_("]");function hn(r,o){D(r,lr);var h=lr;o.stylesheets.forEach(function(b){if(b.state!==2)if(b.state===3)D(r,h),D(r,W(yi(""+b.props.href))),D(r,ao),h=rc;else{D(r,h);var y=b.props["data-precedence"],C=b.props,z=ei(""+b.props.href);D(r,W(yi(z))),y=""+y,D(r,Or),D(r,W(yi(y)));for(var X in C)if(pe.call(C,X)&&(y=C[X],y!=null))switch(X){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(f(399,"link"));default:hu(r,X,y)}D(r,ao),h=rc,b.state=3}}),D(r,ao)}function hu(r,o,h){var b=o.toLowerCase();switch(typeof h){case"function":case"symbol":return}switch(o){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":b="class",o=""+h;break;case"hidden":if(h===!1)return;o="";break;case"src":case"href":h=ei(h),o=""+h;break;default:if(2<o.length&&(o[0]==="o"||o[0]==="O")&&(o[1]==="n"||o[1]==="N")||!Qe(o))return;o=""+h}D(r,Or),D(r,W(yi(b))),D(r,Or),D(r,W(yi(o)))}function za(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function ic(r){var o=Ot||null;if(o){var h=o.resumableState,b=o.renderState;if(typeof r=="string"&&r){if(!h.dnsResources.hasOwnProperty(r)){h.dnsResources[r]=null,h=b.headers;var y,C;(C=h&&0<h.remainingCapacity)&&(C=(y="<"+(""+r).replace(Il,Dr)+">; rel=dns-prefetch",0<=(h.remainingCapacity-=y.length+2))),C?(b.resets.dns[r]=null,h.preconnects&&(h.preconnects+=", "),h.preconnects+=y):(y=[],Ut(y,{href:r,rel:"dns-prefetch"}),b.preconnects.add(y))}Xn(o)}}else pl.D(r)}function oc(r,o){var h=Ot||null;if(h){var b=h.resumableState,y=h.renderState;if(typeof r=="string"&&r){var C=o==="use-credentials"?"credentials":typeof o=="string"?"anonymous":"default";if(!b.connectResources[C].hasOwnProperty(r)){b.connectResources[C][r]=null,b=y.headers;var z,X;if(X=b&&0<b.remainingCapacity){if(X="<"+(""+r).replace(Il,Dr)+">; rel=preconnect",typeof o=="string"){var B=(""+o).replace(rr,ir);X+='; crossorigin="'+B+'"'}X=(z=X,0<=(b.remainingCapacity-=z.length+2))}X?(y.resets.connect[C][r]=null,b.preconnects&&(b.preconnects+=", "),b.preconnects+=z):(C=[],Ut(C,{rel:"preconnect",href:r,crossOrigin:o}),y.preconnects.add(C))}Xn(h)}}else pl.C(r,o)}function cc(r,o,h){var b=Ot||null;if(b){var y=b.resumableState,C=b.renderState;if(o&&r){switch(o){case"image":if(h)var z=h.imageSrcSet,X=h.imageSizes,B=h.fetchPriority;var I=z?z+`
`+(X||""):r;if(y.imageResources.hasOwnProperty(I))return;y.imageResources[I]=xl,y=C.headers;var ee;y&&0<y.remainingCapacity&&typeof z!="string"&&B==="high"&&(ee=An(r,o,h),0<=(y.remainingCapacity-=ee.length+2))?(C.resets.image[I]=xl,y.highImagePreloads&&(y.highImagePreloads+=", "),y.highImagePreloads+=ee):(y=[],Ut(y,Re({rel:"preload",href:z?void 0:r,as:o},h)),B==="high"?C.highImagePreloads.add(y):(C.bulkPreloads.add(y),C.preloads.images.set(I,y)));break;case"style":if(y.styleResources.hasOwnProperty(r))return;z=[],Ut(z,Re({rel:"preload",href:r,as:o},h)),y.styleResources[r]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?xl:[h.crossOrigin,h.integrity],C.preloads.stylesheets.set(r,z),C.bulkPreloads.add(z);break;case"script":if(y.scriptResources.hasOwnProperty(r))return;z=[],C.preloads.scripts.set(r,z),C.bulkPreloads.add(z),Ut(z,Re({rel:"preload",href:r,as:o},h)),y.scriptResources[r]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?xl:[h.crossOrigin,h.integrity];break;default:if(y.unknownResources.hasOwnProperty(o)){if(z=y.unknownResources[o],z.hasOwnProperty(r))return}else z={},y.unknownResources[o]=z;if(z[r]=xl,(y=C.headers)&&0<y.remainingCapacity&&o==="font"&&(I=An(r,o,h),0<=(y.remainingCapacity-=I.length+2)))C.resets.font[r]=xl,y.fontPreloads&&(y.fontPreloads+=", "),y.fontPreloads+=I;else switch(y=[],r=Re({rel:"preload",href:r,as:o},h),Ut(y,r),o){case"font":C.fontPreloads.add(y);break;default:C.bulkPreloads.add(y)}}Xn(b)}}else pl.L(r,o,h)}function uc(r,o){var h=Ot||null;if(h){var b=h.resumableState,y=h.renderState;if(r){var C=o&&typeof o.as=="string"?o.as:"script";switch(C){case"script":if(b.moduleScriptResources.hasOwnProperty(r))return;C=[],b.moduleScriptResources[r]=!o||typeof o.crossOrigin!="string"&&typeof o.integrity!="string"?xl:[o.crossOrigin,o.integrity],y.preloads.moduleScripts.set(r,C);break;default:if(b.moduleUnknownResources.hasOwnProperty(C)){var z=b.unknownResources[C];if(z.hasOwnProperty(r))return}else z={},b.moduleUnknownResources[C]=z;C=[],z[r]=xl}Ut(C,Re({rel:"modulepreload",href:r},o)),y.bulkPreloads.add(C),Xn(h)}}else pl.m(r,o)}function ro(r,o,h){var b=Ot||null;if(b){var y=b.resumableState,C=b.renderState;if(r){o=o||"default";var z=C.styles.get(o),X=y.styleResources.hasOwnProperty(r)?y.styleResources[r]:void 0;X!==null&&(y.styleResources[r]=null,z||(z={precedence:W(Ue(o)),rules:[],hrefs:[],sheets:new Map},C.styles.set(o,z)),o={state:0,props:Re({rel:"stylesheet",href:r,"data-precedence":o},h)},X&&(X.length===2&&zr(o.props,X),(C=C.preloads.stylesheets.get(r))&&0<C.length?C.length=0:o.state=1),z.sheets.set(r,o),Xn(b))}}else pl.S(r,o,h)}function ar(r,o){var h=Ot||null;if(h){var b=h.resumableState,y=h.renderState;if(r){var C=b.scriptResources.hasOwnProperty(r)?b.scriptResources[r]:void 0;C!==null&&(b.scriptResources[r]=null,o=Re({src:r,async:!0},o),C&&(C.length===2&&zr(o,C),r=y.preloads.scripts.get(r))&&(r.length=0),r=[],y.scripts.add(r),Ol(r,o),Xn(h))}}else pl.X(r,o)}function us(r,o){var h=Ot||null;if(h){var b=h.resumableState,y=h.renderState;if(r){var C=b.moduleScriptResources.hasOwnProperty(r)?b.moduleScriptResources[r]:void 0;C!==null&&(b.moduleScriptResources[r]=null,o=Re({src:r,type:"module",async:!0},o),C&&(C.length===2&&zr(o,C),r=y.preloads.moduleScripts.get(r))&&(r.length=0),r=[],y.scripts.add(r),Ol(r,o),Xn(h))}}else pl.M(r,o)}function zr(r,o){r.crossOrigin==null&&(r.crossOrigin=o[0]),r.integrity==null&&(r.integrity=o[1])}function An(r,o,h){r=(""+r).replace(Il,Dr),o=(""+o).replace(rr,ir),o="<"+r+'>; rel=preload; as="'+o+'"';for(var b in h)pe.call(h,b)&&(r=h[b],typeof r=="string"&&(o+="; "+b.toLowerCase()+'="'+(""+r).replace(rr,ir)+'"'));return o}var Il=/[<>\r\n]/g;function Dr(r){switch(r){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var rr=/["';,\r\n]/g;function ir(r){switch(r){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function sc(r){this.styles.add(r)}function fc(r){this.stylesheets.add(r)}function kr(r,o){o.styles.forEach(sc,r),o.stylesheets.forEach(fc,r),o.suspenseyImages&&(r.suspenseyImages=!0)}function aa(r){return 0<r.stylesheets.size||r.suspenseyImages}var xi=Function.prototype.bind,Zl=Symbol.for("react.client.reference");function wi(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===Zl?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case S:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case $:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case p:return"Portal";case R:return r.displayName||"Context";case O:return(r._context.displayName||"Context")+".Consumer";case k:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case V:return o=r.displayName||null,o!==null?o:wi(r.type)||"Memo";case K:o=r._payload,r=r._init;try{return wi(r(o))}catch{}}return null}var vu={},Un=null;function Da(r,o){if(r!==o){r.context._currentValue=r.parentValue,r=r.parent;var h=o.parent;if(r===null){if(h!==null)throw Error(f(401))}else{if(h===null)throw Error(f(401));Da(r,h)}o.context._currentValue=o.value}}function io(r){r.context._currentValue=r.parentValue,r=r.parent,r!==null&&io(r)}function i(r){var o=r.parent;o!==null&&i(o),r.context._currentValue=r.value}function c(r,o){if(r.context._currentValue=r.parentValue,r=r.parent,r===null)throw Error(f(402));r.depth===o.depth?Da(r,o):c(r,o)}function g(r,o){var h=o.parent;if(h===null)throw Error(f(402));r.depth===h.depth?Da(r,h):g(r,h),o.context._currentValue=o.value}function m(r){var o=Un;o!==r&&(o===null?i(r):r===null?io(o):o.depth===r.depth?Da(o,r):o.depth>r.depth?c(o,r):g(o,r),Un=r)}var w={enqueueSetState:function(r,o){r=r._reactInternals,r.queue!==null&&r.queue.push(o)},enqueueReplaceState:function(r,o){r=r._reactInternals,r.replace=!0,r.queue=[o]},enqueueForceUpdate:function(){}},M={id:1,overflow:""};function N(r,o,h){var b=r.id;r=r.overflow;var y=32-ne(b)-1;b&=~(1<<y),h+=1;var C=32-ne(o)+y;if(30<C){var z=y-y%5;return C=(b&(1<<z)-1).toString(32),b>>=z,y-=z,{id:1<<32-ne(o)+y|h<<y|b,overflow:C+r}}return{id:1<<C|h<<y|b,overflow:r}}var ne=Math.clz32?Math.clz32:he,P=Math.log,le=Math.LN2;function he(r){return r>>>=0,r===0?32:31-(P(r)/le|0)|0}function ie(){}var Ce=Error(f(460));function Oe(r,o,h){switch(h=r[h],h===void 0?r.push(o):h!==o&&(o.then(ie,ie),o=h),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(ie,ie):(r=o,r.status="pending",r.then(function(b){if(o.status==="pending"){var y=o;y.status="fulfilled",y.value=b}},function(b){if(o.status==="pending"){var y=o;y.status="rejected",y.reason=b}})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}throw at=o,Ce}}var at=null;function je(){if(at===null)throw Error(f(459));var r=at;return at=null,r}function Je(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var We=typeof Object.is=="function"?Object.is:Je,et=null,xt=null,Gt=null,it=null,ot=null,dt=null,kt=!1,ft=!1,en=0,wt=0,Jt=-1,Ft=0,Nt=null,Fn=null,ka=0;function dl(){if(et===null)throw Error(f(321));return et}function Yn(){if(0<ka)throw Error(f(312));return{memoizedState:null,queue:null,next:null}}function Vl(){return dt===null?ot===null?(kt=!1,ot=dt=Yn()):(kt=!0,dt=ot):dt.next===null?(kt=!1,dt=dt.next=Yn()):(kt=!0,dt=dt.next),dt}function tn(){var r=Nt;return Nt=null,r}function $n(){it=Gt=xt=et=null,ft=!1,ot=null,ka=0,dt=Fn=null}function el(r,o){return typeof o=="function"?o(r):o}function jt(r,o,h){if(et=dl(),dt=Vl(),kt){var b=dt.queue;if(o=b.dispatch,Fn!==null&&(h=Fn.get(b),h!==void 0)){Fn.delete(b),b=dt.memoizedState;do b=r(b,h.action),h=h.next;while(h!==null);return dt.memoizedState=b,[b,o]}return[dt.memoizedState,o]}return r=r===el?typeof o=="function"?o():o:h!==void 0?h(o):o,dt.memoizedState=r,r=dt.queue={last:null,dispatch:null},r=r.dispatch=tl.bind(null,et,r),[dt.memoizedState,r]}function on(r,o){if(et=dl(),dt=Vl(),o=o===void 0?null:o,dt!==null){var h=dt.memoizedState;if(h!==null&&o!==null){var b=h[1];e:if(b===null)b=!1;else{for(var y=0;y<b.length&&y<o.length;y++)if(!We(o[y],b[y])){b=!1;break e}b=!0}if(b)return h[0]}}return r=r(),dt.memoizedState=[r,o],r}function tl(r,o,h){if(25<=ka)throw Error(f(301));if(r===et)if(ft=!0,r={action:h,next:null},Fn===null&&(Fn=new Map),h=Fn.get(o),h===void 0)Fn.set(o,r);else{for(o=h;o.next!==null;)o=o.next;o.next=r}}function Mt(){throw Error(f(440))}function Pn(){throw Error(f(394))}function wl(){throw Error(f(479))}function dc(r,o,h){dl();var b=wt++,y=Gt;if(typeof r.$$FORM_ACTION=="function"){var C=null,z=it;y=y.formState;var X=r.$$IS_SIGNATURE_EQUAL;if(y!==null&&typeof X=="function"){var B=y[1];X.call(r,y[2],y[3])&&(C=h!==void 0?"p"+h:"k"+be(JSON.stringify([z,null,b]),0),B===C&&(Jt=b,o=y[0]))}var I=r.bind(null,o);return r=function(ae){I(ae)},typeof I.$$FORM_ACTION=="function"&&(r.$$FORM_ACTION=function(ae){ae=I.$$FORM_ACTION(ae),h!==void 0&&(h+="",ae.action=h);var xe=ae.data;return xe&&(C===null&&(C=h!==void 0?"p"+h:"k"+be(JSON.stringify([z,null,b]),0)),xe.append("$ACTION_KEY",C)),ae}),[o,r,!1]}var ee=r.bind(null,o);return[o,function(ae){ee(ae)},!1]}function oo(r){var o=Ft;return Ft+=1,Nt===null&&(Nt=[]),Oe(Nt,r,o)}function hc(){throw Error(f(393))}var vc={readContext:function(r){return r._currentValue},use:function(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return oo(r);if(r.$$typeof===R)return r._currentValue}throw Error(f(438,String(r)))},useContext:function(r){return dl(),r._currentValue},useMemo:on,useReducer:jt,useRef:function(r){et=dl(),dt=Vl();var o=dt.memoizedState;return o===null?(r={current:r},dt.memoizedState=r):o},useState:function(r){return jt(el,r)},useInsertionEffect:ie,useLayoutEffect:ie,useCallback:function(r,o){return on(function(){return r},o)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(r,o){return dl(),o!==void 0?o:r},useTransition:function(){return dl(),[!1,Pn]},useId:function(){var r=xt.treeContext,o=r.overflow;r=r.id,r=(r&~(1<<32-ne(r)-1)).toString(32)+o;var h=nn;if(h===null)throw Error(f(404));return o=en++,r="_"+h.idPrefix+"R_"+r,0<o&&(r+="H"+o.toString(32)),r+"_"},useSyncExternalStore:function(r,o,h){if(h===void 0)throw Error(f(407));return h()},useOptimistic:function(r){return dl(),[r,wl]},useActionState:dc,useFormState:dc,useHostTransitionStatus:function(){return dl(),Yo},useMemoCache:function(r){for(var o=Array(r),h=0;h<r;h++)o[h]=me;return o},useCacheRefresh:function(){return hc},useEffectEvent:function(){return Mt}},nn=null,Lt={getCacheForType:function(){throw Error(f(248))},cacheSignal:function(){throw Error(f(248))}},nt,_n;function xn(r){if(nt===void 0)try{throw Error()}catch(h){var o=h.stack.trim().match(/\n( *(at )?)/);nt=o&&o[1]||"",_n=-1<h.stack.indexOf(`
    at`)?" (<anonymous>)":-1<h.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+r+_n}var Si=!1;function nl(r,o){if(!r||Si)return"";Si=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var b={DetermineComponentFrameRoot:function(){try{if(o){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(Se){var xe=Se}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(Se){xe=Se}r.call(ae.prototype)}}else{try{throw Error()}catch(Se){xe=Se}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(Se){if(Se&&xe&&typeof Se.stack=="string")return[Se.stack,xe.stack]}return[null,null]}};b.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var y=Object.getOwnPropertyDescriptor(b.DetermineComponentFrameRoot,"name");y&&y.configurable&&Object.defineProperty(b.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var C=b.DetermineComponentFrameRoot(),z=C[0],X=C[1];if(z&&X){var B=z.split(`
`),I=X.split(`
`);for(y=b=0;b<B.length&&!B[b].includes("DetermineComponentFrameRoot");)b++;for(;y<I.length&&!I[y].includes("DetermineComponentFrameRoot");)y++;if(b===B.length||y===I.length)for(b=B.length-1,y=I.length-1;1<=b&&0<=y&&B[b]!==I[y];)y--;for(;1<=b&&0<=y;b--,y--)if(B[b]!==I[y]){if(b!==1||y!==1)do if(b--,y--,0>y||B[b]!==I[y]){var ee=`
`+B[b].replace(" at new "," at ");return r.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",r.displayName)),ee}while(1<=b&&0<=y);break}}}finally{Si=!1,Error.prepareStackTrace=h}return(h=r?r.displayName||r.name:"")?xn(h):""}function gc(r){if(typeof r=="string")return xn(r);if(typeof r=="function")return r.prototype&&r.prototype.isReactComponent?nl(r,!0):nl(r,!1);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case k:return nl(r.render,!1);case V:return nl(r.type,!1);case K:var o=r,h=o._payload;o=o._init;try{r=o(h)}catch{return xn("Lazy")}return gc(r)}if(typeof r.name=="string"){e:{h=r.name,o=r.env;var b=r.debugLocation;if(b!=null&&(r=Error.prepareStackTrace,Error.prepareStackTrace=void 0,b=b.stack,Error.prepareStackTrace=r,b.startsWith(`Error: react-stack-top-frame
`)&&(b=b.slice(29)),r=b.indexOf(`
`),r!==-1&&(b=b.slice(r+1)),r=b.indexOf("react_stack_bottom_frame"),r!==-1&&(r=b.lastIndexOf(`
`,r)),r=r!==-1?b=b.slice(0,r):"",b=r.lastIndexOf(`
`),r=b===-1?r:r.slice(b+1),r.indexOf(h)!==-1)){h=`
`+r;break e}h=xn(h+(o?" ["+o+"]":""))}return h}}switch(r){case U:return xn("SuspenseList");case L:return xn("Suspense")}return""}function Sl(r,o){return(500<o.byteSize||aa(o.contentState))&&o.contentPreamble===null}function ra(r){if(typeof r=="object"&&r!==null&&typeof r.environmentName=="string"){var o=r.environmentName;r=[r].slice(0),typeof r[0]=="string"?r.splice(0,1,"%c%s%c "+r[0],"background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+o+" ",""):r.splice(0,0,"%c%s%c","background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+o+" ",""),r.unshift(console),o=xi.apply(console.error,r),o()}else console.error(r);return null}function kl(r,o,h,b,y,C,z,X,B,I,ee){var ae=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=r,this.renderState=o,this.rootFormatContext=h,this.progressiveChunkSize=b===void 0?12800:b,this.status=10,this.fatalError=null,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=ae,this.pingedTasks=[],this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.trackedPostpones=null,this.onError=y===void 0?ra:y,this.onPostpone=I===void 0?ie:I,this.onAllReady=C===void 0?ie:C,this.onShellReady=z===void 0?ie:z,this.onShellError=X===void 0?ie:X,this.onFatalError=B===void 0?ie:B,this.formState=ee===void 0?null:ee}function or(r,o,h,b,y,C,z,X,B,I,ee,ae){return o=new kl(o,h,b,y,C,z,X,B,I,ee,ae),h=Mn(o,0,null,b,!1,!1),h.parentFlushed=!0,r=ia(o,null,r,-1,null,h,null,null,o.abortableTasks,null,b,null,M,null,null),Wl(r),o.pingedTasks.push(r),o}function Na(r,o,h,b,y,C,z,X,B,I,ee){return r=or(r,o,h,b,y,C,z,X,B,I,ee,void 0),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}function Ql(r,o,h,b,y,C,z,X,B){return h=new kl(o.resumableState,h,o.rootFormatContext,o.progressiveChunkSize,b,y,C,z,X,B,null),h.nextSegmentId=o.nextSegmentId,typeof o.replaySlots=="number"?(b=Mn(h,0,null,o.rootFormatContext,!1,!1),b.parentFlushed=!0,r=ia(h,null,r,-1,null,b,null,null,h.abortableTasks,null,o.rootFormatContext,null,M,null,null),Wl(r),h.pingedTasks.push(r),h):(r=Ei(h,null,{nodes:o.replayNodes,slots:o.replaySlots,pendingTasks:0},r,-1,null,null,h.abortableTasks,null,o.rootFormatContext,null,M,null,null),Wl(r),h.pingedTasks.push(r),h)}function La(r,o,h,b,y,C,z,X,B){return r=Ql(r,o,h,b,y,C,z,X,B),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}var Ot=null;function ll(r,o){r.pingedTasks.push(o),r.pingedTasks.length===1&&(r.flushScheduled=r.destination!==null,r.trackedPostpones!==null||r.status===10?st(function(){return yc(r)}):He(function(){return yc(r)}))}function hl(r,o,h,b,y){return h={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:o,completedSegments:[],byteSize:0,fallbackAbortableTasks:h,errorDigest:null,contentState:za(),fallbackState:za(),contentPreamble:b,fallbackPreamble:y,trackedContentKeyPath:null,trackedFallbackNode:null},o!==null&&(o.pendingTasks++,b=o.boundaries,b!==null&&(r.allPendingTasks++,h.pendingTasks++,b.push(h)),r=o.inheritedHoistables,r!==null&&kr(h.contentState,r)),h}function ia(r,o,h,b,y,C,z,X,B,I,ee,ae,xe,Se,Le){r.allPendingTasks++,y===null?r.pendingRootTasks++:y.pendingTasks++,Se!==null&&Se.pendingTasks++;var tt={replay:null,node:h,childIndex:b,ping:function(){return ll(r,tt)},blockedBoundary:y,blockedSegment:C,blockedPreamble:z,hoistableState:X,abortSet:B,keyPath:I,formatContext:ee,context:ae,treeContext:xe,row:Se,componentStack:Le,thenableState:o};return B.add(tt),tt}function Ei(r,o,h,b,y,C,z,X,B,I,ee,ae,xe,Se){r.allPendingTasks++,C===null?r.pendingRootTasks++:C.pendingTasks++,xe!==null&&xe.pendingTasks++,h.pendingTasks++;var Le={replay:h,node:b,childIndex:y,ping:function(){return ll(r,Le)},blockedBoundary:C,blockedSegment:null,blockedPreamble:null,hoistableState:z,abortSet:X,keyPath:B,formatContext:I,context:ee,treeContext:ae,row:xe,componentStack:Se,thenableState:o};return X.add(Le),Le}function Mn(r,o,h,b,y,C){return{status:0,parentFlushed:!1,id:-1,index:o,chunks:[],children:[],preambleChildren:[],parentFormatContext:b,boundary:h,lastPushedText:y,textEmbedded:C}}function Wl(r){var o=r.node;if(typeof o=="object"&&o!==null)switch(o.$$typeof){case v:r.componentStack={parent:r.componentStack,type:o.type}}}function El(r){return r===null?null:{parent:r.parent,type:"Suspense Fallback"}}function Ct(r){var o={};return r&&Object.defineProperty(o,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var h="",b=r;do h+=gc(b.type),b=b.parent;while(b);var y=h}catch(C){y=`
Error generating stack: `+C.message+`
`+C.stack}return Object.defineProperty(o,"componentStack",{value:y}),y}}),o}function cn(r,o,h){if(r=r.onError,o=r(o,h),o==null||typeof o=="string")return o}function Nr(r,o){var h=r.onShellError,b=r.onFatalError;h(o),b(o),r.destination!==null?(r.status=14,Ae(r.destination,o)):(r.status=13,r.fatalError=o)}function Gn(r,o){gu(r,o.next,o.hoistables)}function gu(r,o,h){for(;o!==null;){h!==null&&(kr(o.hoistables,h),o.inheritedHoistables=h);var b=o.boundaries;if(b!==null){o.boundaries=null;for(var y=0;y<b.length;y++){var C=b[y];h!==null&&kr(C.contentState,h),vl(r,C,null,null)}}if(o.pendingTasks--,0<o.pendingTasks)break;h=o.hoistables,o=o.next}}function co(r,o){var h=o.boundaries;if(h!==null&&o.pendingTasks===h.length){for(var b=!0,y=0;y<h.length;y++){var C=h[y];if(C.pendingTasks!==1||C.parentFlushed||Sl(r,C)){b=!1;break}}b&&gu(r,o,o.hoistables)}}function Xt(r){var o={pendingTasks:1,boundaries:null,hoistables:za(),inheritedHoistables:null,together:!1,next:null};return r!==null&&0<r.pendingTasks&&(o.pendingTasks++,o.boundaries=[],r.next=o),o}function bc(r,o,h,b,y){var C=o.keyPath,z=o.treeContext,X=o.row;o.keyPath=h,h=b.length;var B=null;if(o.replay!==null){var I=o.replay.slots;if(I!==null&&typeof I=="object")for(var ee=0;ee<h;ee++){var ae=y!=="backwards"&&y!=="unstable_legacy-backwards"?ee:h-1-ee,xe=b[ae];o.row=B=Xt(B),o.treeContext=N(z,h,ae);var Se=I[ae];typeof Se=="number"?(Tl(r,o,Se,xe,ae),delete I[ae]):$t(r,o,xe,ae),--B.pendingTasks===0&&Gn(r,B)}else for(I=0;I<h;I++)ee=y!=="backwards"&&y!=="unstable_legacy-backwards"?I:h-1-I,ae=b[ee],o.row=B=Xt(B),o.treeContext=N(z,h,ee),$t(r,o,ae,ee),--B.pendingTasks===0&&Gn(r,B)}else if(y!=="backwards"&&y!=="unstable_legacy-backwards")for(y=0;y<h;y++)I=b[y],o.row=B=Xt(B),o.treeContext=N(z,h,y),$t(r,o,I,y),--B.pendingTasks===0&&Gn(r,B);else{for(y=o.blockedSegment,I=y.children.length,ee=y.chunks.length,ae=h-1;0<=ae;ae--){xe=b[ae],o.row=B=Xt(B),o.treeContext=N(z,h,ae),Se=Mn(r,ee,null,o.formatContext,ae===0?y.lastPushedText:!0,!0),y.children.splice(I,0,Se),o.blockedSegment=Se;try{$t(r,o,xe,ae),Se.lastPushedText&&Se.textEmbedded&&Se.chunks.push(Pl),Se.status=1,al(r,o.blockedBoundary,Se),--B.pendingTasks===0&&Gn(r,B)}catch(Le){throw Se.status=r.status===12?3:4,Le}}o.blockedSegment=y,y.lastPushedText=!1}X!==null&&B!==null&&0<B.pendingTasks&&(X.pendingTasks++,B.next=X),o.treeContext=z,o.row=X,o.keyPath=C}function Ci(r,o,h,b,y,C){var z=o.thenableState;for(o.thenableState=null,et={},xt=o,Gt=r,it=h,wt=en=0,Jt=-1,Ft=0,Nt=z,r=b(y,C);ft;)ft=!1,wt=en=0,Jt=-1,Ft=0,ka+=1,dt=null,r=b(y,C);return $n(),r}function Cl(r,o,h,b,y,C,z){var X=!1;if(C!==0&&r.formState!==null){var B=o.blockedSegment;if(B!==null){X=!0,B=B.chunks;for(var I=0;I<C;I++)I===z?B.push(ts):B.push(oi)}}C=o.keyPath,o.keyPath=h,y?(h=o.treeContext,o.treeContext=N(h,1,0),$t(r,o,b,-1),o.treeContext=h):X?$t(r,o,b,-1):qt(r,o,b,-1),o.keyPath=C}function Ba(r,o,h,b,y,C){if(typeof b=="function")if(b.prototype&&b.prototype.isReactComponent){var z=y;if("ref"in y){z={};for(var X in y)X!=="ref"&&(z[X]=y[X])}var B=b.defaultProps;if(B){z===y&&(z=Re({},z,y));for(var I in B)z[I]===void 0&&(z[I]=B[I])}y=z,z=vu,B=b.contextType,typeof B=="object"&&B!==null&&(z=B._currentValue),z=new b(y,z);var ee=z.state!==void 0?z.state:null;if(z.updater=w,z.props=y,z.state=ee,B={queue:[],replace:!1},z._reactInternals=B,C=b.contextType,z.context=typeof C=="object"&&C!==null?C._currentValue:vu,C=b.getDerivedStateFromProps,typeof C=="function"&&(C=C(y,ee),ee=C==null?ee:Re({},ee,C),z.state=ee),typeof b.getDerivedStateFromProps!="function"&&typeof z.getSnapshotBeforeUpdate!="function"&&(typeof z.UNSAFE_componentWillMount=="function"||typeof z.componentWillMount=="function"))if(b=z.state,typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount(),b!==z.state&&w.enqueueReplaceState(z,z.state,null),B.queue!==null&&0<B.queue.length)if(b=B.queue,C=B.replace,B.queue=null,B.replace=!1,C&&b.length===1)z.state=b[0];else{for(B=C?b[0]:z.state,ee=!0,C=C?1:0;C<b.length;C++)I=b[C],I=typeof I=="function"?I.call(z,B,y,void 0):I,I!=null&&(ee?(ee=!1,B=Re({},B,I)):Re(B,I));z.state=B}else B.queue=null;if(b=z.render(),r.status===12)throw null;y=o.keyPath,o.keyPath=h,qt(r,o,b,-1),o.keyPath=y}else{if(b=Ci(r,o,h,b,y,void 0),r.status===12)throw null;Cl(r,o,h,b,en!==0,wt,Jt)}else if(typeof b=="string")if(z=o.blockedSegment,z===null)z=y.children,B=o.formatContext,ee=o.keyPath,o.formatContext=Yl(B,b,y),o.keyPath=h,$t(r,o,z,-1),o.formatContext=B,o.keyPath=ee;else{if(ee=Kn(z.chunks,b,y,r.resumableState,r.renderState,o.blockedPreamble,o.hoistableState,o.formatContext,z.lastPushedText),z.lastPushedText=!1,B=o.formatContext,C=o.keyPath,o.keyPath=h,(o.formatContext=Yl(B,b,y)).insertionMode===3){h=Mn(r,0,null,o.formatContext,!1,!1),z.preambleChildren.push(h),o.blockedSegment=h;try{h.status=6,$t(r,o,ee,-1),h.lastPushedText&&h.textEmbedded&&h.chunks.push(Pl),h.status=1,al(r,o.blockedBoundary,h)}finally{o.blockedSegment=z}}else $t(r,o,ee,-1);o.formatContext=B,o.keyPath=C;e:{switch(o=z.chunks,r=r.resumableState,b){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=B.insertionMode){r.hasBody=!0;break e}break;case"html":if(B.insertionMode===0){r.hasHtml=!0;break e}break;case"head":if(1>=B.insertionMode)break e}o.push(Ca(b))}z.lastPushedText=!1}else{switch(b){case oe:case E:case T:case S:b=o.keyPath,o.keyPath=h,qt(r,o,y.children,-1),o.keyPath=b;return;case $:b=o.blockedSegment,b===null?y.mode!=="hidden"&&(b=o.keyPath,o.keyPath=h,$t(r,o,y.children,-1),o.keyPath=b):y.mode!=="hidden"&&(b.chunks.push(wr),b.lastPushedText=!1,z=o.keyPath,o.keyPath=h,$t(r,o,y.children,-1),o.keyPath=z,b.chunks.push(ji),b.lastPushedText=!1);return;case U:e:{if(b=y.children,y=y.revealOrder,y==="forwards"||y==="backwards"||y==="unstable_legacy-backwards"){if(Ee(b)){bc(r,o,h,b,y);break e}if((z=Te(b))&&(z=z.call(b))){if(B=z.next(),!B.done){do B=z.next();while(!B.done);bc(r,o,h,b,y)}break e}}y==="together"?(y=o.keyPath,z=o.row,B=o.row=Xt(null),B.boundaries=[],B.together=!0,o.keyPath=h,qt(r,o,b,-1),--B.pendingTasks===0&&Gn(r,B),o.keyPath=y,o.row=z,z!==null&&0<B.pendingTasks&&(z.pendingTasks++,B.next=z)):(y=o.keyPath,o.keyPath=h,qt(r,o,b,-1),o.keyPath=y)}return;case de:case Z:throw Error(f(343));case L:e:if(o.replay!==null){b=o.keyPath,z=o.formatContext,B=o.row,o.keyPath=h,o.formatContext=pa(r.resumableState,z),o.row=null,h=y.children;try{$t(r,o,h,-1)}finally{o.keyPath=b,o.formatContext=z,o.row=B}}else{b=o.keyPath,C=o.formatContext;var ae=o.row;I=o.blockedBoundary,X=o.blockedPreamble;var xe=o.hoistableState,Se=o.blockedSegment,Le=y.fallback;y=y.children;var tt=new Set,Ke=2>o.formatContext.insertionMode?hl(r,o.row,tt,Qt(),Qt()):hl(r,o.row,tt,null,null);r.trackedPostpones!==null&&(Ke.trackedContentKeyPath=h);var Me=Mn(r,Se.chunks.length,Ke,o.formatContext,!1,!1);Se.children.push(Me),Se.lastPushedText=!1;var Be=Mn(r,0,null,o.formatContext,!1,!1);if(Be.parentFlushed=!0,r.trackedPostpones!==null){z=o.componentStack,B=[h[0],"Suspense Fallback",h[2]],ee=[B[1],B[2],[],null],r.trackedPostpones.workingMap.set(B,ee),Ke.trackedFallbackNode=ee,o.blockedSegment=Me,o.blockedPreamble=Ke.fallbackPreamble,o.keyPath=B,o.formatContext=br(r.resumableState,C),o.componentStack=El(z),Me.status=6;try{$t(r,o,Le,-1),Me.lastPushedText&&Me.textEmbedded&&Me.chunks.push(Pl),Me.status=1,al(r,I,Me)}catch(ct){throw Me.status=r.status===12?3:4,ct}finally{o.blockedSegment=Se,o.blockedPreamble=X,o.keyPath=b,o.formatContext=C}o=ia(r,null,y,-1,Ke,Be,Ke.contentPreamble,Ke.contentState,o.abortSet,h,pa(r.resumableState,o.formatContext),o.context,o.treeContext,null,z),Wl(o),r.pingedTasks.push(o)}else{o.blockedBoundary=Ke,o.blockedPreamble=Ke.contentPreamble,o.hoistableState=Ke.contentState,o.blockedSegment=Be,o.keyPath=h,o.formatContext=pa(r.resumableState,C),o.row=null,Be.status=6;try{if($t(r,o,y,-1),Be.lastPushedText&&Be.textEmbedded&&Be.chunks.push(Pl),Be.status=1,al(r,Ke,Be),Jl(Ke,Be),Ke.pendingTasks===0&&Ke.status===0){if(Ke.status=1,!Sl(r,Ke)){ae!==null&&--ae.pendingTasks===0&&Gn(r,ae),r.pendingRootTasks===0&&o.blockedPreamble&&Nl(r);break e}}else ae!==null&&ae.together&&co(r,ae)}catch(ct){Ke.status=4,r.status===12?(Be.status=3,z=r.fatalError):(Be.status=4,z=ct),B=Ct(o.componentStack),ee=cn(r,z,B),Ke.errorDigest=ee,Ha(r,Ke)}finally{o.blockedBoundary=I,o.blockedPreamble=X,o.hoistableState=xe,o.blockedSegment=Se,o.keyPath=b,o.formatContext=C,o.row=ae}o=ia(r,null,Le,-1,I,Me,Ke.fallbackPreamble,Ke.fallbackState,tt,[h[0],"Suspense Fallback",h[2]],br(r.resumableState,o.formatContext),o.context,o.treeContext,o.row,El(o.componentStack)),Wl(o),r.pingedTasks.push(o)}}return}if(typeof b=="object"&&b!==null)switch(b.$$typeof){case k:if("ref"in y)for(Se in z={},y)Se!=="ref"&&(z[Se]=y[Se]);else z=y;b=Ci(r,o,h,b.render,z,C),Cl(r,o,h,b,en!==0,wt,Jt);return;case V:Ba(r,o,h,b.type,y,C);return;case R:if(B=y.children,z=o.keyPath,y=y.value,ee=b._currentValue,b._currentValue=y,C=Un,Un=b={parent:C,depth:C===null?0:C.depth+1,context:b,parentValue:ee,value:y},o.context=b,o.keyPath=h,qt(r,o,B,-1),r=Un,r===null)throw Error(f(403));r.context._currentValue=r.parentValue,r=Un=r.parent,o.context=r,o.keyPath=z;return;case O:y=y.children,b=y(b._context._currentValue),y=o.keyPath,o.keyPath=h,qt(r,o,b,-1),o.keyPath=y;return;case K:if(z=b._init,b=z(b._payload),r.status===12)throw null;Ba(r,o,h,b,y,C);return}throw Error(f(130,b==null?b:typeof b,""))}}function Tl(r,o,h,b,y){var C=o.replay,z=o.blockedBoundary,X=Mn(r,0,null,o.formatContext,!1,!1);X.id=h,X.parentFlushed=!0;try{o.replay=null,o.blockedSegment=X,$t(r,o,b,y),X.status=1,al(r,z,X),z===null?r.completedRootSegment=X:(Jl(z,X),z.parentFlushed&&r.partialBoundaries.push(z))}finally{o.replay=C,o.blockedSegment=null}}function qt(r,o,h,b){o.replay!==null&&typeof o.replay.slots=="number"?Tl(r,o,o.replay.slots,h,b):(o.node=h,o.childIndex=b,h=o.componentStack,Wl(o),Ti(r,o),o.componentStack=h)}function Ti(r,o){var h=o.node,b=o.childIndex;if(h!==null){if(typeof h=="object"){switch(h.$$typeof){case v:var y=h.type,C=h.key,z=h.props;h=z.ref;var X=h!==void 0?h:null,B=wi(y),I=C??(b===-1?0:b);if(C=[o.keyPath,B,I],o.replay!==null)e:{var ee=o.replay;for(b=ee.nodes,h=0;h<b.length;h++){var ae=b[h];if(I===ae[1]){if(ae.length===4){if(B!==null&&B!==ae[0])throw Error(f(490,ae[0],B));var xe=ae[2];B=ae[3],I=o.node,o.replay={nodes:xe,slots:B,pendingTasks:1};try{if(Ba(r,o,C,y,z,X),o.replay.pendingTasks===1&&0<o.replay.nodes.length)throw Error(f(488));o.replay.pendingTasks--}catch(Fe){if(typeof Fe=="object"&&Fe!==null&&(Fe===Ce||typeof Fe.then=="function"))throw o.node===I?o.replay=ee:b.splice(h,1),Fe;o.replay.pendingTasks--,z=Ct(o.componentStack),C=r,r=o.blockedBoundary,y=Fe,z=cn(C,y,z),cr(C,r,xe,B,y,z)}o.replay=ee}else{if(y!==L)throw Error(f(490,"Suspense",wi(y)||"Unknown"));t:{ee=void 0,y=ae[5],X=ae[2],B=ae[3],I=ae[4]===null?[]:ae[4][2],ae=ae[4]===null?null:ae[4][3];var Se=o.keyPath,Le=o.formatContext,tt=o.row,Ke=o.replay,Me=o.blockedBoundary,Be=o.hoistableState,ct=z.children,On=z.fallback,zn=new Set;z=2>o.formatContext.insertionMode?hl(r,o.row,zn,Qt(),Qt()):hl(r,o.row,zn,null,null),z.parentFlushed=!0,z.rootSegmentID=y,o.blockedBoundary=z,o.hoistableState=z.contentState,o.keyPath=C,o.formatContext=pa(r.resumableState,Le),o.row=null,o.replay={nodes:X,slots:B,pendingTasks:1};try{if($t(r,o,ct,-1),o.replay.pendingTasks===1&&0<o.replay.nodes.length)throw Error(f(488));if(o.replay.pendingTasks--,z.pendingTasks===0&&z.status===0){z.status=1,r.completedBoundaries.push(z);break t}}catch(Fe){z.status=4,xe=Ct(o.componentStack),ee=cn(r,Fe,xe),z.errorDigest=ee,o.replay.pendingTasks--,r.clientRenderedBoundaries.push(z)}finally{o.blockedBoundary=Me,o.hoistableState=Be,o.replay=Ke,o.keyPath=Se,o.formatContext=Le,o.row=tt}xe=Ei(r,null,{nodes:I,slots:ae,pendingTasks:0},On,-1,Me,z.fallbackState,zn,[C[0],"Suspense Fallback",C[2]],br(r.resumableState,o.formatContext),o.context,o.treeContext,o.row,El(o.componentStack)),Wl(xe),r.pingedTasks.push(xe)}}b.splice(h,1);break e}}}else Ba(r,o,C,y,z,X);return;case p:throw Error(f(257));case K:if(xe=h._init,h=xe(h._payload),r.status===12)throw null;qt(r,o,h,b);return}if(Ee(h)){Lr(r,o,h,b);return}if((xe=Te(h))&&(xe=xe.call(h))){if(h=xe.next(),!h.done){z=[];do z.push(h.value),h=xe.next();while(!h.done);Lr(r,o,z,b)}return}if(typeof h.then=="function")return o.thenableState=null,qt(r,o,oo(h),b);if(h.$$typeof===R)return qt(r,o,h._currentValue,b);throw b=Object.prototype.toString.call(h),Error(f(31,b==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":b))}typeof h=="string"?(b=o.blockedSegment,b!==null&&(b.lastPushedText=ru(b.chunks,h,r.renderState,b.lastPushedText))):(typeof h=="number"||typeof h=="bigint")&&(b=o.blockedSegment,b!==null&&(b.lastPushedText=ru(b.chunks,""+h,r.renderState,b.lastPushedText)))}}function Lr(r,o,h,b){var y=o.keyPath;if(b!==-1&&(o.keyPath=[o.keyPath,"Fragment",b],o.replay!==null)){for(var C=o.replay,z=C.nodes,X=0;X<z.length;X++){var B=z[X];if(B[1]===b){b=B[2],B=B[3],o.replay={nodes:b,slots:B,pendingTasks:1};try{if(Lr(r,o,h,-1),o.replay.pendingTasks===1&&0<o.replay.nodes.length)throw Error(f(488));o.replay.pendingTasks--}catch(ae){if(typeof ae=="object"&&ae!==null&&(ae===Ce||typeof ae.then=="function"))throw ae;o.replay.pendingTasks--,h=Ct(o.componentStack);var I=o.blockedBoundary,ee=ae;h=cn(r,ee,h),cr(r,I,b,B,ee,h)}o.replay=C,z.splice(X,1);break}}o.keyPath=y;return}if(C=o.treeContext,z=h.length,o.replay!==null&&(X=o.replay.slots,X!==null&&typeof X=="object")){for(b=0;b<z;b++)B=h[b],o.treeContext=N(C,z,b),I=X[b],typeof I=="number"?(Tl(r,o,I,B,b),delete X[b]):$t(r,o,B,b);o.treeContext=C,o.keyPath=y;return}for(X=0;X<z;X++)b=h[X],o.treeContext=N(C,z,X),$t(r,o,b,X);o.treeContext=C,o.keyPath=y}function mc(r,o,h){if(h.status=5,h.rootSegmentID=r.nextSegmentId++,r=h.trackedContentKeyPath,r===null)throw Error(f(486));var b=h.trackedFallbackNode,y=[],C=o.workingMap.get(r);return C===void 0?(h=[r[1],r[2],y,null,b,h.rootSegmentID],o.workingMap.set(r,h),Mi(h,r[0],o),h):(C[4]=b,C[5]=h.rootSegmentID,C)}function uo(r,o,h,b){b.status=5;var y=h.keyPath,C=h.blockedBoundary;if(C===null)b.id=r.nextSegmentId++,o.rootSlots=b.id,r.completedRootSegment!==null&&(r.completedRootSegment.status=5);else{if(C!==null&&C.status===0){var z=mc(r,o,C);if(C.trackedContentKeyPath===y&&h.childIndex===-1){b.id===-1&&(b.id=b.parentFlushed?C.rootSegmentID:r.nextSegmentId++),z[3]=b.id;return}}if(b.id===-1&&(b.id=b.parentFlushed&&C!==null?C.rootSegmentID:r.nextSegmentId++),h.childIndex===-1)y===null?o.rootSlots=b.id:(h=o.workingMap.get(y),h===void 0?(h=[y[1],y[2],[],b.id],Mi(h,y[0],o)):h[3]=b.id);else{if(y===null){if(r=o.rootSlots,r===null)r=o.rootSlots={};else if(typeof r=="number")throw Error(f(491))}else if(C=o.workingMap,z=C.get(y),z===void 0)r={},z=[y[1],y[2],[],r],C.set(y,z),Mi(z,y[0],o);else if(r=z[3],r===null)r=z[3]={};else if(typeof r=="number")throw Error(f(491));r[h.childIndex]=b.id}}}function Ha(r,o){r=r.trackedPostpones,r!==null&&(o=o.trackedContentKeyPath,o!==null&&(o=r.workingMap.get(o),o!==void 0&&(o.length=4,o[2]=[],o[3]=null)))}function Ri(r,o,h){return Ei(r,h,o.replay,o.node,o.childIndex,o.blockedBoundary,o.hoistableState,o.abortSet,o.keyPath,o.formatContext,o.context,o.treeContext,o.row,o.componentStack)}function Ai(r,o,h){var b=o.blockedSegment,y=Mn(r,b.chunks.length,null,o.formatContext,b.lastPushedText,!0);return b.children.push(y),b.lastPushedText=!1,ia(r,h,o.node,o.childIndex,o.blockedBoundary,y,o.blockedPreamble,o.hoistableState,o.abortSet,o.keyPath,o.formatContext,o.context,o.treeContext,o.row,o.componentStack)}function $t(r,o,h,b){var y=o.formatContext,C=o.context,z=o.keyPath,X=o.treeContext,B=o.componentStack,I=o.blockedSegment;if(I===null){I=o.replay;try{return qt(r,o,h,b)}catch(xe){if($n(),h=xe===Ce?je():xe,r.status!==12&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){b=xe===Ce?tn():null,r=Ri(r,o,b).ping,h.then(r,r),o.formatContext=y,o.context=C,o.keyPath=z,o.treeContext=X,o.componentStack=B,o.replay=I,m(C);return}if(h.message==="Maximum call stack size exceeded"){h=xe===Ce?tn():null,h=Ri(r,o,h),r.pingedTasks.push(h),o.formatContext=y,o.context=C,o.keyPath=z,o.treeContext=X,o.componentStack=B,o.replay=I,m(C);return}}}}else{var ee=I.children.length,ae=I.chunks.length;try{return qt(r,o,h,b)}catch(xe){if($n(),I.children.length=ee,I.chunks.length=ae,h=xe===Ce?je():xe,r.status!==12&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){I=h,h=xe===Ce?tn():null,r=Ai(r,o,h).ping,I.then(r,r),o.formatContext=y,o.context=C,o.keyPath=z,o.treeContext=X,o.componentStack=B,m(C);return}if(h.message==="Maximum call stack size exceeded"){I=xe===Ce?tn():null,I=Ai(r,o,I),r.pingedTasks.push(I),o.formatContext=y,o.context=C,o.keyPath=z,o.treeContext=X,o.componentStack=B,m(C);return}}}}throw o.formatContext=y,o.context=C,o.keyPath=z,o.treeContext=X,m(C),h}function Ua(r){var o=r.blockedBoundary,h=r.blockedSegment;h!==null&&(h.status=3,vl(this,o,r.row,h))}function cr(r,o,h,b,y,C){for(var z=0;z<h.length;z++){var X=h[z];if(X.length===4)cr(r,o,X[2],X[3],y,C);else{X=X[5];var B=r,I=C,ee=hl(B,null,new Set,null,null);ee.parentFlushed=!0,ee.rootSegmentID=X,ee.status=4,ee.errorDigest=I,ee.parentFlushed&&B.clientRenderedBoundaries.push(ee)}}if(h.length=0,b!==null){if(o===null)throw Error(f(487));if(o.status!==4&&(o.status=4,o.errorDigest=C,o.parentFlushed&&r.clientRenderedBoundaries.push(o)),typeof b=="object")for(var ae in b)delete b[ae]}}function Fa(r,o,h){var b=r.blockedBoundary,y=r.blockedSegment;if(y!==null){if(y.status===6)return;y.status=3}var C=Ct(r.componentStack);if(b===null){if(o.status!==13&&o.status!==14){if(b=r.replay,b===null){o.trackedPostpones!==null&&y!==null?(b=o.trackedPostpones,cn(o,h,C),uo(o,b,r,y),vl(o,null,r.row,y)):(cn(o,h,C),Nr(o,h));return}b.pendingTasks--,b.pendingTasks===0&&0<b.nodes.length&&(y=cn(o,h,C),cr(o,null,b.nodes,b.slots,h,y)),o.pendingRootTasks--,o.pendingRootTasks===0&&so(o)}}else{var z=o.trackedPostpones;if(b.status!==4){if(z!==null&&y!==null)return cn(o,h,C),uo(o,z,r,y),b.fallbackAbortableTasks.forEach(function(X){return Fa(X,o,h)}),b.fallbackAbortableTasks.clear(),vl(o,b,r.row,y);b.status=4,y=cn(o,h,C),b.status=4,b.errorDigest=y,Ha(o,b),b.parentFlushed&&o.clientRenderedBoundaries.push(b)}b.pendingTasks--,y=b.row,y!==null&&--y.pendingTasks===0&&Gn(o,y),b.fallbackAbortableTasks.forEach(function(X){return Fa(X,o,h)}),b.fallbackAbortableTasks.clear()}r=r.row,r!==null&&--r.pendingTasks===0&&Gn(o,r),o.allPendingTasks--,o.allPendingTasks===0&&_i(o)}function ur(r,o){try{var h=r.renderState,b=h.onHeaders;if(b){var y=h.headers;if(y){h.headers=null;var C=y.preconnects;if(y.fontPreloads&&(C&&(C+=", "),C+=y.fontPreloads),y.highImagePreloads&&(C&&(C+=", "),C+=y.highImagePreloads),!o){var z=h.styles.values(),X=z.next();e:for(;0<y.remainingCapacity&&!X.done;X=z.next())for(var B=X.value.sheets.values(),I=B.next();0<y.remainingCapacity&&!I.done;I=B.next()){var ee=I.value,ae=ee.props,xe=ae.href,Se=ee.props,Le=An(Se.href,"style",{crossOrigin:Se.crossOrigin,integrity:Se.integrity,nonce:Se.nonce,type:Se.type,fetchPriority:Se.fetchPriority,referrerPolicy:Se.referrerPolicy,media:Se.media});if(0<=(y.remainingCapacity-=Le.length+2))h.resets.style[xe]=xl,C&&(C+=", "),C+=Le,h.resets.style[xe]=typeof ae.crossOrigin=="string"||typeof ae.integrity=="string"?[ae.crossOrigin,ae.integrity]:xl;else break e}}b(C?{Link:C}:{})}}}catch(tt){cn(r,tt,{})}}function so(r){r.trackedPostpones===null&&ur(r,!0),r.trackedPostpones===null&&Nl(r),r.onShellError=ie,r=r.onShellReady,r()}function _i(r){ur(r,r.trackedPostpones===null?!0:r.completedRootSegment===null||r.completedRootSegment.status!==5),Nl(r),r=r.onAllReady,r()}function Jl(r,o){if(o.chunks.length===0&&o.children.length===1&&o.children[0].boundary===null&&o.children[0].id===-1){var h=o.children[0];h.id=o.id,h.parentFlushed=!0,h.status!==1&&h.status!==3&&h.status!==4||Jl(r,h)}else r.completedSegments.push(o)}function al(r,o,h){if(se!==null){h=h.chunks;for(var b=0,y=0;y<h.length;y++)b+=h[y].byteLength;o===null?r.byteSize+=b:o.byteSize+=b}}function vl(r,o,h,b){if(h!==null&&(--h.pendingTasks===0?Gn(r,h):h.together&&co(r,h)),r.allPendingTasks--,o===null){if(b!==null&&b.parentFlushed){if(r.completedRootSegment!==null)throw Error(f(389));r.completedRootSegment=b}r.pendingRootTasks--,r.pendingRootTasks===0&&so(r)}else if(o.pendingTasks--,o.status!==4)if(o.pendingTasks===0){if(o.status===0&&(o.status=1),b!==null&&b.parentFlushed&&(b.status===1||b.status===3)&&Jl(o,b),o.parentFlushed&&r.completedBoundaries.push(o),o.status===1)h=o.row,h!==null&&kr(h.hoistables,o.contentState),Sl(r,o)||(o.fallbackAbortableTasks.forEach(Ua,r),o.fallbackAbortableTasks.clear(),h!==null&&--h.pendingTasks===0&&Gn(r,h)),r.pendingRootTasks===0&&r.trackedPostpones===null&&o.contentPreamble!==null&&Nl(r);else if(o.status===5&&(o=o.row,o!==null)){if(r.trackedPostpones!==null){h=r.trackedPostpones;var y=o.next;if(y!==null&&(b=y.boundaries,b!==null))for(y.boundaries=null,y=0;y<b.length;y++){var C=b[y];mc(r,h,C),vl(r,C,null,null)}}--o.pendingTasks===0&&Gn(r,o)}}else b===null||!b.parentFlushed||b.status!==1&&b.status!==3||(Jl(o,b),o.completedSegments.length===1&&o.parentFlushed&&r.partialBoundaries.push(o)),o=o.row,o!==null&&o.together&&co(r,o);r.allPendingTasks===0&&_i(r)}function yc(r){if(r.status!==14&&r.status!==13){var o=Un,h=ma.H;ma.H=vc;var b=ma.A;ma.A=Lt;var y=Ot;Ot=r;var C=nn;nn=r.resumableState;try{var z=r.pingedTasks,X;for(X=0;X<z.length;X++){var B=z[X],I=r,ee=B.blockedSegment;if(ee===null){var ae=I;if(B.replay.pendingTasks!==0){m(B.context);try{if(typeof B.replay.slots=="number"?Tl(ae,B,B.replay.slots,B.node,B.childIndex):Ti(ae,B),B.replay.pendingTasks===1&&0<B.replay.nodes.length)throw Error(f(488));B.replay.pendingTasks--,B.abortSet.delete(B),vl(ae,B.blockedBoundary,B.row,null)}catch(wn){$n();var xe=wn===Ce?je():wn;if(typeof xe=="object"&&xe!==null&&typeof xe.then=="function"){var Se=B.ping;xe.then(Se,Se),B.thenableState=wn===Ce?tn():null}else{B.replay.pendingTasks--,B.abortSet.delete(B);var Le=Ct(B.componentStack);I=void 0;var tt=ae,Ke=B.blockedBoundary,Me=ae.status===12?ae.fatalError:xe,Be=B.replay.nodes,ct=B.replay.slots;I=cn(tt,Me,Le),cr(tt,Ke,Be,ct,Me,I),ae.pendingRootTasks--,ae.pendingRootTasks===0&&so(ae),ae.allPendingTasks--,ae.allPendingTasks===0&&_i(ae)}}finally{}}}else if(ae=void 0,tt=ee,tt.status===0){tt.status=6,m(B.context);var On=tt.children.length,zn=tt.chunks.length;try{Ti(I,B),tt.lastPushedText&&tt.textEmbedded&&tt.chunks.push(Pl),B.abortSet.delete(B),tt.status=1,al(I,B.blockedBoundary,tt),vl(I,B.blockedBoundary,B.row,tt)}catch(wn){$n(),tt.children.length=On,tt.chunks.length=zn;var Fe=wn===Ce?je():I.status===12?I.fatalError:wn;if(I.status===12&&I.trackedPostpones!==null){var vn=I.trackedPostpones,Bt=Ct(B.componentStack);B.abortSet.delete(B),cn(I,Fe,Bt),uo(I,vn,B,tt),vl(I,B.blockedBoundary,B.row,tt)}else if(typeof Fe=="object"&&Fe!==null&&typeof Fe.then=="function"){tt.status=0,B.thenableState=wn===Ce?tn():null;var un=B.ping;Fe.then(un,un)}else{var Ya=Ct(B.componentStack);B.abortSet.delete(B),tt.status=4;var qe=B.blockedBoundary,ua=B.row;if(ua!==null&&--ua.pendingTasks===0&&Gn(I,ua),I.allPendingTasks--,ae=cn(I,Fe,Ya),qe===null)Nr(I,Fe);else if(qe.pendingTasks--,qe.status!==4){qe.status=4,qe.errorDigest=ae,Ha(I,qe);var Hl=qe.row;Hl!==null&&--Hl.pendingTasks===0&&Gn(I,Hl),qe.parentFlushed&&I.clientRenderedBoundaries.push(qe),I.pendingRootTasks===0&&I.trackedPostpones===null&&qe.contentPreamble!==null&&Nl(I)}I.allPendingTasks===0&&_i(I)}}finally{}}}z.splice(0,X),r.destination!==null&&Ur(r,r.destination)}catch(wn){cn(r,wn,{}),Nr(r,wn)}finally{nn=C,ma.H=h,ma.A=b,h===vc&&m(o),Ot=y}}}function Rl(r,o,h){o.preambleChildren.length&&h.push(o.preambleChildren);for(var b=!1,y=0;y<o.children.length;y++)b=Br(r,o.children[y],h)||b;return b}function Br(r,o,h){var b=o.boundary;if(b===null)return Rl(r,o,h);var y=b.contentPreamble,C=b.fallbackPreamble;if(y===null||C===null)return!1;switch(b.status){case 1:if(Ki(r.renderState,y),r.byteSize+=b.byteSize,o=b.completedSegments[0],!o)throw Error(f(391));return Rl(r,o,h);case 5:if(r.trackedPostpones!==null)return!0;case 4:if(o.status===1)return Ki(r.renderState,C),Rl(r,o,h);default:return!0}}function Nl(r){if(r.completedRootSegment&&r.completedPreambleSegments===null){var o=[],h=r.byteSize,b=Br(r,r.completedRootSegment,o),y=r.renderState.preamble;b===!1||y.headChunks&&y.bodyChunks?r.completedPreambleSegments=o:r.byteSize=h}}function Kl(r,o,h,b){switch(h.parentFlushed=!0,h.status){case 0:h.id=r.nextSegmentId++;case 5:return b=h.id,h.lastPushedText=!1,h.textEmbedded=!1,r=r.renderState,D(o,cu),D(o,r.placeholderPrefix),r=W(b.toString(16)),D(o,r),J(o,ui);case 1:h.status=2;var y=!0,C=h.chunks,z=0;h=h.children;for(var X=0;X<h.length;X++){for(y=h[X];z<y.index;z++)D(o,C[z]);y=Hr(r,o,y,b)}for(;z<C.length-1;z++)D(o,C[z]);return z<C.length&&(y=J(o,C[z])),y;case 3:return!0;default:throw Error(f(390))}}var Ll=0;function Hr(r,o,h,b){var y=h.boundary;if(y===null)return Kl(r,o,h,b);if(y.parentFlushed=!0,y.status===4){var C=y.row;C!==null&&--C.pendingTasks===0&&Gn(r,C),y=y.errorDigest,J(o,jn),D(o,Ra),y&&(D(o,fi),D(o,W(Ue(y))),D(o,si)),J(o,di),Kl(r,o,h,b)}else if(y.status!==1)y.status===0&&(y.rootSegmentID=r.nextSegmentId++),0<y.completedSegments.length&&r.partialBoundaries.push(y),Sr(o,r.renderState,y.rootSegmentID),b&&kr(b,y.fallbackState),Kl(r,o,h,b);else if(!jl&&Sl(r,y)&&(Ll+y.byteSize>r.progressiveChunkSize||aa(y.contentState)))y.rootSegmentID=r.nextSegmentId++,r.completedBoundaries.push(y),Sr(o,r.renderState,y.rootSegmentID),Kl(r,o,h,b);else{if(Ll+=y.byteSize,b&&kr(b,y.contentState),h=y.row,h!==null&&Sl(r,y)&&--h.pendingTasks===0&&Gn(r,h),J(o,ns),h=y.completedSegments,h.length!==1)throw Error(f(391));Hr(r,o,h[0],b)}return J(o,Hn)}function rl(r,o,h,b){return gi(o,r.renderState,h.parentFormatContext,h.id),Hr(r,o,h,b),eo(o,h.parentFormatContext)}function pc(r,o,h){Ll=h.byteSize;for(var b=h.completedSegments,y=0;y<b.length;y++)oa(r,o,h,b[y]);b.length=0,b=h.row,b!==null&&Sl(r,h)&&--b.pendingTasks===0&&Gn(r,b),la(o,h.contentState,r.renderState),b=r.resumableState,r=r.renderState,y=h.rootSegmentID,h=h.contentState;var C=r.stylesToHoist;return r.stylesToHoist=!1,D(o,r.startInlineScript),D(o,St),C?((b.instructions&4)===0&&(b.instructions|=4,D(o,bi)),(b.instructions&2)===0&&(b.instructions|=2,D(o,to)),(b.instructions&8)===0?(b.instructions|=8,D(o,Ws)):D(o,rs)):((b.instructions&2)===0&&(b.instructions|=2,D(o,to)),D(o,as)),b=W(y.toString(16)),D(o,r.boundaryPrefix),D(o,b),D(o,Jo),D(o,r.segmentPrefix),D(o,b),C?(D(o,Js),hn(o,h)):D(o,Ko),h=J(o,is),$a(o,r)&&h}function oa(r,o,h,b){if(b.status===2)return!0;var y=h.contentState,C=b.id;if(C===-1){if((b.id=h.rootSegmentID)===-1)throw Error(f(392));return rl(r,o,b,y)}return C===h.rootSegmentID?rl(r,o,b,y):(rl(r,o,b,y),h=r.resumableState,r=r.renderState,D(o,r.startInlineScript),D(o,St),(h.instructions&1)===0?(h.instructions|=1,D(o,ls)):D(o,Zs),D(o,r.segmentPrefix),C=W(C.toString(16)),D(o,C),D(o,Vs),D(o,r.placeholderPrefix),D(o,C),o=J(o,Qs),o)}var jl=!1;function Ur(r,o){Ge=new Uint8Array(2048),Ve=0;try{if(!(0<r.pendingRootTasks)){var h,b=r.completedRootSegment;if(b!==null){if(b.status===5)return;var y=r.completedPreambleSegments;if(y===null)return;Ll=r.byteSize;var C=r.resumableState,z=r.renderState,X=z.preamble,B=X.htmlChunks,I=X.headChunks,ee;if(B){for(ee=0;ee<B.length;ee++)D(o,B[ee]);if(I)for(ee=0;ee<I.length;ee++)D(o,I[ee]);else D(o,Wt("head")),D(o,St)}else if(I)for(ee=0;ee<I.length;ee++)D(o,I[ee]);var ae=z.charsetChunks;for(ee=0;ee<ae.length;ee++)D(o,ae[ee]);ae.length=0,z.preconnects.forEach(Dt,o),z.preconnects.clear();var xe=z.viewportChunks;for(ee=0;ee<xe.length;ee++)D(o,xe[ee]);xe.length=0,z.fontPreloads.forEach(Dt,o),z.fontPreloads.clear(),z.highImagePreloads.forEach(Dt,o),z.highImagePreloads.clear(),gr=z,z.styles.forEach(lc,o),gr=null;var Se=z.importMapChunks;for(ee=0;ee<Se.length;ee++)D(o,Se[ee]);Se.length=0,z.bootstrapScripts.forEach(Dt,o),z.scripts.forEach(Dt,o),z.scripts.clear(),z.bulkPreloads.forEach(Dt,o),z.bulkPreloads.clear(),B||I||(C.instructions|=32);var Le=z.hoistableChunks;for(ee=0;ee<Le.length;ee++)D(o,Le[ee]);for(C=Le.length=0;C<y.length;C++){var tt=y[C];for(z=0;z<tt.length;z++)Hr(r,o,tt[z],null)}var Ke=r.renderState.preamble,Me=Ke.headChunks;(Ke.htmlChunks||Me)&&D(o,Ca("head"));var Be=Ke.bodyChunks;if(Be)for(y=0;y<Be.length;y++)D(o,Be[y]);Hr(r,o,b,null),r.completedRootSegment=null;var ct=r.renderState;if(r.allPendingTasks!==0||r.clientRenderedBoundaries.length!==0||r.completedBoundaries.length!==0||r.trackedPostpones!==null&&(r.trackedPostpones.rootNodes.length!==0||r.trackedPostpones.rootSlots!==null)){var On=r.resumableState;if((On.instructions&64)===0){if(On.instructions|=64,D(o,ct.startInlineScript),(On.instructions&32)===0){On.instructions|=32;var zn="_"+On.idPrefix+"R_";D(o,lo),D(o,W(Ue(zn))),D(o,Ht)}D(o,St),D(o,Ta),J(o,gt)}}$a(o,ct)}var Fe=r.renderState;b=0;var vn=Fe.viewportChunks;for(b=0;b<vn.length;b++)D(o,vn[b]);vn.length=0,Fe.preconnects.forEach(Dt,o),Fe.preconnects.clear(),Fe.fontPreloads.forEach(Dt,o),Fe.fontPreloads.clear(),Fe.highImagePreloads.forEach(Dt,o),Fe.highImagePreloads.clear(),Fe.styles.forEach(ac,o),Fe.scripts.forEach(Dt,o),Fe.scripts.clear(),Fe.bulkPreloads.forEach(Dt,o),Fe.bulkPreloads.clear();var Bt=Fe.hoistableChunks;for(b=0;b<Bt.length;b++)D(o,Bt[b]);Bt.length=0;var un=r.clientRenderedBoundaries;for(h=0;h<un.length;h++){var Ya=un[h];Fe=o;var qe=r.resumableState,ua=r.renderState,Hl=Ya.rootSegmentID,wn=Ya.errorDigest;D(Fe,ua.startInlineScript),D(Fe,St),(qe.instructions&4)===0?(qe.instructions|=4,D(Fe,su)):D(Fe,jo),D(Fe,ua.boundaryPrefix),D(Fe,W(Hl.toString(16))),D(Fe,qo),wn&&(D(Fe,mi),D(Fe,W(os(wn||""))));var Al=J(Fe,Ks);if(!Al){r.destination=null,h++,un.splice(0,h);return}}un.splice(0,h);var fo=r.completedBoundaries;for(h=0;h<fo.length;h++)if(!pc(r,o,fo[h])){r.destination=null,h++,fo.splice(0,h);return}fo.splice(0,h),we(o),Ge=new Uint8Array(2048),Ve=0,jl=!0;var Yr=r.partialBoundaries;for(h=0;h<Yr.length;h++){var Pa=Yr[h];e:{un=r,Ya=o,Ll=Pa.byteSize;var Pr=Pa.completedSegments;for(Al=0;Al<Pr.length;Al++)if(!oa(un,Ya,Pa,Pr[Al])){Al++,Pr.splice(0,Al);var Dn=!1;break e}Pr.splice(0,Al);var Tt=Pa.row;Tt!==null&&Tt.together&&Pa.pendingTasks===1&&(Tt.pendingTasks===1?gu(un,Tt,Tt.hoistables):Tt.pendingTasks--),Dn=la(Ya,Pa.contentState,un.renderState)}if(!Dn){r.destination=null,h++,Yr.splice(0,h);return}}Yr.splice(0,h),jl=!1;var Ga=r.completedBoundaries;for(h=0;h<Ga.length;h++)if(!pc(r,o,Ga[h])){r.destination=null,h++,Ga.splice(0,h);return}Ga.splice(0,h)}}finally{jl=!1,r.allPendingTasks===0&&r.clientRenderedBoundaries.length===0&&r.completedBoundaries.length===0?(r.flushScheduled=!1,h=r.resumableState,h.hasBody&&D(o,Ca("body")),h.hasHtml&&D(o,Ca("html")),we(o),r.status=14,o.close(),r.destination=null):we(o)}}function gl(r){r.flushScheduled=r.destination!==null,st(function(){return yc(r)}),He(function(){r.status===10&&(r.status=11),r.trackedPostpones===null&&ur(r,r.pendingRootTasks===0)})}function Xn(r){r.flushScheduled===!1&&r.pingedTasks.length===0&&r.destination!==null&&(r.flushScheduled=!0,He(function(){var o=r.destination;o?Ur(r,o):r.flushScheduled=!1}))}function Bl(r,o){if(r.status===13)r.status=14,Ae(o,r.fatalError);else if(r.status!==14&&r.destination===null){r.destination=o;try{Ur(r,o)}catch(h){cn(r,h,{}),Nr(r,h)}}}function bl(r,o){(r.status===11||r.status===10)&&(r.status=12);try{var h=r.abortableTasks;if(0<h.size){var b=o===void 0?Error(f(432)):typeof o=="object"&&o!==null&&typeof o.then=="function"?Error(f(530)):o;r.fatalError=b,h.forEach(function(y){return Fa(y,r,b)}),h.clear()}r.destination!==null&&Ur(r,r.destination)}catch(y){cn(r,y,{}),Nr(r,y)}}function Mi(r,o,h){if(o===null)h.rootNodes.push(r);else{var b=h.workingMap,y=b.get(o);y===void 0&&(y=[o[1],o[2],[],null],b.set(o,y),Mi(y,o[0],h)),y[2].push(r)}}function Fr(r){var o=r.trackedPostpones;if(o===null||o.rootNodes.length===0&&o.rootSlots===null)return r.trackedPostpones=null;if(r.completedRootSegment===null||r.completedRootSegment.status!==5&&r.completedPreambleSegments!==null){var h=r.nextSegmentId,b=o.rootSlots,y=r.resumableState;y.bootstrapScriptContent=void 0,y.bootstrapScripts=void 0,y.bootstrapModules=void 0}else{h=0,b=-1,y=r.resumableState;var C=r.renderState;y.nextFormID=0,y.hasBody=!1,y.hasHtml=!1,y.unknownResources={font:C.resets.font},y.dnsResources=C.resets.dns,y.connectResources=C.resets.connect,y.imageResources=C.resets.image,y.styleResources=C.resets.style,y.scriptResources={},y.moduleUnknownResources={},y.moduleScriptResources={},y.instructions=0}return{nextSegmentId:h,rootFormatContext:r.rootFormatContext,progressiveChunkSize:r.progressiveChunkSize,resumableState:r.resumableState,replayNodes:o.rootNodes,replaySlots:b}}function ca(){var r=a.version;if(r!=="19.2.4")throw Error(f(527,r,"19.2.4"))}return ca(),ca(),tu.prerender=function(r,o){return new Promise(function(h,b){var y=o?o.onHeaders:void 0,C;y&&(C=function(ee){y(new Headers(ee))});var z=au(o?o.identifierPrefix:void 0,o?o.unstable_externalRuntimeSrc:void 0,o?o.bootstrapScriptContent:void 0,o?o.bootstrapScripts:void 0,o?o.bootstrapModules:void 0),X=Na(r,z,Go(z,void 0,o?o.unstable_externalRuntimeSrc:void 0,o?o.importMap:void 0,C,o?o.maxHeadersLength:void 0),li(o?o.namespaceURI:void 0),o?o.progressiveChunkSize:void 0,o?o.onError:void 0,function(){var ee=new ReadableStream({type:"bytes",pull:function(ae){Bl(X,ae)},cancel:function(ae){X.destination=null,bl(X,ae)}},{highWaterMark:0});ee={postponed:Fr(X),prelude:ee},h(ee)},void 0,void 0,b,o?o.onPostpone:void 0);if(o&&o.signal){var B=o.signal;if(B.aborted)bl(X,B.reason);else{var I=function(){bl(X,B.reason),B.removeEventListener("abort",I)};B.addEventListener("abort",I)}}gl(X)})},tu.renderToReadableStream=function(r,o){return new Promise(function(h,b){var y,C,z=new Promise(function(Se,Le){C=Se,y=Le}),X=o?o.onHeaders:void 0,B;X&&(B=function(Se){X(new Headers(Se))});var I=au(o?o.identifierPrefix:void 0,o?o.unstable_externalRuntimeSrc:void 0,o?o.bootstrapScriptContent:void 0,o?o.bootstrapScripts:void 0,o?o.bootstrapModules:void 0),ee=or(r,I,Go(I,o?o.nonce:void 0,o?o.unstable_externalRuntimeSrc:void 0,o?o.importMap:void 0,B,o?o.maxHeadersLength:void 0),li(o?o.namespaceURI:void 0),o?o.progressiveChunkSize:void 0,o?o.onError:void 0,C,function(){var Se=new ReadableStream({type:"bytes",pull:function(Le){Bl(ee,Le)},cancel:function(Le){ee.destination=null,bl(ee,Le)}},{highWaterMark:0});Se.allReady=z,h(Se)},function(Se){z.catch(function(){}),b(Se)},y,o?o.onPostpone:void 0,o?o.formState:void 0);if(o&&o.signal){var ae=o.signal;if(ae.aborted)bl(ee,ae.reason);else{var xe=function(){bl(ee,ae.reason),ae.removeEventListener("abort",xe)};ae.addEventListener("abort",xe)}}gl(ee)})},tu.resume=function(r,o,h){return new Promise(function(b,y){var C,z,X=new Promise(function(ae,xe){z=ae,C=xe}),B=Ql(r,o,Go(o.resumableState,h?h.nonce:void 0,void 0,void 0,void 0,void 0),h?h.onError:void 0,z,function(){var ae=new ReadableStream({type:"bytes",pull:function(xe){Bl(B,xe)},cancel:function(xe){B.destination=null,bl(B,xe)}},{highWaterMark:0});ae.allReady=X,b(ae)},function(ae){X.catch(function(){}),y(ae)},C,h?h.onPostpone:void 0);if(h&&h.signal){var I=h.signal;if(I.aborted)bl(B,I.reason);else{var ee=function(){bl(B,I.reason),I.removeEventListener("abort",ee)};I.addEventListener("abort",ee)}}gl(B)})},tu.resumeAndPrerender=function(r,o,h){return new Promise(function(b,y){var C=La(r,o,Go(o.resumableState,void 0,void 0,void 0,void 0,void 0),h?h.onError:void 0,function(){var B=new ReadableStream({type:"bytes",pull:function(I){Bl(C,I)},cancel:function(I){C.destination=null,bl(C,I)}},{highWaterMark:0});B={postponed:Fr(C),prelude:B},b(B)},void 0,void 0,y,h?h.onPostpone:void 0);if(h&&h.signal){var z=h.signal;if(z.aborted)bl(C,z.reason);else{var X=function(){bl(C,z.reason),z.removeEventListener("abort",X)};z.addEventListener("abort",X)}}gl(C)})},tu.version="19.2.4",tu}var z0;function sS(){if(z0)return eu;z0=1;var a,s;return a=cS(),s=uS(),eu.version=a.version,eu.renderToString=a.renderToString,eu.renderToStaticMarkup=a.renderToStaticMarkup,eu.renderToReadableStream=s.renderToReadableStream,eu.resume=s.resume,eu}var fS=sS();const dS=[{id:"overview",label:"\uAC1C\uC694",icon:dd},{id:"daily",label:"\uC77C\uBCC4",icon:fd},{id:"urls",label:"URL",icon:hd},{id:"queries",label:"\uAC80\uC0C9\uC5B4",icon:Ku},{id:"pattern",label:"\uC694\uC77C",icon:fd},{id:"crawl",label:"\uD06C\uB864",icon:Wb},{id:"backlink",label:"\uBC31\uB9C1\uD06C",icon:hd},{id:"diagnosis",label:"\uBA54\uD0C0",icon:$b},{id:"insight",label:"\uC778\uC0AC\uC774\uD2B8",icon:$b}];function D0(a){return a?a.replace(/^https?:\/\//,""):"사이트 선택"}function hS(a,s){const f=s.map(p=>p.site).filter(p=>a.includes(p)),v=new Set(f);return[...f,...a.filter(p=>!v.has(p))]}function vS(a){return a.replace(/<\/style/gi,"<\\/style")}function gS(a){return a.replace(/<\/script/gi,"<\\/script")}function bS(a){const s=f=>String(f).padStart(2,"0");return a.getFullYear()+s(a.getMonth()+1)+s(a.getDate())+"-"+s(a.getHours())+s(a.getMinutes())+s(a.getSeconds())}function mS(a){return a.replace(/^https?:\/\//,"").replace(/[\\/:*?"<>|]+/g,"-").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").slice(0,80)}function yS(a){const s=(a||"").trim(),f=s.includes("@")?s.split("@")[0]:s;return mS(f||"unknown")}function pS(a){return a?new Intl.DateTimeFormat("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(a):"없음"}function xS(a){if(a==null)return"없음";if(a<=0)return"만료";const s=Math.max(1,Math.ceil(a/6e4)),f=Math.floor(s/1440),v=Math.floor(s%1440/60),p=s%60;return f>0?`${f}일 ${v}시간`:v>0?`${v}시간 ${p}분`:`${p}분`}function wS({state:a,rows:s}){const f=hS(a.allSites,s);return Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"sadvx-shell","data-sadvx":"snapshot-shell",children:[Y.jsxs("div",{className:"px-3.5 pt-2.5 pb-2.5",children:[Y.jsxs("div",{className:"grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-2 gap-y-1.5",children:[Y.jsx("div",{className:"min-w-0",children:Y.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[Y.jsx("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-sky-400/18 bg-white/[0.03] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",children:Y.jsx(Ku,{className:"h-4 w-4"})}),Y.jsxs("div",{className:"truncate text-[16px] font-semibold tracking-[-0.025em] text-slate-50",children:["Search",Y.jsx("span",{className:"text-emerald-400",children:"Advisor"})]}),a.accountLabel?Y.jsx("div",{className:"max-w-[150px] shrink truncate rounded-full border border-sky-400/15 bg-sky-400/[0.08] px-2 py-1 text-[9px] font-semibold leading-none text-sky-100",children:a.accountLabel}):null]})}),Y.jsxs("div",{className:"flex shrink-0 items-center justify-end gap-1",children:[Y.jsx("button",{type:"button","data-sadvx-action":"refresh",className:"inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/8 bg-slate-950/60 text-sm font-medium text-slate-300 transition-colors outline-none hover:border-sky-400/25 hover:text-slate-50",children:Y.jsx(qb,{className:"h-4 w-4"})}),Y.jsxs("button",{type:"button","data-sadvx-action":"save",className:"inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/8 bg-slate-950/60 px-2.5 text-xs font-medium text-slate-300 transition-colors outline-none hover:border-sky-400/25 hover:text-slate-50",children:[Y.jsx(Kb,{className:"h-3.5 w-3.5"}),"HTML"]}),Y.jsx("button",{type:"button","data-sadvx-action":"close",className:"inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/8 bg-slate-950/60 text-sm font-medium text-slate-300 transition-colors outline-none hover:border-sky-400/25 hover:text-slate-50",children:Y.jsx(e0,{className:"h-4 w-4"})})]}),Y.jsxs("div",{className:"col-span-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-white/6 pb-2 text-[10px] leading-4 text-slate-400","data-sadvx":"status-line",children:[Y.jsx("span",{className:"min-w-0 truncate","data-sadvx":"status-text",children:a.curMode==="all"?Y.jsxs("span",{children:[a.allSites.length,"개 사이트 등록됨"]}):Y.jsx("span",{children:D0(a.curSite)})}),Y.jsxs("span",{className:"ml-auto flex flex-wrap items-center justify-end gap-1.5 text-[9px] leading-none text-slate-500",children:[Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",children:["v ",a.runtimeVersion||"snapshot"]}),Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",title:a.cacheMeta?`${a.cacheMeta.label} 기준 최근 갱신`:"캐시 기준 없음",children:["캐시저장 ",pS(a.cacheMeta?.updatedAt??null)]}),Y.jsxs("span",{className:"rounded-full border border-white/8 bg-white/[0.03] px-2 py-1",title:a.cacheMeta?`${a.cacheMeta.label} 기준 저장 시점 잔여 시간`:"캐시 기준 없음",children:["재조회까지 ",xS(a.cacheMeta?.remainingMs??null)]})]})]})]}),Y.jsxs("div",{className:"mt-2.5 grid grid-cols-2 gap-1.5",children:[Y.jsxs("button",{type:"button","data-sadvx-mode":"all","data-active":a.curMode==="all",className:"inline-flex h-9.5 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/8 bg-slate-950/60 px-3 text-sm font-semibold tracking-[-0.01em] text-slate-300 transition-colors outline-none hover:border-sky-400/25 hover:text-slate-50 data-[active=true]:border-sky-400/35 data-[active=true]:bg-sky-400/[0.08] data-[active=true]:text-sky-50",children:[Y.jsx(jb,{className:"h-3.5 w-3.5"}),"전체현황"]}),Y.jsxs("button",{type:"button","data-sadvx-mode":"site","data-active":a.curMode==="site",className:"inline-flex h-9.5 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/8 bg-slate-950/60 px-3 text-sm font-semibold tracking-[-0.01em] text-slate-300 transition-colors outline-none hover:border-sky-400/25 hover:text-slate-50 data-[active=true]:border-sky-400/35 data-[active=true]:bg-sky-400/[0.08] data-[active=true]:text-sky-50",children:[Y.jsx(dd,{className:"h-3.5 w-3.5"}),"사이트별"]})]}),Y.jsxs("div",{className:"relative mt-3 data-[mode=all]:hidden","data-sadvx":"site-section","data-mode":a.curMode,style:{position:"relative"},children:[Y.jsxs("button",{type:"button","data-sadvx":"site-trigger",className:"flex h-11 w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 text-left text-sm text-slate-100 transition-colors hover:border-sky-400/30 focus:outline-none",children:[Y.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"}),Y.jsx("span",{className:"min-w-0 flex-1 truncate font-medium","data-sadvx":"current-site",children:D0(a.curSite)}),Y.jsx(Jb,{className:"h-4 w-4 text-slate-400"})]}),Y.jsxs("div",{className:"absolute left-0 right-0 top-[calc(100%+8px)] hidden rounded-2xl border border-white/10 bg-slate-950/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur","data-sadvx":"site-panel","data-open":"false",style:{display:"none",position:"absolute",left:"0",right:"0",top:"calc(100% + 8px)",zIndex:10000002},children:[Y.jsxs("div",{className:"border-b border-white/8 px-2 pb-2",children:[Y.jsxs("div",{className:"relative",children:[Y.jsx(Ku,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"}),Y.jsx("input",{"data-sadvx":"site-search",placeholder:"사이트 검색...",className:"h-10 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-9 pr-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-sky-400/30"})]}),Y.jsxs("div",{className:"mt-2 text-[10px] font-medium tracking-[0.14em] text-slate-500","data-sadvx":"site-summary",children:["전체 ",f.length,"개 · 클릭순 정렬"]})]}),Y.jsx("div",{className:"mt-2 max-h-[280px] space-y-1 overflow-auto pr-1",children:f.map(v=>{const p=s.find(S=>S.site===v);return Y.jsxs("button",{type:"button","data-sadvx-site":v,"data-active":a.curSite===v,className:"flex w-full items-center gap-3 rounded-xl border border-transparent bg-white/[0.02] px-3 py-2.5 text-left transition-colors hover:border-white/10 hover:bg-white/[0.05] data-[active=true]:border-sky-400/35 data-[active=true]:bg-sky-400/[0.08]",children:[Y.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-slate-500"}),Y.jsxs("div",{className:"min-w-0 flex-1",children:[Y.jsx("div",{className:"truncate text-[12px] font-medium text-slate-100",children:v.replace(/^https?:\/\//,"")}),Y.jsx("div",{className:"truncate text-[10px] text-slate-500",children:v})]}),Y.jsx("div",{className:"shrink-0 text-[11px] font-semibold text-emerald-400",children:p?`${p.totalC.toLocaleString()} 클릭`:"-"})]},v)})})]})]})]}),Y.jsx("div",{className:"border-t border-white/6 bg-black/10 px-2.5 pb-2 pt-1.5 data-[mode=all]:hidden","data-sadvx":"tabbar","data-mode":a.curMode,children:Y.jsx("div",{className:"flex flex-wrap items-center justify-center gap-1.5",children:dS.map(v=>{const p=v.icon;return Y.jsxs("button",{type:"button","data-sadvx-tab":v.id,"data-state":a.curTab===v.id?"active":"inactive",className:"inline-flex h-8.5 items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-[11px] font-medium tracking-[-0.01em] text-slate-400 outline-none transition-colors hover:bg-white/[0.04] hover:text-slate-100 data-[state=active]:border-sky-400/30 data-[state=active]:bg-sky-400/[0.08] data-[state=active]:text-slate-50",children:[Y.jsx(p,{className:"h-3.5 w-3.5"}),v.label]},v.id)})})})]}),Y.jsx("button",{type:"button",title:"최상단 이동","data-sadvx-action":"top",className:"fixed right-5 bottom-5 z-[10000012] inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-300/45 bg-linear-to-b from-sky-300 to-sky-500 text-slate-950 shadow-[0_14px_32px_rgba(56,189,248,0.35)] backdrop-blur transition-all hover:-translate-y-0.5 hover:from-sky-200 hover:to-sky-400 hover:shadow-[0_18px_38px_rgba(56,189,248,0.42)]",children:Y.jsx(Qb,{className:"h-4 w-4"})})]})}function SS(){return`
(function () {
  function q(selector, root) {
    return (root || document).querySelector(selector);
  }
  function qa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }
  const shellRoot = q('#sadv-react-shell-root');
  if (!shellRoot) return;
  const shell = q('[data-sadvx="snapshot-shell"]', shellRoot);
  if (!shell) return;
  let syncing = false;
  function hiddenMode(mode) {
    return q('#sadv-mode-bar [data-m="' + mode + '"]');
  }
  function hiddenTab(tab) {
    return q('#sadv-tabs [data-t="' + tab + '"]');
  }
  function pickerPanel() {
    return q('[data-sadvx="site-panel"]', shell);
  }
  function closePicker() {
    const panel = pickerPanel();
    if (!panel) return;
    panel.dataset.open = 'false';
    panel.classList.add('hidden');
    panel.style.display = 'none';
    panel.style.pointerEvents = 'none';
    const trigger = q('[data-sadvx="site-trigger"]', shell);
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }
  function openPicker() {
    const panel = pickerPanel();
    if (!panel) return;
    panel.dataset.open = 'true';
    panel.classList.remove('hidden');
    panel.style.display = 'block';
    panel.style.pointerEvents = 'auto';
    const input = q('[data-sadvx="site-search"]', shell);
    const trigger = q('[data-sadvx="site-trigger"]', shell);
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (input) input.focus();
  }
  function syncShell() {
    if (syncing) return;
    syncing = true;
    try {
      const allMode = q('#sadv-mode-bar .sadv-mode.on');
      const mode = allMode ? allMode.getAttribute('data-m') : 'all';
      qa('[data-sadvx-mode]', shell).forEach(function (button) {
        button.dataset.active = button.getAttribute('data-sadvx-mode') === mode ? 'true' : 'false';
      });
      const statusText = q('[data-sadvx="status-text"]', shell);
      const legacyStatus = q('#sadv-site-label span') || q('#sadv-site-label');
      if (statusText && legacyStatus) {
        statusText.textContent = legacyStatus.textContent || '';
      }
      const statusLine = q('[data-sadvx="status-line"]', shell);
      const metaGroup = statusLine ? statusLine.lastElementChild : null;
      const requeryChip = metaGroup ? metaGroup.lastElementChild : null;
      if (requeryChip && requeryChip instanceof HTMLElement) {
        requeryChip.style.display = mode === 'all' ? '' : 'none';
      }
      const siteSection = q('[data-sadvx="site-section"]', shell);
      const tabbar = q('[data-sadvx="tabbar"]', shell);
      if (siteSection) siteSection.dataset.mode = mode;
      if (tabbar) tabbar.dataset.mode = mode;
      const activeTab = q('#sadv-tabs .sadv-t.on');
      const activeTabId = activeTab ? activeTab.getAttribute('data-t') : 'overview';
      qa('[data-sadvx-tab]', shell).forEach(function (button) {
        button.setAttribute(
          'data-state',
          button.getAttribute('data-sadvx-tab') === activeTabId ? 'active' : 'inactive',
        );
      });
      const currentLabel = q('[data-sadvx="current-site"]', shell);
      if (currentLabel && legacyStatus && mode === 'site') {
        currentLabel.textContent = legacyStatus.textContent || '사이트 선택';
      }
      const legacyDotLabel = q('#sadv-combo-label');
      const activeSite = legacyDotLabel ? legacyDotLabel.textContent : '';
      qa('[data-sadvx-site]', shell).forEach(function (button) {
        const site = button.getAttribute('data-sadvx-site') || '';
        button.dataset.active = site.replace(/^https?:\\/\\//, '') === activeSite ? 'true' : 'false';
      });
    } finally {
      syncing = false;
    }
  }
  const observer = new MutationObserver(function () {
    if (syncing) return;
    syncShell();
  });
  ['#sadv-header', '#sadv-mode-bar', '#sadv-site-bar', '#sadv-tabs', '#sadv-bd'].forEach(function (selector) {
    const target = q(selector);
    if (!target) return;
    observer.observe(target, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });
  });
  qa('[data-sadvx-mode]', shell).forEach(function (button) {
    button.addEventListener('click', function () {
      const mode = button.getAttribute('data-sadvx-mode');
      const legacyButton = hiddenMode(mode);
      if (legacyButton) legacyButton.click();
      closePicker();
      syncShell();
    });
  });
  qa('[data-sadvx-tab]', shell).forEach(function (button) {
    button.addEventListener('click', function () {
      const tab = button.getAttribute('data-sadvx-tab');
      const legacyButton = hiddenTab(tab);
      if (legacyButton) legacyButton.click();
      syncShell();
    });
  });
  const trigger = q('[data-sadvx="site-trigger"]', shell);
  if (trigger) {
    trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      const panel = pickerPanel();
      if (!panel) return;
      const isOpen = panel.dataset.open === 'true';
      if (isOpen) closePicker();
      else openPicker();
    });
  }
  const searchInput = q('[data-sadvx="site-search"]', shell);
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = (searchInput.value || '').toLowerCase();
      qa('[data-sadvx-site]', shell).forEach(function (button) {
        const site = button.getAttribute('data-sadvx-site') || '';
        button.style.display = !query || site.toLowerCase().includes(query) ? 'flex' : 'none';
      });
    });
  }
  qa('[data-sadvx-site]', shell).forEach(function (button) {
    button.addEventListener('click', function () {
      const site = button.getAttribute('data-sadvx-site');
      closePicker();
      if (site && typeof setComboSite === 'function') setComboSite(site);
      if (searchInput) searchInput.value = '';
      qa('[data-sadvx-site]', shell).forEach(function (item) {
        item.style.display = 'flex';
      });
      syncShell();
      setTimeout(closePicker, 0);
    });
  });
  const topButton = q('[data-sadvx-action="top"]', shellRoot) || q('[data-sadvx-action="top"]');
  if (topButton) {
    topButton.addEventListener('click', function () {
      const panelBody = q('#sadv-bd');
      if (panelBody) panelBody.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  document.addEventListener('click', function (event) {
    if (!shell.contains(event.target)) closePicker();
  });
  const saveButton = q('[data-sadvx-action="save"]', shell);
  if (saveButton) {
    saveButton.addEventListener('click', function () {
      alert('저장된 HTML 내부에서는 다시 저장할 수 없어요. 원본 패널에서 다시 저장해주세요.');
    });
  }
  const refreshButton = q('[data-sadvx-action="refresh"]', shell);
  if (refreshButton) {
    refreshButton.addEventListener('click', function () {
      alert('저장된 HTML은 정적 스냅샷이에요. 원본 패널에서 새로고침해주세요.');
    });
  }
  const closeButton = q('[data-sadvx-action="close"]', shell);
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      closePicker();
      const panel = q('#sadv-p');
      if (panel) panel.remove();
      const meta = q('.snapshot-meta');
      if (meta) meta.remove();
    });
  }
  syncShell();
})();`}async function k0(a,s={}){const f=document.getElementById("sadv-save-btn"),v=f?.textContent||"HTML",p=S=>{s.onStatus?.(S)};f&&(f.disabled=!0,f.textContent="0/"+a.getState().allSites.length);try{p({label:"HTML 스냅샷 준비 중",detail:"전체 사이트 상세 데이터를 수집하고 있어요.",progress:0,tone:"info"});const S=new Date,E=a.getState(),T=await a.exportSnapshotData((oe,me,de)=>{f&&(f.textContent=oe+"/"+me),p({label:"HTML 스냅샷 준비 중",detail:de&&me>0?`${oe}/${me} · ${de.replace(/^https?:\/\//,"")}`:`${oe}/${me} 사이트 처리 중`,progress:me>0?oe/me:null,tone:"info"})});p({label:"HTML 파일 생성 중",detail:"현재 상태를 독립형 HTML로 정리하고 있어요.",progress:1,tone:"info"});const O=a.buildLegacySnapshotHtml(S,T);if(!O.includes('<div id="sadv-bd">'))throw new Error("snapshot panel not found");const k=`${(document.getElementById("sadv-react-style")||document.getElementById("sadv-react-style-shadow"))?.textContent||""}
#sadv-header,
#sadv-site-bar,
#sadv-tabs {
  display: none !important;
}
#sadv-p,
#sadv-react-shell-root,
.sadvx-shell {
  overflow: visible !important;
}
#sadv-react-shell-root {
  contain: none !important;
  isolation: auto !important;
  position: relative !important;
  z-index: 20 !important;
}
.sadvx-shell,
[data-sadvx="site-section"] {
  position: relative !important;
  z-index: 21 !important;
}
[data-sadvx="site-panel"] {
  z-index: 10000002 !important;
}`,L=fS.renderToStaticMarkup(Y.jsx(wS,{state:{...E,curMode:T.curMode,curSite:T.curSite,curTab:T.curTab,allSites:T.allSites},rows:T.summaryRows}));let U=O;U=U.replace("</head>",`<style id="sadv-react-style">${vS(k)}</style></head>`),U=U.replace('<div id="sadv-bd">',`<div id="sadv-react-shell-root">${L}</div><div id="sadv-bd">`),U=U.replace("</body>",`<script>${gS(SS())}<\/script></body>`);const K=`searchadvisor-${yS(E.accountLabel)}-${bS(S)}.html`,Z=new Blob([U],{type:"text/html;charset=utf-8"}),$=document.createElement("a");$.href=URL.createObjectURL(Z),$.download=K,document.body.appendChild($),$.click(),$.remove(),p({label:"HTML 저장 완료",detail:K,progress:1,tone:"success"}),setTimeout(()=>{URL.revokeObjectURL($.href)},1e3)}catch(S){console.error(S),p({label:"HTML 저장 실패",detail:S instanceof Error?S.message:"알 수 없는 오류",progress:null,tone:"error"}),alert("HTML 저장 중 오류가 발생했어요. 다시 시도해주세요.")}finally{f&&(f.disabled=!1,f.textContent=v)}}let N0=null;const ES=3e4;function L0(){let a=document.getElementById("sadv-activity");return a||(a=document.createElement("div"),a.id="sadv-activity",a.setAttribute("style",["position:fixed","top:16px","left:50%","transform:translateX(-50%)","z-index:10000010","width:min(420px,calc(100vw - 24px))","display:none","pointer-events:none","font-family:Pretendard Variable,SUIT Variable,Apple SD Gothic Neo,Noto Sans KR,sans-serif"].join(";")),a.innerHTML=`
    <div id="sadv-activity-card" style="border:1px solid rgba(64,196,255,.18);border-radius:16px;background:rgba(6,11,20,.96);box-shadow:0 20px 60px rgba(0,0,0,.35);backdrop-filter:blur(14px);padding:12px 14px 11px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <div style="min-width:0">
          <div id="sadv-activity-label" style="font-size:12px;font-weight:800;line-height:1.35;color:#f3fbff">로딩 중</div>
          <div id="sadv-activity-detail" style="margin-top:3px;font-size:11px;line-height:1.45;color:#7f9cbc"></div>
        </div>
        <div id="sadv-activity-progress-text" style="flex-shrink:0;font-size:11px;font-weight:700;color:#40c4ff"></div>
      </div>
      <div style="margin-top:9px;height:5px;border-radius:999px;background:rgba(255,255,255,.06);overflow:hidden">
        <div id="sadv-activity-bar" style="height:100%;width:22%;border-radius:999px;background:linear-gradient(90deg,#40c4ff,#00e676);transition:width .18s ease"></div>
      </div>
    </div>
  `,document.body.appendChild(a),a)}function nu(a){const s=L0(),f=s.querySelector("#sadv-activity-card"),v=s.querySelector("#sadv-activity-label"),p=s.querySelector("#sadv-activity-detail"),S=s.querySelector("#sadv-activity-bar"),E=s.querySelector("#sadv-activity-progress-text"),T=a.tone||"info",O=T==="error"?"#ff6b6b":T==="success"?"#00e676":"#40c4ff",R=a.progress==null?null:Math.max(.06,Math.min(1,a.progress));f&&(f.style.borderColor=T==="error"?"rgba(255,107,107,.24)":"rgba(64,196,255,.18)"),v&&(v.textContent=a.label),p&&(p.textContent=a.detail||"",p.style.display=a.detail?"block":"none"),E&&(E.textContent=R==null?"":`${Math.round(R*100)}%`,E.style.color=O),S&&(S.style.width=R==null?"22%":`${Math.round(R*100)}%`,S.style.background=T==="error"?"linear-gradient(90deg,#ff8a80,#ff5252)":"linear-gradient(90deg,#40c4ff,#00e676)"),s.style.display="block"}function Uo(a=0){const s=L0();window.setTimeout(()=>{s.style.display="none"},a)}function CS(){let a=document.getElementById("sadv-direct-save-style");a||(a=document.createElement("style"),a.id="sadv-direct-save-style",a.textContent="#sadv-p{display:none !important}html{margin-right:0 !important;transition:none !important}",document.head.appendChild(a))}function Wh(){const a=document.getElementById("sadv-p");a&&(a.style.setProperty("display","none","important"),a.style.setProperty("visibility","hidden","important"),a.style.setProperty("opacity","0","important"),a.style.setProperty("pointer-events","none","important"),a.style.setProperty("background","transparent","important"),a.style.setProperty("border-left-color","transparent","important"),a.style.setProperty("transform","translateX(100%)","important"));const s=document.getElementById("sadv-inj");s&&(s.textContent="html{margin-right:0 !important;transition:none !important;box-sizing:border-box;}"),document.documentElement.style.setProperty("margin-right","0","important"),document.documentElement.style.setProperty("transition","none","important"),document.body.style.setProperty("margin-right","0","important")}function Jh(){document.getElementById("sadv-direct-save-style")?.remove()}function Kh(){window.__SEARCHADVISOR_DIRECT_SAVE__=!1}async function TS(a){if(!a)return!1;if(a.isReady())return!0;await a.waitUntilReady(15e3);const s=a.getState();return Array.isArray(s.allSites)}function B0(a){const s=document.getElementById("sadv-p");if(s){if(a){s.dataset.sadvSaveHidden||(s.dataset.sadvSaveHidden="1",s.dataset.sadvPrevVisibility=s.style.visibility||"",s.dataset.sadvPrevPointerEvents=s.style.pointerEvents||"",s.dataset.sadvPrevBackground=s.style.background||"",s.dataset.sadvPrevBorderLeftColor=s.style.borderLeftColor||""),s.style.visibility="hidden",s.style.pointerEvents="none",s.style.background="transparent",s.style.borderLeftColor="transparent";return}s.dataset.sadvSaveHidden&&(s.style.visibility=s.dataset.sadvPrevVisibility||"",s.style.pointerEvents=s.dataset.sadvPrevPointerEvents||"",s.style.background=s.dataset.sadvPrevBackground||"",s.style.borderLeftColor=s.dataset.sadvPrevBorderLeftColor||"",delete s.dataset.sadvSaveHidden,delete s.dataset.sadvPrevVisibility,delete s.dataset.sadvPrevPointerEvents,delete s.dataset.sadvPrevBackground,delete s.dataset.sadvPrevBorderLeftColor)}}function RS(){const a=document.getElementById("sadv-p"),s=document.getElementById("sadv-bd");if(!a||!s)return null;const f=document.getElementById("sadv-react-shell-root");f&&f.parentElement===a&&f.remove();let v=document.getElementById("sadv-react-shell-host");v||(v=document.createElement("div"),v.id="sadv-react-shell-host",a.insertBefore(v,s)),v.setAttribute("style","display:block !important;width:100% !important;flex-shrink:0;");const p=v.shadowRoot??v.attachShadow({mode:"open"}),S=document.getElementById("sadv-react-style");let E=p.getElementById("sadv-react-style-shadow");E||(E=document.createElement("style"),E.id="sadv-react-style-shadow",p.appendChild(E)),S instanceof HTMLStyleElement&&(E.textContent=S.textContent);let T=p.getElementById("sadv-react-portal-root");T||(T=document.createElement("div"),T.id="sadv-react-portal-root",p.appendChild(T));let O=p.getElementById("sadv-react-shell-root");return O||(O=document.createElement("div"),O.id="sadv-react-shell-root",p.appendChild(O)),{mount:O,portal:T}}const ju=!!window.__SEARCHADVISOR_DIRECT_SAVE__;let Gs=null,qr=null;ju&&(CS(),nu({label:"HTML 즉시 저장 준비 중",detail:"위젯 없이 현재 상태를 바로 저장하고 있어요.",progress:null,tone:"info"}),Gs=window.setTimeout(()=>{qr!=null&&(window.clearInterval(qr),qr=null),Jh(),Kh(),document.getElementById("sadv-p")?.remove(),document.getElementById("sadv-inj")?.remove(),nu({label:"HTML 즉시 저장 시간 초과",detail:"30초 안에 완료되지 않았어요. 로그인 상태와 네트워크를 확인해주세요.",progress:null,tone:"error"}),Uo(4500)},ES));const Ii=oS(),jh=ju?null:RS();if(ju&&(Wh(),qr=window.setInterval(()=>{Wh()},250)),ju&&!Ii&&(Gs!=null&&window.clearTimeout(Gs),qr!=null&&(window.clearInterval(qr),qr=null),Jh(),Kh(),document.getElementById("sadv-p")?.remove(),document.getElementById("sadv-inj")?.remove(),nu({label:"HTML 즉시 저장 실패",detail:"서치어드바이저 로그인 상태와 실행 위치를 확인해주세요.",progress:null,tone:"error"}),Uo(4500)),Ii&&ju)(async()=>{await TS(Ii),Ii.close(),document.getElementById("sadv-p")?.remove(),document.getElementById("sadv-inj")?.remove(),Wh(),await k0(Ii,{onStatus:({label:a,detail:s,progress:f,tone:v})=>{nu({label:a,detail:s,progress:f,tone:v}),v==="success"&&Uo(1400)}})})().catch(a=>{nu({label:"HTML 즉시 저장 실패",detail:a instanceof Error?a.message:"초기 데이터를 준비하지 못했어요.",progress:null,tone:"error"}),Uo(4500)}).finally(()=>{Gs!=null&&window.clearTimeout(Gs),qr!=null&&(window.clearInterval(qr),qr=null),Jh(),Kh(),document.getElementById("sadv-p")?.remove(),document.getElementById("sadv-inj")?.remove(),Uo(1200)});else if(Ii&&jh){const a={...Ii,refresh:async()=>{nu({label:"데이터 새로고침 중",detail:"서치어드바이저 데이터를 다시 불러오고 있어요.",progress:null,tone:"info"}),Ii.refresh(),window.setTimeout(()=>{Uo(400)},1800)},download:async()=>{const s=!ju;s&&B0(!0);try{await k0(Ii,{onStatus:({label:f,detail:v,progress:p,tone:S})=>{nu({label:f,detail:v,progress:p,tone:S}),S==="success"&&Uo(1400)}})}finally{s&&B0(!1)}}};N0=Sy.createRoot(jh.mount),N0.render(Y.jsx(H.StrictMode,{children:Y.jsx(tS,{api:a,portalContainer:jh.portal})})),Uo(250)}})();
