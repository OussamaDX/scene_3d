/*
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [paddle1, setPaddle1] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue color

    // Camera setup
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;
    camera.position.y = 2.4;
    camera.rotation.x = -Math.PI / 8; // Adjust the rotation to tilt the camera down slightly

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Load the GLTF models
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/img/table_tennis_table/scene.gltf', (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1); // Adjust the scale if necessary
      scene.add(model);
    }, undefined, (error) => {
      console.error('An error occurred while loading the GLTF model:', error);
    });

    const gltfLoader2 = new GLTFLoader();
    gltfLoader2.load('/img/table_tennis_table/paddle.glb', (glb) => {
      const model2 = glb.scene;
      scene.add(model2);
      model2.position.set(0, 0, -20);
      // model2.scale.set(1, 0.9, 1); // Adjust the scale if necessary
    }, undefined, (error) => {
      console.error('An error occurred while loading the GLTF model:', error);
    });

    const gltfLoader3 = new GLTFLoader();
    gltfLoader3.load('/img/table_tennis_table/paddle.glb', (glb) => {
      const model3 = glb.scene;
      scene.add(model3);
      model3.position.set(0, 1, 3);
      model3.scale.set(0.3, 0.3, 0.3); // Adjust the scale if necessary
      setPaddle1(model3); // Store reference to the first paddle model
    }, undefined, (error) => {
      console.error('An error occurred while loading the GLTF model:', error);
    });


    const gltfLoader4 = new GLTFLoader();
    gltfLoader4.load('/img/ping_pong_ball/ball.gltf', (gltf) => {
      const model4 = gltf.scene;
      scene.add(model4);
      model4.position.set(0, 1, 3);
      model4.scale.set(0.3, 0.3, 0.3); // Adjust the scale if necessary
      setPaddle1(model4); // Store reference to the first paddle model
    }, undefined, (error) => {
      console.error('An error occurred while loading the GLTF model:', error);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!paddle1) return;

      switch (event.key) {
        case 'ArrowLeft':
          paddle1.position.x -= 0.5;
          paddle1.rotation.y += 50;
          break;
        case 'ArrowRight':
          paddle1.position.x += 0.5;
          paddle1.rotation.y -= 50;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paddle1]);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeScene;

*/

















////./////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////./////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////./////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////./////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// hada li t7t



// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { dir } from 'console';
// import { exit } from 'process';

// const ThreeScene: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const [paddle1, setPaddle1] = useState<THREE.Object3D | null>(null);
//   const [paddle2, setPaddle2] = useState<THREE.Object3D | null>(null);
//   const [ball, setBall] = useState<THREE.Object3D | null>(null); // State to store ball reference
//   const [ballModel, setBallModel] = useState<THREE.Group | null>(null);
//   const [velocity, setVelocity] = useState<number>(0.01);
//     let z_velocity = 0.01;
//     let x_velocity = 0.01;
//     const BALL_SPEED = 0.01; // Ball speed
//     let boundingBox_ppadle: THREE.Box3;
//     let boundingBox_ball: THREE.Box3;
//     const range = 0.3; // Define the range for collision detection
//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87CEEB); // Sky blue color

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//     camera.position.y = 2.9;
//     camera.rotation.x = -Math.PI / 8; // Adjust the rotation to tilt the camera down slightly

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     const controls = new OrbitControls(camera, renderer.domElement);

