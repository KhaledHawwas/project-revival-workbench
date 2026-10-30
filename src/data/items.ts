export type ItemStatus = "complete" | "work-in-progress";

type BaseItem = {
  id: string;
  title: string;
  date?: string;
  summary: string;
  skills: string[];
  status: ItemStatus;
  todo: string[];
  gallery: string[];
  body: string;
};

export type Project = BaseItem & {
  type: "open-source" | "freelance";
  role: string;
  link?: string;
  repo?: string;
  image?: string;
  outcome?: string;
  featured: boolean;
};

export type Certification = BaseItem & {
  issuer: string;
  credentialUrl?: string;
  image?: string;
};

export type Achievement = BaseItem & {
  event: string;
  result?: string;
  link?: string;
};

export type Volunteering = BaseItem & {
  organization: string;
  endDate?: string;
  impact?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "ai-assistant-3",
    title: "AI Assistant 3",
    date: "2025-05-30",
    summary: "A voice-powered avatar chatbot combining speech recognition, text-to-speech, Coze AI responses, and real-time avatar streaming.",
    skills: ["kotlin", "compose", "di", "websockets", "webrtc", "coze"],
    type: "open-source",
    role: "Android developer",
    status: "complete",
    todo: ["Add the public repository or demo URL."],
    gallery: [],
    body: `## Capabilities

- Live avatar sessions using WebRTC and WebSockets.
- Conversational responses through the Coze API.
- Voice input that is transcribed and sent to the AI service.
- Spoken avatar responses with live animation.
- Direct text messaging alongside voice interaction.

The app uses Jetpack Compose, Hilt/Dagger, OkHttp3, WebRTC, WebSockets, and Kotlin throughout.`
  },
  {
    id: "ainaa",
    title: "Ainaa",
    date: "2025-07-30",
    summary: "A digital safety application that protects users from harmful content through uninstall protection, VPN filtering, app and keyword blocking, and accessibility enforcement.",
    skills: ["android", "kotlin", "compose", "koin", "ktor", "accessibility", "vpn", "workmanager"],
    type: "freelance",
    role: "Android developer",
    link: "https://ainaa.mafazaa.com/",
    status: "complete",
    todo: [],
    gallery: [
      "/projects/ainaa/Screen%207.png",
      "/projects/ainaa/Screen%208.png",
      "/projects/ainaa/Screen%209.png",
      "/projects/ainaa/Screen%2014.png",
      "/projects/ainaa/Screen%2030.png",
      "/projects/ainaa/lock%20screen.png"
    ],
    body: `## Capabilities

- Uninstall and permission-tampering protection.
- Content filtering through a custom VPN service.
- App, website, and custom-keyword blocking.
- Accessibility Service enforcement to prevent bypass attempts.
- Overlay warnings and blocking for detected violations.
- WorkManager-based background monitoring.
- JavaScript rule evaluation through Mozilla Rhino.

The app uses Jetpack Compose with Navigation Component Nav3, Ktor, Koin, overlay windows, and Android system services.`
  },
  {
    id: "all-notification-blocker",
    title: "All Notification Blocker",
    date: "2025-04-05",
    summary: "A notification management utility that blocks or schedules notifications for selected apps, helping users reduce distractions and improve focus.",
    skills: ["android", "kotlin", "java", "room", "notifications", "architecture"],
    type: "freelance",
    role: "Android developer",
    link: "https://play.google.com/store/apps/details?id=com.projects.allnotificationblocker.blockthemall.free",
    outcome: "Revived a legacy application with 100K+ Google Play downloads, restoring compatibility from Android 9 through Android 16.",
    featured: true,
    status: "complete",
    todo: [],
    gallery: [
      "/projects/all-notification-blocker/google%20play%20banner.png",
      "/projects/all-notification-blocker/google%20play%20banner2.png",
      "/projects/all-notification-blocker/Apps.png",
      "/projects/all-notification-blocker/Block.png",
      "/projects/all-notification-blocker/Notificaitons%20history.png",
      "/projects/all-notification-blocker/Settings.png"
    ],
    body: `## The work

This legacy project had been inactive since 2020 and was no longer functional on Android 9 through 16. The work focused on reviving, modernizing, and improving the app while preserving its existing user base.

- Migrated the codebase from Java to Kotlin.
- Restored Android 9–16 compatibility.
- Redesigned the notification scheduling system for reliability and a clearer user experience.
- Added features based on user feedback and Play Store reviews.
- Reworked the UI and UX using modern practices while keeping XML layouts.
- Enhanced \`NotificationListenerService\` for more reliable blocking behavior.

The app stores blocked notifications and history with Room Database and filters notifications through Android's notification listener APIs.`
  },
  {
    id: "child-shield",
    title: "Child Shield",
    date: "2025-01-01",
    summary: "A custom parental-control launcher that limits the apps a child can access and lets parents manage restrictions and view the device remotely.",
    skills: ["android", "kotlin", "webrtc", "firebase-realtime", "architecture"],
    type: "freelance",
    role: "Android developer",
    outcome: "Built a scalable multi-module Android application for remotely managing child-device access.",
    status: "complete",
    todo: [],
    gallery: [
      "/projects/child-shield/banner%202.png",
      "/projects/child-shield/img.png",
      "/projects/child-shield/ic_launcher%20parent.png",
      "/projects/child-shield/ic_launcher%20child.png"
    ],
    body: `## Capabilities

- Custom home launcher that limits access to allowed apps.
- Remote allow/block controls for individual apps.
- Scheduled or manually triggered access restrictions.
- Profile-based restrictions for different children.
- On-demand live screen sharing through WebRTC.
- Instant remote pause and resume.

The project uses Kotlin, Jetpack Libraries, XML, Firebase Realtime Database, WebRTC, and a multi-module architecture.`
  },
  {
    id: "dynamics-simulator",
    title: "Dynamics Simulator",
    summary: "An interactive physics simulator for vertical-launch motion that solves missing variables and visualizes the resulting trajectory in real time.",
    skills: ["java", "algorithms", "compose"],
    type: "open-source",
    role: "Developer",
    status: "complete",
    todo: ["Add the public GitHub repository URL.", "Add the exact project date."],
    gallery: [],
    body: `## Capabilities

- Calculates initial and final velocity, maximum height, initial height, and total flight time.
- Visualizes object motion in real time.
- Adjusts parameters dynamically.
- Solves unknown variables from user-provided inputs before simulating the trajectory.`
  },
  {
    id: "game-of-life",
    title: "Game of Life",
    date: "2023-11-01",
    summary: "An interactive Java Swing desktop simulation of Conway's Game of Life with selectable rules and custom rule creation.",
    skills: ["java", "java-swing", "algorithms"],
    type: "open-source",
    role: "Java developer",
    repo: "https://github.com/KhaledHawwas/GameOfLife",
    status: "complete",
    todo: [],
    gallery: [],
    body: `The application lets users select popular cellular-automaton rules or create their own rules and observe the resulting simulation.`
  },
  {
    id: "groceria",
    title: "Groceria",
    summary: "An Android application prototype using modern Kotlin UI, dependency injection, asynchronous programming, navigation, and image loading.",
    skills: ["android", "kotlin", "compose", "koin", "coil"],
    type: "open-source",
    role: "Android developer",
    status: "work-in-progress",
    todo: ["Add the project's purpose, main features, and current status.", "Add the project date.", "Add the public repository or demo URL."],
    gallery: [],
    body: `The available project notes identify Koin, Jetpack Compose, Coroutines/Flow, Navigation 3, and Coil as the core technologies.`
  },
  {
    id: "native-ecommerce",
    title: "Native e-commerce application",
    date: "2026-07-01",
    summary: "Production Android features for an e-commerce application, translating Figma designs into reusable UI and integrating REST APIs.",
    skills: ["android", "kotlin", "architecture", "ktor", "di"],
    type: "freelance",
    role: "Native Android developer",
    outcome: "Delivered responsive Android features with Ktor networking, Koin dependency injection, and reusable UI components.",
    featured: true,
    status: "complete",
    todo: [],
    gallery: [],
    body: `Worked with a development team from April to July 2026 to refine customer-facing e-commerce flows.`
  },
  {
    id: "order-management-app",
    title: "Order Management App",
    summary: "An Android order-management application paired with a Ktor backend and Microsoft SQL Server, with local storage and offline-aware business workflows.",
    skills: ["android", "kotlin", "compose", "koin", "ktor", "room", "sql-server"],
    type: "freelance",
    role: "Android and backend developer",
    status: "work-in-progress",
    todo: ["Add the project date and client or public project name.", "Add the repository or demo URL.", "Document the eight backend endpoints and their business purpose."],
    gallery: [],
    body: `The system includes eight backend endpoints connected to Microsoft SQL Server. The Android app uses Compose, Navigation 3, Koin, Shared Preferences, and Room/SQLite. A broadcast receiver produces an alert sound when the screen is off.`
  },
  {
    id: "pomodoro-kmp",
    title: "Pomodoro KMP",
    summary: "A Kotlin Multiplatform focus timer with persistent sessions, animated visual themes, and an interactive theme reveal experience.",
    skills: ["kotlin", "kmp", "compose-multiplatform", "architecture"],
    type: "open-source",
    role: "Kotlin Multiplatform developer",
    featured: true,
    status: "complete",
    todo: ["Add the project date.", "Add the public repository URL."],
    gallery: [],
    body: `## Features

- Customizable focus, short-break, and long-break sessions.
- Persistent timer progress and settings across app restarts.
- Animated theme presets including mesh gradients, waves, star fields, rounded-rectangle grids, hexagons, solid strokes, and chevrons.
- Long-press theme switching with a circular reveal expanding from the user's touch position.

The project explores how shared Kotlin logic and Compose Multiplatform UI can support a polished, highly visual productivity experience.`
  },
  {
    id: "portfolio-concept",
    title: "Developer Portfolio System",
    summary: "A skill-mapped portfolio system connecting projects, certifications, achievements, volunteering, and technical skills through searchable content collections.",
    skills: ["kotlin", "android", "compose", "git", "architecture"],
    type: "open-source",
    role: "Product and frontend developer",
    status: "work-in-progress",
    todo: ["Add the final public repository URL.", "Add the free-meeting/demo flow and service offerings.", "Add final volunteering and freelance entries as they become available."],
    gallery: [],
    body: `The original project notes describe the intended information architecture: skills should map to every related project, certification, achievement, job, and volunteering entry so a visitor searching for a skill can discover the full body of work.`
  },
  {
    id: "sms-auto-responder",
    title: "SMS Auto Responder",
    date: "2024-12-02",
    summary: "A background Android service that automatically replies to missed calls and SMS messages, with reliable fallback delivery and synchronized activity logs.",
    skills: ["android", "kotlin", "room", "retrofit", "firebase", "firebase-realtime", "architecture"],
    type: "freelance",
    role: "Android developer",
    outcome: "Delivered a background messaging workflow with MSG91 fallback delivery, cloud logs, and a client-controlled update channel.",
    status: "complete",
    todo: [],
    gallery: [],
    body: `## Capabilities

- Automatically detects incoming calls and messages.
- Sends an SMS reply to the caller or sender.
- Falls back to the MSG91 SMS API when native SMS delivery fails.
- Runs quietly in the background and syncs logs to Firebase Realtime Database.
- Fetches update information from Firebase Storage because the client did not publish through the Play Store.
- Shows changelogs and supports downloading the latest APK.

The app uses Kotlin, XML, LiveData, Room, Retrofit, Firebase Realtime Database, Storage, Cloud Messaging, Crashlytics, and Analytics.`
  },
  {
    id: "tick",
    title: "Tick",
    summary: "An attendance application where teachers and students generate, share, and scan QR codes to manage attendance points.",
    skills: ["kotlin", "android", "compose", "koin", "room", "firebase", "camerax", "workmanager", "testing"],
    type: "open-source",
    role: "Android developer",
    status: "complete",
    todo: ["Add the project date.", "Add the public repository URL."],
    gallery: [
      "/projects/tick/main%20screen.jpg",
      "/projects/tick/generating%20screen.jpg",
      "/projects/tick/points%20screen.jpg",
      "/projects/tick/photo_2_2025-09-07_23-59-45.jpg",
      "/projects/tick/icon.png"
    ],
    body: `## Capabilities

- Generates QR codes containing a student's name and group color.
- Scans QR codes to increment attendance points.
- Stores data locally with Room for offline resilience.
- Synchronizes data with Firebase for cloud persistence.
- Uses CameraX, ML Kit, and ZXing for QR scanning.
- Uses WorkManager for background synchronization.
- Follows MVVM with Kotlin Coroutines and Flow.
- Includes JUnit, Espresso, and Compose UI testing.`
  },
  {
    id: "webrtc-sample",
    title: "WebRTC Sample",
    summary: "A two-client WebRTC communication sample documenting the sender and receiver setup required to initialize a call.",
    skills: ["kotlin", "webrtc", "websockets"],
    type: "open-source",
    role: "Android developer",
    status: "work-in-progress",
    todo: ["Add the project purpose, date, and repository or demo URL.", "Document the signaling transport and the media type supported."],
    gallery: [],
    body: `## Call flow

1. Both clients create and initialize their WebRTC clients and repositories.
2. The sender initializes its repository and WebRTC session, then requests a call.
3. The receiver initializes its repository and WebRTC session, then starts the call.`
  }
];

