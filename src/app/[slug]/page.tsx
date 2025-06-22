import { notFound } from 'next/navigation';
import { getAllContent } from '@/utils/mdx';
import MDXHeader from '@/components/ui/mdxHeader';
import Container from '@/components/ui/Container';

export const dynamicParams = false;

type Params = { slug: string };

export async function generateStaticParams() {
    const contents = await getAllContent();
    return contents.map((content) => ({ slug: content.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
    const contents = await getAllContent();
    const { slug } = params;
    const content = contents.find((content) => content.slug === slug);
    if (!content) return notFound();

    return { title: content.metadata.title };
}

export default async function Page({ params }: { params: Params }) {
    const contents = await getAllContent();
    const { slug } = params;
    const content = contents.find((content) => content.slug === slug);
    if (!content) return notFound();

    return (
        <section>
            <MDXHeader title={content.metadata.title} className='h-[50vh]' />
            <Container as='main' className='my-12 mdx-container'>
                {content.compiledSource}
            </Container>
        </section>
    );
}
