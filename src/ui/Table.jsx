import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  min-width: 100%;
`;

const StyledHeader = styled.thead``;

const TableHead = styled.th`
  padding: 0.875rem 0.75rem 0.875rem 1rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const TableContext = createContext();

const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader>
      {columns.map((column) => (
        <tr>
          <TableHead scope="col"></TableHead>
        </tr>
      ))}
    </StyledHeader>
  );
};

export default Table;
