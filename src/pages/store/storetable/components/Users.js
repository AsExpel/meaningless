import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../utils/constants';
import UserModal from './UserModal';
import {user_seach}  from '../../../../components/DatabaseSeach';
import {get} from "enzyme/src/configuration";
// import {request} from "express";

function Users({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'storeandstoretable/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch({
      type: 'storeandstoretable/fetch',
      payload: { page },
    });
  }

  function editHandler(id, values) {
    dispatch({
      type: 'storeandstoretable/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    // console.log(values);
    dispatch({
      type: 'storeandstoretable/create',
      payload: values,
    });
  }

  // function user_seach(url ,data , callback){
  //   let baseUrl = "http://localhost/index.php/admin/";
  //    url = baseUrl + "index/get_id_to_name";
  //   reqwest({
  //     url: url
  //     , type:"jsonp"
  //     , method: 'POST'
  //     , data: { "id":35 }
  //     , success: function (resp) {
  //       console.log(resp);
  //     }
  //   })
  // }


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <div className={styles.create}>
          <Button onClick={()=>{user_seach(
            'admin/index/get_id_to_name',
            {"id":25 },
            function (resp) {
               // alert(resp);
              console.log(resp);
            }
            )}} type="button">
            test
          </Button>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.storeandstoretable;
  return {
    list,
    total,
    page,
    loading: state.loading.models.storeandstoretable,
  };
}

export default connect(mapStateToProps)(Users);
