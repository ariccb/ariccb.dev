import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  Redirect,
} from 'next';

function Projects() {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my full-stack and back-end work.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;

// remove the code below when you want the links to work again
export async function getServerSideProps() {
  console.log('running getServerSideProps function..');
  if (true) {
    return {
      redirect: {
        destination: '/wip',
        permanent: false,
      },
    };
  }
}
