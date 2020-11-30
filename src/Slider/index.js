import DraggableX from "./DraggableX";
import css from "./style.module.css";

const classNames = ( class1, class2 ) => class2 ? `${class1} ${class2}` : class1;

/* minifier will convert it to one-string ternary */
const clamp = ( value, min, max ) => {
    if( value < min ){
        return min;
    }
    
    if( value > max ){
        return max;
    }

    return value;
}

const roundTo = ( value, digits ) => Math.round( value * 10 ** digits ) / 10 ** digits;

const Slider = ({
    max = 100,
    min = 0,
    width = 300,
    pinDiameter = 20,
    value = [ 10, 20 ],
    /* how many digits should step be rounded to */
    stepDigits = 0,
    className,
    onChange
}) => {

    /* how many px does one step have */
    const pxInStep = ( width - pinDiameter ) / ( max - min );

    const [ pin1Value, pin2Value ] = value;
    
    const pin1X = ( pin1Value - min ) * pxInStep;
    const pin2X = ( pin2Value - min ) * pxInStep;

    const pinDimensions = {
        width: pinDiameter,
        height: pinDiameter
    };

    const pin1DragHandler = x => onChange([
        clamp( roundTo( x / pxInStep, stepDigits ) + min, min, pin2Value ),
        pin2Value
    ]);

    const pin2DragHandler = x => onChange([
        pin1Value,
        clamp( roundTo( x / pxInStep, stepDigits ) + min, pin1Value, max )
    ]);

    return (
        <div className={classNames(css.wrapper,className)} style={{ width, height: pinDiameter }}>
            <div className={css.track} />
            <div className={css.selectedTrack} style={{ width: pin2X - pin1X, left: pin1X }} />
            <DraggableX onDrag={pin1DragHandler} left={pin1X}>
                <div style={pinDimensions} className={css.pin} />
            </DraggableX>
            <DraggableX onDrag={pin2DragHandler} left={pin2X}>
                <div style={pinDimensions} className={css.pin} />
            </DraggableX>
        </div>
    )
}

export default Slider;