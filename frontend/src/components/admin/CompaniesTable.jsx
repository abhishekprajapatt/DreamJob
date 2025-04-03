import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Avatar from 'react-avatar';
import { Popover, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { PopoverContent } from '@radix-ui/react-popover';
import { useSelector } from 'react-redux';

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies?.map((company) => {
            <div key={company._id}>
              <TableCell>
                <Avatar
                  src='src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj"'
                  round={true}
                />
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createAt.split('T')[0]}</TableCell>
              <TableCell className="tert-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div className="flex items-center gap-2 w-fit cursor-pointer">
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </div>;
          })}
          {companies.length <= 0 ? (
            <span>You haven't registered any company yet.</span>
          ) : (
            <>
              {/* {companies?.map((company) => {
                <div key={company._id}>
                  <TableCell>
                    <Avatar
                      src='src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj"'
                      round={true}
                    />
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createAt.split('T')[0]}</TableCell>
                  <TableCell className="tert-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div className="flex items-center gap-2 w-fit cursor-pointer">
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </div>;
              })} */}
            </>
          )}
          {/* <TableCell>
            <Avatar
              src='src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj"'
              round={true}
            />
          </TableCell>
          <TableCell>Company</TableCell>
          <TableCell>28-03-2025</TableCell>
          <TableCell className="tert-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
