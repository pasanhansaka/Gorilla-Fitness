import { motion } from 'framer-motion';
import { PricingCard } from './Cards';

export default function Pricing() {
  const plans = [
    {
      plan: 'Basic Plan',
      price: '29',
      features: ['Access to gym machines', 'Locker room access', '1 Free consultation', 'Standard support'],
      isPopular: false
    },
    {
      plan: 'Pro Plan',
      price: '59',
      features: ['All Basic features', 'Group class access', 'Personalized meal plan', 'Access to sauna & pool', 'Priority support'],
      isPopular: true
    },
    {
      plan: 'Premium Plan',
      price: '89',
      features: ['All Pro features', '2 PT sessions per week', 'Exclusive VIP lounge', 'Free branded apparel', '24/7 Premium support'],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-wider uppercase mb-2"
          >
            Memberships
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark dark:text-light mb-6"
          >
            CHOOSE YOUR ADVENTURE
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Flexible pricing models designed to fit your goals and timeline. No hidden fees, ever.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
