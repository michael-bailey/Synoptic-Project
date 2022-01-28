import {
  Button,
  ButtonGroup,
  FloatingLabel,
  Form,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useState } from 'react';

type Props = {
  initialValues: {
    id: string;
    title: string;
    description: string;
  };
  onSubmit: (v: { id: string; title: string; description: string }) => void;
};

export default function TestForm({ initialValues, onSubmit }: Props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <FloatingLabel label={'title'} className="mb-3">
          <Form.Control
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </FloatingLabel>
        <FloatingLabel label={'description'} className="mb-3">
          <Form.Control
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </FloatingLabel>
      </FormGroup>
      <FormGroup>
        <ButtonGroup>
          <Button variant="success" type="submit">
            Save
          </Button>
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
}
