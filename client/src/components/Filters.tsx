import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@tremor/react'

const Filters = () => {
  return (
    <aside className='w-[320px]'>

      <Accordion expanded>
        <AccordionHeader>
          Filters
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tempor lorem non est congue blandit. Praesent non lorem sodales,
          suscipit est sed, hendrerit dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tempor lorem non est congue blandit. Praesent non lorem sodales,
          suscipit est sed, hendrerit dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tempor lorem non est congue blandit. Praesent non lorem sodales,
          suscipit est sed, hendrerit dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tempor lorem non est congue blandit. Praesent non lorem sodales,
          suscipit est sed, hendrerit dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tempor lorem non est congue blandit. Praesent non lorem sodales,
          suscipit est sed, hendrerit dolor.
        </AccordionBody>
      </Accordion>
    </aside>
  )
}

export default Filters
