import React, { useEffect, useState } from 'react';
import { useAnimateOnScroll } from '../Utils';
import PastMemberData from '../assets/past_members.json';

interface PastMember {
    id: number;
    name: string;
    eng_name: string;
    grad: number;
    degree: string;
    statue: string | null;
    thesis: string | null;
}

type Members = PastMember[];

const PastMemberPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const [members, setMembers] = useState<Members | null>(null);
    const DEGREE_DOCTOR = 'Doctor';
    const DEGREE_MASTER = 'Master';
    useEffect(() => {
        setMembers(PastMemberData);
    }, []);

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
                        <h3 className="mb-4">Former Members</h3>
                    </div>
                </div>
            <div 
                ref={onScrollEl}
                className="row rvl-animate text-start"
                data-animate-effect="fadeIn"
            >
                <div className="col-12">
                    <i className="rvl-icon fas fa-4x fa-user mb-3"></i>
                </div>
                <div className="col-12">
                    <h3 className="mb-4">Doctor</h3>
                </div>
            </div>
            <div 
                ref={onScrollEl}
                className="row rvl-animate"
                data-animate-effect="fadeIn"
            >
                 <div className="table-responsive-sm rvl-animate mb-5 fadeInUp rvl-animated">
                 <table className="table table-striped">
                   <colgroup>
                     <col width="25%"></col>
                     <col width="30%"></col>
                     <col width="15%"></col>
                     <col width="30%"></col>
                   </colgroup>
                   <tbody>
                   {members ? members.filter((member) => member.degree == DEGREE_DOCTOR).sort((a, b) => b.grad - a.grad).map((member) =>(
                            <tr>
                            <td>{member.name}</td>
                            <td>{member.eng_name}</td>
                            <td>{member.grad}</td>
                            <td>{member.statue}</td>
                            </tr>   
                        ))
                    : <div className="col-lg-4 col-md-6 col-12 my-5">loading</div>
                    }      
                    </tbody>
                 </table>
               </div>
                
            </div>

            <div 
                ref={onScrollEl}
                className="row rvl-animate text-start"
                data-animate-effect="fadeIn"
            >
                <div className="col-12">
                    <i className="rvl-icon fas fa-4x fa-user mb-3"></i>
                </div>
                <div className="col-12">
                    <h3 className="mb-4">Master</h3>
                </div>
            </div>
            <div 
                ref={onScrollEl}
                className="row rvl-animate"
                data-animate-effect="fadeIn"
            >
                 <div className="table-responsive-sm rvl-animate mb-5 fadeInUp rvl-animated">
                 <table className="table table-striped">
                   <colgroup>
                     <col width="25%"></col>
                     <col width="30%"></col>
                     <col width="15%"></col>
                     <col width="30%"></col>
                   </colgroup>
                   <tbody>
                   {members ? members.filter((member) => member.degree == DEGREE_MASTER).sort((a, b) => b.grad - a.grad).map((member) =>(
                            <tr>
                            <td>{member.name}</td>
                            <td>{member.eng_name}</td>
                            <td>{member.grad}</td>
                            <td>{member.statue}</td>
                            </tr>   
                        ))
                    : <div className="col-lg-4 col-md-6 col-12 my-5">loading</div>
                    }      
                    </tbody>
                 </table>
               </div>
                
            </div>
        </div>
    </section>
  );
};

export default PastMemberPage;

