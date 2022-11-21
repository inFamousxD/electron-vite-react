import { TreeList, Column, ColumnFixing, Scrolling } from 'devextreme-react/tree-list';
import { employees } from './employees';

const TreeListTest = () => {
  return (
    <div>
      <TreeList
        dataSource={employees}
        rootValue={-1}
        keyExpr="ID"
        parentIdExpr="HeadID"
        autoExpandAll={true}
      >
        <Column dataField="FullName" fixed={true} minWidth={200} />
        <Column dataField="Position" minWidth={200} />
        <Column
          dataField="BirthDate"
          dataType="date"
          minWidth={200}
        />
        <Column
          dataField="HireDate"
          dataType="date"
          minWidth={200}
        />
        <Column dataField="City" minWidth={200} />
        <Column dataField="State" minWidth={200} />
        <Column dataField="Email" minWidth={200} />
        <Column dataField="MobilePhone" minWidth={200} />
        <Column dataField="Skype" minWidth={200} />

        <ColumnFixing enabled={true}/>
        <Scrolling mode={'standard'}/>
      </TreeList>
    </div>
  )
}

export default TreeListTest;
