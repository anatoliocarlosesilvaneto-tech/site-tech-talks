import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Clock, Trophy, Flame, Hash, Search } from 'lucide-react';
import { HERO_POSTS, LATEST_POSTS, TOP_TEN_POSTS } from '../constants';
import { Post } from '../types';

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      {/* Main Feature */}
      <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px] shadow-2xl shadow-tech-accent/5">
        <img 
          src={HERO_POSTS[0].imageUrl} 
          alt={HERO_POSTS[0].title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-900 via-tech-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <span className="inline-block px-3 py-1 bg-tech-accent text-tech-900 font-bold text-xs uppercase rounded-full mb-3 tracking-wide">
            {HERO_POSTS[0].category}
          </span>
          <Link to={`/post/${HERO_POSTS[0].id}`}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 hover:text-tech-accent transition-colors">
              {HERO_POSTS[0].title}
            </h2>
          </Link>
          <p className="text-gray-300 line-clamp-2 md:w-2/3 mb-4 text-lg">
            {HERO_POSTS[0].excerpt}
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>{HERO_POSTS[0].author}</span>
            <span className="mx-2">•</span>
            <span>{HERO_POSTS[0].date}</span>
          </div>
        </div>
      </div>

      {/* Secondary Feature */}
      <div className="group relative rounded-2xl overflow-hidden h-[300px] lg:h-[500px] border border-tech-800">
        <img 
          src={HERO_POSTS[1].imageUrl} 
          alt={HERO_POSTS[1].title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-900 via-tech-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <span className="inline-block px-2 py-1 bg-purple-500 text-white font-bold text-xs uppercase rounded-full mb-2 tracking-wide">
            {HERO_POSTS[1].category}
          </span>
          <Link to={`/post/${HERO_POSTS[1].id}`}>
            <h3 className="text-2xl font-display font-bold text-white mb-2 hover:text-purple-400 transition-colors">
              {HERO_POSTS[1].title}
            </h3>
          </Link>
          <div className="flex items-center text-gray-400 text-xs">
             <Clock className="w-3 h-3 mr-1" />
             <span>{HERO_POSTS[1].date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Link to={`/post/${post.id}`} className="block group h-full">
    <div className="bg-tech-800 rounded-xl overflow-hidden border border-tech-700 hover:border-tech-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-tech-accent/10 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-bold uppercase">
          {post.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-tech-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-tech-700">
          <span>{post.date}</span>
          <span className="flex items-center group-hover:translate-x-1 transition-transform text-tech-accent">
            Ler <ChevronRight className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const TopTenItem: React.FC<{ post: Post; index: number }> = ({ post, index }) => (
  <Link to={`/post/${post.id}`} className="group flex items-center p-4 rounded-xl hover:bg-tech-800 transition-colors border border-transparent hover:border-tech-700">
    <div className="flex-shrink-0 mr-4 font-display text-4xl font-bold w-12 text-center text-transparent bg-clip-text bg-gradient-to-br from-tech-accent to-purple-600">
      {index + 1}
    </div>
    <div className="flex-grow min-w-0">
       <h4 className="text-white font-bold text-sm md:text-base truncate group-hover:text-tech-accent transition-colors">
         {post.title}
       </h4>
       <div className="flex items-center text-xs text-gray-500 mt-1">
         <span className="uppercase tracking-wider text-xs mr-2 text-purple-400">{post.category}</span>
         <span className="w-1 h-1 rounded-full bg-gray-600 mr-2"></span>
         <span>{post.views.toLocaleString()} Leituras</span>
       </div>
    </div>
  </Link>
);

const Home: React.FC = () => {
  const { categoryName, searchQuery } = useParams<{ categoryName: string; searchQuery: string }>();
  
  // Combine all posts to search through if filtering
  const allPosts = [...HERO_POSTS, ...LATEST_POSTS, ...TOP_TEN_POSTS];
  
  // Remove duplicates based on ID if combining lists for filtering
  const uniquePosts = Array.from(new Map(allPosts.map(post => [post.id, post])).values());

  const displayedPosts = React.useMemo(() => {
    if (categoryName) {
      return uniquePosts.filter(post => post.category === categoryName);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return uniquePosts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    return LATEST_POSTS;
  }, [categoryName, searchQuery, uniquePosts]);

  const getSectionTitle = () => {
    if (searchQuery) {
       return <><Search className="text-tech-accent" /> Resultados para "{searchQuery}"</>;
    }
    if (categoryName) {
       return <><Hash className="text-tech-accent" /> {categoryName}</>;
    }
    return <><Flame className="text-orange-500" /> Últimos Lançamentos</>;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-tech-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Only show Hero on main home page, not on search or category pages */}
        {!categoryName && !searchQuery && <HeroSection />}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Latest Posts Column */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2 uppercase">
                {getSectionTitle()}
              </h2>
              {/* Show 'Ver Tudo' only on Home, when no filters are active */}
              {!categoryName && !searchQuery && (
                <button className="text-sm text-tech-accent hover:text-white transition-colors uppercase font-bold tracking-wide">
                  Ver Tudo
                </button>
              )}
            </div>
            
            {displayedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-tech-800/30 rounded-2xl border border-tech-800">
                <p className="text-gray-400">Nenhum post encontrado.</p>
                <Link to="/" className="text-tech-accent hover:underline mt-4 inline-block">Voltar ao Início</Link>
              </div>
            )}
          </div>

          {/* Top 10 Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-tech-900 lg:bg-tech-800/30 rounded-2xl lg:p-6 lg:border border-tech-700 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                 <Trophy className="text-yellow-400 w-6 h-6" />
                 <h2 className="text-xl font-display font-bold text-white">TOP 10 RANKING</h2>
              </div>
              <div className="space-y-1">
                {TOP_TEN_POSTS.map((post, index) => (
                  <TopTenItem key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;