import { usePlayerStore } from "@/store/usePlayerStore";
import { useEffect, useState } from "react";

export function useLocalStorage() {
  // store form zustand
  const { players, addPlayers } = usePlayerStore();
  // function to get players from local storage

  function getTeamLocalStorage() {
    const players = localStorage.getItem("players");
    if (players) {
      const parsedPlayers = JSON.parse(players);
      addPlayers(parsedPlayers);
    }
  }

  // useEffect to get players from local storage depending on players
  useEffect(() => {
      getTeamLocalStorage();
  }, []);

  // console.log jeje
  console.log(players);
}
