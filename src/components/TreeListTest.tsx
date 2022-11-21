import TreeList, {
  Column,
  ColumnFixing,
  FilterRow,
  Editing,
  Lookup,
  Button,
  Toolbar,
  Item
} from 'devextreme-react/tree-list';
import { employees } from './employees';

const lookupData = [
  'Shipping Manager',
  'Shipping Assistant',
  'Sales Assistant',
  'CEO',
  'CTO'
];

const TreeListTest = () => {
  const handleSave = (e: any) => {
    console.log(e);
  }

  return (
    <div>
      <TreeList
        dataSource={[]}
        rootValue={-1}
        keyExpr="ID"
        parentIdExpr="HeadID"
        autoExpandAll={true}
        allowColumnReordering
        allowColumnResizing
        height={'720px'}
        width={'100vw'}
        onSaved={handleSave}
      >
        <Column dataField="FullName" fixed={true} minWidth={200} />
        <Column dataField="Position" minWidth={200}>
          <Lookup dataSource={lookupData}></Lookup>
        </Column>
        <Column dataField="BirthDate" dataType="date" minWidth={120} />
        <Column dataField="HireDate" dataType="date" minWidth={120} />
        <Column dataField="City" minWidth={200} />
        <Column dataField="State" minWidth={200} sortOrder="asc"/>
        <Column dataField="Email" minWidth={200} />
        <Column dataField="MobilePhone" minWidth={200} />
        <Column dataField="Skype" minWidth={200} />
        <FilterRow visible={true} />
        <ColumnFixing enabled={true}/>
        <Editing
          mode="batch"
          confirmDelete={false}
          allowDeleting={true}
          allowUpdating={true}
          allowAdding
        />
        <Column type="buttons">
          <Button name="add" icon={'add'} />
          {/* <Button name="edit" /> */}
          <Button name="delete" icon={'trash'} />
          <Button name="undelete" icon={'revert'} />
        </Column>
        <Toolbar>
          <Item name="addRowButton" showText="always"></Item>
          <Item name="searchPanel" />
          <Item name="saveButton" showText="always"/>
          <Item name="revertButton" showText="always"/>
        </Toolbar>
      </TreeList>
    </div>
  )
}

export default TreeListTest;
