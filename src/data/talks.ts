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
  // 2026
  {
    title: 'Shift-left у наймі: етапи, які ви пропускаєте, перевантажуючи себе на співбесідах',
    event: 'Нотатки суворого QA',
    date: '2026-01-06',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=tTU7LFv5E2w',
  },
  // 2025
  {
    title: '10 шкідливих порад для QA ліда',
    event: 'Нотатки суворого QA',
    date: '2025-02-12',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=vJ0Nrabwyq8',
  },
  // 2024
  {
    title: 'Покращення процесів найму',
    event: 'QADay',
    date: '2024-03-25',
    language: 'UA',
    format: 'offline',
    recording: 'https://www.youtube.com/watch?v=nLE2bSjIwAc',
  },
  {
    title: 'Організація процесу забезпечення якості, коли ти один на проекті',
    event: 'QArea',
    date: '2024-03-18',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=BGYQ8bKbQHo',
  },
  // 2023
  {
    title: 'JIRA для тестувальника',
    event: 'Нотатки суворого QA',
    date: '2023-08-09',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=SNPc2iXjqis',
  },
  {
    title: 'How we improved our hiring process',
    event: 'Ministry of Testing Abu Dhabi',
    date: '2023-07-19',
    language: 'EN',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=tS_jl8jA8ks',
  },
  {
    title: 'QA Breakfast #3: Бюджети, дедлайни, естімейти',
    event: 'Нотатки суворого QA',
    date: '2023-02-15',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=WJmcCiMbUaE',
  },
  {
    title: 'Think First Approach. How to Make Your Work Better',
    event: 'Ministry of Testing Abu Dhabi',
    date: '2023-02-01',
    language: 'EN',
    format: 'online',
    recording: 'https://youtu.be/1DF2X8Xea8g',
  },
  // 2022
  {
    title: 'QA Breakfast #2: Сертифікації для тестувальників',
    event: 'Нотатки суворого QA',
    date: '2022-12-15',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=PejVUISQLSU',
  },
  {
    title: 'QA Breakfast #1: Англійська мова для IT зараз',
    event: 'Нотатки суворого QA',
    date: '2022-11-27',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=zwfbnK-IDSE',
  },
  {
    title: '10 Worst Pieces of Advice for a Software Tester',
    event: 'Ministry of Testing Abu Dhabi',
    date: '2022-05-11',
    language: 'EN',
    format: 'online',
    recording: 'https://youtu.be/T6yVe8DmsTQ',
  },
  // 2021
  {
    title: 'Emotions in Testing',
    event: 'Wix Engineering Tech Talks',
    date: '2021-12-01',
    language: 'EN',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=h7fqFtyrA0Y',
  },
  // 2020
  {
    title: 'Впровадження змін в процес тестування. Як розпочати?',
    event: 'QualityAssuranceGroup',
    date: '2020-12-16',
    language: 'UA',
    format: 'online',
    recording: 'https://www.youtube.com/watch?v=mQdQ1_SV_qQ',
  },
];
