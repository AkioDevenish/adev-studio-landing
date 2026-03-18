"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Zap,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MetOfficeCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 border-b border-foreground/10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <Link
            href="/"
            className="text-2xl font-display font-bold text-foreground"
          >
            ADEV STUDIO
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-muted mb-6">
              <span>Full Stack Development</span>
              <span className="w-8 h-[1px] bg-muted" />
              <span>2024</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground mb-8">
              Met Office
              <br />
              Trinidad & Tobago
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive weather information portal serving Trinidad &
              Tobago with real-time meteorological data, interactive forecasts,
              and marine conditions.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-2xl h-[70vh]"
          >
            <Image
              src="/images/case-studies/met-office/Homepage.jpg"
              alt="Met Office Trinidad & Tobago Dashboard"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
                Project Overview
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                The Met Office Trinidad & Tobago project modernizes weather
                information delivery for the Caribbean nation. Built as a
                comprehensive web portal, it provides real-time meteorological
                data, forecasts, and marine conditions to thousands of users
                daily.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                The platform processes large datasets from weather stations
                across both islands, presenting complex meteorological
                information in an accessible, mobile-responsive interface that
                serves both the general public and professional users.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">
                      Performance
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">60%</p>
                  <p className="text-sm text-foreground/60">
                    Faster Load Times
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">
                      Traffic
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">500K+</p>
                  <p className="text-sm text-foreground/60">
                    Requests Monthly
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">
                      Users
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    50K+
                  </p>
                  <p className="text-sm text-foreground/60">
                    Citizens Reached
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-foreground/60" size={20} />
                    <span className="text-sm font-mono uppercase tracking-widest text-muted">
                      Uptime
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    99.9%
                  </p>
                  <p className="text-sm text-foreground/60">High Availability</p>
                </div>
              </div>



              {/* Live Site Button */}
              <a
                href="https://www.metoffice.gov.tt/metdemo/site/demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
              >
                <ExternalLink size={20} />
                View Live Site
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
