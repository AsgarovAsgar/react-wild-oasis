// import styled from "styled-components";
import { useSearchParams } from 'react-router-dom';

import Spinner from '../../ui/Spinner'
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins()
  const [searchParams] = useSearchParams();

  if(isLoading) return <Spinner />

  // Filter cabins based on discount
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if(filterValue === "all") filteredCabins = cabins;
  if(filterValue === "no-discount") filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if(filterValue === "with-discount") filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  // Sort cabins based on sortBy
  const sortBy = searchParams.get("sortBy") || "createdAt-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);


  if (!sortedCabins.length) return <Empty resourceName="cabins" />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr" data={sortedCabins}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>

        <Table.Body data={filteredCabins} render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />} />

        {/* <Table.Body>
          {cabins.map(cabin =>  
            <CabinRow cabin={cabin} key={cabin.id} />
          )}
        </Table.Body> */}
        
      </Table>
    </Menus>
  )
}
