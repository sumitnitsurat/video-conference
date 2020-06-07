import React from 'react';
import PropTypes from 'prop-types';

export default function StreamActions(props) {
  return (
    <nav className="col-4 col-md-4 col-xs-12 offset-md-4 fixed-bottom rounded-0 d-print-none" style={{zIndex: 999}}>
            <div className="pull-right room-comm" hidden>
                <button className="btn btn-sm rounded-0 btn-no-effect mr-3 mb-4" id='toggle-video' title="Hide Video">
                    <i className="fa fa-video fa-3x text-info"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect mr-3 mb-4" id='toggle-mute' title="Mute">
                    <i className="fa fa-microphone-alt fa-3x text-info"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect mr-3 mb-4" id='share-screen' title="Share screen">
                    <i className="fa fa-desktop fa-3x text-info"></i>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect mr-3 mb-4" id='record' title="Record">
                    <i className="fa fa-dot-circle fa-3x text-info"></i>
                </button>

                <button className="btn btn-sm text-info pull-right btn-no-effect mr-3 mb-4" id='toggle-chat-pane'>
                    <i className="fa fa-comment fa-3x"></i> <span className="badge badge-danger very-small font-weight-lighter" id='new-chat-notification' hidden>New</span>
                </button>

                <button className="btn btn-sm rounded-0 btn-no-effect text-info mb-4">
                    <a href="/" className="text-info text-decoration-none"><i className="fa fa-sign-out-alt fa-3x text-info" title="Leave"></i></a>
                </button>
            </div>
        </nav>
  );
}
