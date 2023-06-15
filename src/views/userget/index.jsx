import React from "react";
import { Table } from "antd";
import { useUser } from 'webhooks/Webhooks'


const Userget = () => {

      const { data: userdata, isLoading } = useUser();

      const [user, setUser] = React.useState('')

      const columns = [
            {
                  title: 'Email',
                  dataIndex: 'email',
                  key: 'name',
            },
            {
                  title: 'First Name',
                  dataIndex: 'first_name',
                  key: 'age',
            },
            {
                  title: 'Last Name',
                  dataIndex: 'last_name',
                  key: 'address',
            },
      ];
      React.useEffect(() => {
            if (userdata !== undefined) {
                  setUser(userdata?.data)
            }
      }, [userdata])
      return (
            <>
                  <Table
                        dataSource={user}
                        columns={columns}
                        loading={isLoading}
                  />
            </>
      )
}

export default Userget;