//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     // Load the GLTF models
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load('/img/sci_table/scene.gltf', (gltf) => {
//       const model = gltf.scene;
//       model.position.set(0, 0, 0);
//       model.scale.set(0.6, 0.6, 0.6); // Adjust the scale if necessary
//       scene.add(model);
//     }, undefined, (error) => {
//       console.error('An error occurred while loading the GLTF model:', error);
//     });

//     gltfLoader.load('/img/table_tennis_table/paddle.glb', (glb) => { // computer player
//       const model2 = glb.scene;
//       scene.add(model2);
//       model2.position.set(0, 1.9, -2.9);
//       model2.scale.set(0.2, 0.2, 0.2); // Adjust the scale if necessary
//       setPaddle2(model2);
//     }, undefined, (error) => {
//       console.error('An error occurred while loading the GLTF model:', error);
//     });


//     const loader_paddle = new GLTFLoader();
//     let player_model:THREE.Group;
//     loader_paddle.load('/img/table_tennis_table/paddle.glb', (glb) => 
//     {
//       player_model = glb.scene;
//       scene.add(player_model);
//       player_model.position.set(0, 1.9,2.9);
//       player_model.scale.set(0.2, 0.2, 0.2);
//       setPaddle1(player_model); // Store reference to the ball model
//       // boundingBox_ball = new THREE.Box3().setFromObject(ball_model);
//       // const size_ball = new THREE.Vector3();
//       // boundingBox_ball.getSize(size_ball);

//       // const center_ball = new THREE.Vector3();
//       // boundingBox_ball.getCenter(center_ball);
//     });
  
//     // gltfLoader.load('/img/table_tennis_table/paddle.glb', (glb) => //player paddle 
//     // {
//     //   const model3 = glb.scene;
//     //   scene.add(model3);
//     //   model3.position.set(0, 1.9,2.9);
//     //   model3.scale.set(0.2, 0.2, 0.2);
//     //   setPaddle1(model3);
//     //   boundingBox_ppadle = new THREE.Box3().setFromObject(model3);
//     //   const size = new THREE.Vector3();
//     //   // console.log('Bounding Box:', boundingBox_ppadle);

//     //   boundingBox_ppadle.getSize(size);
//     //   // console.log('Size:', size);

//     //   const center = new THREE.Vector3();
//     //   boundingBox_ppadle.getCenter(center);

//     // }, undefined, (error) => {
//     //   console.error('An error occurred while loading the GLTF model:', error);
//     // });


//     // const loader = new GLTFLoader();
//     // let ball_model:THREE.Group | undefined;
//     // loader.load('/img/table_tennis_table/ball.glb', (glb) => {
//     //   const ballModel = glb.scene;
//     //   scene.add(ballModel);
//     //   ballModel.position.set(0, 2.7, 0);
//     //   ballModel.scale.set(0.9, 0.9, 0.9); // Adjust the scale if necessary
//     // //   setBallModel(ballModel); // Store reference to the ball model
//     // }, undefined, (error) => {
//     //   console.error('An error occurred while loading the GLTF model:', error);
//     // });


//     const loader = new GLTFLoader();
//     let ball_model:THREE.Group;
//     loader.load('/img/table_tennis_table/ball.glb', (glb) => 
//     {
//       ball_model = glb.scene;
//       scene.add(ball_model);
//       ball_model.position.set(0, 2.6, 0);
//       ball_model.scale.set(0.7,0.7,0.7);
//       setBallModel(ballModel); // Store reference to the ball model
//       // boundingBox_ball = new THREE.Box3().setFromObject(ball_model);
//       // const size_ball = new THREE.Vector3();
//       // boundingBox_ball.getSize(size_ball);

//       // const center_ball = new THREE.Vector3();
//       // boundingBox_ball.getCenter(center_ball);
//     });

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
//     directionalLight.position.set(5, 10, 7.5);
//     scene.add(directionalLight);

//     const ball_condition =
//     {
//         right : 0.9,
//         left : 0.9,
//     }


//     const paddle1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//     const paddle2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//     const ballBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

//     function checkCollison()
//     {
//       paddle1BB.setFromObject(player_model);
//       ballBB.setFromObject(ball_model);
//       if (ballBB.intersectsBox(paddle1BB))
//       {
//         z_velocity = -z_velocity;
//         console.log('--------------> there is a  hite to padle');
//       }
//       else
//       {
//         console.log('--------------> noooooooooooooooooooooooo');
//       }
//     }
//     const animate = () =>
//     {
//       //2.8
//         requestAnimationFrame(animate);
//         if (ball_model)
//         {
//             ball_model.translateZ(z_velocity);
//             if (player_model)
//             {
//               checkCollison();
//               // if (ballBB.intersectsBox(paddle1BB))
//               // {
//               //     console.log('oussama');
//               //     z_velocity = -z_velocity;
//               // }
//             }
//         //     if (ball_model.position.z > padd)
//         //     {
//         //       console.log("oussama    ");
//         //       z_velocity = -z_velocity;
//         //       ball_model.position.z += z_velocity > 0 ? 0.1 : -0.1;
//         //     }
//         // //     console.log("ball \n",ball_model.position.z);
//         //     // console.log("paddle ",player_model.position.z);
//         //     // if (checkCollision(ball_model, player_model, range))
//         //     // {
//         //     //   console.log('oussama sss');
//         //     //   z_velocity = -z_velocity;
//         //     //   // Move the ball slightly to avoid it getting stuck inside the paddle
//         //     //   ball_model.position.z += z_velocity > 0 ? 0.1 : -0.1;
//         //     // }
//         }
//         renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on unmount
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (!paddle1) return;

//       switch (event.key) {
//         case 'ArrowLeft':
//           paddle1.position.x -= 0.5;
//           // paddle1.rotation.y += 50;
//           break;
//         case 'ArrowRight':
//           paddle1.position.x += 0.5;
//           // paddle1.rotation.y -= 50;
//           break;
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [paddle1]);


//   const checkCollision = (ball: THREE.Object3D, paddle: THREE.Object3D, range: number): boolean =>
//   {
//     // console.log('2 2222222');
//     const ballPos = ball.position;
//     const paddlePos = paddle.position;
  
//     console.log("ball =>>    ",ball.position.z);
//     console.log("player =>>    ",paddle.position.z);

//     const distance = ballPos.distanceTo(paddlePos);

//     return distance < range;
//   };
//   return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ThreeScene;

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { dir } from 'console';
// import { exit } from 'process';

// const ThreeScene: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const [paddle1, setPaddle1] = useState<THREE.Object3D | null>(null);
//   const [paddle2, setPaddle2] = useState<THREE.Object3D | null>(null);
//   const [ball, setBall] = useState<THREE.Object3D | null>(null); // State to store ball reference
//   const [ballModel, setBallModel] = useState<THREE.Group | null>(null);
//   const [velocity, setVelocity] = useState<number>(0.01);
//     let z_velocity = 0.01;
//     let x_velocity = 0.01;
//     const BALL_SPEED = 0.01; // Ball speed
//     let boundingBox_ppadle: THREE.Box3;
//     let boundingBox_ball: THREE.Box3;
//     const range = 0.3; // Define the range for collision detection
//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87CEEB); // Sky blue color

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//     camera.position.y = 2.9;
//     camera.rotation.x = -Math.PI / 8; // Adjust the rotation to tilt the camera down slightly

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     const controls = new OrbitControls(camera, renderer.domElement);

//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     // Load the GLTF models
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load('/img/sci_table/scene.gltf', (gltf) => {
//       const model = gltf.scene;
//       model.position.set(0, 0, 0);
//       model.scale.set(0.6, 0.6, 0.6); // Adjust the scale if necessary
//       scene.add(model);
//     }, undefined, (error) => {
//       console.error('An error occurred while loading the GLTF model:', error);
//     });

//     gltfLoader.load('/img/table_tennis_table/paddle.glb', (glb) => { // computer player
//       const model2 = glb.scene;
//       scene.add(model2);
//       model2.position.set(0, 1.9, -2.9);
//       model2.scale.set(0.2, 0.2, 0.2); // Adjust the scale if necessary
//       setPaddle2(model2);
//     }, undefined, (error) => {
//       console.error('An error occurred while loading the GLTF model:', error);
//     });


//     const loader_paddle = new GLTFLoader();
//     let player_model:THREE.Group;
//     loader_paddle.load('/img/table_tennis_table/paddle.glb', (glb) => 
//     {
//       player_model = glb.scene;
//       scene.add(player_model);
//       player_model.position.set(0, 1.9,2.9);
//       player_model.scale.set(0.2, 0.2, 0.2);
//       setPaddle1(player_model); // Store reference to the ball model
//       // boundingBox_ball = new THREE.Box3().setFromObject(ball_model);
//       // const size_ball = new THREE.Vector3();
//       // boundingBox_ball.getSize(size_ball);

//       // const center_ball = new THREE.Vector3();
//       // boundingBox_ball.getCenter(center_ball);
//     });
  
//     // gltfLoader.load('/img/table_tennis_table/paddle.glb', (glb) => //player paddle 
//     // {
//     //   const model3 = glb.scene;
//     //   scene.add(model3);
//     //   model3.position.set(0, 1.9,2.9);
//     //   model3.scale.set(0.2, 0.2, 0.2);
//     //   setPaddle1(model3);
//     //   boundingBox_ppadle = new THREE.Box3().setFromObject(model3);
//     //   const size = new THREE.Vector3();
//     //   // console.log('Bounding Box:', boundingBox_ppadle);

//     //   boundingBox_ppadle.getSize(size);
//     //   // console.log('Size:', size);

//     //   const center = new THREE.Vector3();
//     //   boundingBox_ppadle.getCenter(center);

//     // }, undefined, (error) => {
//     //   console.error('An error occurred while loading the GLTF model:', error);
//     // });


//     // const loader = new GLTFLoader();
//     // let ball_model:THREE.Group | undefined;
//     // loader.load('/img/table_tennis_table/ball.glb', (glb) => {
//     //   const ballModel = glb.scene;
//     //   scene.add(ballModel);
//     //   ballModel.position.set(0, 2.7, 0);
//     //   ballModel.scale.set(0.9, 0.9, 0.9); // Adjust the scale if necessary
//     // //   setBallModel(ballModel); // Store reference to the ball model
//     // }, undefined, (error) => {
//     //   console.error('An error occurred while loading the GLTF model:', error);
//     // });


//     const loader = new GLTFLoader();
//     let ball_model:THREE.Group;
//     loader.load('/img/table_tennis_table/ball.glb', (glb) => 
//     {
//       ball_model = glb.scene;
//       scene.add(ball_model);
//       ball_model.position.set(0, 2.6, 0);
//       ball_model.scale.set(0.7,0.7,0.7);
//       setBallModel(ballModel); // Store reference to the ball model
//       // boundingBox_ball = new THREE.Box3().setFromObject(ball_model);
//       // const size_ball = new THREE.Vector3();
//       // boundingBox_ball.getSize(size_ball);

//       // const center_ball = new THREE.Vector3();
//       // boundingBox_ball.getCenter(center_ball);
//     });

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
//     directionalLight.position.set(5, 10, 7.5);
//     scene.add(directionalLight);

//     const ball_condition =
//     {
//         right : 0.9,
//         left : 0.9,
//     }


//     const paddle1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//     const paddle2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
//     const ballBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

//     function checkCollison()
//     {
//       paddle1BB.setFromObject(player_model);
//       ballBB.setFromObject(ball_model);
//       if (ballBB.intersectsBox(paddle1BB))
//       {
//         z_velocity = -z_velocity;
//         console.log('--------------> there is a  hite to padle');
//       }
//       else
//       {
//         console.log('--------------> noooooooooooooooooooooooo');
//       }
//     }
//     const animate = () =>
//     {
//       //2.8
//         requestAnimationFrame(animate);
//         if (ball_model)
//         {
//             ball_model.translateZ(z_velocity);
//             if (player_model)
//             {
//               checkCollison();
//               // if (ballBB.intersectsBox(paddle1BB))
//               // {
//               //     console.log('oussama');
//               //     z_velocity = -z_velocity;
//               // }
//             }
//         //     if (ball_model.position.z > padd)
//         //     {
//         //       console.log("oussama    ");
//         //       z_velocity = -z_velocity;
//         //       ball_model.position.z += z_velocity > 0 ? 0.1 : -0.1;
//         //     }
//         // //     console.log("ball \n",ball_model.position.z);
//         //     // console.log("paddle ",player_model.position.z);
//         //     // if (checkCollision(ball_model, player_model, range))
//         //     // {
//         //     //   console.log('oussama sss');
//         //     //   z_velocity = -z_velocity;
//         //     //   // Move the ball slightly to avoid it getting stuck inside the paddle
//         //     //   ball_model.position.z += z_velocity > 0 ? 0.1 : -0.1;
//         //     // }
//         }
//         renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup on unmount
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (!paddle1) return;

//       switch (event.key) {
//         case 'ArrowLeft':
//           paddle1.position.x -= 0.5;
//           // paddle1.rotation.y += 50;
//           break;
//         case 'ArrowRight':
//           paddle1.position.x += 0.5;
//           // paddle1.rotation.y -= 50;
//           break;
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [paddle1]);


//   const checkCollision = (ball: THREE.Object3D, paddle: THREE.Object3D, range: number): boolean =>
//   {
//     // console.log('2 2222222');
//     const ballPos = ball.position;
//     const paddlePos = paddle.position;
  
//     console.log("ball =>>    ",ball.position.z);
//     console.log("player =>>    ",paddle.position.z);

//     const distance = ballPos.distanceTo(paddlePos);

//     return distance < range;
//   };
//   return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
// };

// export default ThreeScene;


import * as THREE from 'three';
import React, { useState,useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const BoxScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [paddle1, setPaddle1] = useState<THREE.Object3D | null>(null);
  const [ballModel, setBallModel] = useState<THREE.Group | null>(null);

  let z_velocity = 0.02;
  useEffect(() => {
    if (!mountRef.current) return;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera, which determines what we'll see when we render the scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer and add it to the DOM
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);


    // const loader_paddle = new GLTFLoader();
    // let player_model:THREE.Group;
    // loader_paddle.load('/img/table_tennis_table/paddle.glb', (glb) => 
    // {
    //   player_model = glb.scene;
    //   scene.add(player_model);
    //   player_model.position.set(2, -0.9,0);
    //   player_model.rotateY(-190);
    //   player_model.scale.set(0.4, 0.4, 0.4);
    //   setPaddle1(player_model); // Store reference to the ball model
    // });


    //add ligth for player
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);
  
    // const geometry = new THREE.SphereGeometry(1, 32, 32); // radius, segments width, segments height
    // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // const sphere = new THREE.Mesh(geometry, material);  
    // // scene.add(sphere);
    // sphere.scale.set(1, 1, 1);
    // sphere.position.set(-1, 0,0);


    const boxGeometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(-1, 0,0); // Position the box to the right of the sphere
    box.scale.set(1, 1, 1);

    scene.add(box);
  
    // Adding bounding boxes to our cubes
    const blackCubeBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    // const paddle_player = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    const paddle1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

    function checkCollision()
    {
      // if (player_model)
      // {
      // Update bounding boxes with the current position of the cubes
      // paddle1BB.setFromObject(player_model);
      blackCubeBB.setFromObject(box);
      // paddle1BB.setFromObject(player_model);

      if (paddle1BB.intersectsBox(blackCubeBB)) 
      {
        console.log('hiiittttttt  -- <>>>');
         z_velocity = -z_velocity;

      } else {
        console.log('nooooooooo  -- <>>>');
        }
      // }
    }

    // Create a function to animate our scene
    const animate = () => 
    {
      requestAnimationFrame(animate);

        // box.translateX(z_velocity);
        // checkCollision();
      renderer.render(scene, camera);
    };
    // Run the animation function for the first time to kick things off
    animate();

    // Handle window resize
    const handleResize = () => 
    {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Handle keydown events
    const handleKeyDown = (event: KeyboardEvent) =>
    {
      if (!box) return;
      switch (event.key) 
      {
        case 'ArrowLeft':
          box.position.z += 0.5;
          // box.rotation.y += 50;
          break;
        case 'ArrowRight':
          box.position.z -= 0.5;
          // box.rotation.y -= 50;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default BoxScene;
