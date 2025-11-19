'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function PlacementBanner() {
  const imagesTop = [
    'https://tailark.com/_next/image?url=%2Fmusic.png&w=1920&q=75',
    'https://tailark.com/_next/image?url=%2Fmusic-light.png&w=1920&q=75',
    'https://tailark.com/_next/image?url=%2Fmusic.png&w=1920&q=75',
  ]
  const imagesBottom = [
    'https://tailark.com/_next/image?url=%2Fmusic-light.png&w=1920&q=75',
    'https://tailark.com/_next/image?url=%2Fmusic.png&w=1920&q=75',
    'https://tailark.com/_next/image?url=%2Fmusic-light.png&w=1920&q=75',
  ]

  return (
    <main>
      <section className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-12">

          {/* Left side content with blurred background */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl shadow-xl border border-white/20 backdrop-blur-md bg-white/10 p-6 sm:p-8 md:p-10 text-center lg:text-left z-10">
            
            {/* Blurred marquee background */}
            <div className="absolute inset-0 overflow-hidden -z-10 opacity-30 blur-md">
              {/* Top marquee */}
              <motion.div
                className="absolute top-[15%] flex gap-6 sm:gap-10"
                animate={{ x: ['-100%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: 'linear',
                }}
              >
                {[...imagesTop, ...imagesTop].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="bg-marquee"
                    className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto object-cover rounded-2xl"
                  />
                ))}
              </motion.div>

              {/* Bottom marquee */}
              <motion.div
                className="absolute bottom-[10%] flex gap-6 sm:gap-10"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: 'linear',
                }}
              >
                {[...imagesBottom, ...imagesBottom].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="bg-marquee"
                    className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto object-cover rounded-2xl"
                  />
                ))}
              </motion.div>
            </div>

            {/* Text content */}
            <Link
              href="/"
              className="rounded-lg mx-auto lg:mx-0 flex w-fit items-center gap-2 border p-1 pr-3"
            >
              <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs sm:text-sm">
                New
              </span>
              <span className="text-xs sm:text-sm">Introduction Tailark Html</span>
              <ArrowRight className="size-4" />
            </Link>

            <h1 className="mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Production Ready Digital Marketing Blocks
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground">
              Supercharge your digital marketing workflow with pre-built, customizable blocks.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="text-sm sm:text-base">Get Started</Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side marquee */}
          <div className="w-full lg:w-1/2 relative overflow-hidden h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
            {/* Top marquee */}
            <div className="absolute left-0 right-0 top-[10%]">
              <motion.div
                className="flex gap-6 sm:gap-10"
                animate={{ x: ['-100%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: 'linear',
                }}
              >
                {[...imagesTop, ...imagesTop].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="marquee"
                    className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-cover rounded-2xl"
                  />
                ))}
              </motion.div>
            </div>

            {/* Bottom marquee */}
            <div className="absolute left-0 right-0 bottom-0">
              <motion.div
                className="flex gap-6 sm:gap-10"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: 'linear',
                }}
              >
                {[...imagesBottom, ...imagesBottom].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="marquee"
                    className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-cover rounded-2xl"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
