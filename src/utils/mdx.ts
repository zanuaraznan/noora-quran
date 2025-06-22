import path from 'path';
import { components } from '../components/ui/mdx';
import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';

interface baseMetadata {
    title: string;
}

type MDXData<T extends baseMetadata> = {
    metadata: T;
    slug: string;
    compiledSource: React.ReactNode;
};

export async function getAllContent(): Promise<MDXData<baseMetadata>[]> {
    const dir = path.join(process.cwd(), 'src/content');
    const files = (await fs.readdir(dir)).filter((file) => file.endsWith('.mdx'));
    const results: MDXData<baseMetadata>[] = [];
    for (const file of files) {
        const raw = await fs.readFile(path.join(dir, file), 'utf-8');
        const compiled = await compileMDX<baseMetadata>({
            source: raw,
            options: {
                parseFrontmatter: true,
            },
            components,
        });
        results.push({
            metadata: compiled.frontmatter,
            slug: file.replace(/\.mdx$/, ''),
            compiledSource: compiled.content,
        });
    }
    return results;
}
