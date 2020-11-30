## Slider

* has skins support via css variables
* supports only controlled mode ( values must be stored outside and are changed via `onChange` handler )
* reuses `DraggableX` component for both pins
* has defaults for all basic props ( except `onChange`, which must be provided )
* encourages students to avoid calling `useState` 100500 unneeded times and DERIVE state from props ( i hope so )