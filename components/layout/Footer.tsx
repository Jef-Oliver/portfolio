import { Github, Mail, ExternalLink } from 'lucide-react';

const quickLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-light mb-4">Jeferson Oliver</h3>
            <p className="text-gray-300 leading-relaxed">
              Backend Developer especializado em Python, Java e soluções robustas que fazem diferença no mundo real.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:text-purple-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/curriculo-jeferson-oliver.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:text-purple-light inline-flex items-center gap-1"
                  aria-label="Baixar currículo (PDF)"
                >
                  Currículo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Conecte-se</h4>
            <div className="space-y-4">
              <a
                href="https://github.com/Jef-Oliver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:text-purple-light"
                aria-label="Ver perfil no GitHub (abre em nova aba)"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jef-oliver/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:text-purple-light"
                aria-label="Ver perfil no LinkedIn (abre em nova aba)"
              >
                <ExternalLink className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:jeferson.greenish@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-light transition-colors duration-300 focus:outline-none focus:text-purple-light"
                aria-label="Enviar email"
              >
                <Mail className="w-5 h-5" />
                jeferson.greenish@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jeferson Oliver. Todos os direitos reservados.
            </p>
            
            <p className="text-gray-400 text-sm">
              Feito com ❤️ usando Next.js, TypeScript e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}