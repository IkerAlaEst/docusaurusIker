import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Precepto 1',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        'Siempre Gana Tus Batallas'. Perder una batalla no te gana nada y no te enseña nada.
        ¡Gana tus batallas, o no te involucres en ellas! 
      </>
    ),
  },
  {
    title: 'Precepto 2',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        'Nunca Dejes Que Se Rían de Ti'. Los tontos se ríen de todo, incluso de sus superiores.
        ¡Pero cuidado, la risa no es inofensiva!
        La risa se propaga como una enfermedad, y pronto todos se estarán riendo de ti.
        Debes atacar rápidamente la fuente de esta diversión perversa para evitar que se propague.
      </>
    ),
  },
  {
    title: 'Precepto 3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        'Siempre Descansa'. Luchar y aventurarse le pasan factura a tu cuerpo.
        Cuando descansas, tu cuerpo se fortalece y se repara.
        Cuanto más descansas, más fuerte te vuelves. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
