export interface Talk {
  title: string;
  event: string;
  date: string; // YYYY-MM-DD
  language: 'EN' | 'UA';
  format: 'online' | 'offline';
  location?: string;
  recording?: string;
  slides?: string;
}

export const talks: Talk[] = [
  {
    title: 'Think First Approach. How to Make Your Work Better',
    event: 'Ministry of Testing Abu Dhabi',
    date: '2023-02-01',
    language: 'EN',
    format: 'online',
    recording: 'https://youtu.be/1DF2X8Xea8g',
  },
  {
    title: '10 Worst Pieces of Advice for a Software Tester',
    event: 'Ministry of Testing Abu Dhabi',
    date: '2022-05-01',
    language: 'EN',
    format: 'online',
    recording: 'https://youtu.be/T6yVe8DmsTQ',
  },
];
