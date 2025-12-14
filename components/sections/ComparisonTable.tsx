// components/sections/ComparisonTable.tsx
'use client';

import { Car } from '@/types';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ComparisonTableProps {
  cars: Car[];
}

export default function ComparisonTable({ cars }: ComparisonTableProps) {
  if (cars.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900">
            <th className="p-4 text-left text-gray-400 font-semibold border border-gray-800">
              Feature
            </th>
            {cars.map((car) => (
              <th
                key={car.id}
                className="p-4 text-center border border-gray-800 min-w-[200px]"
              >
                <Link href={`/inventory/${car.id}`}>
                  <div className="cursor-pointer hover:text-red-500 transition-colors">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <p className="font-bold text-white">{car.name}</p>
                  </div>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-900/50">
            <td className="p-4 font-semibold border border-gray-800">Price</td>
            {cars.map((car) => (
              <td
                key={car.id}
                className="p-4 text-center border border-gray-800 text-red-500 font-bold text-xl"
              >
                {car.price}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">Brand</td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.brand}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">Model</td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.model}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">Year</td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.year}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">Mileage</td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.mileage}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">
              Transmission
            </td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.transmission}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">
              Fuel Type
            </td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.fuel}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">
              Featured
            </td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                {car.featured ? (
                  <Check className="w-6 h-6 text-green-500 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-gray-600 mx-auto" />
                )}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold border border-gray-800 bg-gray-900/50">
              Action
            </td>
            {cars.map((car) => (
              <td key={car.id} className="p-4 text-center border border-gray-800">
                <Link href={`/inventory/${car.id}`}>
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
                    View Details
                  </button>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}