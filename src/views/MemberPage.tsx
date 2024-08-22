import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll, loadJson } from '../Utils';

interface Member {
    name: string;
    eng_name: string;
    avatar: string | null;
    degree: string;
    email: string;
    company: string,
    grad: string,
    is_graduated: boolean,
}

interface Members {
    data: Member[]
}

const MemberPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const [members, setMembers] = useState<Members | null>(null);
    useEffect(() => {
        loadJson<Members>('/members.json')
            .then((jsonData) => {
                console.log(jsonData)
                setMembers(jsonData)
            })
            .catch((error) => console.error('Failed to load presentations:', error));
    }, []);
    console.log(members);

    return (
        <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white text-center">
            <div className="container">
                <div 
                    ref={onScrollEl}
                    className="row rvl-animate mb-4 text-center"
                    data-animate-effect="fadeIn"
                >
                <div className="col-12">
                    <i className="rvl-icon fas fa-4x fa-user mb-3"></i>
                </div>
                <div className="col-12">
                    <h3 className="mb-4">Members</h3>
                </div>
            </div>
            <div 
                ref={onScrollEl}
                className="row rvl-animate"
                data-animate-effect="fadeIn"
            >
                {members ? members.data.map((member, index) => (
                    <div className="col-lg-4 col-md-6 col-12 my-5" key={index}>
                        <div className="rvl-block p-5">
                            <img
                                className="rvl-avatar mb-4"
                                src={member.avatar ? `./assets/avatars/${member.avatar}` : '/avatar/placeholder.jpg'}
                                alt={member.name ? `${member.name} avatar` : `avatar`}
                                height="150"
                                width="150"
                            />
                            <p className="rvl-avatar-name mb-0">{member.name}</p>
                            <p className="rvl-avatar-name">{member.eng_name}</p>
                            <p className="mb-0">{member.degree.charAt(0).toUpperCase() + member.degree.slice(1)}</p>
                            <a href={`mailto:${member.email}`}>{member.email}</a>
                        </div>
                    </div>
                ))
                    : <div className="col-lg-4 col-md-6 col-12 my-5">loading</div>
                };
            </div>
        </div>
    </section>
  );
};

export default MemberPage;

