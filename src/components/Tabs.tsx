import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';


export interface JournalEntry {
    authors: string[];
    title: string;
    journal: string;
    volume: string | null;
    issue: string | null;
    pages: string | null;
    date: string;
}

export interface ConferenceEntry {
  authors: string[];
  title: string;
  conference: string;
  location: string | null;
  date: string;
}

export interface BookEntry {
    authors: string[];
    title: string;
    bookTitle: string;
    editors: string[];
    series?: string | null;
    volume?: string | null;
    chapter?: string | null;
    pages?: string | null;
    publisher: string;
    year: string;
    location?: string | null;
}

export interface PatentEntry {
  inventors: string[];
  title: string;
  patentNumber: string;
  filingDate: string;
  issueDate: string;
}

export interface TeachingEntry {
    course: string;
    grade: string;
} 

export interface ConferenceOrganizingCommitteeEntry {
  role: string;
  conference: string;
}

export interface ConferenceProgramCommitteeEntry {
  conference: string;
  years: number[];
}

export interface EditorialBoardEntry {
  conference: string;
  years: number[];
}

export interface ServiceEntry {
  conferenceOrganizingCommittee: ConferenceOrganizingCommitteeEntry[];
  conferenceProgramCommittee: ConferenceProgramCommitteeEntry[];
  editorialBoard: EditorialBoardEntry[];
}

export interface TabsComponentProps {
    publications: {
        journals: JournalEntry[];
        conferences: ConferenceEntry[];
        books: BookEntry[];
    };
    patents: PatentEntry[];
    teaching: TeachingEntry[];
    service: ServiceEntry;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ publications, patents, teaching, service }) => {
    const [activeTab, setActiveTab] = useState<string>('publications');
    const [activeSubTab, setActiveSubTab] = useState<string>('journals');

    const formatAuthors = (authors: string[]) => {
        if (authors.length === 0) return '';

        if (authors.length === 1) return authors[0];
        if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
        return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
    };

    const formatEditors = (editors: string[]) => {
        if (editors.length === 0) return '';
        if (editors.length === 1) return `${editors[0]} (ed)`;
        return `${editors.join(', ')} (eds)`;
    };

    return (
        <>
            <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k || 'publications')}
                id="professor-tabs"
                className="mb-3"
            >
                <Tab eventKey="publications" title={<span style={{ fontSize: '22px' }}>Publications</span>}>
                    <Tabs
                        activeKey={activeSubTab}
                        onSelect={(k) => setActiveSubTab(k || 'journals')}
                        id="publications-tabs"
                        className="mb-3"
                    >
                        <Tab eventKey="journals" title={<span style={{ fontSize: '18px' }}>Journal</span>}>
                            <div className="row">
                                <div className="col-12">
                                <ul className="rvl-professor-ul">
                                    {publications.journals.map((pub, index) => (
                                    <li key={index}>
                                        {formatAuthors(pub.authors)}, "{pub.title}," <i>{pub.journal}</i>
                                        {pub.volume && `, vol. ${pub.volume}`}
                                        {pub.issue && `, no. ${pub.issue}`}
                                        {pub.pages && `, pp. ${pub.pages}`}
                                        {`, ${pub.date}`}.
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="conferences" title={<span style={{ fontSize: '18px' }}>Conference</span>}>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="rvl-professor-ul">
                                        {publications.conferences.map((entry, index) => (
                                        <li key={index}>
                                                {formatAuthors(entry.authors)}, "{entry.title}," {entry.conference}, {entry.location}, {entry.date}.
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="books" title={<span style={{ fontSize: '18px' }}>Book Chapter</span>}>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="rvl-professor-ul">
                                        {publications.books.map((entry, index) => (
                                            <li key={index}>
                                                {formatAuthors(entry.authors)}, "{entry.title}," {entry.bookTitle}, {formatEditors(entry.editors)},
                                                {entry.series && ` ${entry.series},`}
                                                {entry.volume && ` Vol. ${entry.volume},`}
                                                {entry.pages && ` pp. ${entry.pages},`}
                                                {entry.publisher}, {entry.year}.
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="patents" title={<span style={{ fontSize: '22px' }}>Patents</span>}>
                    <ul className="rvl-professor-ul">
                    {patents.map((entry, index) => (
                        <li key={index}>
                                {formatAuthors(entry.inventors)}, "{entry.title}," U.S. Patent #{entry.patentNumber.split(' ')[1]}, filed {entry.filingDate}, issued {entry.issueDate}.
                        </li>
                    ))}
                    </ul>
                </Tab>
                <Tab eventKey="teaching" title={<span style={{ fontSize: '22px' }}>Teaching</span>}>
                    <div className="row">
                        <div className="col-12">
                            <h4>Undergraduate Courses</h4>
                            <ul className="rvl-professor-ul">
                            {teaching.filter(category => category.grade === "undergraduate")
                                .map((category, index) => (
                                <li key={index}>{category.course}</li>
                            ))}
                            </ul>
                        </div>
                        <div className="col-12">
                            <h4>Graduate Courses</h4>
                            <ul className="rvl-professor-ul">
                            {teaching.filter(category => category.grade === "master")
                                .map((category, index) => (
                                <li key={index}>{category.course}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="services" title={<span style={{ fontSize: '22px' }}>Services</span>}>
                    <div className="row">
                        <div className="col-12">
                            <h4>Conference Organizing Committee</h4>
                            <ul className="rvl-professor-ul">
                            {
                                service.conferenceOrganizingCommittee.map((entry, index) => {
                                    return <li key={index}>{entry.role}{entry.conference}</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Conference Program Committee</h4>
                            <ul className="rvl-professor-ul">
                            {
                                    service.conferenceProgramCommittee.map((entry, index) => {
                                        return <li key={index}>{entry.conference}, {entry.years.join(', ')}</li>
                                    })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Editorial Board</h4>
                            <ul className="rvl-professor-ul">
                            {
                                service.editorialBoard.map((entry, index) => {
                                    return <li key={index}>{entry.conference}, {entry.years.join(', ')}</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </Tab>

        </Tabs>
    </>
  );
};

export default TabsComponent;
