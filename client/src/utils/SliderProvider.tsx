import Slider from "react-slick";

interface ISlider {
  children: React.ReactNode;
  settings: any;
  className?: string;
}

export default function SliderProvider({
  children,
  settings,
  className,
}: ISlider) {
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
