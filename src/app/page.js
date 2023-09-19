"use client";

import React from "react";
import Head from "next/head";
import Grid from "../components/Grid";
import Game from "../components/Game";
import MyContext from "./MyContext";
import "./page.css";
import logo from "/public/logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />

        <meta
          name="description"
          content="Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
        />
        <meta name="author" content=" Waheb.C Delphine.T" />
        <meta
          property="og:title"
          content="Memory Game, faites travailler votre memoire en vous amusant"
        />
        <meta
          property="og:url"
          content="https://gradient-generator.delphine-t-2669.com"
        />
        <meta
          property="og:description"
          content="Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
        />
        <meta
          property="og:image"
          content="https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="delphine-t-2669.com/" />
        <meta
          property="twitter:url"
          content="https://gradient-generator.delphine-t-2669.com"
        />
        <meta
          name="twitter:title"
          content="Memory Game, faites travailler votre memoire en vous amusant"
        />
        <meta
          name="twitter:description"
          content="Memory est une application react nextJs. C'est un jeu de memoire. Vous devez retrouver les 2 cartes identiques, parmi un jeu de 16.Selectionnez les. Si vous trouvez un jeu identique, vous gagnez un point, sinon vous devez recommencer. La partie s'arrete lorsque vous avez decouvert toutes les cartes. A vous de jouer"
        />
        <meta
          name="twitter:image"
          content="https://github.com/Delphine2669/memory-game/raw/dev/memory-game/public/assets/MemoryScreen.png"
        />
        <title>Memory Game</title>
      </Head>

      <main>
        <div className="Header">
          <img src="/logo.png" alt="" className="logo" />
          <h1>MEMORY GAME </h1>
        </div>

        <Game />
      </main>
    </>
  );
}