export const certifications: Certification[] = [
  {
    id: "cs50",
    title: "CS50x",
    issuer: "Harvard University",
    date: "2024-01-01",
    summary: "Computer science fundamentals covering algorithms, data structures, programming, and software development.",
    skills: ["algorithms", "python", "java"],
    credentialUrl: "https://cs50.harvard.edu/certificates/71c630f7-dcb7-48ed-9a54-1281e095cc50",
    status: "complete",
    todo: [],
    gallery: [],
    body: ""
  },
  {
    id: "depi",
    title: "DEPI Android Development Track",
    issuer: "Digital Egypt Pioneers Initiative",
    date: "2025-12-01",
    summary: "Completed an intensive Android development track focused on Kotlin, Jetpack Compose, production practices, and communication.",
    skills: ["kotlin", "android", "compose", "leadership"],
    status: "complete",
    todo: [],
    gallery: [],
    body: "Served as a Team Leader, coordinating developers through sprints."
  }
];

export const achievements: Achievement[] = [
  {
    id: "ecpc",
    title: "ECPC Participant",
    event: "Egyptian Collegiate Programming Contest",
    date: "2024-07-22",
    summary: "Participated as a university competitor, strengthening algorithmic thinking, data structures, and teamwork.",
    skills: ["algorithms", "java", "git"],
    result: "University participant",
    status: "complete",
    todo: [],
    gallery: [],
    body: ""
  },
  {
    id: "nsave-hackathon",
    title: "Lead-Trace AI service",
    event: "Nsave AI Hackathon",
    date: "2025-02-28",
    summary: "Collaborated on an AI service that aggregates company information, performs parallel extraction, and returns structured data through FastAPI.",
    skills: ["python", "algorithms", "leadership"],
    result: "Hackathon team project",
    status: "complete",
    todo: [],
    gallery: [],
    body: ""
  }
];

export const volunteering: Volunteering[] = [
  {
    id: "open-source",
    title: "Open-source learning and community",
    organization: "Developer community",
    date: "2024-01-01",
    summary: "Sharing Android learning notes and practical engineering experiments around Kotlin, callbacks, coroutines, and dependency injection.",
    skills: ["android", "kotlin", "git", "leadership"],
    impact: "Turning difficult mobile concepts into reusable notes and examples.",
    status: "complete",
    todo: [],
    gallery: [],
    body: ""
  }
];
