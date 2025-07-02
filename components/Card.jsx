import { useEffect, useState } from "react";
import { MensData } from "../API/MensData";
import styled from "styled-components";

const Table = styled.table`
  width: 90%;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #2c2c2c;
`;

const CenteredTd = styled.td`
  border: 1px solid #444;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Th = styled.th`
  border: 1px solid #444;
  font-size: 20px;
  padding: 12px;
  color: #fff;
  background-color: #1a1a1a;
  `;
  
  const Td = styled.td`
  font-size: 18px;
  border: 1px solid #444;
  padding: 12px;
  text-align: center;
  color: #fff;
`;

const RankBadge = styled.span`
  background-color: ${(props) => {
    if (props.ranking === 1) return '#FFD700';  // Gold
    if (props.ranking === 2) return '#C0C0C0';  // Silver
    if (props.ranking === 3) return '#CD7F32';  // Bronze
    return 'transparent';  
  }};
  
  color: ${(props) => {
    if (props.ranking === 1) return '#1a1a1a';  // Gold
    if (props.ranking === 2) return '#1a1a1a';  // Silver
    if (props.ranking === 3) return '#1a1a1a';  // Bronze
    return '#ccc';  
  }};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await MensData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <Th>No.</Th>
          <Th>Ranking</Th>
          <Th>Name</Th>
          <Th>DOB</Th>
          <Th>Country</Th>
          <Th>Score</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((curData, index) => (
          <tr key={curData._id}>
            <CenteredTd>
              <RankBadge ranking={curData.ranking}>{index + 1}</RankBadge>
            </CenteredTd>
            <Td>{curData.ranking}</Td>
            <Td>{curData.name}</Td>
            <Td>{curData.dob ? curData.dob.split("T")[0] : "N/A"}</Td>
            <Td>{curData.country}</Td>
            <Td>{curData.score}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
