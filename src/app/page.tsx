"use client"

import { useState } from &apos;react&apos;;

const SustainableSpaceVisualizer = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  
  // Literary themes from course materials
  const literaryThemes = [
    {
      id: 0,
      title: &quot;Trees as Teachers: Wisdom from the Forest&quot;,
      image: &quot;/images/Trees as Teachers.jpeg&quot;,
      imageCaption: &quot;A modern treehouse complex integrated with living trees, featuring interwoven wooden walkways, solar panels camouflaged within the canopy, and transparent observation rooms where residents can study forest communication networks while living in harmony with the ecosystem.&quot;,
      description: &quot;These quotations explore trees not merely as resources but as living entities with their own intelligence and communication systems. They suggest that trees can teach us about connection, community, and sustainable living.&quot;,
      quotes: [
        {
          text: &quot;What you make from a tree should be at least as miraculous as what you cut down.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;This is not our world with trees in it. It&apos;s a world of trees, where humans have just arrived.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;A great truth comes over him: Trees fall with spectacular crashes. But planting is silent and growth is invisible.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;There are no individuals. There aren&apos;t even separate species. Everything in the forest is the forest.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Trees feed their young and synchronize their masts and bank resources and warn kin and send out signals to wasps to come and save them from attacks.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;An tree learns to save water.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Don&apos;t worry if your job is small and your rewards are few. Even the mighty Ironwood was once a nut, like you.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        }
      ],
      impact: &quot;Trees provide multiple ecosystem services: oxygen production, carbon sequestration, soil stabilization, water filtration, biodiversity support, temperature regulation, and human psychological benefits.&quot;
    },
    {
      id: 1,
      title: &quot;Water Worlds: Architecture at the Edge&quot;,
      image: &quot;/images/Water Worlds.jpeg&quot;,
      imageCaption: &quot;A series of interconnected sustainable stilt homes rising from coastal waters, with wave-harvesting energy panels beneath, expansive glass walls oriented toward the horizon, and terraced gardens that cascade toward the water, creating a seamless boundary between human habitation and oceanic ecosystem.&quot;,
      description: &quot;These quotations explore the relationship between human construction and water environments, showing how architecture can either harmonize with or struggle against aquatic boundaries.&quot;,
      quotes: [
        {
          text: &quot;The Seaside House... designed... drawing inspiration from the aesthetic of a Nordic architect.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;Together with her husband, she designed this house... its solar panels deftly track the sun&apos;s trajectory across the sky, while its expansive windows forge an intimate connection with the boundless sea.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;The house by the water&apos;s edge gradually transforms from a coastal sanctuary into a dwelling submerged in the turbulent aftermath of a collision between the trash island and Taiwan.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;The islanders could neither walk to a place where the sea could not be heard nor have a conversation in which the sea was not mentioned.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;She sat on her porch those first nights, wrapped in the brackish tidal air. The future&apos;s breeze split across her face and joined up again behind her.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;The front door of the home of a family in which an old man of the sea had lived faced the shore.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        }
      ],
      impact: &quot;Coastal architecture that works with rather than against water systems can build resilience against flooding, storms, and sea level rise while maintaining ecological connectivity between land and sea.&quot;
    },
    {
      id: 2,
      title: &quot;Rebirth Through Seeds: Acorns and Renewal&quot;,
      image: &quot;/images/Rebirth Through Seeds.jpeg&quot;,
      imageCaption: &quot;A circular community sanctuary with oak saplings growing through apertures in its living roof, featuring walls embedded with seed banks, a central hearth surrounded by acorn-shaped meditation pods, and transparent floors revealing root systems spreading beneath the building to connect with surrounding forest.&quot;,
      description: &quot;These quotations highlight the symbolic and practical power of seeds—especially acorns—as emblems of rebirth, continuity, and sustainable futures in the face of destruction.&quot;,
      quotes: [
        {
          text: &quot;She hands out acorns — enough for everyone to plant one for their dead — which they do in an overtly symbolic ceremony of seeding life in a place of bones and ash.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;Unlike traditional tombstones, acorns symbolize rebirth and creation and will grow to serve as living monuments.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;I want to start a seed bank. There are half as many trees in the world as there were before we came down out of them.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Bankole takes the group to the land he owns in northern California, where the group settles and Lauren founds the first Earthseed community, Acorn.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;The First Supper... is eaten in memory of their dead but, in calling their home &apos;Acorn,&apos; it has the explicit purpose of centering the community&apos;s mission on growth, regeneration, and hope.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;We&apos;ll start a community of our own someday. We&apos;ll share it. We&apos;ll work it together and help each other. We all know how to plant, tend, harvest, store... All we really need is land, seed, and water.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        }
      ],
      impact: &quot;Seed-based design thinking incorporates regeneration cycles into building systems, creating spaces that can continuously renew themselves using minimal external resources.&quot;
    },
    {
      id: 3,
      title: &quot;Island Communities: Enclosure and Protection&quot;,
      image: &quot;/images/Island Communities.jpeg&quot;,
      imageCaption: &quot;A self-sufficient island community enclosed by a living fence of coral and mangroves, featuring boat-inspired dwellings with curved roofs, communal freshwater catchment systems, and watchtowers doubling as solar collectors, all arranged in concentric rings around a central gathering space.&quot;,
      description: &quot;These quotations examine how communities create physical and social boundaries to protect themselves from external threats while creating sustainable internal systems.&quot;,
      quotes: [
        {
          text: &quot;We have God and we have each other. We have our island community, fragile, and yet a fortress.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;The people of Wayo Wayo thought the whole world was but a single island.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;Crazy to live without a wall to protect you. Even in Robledo, most of the street poor—squatters, winos, junkies, homeless people in general—are dangerous.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;Adorned with shells and carvings, Wayo Wayoan houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;Their houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;The islanders... build coral fence out in front to block the wind.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        }
      ],
      impact: &quot;Self-contained community design can maximize resource efficiency, reduce external dependencies, and create stronger social bonds while leveraging traditional ecological knowledge.&quot;
    },
    {
      id: 4,
      title: &quot;Sustainable Materials: Building with Nature&quot;,
      image: &quot;/images/Sustainable Materials.jpeg&quot;,
      imageCaption: &quot;A grand communal structure constructed entirely from sustainably harvested wood varieties—cherry, maple, walnut, and bamboo—showcasing different grain patterns and natural properties, with each section designed to highlight the unique qualities of its materials without disguising their origins.&quot;,
      description: &quot;These quotations focus on traditional and innovative building materials that work with rather than against nature, highlighting Indigenous and sustainable architectural practices.&quot;,
      quotes: [
        {
          text: &quot;Thank you for the cradles. Capes and hats and skirts. Poles, logs, posts. The rot-proof shakes and shingles. The kindling that will always light.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;A large walnut unit in the front room, in the space traditionally reserved for the television altar. Maple in the guest room.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;A pair of cherry cases to set between the windows in his downstairs office.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;You must love the land, my children, and ring it in with your love. For the land is the most precious thing on this island. It is like rain, like the heart of a woman.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;For the land is the most precious thing on this island. It is like rain, like the heart of a woman.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        }
      ],
      impact: &quot;Natural material selection reduces embodied carbon, harmful chemical emissions, and construction waste while connecting occupants to the natural origins of their built environment.&quot;
    },
    {
      id: 5,
      title: &quot;Libraries and Knowledge Spaces: Preserving Wisdom&quot;,
      image: &quot;/images/Libraries and Knowledge Spaces.jpeg&quot;,
      imageCaption: &quot;A spiraling library structure where walls are formed entirely of books, manuscripts and digital repositories, with reading spaces that transform into sleeping quarters at night, terraced indoor gardens that preserve endangered plant species, and a central atrium where paper is made from sustainable fibers.&quot;,
      description: &quot;These quotations reveal how the collection and organization of knowledge represents a form of sustainable architecture—building repositories of wisdom that connect past and future.&quot;,
      quotes: [
        {
          text: &quot;The conversion of their house into a library happens too slowly to see. The books that won&apos;t fit she lays on their sides, on top of the existing rows.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;In place of children, then, books...Ray&apos;s shelves are organized by topic; Dorothy&apos;s, alphabetical by author.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Once any given volume enters the house, it can never leave. For Ray, the goal is readiness: a book for every unforeseeable need.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;He says, &apos;That should hold us for a while.&apos; She laughs, knowing from every novel she has ever read, how brief a while a while can be.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Life has a way of talking to the future. It&apos;s called memory.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;Tens of thousands of trees we know nothing about. Species we&apos;ve barely classified. Like burning down the library, art museum, pharmacy, and hall of records, all at once.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        }
      ],
      impact: &quot;Knowledge-preserving spaces maintain cultural continuity, build intergenerational connections, and reduce information loss during social and environmental transformations.&quot;
    },
    {
      id: 6,
      title: &quot;Change as Architecture: Building with Impermanence&quot;,
      image: &quot;/images/Change as Architecture.jpeg&quot;,
      imageCaption: &quot;A transformative structure designed to evolve over time, featuring movable wall panels, modular living spaces that rearrange seasonally, hydroponic gardens that shift to track sunlight, and decomposable components that return to the soil to nourish new building materials grown on-site.&quot;,
      description: &quot;These quotations explore how sustainable design must embrace impermanence and change, suggesting that adaptation rather than permanence should be the foundation of our constructed worlds.&quot;,
      quotes: [
        {
          text: &quot;All that you touch, You Change. All that you Change, Changes you. The only lasting truth is Change.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;God is Change— Seed to tree, tree to forest; Rain to river, river to sea; Grubs to bees, bees to swarm. From one, many; from many, one; Forever uniting, growing, dissolving— forever Changing.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;Going through a mountain to get from place to place as quickly as possible is one way of life, while going around is another.&quot;,
          source: &quot;Wu Ming-Yi, \&quot;The Man with the Compound Eyes\&quot;&quot;
        },
        {
          text: &quot;We do not worship God. We perceive and attend God. We learn from God. With forethought and work, We shape God.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;Like evolution, it reuses all the old, successful parts of everything that has come before. Like evolution, it just means unfolding.&quot;,
          source: &quot;Richard Powers, \&quot;The Overstory\&quot;&quot;
        },
        {
          text: &quot;The destiny of Earthseed is to take root among the stars.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        }
      ],
      impact: &quot;Adaptable architectural systems can respond to changing environmental conditions, evolving social needs, and unexpected disruptions while minimizing resource consumption.&quot;
    },
    {
      id: 7,
      title: &quot;Communal Spaces: Redesigning Social Structures&quot;,
      image: &quot;/images/Communal Spaces.jpeg&quot;,
      imageCaption: &quot;A reclaimed urban complex transformed into an interconnected community hub, featuring repurposed industrial structures now housing vertical farms, collective kitchens with transparent walls, classrooms opening onto medicinal gardens, and circular council chambers where neighborhood decisions are made through consensus.&quot;,
      description: &quot;These quotations highlight how sustainable communities reimagine social infrastructure, transforming existing spaces for collective wellbeing and mutual support.&quot;,
      quotes: [
        {
          text: &quot;Through expropriated buildings, urban farms, canteens, and teenager crèches, the participants have re-organized life, production, reproduction, care, travel, and human connection with the planet.&quot;,
          source: &quot;O&apos;Brien and Abdelhadi, \&quot;Everything for Everyone\&quot;&quot;
        },
        {
          text: &quot;At the Cecilia Gentili Social Center in the Bronx, &apos;skinners&apos; organize mental health services, food distribution, agricultural production, and much else.&quot;,
          source: &quot;O&apos;Brien and Abdelhadi, \&quot;Everything for Everyone\&quot;&quot;
        },
        {
          text: &quot;Climate refugees are welcomed freely into communes across North America and elsewhere; systems of community self-defense and preservation are in place and organized collectively.&quot;,
          source: &quot;O&apos;Brien and Abdelhadi, \&quot;Everything for Everyone\&quot;&quot;
        },
        {
          text: &quot;In Flushing, Queens, a knowledge center about trauma work is organized by Chinese Americans who were forced into concentration camps in California.&quot;,
          source: &quot;O&apos;Brien and Abdelhadi, \&quot;Everything for Everyone\&quot;&quot;
        },
        {
          text: &quot;Paradise is home. Home as it was or home as it should have been. Paradise is one&apos;s own place, one&apos;s own people, one&apos;s own world, knowing and known, perhaps even loving and loved.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        },
        {
          text: &quot;When no influence is strong enough to unify people, they divide. They struggle, one against one, group against group, for survival, position, power.&quot;,
          source: &quot;Octavia Butler, \&quot;Parable of the Sower\&quot;&quot;
        }
      ],
      impact: &quot;Community-centered design fosters social cohesion, resource sharing, collective decision-making, and mutual support during both everyday life and crisis situations.&quot;
    }
  ];
  
  // Get the currently selected theme
  const currentTheme = literaryThemes[selectedTheme];
  
  // Handle theme selection
  const handleThemeChange = (id) => {
    setSelectedTheme(id);
  };
  
  return (
    <div className=&quot;flex flex-col p-6 bg-gray-50 rounded-lg shadow w-full mx-auto&quot;>
      <h1 className=&quot;text-2xl font-bold text-green-800 mb-2&quot;>Literary Ecologies: Sustainable Space Visualizer</h1>
      <p className=&quot;text-gray-600 mb-6&quot;>Exploring architectural futures through environmental literature</p>
      
      {/* Theme Selection Tabs */}
      <div className=&quot;mb-6 overflow-x-auto&quot;>
        <div className=&quot;flex space-x-2 min-w-max&quot;>
          {literaryThemes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`px-4 py-2 rounded-t-lg text-sm whitespace-nowrap ${
                selectedTheme === theme.id
                  ? &quot;bg-white text-green-800 font-semibold shadow-inner&quot;
                  : &quot;bg-gray-200 text-gray-600 hover:bg-gray-300&quot;
              }`}
            >
              {theme.title.split(&quot;:&quot;)[0]}
            </button>
          ))}
        </div>
      </div>
      
      <div className=&quot;grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8&quot;>
        {/* Left Column - Image only */}
        <div className=&quot;lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden&quot;>
          <div className=&quot;p-4 bg-gray-800 text-white&quot;>
            <h2 className=&quot;font-bold text-xl&quot;>{currentTheme.title}</h2>
          </div>
          <img 
            src={currentTheme.image} 
            alt={currentTheme.title}
            className=&quot;w-full h-auto&quot;
          />
        </div>
        
        {/* Right Column - Description, Quotes and Impact */}
        <div className=&quot;lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden&quot;>
          
          <div className=&quot;p-4&quot;>
            <h3 className=&quot;font-semibold text-gray-800 mb-2&quot;>Literary Inspiration</h3>
            <div className=&quot;space-y-4 max-h-[600px] overflow-y-auto pr-2&quot;>
              {selectedTheme === 0 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This design features a modern treehouse integrated with the forest ecosystem. It includes interwoven wooden walkways, solar panels above the canopy, and transparent observation rooms where residents can immerse themselves in forest communication networks spanning between the trees, birds, insects, and more. All of the design elements come together to remind people of their place in the ecosystem, while also using sustainable materials that add to the environment rather than detracting from it.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;The Overstory&quot;, Richard Powers writes &quot;<span className=&quot;italic&quot;>What you make from a tree should be at least as miraculous as what you cut down</span>&quot;. Traditionally, construction involves logging and deforestation. While the treehouse uses wood elements that come from the trees around it, it features a design that adds to the forest rather than detracting from it.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Powers also explores the concept of deep ecology and universal interconnectedness in &quot;The Overstory&quot;. Prominent quotes on the topic include: &quot;<span className=&quot;italic&quot;>This is not our world with trees in it. It&apos;s a world of trees, where humans have just arrived</span>&quot;, and &quot;<span className=&quot;italic&quot;>There are no individuals. There aren&apos;t even separate species. Everything in a forest is the forest.</span>&quot; The idea of people taking their place in nature rather than trying to control it is exemplified in this design. Transparent observation rooms allow residents to immerse themselves in forest communication networks spanning between the trees, birds, insects, and now, themselves.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Powers also utilizes quotes such as &quot;<span className=&quot;italic&quot;>A tree learns to save its water</span>&quot;, and &quot;<span className=&quot;italic&quot;>Trees feed their young and synchronize their masts and bank resources and warn kin and sent out signals to wasps to come and save them from attacks</span>&quot;. Organisms like trees seem to have figured out sustainable living by using their resources wisely and passing it on to the next generation. In the spirit of sustainable living, the treehouse features solar panels that sit above the canopy, powering human life with a renewable energy that will outlast fossil fuels and live on for generations.
                  </p>
                </>
              )}
              
              {selectedTheme === 1 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The sea house design features a series of interconnected sustainable stilt homes rising from coastal waters. Wave-harvesting energy panels, expansive glass walls facing the horizon, and terraced gardens that cascade toward the water create a seamless boundary between the human habitation of earth, and the ocean ecosystems.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;The Man with the Compound Eyes&quot;, Wu Ming-Yi writes about Alice, the main character, and her husband, who design a seaside home -- &quot;<span className=&quot;italic&quot;>Together with her husband, she designed this house... its solar panels deftly track the sun&apos;s trajectory across the sky, while its expansive windows forge an intimate connection with the boundless sea.</span>&quot; We incorporate various aspects of this vision, including horizon facing windows for passive heating, and beautiful ocean views.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Wu Ming-Yi also writes that &quot;<span className=&quot;italic&quot;>The house by the water&apos;s edge gradually transforms from a coastal sanctuary into a dwelling submerged in the turbulent aftermath of a collision behind the trash island and Taiwan.</span>&quot; This illustrates the effects of pollution in the form of the Pacific Garbage Patch crashing into the shore.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This design intends to stay realistic while staying as sustainable as possible. With the rate at which global warming is going right now, we can expect a lot more rising sea levels, and the flooding of coastal towns. In order to slow down global warming, we must live more sustainably by sourcing energy from waves and growing our own food locally and naturally. Hence, this design recognizes that we will probably have to face the effects of our own actions while actively trying to combat them.
                  </p>
                </>
              )}
              
              {selectedTheme === 2 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This design showcases a circular community sanctuary celebrating seeds and renewal. Oak saplings grow through apertures in the living roof, while the walls are embedded with seed banks. The central hearth is surrounded by acorn-shaped meditation pods, and transparent floors reveal root systems spreading beneath the building to connect with the surrounding forest.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;Parable of the Sower,&quot; Octavia Butler&apos;s protagonist Lauren establishes a community called Acorn, where she &quot;<span className=&quot;italic&quot;>hands out acorns — enough for everyone to plant one for their dead — which they do in an overtly symbolic ceremony of seeding life in a place of bones and ash.</span>&quot; This sanctuary incorporates that symbolism of rebirth through its very structure, creating spaces for meditation and remembrance that connect to new life.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Lauren explains that &quot;<span className=&quot;italic&quot;>unlike traditional tombstones, acorns symbolize rebirth and creation and will grow to serve as living monuments.</span>&quot; The transparency of this building allows visitors to witness the growth happening both above and below ground, reminding them of the continuous cycles of life, death, and renewal.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;The Overstory,&quot; there&apos;s a call to action: &quot;<span className=&quot;italic&quot;>I want to start a seed bank. There are half as many trees in the world as there were before we came down out of them.</span>&quot; This structure responds to that urgency by incorporating seed preservation into its very walls, becoming both a sanctuary for people and a bank of future forests.
                  </p>
                </>
              )}
              
              {selectedTheme === 3 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This design depicts a self-sufficient island community with protective natural boundaries. Encircled by a living fence of coral and mangroves, the boat-inspired dwellings feature curved roofs and communal freshwater catchment systems. Watchtowers that double as solar collectors are arranged in concentric rings around a central gathering space.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;The Man with the Compound Eyes,&quot; Wu Ming-Yi describes traditional island architecture: &quot;<span className=&quot;italic&quot;>Adorned with shells and carvings, Wayo Wayoan houses looked like capsized canoes. They stuck fish skin to the walls, and the whole community would gather round and build a coral fence out in front to block the wind.</span>&quot; This design incorporates those protective elements while adapting them for modern sustainability.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The concept of community as both protection and identity appears in Butler&apos;s &quot;Parable of the Sower&quot;: &quot;<span className=&quot;italic&quot;>We have God and we have each other. We have our island community, fragile, and yet a fortress.</span>&quot; The concentric arrangement of structures creates multiple layers of protection while fostering strong social bonds and resource sharing.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Wu Ming-Yi&apos;s description that &quot;<span className=&quot;italic&quot;>the islanders could neither walk to a place where the sea could not be heard nor have a conversation in which the sea was not mentioned</span>&quot; inspires this design&apos;s orientation toward water - both protecting from and communicating with the surrounding environment. The arrangement creates a self-sufficient ecosystem that balances isolation with interconnection.
                  </p>
                </>
              )}
              
              {selectedTheme === 4 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This grand communal structure showcases sustainable materials in their natural beauty. Constructed entirely from different wood varieties—cherry, maple, walnut, and bamboo—each section highlights the unique qualities and grain patterns of its materials without disguising their origins.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    In &quot;The Overstory,&quot; Powers writes a tribute to trees as materials: &quot;<span className=&quot;italic&quot;>Thank you for the cradles. Capes and hats and skirts. Poles, logs, posts. The rot-proof shakes and shingles. The kindling that will always light.</span>&quot; This design celebrates that gratitude by displaying wood not as a conquered resource but as a contributor to human habitation.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The structure incorporates different woods for different functions, reflecting another passage from Powers: &quot;<span className=&quot;italic&quot;>A large walnut unit in the front room, in the space traditionally reserved for the television altar. Maple in the guest room.</span>&quot; Each material is chosen not just for appearance but for its specific properties and relationship to human activities.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Wu Ming-Yi&apos;s emphasis on land reverence - &quot;<span className=&quot;italic&quot;>You must love the land, my children, and ring it in with your love. For the land is the most precious thing on this island. It is like rain, like the heart of a woman.</span>&quot; - guides the building&apos;s relationship with its surroundings. Rather than dominating the landscape, it emerges from it, using only what has been respectfully harvested and processed with minimal interference.
                  </p>
                </>
              )}
              
              {selectedTheme === 5 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This spiraling library structure transforms knowledge preservation into architecture. Its walls are formed by books, manuscripts and digital repositories, with reading spaces that transform into sleeping quarters at night. Terraced indoor gardens preserve endangered plant species, while a central atrium houses sustainable paper-making from renewable fibers.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Powers describes such a transformation in &quot;The Overstory&quot;: &quot;<span className=&quot;italic&quot;>The conversion of their house into a library happens too slowly to see. The books that won&apos;t fit she lays on their sides, on top of the existing rows.</span>&quot; This building follows that evolution, starting with knowledge and letting the architecture form around it rather than forcing books into predetermined spaces.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The library&apos;s organization reflects the characters&apos; approaches: &quot;<span className=&quot;italic&quot;>In place of children, then, books...Ray&apos;s shelves are organized by topic; Dorothy&apos;s, alphabetical by author.</span>&quot; Different sections of the spiral follow different organizational principles, acknowledging that knowledge structures itself in multiple compatible systems.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The urgency of knowledge preservation is captured in Powers&apos; warning: &quot;<span className=&quot;italic&quot;>Tens of thousands of trees we know nothing about. Species we&apos;ve barely classified. Like burning down the library, art museum, pharmacy, and hall of records, all at once.</span>&quot; This structure responds by becoming not just a repository of written knowledge but also a living archive, integrating endangered plants into its very design.
                  </p>
                </>
              )}
              
              {selectedTheme === 6 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This transformative structure embraces impermanence as its design principle. Featuring movable wall panels and modular living spaces that rearrange seasonally, it incorporates hydroponic gardens that shift to track sunlight. Many components are designed to eventually decompose, returning to the soil to nourish new building materials grown on-site.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Butler&apos;s foundational concept from &quot;Parable of the Sower&quot; guides this design: &quot;<span className=&quot;italic&quot;>All that you touch, You Change. All that you Change, Changes you. The only lasting truth is Change.</span>&quot; Rather than fighting against transformation, this building incorporates it as a feature, with systems designed to evolve over time.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The cyclical nature of change appears in Butler&apos;s description: &quot;<span className=&quot;italic&quot;>God is Change— Seed to tree, tree to forest; Rain to river, river to sea; Grubs to bees, bees to swarm. From one, many; from many, one; Forever uniting, growing, dissolving— forever Changing.</span>&quot; This structure follows these natural cycles, with components that dissolve and reconstitute in new forms.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Wu Ming-Yi provides a philosophical foundation: &quot;<span className=&quot;italic&quot;>Going through a mountain to get from place to place as quickly as possible is one way of life, while going around is another.</span>&quot; This adaptable architecture doesn&apos;t force permanent solutions but creates flexible pathways that can shift with changing needs and environmental conditions.
                  </p>
                </>
              )}
              
              {selectedTheme === 7 && (
                <>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    This reclaimed urban complex transforms existing structures into interconnected community spaces. Former industrial buildings now house vertical farms, while collective kitchens feature transparent walls that connect to medicinal gardens. Circular council chambers provide spaces for consensus-based neighborhood governance.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    O&apos;Brien and Abdelhadi describe such transformations in &quot;Everything for Everyone&quot;: &quot;<span className=&quot;italic&quot;>Through expropriated buildings, urban farms, canteens, and teenager crèches, the participants have re-organized life, production, reproduction, care, travel, and human connection with the planet.</span>&quot; This design realizes that vision by repurposing rather than rebuilding.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    The integration of care work and food production appears in their description: &quot;<span className=&quot;italic&quot;>At the Cecilia Gentili Social Center in the Bronx, &apos;skinners&apos; organize mental health services, food distribution, agricultural production, and much else.</span>&quot; This design creates no separation between survival needs and emotional wellbeing, integrating spaces for both in a holistic approach.
                  </p>
                  <p className=&quot;text-gray-700 mb-4&quot;>
                    Butler&apos;s definition of paradise as &quot;<span className=&quot;italic&quot;>Paradise is home. Home as it was or home as it should have been. Paradise is one&apos;s own place, one&apos;s own people, one&apos;s own world, knowing and known, perhaps even loving and loved.</span>&quot; guides the creation of spaces that facilitate deep connection while maintaining autonomy. The transparent walls and circular meeting spaces create visibility without erasing privacy.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className=&quot;bg-green-50 p-4 rounded-lg shadow-md&quot;>
        <h3 className=&quot;font-semibold text-green-800 mb-2&quot;>About This Project</h3>
        <p className=&quot;text-sm text-gray-700 mb-2&quot;>
          Throughout the course, we have explored the intricate relationship between humanity and nature in various contexts. As someone deeply interested in building a sustainable future, I&apos;ve been particularly drawn to how manmade spaces and structures are reflective of our relationship with the natural world.
        </p>
        <p className=&quot;text-sm text-gray-700 mb-2&quot;>
          Outside of this course, I am working on a project to build AI software for architects that streamlines project research, energy modeling, and more. For my creative response, I saw an opportunity to merge my technical knowledge in software and architecture with literary insights from course texts. The recurring theme of deep ecology, and the idea of man and nature being a single interconnected entity inspired me to create an interactive website that makes these abstract concepts tangible through visual representation.
        </p>
        <p className=&quot;text-sm text-gray-700 mb-2&quot;>
          My project, &quot;Literary Ecologies: Sustainable Space Visualizer&quot;, is an interactive website that takes quotations from our course readings and transforms them into architectural design visions with AI. Sustainable design is a spectrum, ranging from urban dystopia to the natural reclamation of manmade structures. The tool illustrates how different literary perspectives could manifest in the built environment.
        </p>
        <p className=&quot;text-sm text-gray-700 mb-2&quot;>
          The visualization includes quotations from course texts such as Richard Powers&apos; &quot;The Overstory&quot;, and Wu Ming-Yi&apos;s &quot;The Man with the Compound Eyes&quot;, and pairs them with AI-generated Architectural renderings that embody the quote&apos;s environmental philosophy. Users can navigate through the tabs to explore different approaches to sustainability, and observe how resource consumption and environmental impact can shift in relation to different architectural philosophies.
        </p>
        <p className=&quot;text-sm text-gray-700&quot;>
          The goal of this project is to not only analyze inspirations for sustainable spaces, but also illustrate literature&apos;s ability to influence practical ways of thinking and designing our future.
        </p>
      </div>
    </div>
  );
};

export default SustainableSpaceVisualizer;