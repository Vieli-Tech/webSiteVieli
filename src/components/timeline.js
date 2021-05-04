import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Data from '../data/timelineData'
import { Typography, Paper, Grid, makeStyles, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    textBox: {
        textAlign: "left",
    }
}));

export default function Timeline() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "lightgreen" }}>
                <VerticalTimeline >
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
                            <Grid container className={classes.root} spacing={3}>
                                <Grid item xs={6}>
                                    <Grid item>
                                        <Typography className={classes.textBox} variant="subtitle2" style={{ padding: "15px" }}> {e.text}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item>
                                        <img src={e.image} style={{ maxHeight: "150px", maxWidth: "200px" }} />
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
