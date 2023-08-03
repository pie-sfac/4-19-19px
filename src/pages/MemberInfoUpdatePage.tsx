// MemberInfoUpdatePage.tsx
import React, { useState } from "react";
import useSWR from "swr";

const MemberInfoUpdatePage: React.FC = () => {
  const [memberId, setMemberId] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMemberId(value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Do not make the API call here. SWR will handle it automatically on demand.
  };

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`/api/members/${memberId}`, fetcher);

  if (error) {
    console.error("Error fetching member information:", error);
  }

  return (
    <div>
      <h2>회원정보수정 페이지</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Member ID:
          <input
            type="text"
            name="memberId"
            value={memberId}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields for other member information */}
        <button type="submit">Update 회원정보</button>

        {data && (
          <div>
            {/* Display the retrieved member information here */}
            {/* For example: */}
            {/* <p>Name: {data.name}</p> */}
            {/* <p>Email: {data.email}</p> */}
          </div>
        )}
      </form>
    </div>
  );
};

export default MemberInfoUpdatePage;
