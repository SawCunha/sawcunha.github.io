## ADDED Requirements

### Requirement: Links de redes sociais no About
O sistema SHALL exibir, na seção About, abaixo do texto, links para GitHub, LinkedIn e Instagram.

#### Scenario: Links visíveis
- **WHEN** a seção About é renderizada
- **THEN** existem três links, nesta ordem: GitHub (`https://github.com/SawCunha`), LinkedIn (`https://www.linkedin.com/in/samuel-goncalves-cunha`) e Instagram (`https://www.instagram.com/sawcunha`)

### Requirement: Fonte única de dados dos links
Os links de redes sociais SHALL ser definidos uma única vez em `src/model/SocialLink.ts` e consumidos tanto pelo About quanto pelo rodapé, que SHALL continuar exibindo-os.

#### Scenario: Mudança de URL
- **WHEN** a URL de uma rede social é alterada em `SocialLink.ts`
- **THEN** About e rodapé passam a apontar para a nova URL sem outra edição

#### Scenario: Rodapé preservado
- **WHEN** o rodapé é renderizado
- **THEN** exibe os mesmos três links, na mesma ordem, sob o texto "My social media links:"

### Requirement: Links sociais acessíveis
Cada link social SHALL ter nome acessível igual ao nome da rede, SHALL abrir em nova aba com `rel="noopener noreferrer"`, SHALL ter área de toque mínima de 44×44 CSS px e SHALL exibir indicador de foco visível ao ser navegado por teclado. O ícone SHALL ser oculto de tecnologia assistiva (`aria-hidden`).

#### Scenario: Nome acessível
- **WHEN** um leitor de tela foca o link do LinkedIn
- **THEN** anuncia "LinkedIn, link"

#### Scenario: Alvo de toque
- **WHEN** o tamanho computado de cada link social é medido
- **THEN** largura e altura são ≥ 44px

#### Scenario: Navegação por teclado
- **WHEN** o usuário percorre a página com Tab
- **THEN** cada link social recebe foco em ordem visual e exibe um anel de foco visível
