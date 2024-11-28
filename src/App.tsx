import React, { useState } from 'react';
import { CategoryTab } from './components/CategoryTab';
import { InventoryList } from './components/InventoryList';
import { Category } from './types/inventory';
import { sampleInventoryItems } from './data/sampleData';
import { ShieldCheck } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('食料品');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">防災備蓄管理</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <CategoryTab
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="p-6">
            <InventoryList
              items={sampleInventoryItems}
              category={activeCategory}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;