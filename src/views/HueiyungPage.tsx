import React from 'react';
import TabsComponent, { TabsComponentProps, JournalEntry, ConferenceEntry, BookEntry, PatentEntry, ServiceEntry, TeachingEntry  } from '../components/Tabs';
import ProfessorImg from '../assets/images/professor.jpg'
import JournalData from '../assets/hueiyung/journal.json';
import ConferenceData from '../assets/hueiyung/conference.json';
import BookData from '../assets/hueiyung/book.json';
import PatentData from '../assets/hueiyung/patents.json';
import TeachingData from '../assets/hueiyung/teaching.json';
import ServiceData from '../assets/hueiyung/service.json';


interface Professor {
    nameZh: string;
    nameEn: string;
    departments: string[];
    background: string[];
    researchInterests: string[];
    photoUrl: string;
    tabs: TabsComponentProps;
}

const HueiyungPage: React.FC = () => {
    const journalEntries: JournalEntry[] = JournalData["data"];
    const conferenceEntries: ConferenceEntry[] = ConferenceData;
    const bookEntries: BookEntry[] = BookData;
    const patentEntries: PatentEntry[] = PatentData;
    const teachingEntries: TeachingEntry[] = TeachingData;
    const serviceEntry: ServiceEntry = {
        conferenceOrganizingCommittee: ServiceData.conferenceOrganizingCommittee,
        conferenceProgramCommittee: ServiceData.conferenceProgramCommittee,
        editorialBoard: ServiceData.editorialBoard,
    };
    console.log(serviceEntry)

    const tabsData: TabsComponentProps = {
        publications: {
            journals: journalEntries,
            conferences: conferenceEntries,
            books: bookEntries
        },
        patents: patentEntries,
        teaching: teachingEntries,
        service: serviceEntry
    };

    const professor: Professor = {
        nameZh: '林惠勇',
        nameEn: 'Huei-Yung Lin',
        departments: [
            'Department of Computer Science and Information Engineering',
            'National Taipei University of Technology',
            'Department of Electrical Engineering',
            'National Chung Cheng University',
        ],
        background: [
            'PhD, Electrical Engineering, State University of New York at Stony Brook, 2002',
            'Professor, National Chung Cheng University, Taiwan, 2013 - present',
            'Professor, National Taipei University of Technology, Taiwan, 2022 - present',
        ],
        researchInterests: ['Robotics', 'Computer Vision', 'Machine Learning'],
        photoUrl: ProfessorImg,
        tabs: tabsData
    };

  return (
    <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white" id="professor">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-11 mx-auto text-center rvl-block p-5">
            <div className="row mb-5">
              <div className="col-md-5 col-12 rvl-professor-separator">
                <img
                  className="rvl-avatar mb-4 mt-0"
                  src={professor.photoUrl}
                  height="150"
                  width="150"
                  alt={professor.nameEn}
                />
                <p className="rvl-avatar-name mb-0">{professor.nameZh}</p>
                <p className="rvl-avatar-name">{professor.nameEn}</p>
                {professor.departments.map((dept, index) => (
                  <p className="mb-0" key={index}>
                    {dept}
                  </p>
                ))}
              </div>
              <div className="col-md-7 col-12 mt-5">
                <div className="row">
                  <div className="col-12 text-md-left">
                    <h4>Background</h4>
                  </div>
                  <div className="col-12">
                    <ul className="rvl-professor-ul">
                      {professor.background.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-md-left">
                    <h4>Research Interests</h4>
                  </div>
                  <div className="col-12">
                    <ul className="rvl-professor-ul">
                      {professor.researchInterests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Use the extracted TabsComponent */}
            <TabsComponent
                publications={professor.tabs.publications}
                patents={professor.tabs.patents}
                teaching={professor.tabs.teaching}
                service={professor.tabs.service}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HueiyungPage;

