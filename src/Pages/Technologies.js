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
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={php} title="PHP" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={ruijie} title="Ruijie | Reyee" alt="" />
        <img src={mikrotik} title="MikroTIK" alt="" />
        <img src={cisco} title="CISCO" alt="" />
        <img src={juniper} title="Juniper Networks" alt="" />
        <img src={huawei} title="HUAWEI" alt="" />
        <img src={fortinet} title="FORTINET" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={putty} title="Putty" alt="Putty" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={winbox} title="Winbox" alt="Winbox" />
      </section>
    </main>
  );
}

export default Technologies;
