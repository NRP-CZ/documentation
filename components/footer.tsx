import Image from 'next/image';
import Banner from '@/public/img/publicity/ENG_eu-msmt-eosc-loga-barevne-ochrana-zona-paticka.svg';

export function Footer() {
   return (
     <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
     <div className="w-full flex justify-center">
        <Image src={Banner} alt="publicity banner"/>
     </div>
     </footer>
   );
}
