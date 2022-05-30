import uniqid from 'uniqid'

export const dummyInfo = {
  fName: 'Jardani',
  lName: 'Jovonovich',
  city: 'New York',
  country: 'USA',
  profTitle: 'Assassin',
  description:
    'I was born in Padhorje, Byelorussian SSR. I have a background in numerous martial arts, and have spent my life jumping between different sorts of jobs, but since marrying my beloved wife Helen, have decided to settle down and pursue a new career as a software developer.',
  email: 'babayaga@underground.com',
  phoneNumber: '07633288821',
  jobs: [
    {
      companyName: 'Ruska Roma',
      positionTitle: 'Hitman',
      positionStartDate: '1980/01/11',
      positionEndDate: '1992/04/02',
      roleDescription:
        'An apprenticeship-like position, I learned on the job, becoming proficient in multiple skills including martial arts, firearms, edged weapons, improvised weapons, tactical driving, infiltration, escapology and more.',
      id: uniqid(),
    },
    {
      companyName: 'The Boogyeman',
      positionTitle: 'Assassin',
      positionStartDate: '1992/04/03',
      positionEndDate: '2010/12/16',
      roleDescription: 'I set out on my own, using the skills I learned to do a bit of freelance.',
      id: uniqid(),
    },
  ],
  qualifications: [
    {
      placeOfStudy: 'Ruska Roma',
      qualName: 'Assassin',
      startDate: '1980',
      endDate: '1992',
      id: uniqid(),
    },
    {
      placeOfStudy: 'New York',
      qualName: 'Botany',
      startDate: '1993',
      endDate: '1994',
      id: uniqid(),
    },
  ],
}
