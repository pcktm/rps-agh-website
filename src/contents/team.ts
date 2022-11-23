import msajdakimg from '../assets/msajdak.jpg'

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
    src: "https://placekitten.com/75/75",
    email: 'azszuhh@agh.edu.pl',
    description: `Prawnik, pracownik Działu Spraw Studenckich. Od 2021 r. członek Akademickiej Sieci Bezpieczeństwa i równości (ASBiR), od 2022 r. członek European Network of Ombuds in Higher Education (ENOHE). Lubi teatr, dobre kino i książki oraz odpoczynek na łonie natury.`
  },
  {
    name: "Małgorzata Sajdak",
    role: "Asystentka Rzecznika",
    email: "malgorzata.sajdak@samorzad.agh.edu.pl",
    src: msajdakimg,
    description: `Studentka III roku Inżynierii i Zarządzania Procesami Przemysłowymi na Wydziale Inżynierii Lądowej i Gospodarki Zasobami. Od 2021 członek Komisji ds. Dydaktyki URSS AGH. Swój czas wolny spędza grając w koszykówkę lub biegając. Chętnie ogląda seriale, głównie te dramatyczne.`
  },
  {
    name: "Dawid Słomnicki",
    role: "Asystent Rzecznika",
    email: "dawid.slomnicki@samorzad.agh.edu.pl",
    src: "https://placekitten.com/75/77",
    description: ``
  },
]

export default team;