import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Group, Mesh } from "three";

const HelmetModel = () => {
  const { scene } = useGLTF("../public/models/construction_helmet2/scene.gltf"); // Modeli yükle

  // Animasyonları kontrol etmek için kullanacağız
  const ref = useRef<Group>(null); // Group tipi ile tipliyoruz

  // Her frame'de modelin dönüşünü ve pozisyonunu güncelle
  useFrame(() => {
    // Modeli döndürmek için y ekseninde 180 derece döndürüyoruz
    if (ref.current) {
      // Modelin rotasını değiştirmek
      //   ref.current.rotation.x += 0.01; // x ekseninde dönme
      ref.current.rotation.y += 0.005; // y ekseninde dönme
      //   ref.current.rotation.z += 0.03; // z ekseninde dönme

      ref.current.traverse((child) => {
        if (child instanceof Mesh) {
          // Modelin materyalini güncelliyoruz
          child.material.color = new Color("blue");
        }
      });
    }
  });

  return (
    <>
      <primitive
        object={scene}
        scale={8}
        rotation={[0, 1.4 * Math.PI, 0]}
        position={[0, -1, 0]}
        ref={ref}
      />
    </>
  );
};

export default HelmetModel;
