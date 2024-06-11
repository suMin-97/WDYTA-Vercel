import { RankingCard } from '@/components/Home/RankingCard/RankingCard';
import { RANKING_LIST_MOCK } from '@/components/Home/mock/RANKING_LIST_MOCK';
import {
  AdaptedRankingData,
  adaptRanking,
} from '@/shared/@common/utils/adaptRanking';

export const ReviewerRanking = () => {
  const rankingData: AdaptedRankingData[] = adaptRanking(RANKING_LIST_MOCK);

  return (
    <aside className="md:col-span-1 lg:col-span-3 p-4 text-white">
      <h2 className="text-[16px] text-gray-F1 font-normal mb-4 lg:mb-8 md:mt-7 lg:mt-7">
        리뷰어 랭킹
      </h2>
      <ul className="flex flex-row lg:flex-col gap-5 lg:gap-1 overflow-hidden">
        {rankingData
          ?.slice(0, 6)
          .map((ranking, index) => (
            <RankingCard
              key={ranking.id}
              ranking={ranking}
              index={index}
              color={ranking.color}
            />
          ))}
      </ul>
    </aside>
  );
};
