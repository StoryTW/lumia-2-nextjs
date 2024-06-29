import { SectionGrid } from '@/components/sections/SectionGrid/SectionGrid';
import styles from './MainPage.module.scss';
import { SectionApi } from '@/components/sections/SectionApi/SectionApi';
import { SectionOne } from '@/components/sections/SectionOne/SectionOne';
import { SectionTrust } from '@/components/sections/SectionTrust/SectionTrust';
import { SectionJustVideo } from '@/components/sections/SectionJustVideo/SectionJustVideo';
import { SectionOneSimple } from '@/components/sections/SectionOneSimple/SectionOneSimple';
import { SectionDaCex } from '@/components/sections/SectionDaCex/SectionDaCex';

export function MainPage() {
  return (
    <main id='mainPage' className={styles.mainPage}>
      {/* <SectionOne /> */}

      {/* <SectionGlow /> */}

      <SectionDaCex />

      {/* <SectionApi
        id='three'
        title='Swap API'
        description='Gain a massive competitive edge by harnessing the untapped liquidity of CEXs, leveraging a seamless routing mechanism to ensure your users benefit from the most optimal liquidity routes.'
        video='4'
      />
      <SectionApi
        id='four'
        title='Order API'
        description='Beat the competition with simplified yet comprehensive order management for spot & perps markets with features like order tracking, history retrieval, execution routes, and more.'
        video='5'
      />
      <SectionApi
        id='five'
        title='Bridge API'
        description='Empower your users with the easiest, fastest, and most secure cross-chain bridging experience powered by a trustless, peer-to-peer environment.'
        video='6'
      /> */}

      {/* <SectionAccelerate /> */}

      <SectionGrid />

      <SectionJustVideo />

      <SectionTrust />

      <SectionOneSimple />
    </main>
  );
}
