// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")
  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * radius ** 2

  // output
  document.getElementById("volume-info").innerHTML =
    "Volume = " + volume + "u<sup>3</sup>"
}
