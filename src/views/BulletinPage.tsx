import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll, loadJson } from '../Utils';


interface Record {
    present_date: string;
    presenter: string;
    topic: string;
    is_show: boolean;
}

interface Records {
    data: Record[];
}


const BulletinPage: React.FC = () => {
    const [meetingRecords, setMeetingRecords] = useState<Records | null>(null);
    useEffect(() => {
        loadJson<Records>('/meeting_records.json')
            .then((jsonData) => setMeetingRecords(jsonData))
            .catch((error) => console.error('Failed to load presentations:', error));
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
                {meetingRecords ? (
                    meetingRecords.data.filter((record) => record.is_show === true)
                                .map((record, index) => (
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
          </table>
        </div>
      </div>
    </section>
  );
};

export default BulletinPage;

