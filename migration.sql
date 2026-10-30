CREATE TABLE "quotas" (
	"uid" text PRIMARY KEY,
	"email" text,
	"used" integer DEFAULT 0 NOT NULL,
	"window_start" timestamp with time zone DEFAULT now() NOT NULL
);
