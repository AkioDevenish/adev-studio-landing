import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '$2,500',
    description: 'Perfect for small businesses and startups.',
    features: [
      'Custom Landing Page',
      'Mobile Responsive',
      'SEO Optimization',
      '1 Month Support',
    ],
  },
  {
    name: 'Pro',
    price: '$5,000',
    description: 'Comprehensive solution for growing brands.',
    popular: true,
    features: [
      'Multi-page Website',
      'CMS Integration',
      'Advanced Animations',
      'SEO & Performance',
      '3 Months Support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored digital experiences for large scale.',
    features: [
      'Full-scale Web Application',
      'E-commerce Integration',
      'Custom 3D Assets',
      'Priority Support',
      'Dedicated Manager',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Investment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Transparent pricing for world-class design and development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-surface text-foreground border-transparent'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-muted text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-display font-bold mb-2">{plan.price}</div>
                <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check 
                      size={18} 
                      className={plan.popular ? 'text-muted' : 'text-foreground'} 
                    />
                    <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                  plan.popular
                    ? 'bg-background text-foreground hover:bg-gray-100'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;