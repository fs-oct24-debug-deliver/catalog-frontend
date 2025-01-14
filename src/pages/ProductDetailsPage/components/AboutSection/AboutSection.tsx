import aboutStyle from './AboutSection.module.scss';
import { Product } from '../../../../../src/types/Product';
import { TechSpecs } from '../TechSpecs';

type AboutSectionProps = {
  description: Product['description'];
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[];
  };
};

export const AboutSection = ({ description, specs }: AboutSectionProps) => {
  return (
    <section className={aboutStyle.info}>
      <div className={aboutStyle.about}>
        <h3 className={aboutStyle.title}>About</h3>
        <div className={aboutStyle.articles}>
          {description.map((item, index) => (
            <article
              key={index}
              className={aboutStyle.article}
            >
              <h4 className={aboutStyle.articleTitle}>{item.title}</h4>
              <div className={aboutStyle.textContainer}>
                {item.text.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={aboutStyle.text}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={aboutStyle.techSpecs}>
        <TechSpecs specs={specs} />
      </div>
    </section>
  );
};
