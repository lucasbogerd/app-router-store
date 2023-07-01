CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255),
	`price` int,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE UNIQUE INDEX `name_idx` ON `products` (`name`);