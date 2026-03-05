import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '结构清晰，上手快',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        手册按“产品介绍 → 快速开始 → 订阅与支付 → 设备管理 → 常见问题”的路径组织，
        读者能按使用流程一路走下去。每章都先给结论/入口，再给步骤，减少来回翻找。
      </>
    ),
  },
  {
    title: '面向场景，解决问题导向',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        内容围绕真实使用场景和高频问题来写，强调“遇到什么现象、可能原因、怎么做”。
        尤其在 FAQ 与快速开始里，把排查顺序固定下来，让用户能自助解决大多数问题。
      </>
    ),
  },
  {
    title: '规则透明，边界明确',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        对订阅、续费、退款、多设备上限等关键规则给出清晰说明，
        并明确不同购买渠道的处理方式。对网络体验影响因素与合规使用也做了提示，帮助用户建立合理预期、降低误解与投诉。
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
