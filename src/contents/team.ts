import msajdakimg from '../assets/msajdak.jpg'
import azatykaimg from '../assets/azatyka.jpg'
import marybarczykimg from '../assets/mrybarczyk.jpg'
import dslomnickiimg from '../assets/dslomnicki.jpg'

export type TeamMember = {
  name: string;
  role: string;
  src: string;
  email: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "Agnieszka Zatyka-Szlachcic",
    role: "Rzecznik Praw Studenta",
    src: azatykaimg,
    email: 'azsz@agh.edu.pl',
    description: `Prawniczka, absolwentka WPiA UJ, mediatorka. Od 2021 r. członkini Akademickiej Sieci Bezpieczeństwa i równości (ASBiR), a od 2022 r. – European Network of Ombuds in Higher Education (ENOHE). Miłośniczka kina i literatury non-fiction oraz odpoczynku na łonie natury.`
  },
  {
    name: "Małgorzata Sajdak",
    role: "Asystentka Rzecznika",
    email: "malgorzata.sajdak@samorzad.agh.edu.pl",
    src: msajdakimg,
    description: `Studentka IV roku Inżynierii i Zarządzania Procesami Przemysłowymi na Wydziale Inżynierii Lądowej i Gospodarki Zasobami. Od 2021 członek Komisji ds. Dydaktyki URSS AGH. Swój czas wolny spędza grając w koszykówkę lub biegając. Chętnie ogląda seriale, głównie te dramatyczne.`
  },
  {
    name: "Dawid Słomnicki",
    role: "Asystent Rzecznika",
    email: "dawid.slomnicki@samorzad.agh.edu.pl",
    src: dslomnickiimg,
    description: `Student IV roku Informatyki i Systemów Inteligentnych na Wydziale Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej. Od roku 2021 członek Komisji ds. Dydaktyki i Jakości Kształcenia URSS. Miłośnik dobrego kodu i regulaminu.`
  },
  {
    name: "Magdalena Rybarczyk",
    role: "Promocja Rzecznika",
    email: "magdalena.rybarczyk@samorzad.agh.edu.pl",
    src: marybarczykimg,
    description: `Studentka IV roku Inżynierii i Zarządzania Procesami Przemysłowymi na Wydziale Inżynierii Lądowej i Gospodarki Zasobami. Od 2021 roku Pełnomocnik Zarządu WRSS WILiGZ AGH, a od 2022 członek Komisji ds. Dydaktyki URSS AGH. W zespole RPS odpowiada za promocję. Chętnie podejmuje się nowych wyzwań i odkrywa to, co nieznane.`
  }
]

export default team;