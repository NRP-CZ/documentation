import Image from 'next/image';
import Banner from '@/public/img/publicity/ENG_eu-msmt-eosc-loga-barevne-ochrana-zona-paticka-bg.svg';

export function Footer() {
   return (
     <footer className="mt-auto border-t py-12 text-fd-secondary-foreground ">
     <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between --color-fd-background relative z-20">
        <!-- <Image src={Banner} alt="publicity banner"/> -->
  <img src="https://webcentrum.muni.cz/media/3832168/seda_eu-msmt_eng.png" alt="EU and MŠMT Logos" height="60">
        <img src="https://webcentrum.muni.cz/media/3831863/seda_eosc.png" alt="EOSC CZ Logo" height="60">
     </div>
     </footer>
   );
}
