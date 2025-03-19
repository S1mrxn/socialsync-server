
<html class="">
              
<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap" rel="stylesheet">
    
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
      window.FontAwesomeConfig = {
          autoReplaceSvg: 'nest', // Options: 'nest', 'remove', 'replace'
      };
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    
<style>
  * {
    font-family: "Inter", sans-serif;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>

    
<style>
  .highlighted-section {
    outline: 2px solid #3F20FB;
    background-color: rgba(63, 32, 251, 0.1);
  }

  .edit-button {
    position: absolute;
    z-index: 1000;
  }
</style>

    
<style>
   :root {
          /* Base colors */
          --color-base: #ffffff;
          --color-base-50: #f9fafb;
          --color-base-100: #f3f4f6;
          --color-base-200: #e5e7eb;
          --color-base-300: #d1d5db;
          --color-base-400: #9ca3af;
          --color-base-500: #6b7280;
          --color-base-600: #4b5563;  
          --color-base-700: #374151;
          --color-base-800: #1f2937;  
          --color-base-900: #111827;
          --color-base-content: #1f2937;

          /* Primary colors */
          --color-primary: #3b82f6;
          --color-primary-50: #eff6ff;
          --color-primary-100: #dbeafe;
          --color-primary-200: #bfdbfe;
          --color-primary-300: #93c5fd;
          --color-primary-400: #60a5fa;
          --color-primary-500: #3b82f6;
          --color-primary-600: #2563eb;
          --color-primary-700: #1d4ed8;
          --color-primary-800: #1e40af;
          --color-primary-900: #1e3a8a;
          --color-primary-focus: #2563eb;
          --color-primary-content: #ffffff;

          /* Secondary colors */
          --color-secondary: #8b5cf6;
          --color-secondary-50: #f5f3ff;
          --color-secondary-100: #ede9fe;
          --color-secondary-200: #ddd6fe;
          --color-secondary-300: #c4b5fd;
          --color-secondary-400: #a78bfa;
          --color-secondary-500: #8b5cf6;
          --color-secondary-600: #7c3aed;
          --color-secondary-700: #6d28d9;
          --color-secondary-800: #5b21b6;
          --color-secondary-900: #4c1d95;
          --color-secondary-focus: #7c3aed;
          --color-secondary-content: #ffffff;

          /* Accent colors */
          --color-accent: #f472b6;
          --color-accent-50: #fdf2f8;
          --color-accent-100: #fce7f3;
          --color-accent-200: #fbcfe8;
          --color-accent-300: #f9a8d4;
          --color-accent-400: #f472b6;
          --color-accent-500: #ec4899;
          --color-accent-600: #db2777;
          --color-accent-700: #be185d;
          --color-accent-800: #9d174d;
          --color-accent-900: #831843;
          --color-accent-focus: #db2777;
          --color-accent-content: #ffffff;

          /* Neutral colors */
          --color-neutral: #6b7280;
          --color-neutral-50: #f9fafb;
          --color-neutral-100: #f3f4f6;
          --color-neutral-200: #e5e7eb;
          --color-neutral-300: #d1d5db;
          --color-neutral-400: #9ca3af;
          --color-neutral-500: #6b7280;
          --color-neutral-600: #4b5563;
          --color-neutral-700: #374151;
          --color-neutral-800: #1f2937;
          --color-neutral-900: #111827;
          --color-neutral-focus: #4b5563;
          --color-neutral-content: #ffffff;

          /* Info colors */
          --color-info: #3b82f6;
          --color-info-50: #eff6ff;
          --color-info-100: #dbeafe;
          --color-info-200: #bfdbfe;
          --color-info-300: #93c5fd;
          --color-info-400: #60a5fa;
          --color-info-500: #3b82f6;
          --color-info-600: #2563eb;
          --color-info-700: #1d4ed8;
          --color-info-800: #1e40af;
          --color-info-900: #1e3a8a;
          --color-info-focus: #2563eb;
          --color-info-content: #ffffff;

          /* Success colors */
          --color-success: #10b981;
          --color-success-50: #ecfdf5;
          --color-success-100: #d1fae5;
          --color-success-200: #a7f3d0;
          --color-success-300: #6ee7b7;
          --color-success-400: #34d399;
          --color-success-500: #10b981;
          --color-success-600: #059669;
          --color-success-700: #047857;
          --color-success-800: #065f46;
          --color-success-900: #064e3b;
          --color-success-focus: #059669;
          --color-success-content: #ffffff;

          /* Warning colors */
          --color-warning: #f59e0b;
          --color-warning-50: #fffbeb;
          --color-warning-100: #fef3c7;
          --color-warning-200: #fde68a;
          --color-warning-300: #fcd34d;
          --color-warning-400: #fbbf24;
          --color-warning-500: #f59e0b;
          --color-warning-600: #d97706;
          --color-warning-700: #b45309;
          --color-warning-800: #92400e;
          --color-warning-900: #78350f;
          --color-warning-focus: #d97706;
          --color-warning-content: #ffffff;

          /* Error colors */
          --color-error: #ef4444;
          --color-error-50: #fef2f2;
          --color-error-100: #fee2e2;
          --color-error-200: #fecaca;
          --color-error-300: #fca5a5;
          --color-error-400: #f87171;
          --color-error-500: #ef4444;
          --color-error-600: #dc2626;
          --color-error-700: #b91c1c;
          --color-error-800: #991b1b;
          --color-error-900: #7f1d1d;
          --color-error-focus: #dc2626;
          --color-error-content: #ffffff;
        }
</style>

    
<style>
/* Dark theme */
        .dark {
          /* Base colors */
          --color-base: #1f2937;
          --color-base-50: #111827;
          --color-base-100: #1f2937;
          --color-base-200: #374151;
          --color-base-300: #4b5563;
          --color-base-400: #6b7280;
          --color-base-500: #9ca3af;
          --color-base-600: #d1d5db;
          --color-base-700: #e5e7eb;
          --color-base-800: #f3f4f6;
          --color-base-900: #f9fafb;
          --color-base-content: #f9fafb;

          /* Primary colors */
          --color-primary: #60a5fa;
          --color-primary-50: #1e3a8a;
          --color-primary-100: #1e40af;
          --color-primary-200: #1d4ed8;
          --color-primary-300: #2563eb;
          --color-primary-400: #3b82f6;
          --color-primary-500: #60a5fa;
          --color-primary-600: #93c5fd;
          --color-primary-700: #bfdbfe;
          --color-primary-800: #dbeafe;
          --color-primary-900: #eff6ff;
          --color-primary-focus: #3b82f6;
          --color-primary-content: #1f2937;

          /* Secondary colors */
          --color-secondary: #a78bfa;
          --color-secondary-50: #4c1d95;
          --color-secondary-100: #5b21b6;
          --color-secondary-200: #6d28d9;
          --color-secondary-300: #7c3aed;
          --color-secondary-400: #8b5cf6;
          --color-secondary-500: #a78bfa;
          --color-secondary-600: #c4b5fd;
          --color-secondary-700: #ddd6fe;
          --color-secondary-800: #ede9fe;
          --color-secondary-900: #f5f3ff;
          --color-secondary-focus: #8b5cf6;
          --color-secondary-content: #1f2937;

          /* Accent colors */
          --color-accent: #f472b6;
          --color-accent-50: #831843;
          --color-accent-100: #9d174d;
          --color-accent-200: #be185d;
          --color-accent-300: #db2777;
          --color-accent-400: #ec4899;
          --color-accent-500: #f472b6;
          --color-accent-600: #f9a8d4;
          --color-accent-700: #fbcfe8;
          --color-accent-800: #fce7f3;
          --color-accent-900: #fdf2f8;
          --color-accent-focus: #ec4899;
          --color-accent-content: #1f2937;

          /* Neutral colors remain the same as light theme */

          /* Info colors */
          --color-info: #60a5fa;
          --color-info-50: #1e3a8a;
          --color-info-100: #1e40af;
          --color-info-200: #1d4ed8;
          --color-info-300: #2563eb;
          --color-info-400: #3b82f6;
          --color-info-500: #60a5fa;
          --color-info-600: #93c5fd;
          --color-info-700: #bfdbfe;
          --color-info-800: #dbeafe;
          --color-info-900: #eff6ff;
          --color-info-focus: #3b82f6;
          --color-info-content: #1f2937;

          /* Success colors */
          --color-success: #34d399;
          --color-success-50: #064e3b;
          --color-success-100: #065f46;
          --color-success-200: #047857;
          --color-success-300: #059669;
          --color-success-400: #10b981;
          --color-success-500: #34d399;
          --color-success-600: #6ee7b7;
          --color-success-700: #a7f3d0;
          --color-success-800: #d1fae5;
          --color-success-900: #ecfdf5;
          --color-success-focus: #10b981;
          --color-success-content: #1f2937;

          /* Warning colors */
          --color-warning: #fbbf24;
          --color-warning-50: #78350f;
          --color-warning-100: #92400e;
          --color-warning-200: #b45309;
          --color-warning-300: #d97706;
          --color-warning-400: #f59e0b;
          --color-warning-500: #fbbf24;
          --color-warning-600: #fcd34d;
          --color-warning-700: #fde68a;
          --color-warning-800: #fef3c7;
          --color-warning-900: #fffbeb;
          --color-warning-focus: #f59e0b;
          --color-warning-content: #1f2937;

          /* Error colors */
          --color-error: #f87171;
          --color-error-50: #7f1d1d;
          --color-error-100: #991b1b;
          --color-error-200: #b91c1c;
          --color-error-300: #dc2626;
          --color-error-400: #ef4444;
          --color-error-500: #f87171;
          --color-error-600: #fca5a5;
          --color-error-700: #fecaca;
          --color-error-800: #fee2e2;
          --color-error-900: #fef2f2;
          --color-error-focus: #ef4444;
          --color-error-content: #1f2937;
        }
</style>

    
  <script>
        tailwind.config = {
            theme: {
              extend: {
                colors: {
                ...{"transparent":"transparent","current":"currentColor","black":"#000000","white":"#ffffff","gray":{"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827"},"red":{"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"},"yellow":{"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"},"green":{"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"},"blue":{"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},"indigo":{"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"},"purple":{"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95"},"pink":{"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}},
                ...{"primary":{"50":"var(--color-primary-50)","100":"var(--color-primary-100)","200":"var(--color-primary-200)","300":"var(--color-primary-300)","400":"var(--color-primary-400)","500":"var(--color-primary-500)","600":"var(--color-primary-600)","700":"var(--color-primary-700)","800":"var(--color-primary-800)","900":"var(--color-primary-900)","DEFAULT":"var(--color-primary)","focus":"var(--color-primary-focus)","content":"var(--color-primary-content)"},"secondary":{"50":"var(--color-secondary-50)","100":"var(--color-secondary-100)","200":"var(--color-secondary-200)","300":"var(--color-secondary-300)","400":"var(--color-secondary-400)","500":"var(--color-secondary-500)","600":"var(--color-secondary-600)","700":"var(--color-secondary-700)","800":"var(--color-secondary-800)","900":"var(--color-secondary-900)","DEFAULT":"var(--color-secondary)","focus":"var(--color-secondary-focus)","content":"var(--color-secondary-content)"},"accent":{"50":"var(--color-accent-50)","100":"var(--color-accent-100)","200":"var(--color-accent-200)","300":"var(--color-accent-300)","400":"var(--color-accent-400)","500":"var(--color-accent-500)","600":"var(--color-accent-600)","700":"var(--color-accent-700)","800":"var(--color-accent-800)","900":"var(--color-accent-900)","DEFAULT":"var(--color-accent)","focus":"var(--color-accent-focus)","content":"var(--color-accent-content)"},"neutral":{"50":"var(--color-neutral-50)","100":"var(--color-neutral-100)","200":"var(--color-neutral-200)","300":"var(--color-neutral-300)","400":"var(--color-neutral-400)","500":"var(--color-neutral-500)","600":"var(--color-neutral-600)","700":"var(--color-neutral-700)","800":"var(--color-neutral-800)","900":"var(--color-neutral-900)","DEFAULT":"var(--color-neutral)","focus":"var(--color-neutral-focus)","content":"var(--color-neutral-content)"},"info":{"50":"var(--color-info-50)","100":"var(--color-info-100)","200":"var(--color-info-200)","300":"var(--color-info-300)","400":"var(--color-info-400)","500":"var(--color-info-500)","600":"var(--color-info-600)","700":"var(--color-info-700)","800":"var(--color-info-800)","900":"var(--color-info-900)","DEFAULT":"var(--color-info)","focus":"var(--color-info-focus)","content":"var(--color-info-content)"},"success":{"50":"var(--color-success-50)","100":"var(--color-success-100)","200":"var(--color-success-200)","300":"var(--color-success-300)","400":"var(--color-success-400)","500":"var(--color-success-500)","600":"var(--color-success-600)","700":"var(--color-success-700)","800":"var(--color-success-800)","900":"var(--color-success-900)","DEFAULT":"var(--color-success)","focus":"var(--color-success-focus)","content":"var(--color-success-content)"},"warning":{"50":"var(--color-warning-50)","100":"var(--color-warning-100)","200":"var(--color-warning-200)","300":"var(--color-warning-300)","400":"var(--color-warning-400)","500":"var(--color-warning-500)","600":"var(--color-warning-600)","700":"var(--color-warning-700)","800":"var(--color-warning-800)","900":"var(--color-warning-900)","DEFAULT":"var(--color-warning)","focus":"var(--color-warning-focus)","content":"var(--color-warning-content)"},"error":{"50":"var(--color-error-50)","100":"var(--color-error-100)","200":"var(--color-error-200)","300":"var(--color-error-300)","400":"var(--color-error-400)","500":"var(--color-error-500)","600":"var(--color-error-600)","700":"var(--color-error-700)","800":"var(--color-error-800)","900":"var(--color-error-900)","DEFAULT":"var(--color-error)","focus":"var(--color-error-focus)","content":"var(--color-error-content)"},"danger":{"50":"var(--color-error-50)","100":"var(--color-error-100)","200":"var(--color-error-200)","300":"var(--color-error-300)","400":"var(--color-error-400)","500":"var(--color-error-500)","600":"var(--color-error-600)","700":"var(--color-error-700)","800":"var(--color-error-800)","900":"var(--color-error-900)","DEFAULT":"var(--color-error)","focus":"var(--color-error-focus)","content":"var(--color-error-content)"},"failure":{"50":"var(--color-error-50)","100":"var(--color-error-100)","200":"var(--color-error-200)","300":"var(--color-error-300)","400":"var(--color-error-400)","500":"var(--color-error-500)","600":"var(--color-error-600)","700":"var(--color-error-700)","800":"var(--color-error-800)","900":"var(--color-error-900)","DEFAULT":"var(--color-error)","focus":"var(--color-error-focus)","content":"var(--color-error-content)"}},
                },
              },
            },
            variants: {
              extend: {
                backgroundColor: ['active', 'group-hover'],
                textColor: ['active', 'group-hover'],
              },
            },
            plugins: [],
          };
  </script>

</head>

              <body class="h-full text-base-content">
                <div id="mobile-app" class="min-h-screen bg-[#0a1123]">
  <header id="header" class="fixed top-0 left-0 right-0 bg-[#0a1123] border-b border-neutral-800 z-50">
    <div class="flex items-center px-4 h-14">
      <button class="p-2">
        <i class="fa-solid fa-arrow-left text-[#ba2c94] text-xl"></i>
      </button>
      <h1 class="text-lg ml-2 text-[#8387c3]">Post</h1>
    </div>
  </header>

  <main id="main-content" class="pt-14 pb-16">
    <article id="detailed-post" class="bg-[#0a1123]">
      <div class="flex items-center p-4">
        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4" class="w-8 h-8 rounded-full" />
        <div class="ml-3">
          <p class="text-[#8387c3]">john_smith</p>
          <p class="text-xs text-neutral-500">New York, NY</p>
        </div>
        <button class="ml-auto p-2">
          <i class="fa-solid fa-ellipsis text-[#ba2c94]"></i>
        </button>
      </div>

      <div class="bg-neutral-800 h-[400px] flex items-center justify-center text-white">
        <span>Post Image</span>
      </div>

      <div class="p-4 border-b border-neutral-800">
        <div class="flex items-center space-x-4">
          <button><i class="fa-regular fa-heart text-[#ba2c94] text-2xl"></i></button>
          <button><i class="fa-regular fa-comment text-[#ba2c94] text-2xl"></i></button>
          <button><i class="fa-regular fa-paper-plane text-[#ba2c94] text-2xl"></i></button>
          <button class="ml-auto"><i class="fa-regular fa-bookmark text-[#ba2c94] text-2xl"></i></button>
        </div>
        <p class="mt-2 text-white">1,234 likes</p>
        <p class="mt-2 text-[#8387c3]"><span>john_smith</span> Beautiful sunset view! The colors today were absolutely incredible. Nature never ceases to amaze me. 🌅 #nature #photography #sunset #beautiful</p>
        <p class="text-xs text-neutral-400 mt-2">JANUARY 15, 2025</p>
      </div>

      <div id="comments-section" class="bg-[#0a1123]">
        <div class="p-4 border-b border-neutral-800">
          <div class="flex items-start mb-4">
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7" class="w-8 h-8 rounded-full" />
            <div class="ml-3 flex-1">
              <p class="text-[#8387c3]"><span>sarah_89</span> This is absolutely stunning! The colors are amazing!</p>
              <div class="flex items-center mt-1 space-x-4">
                <p class="text-xs text-neutral-400">2h</p>
                <button class="text-xs text-[#ba2c94]">Reply</button>
              </div>
            </div>
            <button class="p-2">
              <i class="fa-regular fa-heart text-[#ba2c94]"></i>
            </button>
          </div>

          <div class="flex items-start mb-4">
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=8" class="w-8 h-8 rounded-full" />
            <div class="ml-3 flex-1">
              <p class="text-[#8387c3]"><span>photo_enthusiast</span> What camera settings did you use?</p>
              <div class="flex items-center mt-1 space-x-4">
                <p class="text-xs text-neutral-400">1h</p>
                <button class="text-xs text-[#ba2c94]">Reply</button>
              </div>
            </div>
            <button class="p-2">
              <i class="fa-regular fa-heart text-[#ba2c94]"></i>
            </button>
          </div>
        </div>

        <div id="share-options" class="p-4 bg-[#0a1123] border-t border-neutral-800">
          <div class="flex items-center space-x-2">
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1" class="w-8 h-8 rounded-full" />
            <input type="text" placeholder="Add a comment..." class="flex-1 bg-[#ffffff] rounded-full px-4 py-2 text-sm focus:outline-none" />
            <button class="text-[#ba2c94] px-2">Post</button>
          </div>
        </div>
      </div>
    </main>

    <nav id="bottom-nav" class="fixed bottom-0 left-0 right-0 bg-[#0a1123] border-t border-neutral-800">
      <div class="flex justify-around items-center h-16">
        <button class="p-2">
          <i class="fa-solid fa-house text-[#ba2c94] text-xl"></i>
        </button>
        <button class="p-2">
          <i class="fa-solid fa-search text-[#ba2c94] text-xl"></i>
        </button>
        <button class="p-2">
          <i class="fa-solid fa-plus-square text-[#ba2c94] text-xl"></i>
        </button>
        <button class="p-2">
          <i class="fa-regular fa-heart text-[#ba2c94] text-xl"></i>
        </button>
        <button class="p-2">
          <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=6" class="w-6 h-6 rounded-full" />
        </button>
      </div>
    </nav>
</div>
              </body>
            </html>
          