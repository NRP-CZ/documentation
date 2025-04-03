import Image from 'next/image';
import Banner from '@/public/img/publicity/ENG_eu-msmt-eosc-loga-barevne-ochrana-zona-paticka.svg';

export function Footer() {
   return (
     <div className="w-full flex justify-center">
        <Image src={Banner} alt="publicity banner"/>
     </div>
   );
}
