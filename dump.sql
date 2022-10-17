--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "idUser" integer,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: shortUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."shortUrls" (
    id integer NOT NULL,
    "idUser" integer,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL
);


--
-- Name: shortUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."shortUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."shortUrls_id_seq" OWNED BY public."shortUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: shortUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 9, '203e19c0-cb86-46db-be23-695bd02a0847', '2022-10-17 06:15:08.692036');


--
-- Data for Name: shortUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."shortUrls" VALUES (5, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'p4fKG9e1qzdwp2iKOv4Z5', 0);
INSERT INTO public."shortUrls" VALUES (6, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'rpyMVTgxyHnroi_zHGPBh', 0);
INSERT INTO public."shortUrls" VALUES (7, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'd3C3DhGOpAJkaPxJuKqP6', 0);
INSERT INTO public."shortUrls" VALUES (8, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'MFLT4fZ_SfQdME1NJQXrx', 0);
INSERT INTO public."shortUrls" VALUES (9, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'BawZcKHHcNuUFcxocftrI', 0);
INSERT INTO public."shortUrls" VALUES (10, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'jeQWFHea28tS0SK1CfSg9', 0);
INSERT INTO public."shortUrls" VALUES (11, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', '-My_EKQY7CFrogwFEbMIV', 0);
INSERT INTO public."shortUrls" VALUES (2, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'DFZrNSflF14YBgeqXovEi', 7);
INSERT INTO public."shortUrls" VALUES (3, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', 'XzAkKmChojqKEJeWVE1xv', 4);
INSERT INTO public."shortUrls" VALUES (13, 9, 'https://www.youtube.com/watch?v=khLCJjoE9Ik&list=RDqP1OVAANSbY&index=13', 'IwqgFYPlb7178D-65M0Aw', 0);
INSERT INTO public."shortUrls" VALUES (14, 9, 'https://www.youtube.com/watch?v=khLCJjoE9Ik&list=RDqP1OVAANSbY&index=13', 'sM77Y3NLgpPTpErqk_Wai', 0);
INSERT INTO public."shortUrls" VALUES (15, 9, 'https://www.youtube.com/watch?v=khLCJjoE9Ik&list=RDqP1OVAANSbY&index=13', 'oRfAjuAbMveeR7tlBbgaC', 0);
INSERT INTO public."shortUrls" VALUES (4, 2, 'https://www.youtube.com/watch?v=qP1OVAANSbY&list=RDqP1OVAANSbY&start_radio=1', '9J3RmfMHevPr1qRZa8Mvs', 2);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Jason', 'jason@gmail.com', 'jason');
INSERT INTO public.users VALUES (2, 'João', 'joao@driven.com.br', 'driven');
INSERT INTO public.users VALUES (8, 'João', 'joaoa@driven.com.br', '$2b$10$oHj6iZ0eEqIpTOflJacWput.SjAX3KHMSmiaknA2RFZMXaysmu1JK');
INSERT INTO public.users VALUES (9, 'João', 'jasdasa@driven.com.br', '$2b$10$Bd1FtSeIO8tRfDGVby1xtOAJJxtVsWtCwBHn6AT.YrnYW3K3M5W5m');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: shortUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shortUrls_id_seq"', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: shortUrls shortUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- Name: shortUrls shortUrls_idUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

