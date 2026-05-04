// DotGlobe — sphère wireframe Three.js, montée en vanilla pour rester compatible
// avec le stack CDN (pas de bundler, donc pas de @react-three/fiber).
// Props :
//   rotationSpeed — vitesse de rotation Y (rad/frame)
//   color         — couleur des fils (CSS color string)
//   opacity       — opacité du wireframe (0-1)
//   radius        — rayon de la sphère
function DotGlobe({ rotationSpeed = 0.0025, color = '#ff6118', opacity = 0.18, radius = 1.4 }) {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof THREE === 'undefined' || !mountRef.current) return;
    const mount = mountRef.current;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Sphère wireframe principale
    const geom = new THREE.SphereGeometry(radius, 48, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity,
    });
    const sphere = new THREE.Mesh(geom, mat);
    scene.add(sphere);

    // Halo intérieur — légère sphère pleine très transparente pour donner de la profondeur
    const innerGeom = new THREE.SphereGeometry(radius * 0.985, 48, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#34778f'),
      transparent: true,
      opacity: 0.06,
    });
    const inner = new THREE.Mesh(innerGeom, innerMat);
    scene.add(inner);

    // Points lumineux sur la sphère pour évoquer un réseau global
    const dotGroup = new THREE.Group();
    const dotGeom = new THREE.SphereGeometry(0.018, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) });
    const POINTS = 38;
    for (let i = 0; i < POINTS; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = radius * 1.005;
      const dot = new THREE.Mesh(dotGeom, dotMat);
      dot.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      dotGroup.add(dot);
    }
    scene.add(dotGroup);

    let raf;
    const tick = () => {
      sphere.rotation.y += rotationSpeed;
      sphere.rotation.x += rotationSpeed * 0.25;
      dotGroup.rotation.y += rotationSpeed;
      dotGroup.rotation.x += rotationSpeed * 0.25;
      inner.rotation.y += rotationSpeed * 0.5;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      dotGeom.dispose();
      dotMat.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [rotationSpeed, color, opacity, radius]);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

window.DotGlobe = DotGlobe;
