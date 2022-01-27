import {
  Button,
  ButtonGroup,
  FloatingLabel,
  Form,
  FormGroup,
} from 'react-bootstrap';
import { useFormik } from 'formik';

type Props = {
  initialValues: {
    password: string;
  };
  onSubmit: (v: { password: string }) => void;
};

export default function RootLoginForm({ initialValues, onSubmit }: Props) {
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <FloatingLabel label={'password'} className="mb-3">
          <Form.Control
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
          />
        </FloatingLabel>
      </FormGroup>
      <ButtonGroup>
        <Button variant="success" type="submit">
          login
        </Button>
      </ButtonGroup>
    </Form>
  );
}
