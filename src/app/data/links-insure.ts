export interface LinkInsure {
  id:number;
  title:string;
  links: string[];
}

export const links:LinkInsure[] = [
  {
    id:1,
    title: 'our company',
    links: ['how we work','why insure?','check price','reviews']
  },
  {
    id:2,
    title: 'help me',
    links: ['faq','terms of use','privacy policy','cookies']
  },
  {
    id:3,
    title: 'contact',
    links: ['sales','support','live chat']
  },
  {
    id:4,
    title: 'other',
    links: ['careers','press','licenses']
  }
];
