import React from 'react';
import { Input, Button, Row, Col, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

function DemoApp() {
    const [dataInfo, setDataInfo] = React.useState<{
        taskName: string,
        taskList: {
            taskName: string,
            checkedFlag: boolean
        }[]
    }>({
        taskName: '',
        taskList: []
    });
    /** 定义函数onChange处理函数，调用setDataInfo函数修改state的值 */
    function taskNameChanged(newTaskname: string) {
        const newStateInfo = {...dataInfo};
        newStateInfo.taskName = newTaskname;
        setDataInfo(newStateInfo);
    }
    /** 添加按钮处理函数 */
    function addNewTaskToList() {
        const newStateInfo = {...dataInfo};
        newStateInfo.taskList = [...newStateInfo.taskList, {taskName: newStateInfo.taskName, checkedFlag: false}];
        newStateInfo.taskName = '';
        setDataInfo(newStateInfo);
    }
    /** Checkbox onChange处理逻辑 */
    function checkedOrNotchecked(e: CheckboxChangeEvent) {
        const newStateInfo = {...dataInfo};
        newStateInfo.taskList.map(item => {
            if (item.taskName === e.target.value) {
                return item.checkedFlag = e.target.checked;
            } else {
                return false;
            }
        });
        setDataInfo(newStateInfo);
    }
    /** 删除选中的待办任务 */
    const deleteCheckedTaskName = () => {
        const newStateInfo = {...dataInfo};
        newStateInfo.taskList = newStateInfo.taskList.filter(item => !item.checkedFlag);
        setDataInfo(newStateInfo);
    };
    return (
        <React.Fragment>
            <h1 style={{"textAlign": "center"}}>待办列表</h1>
            <hr></hr>
            <Row align='middle' gutter={5}>
                <Col span={1}></Col>
                {/** 增加onChange事件处理 */}
                <Col span={11}><Input value={dataInfo.taskName} onChange={e => taskNameChanged(e.target.value)}></Input></Col>
                {/** 增加onClick事件处理 */}
                <Col span={12}><Button type='primary' onClick={addNewTaskToList}>添加</Button></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <ul>
                        {/** 绑定onChange事件，否则无法选中复选框；绑定value值的目的是知道选中那条任务列表 */}
                        {
                            dataInfo.taskList.map(oneItem => <li key={oneItem.taskName}><Checkbox checked={oneItem.checkedFlag} onChange={checkedOrNotchecked} value={oneItem.taskName}></Checkbox>{oneItem.taskName}</li>)
                        }
                    </ul>
                </Col>
            </Row>
            <Row gutter={5}>
                <Col span={12}></Col>
                <Col span={12}>
                    {/** 绑定点击事件函数，删除选中记录 */}
                    <Button type='primary' onClick={deleteCheckedTaskName}>删除</Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default DemoApp;