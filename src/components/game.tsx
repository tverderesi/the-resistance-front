/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XvTQAKchyKt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.5rem;
}
**/
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Game() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </div>
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">B</span>
        </div>
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">C</span>
        </div>
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">D</span>
        </div>
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">E</span>
        </div>
        <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-sm font-medium">F</span>
        </div>
      </div>
      <div className="bg-gray-800 flex items-center justify-center p-4">
        <div className="bg-gray-700 rounded-lg p-4 grid grid-cols-3 gap-4">
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
          <div className="bg-gray-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <HexagonIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="p-4 grid gap-4">
        <div className="bg-gray-700 rounded-lg p-4 grid gap-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Mission Status</span>
            <span className="text-sm text-gray-400">2/5</span>
          </div>
          <div className="h-2 bg-gray-600 rounded-full">
            <div className="h-2 bg-green-500 rounded-full w-2/5" />
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-600 rounded-lg px-2 py-1 flex items-center gap-2">
              <ThumbsUpIcon className="w-4 h-4" />
              <span className="text-sm">2</span>
            </div>
            <div className="bg-gray-600 rounded-lg px-2 py-1 flex items-center gap-2">
              <ThumbsDownIcon className="w-4 h-4" />
              <span className="text-sm">3</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 grid gap-2">
          <div className="font-medium">Player Roles</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <SatelliteIcon className="w-5 h-5" />
              <span className="text-sm">Spy</span>
            </div>
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <FlagIcon className="w-5 h-5" />
              <span className="text-sm">Resistance</span>
            </div>
          </div>
          <Collapsible className="grid gap-4">
            <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
              What do the roles do?
              <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="-mx-6 grid gap-6 p-6">
                <div className="grid gap-1">
                  <div className="text-sm font-medium leading-none">Spy</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-400">
                    The Spy's goal is to sabotage the missions and ensure the Resistance fails.
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="text-sm font-medium leading-none">Resistance</div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-400">
                    The Resistance's goal is to successfully complete 3 missions to win the game.
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 grid gap-2">
          <div className="font-medium">Actions</div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <ThumbsUpIcon className="w-4 h-4" />
              <span>Vote</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <RocketIcon className="w-4 h-4" />
              <span>Go on Mission</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <EyeIcon className="w-4 h-4" />
              <span>Reveal Roles</span>
            </Button>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 grid gap-4">
          <div className="font-medium">Settings</div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span>Number of Players</span>
              <Select>
                <SelectTrigger className="text-gray-400">
                  <SelectValue placeholder="Select number of players" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Players</SelectItem>
                  <SelectItem value="6">6 Players</SelectItem>
                  <SelectItem value="7">7 Players</SelectItem>
                  <SelectItem value="8">8 Players</SelectItem>
                  <SelectItem value="9">9 Players</SelectItem>
                  <SelectItem value="10">10 Players</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Game Rules
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 p-6">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">5 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">2 Spies, 3 Resistance</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">6 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">2 Spies, 4 Resistance</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">7 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">3 Spies, 4 Resistance</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">8 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">3 Spies, 5 Resistance</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">9 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">4 Spies, 5 Resistance</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium leading-none">10 Players</div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-400">4 Spies, 6 Resistance</div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 grid gap-2">
          <div className="font-medium">Your Role</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2 bg-green-500 text-white">
              <SatelliteIcon className="w-5 h-5" />
              <span className="text-sm">Spy</span>
            </div>
          </div>
          <div className="font-medium">Player List</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-500 text-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>P1</AvatarFallback>
              </Avatar>
              <span className="text-sm">Player 1</span>
            </div>
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-500 text-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>P2</AvatarFallback>
              </Avatar>
              <span className="text-sm">Player 2</span>
            </div>
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-500 text-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>P3</AvatarFallback>
              </Avatar>
              <span className="text-sm">Player 3</span>
            </div>
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-500 text-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>P4</AvatarFallback>
              </Avatar>
              <span className="text-sm">Player 4</span>
            </div>
            <div className="bg-gray-600 rounded-lg p-2 flex items-center gap-2">
              <Avatar className="w-8 h-8 bg-gray-500 text-white">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>P5</AvatarFallback>
              </Avatar>
              <span className="text-sm">Player 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function HexagonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SatelliteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 7 9 3 5 7l4 4" />
      <path d="m17 11 4 4-4 4-4-4" />
      <path d="m8 12 4 4 6-6-4-4Z" />
      <path d="m16 8 3-3" />
      <path d="M9 21a6 6 0 0 0-6-6" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
