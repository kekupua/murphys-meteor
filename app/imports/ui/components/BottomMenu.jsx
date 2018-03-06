import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid container columns={3}>
            <Grid.Column>
              <h3>Lunch</h3>
              <hr/>
              <p>Monday - Friday: 11:30am - 2:30pm</p>
              <p>Saturday - Sunday: Not Open for Lunch</p>
            </Grid.Column>
            <Grid.Column>
              <h3>Bar</h3>
              <hr/>
              <p>Monday - Friday from 11am</p>
              <p>Saturday - Sunday from 4pm</p>
            </Grid.Column>
            <Grid.Column>
              <h3>Dinner</h3>
              <hr/>
              <p>Monday - Saturday: 5:30pm - 10:00pm</p>
              <p>Sunday: 5:00pm - 9:00pm</p>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
