import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Loader2, Share2, Bookmark } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Post } from '../types';
import { HERO_POSTS, LATEST_POSTS, TOP_TEN_POSTS } from '../constants';
import { generateArticleContent } from '../services/geminiService';

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Find post in mock data
  useEffect(() => {
    const allPosts = [...HERO_POSTS, ...LATEST_POSTS, ...TOP_TEN_POSTS];
    const found = allPosts.find((p) => p.id === id);
    if (found) {
      setPost(found);
    }
  }, [id]);

  // Generate content via Gemini
  useEffect(() => {
    const fetchContent = async () => {
      if (!post) return;
      
      setLoading(true);
      // Simulate network delay for effect if desired, but here we just call Gemini
      const generatedText = await generateArticleContent(post.title, post.category, post.excerpt);
      setContent(generatedText);
      setLoading(false);
    };

    if (post) {
      fetchContent();
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Post não encontrado</h2>
        <Link to="/" className="text-tech-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-tech-900">
      <article className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-tech-accent mb-8 transition-colors group">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Início
        </Link>

        {/* Header */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-tech-accent/10 border border-tech-700">
           <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-tech-900 via-transparent to-transparent opacity-90"></div>
           <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 rounded-full bg-tech-accent text-tech-900 text-xs font-bold uppercase tracking-wider mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-300 text-sm space-x-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-tech-accent" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-tech-accent" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-tech-accent" />
                  {post.views.toLocaleString()} Leituras
                </div>
              </div>
           </div>
        </div>

        {/* Content */}
        <div className="bg-tech-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-tech-700">
          
          {/* Actions */}
          <div className="flex justify-end gap-4 mb-6">
             <button className="p-2 rounded-full bg-tech-700 hover:bg-tech-600 text-gray-300 transition-colors" title="Salvar">
                <Bookmark className="w-5 h-5" />
             </button>
             <button className="p-2 rounded-full bg-tech-700 hover:bg-tech-600 text-gray-300 transition-colors" title="Compartilhar">
                <Share2 className="w-5 h-5" />
             </button>
          </div>

          {loading ? (
             <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <Loader2 className="w-12 h-12 text-tech-accent animate-spin" />
                <p className="text-gray-400 font-mono animate-pulse">Inicializando Neural Uplink... Gerando Artigo...</p>
             </div>
          ) : (
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-tech-accent prose-strong:text-tech-accent prose-li:text-gray-300">
               <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Related (Simple mocked view) */}
        <div className="mt-12">
           <h3 className="text-2xl font-display font-bold text-white mb-6 border-l-4 border-tech-accent pl-4">Continue Lendo</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {HERO_POSTS.map(p => (
                <Link to={`/post/${p.id}`} key={p.id} className="group bg-tech-800 rounded-xl overflow-hidden border border-tech-700 hover:border-tech-accent transition-all duration-300">
                   <div className="h-32 overflow-hidden">
                     <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title}/>
                   </div>
                   <div className="p-4">
                      <h4 className="font-bold text-white group-hover:text-tech-accent transition-colors">{p.title}</h4>
                   </div>
                </Link>
             ))}
           </div>
        </div>

      </article>
    </div>
  );
};

export default ArticleView;