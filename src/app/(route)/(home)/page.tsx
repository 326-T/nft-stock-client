"use client";

import { useEffect, useMemo, useState } from "react";
import ItemContainer from "./components/ItemContainer";
import { Pokemon, PokemonSimple } from "@/types/Pokemon";
import axios from "axios";
import { useQueue } from "@/hooks/useQueue";

export default function HomePage() {
  const { state, push, clear } = useQueue<Pokemon>([]);
  const [pokemonSimples, setPokemonSimples] = useState<PokemonSimple[]>([]);

  useEffect(() => {
    clear();
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
      .then((res) => {
        setPokemonSimples(res.data.results);
      });
  }, []);

  useEffect(() => {
    pokemonSimples.forEach((pokemonSimple) => {
      axios
        .get(pokemonSimple.url)
        .then((res) => {
          push(res.data);
        })
        .catch((err) => console.log(err));
    });
  }, [pokemonSimples]);

  const sorted = useMemo(() => {
    return state.toSorted((a, b) => a.id - b.id);
  }, [state]);

  return <ItemContainer pokemons={sorted} />;
}
