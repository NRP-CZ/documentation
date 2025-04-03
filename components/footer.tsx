import Image from 'next/image';
import Banner from '@/public/img/publicity/ENG_eu-msmt-eosc-loga-barevne-ochrana-zona-paticka.svg';

export function Footer() {
   return (
     <footer className="mt-auto border-t bg-fd-secondary py-12 text-fd-secondary-foreground">
     <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between bg-fd-secondary relative z-20">
        <Image src={Banner} alt="publicity banner"/>
     </div>
     </footer>
   );
}
