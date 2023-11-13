export interface CardInsure {
  id:number;
  title:string;
  description:string;
  icon:string;
}

export const cards: CardInsure[] = [
  {
    id: 1,
    title: 'Snappy Process',
    description: "Our aplication process can be completed in minutes, not hours. Don't get stuck filing in tedius forms.",
    icon: './assets/insure/images/icon-snappy-process.svg'
  },
  {
    id: 2,
    title: 'Affordable Prices',
    description: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible",
    icon: './assets/insure/images/icon-affordable-prices.svg'
  },
  {
    id: 3,
    title: 'People First',
    description: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    icon: './assets/insure/images/icon-people-first.svg'
  }
];
