import { Component, cloneElement, Children } from "react";

class DraggableX extends Component {

    static defaultProps = {
        left: 0
    }

    downX = 0;

    mouseDownHandler = e => {
        document.body.style.userSelect = "none";
        window.addEventListener("mousemove", this.mouseMoveHandler);
        window.addEventListener("mouseup", this.mouseUpHandler);

        this.downX = e.clientX - this.props.left;
    }

    mouseUpHandler = () => {
        document.body.style.userSelect = "auto";
        window.removeEventListener("mousemove", this.mouseMoveHandler);
        window.removeEventListener("mouseup", this.mouseUpHandler);
    }

    mouseMoveHandler = e => {
        this.props.onDrag( e.clientX - this.downX );
    }

    componentWillUnmount() {
        document.body.style.userSelect = "auto";
        window.removeEventListener("mousemove", this.mouseMoveHandler);
        window.removeEventListener("mouseup", this.mouseUpHandler);
    }

    render() {
        return (
            Children.only(cloneElement(
                this.props.children,
                {
                    onMouseDown: this.mouseDownHandler,
                    style: {
                        ...this.props.children.props.style,
                        transform : `translateX(${this.props.left}px)`
                    }
                }
            ))
        )
    }
}

export default DraggableX;