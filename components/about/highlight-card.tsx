'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function HighlightCard({
  icon: Icon,
  title,
  description,
  index,
}: HighlightCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-4 h-full hover:bg-muted/50 transition-colors group">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-foreground/90">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
