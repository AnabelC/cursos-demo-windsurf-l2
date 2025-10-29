import Link from "next/link";
import { cardStyles, buttonStyles, textStyles } from "@/lib/styles";
import type { Talk } from "@/lib/data/talksData";

interface TalkCardProps {
  talk: Talk;
}

export default function TalkCard({ talk }: TalkCardProps) {
  return (
    <div className={`${cardStyles.base} flex flex-col md:flex-row gap-4 ${cardStyles.padding.small}`}>
      <div className="w-full md:w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
        <span className={`${textStyles.muted} text-sm`}>Charla</span>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold mb-2">{talk.title}</h3>
          <p className={`${textStyles.bodySmall} mb-4`}>
            {talk.summary}
          </p>
        </div>
        <Link 
          href={talk.link}
          className={buttonStyles.small}
        >
          Ver charla
        </Link>
      </div>
    </div>
  );
}
