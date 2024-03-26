'use client'

import { signOut, useSession } from 'next-auth/react'

export const metadata = {
  title: 'Home - qthwngg_',
  description: 'Learn Next Auth with qthwngg_',
}

export default function Home() {
  const { data } = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {data && 'Hello' + ' ' + data?.user?.name + ' ' + 'signed in'}
          {data && (
            <code onClick={() => signOut()} className="font-mono font-bold cursor-pointer">
              &nbsp;,'Logout'
            </code>
          )}
        </p>
      </div>
    </main>
  )
}
