import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    php,
    bootstrap,
    python,
    ruijie,
    mikrotik,
    cisco,
    juniper,
    huawei,
    fortinet,
    vscode,
    git,
    github,
    npm,
    winbox,
    putty,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={html} title="html" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={css} title="CSS" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={js} title="JavaScript" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={php} title="PHP" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={bootstrap} title="Bootstrap" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={python} title="Python" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={ruijie} title="Ruijie | Reyee" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={mikrotik} title="MikroTIK" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={cisco} title="CISCO" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={juniper} title="Juniper Networks" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={huawei} title="HUAWEI" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={fortinet} title="FORTINET" alt="" />
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={vscode} title="Visual Studio Code" alt="" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={git} title="Git" alt="Git" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={github} title="Github" alt="Github" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={putty} title="Putty" alt="Putty" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={npm} title="NPM" alt="NPM" />
        </div>
        <div className="bg-white rounded-lg p-2 flex items-center justify-center">
          <img src={winbox} title="Winbox" alt="Winbox" />
        </div>
      </section>
    </main>
  );
}

export default Technologies;
