// app/page.tsx
import CountdownTimer from '@/components/CountdownTimer';
import BMICalculator from '@/components/BMICalculator';
import NextYearCalendar from '@/components/NextYearCalendar';
import WeightGoalTracker from '@/components/WeightGoalTracker';
import { Projects } from '@/components/Projects';

export default function Home() {
  const nextYear = new Date().getFullYear() + 1;
  
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-pink-400">
          Happy New Year {nextYear}!
        </h1>
        <p className="text-xl text-gray-200">
          Countdown to the New Year with Health & Wellness Goals
        </p>
      </header>

      <main className="container mx-auto px-4 pb-12">
        {/* Countdown Section */}
        <section className="mb-12">
          <CountdownTimer />
        </section>
        <section>
          <Projects />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: BMI Calculator & Weight Goal */}
          <div className="space-y-8">
            <section className="bg-linear-to-br from-blue-800/70 to-purple-800/70 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-center">BMI Calculator</h2>
              <BMICalculator />
            </section>

            {/* <section className="bg-linear-to-br from-purple-800/70 to-pink-800/70 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-center">Set Your {nextYear} Weight Goal</h2>
              <WeightGoalTracker />
            </section> */}
          </div>

          {/* Right Column: Next Year Calendar */}
          <section className="bg-linear-to-br from-purple-800/70 to-pink-800/70 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-center">Set Your {nextYear} Weight Goal</h2>
              <WeightGoalTracker />
            </section>
          {/* <div className="bg-linear-to-br from-pink-800/70 to-blue-800/70 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-center">{nextYear} Calendar</h2>
            <NextYearCalendar />
          </div> */}
        </div>

        {/* Inspiration Section */}
        <section className="mt-12 bg-linear-to-r from-blue-800/40 to-purple-800/40 rounded-2xl p-8 text-center backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Your Health Journey Starts Here</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            As we count down to {nextYear}, set achievable health goals. Track your BMI,
            establish a weight target, and visualize your progress throughout the coming year.
            A healthier you awaits in the New Year!
          </p>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-300 border-t border-white/10">
        <p>Made with ❤️ for a healthier {nextYear} | Next.js 15 + TypeScript + Tailwind CSS</p>
      </footer>
    </div>
  );
}















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
