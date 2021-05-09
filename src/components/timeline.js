import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Data from '../data/timelineData'
import fundo from '../resources/fundo1.png'
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    textBox: {
        textAlign: "center",
    }
}));

export default function Timeline() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#F3F3F3' }}>
                <VerticalTimeline
                    layout='2-columns'
                >
                    {Data.map((e) =>
                        <VerticalTimelineElement
                            style={{ padding: '5px' }}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', textAlign: "center", padding: "5px" }}
                            icon={<img src={e.icon} style={{ height: "70%", marginTop: "5px" }} />}
                        >
                            <h3 className="vertical-timeline-element-title" style={{ fontSize: "22px" }} >{e.date}</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <Grid container className={classes.root} spacing={3}>
                                <Grid item xs={12}>
                                    <Grid item>
                                        <Typography className={classes.textBox} variant="h7" style={{ paddingTop: "15px" }}> {e.text}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </VerticalTimelineElement>
                    )}
                </VerticalTimeline>
            </div>
        </React.Fragment >
    );
}
