import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll } from '../Utils';
import Table from 'react-bootstrap/Table';
import MeetingRecordsData from '../assets/meeting_records.json';

interface Record {
    present_date: string;
    presenter: string;
    topic: string;
    is_show: boolean;
}

type Records = Record[];

const BulletinPage: React.FC = () => {
    const [meetingRecords, setMeetingRecords] = useState<Records | null>(null);
    useEffect(() => {
        const sortedRecords = MeetingRecordsData.data
            .sort((a: Record, b: Record) => new Date(a.present_date).getTime() - new Date(b.present_date).getTime())
            .filter((record: Record) => record.is_show) // 過濾出 is_show 為 true 的記錄
            .slice(0, 20); // 取前 20 筆資料

        setMeetingRecords(sortedRecords);
    }, []);

    const onScrollEl = useAnimateOnScroll();
    return (
        <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-4 text-center"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <i className="rvl-icon fas fa-4x fa-table mb-3"></i>
          </div>
          <div className="col-12">
            <h3 className="mb-4">Meeting Records</h3>
          </div>
        </div>
        <div 
            ref={onScrollEl}
            className="table-responsive-sm rvl-animate"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <i className="rvl-icon fas fa-4x fa-table mb-3"></i>
          </div>
          <div className="col-12">
            <h3 className="mb-4">Meeting Records</h3>
          </div>
        </div>
        <div 
            ref={onScrollEl}
            className="table-responsive-sm rvl-animate"
            data-animate-effect="fadeIn"
        >
            <Table striped>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {meetingRecords ? (
                        meetingRecords.map((record: Record, index: number) => (
                            <tr key={index}>
                                <td>{record.topic}</td>
                                <td>{record.presenter}</td>
                                <td>{record.present_date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>Loading...</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
      </div>
    </section>
  );
};

export default BulletinPage;

