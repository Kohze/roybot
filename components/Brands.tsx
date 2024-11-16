import Image from 'next/image';

const brands = [
  { name: 'Slack', logo: '/brands/slack.svg' },
  { name: 'Zendesk', logo: '/brands/zendesk.svg' },
  { name: 'Monday', logo: '/brands/monday.svg' },
  { name: 'Udemy', logo: '/brands/udemy.svg' },
  { name: 'Oracle', logo: '/brands/oracle.svg' },
];

export default function Brands() {
  return (
    <div className="bg-blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-8 w-32">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}