"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "When I went to meet Dirk and his team at Champneys Tring I was at a very low place in my life. I felt as I was in a black hole and no way of escaping. I had been to The Priory at Richmond in London. Booked in for a fortnight I only stayed for a few days. We were left to our own devices. Bad experience. I felt no better when I left. On my way to Tring I thought what am I doing, This is a waste of time. I was at the lowest ebb in my life. I was introduced to Dirk and thought what can he do to help me recover from this horrible place I am in. We met every day for 10 days. 2-3 hours in the mornings, and 2 hours in the afternoons. The first 2 days I felt no improvement. On the Wednesday I certainly changed my thoughts. From thinking Negative all the while I started thinking positive. I have so much to thank Dirk and his team for. He gave me the tools to fight this terrible mental illness. It's not easy and sometimes still a struggle but we all need help at times. That day when I met Dirk helped change my life back as it had been before, normal. If you are struggling please get help, It will help teach you to cope.",
    author: "J.D.",
    location: "United Kingdom",
  },
  {
    quote:
      "I came here sad and alone, feeling that I was squashed underneath the booze and this caused me to be unable to express my feelings in a way that would be understood and heard. I was fed up of the blackouts, the not knowing what happened the night before. The constant feeling of when and where I would get my next drink all consuming. I knew that AA would not help this time as I needed more that just lecturing. I needed someone to understand me, to teach me, and see the real me and drag her out screaming (in the end only crying). I needed to understand what I really felt and what made me happy, but also what made me sad. Dirk has maintained that the only person that knows me is me and that all my feelings, whatever they are are real and should be expressed and not held back as unimportant compared to others feelings. I should be compassionate and understanding of myself. We talked about a support network and how I should reach out to these people that have offered their help (previously I have not wished to burden them with my problems). Also making a 'toolbox' - ways to avoid drinking in different situations - even Star Jumps in the Pub. There are other tools to deal with this should I need them. I have written everything down and it helps remind me when I read them of how strong I can be. I have talked, walked and written. Everything seems so much clearer now and I so looking forward to the future. I am excited for the future where relationships with be honest and fulfilling. I look forward to being me again, the gentle, caring, loving and important person that I miss. But most of all I now know the meaning of being alive.",
    author: "Jenny",
    location: "United Kingdom",
  },
  {
    quote:
      "For years I had terrible anxiety and panic attacks. I have been in and out of treatment but nothing really worked. When I saw MASTERMIND2.0 website I really liked the idea of being at a resort and was looking forward to spa treatments and enjoying the Thai culture. They also did neurofeedback with me and that was an eye opener to really see what is going on. The best thing was that the therapists could see me and help me whilst I was experiencing anxiety. To go through it together with my therapist was so helpful and they helped me to understand what was going on and how to manage it. They call it cue exposure therapy or something like that. Whatever it is, it really worked for me and I am not afraid anymore (8 months now since leaving).",
    author: "V.G.",
    location: "France",
  },
  {
    quote:
      "I undertook the MASTERMIND2.0 program for 4 weeks after I had come to the conclusion that I needed help with overcoming my addiction to sex & drugs. Dirk and the team made me feel very welcome at the beautiful resort and were extremely patient with me and my initially defensive and selfish behaviour. His approach to therapy was gentle and warm; he was especially good at creating an atmosphere in which I felt safe to feel and free to express. He treated me like a friend, and thereby never excluded himself from the therapy. This I had not experienced with other therapists before, and it made our communication feel very natural and our bond grow strong. He would draw examples from his own experience from which I learnt a lot, and he guided our sessions more as if they were conversations without any pressure for time or goal. This meant that all of the resistance I felt I was able to share with him honestly and learn to direct the fight inside. They helped me a lot with actually seeing the pain that lay behind my destructive behaviour, and re-directing my focus. Dirk responded to my behaviour with a caring and loving heart; this is how I could build trust in our relationship, and without any pushing, I then was able to make my own decision. I am extremely grateful for Dirk's generosity, care and friendship. I would recommend the MASTERMIND2.0 program to anyone struggling with addiction issues; he has helped me tremendously.",
    author: "T.S.",
    location: "Germany",
  },
  {
    quote:
      "I had my doubts about the programme. At a resort and mingle with 'normal' guests and being surrounded by alcohol??? It was hard, but now for the first time in my life I feel free.",
    author: "J.N.",
    location: "United Kingdom",
  },
  {
    quote:
      "Thanks to all at Mastermind2.0 for their dedication and patience in helping me to overcome my alcohol addiction. As a functioning alcoholic for over a decade, I'd not realized how badly drink was affecting my family and career until my work started to dry up and my life started spiralling out of control. After taking part in an unsuccessful counselling and recovery program at a clinic downtown, I was a little apprehensive about seeking help again especially at a 5-star luxury resort. However, the relaxed environment, therapeutic treatments, massage, and activities offered by Dirk Stikker and his experienced staff was beyond my expectations and provided me with an excellent foundation for my recovery from alcoholism plus my being sober today.",
    author: "D.P.",
    location: "USA",
  },
  {
    quote:
      "I've worked in the film industry for years plus struggled with alcohol and sex addiction. These issues took control of my life - my career, my connections along with everything else. A real change seemed necessary but escape felt impossible despite my efforts. The situation turned around when I met Dirk and his team. I felt unsure at first but they truly turned my life around. The Mastermind2.0 program at the hotel and spa proved really different from my past experiences. The treatment went deeper than just therapy or conversations about problems - it also focused on changing my brain patterns, with neurofeedback therapy. They hooked me up to these sensors, and it was like my brain started learning how to function better. I didn't fully understand the science behind it at first, but I could feel the difference. Over time, I felt more clear-headed, calmer, and in control. I've been sober for 8 months now, and I've finally broken free from my sex addiction too. It wasn't easy, but with Dirk's guidance and this program, I've been able to take my life back. I'm not just surviving anymore—I'm living. I'm grateful for what they've done for me.",
    author: "G.S.",
    location: "USA",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 12000) // 12 seconds for longer testimonials
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-serif text-3xl font-light tracking-wide text-ocean-blue md:text-4xl lg:text-5xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
            Stories of transformation and healing
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Fixed height container - height based on the longest testimonial */}
          <div className="relative h-[900px] overflow-hidden md:h-[800px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 flex flex-col items-center justify-start pt-12"
              >
                <Quote className="mb-6 h-12 w-12 text-ocean-blue/20" />
                <div className="h-full px-4 md:px-8">
                  <p className="mb-8 max-w-3xl font-serif text-lg font-light italic leading-relaxed text-muted-foreground md:text-xl">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="mt-8 text-center">
                    <p className="font-serif text-lg font-medium text-ocean-blue">{testimonials[current].author}</p>
                    <p className="text-sm font-light text-muted-foreground">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-6 rounded-full transition-colors ${
                  current === index ? "bg-ocean-blue" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
