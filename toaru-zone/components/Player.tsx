'use client';
import React, { useEffect, useState } from "react";
import axios from "axios"
import styeles from "./Player.module.css"

export const PlayerBar = () => {
  return (
        <audio controls className="w-96 my-8">
            <source src="/audios/Hiroyuki Sawano - Release My Soul [www.slider.kz].mp3" type="audio/mpeg" />
        </audio>
  );
}

export const Lyrics = () => {
  const line = '[00:00.0001]LRC-musicenc.com';
const match = line.match(/\[(\d{2}:\d{2}\.\d{2,5})?\](.*)/);

if (match) {
  console.log(`Full Match: ${match[0]}`); // 完整匹配的字符串
  console.log(`Time: ${match[1]}`);       // 第一个捕获组的内容
  console.log(`Text: ${match[2]}`);       // 第二个捕获组的内容
  console.log("CS4".match(/CS.?4/));
  console.log(/^C/.test("CS4"));
}

  return (
    <div className={styeles.container}>
        <ul>
          <li className={styeles.active}>Lorem, ipsum dolor.</li>
          <li>Nam, porro iste.</li>
          <li>Minus, commodi quis?</li>
          <li>Minima, earum. Accusantium.</li>
          <li>Illo, voluptatum doloribus?</li>
          <li>Voluptatibus, sed eligendi.</li>
          <li>Illum, assumenda sint!</li>
          <li>Provident, odit illum!</li>
          <li>Obcaecati, sint! Voluptates!</li>
          <li>Aliquid, maiores est!</li>
          <li>Repudiandae, atque saepe.</li>
          <li>Placeat, enim officia.</li>
          <li>Inventore, repudiandae animi!</li>
          <li>Qui, nisi alias.</li>
          <li>In, totam voluptatibus!</li>
          <li>Ex, qui. Consequatur.</li>
          <li>Repudiandae, minus quae!</li>
            <li>Iste, impedit magnam.</li>
          <li>Omnis, veritatis ipsum?</li>
          <li>Sit, facere a.</li>
          <li>Ea, quis expedita.</li>
          <li>Numquam, maiores cupiditate!</li>
          <li>Nesciunt, quidem tempora.</li>
          <li>Numquam, modi incidunt?</li>
          <li>Iure, exercitationem est!</li>
          <li>Exercitationem, dolores voluptatibus.</li>
          <li>Quod, voluptatem temporibus.</li>
          <li>Rerum, doloremque modi?</li>
          <li>Vero, veniam sit.</li>
          <li>Soluta, omnis vero.</li>
        </ul>
    </div>
  )
}
