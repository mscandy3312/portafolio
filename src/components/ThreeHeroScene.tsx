"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core - Inner Glowing Polyhedron
    const innerGeo = new THREE.DodecahedronGeometry(3.2, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Outer Cyber Wireframe Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 3. Orbital Holographic Rings
    const ringGeo1 = new THREE.TorusGeometry(5.8, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.7,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(6.6, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    mainGroup.add(ringMesh2);

    // 4. Floating 3D Star / Particle Constellation
    const particleCount = 700;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distribute in a spherical volume
      const radius = 6 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
      particleScales[i / 3] = Math.random() * 2;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.12,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x3b82f6, 4, 30);
    pointLightBlue.position.set(10, 10, 10);
    scene.add(pointLightBlue);

    const pointLightPurple = new THREE.PointLight(0xa855f7, 3, 30);
    pointLightPurple.position.set(-10, -10, 8);
    scene.add(pointLightPurple);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 2, 25);
    pointLightCyan.position.set(0, 8, -6);
    scene.add(pointLightCyan);

    // Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        mainGroup.rotation.y += deltaX * 0.008;
        mainGroup.rotation.x += deltaY * 0.008;
      }

      previousPointerX = clientX;
      previousPointerY = clientY;

      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (clientX - halfW) / halfW;
      mouseY = (clientY - halfH) / halfH;
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      if ("touches" in e && e.touches.length > 0) {
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (!isDragging) {
        mainGroup.rotation.y += 0.004;
        mainGroup.rotation.x = targetY * 0.4;
        mainGroup.rotation.z = targetX * 0.2;
      }

      // Individual mesh counter-rotations
      innerMesh.rotation.y -= 0.008;
      innerMesh.rotation.z += 0.004;
      outerMesh.rotation.y += 0.006;
      outerMesh.rotation.x += 0.003;

      ringMesh1.rotation.z += 0.01;
      ringMesh2.rotation.z -= 0.008;

      // Pulse particle wave
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      // Lights oscillation
      pointLightBlue.position.x = Math.sin(elapsedTime * 0.7) * 12;
      pointLightBlue.position.y = Math.cos(elapsedTime * 0.5) * 12;
      pointLightPurple.position.x = -Math.cos(elapsedTime * 0.6) * 12;
      pointLightPurple.position.y = -Math.sin(elapsedTime * 0.8) * 12;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing overflow-hidden z-0"
      style={{ touchAction: "none" }}
    />
  );
}
