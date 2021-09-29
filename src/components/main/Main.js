import {Suspense, useState} from "react";
import {connect} from "react-redux";
import {Panel} from "../../utils/panel/Panel";
import {Canvas} from "@react-three/fiber";
import {Model3d} from "../../utils/model3d/Model3d";
import {Walls} from "../../utils/walls/Walls";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {PerspectivePanel} from "../../utils/perspective-panel/PerspectivePanel";

/*
Axes:
The X axis is red. The Y axis is green. The Z axis is blue.
XY red green - [0 0 1]
XZ red blue - [0 1 0]  // todo:: ZX !
YZ green blue - [1 0 0]
*/
const perspectives = [[0, 0, 1], [0, 1, 0], [1, 0, 0]];

function Main(props) {
  const {walls} = props;
  const [url, setUrl] = useState(null);// '/data/Eiffel_tower_sample.stl'
  const [upVal, setUpVal] = useState([0, 0, 1]);

  // handleFileLoad - load model
  const handleFileLoad = (event) => {
    setUrl(URL.createObjectURL(event.target.files[0]));
  }

  // handleSetUpVal - change axes perspective
  const handleSetUpVal = (val) => {
    setUpVal(perspectives[val.target.value]);
  }

  return (
    <div className="App" style={{height: "100vh", width: "100vw"}}>
      <PerspectivePanel handleSetUpVal={handleSetUpVal} />
      <Panel handleFileLoad={handleFileLoad}/>

      <Canvas style={{height: "100vh", width: "100vw"}}>
        <Suspense fallback={null}>
          {url && <Model3d url={url}/>}
          <Walls items={walls}/>
          {/*<gridHelper args={[100, 10]} position={[0, 0, 0]} />*/}
          <axesHelper args={[100, 10]}/>

          {/*<CubeCamera resolution={256} frames={Infinity} fog={false} near={1} far={1000}>
            {(texture) => (
              <mesh>
              <Model3d url={url}/>
              </mesh>
            )}
          </CubeCamera>*/}
        </Suspense>t
        <ambientLight/>
        <PerspectiveCamera position={[150, 150, 150]} up={upVal} makeDefault/>
        <OrbitControls target={[10, 5, 0]}/>
      </Canvas>
    </div>
  );
}

const mapStateToProps = (state) => ({
  walls: state.walls.list,
});

export default connect(mapStateToProps)(Main);
