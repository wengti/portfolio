import { ProjectsDataType } from "@/type/type";

export const projectsData: ProjectsDataType[] = [
    {
        isFeatured: true,
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
        isFeatured: true,
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
        isFeatured: true,
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


]