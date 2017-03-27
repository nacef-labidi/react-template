import React from 'react';

const DashboardStat = React.createClass({
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <a className="dashboard-stat dashboard-stat-v2 blue" href="#">
                    <div className="visual">
                        <i className="fa fa-comments"></i>
                    </div>
                    <div className="details">
                        <div className="number">
                            <span data-counter="counterup" data-value="1349">1349</span>
                        </div>
                        <div className="desc"> New Feedbacks </div>
                    </div>
                </a>
            </div>
        )
    }
});

export default DashboardStat;
