// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import H4 from '../../ui/typography/H4'
import { Input, Textarea } from '../../ui/input'
import { white } from "../../ui/common/colors"

// App Imports
import { routeImage } from "../../setup/routes"
import userRoutes from '../../setup/routes/user'

// Component
class EditUserInfo extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: false,
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        address: '',
        description: ''
      }
    }
  }

  onChange = (event) => {
    let user = this.state.user
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })
  }

  render() {
    return (
      <div>
        <Helmet>
         <title>My Profile - Crate</title>
        </Helmet>
        {/* Page Content */}
        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell style={{ textAlign: 'left' }}>
            <Link to={userRoutes.profile.path}>
              <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
            </Link>
          </GridCell>
        </Grid>

        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell>
            <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
              Edit My Account
            </H4>
          </GridCell>
        </Grid>      
      </div>
    )
  }
} 

  export default withRouter(connect(null, {

  })(EditUserInfo))
