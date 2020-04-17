import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = ({ clickHandler, pageNumber }) => {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <Pagination size="lg" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" onClick={evt => clickHandler(evt, pageNumber - 1)}/>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" onClick={evt => clickHandler(evt, pageNumber + 1)}/>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
