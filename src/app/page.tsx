"use client";

import { useState } from 'react';

const SustainableSpaceVisualizer = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  
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
  const handleThemeChange = (id) => {
    setSelectedTheme(id);
  };
  
  return (
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
              className={`px-4 py-2 rounded-t-lg text-sm whitespace-nowrap ${
                selectedTheme === theme.id
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
        
        {/* Right Column - Description, Quotes and Impact */}
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
                    In "The Overstory", Richard Powers writes "<span className="italic">What you make from a tree should be at least as miraculous as what you cut down</span>". Traditionally, construction involves logging and deforestation. While the treehouse uses wood elements that come from the trees around it, it features a design that adds to the forest rather than detracting from it.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Powers also explores the concept of deep ecology and universal interconnectedness in "The Overstory". Prominent quotes on the topic include: "<span className="italic">This is not our world with trees in it. It's a world of trees, where humans have just arrived</span>", and "<span className="italic">There are no individuals. There aren't even separate species. Everything in a forest is the forest.</span>" The idea of people taking their place in nature rather than trying to control it is exemplified in this design. Transparent observation rooms allow residents to immerse themselves in forest communication networks spanning between the trees, birds, insects, and now, themselves.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Powers also utilizes quotes such as "<span className="italic">A tree learns to save its water</span>", and "<span className="italic">Trees feed their young and synchronize their masts and bank resources and warn kin and sent out signals to wasps to come and save them from attacks</span>". Organisms like trees seem to have figured out sustainable living by using their resources wisely and passing it on to the next generation. In the spirit of sustainable living, the treehouse features solar panels that sit above the canopy, powering human life with a renewable energy that will outlast fossil fuels and live on for generations.
                  </p>
                </>
              )}
              
              {selectedTheme === 1 && (
                <>
                  <p className="text-gray-700 mb-4">
                    The sea house design features a series of interconnected sustainable stilt homes rising from coastal waters. Wave-harvesting energy panels, expansive glass walls facing the horizon, and terraced gardens that cascade toward the water create a seamless boundary between the human habitation of earth, and the ocean ecosystems.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In "The Man with the Compound Eyes", Wu Ming-Yi writes about Alice, the main character, and her husband, who design a seaside home -- "<span className="italic">Together with her husband, she designed this house... its solar panels deftly track the sun's trajectory across the sky, while its expansive windows forge an intimate connection with the boundless sea.</span>" We incorporate various aspects of this vision, including horizon facing windows for passive heating, and beautiful ocean views.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Wu Ming-Yi also writes that "<span className="italic">The house by the water's edge gradually transforms from a coastal sanctuary into a dwelling submerged in the turbulent aftermath of a collision behind the trash island and Taiwan.</span>" This illustrates the effects of pollution in the form of the Pacific Garbage Patch crashing into the shore.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This design intends to stay realistic while staying as sustainable as possible. With the rate at which global warming is going right now, we can expect a lot more rising sea levels, and the flooding of coastal towns. In order to slow down global warming, we must live more sustainably by sourcing energy from waves and growing our own food locally and naturally. Hence, this design recognizes that we will probably have to face the effects of our own actions while actively trying to combat them.
                  </p>
                </>
              )}
              
              {selectedTheme === 2 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This design showcases a circular community sanctuary celebrating seeds and renewal. Oak saplings grow through apertures in the living roof, while the walls are embedded with seed banks. The central hearth is surrounded by acorn-shaped meditation pods, and transparent floors reveal root systems spreading beneath the building to connect with the surrounding forest.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In "Parable of the Sower," Octavia Butler's protagonist Lauren establishes a community called Acorn, where she "<span className="italic">hands out acorns — enough for everyone to plant one for their dead — which they do in an overtly symbolic ceremony of seeding life in a place of bones and ash.</span>" This sanctuary incorporates that symbolism of rebirth through its very structure, creating spaces for meditation and remembrance that connect to new life.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Lauren explains that "<span className="italic">unlike traditional tombstones, acorns symbolize rebirth and creation and will grow to serve as living monuments.</span>" The transparency of this building allows visitors to witness the growth happening both above and below ground, reminding them of the continuous cycles of life, death, and renewal.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In "The Overstory," there's a call to action: "<span className="italic">I want to start a seed bank. There are half as many trees in the world as there were before we came down out of them.</span>" This structure responds to that urgency by incorporating seed preservation into its very walls, becoming both a sanctuary for people and a bank of future forests.
                  </p>
                </>
              )}
              
              {selectedTheme === 3 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This design depicts a self-sufficient island community with protective natural boundaries. Encircled by a living fence of coral and mangroves, the boat-inspired dwellings feature curved roofs and communal freshwater catchment systems. Watchtowers that double as solar collectors are arranged in concentric rings around a central gathering space.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In "The Man with the Compound Eyes," Wu Ming-Yi describes traditional island architecture: "<span className="italic">Adorned with shells and carvings, Wayo Wayoan houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.</span>" This design incorporates those protective elements while adapting them for modern sustainability.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The concept of community as both protection and identity appears in Butler's "Parable of the Sower": "<span className="italic">We have God and we have each other. We have our island community, fragile, and yet a fortress.</span>" The concentric arrangement of structures creates multiple layers of protection while fostering strong social bonds and resource sharing.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Wu Ming-Yi's description that "<span className="italic">the islanders could neither walk to a place where the sea could not be heard nor have a conversation in which the sea was not mentioned</span>" inspires this design's orientation toward water - both protecting from and communicating with the surrounding environment. The arrangement creates a self-sufficient ecosystem that balances isolation with interconnection.
                  </p>
                </>
              )}
              
              {selectedTheme === 4 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This grand communal structure showcases sustainable materials in their natural beauty. Constructed entirely from different wood varieties—cherry, maple, walnut, and bamboo—each section highlights the unique qualities and grain patterns of its materials without disguising their origins.
                  </p>
                  <p className="text-gray-700 mb-4">
                    In "The Overstory," Powers writes a tribute to trees as materials: "<span className="italic">Thank you for the cradles. Capes and hats and skirts. Poles, logs, posts. The rot-proof shakes and shingles. The kindling that will always light.</span>" This design celebrates that gratitude by displaying wood not as a conquered resource but as a contributor to human habitation.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The structure incorporates different woods for different functions, reflecting another passage from Powers: "<span className="italic">A large walnut unit in the front room, in the space traditionally reserved for the television altar. Maple in the guest room.</span>" Each material is chosen not just for appearance but for its specific properties and relationship to human activities.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Wu Ming-Yi's emphasis on land reverence - "<span className="italic">You must love the land, my children, and ring it in with your love. For the land is the most precious thing on this island. It is like rain, like the heart of a woman.</span>" - guides the building's relationship with its surroundings. Rather than dominating the landscape, it emerges from it, using only what has been respectfully harvested and processed with minimal interference.
                  </p>
                </>
              )}
              
              {selectedTheme === 5 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This spiraling library structure transforms knowledge preservation into architecture. Its walls are formed by books, manuscripts and digital repositories, with reading spaces that transform into sleeping quarters at night. Terraced indoor gardens preserve endangered plant species, while a central atrium houses sustainable paper-making from renewable fibers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Powers describes such a transformation in "The Overstory": "<span className="italic">The conversion of their house into a library happens too slowly to see. The books that won't fit she lays on their sides, on top of the existing rows.</span>" This building follows that evolution, starting with knowledge and letting the architecture form around it rather than forcing books into predetermined spaces.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The library's organization reflects the characters' approaches: "<span className="italic">In place of children, then, books...Ray's shelves are organized by topic; Dorothy's, alphabetical by author.</span>" Different sections of the spiral follow different organizational principles, acknowledging that knowledge structures itself in multiple compatible systems.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The urgency of knowledge preservation is captured in Powers' warning: "<span className="italic">Tens of thousands of trees we know nothing about. Species we've barely classified. Like burning down the library, art museum, pharmacy, and hall of records, all at once.</span>" This structure responds by becoming not just a repository of written knowledge but also a living archive, integrating endangered plants into its very design.
                  </p>
                </>
              )}
              
              {selectedTheme === 6 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This transformative structure embraces impermanence as its design principle. Featuring movable wall panels and modular living spaces that rearrange seasonally, it incorporates hydroponic gardens that shift to track sunlight. Many components are designed to eventually decompose, returning to the soil to nourish new building materials grown on-site.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Butler's foundational concept from "Parable of the Sower" guides this design: "<span className="italic">All that you touch, You Change. All that you Change, Changes you. The only lasting truth is Change.</span>" Rather than fighting against transformation, this building incorporates it as a feature, with systems designed to evolve over time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The cyclical nature of change appears in Butler's description: "<span className="italic">God is Change— Seed to tree, tree to forest; Rain to river, river to sea; Grubs to bees, bees to swarm. From one, many; from many, one; Forever uniting, growing, dissolving— forever Changing.</span>" This structure follows these natural cycles, with components that dissolve and reconstitute in new forms.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Wu Ming-Yi provides a philosophical foundation: "<span className="italic">Going through a mountain to get from place to place as quickly as possible is one way of life, while going around is another.</span>" This adaptable architecture doesn't force permanent solutions but creates flexible pathways that can shift with changing needs and environmental conditions.
                  </p>
                </>
              )}
              
              {selectedTheme === 7 && (
                <>
                  <p className="text-gray-700 mb-4">
                    This reclaimed urban complex transforms existing structures into interconnected community spaces. Former industrial buildings now house vertical farms, while collective kitchens feature transparent walls that connect to medicinal gardens. Circular council chambers provide spaces for consensus-based neighborhood governance.
                  </p>
                  <p className="text-gray-700 mb-4">
                    O'Brien and Abdelhadi describe such transformations in "Everything for Everyone": "<span className="italic">Through expropriated buildings, urban farms, canteens, and teenager crèches, the participants have re-organized life, production, reproduction, care, travel, and human connection with the planet.</span>" This design realizes that vision by repurposing rather than rebuilding.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The integration of care work and food production appears in their description: "<span className="italic">At the Cecilia Gentili Social Center in the Bronx, 'skinners' organize mental health services, food distribution, agricultural production, and much else.</span>" This design creates no separation between survival needs and emotional wellbeing, integrating spaces for both in a holistic approach.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Butler's definition of paradise as "<span className="italic">Paradise is home. Home as it was or home as it should have been. Paradise is one's own place, one's own people, one's own world, knowing and known, perhaps even loving and loved.</span>" guides the creation of spaces that facilitate deep connection while maintaining autonomy. The transparent walls and circular meeting spaces create visibility without erasing privacy.
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
          Throughout the course, we have explored the intricate relationship between humanity and nature in various contexts. As someone deeply interested in building a sustainable future, I've been particularly drawn to how manmade spaces and structures are reflective of our relationship with the natural world.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          Outside of this course, I am working on a project to build AI software for architects that streamlines project research, energy modeling, and more. For my creative response, I saw an opportunity to merge my technical knowledge in software and architecture with literary insights from course texts. The recurring theme of deep ecology, and the idea of man and nature being a single interconnected entity inspired me to create an interactive website that makes these abstract concepts tangible through visual representation.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          My project, "Literary Ecologies: Sustainable Space Visualizer", is an interactive website that takes quotations from our course readings and transforms them into architectural design visions with AI. Sustainable design is a spectrum, ranging from urban dystopia to the natural reclamation of manmade structures. The tool illustrates how different literary perspectives could manifest in the built environment.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          The visualization includes quotations from course texts such as Richard Powers' "The Overstory", and Wu Ming-Yi's "The Man with the Compound Eyes", and pairs them with AI-generated Architectural renderings that embody the quote's environmental philosophy. Users can navigate through the tabs to explore different approaches to sustainability, and observe how resource consumption and environmental impact can shift in relation to different architectural philosophies.
        </p>
        <p className="text-sm text-gray-700">
          The goal of this project is to not only analyze inspirations for sustainable spaces, but also illustrate literature's ability to influence practical ways of thinking and designing our future.
        </p>
      </div>
    </div>
  );
};

export default SustainableSpaceVisualizer;