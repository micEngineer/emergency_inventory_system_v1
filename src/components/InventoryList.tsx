import React from 'react';
import { Category, InventoryItem } from '../types/inventory';
import { PackageSearch } from 'lucide-react';

interface InventoryListProps {
  items: InventoryItem[];
  category: Category;
}

export function InventoryList({ items, category }: InventoryListProps) {
  const filteredItems = items.filter(item => item.category === category);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-8">
        <PackageSearch className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-500">このカテゴリーにはアイテムがありません</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">
                数量: {item.quantity} | 期限: {item.expirationDate}
              </p>
              {item.notes && (
                <p className="text-sm text-gray-600 mt-1">{item.notes}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}