import React,{PropTypes} from 'react'
import {Menu} from  'antd'


const SubMenu = Menu.SubMenu

function Header () {
    return (
        <div>
            <Menu>
                <Menu.Item>菜单项</Menu.Item>
                    <SubMenu title='子菜单'>
                        <Menu.Item>子菜单项</Menu.Item>
                    </SubMenu>
            </Menu>
        </div>
    )
}

//属性验证
Header.propTypes = {


}

export default  Header