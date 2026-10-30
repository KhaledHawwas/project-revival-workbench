export type SkillCategory =
  | "Language"
  | "Mobile"
  | "Frontend"
  | "Backend"
  | "Tools"
  | "Soft Skills";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  aliases: string[];
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  body: string;
};

export const skills: Skill[] = [
  { id: "accessibility", name: "Android Accessibility Services", category: "Mobile", aliases: ["accessibility service"], level: "Intermediate", body: "System-level monitoring and protection features." },
  { id: "algorithms", name: "Algorithms & DSA", category: "Soft Skills", aliases: ["data structures", "competitive programming"], level: "Advanced", body: "Practical problem solving strengthened through contests." },
  { id: "android", name: "Android", category: "Mobile", aliases: ["android development", "native android"], level: "Advanced", body: "Native Android application development." },
  { id: "architecture", name: "App Architecture", category: "Mobile", aliases: ["mvvm", "clean architecture"], level: "Advanced", body: "Maintainable MVVM and layered application design." },
  { id: "camerax", name: "CameraX & QR Scanning", category: "Mobile", aliases: ["ml kit", "zxing", "qr codes"], level: "Intermediate", body: "Camera-based QR generation and scanning workflows." },
  { id: "coil", name: "Coil", category: "Mobile", aliases: ["image loading"], level: "Intermediate", body: "Image loading and processing in Kotlin UIs." },
  { id: "compose-multiplatform", name: "Compose Multiplatform", category: "Frontend", aliases: ["cmp"], level: "Intermediate", body: "Cross-platform UI with Compose." },
  { id: "compose", name: "Jetpack Compose", category: "Mobile", aliases: ["compose", "jetpack"], level: "Advanced", body: "Declarative, responsive Android UI." },
  { id: "coze", name: "Coze API", category: "Backend", aliases: ["conversational ai"], level: "Intermediate", body: "AI-powered conversational response integration." },
  { id: "di", name: "Dependency Injection", category: "Mobile", aliases: ["hilt", "dagger", "koin"], level: "Intermediate", body: "Testable dependency graphs with Hilt, Dagger, and Koin." },
  { id: "firebase-realtime", name: "Firebase Realtime Database", category: "Backend", aliases: ["firebase realtime"], level: "Intermediate", body: "Real-time synchronization for connected devices." },
  { id: "firebase", name: "Firebase", category: "Backend", aliases: ["firebase storage"], level: "Intermediate", body: "Cloud services for mobile products." },
  { id: "git", name: "Git & GitHub", category: "Tools", aliases: ["git", "github", "github actions"], level: "Advanced", body: "Version control, collaboration, and delivery workflows." },
  { id: "java-swing", name: "Java Swing", category: "Frontend", aliases: ["desktop java"], level: "Intermediate", body: "Interactive desktop interfaces with Java Swing." },
  { id: "java", name: "Java", category: "Language", aliases: ["java 21"], level: "Advanced", body: "Object-oriented Java development." },
  { id: "kmp", name: "Kotlin Multiplatform", category: "Mobile", aliases: ["kmp", "multiplatform"], level: "Intermediate", body: "Sharing business logic across platforms." },
  { id: "koin", name: "Koin", category: "Mobile", aliases: ["kotlin dependency injection"], level: "Intermediate", body: "Pragmatic dependency injection for Kotlin applications." },
  { id: "kotlin", name: "Kotlin", category: "Language", aliases: ["kt"], level: "Advanced", body: "Modern Kotlin for production Android and multiplatform applications." },
  { id: "ktor", name: "Ktor", category: "Backend", aliases: ["rest api"], level: "Intermediate", body: "Typed networking for Kotlin applications." },
  { id: "leadership", name: "Team Leadership", category: "Soft Skills", aliases: ["communication", "collaboration"], level: "Intermediate", body: "Coordinating teams and delivering work in sprints." },
  { id: "notifications", name: "NotificationListenerService", category: "Mobile", aliases: ["android notifications"], level: "Advanced", body: "Android notification monitoring and filtering." },
  { id: "python", name: "Python", category: "Backend", aliases: ["python 3"], level: "Intermediate", body: "FastAPI services and automation." },
  { id: "retrofit", name: "Retrofit", category: "Backend", aliases: ["http client"], level: "Intermediate", body: "Declarative REST client for Android services." },
  { id: "room", name: "Room Database", category: "Mobile", aliases: ["sqlite", "datastore"], level: "Intermediate", body: "Structured local persistence on Android." },
  { id: "sql-server", name: "Microsoft SQL Server", category: "Backend", aliases: ["mssql", "ssms"], level: "Intermediate", body: "Relational data services for business applications." },
  { id: "testing", name: "Android Testing", category: "Tools", aliases: ["junit", "espresso", "compose ui testing"], level: "Intermediate", body: "Unit, UI, and Compose testing practices." },
  { id: "vpn", name: "Android VPN Service", category: "Mobile", aliases: ["vpn filtering"], level: "Intermediate", body: "On-device traffic filtering through a VPN tunnel." },
  { id: "webrtc", name: "WebRTC", category: "Mobile", aliases: ["real-time communication", "screen sharing"], level: "Intermediate", body: "Real-time audio, video, and screen-sharing sessions." },
  { id: "websockets", name: "WebSockets", category: "Backend", aliases: ["web socket"], level: "Intermediate", body: "Persistent real-time communication channels." },
  { id: "workmanager", name: "WorkManager", category: "Mobile", aliases: ["background work"], level: "Intermediate", body: "Reliable scheduled and background Android work." }
];

export function getSkill(id: string): Skill | undefined {
  return skills.find((skill) => skill.id === id || skill.aliases.includes(id));
}
