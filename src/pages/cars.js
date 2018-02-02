import React from "react";
import Link from "gatsby-link";
import graphql from "graphql";

import PageHeading from '../components/PageHeading'
import CarList from '../components/CarList'

export default class Cars extends React.Component {

  render() {
    const { data } = this.props;

    return (
        <div>
            <PageHeading/>
          <section  className=" style3 special">
          <div className="inner">

            <CarList carItems={data.allAirtable.edges}/>
        </div>
        </section>
        </div>
    );
  }
}

export const CarPageQuery = graphql`
  query CarsQuery {
    allAirtable{
    edges{
      node{
        name
        image{
          url
        }
      }
    }
}
  }
`;
