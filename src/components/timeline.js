import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Data from '../data/timelineData'

export default function Timeline() {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "lightgreen" }}>
                <VerticalTimeline
                    layout={'1-column-left'} >
                    {Data.map((e) =>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                            // date={e.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: "center", padding: "5px" }}
                            icon={<img src={e.icon} style={{ height: "70%", marginTop: "5px" }} />}
                        >
                            <h3 className="vertical-timeline-element-title" style={{ fontSize: "22px" }} >{e.date}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <div>
                                <p style={{ width: "50%" }}>
                                    {e.text}
                                </p>
                                <img src={e.image} style={{ borderColor: "green" borderStyle: "solid" }} />
                            </div>

                        </VerticalTimelineElement>
                    )}
                </VerticalTimeline>
            </div>
        </React.Fragment >
    );
}
