
import React, { useState } from 'react';
import Button from './common/Button';

const StudyParticipationSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    setError('');
    // Here you would typically send the email to a backend service
    console.log('Email submitted for study:', email);
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-lightest"> {/* Changed background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-darkest"> {/* Changed text color */}
            Únete a Nuestro <span className="text-primary-DEFAULT">Estudio Exclusivo</span> {/* Changed span color */}
          </h2>
          <p className="mt-4 text-lg text-neutral-dark max-w-3xl mx-auto"> {/* Changed text color */}
            Sé de los primeros en probar Boniato y ayúdanos a construir la mejor herramienta de nutrición personalizada. Tu opinión es fundamental.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
          {submitted ? (
            <div className="text-center">
              <svg className="w-16 h-16 text-primary-DEFAULT mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icon color to green */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-neutral-darkest mb-2">¡Gracias por tu interés!</h3>
              <p className="text-neutral-dark">
                Hemos recibido tu correo. Nos pondremos en contacto contigo pronto con más detalles sobre el estudio.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email_study" className="block text-sm font-medium text-neutral-dark">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email_study"
                  id="email_study"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-neutral-medium rounded-md shadow-sm focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-neutral-darkest"
                  placeholder="tu@email.com"
                  required
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full" size="lg"> {/* Button is already primary (green) */}
                  Quiero Participar
                </Button>
              </div>
              <p className="text-xs text-neutral-medium text-center">
                Al registrarte, aceptas que te contactemos para fines relacionados con el estudio. Respetamos tu privacidad.
              </p>
            </form>
          )}
        </div>
        <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-primary-dark mb-3">¿Qué ganas al participar?</h4> {/* Title color to primary-dark */}
            <ul className="list-none space-y-2 max-w-md mx-auto text-neutral-dark"> {/* Text color for list items */}
                <li className="flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-primary-DEFAULT mr-2"/> Acceso anticipado y gratuito a la app. {/* CheckIcon to primary-DEFAULT (green) */}
                </li>
                <li className="flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-primary-DEFAULT mr-2"/> Influencia directa en el desarrollo de funciones. {/* CheckIcon to primary-DEFAULT (green) */}
                </li>
                <li className="flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-primary-DEFAULT mr-2"/> Contribuir a una alimentación más saludable para todos. {/* CheckIcon to primary-DEFAULT (green) */}
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
);


export default StudyParticipationSection;
