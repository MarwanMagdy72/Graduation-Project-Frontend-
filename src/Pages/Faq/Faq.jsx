import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions about Recycling
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-1-content"
          id="faq-1-header"
        >
          <Typography variant="h6">Why is recycling important?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling helps conserve natural resources, reduces pollution, and
            minimizes waste sent to landfills.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-2-content"
          id="faq-2-header"
        >
          <Typography variant="h6">
            What are the benefits of recycling?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling conserves energy, reduces greenhouse gas emissions, and
            supports sustainable practices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-3-content"
          id="faq-3-header"
        >
          <Typography variant="h6">
            How does recycling help the environment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling reduces the need for raw materials extraction, which can
            harm ecosystems and wildlife habitats.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-4-content"
          id="faq-4-header"
        >
          <Typography variant="h6">What materials can be recycled?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Common recyclable materials include paper, glass, plastic, metal,
            and certain electronics.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-5-content"
          id="faq-5-header"
        >
          <Typography variant="h6">
            How can recycling benefit communities?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling programs create jobs, generate revenue through recycled
            materials, and promote community involvement.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-6-content"
          id="faq-6-header"
        >
          <Typography variant="h6">What is single-stream recycling?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Single-stream recycling allows residents to place all recyclable
            materials in a single bin for convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-7-content"
          id="faq-7-header"
        >
          <Typography variant="h6">
            How can individuals reduce contamination in recycling?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Properly rinse and clean recyclables before disposal to prevent
            contamination and improve recycling efficiency.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-8-content"
          id="faq-8-header"
        >
          <Typography variant="h6">
            What are the challenges of recycling?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Challenges include sorting complexities, contamination issues, and
            inadequate recycling infrastructure in some regions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-9-content"
          id="faq-9-header"
        >
          <Typography variant="h6">
            How can businesses implement effective recycling programs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Businesses can promote recycling through education, providing
            recycling bins, and partnering with waste management services.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-10-content"
          id="faq-10-header"
        >
          <Typography variant="h6">What is e-waste recycling?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            E-waste recycling refers to the disposal and recycling of electronic
            devices to recover valuable materials and reduce environmental
            impact.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-11-content"
          id="faq-11-header"
        >
          <Typography variant="h6">
            How can schools promote recycling among students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Schools can organize recycling drives, incorporate recycling
            education into curriculum, and set up recycling bins on campus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-12-content"
          id="faq-12-header"
        >
          <Typography variant="h6">
            What are the environmental benefits of recycling paper?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling paper reduces deforestation, conserves water, and
            decreases energy consumption compared to producing new paper from
            raw materials.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-13-content"
          id="faq-13-header"
        >
          <Typography variant="h6">
            How does recycling contribute to energy conservation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling conserves energy by reducing the need for extracting,
            refining, and processing raw materials into new products.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-14-content"
          id="faq-14-header"
        >
          <Typography variant="h6">
            What are some innovative recycling technologies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Innovative technologies include advanced sorting systems, recycling
            robots, and methods for recycling complex materials like plastics.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq-15-content"
          id="faq-15-header"
        >
          <Typography variant="h6">
            How does recycling contribute to a circular economy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recycling supports a circular economy by reducing waste, extending
            product lifecycles, and promoting sustainable consumption and
            production.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
