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
