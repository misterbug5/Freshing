/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { config, setup, strict } from "@twind";
import { virtualSheet } from "twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({
   mode: strict, 
   theme: {
    extend:{
      fontFamily: {
        sans:['"3270"', 'Helvetica']
      }
    }
    
   },
   preflight: {
    '@font-face': [
      {
        fontFamily: '"3270"',
        fontWeight: '400',
        src: 'url(/3270%20Semi-Narrow%20Nerd%20Font%20Complete%20Windows%20Compatible.otf)',
      }
    ]
   }, 
   ...config, sheet
  });

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get("twind") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...(sheet).target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twind", newSnapshot);
}

await start(manifest, { render });
