interface CloudflareEnv {
  KV: KVNamespace;
  AI: unknown; //use as fetcher when calling in binding
  DB: D1Database;
  CF_ACCOUNT_ID: string;
  KV_API_TOKEN: string;
  KV_NAMESPACE_ID: string;
  Worker_KV: string;
}

interface Article {
  article_id: string;
  category: string[];
  country: string[];
  creator: string | null;
  description: string;
  image_url: string;
  keywords: string[] | null;
  link: string;
  pubDate: string;
  source_id: string;
  title: string;
}

interface topArticle {
  title: string;
  image_url: string;
  description: string;
  link: string;
}

interface NewsData {
  business: Article[];
  politics: Article[];
  sports: Article[];
  tech: Article[];
  top: Article[];
}
