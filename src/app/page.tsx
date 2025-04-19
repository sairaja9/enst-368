"use client";

import { useState } from 'react';

export default function Home() {
  // Define the state and component logic here
  const [selectedTheme, setSelectedTheme] = useState<number>(0);

  // Literary themes from course materials
  const literaryThemes = [
    {
      id: 0,
      title: "Trees as Teachers: Wisdom from the Forest",
      image: "/images/Trees as Teachers.jpeg",
      imageCaption: "A modern treehouse complex integrated with living trees, featuring interwoven wooden walkways, solar panels camouflaged within the canopy, and transparent observation rooms where residents can study forest communication networks while living in harmony with the ecosystem.",
      description: "These quotations explore trees not merely as resources but as living entities with their own intelligence and communication systems. They suggest that trees can teach us about connection, community, and sustainable living.",
      quotes: [
        {
          text: "What you make from a tree should be at least as miraculous as what you cut down.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "This is not our world with trees in it. It's a world of trees, where humans have just arrived.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "A great truth comes over him: Trees fall with spectacular crashes. But planting is silent and growth is invisible.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "There are no individuals. There aren't even separate species. Everything in the forest is the forest.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Trees feed their young and synchronize their masts and bank resources and warn kin and send out signals to wasps to come and save them from attacks.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "An tree learns to save water.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Don't worry if your job is small and your rewards are few. Even the mighty Ironwood was once a nut, like you.",
          source: "Richard Powers, \"The Overstory\""
        }
      ],
      impact: "Trees provide multiple ecosystem services: oxygen production, carbon sequestration, soil stabilization, water filtration, biodiversity support, temperature regulation, and human psychological benefits."
    },
    {
      id: 1,
      title: "Water Worlds: Architecture at the Edge",
      image: "/images/Water Worlds.jpeg",
      imageCaption: "A series of interconnected sustainable stilt homes rising from coastal waters, with wave-harvesting energy panels beneath, expansive glass walls oriented toward the horizon, and terraced gardens that cascade toward the water, creating a seamless boundary between human habitation and oceanic ecosystem.",
      description: "These quotations explore the relationship between human construction and water environments, showing how architecture can either harmonize with or struggle against aquatic boundaries.",
      quotes: [
        {
          text: "The Seaside House... designed... drawing inspiration from the aesthetic of a Nordic architect.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "Together with her husband, she designed this house... its solar panels deftly track the sun's trajectory across the sky, while its expansive windows forge an intimate connection with the boundless sea.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "The house by the water's edge gradually transforms from a coastal sanctuary into a dwelling submerged in the turbulent aftermath of a collision between the trash island and Taiwan.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "The islanders could neither walk to a place where the sea could not be heard nor have a conversation in which the sea was not mentioned.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "She sat on her porch those first nights, wrapped in the brackish tidal air. The future's breeze split across her face and joined up again behind her.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "The front door of the home of a family in which an old man of the sea had lived faced the shore.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        }
      ],
      impact: "Coastal architecture that works with rather than against water systems can build resilience against flooding, storms, and sea level rise while maintaining ecological connectivity between land and sea."
    },
    {
      id: 2,
      title: "Rebirth Through Seeds: Acorns and Renewal",
      image: "/images/Rebirth Through Seeds.jpeg",
      imageCaption: "A circular community sanctuary with oak saplings growing through apertures in its living roof, featuring walls embedded with seed banks, a central hearth surrounded by acorn-shaped meditation pods, and transparent floors revealing root systems spreading beneath the building to connect with surrounding forest.",
      description: "These quotations highlight the symbolic and practical power of seeds—especially acorns—as emblems of rebirth, continuity, and sustainable futures in the face of destruction.",
      quotes: [
        {
          text: "She hands out acorns — enough for everyone to plant one for their dead — which they do in an overtly symbolic ceremony of seeding life in a place of bones and ash.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "Unlike traditional tombstones, acorns symbolize rebirth and creation and will grow to serve as living monuments.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "I want to start a seed bank. There are half as many trees in the world as there were before we came down out of them.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Bankole takes the group to the land he owns in northern California, where the group settles and Lauren founds the first Earthseed community, Acorn.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "The First Supper... is eaten in memory of their dead but, in calling their home 'Acorn,' it has the explicit purpose of centering the community's mission on growth, regeneration, and hope.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "We'll start a community of our own someday. We'll share it. We'll work it together and help each other. We all know how to plant, tend, harvest, store... All we really need is land, seed, and water.",
          source: "Octavia Butler, \"Parable of the Sower\""
        }
      ],
      impact: "Seed-based design thinking incorporates regeneration cycles into building systems, creating spaces that can continuously renew themselves using minimal external resources."
    },
    {
      id: 3,
      title: "Island Communities: Enclosure and Protection",
      image: "/images/Island Communities.jpeg",
      imageCaption: "A self-sufficient island community enclosed by a living fence of coral and mangroves, featuring boat-inspired dwellings with curved roofs, communal freshwater catchment systems, and watchtowers doubling as solar collectors, all arranged in concentric rings around a central gathering space.",
      description: "These quotations examine how communities create physical and social boundaries to protect themselves from external threats while creating sustainable internal systems.",
      quotes: [
        {
          text: "We have God and we have each other. We have our island community, fragile, and yet a fortress.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "The people of Wayo Wayo thought the whole world was but a single island.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "Crazy to live without a wall to protect you. Even in Robledo, most of the street poor—squatters, winos, junkies, homeless people in general—are dangerous.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "Adorned with shells and carvings, Wayo Wayoan houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "Their houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "The islanders... build coral fence out in front to block the wind.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        }
      ],
      impact: "Self-contained community design can maximize resource efficiency, reduce external dependencies, and create stronger social bonds while leveraging traditional ecological knowledge."
    },
    {
      id: 4,
      title: "Sustainable Materials: Building with Nature",
      image: "/images/Sustainable Materials.jpeg",
      imageCaption: "A grand communal structure constructed entirely from sustainably harvested wood varieties—cherry, maple, walnut, and bamboo—showcasing different grain patterns and natural properties, with each section designed to highlight the unique qualities of its materials without disguising their origins.",
      description: "These quotations focus on traditional and innovative building materials that work with rather than against nature, highlighting Indigenous and sustainable architectural practices.",
      quotes: [
        {
          text: "Thank you for the cradles. Capes and hats and skirts. Poles, logs, posts. The rot-proof shakes and shingles. The kindling that will always light.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "A large walnut unit in the front room, in the space traditionally reserved for the television altar. Maple in the guest room.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "A pair of cherry cases to set between the windows in his downstairs office.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "You must love the land, my children, and ring it in with your love. For the land is the most precious thing on this island. It is like rain, like the heart of a woman.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "For the land is the most precious thing on this island. It is like rain, like the heart of a woman.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        }
      ],
      impact: "Natural material selection reduces embodied carbon, harmful chemical emissions, and construction waste while connecting occupants to the natural origins of their built environment."
    },
    {
      id: 5,
      title: "Libraries and Knowledge Spaces: Preserving Wisdom",
      image: "/images/Libraries and Knowledge Spaces.jpeg",
      imageCaption: "A spiraling library structure where walls are formed entirely of books, manuscripts and digital repositories, with reading spaces that transform into sleeping quarters at night, terraced indoor gardens that preserve endangered plant species, and a central atrium where paper is made from sustainable fibers.",
      description: "These quotations reveal how the collection and organization of knowledge represents a form of sustainable architecture—building repositories of wisdom that connect past and future.",
      quotes: [
        {
          text: "The conversion of their house into a library happens too slowly to see. The books that won't fit she lays on their sides, on top of the existing rows.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "In place of children, then, books...Ray's shelves are organized by topic; Dorothy's, alphabetical by author.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Once any given volume enters the house, it can never leave. For Ray, the goal is readiness: a book for every unforeseeable need.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "He says, 'That should hold us for a while.' She laughs, knowing from every novel she has ever read, how brief a while a while can be.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Life has a way of talking to the future. It's called memory.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "Tens of thousands of trees we know nothing about. Species we've barely classified. Like burning down the library, art museum, pharmacy, and hall of records, all at once.",
          source: "Richard Powers, \"The Overstory\""
        }
      ],
      impact: "Knowledge-preserving spaces maintain cultural continuity, build intergenerational connections, and reduce information loss during social and environmental transformations."
    },
    {
      id: 6,
      title: "Change as Architecture: Building with Impermanence",
      image: "/images/Change as Architecture.jpeg",
      imageCaption: "A transformative structure designed to evolve over time, featuring movable wall panels, modular living spaces that rearrange seasonally, hydroponic gardens that shift to track sunlight, and decomposable components that return to the soil to nourish new building materials grown on-site.",
      description: "These quotations explore how sustainable design must embrace impermanence and change, suggesting that adaptation rather than permanence should be the foundation of our constructed worlds.",
      quotes: [
        {
          text: "All that you touch, You Change. All that you Change, Changes you. The only lasting truth is Change.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "God is Change— Seed to tree, tree to forest; Rain to river, river to sea; Grubs to bees, bees to swarm. From one, many; from many, one; Forever uniting, growing, dissolving— forever Changing.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "Going through a mountain to get from place to place as quickly as possible is one way of life, while going around is another.",
          source: "Wu Ming-Yi, \"The Man with the Compound Eyes\""
        },
        {
          text: "We do not worship God. We perceive and attend God. We learn from God. With forethought and work, We shape God.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "Like evolution, it reuses all the old, successful parts of everything that has come before. Like evolution, it just means unfolding.",
          source: "Richard Powers, \"The Overstory\""
        },
        {
          text: "The destiny of Earthseed is to take root among the stars.",
          source: "Octavia Butler, \"Parable of the Sower\""
        }
      ],
      impact: "Adaptable architectural systems can respond to changing environmental conditions, evolving social needs, and unexpected disruptions while minimizing resource consumption."
    },
    {
      id: 7,
      title: "Communal Spaces: Redesigning Social Structures",
      image: "/images/Communal Spaces.jpeg",
      imageCaption: "A reclaimed urban complex transformed into an interconnected community hub, featuring repurposed industrial structures now housing vertical farms, collective kitchens with transparent walls, classrooms opening onto medicinal gardens, and circular council chambers where neighborhood decisions are made through consensus.",
      description: "These quotations highlight how sustainable communities reimagine social infrastructure, transforming existing spaces for collective wellbeing and mutual support.",
      quotes: [
        {
          text: "Through expropriated buildings, urban farms, canteens, and teenager crèches, the participants have re-organized life, production, reproduction, care, travel, and human connection with the planet.",
          source: "O'Brien and Abdelhadi, \"Everything for Everyone\""
        },
        {
          text: "At the Cecilia Gentili Social Center in the Bronx, 'skinners' organize mental health services, food distribution, agricultural production, and much else.",
          source: "O'Brien and Abdelhadi, \"Everything for Everyone\""
        },
        {
          text: "Climate refugees are welcomed freely into communes across North America and elsewhere; systems of community self-defense and preservation are in place and organized collectively.",
          source: "O'Brien and Abdelhadi, \"Everything for Everyone\""
        },
        {
          text: "In Flushing, Queens, a knowledge center about trauma work is organized by Chinese Americans who were forced into concentration camps in California.",
          source: "O'Brien and Abdelhadi, \"Everything for Everyone\""
        },
        {
          text: "Paradise is home. Home as it was or home as it should have been. Paradise is one's own place, one's own people, one's own world, knowing and known, perhaps even loving and loved.",
          source: "Octavia Butler, \"Parable of the Sower\""
        },
        {
          text: "When no influence is strong enough to unify people, they divide. They struggle, one against one, group against group, for survival, position, power.",
          source: "Octavia Butler, \"Parable of the Sower\""
        }
      ],
      impact: "Community-centered design fosters social cohesion, resource sharing, collective decision-making, and mutual support during both everyday life and crisis situations."
    }
  ];

  // Get the currently selected theme
  const currentTheme = literaryThemes[selectedTheme];

  // Handle theme selection
  const handleThemeChange = (id: number): void => {
    setSelectedTheme(id);
  };

  return (
    <main className="min-h-screen">
      <div className="flex flex-col p-6 bg-gray-50 rounded-lg shadow w-full mx-auto">
        <h1 className="text-2xl font-bold text-green-800 mb-2">Literary Ecologies: Sustainable Space Visualizer</h1>
        <p className="text-gray-600 mb-6">Exploring architectural futures through environmental literature</p>

        {/* Theme Selection Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {literaryThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`px-4 py-2 rounded-t-lg text-sm whitespace-nowrap ${selectedTheme === theme.id
                    ? "bg-white text-green-800 font-semibold shadow-inner"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                {theme.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Left Column - Image only */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-800 text-white">
              <h2 className="font-bold text-xl">{currentTheme.title}</h2>
            </div>
            <img
              src={currentTheme.image}
              alt={currentTheme.title}
              className="w-full h-auto"
            />
          </div>

          {/* Right Column - Literary Inspiration */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Literary Inspiration</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {selectedTheme === 0 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This design features a modern treehouse integrated with the forest ecosystem. It includes interwoven wooden walkways, solar panels above the canopy, and transparent observation rooms where residents can immerse themselves in forest communication networks spanning between the trees, birds, insects, and more. All of the design elements come together to remind people of their place in the ecosystem, while also using sustainable materials that add to the environment rather than detracting from it.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In &quot;The Overstory&quot;, Richard Powers writes &quot;<span className="italic font-bold">What you make from a tree should be at least as miraculous as what you cut down</span>&quot;. Traditionally, construction involves logging and deforestation. While the treehouse uses wood elements that come from the trees around it, it features a design that adds to the forest rather than detracting from it.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Powers also explores the concept of deep ecology and universal interconnectedness in &quot;The Overstory&quot;. Prominent quotes on the topic include: &quot;<span className="italic font-bold">This is not our world with trees in it. It&apos;s a world of trees, where humans have just arrived</span>&quot;, and &quot;<span className="italic font-bold">There are no individuals. There aren&apos;t even separate species. Everything in a forest is the forest.</span>&quot; The idea of people taking their place in nature rather than trying to control it is exemplified in this design. Transparent observation rooms allow residents to immerse themselves in forest communication networks spanning between the trees, birds, insects, and now, themselves.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Powers also utilizes quotes such as &quot;<span className="italic font-bold">A tree learns to save its water</span>&quot;, and &quot;<span className="italic font-bold">Trees feed their young and synchronize their masts and bank resources and warn kin and sent out signals to wasps to come and save them from attacks</span>&quot;. Organisms like trees seem to have figured out sustainable living by using their resources wisely and passing it on to the next generation. In the spirit of sustainable living, the treehouse features solar panels that sit above the canopy, powering human life with a renewable energy that will outlast fossil fuels and live on for generations.
                    </p>
                  </>
                )}

                {selectedTheme === 1 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      The sea house design features a series of interconnected sustainable stilt homes rising from coastal waters. Wave-harvesting energy panels, expansive glass walls facing the horizon, and terraced gardens that cascade toward the water create a seamless boundary between the human habitation of earth, and the ocean ecosystems.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In &quot;The Man with the Compound Eyes&quot;, Wu Ming-Yi writes about Alice, the main character, and her husband, who design a seaside home -- &quot;<span className="italic font-bold">Together with her husband, she designed this house... its solar panels deftly track the sun&apos;s trajectory across the sky, while its expansive windows forge an intimate connection with the boundless sea.</span>&quot; We incorporate various aspects of this vision, including horizon facing windows for passive heating, and beautiful ocean views.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Wu Ming-Yi also writes that &quot;<span className="italic font-bold">The house by the water&apos;s edge gradually transforms from a coastal sanctuary into a dwelling submerged in the turbulent aftermath of a collision behind the trash island and Taiwan.</span>&quot; This illustrates the effects of pollution in the form of the Pacific Garbage Patch crashing into the shore.
                    </p>
                    <p className="text-gray-700 mb-4">
                      This design intends to stay realistic while staying as sustainable as possible. With the rate at which global warming is going right now, we can expect a lot more rising sea levels, and the flooding of coastal towns. In order to slow down global warming, we must live more sustainably by sourcing energy from waves and growing our own food locally and naturally. Hence, this design recognizes that we will probably have to face the effects of our own actions while actively trying to combat them.
                    </p>
                  </>
                )}

                {selectedTheme === 2 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This design is a circular community sanctuary embracing seeds and new growth. There will be oak saplings growing through holes in the living roof and with embedded seed banks in the wall systems. In the center, there is a hearth, then several meditation pods shaped like acorns around it, while the transparent floors disclose root systems below the building extending to trees in the surrounding forest.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In Octavia Butler&apos;s &quot;Parable of the Sower&quot;, Lauren, Butler&apos;s protagonist, founds a community called Acorn. Lauren &quot;<span className="italic font-bold">hands out acorns — enough for everyone to plant one for their dead — which they do in an overtly symbolic ceremony of seeding life in a place of bones and ash.</span>&quot; This concept of a sanctuary building incorporates that same idea of rebirth through its structure, it facilitates spaces for meditation and remembrance, with respect to new life emergence.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Lauren indicates that &quot;<span className="italic font-bold">unlike traditional tombstones, acorns symbolize rebirth and creation and will grow to serve as living monuments.</span>&quot; The transparent nature of this building allows visitors to see trees growing above and below the ground; thereby providing the necessary context for cycles of life, death and rebirth to take place.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In Richard Powers&apos; &quot;The Overstory&quot;, there is a call to action in the words of a character: &quot;<span className="italic font-bold">I want to start a seed bank. There are half as many trees in the world as there were before we came down out of them.</span>&quot; This building embodies that urgency with embedded seed preservation throughout its foundation, meaning it is not only creating a sanctuary for people, but also becoming a bank for future forests.
                    </p>
                  </>
                )}

                {selectedTheme === 3 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This design depicts a self-sufficient island community with protective natural boundaries. Encircled by a living fence of coral and mangroves, the boat-inspired dwellings feature curved roofs and communal freshwater catchment systems. Watchtowers that double as solar collectors are arranged in concentric rings around a central gathering space.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In &quot;The Man with the Compound Eyes,&quot; Wu Ming-Yi describes traditional island architecture: &quot;<span className="italic font-bold">Adorned with shells and carvings, Wayo Wayoan houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.</span>&quot; This design incorporates those protective elements while adapting them for modern sustainability.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The concept of community as both protection and identity appears in Butler&apos;s &quot;Parable of the Sower&quot;: &quot;<span className="italic font-bold">We have God and we have each other. We have our island community, fragile, and yet a fortress.</span>&quot; The concentric arrangement of structures creates multiple layers of protection while fostering strong social bonds and resource sharing.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Wu Ming-Yi&apos;s description that &quot;<span className="italic font-bold">the islanders could neither walk to a place where the sea could not be heard nor have a conversation in which the sea was not mentioned</span>&quot; inspires this design&apos;s orientation toward water - both protecting from and communicating with the surrounding environment. The arrangement creates a self-sufficient ecosystem that balances isolation with interconnection.
                    </p>
                  </>
                )}

                {selectedTheme === 4 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This grand shared place is a celebration of sustainable materials in the rawest form. Constructed entirely (except for the roof covering) from various forms of wood - cherry, maple, walnut, and bamboo - different parts of the structure underscores the characteristics and grain characteristics of their material; this is not about changing its form and thereby origin.
                    </p>
                    <p className="text-gray-700 mb-4">
                      In &quot;The Overstory,&quot; Powers pens an ode to trees as materials: &quot;<span className="italic font-bold">Thank you for cradles. Capes and hats, and skirts. Poles, logs, posts. The rot-proof shakes and shingles. The kindling that will always light.</span>&quot; This building is a celebration of that gratitude. The wood is presented as a living source, not a resource conquered to allow us to inhabit.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Woods are assigned according to function, but it resonates with another passage by Powers: &quot;<span className="italic font-bold">A large walnut unit in the front room, in the space traditionally reserved for the television altar. Maple in the guest room.</span>&quot; The woods are selected not for the &quot;look&quot;, but for the properties and their relation to what people do.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Whatever Wu Ming-Yi is aiming for hone in on with this legacy of land - &quot;<span className="italic font-bold">You must love the land, my children, and ring it in with your love. For the land is the most precious thing on this island. It is like rain, like the heart of a woman.</span>&quot; - is what the building did to the land surrounding it. It did not claim the land, but emerged from the land, taking only what it has allowed to be harvested and processed in the least invasive manner.
                    </p>
                  </>
                )}

                {selectedTheme === 5 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This spiraling library structure turns into architecture the notion and act of preserving knowledge. The library&apos;s walls are book collections, manuscript collections, and digital repositories, with spaces for reading that transform into sleeping spaces at night. Its terraced gardens support indoor gardens for preserving endangered plant species, and its central atrium is home to sustainable paper making from renewable fibres.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Powers encapsulates this kind of transformation in &quot;The Overstory&quot;: &quot;<span className="italic font-bold">The conversion of their house into a library happens too slowly to see. The books that don&apos;t fit she lays on their sides, on top of the existing rows.</span>&quot; This building follows that evolution, starting with knowledge and allowing the architecture to form around it and not forcing books into a constrained array of spaces.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The library&apos;s organization is analogous to how the authors live their lives; &quot;<span className="italic font-bold">In place of children, then, books...Ray&apos;s shelves are organized by topic; Dorothy&apos;s, alphabetical by author.</span>&quot; Each different section of the spiral followed different organizational principles, and recognized that knowledge structures itself in multiple, compatible systems.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Powers captures the urgency of preserving knowledge by stating: &quot;<span className="italic font-bold">Tens of thousands of trees we know nothing about. Species we&apos;ve barely classified. Like burning down the library, art museum, pharmacy, and hall of records, all at once.</span>&quot; This structure is responding to that by not only being a repository of written knowledge but by functioning as a living archive, weaving endangered plants into the fabric of the design.
                    </p>
                  </>
                )}

                {selectedTheme === 6 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This structure embodies an approach with impermanence as a primary design principle. It employs movable wall panels, designated modular spaces that reconfigure seasonally, and hydroponic gardens that rotate to track sunlight. Movable parts will eventually decompose and return to nourish the soil used for new building materials that are to be grown.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The underlining principle from Butler&apos;s &quot;Parable of the Sower&quot; revolves around, &quot;<span className="italic font-bold">All that you touch, You Change.
                        All that you Change, Changes you. The only lasting truth is Change.</span>&quot; In this building, change is not resisted. Change is incorporated with a design that utilizes systems that change over time.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The cyclic nature of change is illustrated by Butler, &quot;<span className="italic font-bold">God is Change - Seed to tree, tree to forest; Rain to river, river to sea; Grubs to bees, bees to swarm. From one, many; from many, one; Forever uniting, growing, dissolving - forever Changing.</span>&quot; This object carries forward these cycles of nature with components that dissolve and reconstitute into new material.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Wu Ming-Yi provides an underlying philosophy as well: &quot;<span className="italic font-bold">Going through a mountain to get from place to place as quickly as possible is one way of life, while going around is another.</span>&quot; As a flexible architecture, it does not force permanence but creates flexible pathways able to fold and bend around changing needs, their own conditions, and the conditions of the greater environment.
                    </p>
                  </>
                )}

                {selectedTheme === 7 && (
                  <>
                    <p className="text-gray-700 mb-4">
                      This reclaimed urban complex transforms existing structures into interconnected community spaces. Former industrial buildings now house vertical farms, while collective kitchens feature transparent walls that connect to medicinal gardens. Circular council chambers provide spaces for consensus-based neighborhood governance.
                    </p>
                    <p className="text-gray-700 mb-4">
                      O&apos;Brien and Abdelhadi describe such transformations in &quot;Everything for Everyone&quot;: &quot;<span className="italic font-bold">Through expropriated buildings, urban farms, canteens, and teenager crèches, the participants have re-organized life, production, reproduction, care, travel, and human connection with the planet.</span>&quot; This design realizes that vision by repurposing rather than rebuilding.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The integration of care work and food production appears in their description: &quot;<span className="italic font-bold">At the Cecilia Gentili Social Center in the Bronx, &apos;skinners&apos; organize mental health services, food distribution, agricultural production, and much else.</span>&quot; This design creates no separation between survival needs and emotional wellbeing, integrating spaces for both in a holistic approach.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Butler&apos;s defines paradise: &quot;<span className="italic font-bold">Paradise is home. Home as it was or home as it should have been. Paradise is one&apos;s own place, one&apos;s own people, one&apos;s own world, knowing and known, perhaps even loving and loved.</span>&quot; This guides the creation of spaces that facilitate deep connection while maintaining autonomy. The transparent walls and circular meeting spaces create visibility without erasing privacy.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-green-800 mb-2">About This Project</h3>
          <p className="text-sm text-gray-700 mb-2">
            Throughout the course, we have explored the intricate relationship between humanity and nature in various contexts. As someone deeply interested in building a sustainable future, I&apos;ve been particularly drawn to how manmade spaces and structures are reflective of our relationship with the natural world.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Outside of this course, I am working on a project to build AI software for architects that streamlines project research, energy modeling, and more. For my creative response, I saw an opportunity to merge my technical knowledge in software and architecture with literary insights from course texts. The recurring theme of deep ecology, and the idea of man and nature being a single interconnected entity inspired me to create an interactive website that makes these abstract concepts tangible through visual representation.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            My project, &quot;Literary Ecologies: Sustainable Space Visualizer&quot;, is an interactive website that takes quotations from our course readings and transforms them into architectural design visions with AI. Sustainable design is a spectrum, ranging from urban dystopia to the natural reclamation of manmade structures. The tool illustrates how different literary perspectives could manifest in the built environment.
          </p>
          <p className="text-sm text-gray-700 mb-2">
            The visualization includes quotations from course texts such as Richard Powers&apos; &quot;The Overstory&quot;, and Wu Ming-Yi&apos;s &quot;The Man with the Compound Eyes&quot;, and pairs them with AI-generated Architectural renderings that embody the quote&apos;s environmental philosophy. Users can navigate through the tabs to explore different approaches to sustainability, and observe how resource consumption and environmental impact can shift in relation to different architectural philosophies.
          </p>
          <p className="text-sm text-gray-700">
            The goal of this project is to not only analyze inspirations for sustainable spaces, but also illustrate literature&apos;s ability to influence practical ways of thinking and designing our future.
          </p>
        </div>
      </div>
    </main>
  );
}