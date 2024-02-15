CREATE TABLE `items` (
  `id` int PRIMARY KEY,
  `item_name` varchar(255),
  `icon` varchar(255),
  `crafting` int,
  `diplomacy` int,
  `faith` int,
  `force` int,
  `ration` bool DEFAULT false,
  `traits` int,
  `hunting` int,
  `medecine` int,
  `navalpower` int,
  `navigation` int,
  `morale` int,
  `dlc_name` varchar(255),
  `type` varchar(255)
);

CREATE TABLE `ships` (
  `id` int PRIMARY KEY,
  `icon` varchar(255),
  `her_role` varchar(255),
  `steamer` bool DEFAULT false,
  `cargo_slots` int,
  `items_slots` int,
  `naval_power` int,
  `navigation` int,
  `is_special` bool DEFAULT false
);

CREATE TABLE `saved_expeditions` (
  `id` int,
  `ship_id` int,
  `item_id` int
);

ALTER TABLE `saved_expeditions` ADD FOREIGN KEY (`ship_id`) REFERENCES `ships` (`id`);

ALTER TABLE `saved_expeditions` ADD FOREIGN KEY (`item_id`) REFERENCES `items` (`id`);
