export const skillCategories = [
  'Back-end e linguagens',
  'Front-end e mobile',
  'Dados e infraestrutura',
  'Qualidade e arquitetura',
  'IA e processo'
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export interface Skill {
  icon: string;
  name: string;
  category: SkillCategory;
  rating?: number;
}

export const skills: Skill[] = [
  {
    icon: '/icons/java.svg',
    name: 'Java',
    category: 'Back-end e linguagens',
    rating: 3.5
  },
  {
    icon: '/icons/python.svg',
    name: 'Python',
    category: 'Back-end e linguagens',
    rating: 2.5
  },
  {
    icon: '/icons/spring.svg',
    name: 'Spring',
    category: 'Back-end e linguagens',
    rating: 3
  },
  {
    icon: '/icons/springBoot.svg',
    name: 'Spring Boot',
    category: 'Back-end e linguagens',
    rating: 3
  },
  {
    icon: '/icons/maven.svg',
    name: 'Maven',
    category: 'Back-end e linguagens'
  },
  {
    icon: '/icons/grpc.svg',
    name: 'gRPC',
    category: 'Back-end e linguagens'
  },
  {
    icon: '/icons/openapi.svg',
    name: 'OpenAPI',
    category: 'Back-end e linguagens'
  },
  {
    icon: '/icons/react.svg',
    name: 'React',
    category: 'Front-end e mobile',
    rating: 2.5
  },
  {
    icon: '/icons/reactRedux.svg',
    name: 'Redux',
    category: 'Front-end e mobile',
    rating: 2.5
  },
  {
    icon: '/icons/typeScript.svg',
    name: 'TypeScript',
    category: 'Front-end e mobile',
    rating: 2.5
  },
  {
    icon: '/icons/android.svg',
    name: 'Android',
    category: 'Front-end e mobile',
    rating: 2
  },
  {
    icon: '/icons/postgresql.svg',
    name: 'PostgreSQL',
    category: 'Dados e infraestrutura'
  },
  {
    icon: '/icons/redis.svg',
    name: 'Redis',
    category: 'Dados e infraestrutura'
  },
  {
    icon: '/icons/liquibase.svg',
    name: 'Liquibase',
    category: 'Dados e infraestrutura'
  },
  {
    icon: '/icons/keycloak.svg',
    name: 'Keycloak',
    category: 'Dados e infraestrutura'
  },
  {
    icon: '/icons/docker.svg',
    name: 'Docker',
    category: 'Dados e infraestrutura',
    rating: 3.5
  },
  {
    icon: '/icons/git.svg',
    name: 'Git',
    category: 'Dados e infraestrutura'
  },
  {
    icon: '/icons/jUnit.svg',
    name: 'JUnit',
    category: 'Qualidade e arquitetura',
    rating: 3
  },
  {
    icon: '/icons/jest.svg',
    name: 'Jest',
    category: 'Qualidade e arquitetura',
    rating: 3
  },
  {
    icon: '/icons/testcontainers.svg',
    name: 'Testcontainers',
    category: 'Qualidade e arquitetura'
  },
  {
    icon: '/icons/cleanCode.svg',
    name: 'Clean Code',
    category: 'Qualidade e arquitetura',
    rating: 3
  },
  {
    icon: '/icons/ddd.svg',
    name: 'DDD',
    category: 'Qualidade e arquitetura'
  },
  {
    icon: '/icons/claudeCode.svg',
    name: 'Claude Code',
    category: 'IA e processo'
  },
  {
    icon: '/icons/bmad.svg',
    name: 'BMAD',
    category: 'IA e processo'
  }
];
