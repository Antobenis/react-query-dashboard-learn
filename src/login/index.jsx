import { Button, Col, Form, Input, Row } from 'antd';
import { useLogin } from 'authhooks/AuthHooks';



const LoginComponent = () => {
  const { mutate: loginData } = useLogin()
  const onFinish = (values) => {
    loginData(values)
  };
  return (
    <div className='login-parent'>
      <Row >
        <Col span={24}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item

              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item

              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
            >
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

      </Row>
    </div>
  )


};
export default LoginComponent;