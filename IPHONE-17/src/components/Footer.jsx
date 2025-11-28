function Footer() {
  const sections = [
    {
      title: "Comprar e Saber Mais",
      links: [
        "iPhone 17 Pro",
        "iPhone 17 Pro Max",
        "Comparar modelos",
        "Acessorios",
      ],
    },
    {
      title: "Especificações",
      links: ["Caracteristicas tecnicas", "Camera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "appleCare+", "ios19", "Contato"],
    },
    {
      title: "Apple",
      links: [
        "Sobre a Apple",
        "Trabalhe na Apple",
        "Noticias",
        "Investidores",
        "Eventos",
        "Contato",
      ],
    },
  ];

  const buttonsLinks = [
    "Politica de Privacidade",
    "Termos de uso",
    "vendas",

  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkindex) => (
                  <li key={linkindex}>
                    <a className="hover:text-white cursor-pointer" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bordr-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-md text-gray-400">Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>

          <div className="flex gap-6  text-gray-400 cursor-pointer">
            {buttonsLinks.map((link, index) => (
              <a href="#" key={index} className="hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Site criado para fins educacionais
        </p>
      </div>
    </footer>
  );
}

export default Footer;
