import { useContext } from 'react'
import { CardProject } from '../utils/CardProject/CardProject'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { DeviceInfoContext } from '../context/DeviceInfoContext'

export function Experience ({ id }) {
  const { deviceInfo } = useContext(DeviceInfoContext)

  const projects = [
    {
      title: 'Identity Now',
      company: 'Sailpoint',
      location: 'US Based (Remote)',
      role: 'UI Developer',
      startDate: '2022',
      endDate: '2024',
      description: 'Definition, planning, development of new features (Filters, Data visualization, API consumption among other scopes).',
      tags: ['React', 'Angular', 'NestJS', 'Github', 'Figma']
    },
    {
      title: 'Outcome planner',
      company: 'Kinesso',
      location: 'US Based (Remote)',
      role: 'Frontend Developer',
      startDate: '2021',
      endDate: '2022',
      description: 'Web application responsible of the visualization of different layers of data to plan marketing strategies.',
      tags: ['JavaScript', 'Jenkins', 'Gitlab', 'Jasmine', 'Karma']
    },
    {
      title: 'Factory talk',
      company: 'Rockwell Automation',
      location: 'Colombia',
      role: 'Full-stack Developer',
      startDate: '2019',
      endDate: '2021',
      description: 'Migration to a new embedded web application (New technologies, new architecture, new styles & functionalities).',
      tags: ['NodeJs', 'Angular', 'Kubernetes', 'SAFe']
    }
  ]

  return (
    <>
      <section id={id} className={deviceInfo.isMobile ? 'main-content-experience-section-mobile' : 'main-content-experience-section'}>
        {
          projects.map((project, index) => {
            return <CardProject key={project + index} project={project} />
          })
        }
        <section className={deviceInfo.isMobile ? 'download-cv-section-mobile' : 'download-cv-section'}>
          <span className='basic-text'>And much more...</span>
          <a target='_blank' href='https://1drv.ms/b/s!AieWYZyae4cEhs9WHarjBJbJXWh_1w?e=NWsrnB' rel='noreferrer'>
            <Button className='download-cv' variant='bordered' href='https://1drv.ms/b/s!AieWYZyae4cEhsEUUjadxqvQLvWI7A?e=bpwDLQ'>
              Check the full CV here<FontAwesomeIcon icon={faDownload} />
            </Button>
          </a>
        </section>
      </section>
    </>
  )
}
