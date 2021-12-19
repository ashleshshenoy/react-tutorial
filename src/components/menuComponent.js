import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

  class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentHeader : null,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ commentHeader: "Comments"})
        this.setState({ selectedDish: dish});
    }

   
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(dish){
      if (dish != null){
        return(
              
              dish.comments.map((comment)=>{
              return(
                
                <div key={comment.id} className="p-4 border b-1 ">
                  <h4 className="text-secondary">{comment.author}</h4>
                  <p>{comment.comment}</p>
                  <small className="text-muted float-right ">{comment.date}</small>
              </div>
              )
          })
      ) 
    }
    else{
      return(<div></div>);
      }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1 ">
                <Card key={dish.id}
                  onClick={() => {this.onDishSelect(dish);}}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle className="text-dark bg-light border b-2 border-dark p-3  w-50 rounded"><h4>{dish.name}</h4></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                  <h3 className="text-primary">{this.state.commentHeader}  </h3>
                    {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;