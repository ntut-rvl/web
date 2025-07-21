import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll } from '../Utils';
import Table from 'react-bootstrap/Table';
import ProjectData from '../assets/project.json';

interface Record {
  project_name: string;
  date: string;
  unit: string;
  work: string;
  is_show: boolean;
}

type Records = Record[];

const ProjectPage: React.FC = () => {  
  const [meetingRecords, setMeetingRecords] = useState<Records | null>(null);
  useEffect(() => {
      const sortedRecords = ProjectData.data
          .sort((a: Record, b: Record) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .filter((record: Record) => record.is_show) // 過濾出 is_show 為 true 的記錄

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
          <h3 className="mb-4">Project</h3>
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
          <h3 className="mb-4">Project</h3>
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
                      <th scope="col">計畫名稱</th>
                      <th scope="col">起訖年月</th>
                      <th scope="col">補助單位</th>
                      <th scope="col">擔任工作</th>
                  </tr>
              </thead>
              <tbody>
                  {meetingRecords ? (
                      meetingRecords.map((record: Record, index: number) => (
                          <tr key={index}>
                              <td>{record.project_name}</td>
                              <td>{record.date}</td>
                              <td>{record.unit}</td>
                              <td>{record.work}</td>
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

export default ProjectPage;
