import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useState } from 'react';

type Props = {
  initialValues: {
    id: string;
    text: string;
    isCorrect: boolean;
  };
  onSubmit: (v: {
    id: string;
    text: string;
    isCorrect: boolean;
  }) => Promise<void>;
};

export default function AnswerForm({ initialValues, onSubmit }: Props) {
  console.log(initialValues);
  const [formState, setFormState] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (v) => {
      setFormState(!formState);
      onSubmit(v);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Answer text</InputGroup.Text>
          <Form.Control
            id="text"
            name="text"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Form.Check
          type="checkbox"
          id="isCorrect"
          name="isCorrect"
          onChange={formik.handleChange}
          checked={formik.values.isCorrect}
          label="is the correct answer"
        />
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
