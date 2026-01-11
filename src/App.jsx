import React, { useState } from 'react';
import { BookOpen, Atom, Brain, Rocket, Star, Zap, User, ChevronLeft, ArrowRight, CheckCircle } from 'lucide-react';

const COURSES = [
  { 
    id: 1, 
    title: 'AI 初体验', 
    description: '开启奇妙之旅',
    link: '/oss/lesson24.html?key=AI2026', 
    icon: Rocket, 
    theme: 'blue',
    gradient: 'from-blue-400 to-blue-500',
    shadow: 'shadow-blue-200',
    decorator: 'bg-blue-400'
  },
  { 
    id: 2, 
    title: '机器学习', 
    description: '机器如何思考',
    link: '/oss/lesson24.html?key=AI2026', 
    icon: Brain, 
    theme: 'green',
    gradient: 'from-emerald-400 to-emerald-500',
    shadow: 'shadow-emerald-200',
    decorator: 'bg-emerald-400'
  },
  { 
    id: 3, 
    title: '神经网络', 
    description: '大脑的秘密',
    link: '/oss/lesson24.html?key=AI2026', 
    icon: Atom, 
    theme: 'purple',
    gradient: 'from-purple-400 to-purple-500',
    shadow: 'shadow-purple-200',
    decorator: 'bg-purple-400'
  },
  { 
    id: 4, 
    title: '未来伦理', 
    description: '科技的边界',
    link: '/oss/lesson24.html?key=AI2026', 
    icon: BookOpen, 
    theme: 'orange',
    gradient: 'from-orange-400 to-orange-500',
    shadow: 'shadow-orange-200',
    decorator: 'bg-orange-400'
  },
];

function App() {
  const [activeCourse, setActiveCourse] = useState(null);

  const handleNextCourse = () => {
    if (!activeCourse) return;
    
    const currentIndex = COURSES.findIndex(c => c.id === activeCourse.id);
    if (currentIndex < COURSES.length - 1) {
      // 还有下一课
      setActiveCourse(COURSES[currentIndex + 1]);
    } else {
      // 已经是最后一课，完成学习
      setActiveCourse(null);
    }
  };

  const isLastCourse = activeCourse && COURSES.findIndex(c => c.id === activeCourse.id) === COURSES.length - 1;

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-5xl mx-auto selection:bg-purple-200 selection:text-purple-900">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 md:mb-12">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
            <span>👋</span>
            <span>嗨，小科学家</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1 text-sm md:text-base">准备好探索未来了吗？</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Level Badge */}
          <div className="hidden md:flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full font-bold text-sm border-2 border-yellow-200">
            <Star size={16} className="fill-yellow-500 text-yellow-500" />
            <span>Lv. 3</span>
          </div>
          
          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white shadow-md border-2 border-white ring-2 ring-purple-100">
            <User size={24} strokeWidth={2.5} />
          </div>
        </div>
      </header>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {COURSES.map((course) => (
          <div
            key={course.id}
            onClick={() => setActiveCourse(course)}
            className={`
              group relative overflow-hidden bg-white rounded-3xl p-6 
              shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]
              transition-all duration-300 active:scale-95 cursor-pointer border border-white/60
              flex items-center gap-5
            `}
          >
            {/* Decorative Circle */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20 ${course.decorator} blur-xl group-hover:scale-150 transition-transform duration-500`} />
            
            {/* App Icon Container */}
            <div className={`
              w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg
              bg-gradient-to-br ${course.gradient} ${course.shadow}
              group-hover:rotate-3 transition-transform duration-300
            `}>
              <course.icon size={36} strokeWidth={2.5} />
            </div>

            {/* Text Content */}
            <div className="flex-1 z-10">
              <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-slate-400 font-medium text-sm">
                {course.description}
              </p>
              
              {/* Progress Bar Mockup */}
              <div className="mt-3 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${course.gradient} w-2/3 opacity-80`} />
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="text-slate-300 group-hover:translate-x-1 transition-transform">
              <Zap size={20} className={`fill-current ${course.decorator.replace('bg-', 'text-')} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          </div>
        ))}
      </div>

      {/* Immersive Learning Mode (Fullscreen) */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <header className="h-[60px] flex-shrink-0 bg-white border-b border-slate-100 flex items-center justify-between px-4 shadow-sm z-20">
            <button
              onClick={() => setActiveCourse(null)}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-90"
              aria-label="返回大厅"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            
            <h2 className="font-bold text-lg text-slate-800 truncate px-2">
              {activeCourse.title}
            </h2>
            
            <div className="text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              关卡 {COURSES.findIndex(c => c.id === activeCourse.id) + 1}/{COURSES.length}
            </div>
          </header>

          {/* Body (Iframe) */}
          <div className="flex-1 w-full bg-slate-50 relative overflow-hidden">
            <iframe
              key={activeCourse.id} // Ensure re-render on course change
              src={activeCourse.link}
              className="w-full h-full border-0"
              title={activeCourse.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Footer (Controls) */}
          <footer className="h-[80px] flex-shrink-0 bg-white border-t border-slate-100 flex items-center justify-center shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] z-20 px-6">
            <button
              onClick={handleNextCourse}
              className={`
                flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-lg shadow-lg shadow-blue-200
                transform transition-all active:scale-95 hover:shadow-xl hover:-translate-y-0.5
                ${isLastCourse 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }
              `}
            >
              {isLastCourse ? (
                <>
                  <span>完成学习</span>
                  <CheckCircle size={24} strokeWidth={2.5} />
                </>
              ) : (
                <>
                  <span>下一关</span>
                  <ArrowRight size={24} strokeWidth={2.5} />
                </>
              )}
            </button>
          </footer>

        </div>
      )}
    </div>
  );
}

export default App;
