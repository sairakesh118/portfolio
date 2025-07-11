import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code, Database, Globe, ChevronDown, Sparkles, Rocket, Zap } from 'lucide-react';
import * as THREE from 'three';

const Hero = ({ scrollToSection }) => {
  const backgroundMountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  
  // Typing animation state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'Python Developer',
    'React Developer',  
    'Backend Developer',
    'Frontend Developer',
    'Software Engineer'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayAfterComplete = 2000;
    const delayAfterDelete = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayAfterComplete);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }, delayAfterDelete);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  // Enhanced 3D Background Animation
  useEffect(() => {
    if (!backgroundMountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1';
    renderer.domElement.style.pointerEvents = 'none';
    
    backgroundMountRef.current.appendChild(renderer.domElement);

    // Create multiple animated objects with enhanced materials
    const objects = [];
    
    // Main Torus with enhanced material
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 24, 120);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ffaa,
      transparent: true,
      opacity: 0.4,
      shininess: 200,
      emissive: 0x004433,
      specular: 0xffffff,
      wireframe: false
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(4, 0, -6);
    scene.add(torus);
    objects.push({ mesh: torus, type: 'torus' });

    // Orbiting Sphere with glow
    const sphereGeometry = new THREE.SphereGeometry(0.4, 40, 40);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xff3366,
      transparent: true,
      opacity: 0.5,
      emissive: 0x330011,
      shininess: 150
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(-4, 2, -4);
    scene.add(sphere);
    objects.push({ mesh: sphere, type: 'sphere' });

    // Wireframe Icosahedron (more complex than cube)
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const icosahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ccff,
      transparent: true,
      opacity: 0.3,
      wireframe: true 
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.set(-5, -2, -5);
    scene.add(icosahedron);
    objects.push({ mesh: icosahedron, type: 'icosahedron' });

    // Add a second torus for complexity
    const torus2Geometry = new THREE.TorusGeometry(0.8, 0.2, 16, 80);
    const torus2Material = new THREE.MeshPhongMaterial({
      color: 0xaa00ff,
      transparent: true,
      opacity: 0.3,
      emissive: 0x220044,
      shininess: 100
    });
    const torus2 = new THREE.Mesh(torus2Geometry, torus2Material);
    torus2.position.set(2, -3, -4);
    scene.add(torus2);
    objects.push({ mesh: torus2, type: 'torus2' });

    // Enhanced floating particles with varied sizes
    const particleCount = 80;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 0.03 + 0.01;
      const particleGeometry = new THREE.SphereGeometry(size, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
        transparent: true,
        opacity: Math.random() * 0.5 + 0.3
      });
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      
      // Add movement properties
      particle.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };
      
      scene.add(particle);
      particles.push(particle);
    }

    // Professional lighting setup with more dynamic lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x00ffaa, 1.0);
    directionalLight1.position.set(10, 10, 10);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xff3366, 0.8);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);

    const pointLight1 = new THREE.PointLight(0x00aaff, 1.5, 60);
    pointLight1.position.set(0, 0, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffaa00, 1.2, 50);
    pointLight2.position.set(5, 5, 0);
    scene.add(pointLight2);

    // Camera positioning
    camera.position.set(0, 0, 8);

    // Enhanced mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Enhanced animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Animate main objects with more complex movements
      objects.forEach((obj, index) => {
        const mesh = obj.mesh;
        const offset = index * 1.5;
        
        switch (obj.type) {
          case 'torus':
            mesh.rotation.x = time * 0.4;
            mesh.rotation.y = time * 0.6;
            mesh.rotation.z = time * 0.3;
            mesh.position.y = Math.sin(time * 1.2 + offset) * 0.8;
            mesh.position.x = 4 + Math.cos(time * 0.5 + offset) * 0.5;
            break;
            
          case 'sphere':
            // Complex orbiting motion
            const radius = 5;
            mesh.position.x = Math.cos(time * 1.2 + offset) * radius;
            mesh.position.z = Math.sin(time * 1.2 + offset) * radius - 4;
            mesh.position.y = Math.sin(time * 2.5 + offset) * 1.5 + 2;
            mesh.rotation.x = time * 3;
            mesh.rotation.y = time * 2;
            break;
            
          case 'icosahedron':
            mesh.rotation.x = time * 0.5;
            mesh.rotation.y = time * 0.8;
            mesh.rotation.z = time * 0.4;
            mesh.position.y = Math.cos(time * 1.5 + offset) * 1.2 - 2;
            mesh.position.x = -5 + Math.sin(time * 0.7 + offset) * 0.8;
            break;
            
          case 'torus2':
            mesh.rotation.x = time * -0.6;
            mesh.rotation.y = time * 0.9;
            mesh.rotation.z = time * -0.3;
            mesh.position.y = Math.sin(time * 1.8 + offset) * 1.0 - 3;
            mesh.position.z = -4 + Math.cos(time * 0.8 + offset) * 1.5;
            break;
        }
      });

      // Enhanced particle animation
      particles.forEach((particle, index) => {
        // Continuous movement
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;
        particle.position.z += particle.velocity.z;
        
        // Floating motion
        particle.position.y += Math.sin(time * 2 + index * 0.1) * 0.01;
        particle.position.x += Math.cos(time * 1.5 + index * 0.2) * 0.008;
        
        // Rotation
        particle.rotation.x = time * 2 + index;
        particle.rotation.y = time * 1.5 + index * 0.5;
        particle.rotation.z = time + index * 0.3;
        
        // Boundary wrapping
        const boundary = 15;
        if (particle.position.x > boundary) particle.position.x = -boundary;
        if (particle.position.x < -boundary) particle.position.x = boundary;
        if (particle.position.y > boundary) particle.position.y = -boundary;
        if (particle.position.y < -boundary) particle.position.y = boundary;
        if (particle.position.z > boundary) particle.position.z = -boundary;
        if (particle.position.z < -boundary) particle.position.z = boundary;
      });

      // Enhanced mouse interaction for camera with smoother movement
      camera.position.x += (mouseX * 1.0 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 1.0 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // Dynamic light movement
      pointLight1.position.x = Math.sin(time * 0.8) * 5;
      pointLight1.position.y = Math.cos(time * 0.6) * 3;
      
      pointLight2.position.x = Math.cos(time * 0.9) * 6;
      pointLight2.position.z = Math.sin(time * 0.7) * 4;

      renderer.render(scene, camera);
    };

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Start animation
    animate();

    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (backgroundMountRef.current && renderer.domElement) {
        backgroundMountRef.current.removeChild(renderer.domElement);
      }
      
      // Enhanced cleanup
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section id='home' className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Enhanced 3D Background Animation Container */}
      <div ref={backgroundMountRef} className="absolute inset-0" style={{ zIndex: 1 }} />
      
      {/* Animated Grid Background Overlay */}
      <div className="absolute inset-0 opacity-20 animate-pulse" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,170,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,170,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-[drift_20s_ease-in-out_infinite]"></div>
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" style={{ zIndex: 3 }}></div>

      {/* Content Layer */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Main Hero Content */}
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Centered Content with enhanced animations */}
            <div className="text-center space-y-8 animate-[fadeInUp_1s_ease-out]">
              <div className="space-y-6">
                {/* Enhanced greeting with sparkle effect */}
                <div className="relative inline-block">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-white relative">
                      Hi, I'm
                      <Sparkles className="absolute -top-2 -right-8 text-yellow-400 animate-pulse" size={20} />
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-[shimmer_2s_ease-in-out_infinite]">
                      Sai Rakesh
                    </span>
                  </h1>
                </div>
                
                {/* Enhanced typing animation */}
                <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
                  <span className="text-green-400 mr-2 animate-pulse">&gt;</span>
                  <span className="font-mono bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    {displayText}
                    <span className="animate-pulse text-green-400">|</span>
                  </span>
                </div>
                
                {/* Enhanced description with subtle animation */}
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-[fadeIn_1.5s_ease-out_0.5s_both]">
                  I create exceptional digital experiences through innovative web development, 
                  combining cutting-edge technology with user-centered design principles.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeIn_1.5s_ease-out_0.8s_both]">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <Rocket size={18} className="group-hover:animate-bounce" />
                    View My Work
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 border-2 border-green-400 text-green-400 rounded-xl font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative flex items-center gap-2">
                    <Zap size={18} className="group-hover:animate-pulse" />
                    Get In Touch
                  </span>
                </button>
              </div>

              {/* Enhanced Tech Stack with better animations */}
              <div className="flex gap-6 justify-center pt-4 animate-[fadeIn_1.5s_ease-out_1s_both]">
                <div className="group p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-green-400 hover:bg-green-400/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-110 hover:rotate-6">
                  <Code size={28} className="text-gray-400 group-hover:text-green-400 transition-all duration-300 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="group p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-110 hover:rotate-6">
                  <Database size={28} className="text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="group p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-blue-400 hover:bg-blue-400/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-110 hover:rotate-6">
                  <Globe size={28} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-green-400 hover:text-cyan-400 transition-colors cursor-pointer">
            <span className="text-sm font-medium animate-pulse">Scroll to explore</span>
            <div className="relative">
              <ChevronDown size={24} className="animate-bounce" />
              <div className="absolute inset-0 bg-green-400/30 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(-5px) translateY(10px); }
          75% { transform: translateX(-10px) translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default Hero;