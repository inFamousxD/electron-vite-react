import TreeList, {
  Column,
  Editing,
  Button,
  Toolbar,
  Item,
  Scrolling
} from 'devextreme-react/tree-list';
import { testCaseEditorData } from './employees';

const CellOverride = (data: any) => {
  // console.log('Data', data);
  return (
    <div style={{
      padding: 0,
      margin: 0
    }}>
      { data.value }
    </div>
  )
}

const HeaderCellRender = (data: any) => {
  // console.log('header', data);
  return (
    <div style={{ color: 'black' }}>
      { data.column.caption }
    </div>
  )
}

const TreeListTest = () => {
  const handleSave = (e: any) => {
    console.log(e);
  }

  return (
    <div style={{
      borderBottom: '2px solid rgb(50, 150, 200)'
    }}>
      <TreeList
        dataSource={testCaseEditorData}
        rootValue={-1}
        keyExpr="Id"
        autoExpandAll={true}
        allowColumnResizing
        height={'95vh'}
        width={'100vw'}
        onSaved={handleSave}
        focusedRowEnabled={true}
        repaintChangesOnly
      >
        {/* Visible Data */}
        <Column headerCellRender={HeaderCellRender} cellRender={CellOverride} dataField="Object" fixed={true} width={200} />
        <Column dataField="Action" cellRender={CellOverride} width={200} />
        <Column dataField="Parameters" cellRender={CellOverride} width={220} />

        {/* Command buttons */}
        <Column type="buttons">
          <Button name="add" text='Add' icon={'add'} />
          <Button name="delete" text='Discard' icon={'trash'} />
          <Button name="undelete" text='Revert' icon={'revert'} />
        </Column>

        {/* Toolbar */}
        <Toolbar>
          <Item name="addRowButton" />
          <Item name="searchPanel" />
          <Item name="saveButton"/>
          <Item name="revertButton"/>
        </Toolbar>

        {/* Extra Options */}
        <Editing mode="cell" confirmDelete={false} allowDeleting={true} allowUpdating={true} allowAdding />
        <Scrolling useNative={false} mode="virtual" />
      </TreeList>
    </div>
  )
}

export default TreeListTest;
