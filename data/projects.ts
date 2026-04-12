import { ProjectsDataType } from "@/type/type";

export const projectsData: ProjectsDataType[] = [
    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'Portfolio',
        name: 'Portfolio',
        type: 'Full-stack web app',
        year: 2026,
        liveSite: 'https://wwt-portfolio.vercel.app/',
        gitHub: 'https://github.com/wengti/portfolio',
        demo: '',

        description: 'The portfolio site you are on right now — built with Next.js and Framer Motion, featuring per-project detail pages, a functional contact form, and a scroll-aware header.',

        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Resend'],

        overview: 'A personal portfolio built from scratch with Next.js App Router, showcasing projects with individual detail pages that break down tech stack, features, and engineering challenges. Includes a working contact form backed by Resend for server-side email delivery, smooth animations via Framer Motion, and a data-driven architecture where all project content lives in centralised TypeScript files for easy updates.',

        feature: [
            'Per-project detail pages with feature breakdown, tech stack, and engineering challenges',
            'Functional contact form with server-side email delivery via Resend',
            'Scroll-aware header — hides on scroll down, reappears on scroll up',
            'Auto-playing project gallery carousel',
            'Mobile-responsive layout with hamburger menu',
            'Centralised data files for easy project and timeline management',
        ],

        fullTech: {
            framework: 'Next.js',
            language: 'TypeScript',
            styling: 'Tailwind CSS',
            animation: 'Framer Motion',
            email: 'Resend, React Email',
            ui: 'Tailgrids',
            deployment: 'Vercel',
        },

        challenges: [
            'Scroll-aware header behaviour',
            'React Email incompatibility with standard styling',
        ],

        solutions: [
            'Tracked scroll direction in a useEffect by comparing the current scroll position against the previous frame, then used Framer Motion to animate the header in and out based on the direction state. This reclaims vertical space on scroll while keeping the nav accessible whenever the user scrolls back up.',
            'React Email does not support standard HTML elements or Tailwind classes — it requires its own component library and inline CSS for styling. Rewrote the email template using React Email\'s proprietary components to ensure consistent rendering across different email clients.',
        ],
    },

    {
        isFeatured: true,
        featuredRank: 2,
        filename: 'Lyricfy-JP',
        name: 'Lyricfy-JP',
        type: 'Full-stack web app',
        year: 2026,
        liveSite: 'https://lyrical-jp.vercel.app',
        gitHub: 'https://github.com/wengti/lyricfy-jp',
        demo: '',

        description: 'A Japanese learning app that turns your Spotify library into a classroom — displaying real-time synced lyrics with furigana and English translations, letting you capture vocabulary mid-song and drill it later with flashcards.',

        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Spotify API', 'Google Gemini', 'Claude Code'],

        overview: "Lyricfy JP was built around a simple idea: the best way to absorb a language is through content you actually enjoy. It connects to Spotify, pulls live lyrics from lrclib.net (with Genius as a fallback), and overlays furigana and English translations in sync with playback. Highlighted phrases are sent to Gemini for AI-generated readings, translations, and example sentences — then saved to a personal dictionary with spaced repetition flashcards for review.",

        feature: [
            'Real-time lyrics synced to Spotify playback',
            'Furigana and English translation overlay',
            'AI-powered vocabulary capture — highlight any phrase to get readings, translations, and example sentences',
            'Personal dictionary with search, tagging, and sort by success rate or date',
            'Spaced repetition flashcard quizzes (JP→EN and EN→JP modes)',
            'Library browsing without active playback',
        ],

        fullTech: {
            framework: 'Next.js',
            language: 'TypeScript',
            backend: 'Supabase',
            AI: 'Google Gemini 2.0 Flash via OpenRouter, Claude Code',
            styling: 'Tailwind CSS',
            APIs: 'Spotify Web API, lrclib.net',
            deployment: 'Vercel',
        },

        challenges: [
            'Instruction overload degrading output quality',
            'Higher-than-expected token usage',
            'Knowing when to stop prompting and intervene manually',
            'Inconsistent AI output format breaking UI parsing',
        ],

        solutions: [
            'Learned to start with a broad direction and layer in specifics incrementally across iterations, rather than front-loading all requirements at once. Claude Code follows instructions more reliably when each prompt has a narrow, well-defined scope.',
            'Discovered that effective AI-assisted development demands upfront planning — vague intent gets expensive fast. Mapping out features and data flow before implementation reduced wasted back-and-forth and helped stay within a limited token budget.',
            'Maintained active code literacy throughout the build so that when Claude Code stalled on a bug, I could identify and fix it directly rather than burning tokens on diminishing prompts. Over-delegating without understanding the codebase creates both technical debt and token waste.',
            'Worked through the inconsistency with Claude Code iteratively — describing the format failures I was seeing and letting it propose and refine the fix. This reinforced a key pattern: when AI-generated output is unreliable, the solution is often better enforced at the code level rather than purely through tighter prompting.',
        ],
    },

    {
        isFeatured: true,
        featuredRank: 0,
        filename: 'Skorbot',
        name: 'Skorbot',
        type: 'Full-stack web app',
        year: 2026,
        liveSite: 'https://skorbot.vercel.app/',
        gitHub: 'https://github.com/wengti/skorbot',
        demo: 'https://www.youtube.com/watch?v=lUbW93Q5HW0',
        description: 'A full-stack platform that brings structure to casual pickleball sessions — handling fair game matchups, match recording, and a live leaderboard all in one place.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Tailgrids'],
        overview: "Skorbot was built to solve a real pain point in recreational pickleball communities — there's no easy way to arrange fair matchups or track who's actually winning. Players can register profiles, log matches, and compete on a live leaderboard, backed by an algorithm that ensures fair and varied opponents across each session.",
        feature: [
            'Sign in via Facebook, Google, or Email',
            'Fair matchup algorithm for balanced opponent pairing',
            'Real-time score tracking and live leaderboard',
            'Player statistics dashboard',
            'Player payment status tracking',
            'Mobile-responsive design'
        ],
        fullTech: {
            framework: 'Next.js',
            language: 'TypeScript',
            backend: 'Supabase',
            styling: 'Tailwind CSS, Tailgrids',
            deployment: 'Vercel'
        },
        challenges: [
            "Fair matchup algorithm design",
            'Real-time leaderboard sync',
            'Multi-provider authentication setup',
            "Serving user-uploaded pictures",
        ],
        solutions: [
            'Designed a matchup algorithm that randomly pairs opponents and teammates, maximises matchup variety within a fixed number of rounds, and guarantees each player gets a roughly equal number of games.',
            'Used Supabase Realtime subscriptions to push rank and score updates to all connected clients instantly, without polling.',
            'Implemented Supabase Auth with protected Next.js routes that redirect unauthenticated users via middleware proxy.',
            'Used Supabase Storage to store and serve user-uploaded images for profile pictures, room photos, and payment receipts.',
        ],

    },

    {
        isFeatured: true,
        featuredRank: 1,
        filename: 'Pickaboru',
        name: 'Pickaboru',
        type: 'Full-stack web app',
        year: 2026,
        liveSite: 'https://pickaboru.onrender.com/',
        gitHub: 'https://github.com/wengti/pickaboru',
        demo: 'https://www.youtube.com/watch?v=UeWfgmJQAUM',
        description: 'A peer-to-peer pickleball paddle rental platform. Users can browse available paddles, make rental bookings, manage their profiles, and communicate with other users via real-time chat. ',
        tech: ['React', 'React Router', 'Supabase', 'Material UI'],
        overview: "Pickaboru tackles the high cost of getting into pickleball by letting community members rent paddles directly from one another. Players can browse listings, book rental periods via a calendar picker, and message owners through real-time chat — all within one platform. Owners build reputation through a review system, while an admin dashboard keeps the marketplace accountable. The backend is powered entirely by Supabase, handling auth, database, real-time messaging, and Row Level Security in one place.",
        feature: [
            'Peer-to-peer paddle listing and rental booking',
            'Calendar-based date selection with availability checks',
            'Real-time instant messaging between renters and owners',
            'Review and rating system for community trust',
            'Notification system for booking and message updates',
            'Admin dashboard for platform management',
        ],
        fullTech: {
            framework: 'React, React Router, Vite',
            language: 'JavaScript',
            backend: 'Supabase',
            styling: 'CSS, Material UI (MUI)',
            deployment: 'Render',
        },
        challenges: [
            'Real-time peer-to-peer messaging',
            'Rental availability and date management',
            'Row Level Security (RLS) policy design',
            'Building marketplace trust without central moderation',
        ],
        solutions: [
            'Leveraged Supabase Realtime to power instant chat between renters and owners, eliminating the need for polling and keeping conversations live across sessions.',
            'Integrated React Calendar for rental date selection and validated chosen periods against existing bookings in Supabase to prevent double-booking.',
            'Designed granular Supabase RLS policies so that each user can only read or modify records they own or are explicitly permitted to access, keeping rental and profile data properly isolated.',
            'Implemented a review system tied to completed rentals, giving users verifiable reputation scores, with an admin dashboard providing a moderation layer for escalated issues.',
        ],
    },

    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'Weather-Now',
        name: 'Weather Now',
        type: 'Frontend web app',
        year: 2026,
        liveSite: 'https://weather-app-2ihi.onrender.com',
        gitHub: 'https://github.com/wengti/weather-app',
        demo: '',

        description: 'A clean, responsive weather app with real-time conditions, 7-day forecasts, and hourly breakdowns — with automatic geolocation, bookmarkable locations, unit switching, and dark mode support.',

        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API'],

        overview: 'Weather App pulls live data from the Open-Meteo API to display current conditions, a 7-day daily forecast, and hourly predictions for any location. It detects your location automatically on load, supports bookmarking multiple cities, and handles unit conversion between metric and imperial. Built with React and TypeScript with a focus on correctness — covering edge cases like timezone-aware time rendering and typed async error handling.',

        feature: [
            'Current weather conditions with real-time data',
            '7-day daily forecast and hourly breakdown',
            'Automatic geolocation on page load',
            'Bookmarkable locations for quick access',
            'Metric and imperial unit toggle',
            'Timezone-aware time display per location',
            'Dark and light mode',
            'Fully responsive layout',
        ],

        fullTech: {
            framework: 'React, Vite',
            language: 'TypeScript',
            styling: 'Tailwind CSS',
            API: 'Open-Meteo',
            deployment: 'Render',
        },

        challenges: [
            'Geolocation API incompatibility with async/await',
            'Timezone mismatch between browser and server environments',
            'Typed error handling in async flows',
        ],

        solutions: [
            'The browser Geolocation API is callback-based and does not return a Promise, making it incompatible with async/await out of the box. Wrapped it in a custom Promise to normalise the interface and allow it to integrate cleanly with the rest of the async data-fetching logic.',
            'JavaScript\'s Date object behaves differently depending on the runtime — browsers convert to the local system timezone automatically, while Node.js defaults to GMT+0. Handled this explicitly by passing timezone identifiers from the API response into date formatting calls, ensuring displayed times always reflect the target location rather than the user\'s machine.',
            'Used TypeScript union types with useActionState() to model both success and error states explicitly, and applied instanceof checks when catching exceptions to safely narrow error types — avoiding the pitfall of treating all caught values as Error objects.',
        ],
    },

    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'Todo-List',
        name: 'Todo List',
        type: 'Frontend web app',
        year: 2026,
        liveSite: 'https://todo-list-vz2n.onrender.com/',
        gitHub: 'https://github.com/wengti/todo-list',
        demo: '',

        description: 'A todo app built to sharpen React and TypeScript fundamentals — featuring drag-and-drop reordering, filter views, local storage persistence, and dark mode.',

        tech: ['React', 'TypeScript', 'CSS'],

        overview: 'A fully functional todo app built as a hands-on exercise in React and TypeScript. Beyond the core CRUD operations, it includes drag-and-drop reordering, filter views for active and completed items, bulk clear, and dark mode — all persisted to local storage. The focus was on writing correct, idiomatic React with proper state immutability and clean event handling.',

        feature: [
            'Add, complete, and delete todo items',
            'Drag-and-drop reordering',
            'Filter views — All, Active, and Completed',
            'Bulk clear completed items',
            'Local storage persistence across sessions',
            'Dark and light mode toggle',
            'Fully responsive layout',
        ],

        fullTech: {
            framework: 'React, Vite',
            language: 'TypeScript',
            styling: 'CSS',
            deployment: 'Render',
        },

        challenges: [
            'Drag-and-drop conflicting with interactive elements',
            'Unintended state mutation with object arrays',
        ],

        solutions: [
            'Drop zones positioned over buttons were blocking clicks during normal use. Solved this with CSS pointer-events — drop zones are set to pointer-events: none by default so buttons remain fully accessible, then switched to pointer-events: auto only when a drag operation begins via onDragStart, and restored on onDragEnd.',
            'Updating an array of objects in React state requires creating fresh copies of both the array and the modified objects — not just the array. Using .map() to return new object instances on each update prevents shallow copy issues, avoids unintended mutations across renders, and satisfies React strict mode\'s purity requirements.',
        ],
    },

    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'Quizzical',
        name: 'Quizzical',
        type: 'Frontend web app',
        year: 2026,
        liveSite: 'https://quizzical-tmi2.onrender.com/',
        gitHub: 'https://github.com/wengti/quizzical',
        demo: '',

        description: 'A trivia quiz app powered by the Open Trivia Database — pick your category, difficulty, and question count, then race against a countdown timer to score above 50% and win.',

        tech: ['React', 'JavaScript', 'CSS', 'Open Trivia DB API'],

        overview: 'Quizzical pulls live trivia questions from the Open Trivia Database and presents them as a timed multiple-choice quiz. Players configure each session by category, difficulty, and question count before the game begins. Each question has a 5-second countdown — run out of time and the answer is revealed automatically. Score above 50% to win, complete with a confetti celebration.',

        feature: [
            'Configurable quiz setup — category, difficulty, and question count',
            '5-second countdown timer per question with auto-submit on expiry',
            'Randomised answer order for each question',
            'Win/loss detection with confetti animation',
            'Visual correct/incorrect feedback after each answer',
            'API error handling for invalid or exhausted question pools',
        ],

        fullTech: {
            framework: 'React, Vite',
            language: 'JavaScript',
            styling: 'CSS',
            api: 'Open Trivia Database',
            deployment: 'Render',
        },

        challenges: [
            'Auto-submitting answers when the timer expires',
            'Shuffling answers without breaking True/False questions',
            'API response data containing HTML entities',
        ],

        solutions: [
            'Used a useEffect with a setInterval countdown tied to the selected answer state. When the interval reaches zero, it programmatically triggers the same submit handler used for manual answers — ensuring identical scoring logic regardless of how the question was completed.',
            'Multiple-choice answers are shuffled by randomly sorting all options, but boolean questions must always display as "True" and "False" in a fixed order. Added a question type check before shuffling to skip randomisation for boolean questions entirely.',
            'The Open Trivia Database returns question text and answers as HTML-encoded strings (e.g. &amp;, &#039;). Used the html-entities library to decode all API responses before storing them in state, preventing raw entity strings from rendering in the UI.',
        ],
    },
    {
        isFeatured: true,
        featuredRank: 3,
        filename: 'PopChoice',
        name: 'PopChoice',
        type: 'Full-stack web app',
        year: 2025,
        liveSite: 'https://movie-recommender-51m.pages.dev/',
        gitHub: 'https://github.com/wengti/movie-recommender',
        demo: 'https://www.youtube.com/watch?v=LKlLZ2l6Sj0',

        description: 'An AI-powered group movie recommender — each person submits their preferences, and a RAG pipeline semantically matches them against a vector database of films before GPT selects the best picks and explains why.',

        tech: ['JavaScript', 'Retrieval-Augmented Generation (RAG)', 'OpenAI API', 'Supabase', 'LangChain', 'Cloudflare Workers', 'OMDB API'],

        overview: "Movie Recommender uses Retrieval-Augmented Generation to suggest films tailored to your group's collective tastes and available time. After collecting each person's preferences — favourite movies, mood, and preferred actors or directors — the app converts the aggregated input into a vector embedding and runs a semantic similarity search against a database of movie descriptions stored in Supabase pgvector. The most relevant matches are then passed to GPT, which selects the best picks and explains why each film suits the group. Movie posters are fetched from OMDB and presented in an interactive carousel. All API credentials are kept server-side via a Cloudflare Worker, so nothing sensitive ever reaches the browser.",

        feature: [
            'Group preference collection — time availability and individual tastes per member',
            'Per-member preference survey — favourite movie, mood, and preferred actor or director',
            'RAG-powered recommendation — semantic vector search over a Supabase pgvector movie database',
            'GPT-generated explanation for each recommendation',
            'Movie posters fetched and displayed via OMDB API',
            'Interactive recommendation carousel with next and previous navigation',
            'Cloudflare Worker backend keeping all API keys off the client',
        ],

        fullTech: {
            language: 'JavaScript',
            build: 'Vite',
            AI: 'OpenAI API (Embeddings + GPT)',
            RAG: 'LangChain (Text Splitters)',
            database: 'Supabase',
            backend: 'Cloudflare Workers',
            APIs: 'OMDB API',
            deployment: 'Cloudflare Pages',
        },

        challenges: [
            'API key exposure in client-side code',
            'Keyword search being insufficient for preference matching',
            'Aggregating preferences from multiple users into a single query',
            'Unreliable GPT output format breaking carousel parsing',
        ],

        solutions: [
            'Moved all API calls — OpenAI embeddings, Supabase vector queries, and GPT inference — behind a Cloudflare Worker, so credentials never leave the server. The frontend makes a single POST to the worker endpoint and receives the finished recommendations.',
            'Implemented RAG using OpenAI\'s text embedding model and Supabase pgvector. User preferences are converted to a vector embedding at query time and matched against pre-embedded movie descriptions via cosine similarity — retrieving semantically relevant films even when no exact keywords overlap.',
            'Collected each group member\'s preferences individually through a multi-step survey, then serialised all responses into a single natural language query combining the group\'s tastes and available watch time. This single query drives the full RAG retrieval pipeline.',
            'Enforced a structured delimiter format in the GPT prompt — `movie_name1#reason1#movie_name2#reason2...` — making the client-side parsing deterministic and resilient to natural language variation in the model\'s output.',
        ],
    },
    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'BG2SELL',
        name: 'BG2SELL',
        type: 'Full-stack web app',
        year: 2026,
        liveSite: 'https://bg2sell.onrender.com/',
        gitHub: 'https://github.com/wengti/bg-site',
        demo: 'https://www.youtube.com/watch?v=I5TpeobEpMc',
        description: 'A B2C e-commerce platform for buying pre-owned board games. It demonstrates full-stack JavaScript development with features like user authentication, product search, shopping cart, and payment processing.',
        tech: ['Express.js', 'PostgreSQL', 'Stripe'],
        overview: 'BG2SELL is a full-stack e-commerce site where users can browse, search, and purchase secondhand board games end-to-end. Product discovery is powered by accent-insensitive search, making lookups flexible regardless of special characters in game titles. The cart and authentication state persist across sessions using PostgreSQL-backed session storage rather than in-memory storage, keeping the app production-ready. Security is treated seriously throughout — bcrypt password hashing, HttpOnly session cookies, and input sanitization are applied at every entry point.',
        feature: [
            'Product catalog browsing with accent-insensitive search',
            'Shopping cart with persistent session state',
            'Real payment processing via Stripe',
            'User authentication with bcrypt password hashing',
            'PostgreSQL-backed session storage for scalability',
            'Mobile-responsive design',
        ],

        fullTech: {
            runtime: 'Node.js',
            framework: 'Express.js',
            language: 'JavaScript',
            database: 'PostgreSQL (Supabase)',
            payment: 'Stripe',
            deployment: 'Render',
        },

        challenges: [
            'Session persistence across server restarts',
            'Flexible product search with accent support',
            'Secure Stripe checkout integration',
            'Route protection and input sanitization',
        ],

        solutions: [
            'Used connect-pg-simple to store sessions directly in PostgreSQL instead of server memory, so sessions survive restarts and the app can scale horizontally without losing login state.',
            'Implemented accent-insensitive text matching in PostgreSQL queries, allowing users to find products regardless of diacritics or special characters in their search terms.',
            'Integrated Stripe on both client (@stripe/stripe-js) and server (stripe SDK) sides, keeping secret keys server-only and handling the full payment lifecycle through a dedicated checkout route.',
            'Built a middleware-based auth layer to guard all protected routes, paired with bcryptjs for password hashing and the validator library for input sanitization to prevent injection attacks.',
        ],
    },


    {
        isFeatured: true,
        featuredRank: 4,
        filename: 'FYP',
        name: 'Cost Effective Fault Detection on Solar Panel using YOLO',
        type: 'Research',
        year: 2024,
        liveSite: '',
        gitHub: '',
        demo: 'https://www.youtube.com/watch?v=7xnDZPj1_Aw',
        description: 'A peer-reviewed research project that replaced expensive thermal cameras with a standard drone RGB camera for solar panel fault detection, achieving 95.91% accuracy through optimised YOLOv7 training techniques. The results are published in IEEE GECOST, JESTEC journal, and a book chapter.',
        tech: ['Python', 'YOLOv7', 'Roboflow', 'LabelImg'],
        overview: "This final year research project proposes a cost-effective alternative to thermal camera-based solar panel inspection by applying YOLOv7 on RGB drone imagery to automatically detect cracks and soiling. Through systematic experimentation with grayscale conversion, data augmentation, gradient descent optimizer selection, activation function tuning, and an Early Stopper mechanism, the model achieved 95.91% accuracy while cutting training time by over 312 minutes per run and hyperparameter tuning duration by nearly 31 days. The trained model was validated through real-world field testing at Taylor's University's 1,756-panel rooftop solar system.",
        feature: [
            'Automated detection and classification of cracks and soiling at 95.91% accuracy',
            'Drone-based RGB image collection without requiring expensive thermal camera',
            'Grayscale conversion and brightness/exposure augmentation pipeline',
            'Nadam optimizer reducing training convergence from 175 to 25 epochs',
            'ReLU activation function lowering GPU RAM usage from 5.94 GB to 4.87 GB',
            'Genetic Algorithm with Early Stopper (GAES) cutting hyperparameter tuning by 30.78 days',
            'Field tested at 2m, 4m, and 6m above a real 1,756-panel rooftop solar system',
            'Published in IEEE GECOST, JESTEC journal, and a book chapter',
        ],

        fullTech: {
            language: 'Python',
            model: 'YOLOv7',
            'data management': 'Roboflow',
            annotation: 'LabelImg',
            hardware: 'NVIDIA RTX 3060',
            'data collection': 'DJI Mavic 3 Classic',
        },

        challenges: [
            'Complex background of RGB images degrading detection accuracy',
            'Small, self-collected dataset with limited variety',
            'Excessive training and hyperparameter tuning time',
            'Dust in the soiling dataset degrading model performance',
            'Detection accuracy drop at higher drone flight altitudes',
        ],

        solutions: [
            'Applied grayscale conversion to strip redundant colour information from RGB images, simplifying background complexity. Since both cracks and soiling appear in white tones, colour is non-informative. Combined with brightness and exposure augmentation at ±25%, this improved mAP@0.5 by ~4% and accelerated convergence by 75 epochs compared to training on raw RGB data.',
            'Used Roboflow to apply data augmentation — artificially doubling the training dataset size by adjusting brightness and exposure within ±25% — preparing the model to handle outdoor lighting interferences such as uneven illumination and glare from drone-captured imagery.',
            'Benchmarked 5 gradient descent optimizers and 7 activation functions, identifying Nadam and ReLU as the best combination. This cut convergence from 175 to 25 epochs, saving 312.5 minutes per training run and reducing RAM usage from 5.94 GB to 4.87 GB. A custom Genetic Algorithm with Early Stopper (GAES) then reduced full hyperparameter tuning time from 52.08 to 21.3 days.',
            'Investigated the soiling dataset and found coal dust is barely visible at drone height. Removed dust from the detection scope, which boosted soiling mAP by up to 20.1%.',
            'Conducted field tests at 2m, 4m, and 6m above Taylor\'s University\'s rooftop solar panels, quantifying the accuracy-coverage trade-off for each height. Recommended 2m (76% accuracy) for small systems and 6m for large-scale solar farms where broader coverage at 68% accuracy is an acceptable trade-off.',
        ],

        references: [
            'W. T. Wong, S. K. Phang, and A. Azman, "Fault Detection Using YOLOv7 on RGB Images of Solar Panels with Various Data Augmentation Techniques and an Enhanced Early Stopper," in International Conference on Internet of Things, 2023: Springer, pp. 90-104. ',
            'W. T. Wong and S. K. Phang, "Studies on Techniques to Improve YOLO in Fault Detection Using RGB Images of Solar Panels," in 2024 International Conference on Green Energy, Computing and Sustainable Technology (GECOST), 2024: IEEE, pp. 164-168. ',
            'W. T. Wong, S. K. Phang, W. L. Pang, and R. Lalitha, "Intelligent System in Action: Automated Fault Detection of Solar Panels Using Drones and YOLOv7," in Intelligent Systems of Computing and Informatics in Sustainable Urban Development: CRC Press, 2025, pp. 59-76.',
            'W. T. WONG, S. K. PHANG, M. M. L. CHANG, and K. S. EU, "APPLICATION OF DEEP LEARNING ALGORITHM FOR COST EFFECTIVE FAULT DETECTION ON SOLAR PANEL," 2025.',
            'W. T. Wong, S. K. Phang, N. Sariff, H. S. Husin, and B. J. Pandian, "Enhanced Fault Detection for Solar Panels with YOLOv7 on RGB Images Using Augmentation Strategies and an Early Stopper," Artificial Intelligence in Instrumentation, Control and Automation, pp. 503-520, 2026.',
        ]
    },
    {
        isFeatured: true,
        featuredRank: 5,
        filename: 'EEGP',
        name: 'Revolutionizing Transportation: A Passenger-Carrying Drone',
        type: 'Engineering group project',
        year: 2024,
        liveSite: '',
        gitHub: '',
        demo: 'https://www.youtube.com/watch?v=H8XhMyZ4DpA',

        description: 'A two-track engineering project that designed a full-scale passenger eVTOL drone on paper and built a scaled-down hexacopter prototype from scratch — validating flight physics, control systems, and structural design through real-world testing.',

        tech: ['MATLAB Simulink', 'SolidWorks', 'ArduPilot', 'Mission Planner', 'Pixhawk', '3D Printing'],

        overview: "A Taylor's University final-year engineering group project tackling passenger drone design from two angles simultaneously: a comprehensive paper design of a full-scale eVTOL capable of carrying 160 kg, and a functional F550 hexacopter prototype built to validate the underlying physics and control systems at scale. The prototype used a Pixhawk flight controller running ArduPilot firmware, calibrated and monitored through Mission Planner, with MATLAB Simulink providing a 3D digital twin environment to simulate stability before physical testing. Flight endurance testing achieved 15.27 minutes of hover time, within 8.7% of the calculated 16.73-minute estimate.",

        feature: [
            'Full-scale passenger eVTOL paper design — 160 kg payload capacity, hexacopter configuration for motor redundancy',
            'Scaled-down F550 hexacopter prototype — 72:1 mass ratio to passenger drone, built and flight-tested',
            'MATLAB Simulink 3D digital twin — CoG analysis and flight stability simulation before physical build',
            'SolidWorks 3D modelling of both drone configurations, imported directly into Simulink',
            'Pixhawk 2.4.8 + ArduPilot flight controller with 5-condition failsafe system (radio, battery, GCS, EKF, vibration)',
            'CRSF-to-PWM protocol bridging via ArduPilot firmware parameter configuration',
            'Holybro 433 MHz telemetry link for real-time ground control during flight',
            '3D-printed aerodynamic housing designed in collaboration with a partnered ME team',
            'Flight endurance test achieving 15.27 min hover — 8.7% deviation from calculated 16.73 min estimate',
        ],

        fullTech: {
            simulation: 'MATLAB Simulink',
            modelling: 'SolidWorks',
            'flight controller': 'Pixhawk 2.4.8, ArduPilot firmware',
            'ground control': 'Mission Planner',
            frame: 'F550 hexacopter',
            propulsion: 'A2216 880KV BLDC motors, Hobbywing Skywalker 30A ESC',
            power: '3S 10000mAh 30C LiPo battery',
            'RC link': 'Jumper T-Lite V2 transmitter (ExpressLRS 2.4GHz), Radiomaster RP1 V2 receiver',
            telemetry: 'Holybro Telemetry Radio V3 (433MHz)',
            manufacturing: '3D printing (PLA)',
        },

        challenges: [
            'Centre of gravity imbalance in original custom frame',
            'RC protocol incompatibility between transmitter and flight controller',
            'GPS magnetic interference and persistent signal loss',
        ],

        solutions: [
            "The initial custom frame design failed CoG analysis in MATLAB Simulink — the forward-heavy mass distribution caused a forward flip during simulation. Differential motor speed compensation was applied as a workaround, but this introduced unintended yaw rotation. The root cause was resolved by switching to the F550 hexacopter frame, whose symmetric arm geometry naturally centred the payload and eliminated both issues without software compensation.",
            "The Jumper T-Lite V2 transmitter uses the CRSF protocol, while the Pixhawk 2.4.8 flight controller expects PWM input. Direct connection produced no response. The fix was applying ArduPilot's built-in CRSF protocol bridge — by configuring the correct serial port parameters in the firmware (SERIAL_BAUD and SERIAL_PROTOCOL settings), ArduPilot translated incoming CRSF signals to PWM outputs, restoring full RC control without any additional hardware.",
            "The GPS module suffered persistent magnetic interference from the ESCs and power distribution board, causing unreliable lock and compass errors throughout testing. Elevating the GPS on a dedicated mast provided partial relief by increasing distance from interference sources, but lock quality remained inconsistent. RTL (Return-to-Launch) failsafe mode was disabled as a result — GPS-dependent autonomous flight was deemed unreliable for safe failsafe operation, and all failsafe conditions defaulted to Land mode instead.",
        ],
    },
    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'IRSMS',
        name: 'Intelligent Road Safety Monitoring System',
        type: 'University Project',
        year: 2024,
        liveSite: '',
        gitHub: '',
        demo: 'https://www.youtube.com/watch?v=tecAnkHZPyU',
        description: "A drone-based road defect detection system that deploys a UAV to autonomously survey roads, uses YOLOv8 to classify potholes, cracks, manholes, and blurred markings, then pins every finding onto an interactive map — giving both road authorities and commuters real-time awareness of hazards before they cause accidents.",
        tech: ['YOLOv8', 'Python'],
        overview: "IRSMS was built to address the inefficiency of manual road inspection in Malaysia, where road defects account for over 11% of traffic fatalities. A DJI Air 3 drone captures aerial images at fixed intervals while its embedded GPS logs each shot's coordinates. A Python pipeline on Google Colab then extracts the GPS metadata, renames images with their coordinates, and feeds them through a fine-tuned YOLOv8 model trained on the RDD 2020 dataset — augmented with locally collected Malaysian road defects. Detected defects are plotted onto a Folium leaflet map as an HTML file, accessible from any internet-connected device by both maintenance authorities and road users.",
        feature: [
            'UAV aerial image capture with embedded GPS metadata at fixed time intervals',
            'Automated YOLOv8 detection of 4 defect classes: potholes, cracks, manholes, and blurred road markings',
            'GPS EXIF extraction and coordinate-based image renaming for traceability',
            'Interactive virtual map with geotagged defect markers and image previews via Folium',
            'End-to-end cloud pipeline: DJI Fly App → Google Drive → Google Colab → HTML map',
            'Dataset augmented with Malaysia-specific road defects for local accuracy',
        ],
        fullTech: {
            drone: 'DJI Air 3',
            mlModel: 'finetuned YOLOv8',
            language: 'Python',
            libraries: 'Pillow (PIL), Folium, OS',
            cloud: 'Google Drive, Google Colab (Nvidia Tesla T4 GPU)',
            dataset: 'Road Damage Dataset (RDD) 2020',
        },
        challenges: [
            'Selecting the right detection model for drone-captured aerial imagery'
        ],
        solutions: [
            'Conducted a systematic literature review comparing YOLOv5, YOLOv7, YOLOv8, and RCNN variants across accuracy, inference speed, and suitability for real-time aerial detection. Selected YOLOv8 based on its leading mAP of 91.1% and lightweight inference time of 8.8ms per image while remaining compatible with Google Colab GPU resources.',
        ]
    },
    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'FnB-Robot',
        name: 'Food and Beverage Robot',
        type: 'Club Project',
        year: 2022,
        liveSite: '',
        gitHub: '',
        demo: 'https://www.youtube.com/watch?v=gu9gtm7yNtA',
        description: 'A robotics system that automates burger assembly end-to-end — customers pick their ingredients via a mobile app, and a network of Arduino-controlled stations guided by a robotic arm builds the burger without any human intervention.',
        tech: ['Arduino', 'Raspberry Pi', 'I2C Protocol', 'Stepper & Servo Motors'],
        overview: "Built for Taylor's Robotics Club Engineering Fair 2022, this project automates the full burger assembly pipeline. Customers customise their burger through a mobile app (up to 5 ingredients), which sends the order to a Raspberry Pi coordinator. The Pi then orchestrates 6 dedicated stations — bun, patty, two sauce dispensers, and two salad dispensers — each driven by its own Arduino over I2C. A laser-cut robotic arm handles the physical assembly. The system was designed to reduce human contact in food handling, cut waiting time, and lower operational costs for SMEs.",
        feature: [
            'Mobile app ordering with up to 5 customisable ingredients',
            'Raspberry Pi central coordinator for assembly sequencing',
            '6 dedicated ingredient stations (bun, patty, sauce x2, salad x2)',
            'Laser-cut 4-DOF robotic arm',
            'I2C communication network across all Arduino station controllers',
            'Configurable assembly sequence supporting any ingredient combination',
        ],
        fullTech: {
            microcontroller: 'Arduino Uno (per station), Raspberry Pi (central coordinator)',
            communication: 'I2C (inter-Arduino), Serial (RPi ↔ Arduino)',
            actuation: '28BYJ-48 Stepper Motor, SG90 Servo Motor, NEMA Stepper Motor',
            hardware: 'Laser-cut wooden structure',
            software: 'Arduino C/C++, Python (Raspberry Pi)',
            interface: 'Mobile app (order input)',
        },
        challenges: [
            'I2C multi-node coordination',
            'Hardcoded assembly sequence with no customisation',
            'Motor timing and precision across stations',
        ],
        solutions: [
            'Designed an I2C protocol where each ingredient station runs as a slave Arduino node, with a central master Arduino issuing commands sequentially. Each node executes its action and sends an acknowledgement before the master advances to the next station, ensuring ordered and reliable assembly.',
            "Rewrote the assembly sequencing codebase from a fixed routine into a configurable system that reads the customer's ingredient selections from the app and dynamically constructs the execution order, enabling any valid combination of the 5 available ingredients to be assembled correctly.",
            'Tuned step counts and delay intervals for the 28BYJ-48 and NEMA stepper motors, and calibrated SG90 servo angles per station to achieve consistent dispensing volumes and repeatable robotic arm positioning across the full assembly cycle.',
        ],
    },
    {
        isFeatured: false,
        featuredRank: 0,
        filename: 'AUPOG',
        name: "Autism's Personal Organized Guardian",
        type: 'University Project',
        year: 2021,
        liveSite: '',
        gitHub: '',
        demo: 'https://canva.link/7pem99tzvncldtn',

        description: 'A prototype wearable device built for children with autism — continuously tracking heart rate and motion, and relaying the data wirelessly to a parent-facing monitoring interface in real time, at a fraction of the cost of existing commercial solutions.',

        tech: ['Arduino', 'MPU 6050', 'XD68C Pulse Sensor', 'HC-05 Bluetooth'],

        overview: "Autism's Personal Organized Guardian (AUPOG) was built to give parents of autistic children a way to remotely monitor their child's physical wellbeing without constant close supervision. The wearable integrates an XD68C pulse sensor for continuous heart rate tracking and an MPU 6050 gyroscope for motion and activity detection. Sensor data is transmitted wirelessly via HC-05 Bluetooth to a companion monitoring interface, allowing parents to spot anomalies such as elevated heart rate or abnormal movement patterns that may signal distress or a medical event — all built within a strict RM200 budget as a practical alternative to the commercial solutions that remain out of reach for most families.",

        feature: [
            'Real-time heart rate monitoring via XD68C pulse sensor',
            'Motion and activity tracking via MPU 6050 gyroscope and accelerometer',
            'Wireless Bluetooth data transmission to a companion parent monitoring interface',
            'Wearable form factor designed for comfort during continuous use',
            'Affordable hardware design as an alternative to commercial monitoring products',
            'Remote health status visibility for parents and caregivers',
        ],

        fullTech: {
            microcontroller: 'Arduino',
            sensors: 'MPU 6050 (Gyroscope / Accelerometer), XD68C (Pulse Sensor)',
            communication: 'HC-05 Bluetooth Module',
        },

        challenges: [
            'RM200 budget constraint',
            'Sensor integration and signal accuracy',
            'Reliable wireless data transmission',
            'Wearable form factor constraints',
        ],

        solutions: [
            'Worked within a strict RM200 budget by selecting widely available, low-cost off-the-shelf components — the MPU 6050, XD68C pulse sensor, and HC-05 Bluetooth module — each costing under a few ringgit individually. This kept the total hardware cost well within budget while covering all required sensing and communication functions.',
            'Configured the MPU 6050 over I2C and the XD68C over analogue input, tuning sampling rates and applying noise filtering to produce stable, continuous readings suitable for a child in active movement.',
            'Paired the Arduino with an HC-05 Bluetooth module to relay live sensor data from the wearable unit to the companion monitoring interface, ensuring parents receive up-to-date health readings in real time.',
            'Kept the hardware footprint minimal — compact component layout and managed wiring — to reduce the physical bulk and weight of the wearable, an important consideration for autistic children who are often sensitive to unfamiliar tactile sensations.',
        ],
    },








]