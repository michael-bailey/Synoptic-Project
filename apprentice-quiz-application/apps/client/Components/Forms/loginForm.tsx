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
    username: string;
    password: string;
  };
  onSubmit: (v: { username: string; password: string }) => void;
};

export default function LoginForm({ initialValues, onSubmit }: Props) {
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <FloatingLabel label={'username'} className="mb-3">
          <Form.Control
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            type="text"
            placeholder="name@example.com"
          />
        </FloatingLabel>
      </FormGroup>
      <FormGroup>
        <FloatingLabel label={'password'} className="mb-3">
          <Form.Control
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
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
