import { getMDXComponent } from "next-contentlayer/hooks";
import Image, { ImageProps } from "next/image";

interface MdxProps {
  code: string;
}

const components = {
  Image: (props: ImageProps) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={100}
      height={100}
      className="w-full h-auto rounded overflow-hidden"
    />
  ),
};

export default function Mdx({ code }: MdxProps) {
  const Component = getMDXComponent(code);

  return (
    <Component
      components={components}
    />
  );
}
