/* Buzzwood Village: the ERATON feasibility record's project file.
   web/index.html is the shared engine (styles, rules, rendering, translator); this file holds the page text
   (body) and the record (data). Open index.html?p=buzzwood; Buzzwood is also the default. */
window.ERATON_PROJECT = {
id:"buzzwood",
title:"Buzzwood Feasibility Record",
/* Record date: clocks and findings count from here. */
asOf:[2026,9,29],
body:`
<div class="wrap">
  <header class="instrument">
    <div class="main">
      <span class="lab">Feasibility record · acquisition to construction start</span>
      <h1>Buzzwood Village</h1>
      <div class="meta-row">
        <span>602 S 15th St, Philomath OR</span>
        <span>1.59 ac · Tax map 12612CD, TL 1200 &amp; 1500</span>
        <span>City of Philomath · Benton County</span>
        <span>Dev. Agreement rec. 2024-649017</span>
      </div>
      <div class="toolbar">
        <span>Every row cites the document it came from. Built from the owner's project files.</span>
        <button class="toggle" id="money-toggle" type="button" aria-pressed="false">Hide dollar figures</button>
      </div>
    </div>
    <div class="stamp">
      <span class="lab">Record as of</span>
      <span class="big" data-asof>27 Oct 2026</span>
      <span class="lab" style="margin-top:6px">Open findings</span>
      <span class="big" id="stamp-findings">–</span>
    </div>
  </header>

  <div class="question" aria-label="The standing question">
    <div><span class="lab">Is it feasible?</span><span class="ans" id="q-feasible">–</span><span class="muted small" id="q-feasible-why"></span></div>
    <div><span class="lab">On what terms?</span><span class="ans" id="q-terms">–</span><span class="muted small" id="q-terms-why"></span></div>
    <div><span class="lab">What is missing?</span><span class="ans" id="q-missing">–</span><span class="muted small" id="q-missing-why"></span></div>
  </div>

  <section class="concept" id="concept" aria-label="What would be built">
    <figure>
      <a class="zoom" href="projects/buzzwood/buzzwood-two-level-concept.jpg" target="_blank" rel="noopener"><img src="projects/buzzwood/buzzwood-two-level-concept.jpg" alt="Concept board: two-story Scandinavian-modern cottage with dark board-and-batten and wood siding, upper deck and exterior stair; floor plans of a 500 SF lower unit and a 500 SF upper unit; interior views; homes set around a central green." loading="lazy" width="1536" height="1024"></a>
    </figure>
    <div class="txt">
      <span class="lab">What would be built · concept reference</span>
      <h2>Two-level senior cottage, 1,000 SF</h2>
      <p class="small">Owner concept board, 27 Oct 2026. The home priced in pro forma v0.3: 15 of these at $450K each, vertical cost $180/SF, plus the 602 house as the community guest house.</p>
      <div><span class="lab">Matches the model</span>
        <ul>
          <li>500 SF step-free ground level plus 500 SF upper level, both finished living space</li>
          <li>Homes around a shared green; Scandinavian-modern wood and dark cladding</li>
        </ul></div>
      <div><span class="lab">Check against the record</span>
        <ul>
          <li><b>Two kitchens, two entries.</b> The plans show the upper level as a full second unit. R-03 caps the project at 16 detached homes and precludes ADUs; keep the upper level a guest suite without a full kitchen, or seek a City amendment.</li>
          <li><b>"No elevation."</b> Under the revised BFE the floor still sits 1.5 ft above finished grade with an 18 ft ramp (R-16); the lower BFE is not yet effective (R-13).</li>
          <li><b>Image is illustrative,</b> not a design drawing or a cost basis.</li>
        </ul></div>
      <p class="small"><a href="https://claude.ai/artifact/3ddgKtrqJBYk9HM5UySLMm" target="_blank" rel="noopener">Open the corrected concept board</a>: measured plans with the upper level as a guest suite, and the section at the flood line.</p>
    </div>
  </section>

  <nav class="tabs" aria-label="Views">
    <a href="#summary" data-view="summary">Summary</a>
    <a href="#status" data-view="status">Status<span class="count" id="tab-count"></span></a>
    <a href="#costs" data-view="costs">Cost basis</a>
    <a href="#decisions" data-view="decisions">Your decisions</a>
    <a href="#translator" data-view="translator">Document to action</a>
    <a href="#record" data-view="record">What governs</a>
    <a href="#how" data-view="how">How this works</a>
  </nav>

  <!-- SUMMARY -->
  <div class="view" id="v-summary">
    <section class="sum-hero" aria-label="The home and the numbers">
      <figure><img src="projects/buzzwood/exterior.jpg" alt="Rendering of a two-story cottage with wood and dark board-and-batten siding, a gable roof, an upper deck and an exterior stair, among trees and planted beds." width="865" height="640"></figure>
      <div class="sum-facts">
        <div><span class="lab">Executive summary · record as of <span data-asof>27 Oct 2026</span></span><h2 style="margin-top:4px">15 two-level senior cottages around a shared green</h2></div>
        <div class="kpis">
          <div class="kpi"><span class="lab">Margin on cost today</span><span class="v no">9.9%</span><span class="small muted">floor 15%</span></div>
          <div class="kpi"><span class="lab">Price needed for 15%</span><span class="v"><span class="money">$471K</span></span><span class="small muted">priced at <span class="money">$450K</span></span></div>
          <div class="kpi"><span class="lab">Independent value check</span><span class="v"><span class="money">$395–475K</span></span><span class="small muted">most likely <span class="money">$435K</span></span></div>
          <div class="kpi"><span class="lab">With lower BFE</span><span class="v">20.2–24.8%</span><span class="small muted">map not yet effective</span></div>
        </div>
        <dl>
          <dt>Program</dt><dd>15 new homes × 1,000 SF, plus the 602 house as guest house: 16 dwellings, the cap in the recorded agreement</dd>
          <dt>Each home</dt><dd>500 SF step-free home below, 500 SF guest suite above with a kitchenette</dd>
          <dt>Binds</dt><dd>Floodplain elevation (ruled 27 Oct)</dd>
          <dt>Site</dt><dd>602 S 15th St, Philomath · 1.59 ac · one common lot</dd>
        </dl>
      </div>
    </section>

    <section class="panel">
      <div class="panel-head"><h2>The homes</h2><span class="src">Corrected concept board · plans schematic, 20′ × 25′ footprint</span></div>
      <div class="uplans">
        <figure><svg viewBox="-6 -2 34 36" role="img" aria-label="Lower level plan, 20 by 25 feet: bedroom and accessible bath at the back, hall with laundry, open living, dining and full kitchen at the front, side entry from an 18-foot ramp, front patio.">
          
          <rect class="pl-out" x="0" y="25.4" width="14" height="5.6"/>
          <text class="pl-sub" x="7" y="28.6">PATIO</text>
          
          <rect class="pl-out" x="20.6" y="19" width="5" height="6"/>
          <rect class="pl-out" x="21" y="1" width="4" height="18"/>
          <g class="pl-tread"><line x1="21" y1="4" x2="25" y2="4"/><line x1="21" y1="7" x2="25" y2="7"/><line x1="21" y1="10" x2="25" y2="10"/><line x1="21" y1="13" x2="25" y2="13"/><line x1="21" y1="16" x2="25" y2="16"/></g>
          <path class="pl-arrow" d="M23 2.2 V17.2 M22.3 16.3 L23 17.4 L23.7 16.3"/>
          <text class="pl-sub" x="23" y="0.4">RAMP 18′ · 1:12</text>
          <text class="pl-sub" x="23.1" y="22.6">LANDING</text>
          
          <rect class="pl-out" x="-4.6" y="2" width="4" height="22"/>
          <g class="pl-tread"><line x1="-4.6" y1="4" x2="-0.6" y2="4"/><line x1="-4.6" y1="5.5" x2="-0.6" y2="5.5"/><line x1="-4.6" y1="7" x2="-0.6" y2="7"/><line x1="-4.6" y1="8.5" x2="-0.6" y2="8.5"/><line x1="-4.6" y1="10" x2="-0.6" y2="10"/><line x1="-4.6" y1="11.5" x2="-0.6" y2="11.5"/><line x1="-4.6" y1="13" x2="-0.6" y2="13"/><line x1="-4.6" y1="14.5" x2="-0.6" y2="14.5"/><line x1="-4.6" y1="16" x2="-0.6" y2="16"/></g>
          <text class="pl-sub" x="-2.6" y="21" transform="rotate(-90 -2.6 21)" style="text-anchor:start">STAIR UP TO SUITE</text>
          
          <rect class="pl-room" x="0" y="0" width="20" height="25"/>
          
          <rect class="pl-fix" x="17.6" y="12.6" width="2.2" height="7.6"/>
          <rect class="pl-fix" x="17.8" y="12.8" width="1.8" height="2.4"/><text class="pl-sub" x="18.7" y="14.3">REF</text>
          <rect class="pl-fix" x="17.8" y="15.6" width="1.8" height="1.6"/><text class="pl-sub" x="18.7" y="16.6">SINK</text>
          <rect class="pl-fix" x="17.8" y="17.6" width="1.8" height="2.2"/><text class="pl-sub" x="18.7" y="18.9">RANGE</text>
          <rect class="pl-fix" x="14.2" y="8.5" width="5.6" height="3"/><text class="pl-sub" x="17" y="10.2">W/D · LINEN</text>
          <rect class="pl-fix" x="16.2" y="0.3" width="3.5" height="5"/><text class="pl-sub" x="17.95" y="3">ROLL-IN</text>
          <rect class="pl-fix" x="11.4" y="5.2" width="2.2" height="2.4"/>
          <rect class="pl-fix" x="11.4" y="0.4" width="3.2" height="1.8"/>
          <circle cx="13.2" cy="3.8" r="2.5" fill="none" stroke="var(--water)" stroke-width=".07" stroke-dasharray=".3 .25"/>
          <rect class="pl-fix" x="2" y="1.2" width="6.5" height="7"/><text class="pl-sub" x="5.25" y="5">QUEEN</text>
          <rect class="pl-fix" x="8.5" y="14.5" width="5" height="3.2" rx=".4"/>
          <rect class="pl-fix" x="1" y="18.5" width="2.6" height="5.5"/>
          
          <g class="pl-iwall">
            <line x1="0" y1="12" x2="6" y2="12"/><line x1="9" y1="12" x2="11" y2="12"/>
            <line x1="11" y1="0" x2="11" y2="8.4"/><line x1="11" y1="11.4" x2="11" y2="12"/>
            <line x1="11" y1="8" x2="11.6" y2="8"/><line x1="14.6" y1="8" x2="20" y2="8"/>
            <line x1="14" y1="8" x2="14" y2="12"/><line x1="14" y1="12" x2="14.6" y2="12"/><line x1="19.6" y1="12" x2="20" y2="12"/>
          </g>
          <path class="pl-swing" d="M6 12 A3 3 0 0 1 9 9"/>
          <path class="pl-swing" d="M11.6 8 A3 3 0 0 1 14.6 11"/>
          
          <path class="pl-wall" d="M0 0 H20 V21 M20 24 V25 H18 M3 25 H0 V0"/>
          <line class="pl-glaze" x1="3" y1="25" x2="18" y2="25"/>
          <line class="pl-glaze" x1="0" y1="3" x2="0" y2="8"/>
          <line class="pl-glaze" x1="3" y1="0" x2="8" y2="0"/>
          <path class="pl-swing" d="M20 24 A3 3 0 0 1 17 21"/>
          
          <text class="pl-lbl" x="5.5" y="10.2">Bedroom</text><text class="pl-sub" x="5.5" y="11.1">11′ × 12′</text>
          <text class="pl-lbl" x="13.6" y="7.3">Bath</text>
          <text class="pl-lbl" x="12.5" y="10.6" style="font-size:.6px">Hall</text>
          <text class="pl-lbl" x="7.5" y="21.6">Living · dining</text><text class="pl-sub" x="7.5" y="22.5">open to kitchen</text>
          <text class="pl-lbl" x="15.6" y="21.8">Kitchen</text>
          <text class="pl-sub" x="21.3" y="21.6" style="text-anchor:start">ENTRY</text>
          
          <line class="pl-dim" x1="0" y1="-1" x2="20" y2="-1"/><line class="pl-dim" x1="0" y1="-1.4" x2="0" y2="-0.6"/><line class="pl-dim" x1="20" y1="-1.4" x2="20" y2="-0.6"/>
          <text class="pl-dimt" x="10" y="-1.3">20′-0″</text>
          <line class="pl-dim" x1="27" y1="0" x2="27" y2="25"/><line class="pl-dim" x1="26.6" y1="0" x2="27.4" y2="0"/><line class="pl-dim" x1="26.6" y1="25" x2="27.4" y2="25"/>
          <text class="pl-dimt" x="27.8" y="12.5" transform="rotate(-90 27.8 12.5)">25′-0″</text>
          
          <g transform="translate(15 32.6)"><rect x="0" y="0" width="5" height=".35" fill="var(--ink)"/><rect x="5" y="0" width="5" height=".35" fill="none" stroke="var(--ink)" stroke-width=".06"/><text class="pl-dimt" x="0" y="1.2">0</text><text class="pl-dimt" x="5" y="1.2">5′</text><text class="pl-dimt" x="10" y="1.2">10′</text></g>
        </svg><figcaption><b>Lower level · the home, 500 SF</b><span class="muted">Bedroom, roll-in bath, kitchen and laundry on one step-free level; entry by an 18′ ramp.</span></figcaption></figure>
        <figure><svg viewBox="-6 -2 34 36" role="img" aria-label="Upper level plan, 20 by 25 feet: bedroom and bath at the back, sitting room with a kitchenette at the front, entry from the exterior stair on the left, front deck.">
          
          <rect class="pl-out" x="0" y="25.4" width="20" height="5.6"/>
          <text class="pl-sub" x="10" y="28.6">DECK</text>
          
          <rect class="pl-out" x="-4.6" y="2" width="4" height="15"/>
          <g class="pl-tread"><line x1="-4.6" y1="4" x2="-0.6" y2="4"/><line x1="-4.6" y1="5.5" x2="-0.6" y2="5.5"/><line x1="-4.6" y1="7" x2="-0.6" y2="7"/><line x1="-4.6" y1="8.5" x2="-0.6" y2="8.5"/><line x1="-4.6" y1="10" x2="-0.6" y2="10"/><line x1="-4.6" y1="11.5" x2="-0.6" y2="11.5"/><line x1="-4.6" y1="13" x2="-0.6" y2="13"/><line x1="-4.6" y1="14.5" x2="-0.6" y2="14.5"/></g>
          <rect class="pl-out" x="-4.6" y="17" width="4" height="7"/>
          <text class="pl-sub" x="-2.6" y="20.6">LANDING</text>
          <path class="pl-arrow" d="M-2.6 3 V15.4 M-3.3 14.5 L-2.6 15.6 L-1.9 14.5"/>
          
          <rect class="pl-room" x="0" y="0" width="20" height="25"/>
          
          <rect class="pl-fix" x="17.6" y="13" width="2.2" height="6"/>
          <rect class="pl-fix" x="17.8" y="13.2" width="1.8" height="1.8"/><text class="pl-sub" x="18.7" y="14.3">SINK</text>
          <rect class="pl-fix" x="17.8" y="15.3" width="1.8" height="1.8"/><text class="pl-sub" x="18.7" y="16.4">FRIDGE</text>
          <rect class="pl-fix" x="17.8" y="17.3" width="1.8" height="1.5"/><text class="pl-sub" x="18.7" y="18.2">MICRO</text>
          <rect class="pl-fix" x="14.2" y="8.5" width="5.6" height="3"/><text class="pl-sub" x="17" y="10.2">CLOSET</text>
          <rect class="pl-fix" x="16.2" y="0.3" width="3.5" height="4"/><text class="pl-sub" x="17.95" y="2.5">SHOWER</text>
          <rect class="pl-fix" x="11.4" y="5.2" width="2.2" height="2.4"/>
          <rect class="pl-fix" x="11.4" y="0.4" width="3.2" height="1.8"/>
          <rect class="pl-fix" x="2" y="1.2" width="6.5" height="7"/><text class="pl-sub" x="5.25" y="5">QUEEN</text>
          <rect class="pl-fix" x="3" y="19.5" width="6.5" height="2.6"/>
          <rect class="pl-fix" x="10.5" y="16" width="3" height="3" rx="1.5"/>
          
          <g class="pl-iwall">
            <line x1="0" y1="12" x2="6" y2="12"/><line x1="9" y1="12" x2="11" y2="12"/>
            <line x1="11" y1="0" x2="11" y2="8.4"/><line x1="11" y1="11.4" x2="11" y2="12"/>
            <line x1="11" y1="8" x2="11.6" y2="8"/><line x1="14.6" y1="8" x2="20" y2="8"/>
            <line x1="14" y1="8" x2="14" y2="12"/><line x1="14" y1="12" x2="14.6" y2="12"/><line x1="19.6" y1="12" x2="20" y2="12"/>
          </g>
          <path class="pl-swing" d="M6 12 A3 3 0 0 1 9 9"/>
          <path class="pl-swing" d="M11.6 8 A3 3 0 0 1 14.6 11"/>
          
          <path class="pl-wall" d="M0 0 H20 V25 H18 M3 25 H0 V23 M0 20 V0"/>
          <line class="pl-glaze" x1="3" y1="25" x2="18" y2="25"/>
          <line class="pl-glaze" x1="20" y1="3" x2="20" y2="8"/>
          <line class="pl-glaze" x1="3" y1="0" x2="8" y2="0"/>
          <path class="pl-swing" d="M0 20 A3 3 0 0 1 3 23"/>
          
          <text class="pl-lbl" x="5.5" y="10.2">Bedroom</text><text class="pl-sub" x="5.5" y="11.1">11′ × 12′</text>
          <text class="pl-lbl" x="13.6" y="7.3">Bath</text>
          <text class="pl-lbl" x="12.5" y="10.6" style="font-size:.6px">Hall</text>
          <text class="pl-lbl" x="8" y="23.7">Sitting room</text>
          <text class="pl-lbl" x="15.4" y="20.3">Kitchenette</text><text class="pl-sub" x="15.4" y="21.2">no range</text>
          
          <line class="pl-dim" x1="0" y1="-1" x2="20" y2="-1"/><line class="pl-dim" x1="0" y1="-1.4" x2="0" y2="-0.6"/><line class="pl-dim" x1="20" y1="-1.4" x2="20" y2="-0.6"/>
          <text class="pl-dimt" x="10" y="-1.3">20′-0″</text>
          <line class="pl-dim" x1="27" y1="0" x2="27" y2="25"/><line class="pl-dim" x1="26.6" y1="0" x2="27.4" y2="0"/><line class="pl-dim" x1="26.6" y1="25" x2="27.4" y2="25"/>
          <text class="pl-dimt" x="27.8" y="12.5" transform="rotate(-90 27.8 12.5)">25′-0″</text>
          <g transform="translate(15 32.6)"><rect x="0" y="0" width="5" height=".35" fill="var(--ink)"/><rect x="5" y="0" width="5" height=".35" fill="none" stroke="var(--ink)" stroke-width=".06"/><text class="pl-dimt" x="0" y="1.2">0</text><text class="pl-dimt" x="5" y="1.2">5′</text><text class="pl-dimt" x="10" y="1.2">10′</text></g>
        </svg><figcaption><b>Upper level · guest suite, 500 SF</b><span class="muted">Kitchenette only, own entry by the exterior stair, so each building stays one home under R-03.</span></figcaption></figure>
        <figure><img src="projects/buzzwood/green.jpg" alt="Rendering of several two-story cottages around a planted green with a path." width="396" height="290" loading="lazy"><figcaption><b>Around a shared green</b><span class="muted">Scandinavian-modern gable form; cedar, black batten, concrete. Renders are illustrative.</span></figcaption></figure>
      </div>
    </section>

    <div class="two">
      <section class="panel">
        <div class="panel-head"><h2>Path to feasibility</h2><span class="lab">Price per home for a 20% margin on cost</span></div>
        <ul class="steps-mini" id="sum-steps"></ul>
        <p class="muted small">Each step lowers the price the project needs. Value check: <span class="money">$395–475K</span>. Detail under Status.</p>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>Key dates</h2><span class="src">Recorded Development Agreement 2024-649017</span></div>
        <ul class="dates-mini" id="sum-dates"></ul>
      </section>
    </div>

    <div class="two">
      <section class="panel">
        <div class="panel-head"><h2>Critical items</h2><span class="lab" id="sum-crit-count"></span></div>
        <ul class="crit-mini" id="sum-crit"></ul>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>Decisions waiting on the owner</h2></div>
        <ul class="crit-mini" id="sum-dec" style="--crit:var(--accent)"></ul>
        <p class="muted small">Rule them under Your decisions. Full findings, costs and the governing reference are in the other tabs.</p>
      </section>
    </div>
  </div>

  <!-- STATUS -->
  <div class="view" id="v-status" hidden>
    <section class="panel">
      <div class="panel-head"><h2>Pathway to feasibility</h2><span class="lab">Target: 20% margin on cost · 15 homes × 1,000 SF (v0.4)</span></div>
      <p>Which constraints must be removed or reduced, how to remove each, what it costs in time and money, and what it is worth. Each one removed lowers the sale price the project needs. Bars show the price per home (in $K, equal to $/SF on 1,000 SF) for a 20% margin. The shaded band is the independent value check.</p>
      <div class="ladder-chart" id="ladder-chart"></div>
      <div class="steps" id="steps"></div>
      <p class="disclaim">This pathway states what must be true and what it costs to pursue. It does not promise that each step can be achieved. The owner decides whether to travel it; the decision is logged under Your decisions.</p>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Needs attention</h2><span class="lab">Checked in code · each finding names an owner</span></div>
      <ul class="findings" id="findings"></ul>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Advisory notes</h2><span class="chip A">A · not findings · no check produces these</span></div>
      <ul class="findings" id="advisory"></ul>
    </section>

    <section class="panel">
      <div class="panel-head"><h2>Does the base case clear?</h2><span class="src">Pro forma v0.4 · 29 Oct 2026 · sheet 05 (v0.2 rows for reference)</span></div>
      <p class="small">Each percentage is <b>margin on cost</b>: the developer's profit divided by the total cost of the project, land and entitlement included. A scenario clears when it reaches the <b>15% floor</b>.</p>
      <div class="scen" id="scenarios"></div>
      <div class="calc">
        <div><span class="lab">How the v0.4 base is calculated</span>
          <table class="calc-t">
            <tr><td>Gross sales</td><td class="num">15 homes × <span class="money">$450,000</span></td><td class="num"><span class="money">$6,750,000</span></td></tr>
            <tr><td>less selling (6%) and marketing (1.5%)</td><td></td><td class="num"><span class="money">−$506,250</span></td></tr>
            <tr class="sum"><td>Net sales proceeds</td><td></td><td class="num"><span class="money">$6,243,750</span></td></tr>
            <tr><td>Total cost: construction, site, SDCs, soft costs, contingency, finance</td><td></td><td class="num"><span class="money">$5,052,266</span></td></tr>
            <tr><td>plus land basis and entitlement to date</td><td></td><td class="num"><span class="money">$600,000</span></td></tr>
            <tr><td>plus wetland permitting: JPA and DSL fee (credits not priced)</td><td></td><td class="num"><span class="money">$27,590</span></td></tr>
            <tr class="sum"><td>Total cost incl. land</td><td></td><td class="num"><span class="money">$5,679,856</span></td></tr>
            <tr class="sum"><td>Profit = net proceeds − total cost</td><td></td><td class="num"><span class="money">$563,894</span></td></tr>
            <tr class="sum"><td><b>Margin on cost = profit ÷ total cost</b></td><td class="num"><span class="money">$563,894</span> ÷ <span class="money">$5,679,856</span></td><td class="num"><b>9.9%</b></td></tr>
          </table>
          <p class="muted small">Workbook v0.4, sheet 05, rows 7–31; the wetland line is sheet 03, rows 20–26. Every line is itemized under Cost basis. The same profit is 8.4% of gross sales, which is a different ratio and is not used here.</p>
        </div>
        <div style="display:grid;gap:10px;align-content:start">
          <div><span class="lab">The 15% floor</span><p class="small">The lowest margin on cost a merchant builder or construction lender typically accepts; most look for 15–20%. The prices needed on this program: break-even (0%) at <span class="money">$409K</span> per home, 15% at <span class="money">$471K</span>.</p></div>
          <div><span class="lab">Solid and dashed cards</span><p class="small">Solid cards are the owner's model as run. Dashed cards marked <span class="chip A">A</span> are the same workbook with the one input named on the card changed, recalculated all-in. A range (20.2 to 24.8%) runs from the low to the high estimate of the flood premium removed, <span class="money">$25K</span> to <span class="money">$35K</span> per home. Green clears 15%; red is a model result below it; amber is a recalculated result below it.</p></div>
          <div><span class="lab">Tests passed</span><p class="small">The model scores each scenario on three pass/fail tests: <b>Returns</b>, margin on cost at least 15%; <b>Market</b>, the price per SF no higher than the top of observed comps; <b>Capital</b>, peak equity covered by the Cooper refinance and 602 equity without an investor. The v0.3 base passes Market only.</p></div>
          <div><span class="lab">STR rows</span><p class="small">Same ratio, but the project is valued as a rental instead of sold: stabilized income ÷ cap rate, less total cost, ÷ total cost. Takeout coverage is the permanent loan that income supports ÷ the construction loan it must repay.</p></div>
        </div>
      </div>
    </section>

    <div class="two">
      <section class="panel">
        <div class="panel-head"><h2>Binding constraint</h2><span id="constraint-state"></span></div>
        <p id="constraint-text"></p>
        <div class="tablewrap"><table>
          <thead><tr><th>Relief path</th><th>Granted by</th><th>Waiting on</th><th>Status</th><th>Viability <span class="chip A">A</span></th></tr></thead>
          <tbody id="paths"></tbody>
        </table></div>
        <p class="muted small">Viability is an advisory rating, given only to paths under evaluation. You rule; the log records what the ruling rested on.</p>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>Clocks</h2><span class="lab">From <span data-asof>27 Oct 2026</span></span></div>
        <ul class="clocks" id="clocks"></ul>
      </section>
    </div>

    <section class="panel" id="da-timeline-panel">
      <div class="panel-head"><h2>Development Agreement timeline</h2><span class="src">Recorded 2 Dec 2024 · Benton Co. 2024-649017</span></div>
      <p>Every clock the recorded agreement sets. Phase deadlines run from <i>the date the land use approval is final</i> (§12(a)). The record reads that as the Site Design Review approval (R-23, not yet confirmed by the City), final 24 Jan 2025 (R-14). The Phase 1 permit deadline is met on the owner's reading (R-25). The lower rows show the other reading, to rule out in writing.</p>
      <div class="tablewrap"><div style="min-width:860px" id="da-chart"></div></div>
      <div class="legend"><span><svg width="22" height="10" aria-hidden="true"><rect width="22" height="10" fill="var(--ink-2)"/></svg> fixed by the record</span><span><svg width="22" height="10" aria-hidden="true"><rect width="22" height="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-dasharray="4 2"/></svg> governing reading, start date not set</span><span><svg width="22" height="10" aria-hidden="true"><rect width="22" height="10" fill="var(--warn-soft)" stroke="var(--warn)"/></svg> other reading, to rule out</span><span><svg width="22" height="10" aria-hidden="true"><rect width="22" height="10" fill="none" stroke="var(--rule-2)" stroke-dasharray="2 2"/></svg> 12-month extension, if granted</span></div>
      <div class="tablewrap"><table id="da-provisions">
        <thead><tr><th>Section</th><th>What it sets</th><th>Date or trigger</th></tr></thead><tbody></tbody>
      </table></div>
    </section>

    <section class="panel">
      <div class="panel-head"><h2>Conditions register</h2><span class="lab">Five links per condition, each dated</span></div>
      <div class="tablewrap"><table>
        <thead><tr><th>Condition</th><th>Source</th><th>Links</th><th>Gate</th><th>Status</th></tr></thead>
        <tbody id="conditions"></tbody>
      </table></div>
      <div class="legend"><span class="lk">done, dated</span><span class="lk plan">planned, dated</span><span class="lk nodate">exists, no date</span><span class="lk miss">missing</span><span>Hover a link for its document.</span></div>
    </section>

    <section class="panel">
      <div class="panel-head"><h2>How strong is the market case?</h2><span class="lab">Evidence profile per assumption</span></div>
      <div class="two">
        <div class="matrix" id="matrix"></div>
        <div class="tablewrap"><table style="min-width:440px">
          <thead><tr><th>Assumption</th><th>Have</th><th>Missing</th><th>Next test</th></tr></thead>
          <tbody id="assumptions"></tbody>
        </table></div>
      </div>
    </section>
  </div>

  <!-- COSTS -->
  <div class="view" id="v-costs" hidden>
    <section class="panel">
      <div class="panel-head"><h2>What the margin is built from</h2><span class="src">For-sale, 15 homes · Pro forma v0.4, 29 Oct 2026 · sheet 05</span></div>
      <p class="muted small">Every line traces to a cell in the owner's model. This is the 27 Oct program: 15 new homes of 1,000 SF each, a step-free 500 SF ground level plus a 500 SF upper suite, both finished as living space. The 602 house becomes the community guest house and is not sold.</p>
      <div class="tablewrap"><table id="cost-stack"><thead><tr><th>Line</th><th style="text-align:right">Total</th><th style="text-align:right">Per home</th><th>How it is derived</th></tr></thead><tbody></tbody></table></div>
    </section>
    <div class="two">
      <section class="panel">
        <div class="panel-head"><h2>Unit program and pricing</h2><span class="src">Sheet 02</span></div>
        <div class="tablewrap"><table id="unit-prog" style="min-width:520px"><thead><tr><th>Type</th><th>Homes</th><th>SF each</th><th>Vertical $/SF</th><th>Sale $/SF</th><th>Price each</th></tr></thead><tbody></tbody></table></div>
        <p class="muted small">Vertical $180/SF is the owner's figure for Cooper 103's enclosed space, with both levels finished to living standard, plus 3.5% escalation to 2027. It includes Cooper's +5 ft flood foundation; the model carries no separate elevation line. Cross-check: JobTread 2506 projects $226,969 on 1,500 SF, $151/SF all-in including SDCs and site work.</p>
      </section>
      <section class="panel">
        <div class="panel-head"><h2>Rates and allowances</h2><span class="src">Sheet 01</span></div>
        <div class="tablewrap"><table id="rates" style="min-width:420px"><thead><tr><th>Assumption</th><th>Value</th><th>Basis</th></tr></thead><tbody></tbody></table></div>
      </section>
    </div>
    <section class="panel">
      <div class="panel-head"><h2>Site improvements</h2><span class="src">Sheet 03 · Sitework estimate r3</span></div>
      <div class="tablewrap"><table id="site" style="min-width:480px"><thead><tr><th>Line</th><th style="text-align:right">Full build</th><th style="text-align:right">Phase 1</th></tr></thead><tbody></tbody></table></div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>How the pathway changes the cost</h2><span class="chip A">A · recomputed 27 Oct</span></div>
      <div class="tablewrap"><table id="adjust"><thead><tr><th>Constraint removed</th><th style="text-align:right">Direct</th><th style="text-align:right">All-in</th><th>Why all-in is larger</th></tr></thead><tbody></tbody></table></div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Checks on the cost basis</h2><span class="lab">What a lender's reviewer would ask</span></div>
      <ul class="findings" id="cost-checks"></ul>
    </section>
  </div>

  <!-- DECISIONS -->
  <div class="view" id="v-decisions" hidden>
    <section class="panel">
      <div class="panel-head"><h2>Rulings the record is waiting on</h2><span class="lab">Owner decides · evidence shown</span></div>
      <p class="muted">Rule the constraint first; the product decision opens once it is ruled. The constraint ruling clears its finding. Each ruling is logged with the record date and the evidence shown here. In the ERATON app each ruling is saved into the record file; on a shared link or a snapshot it stays in that browser.</p>
      <div id="decisions" style="display:grid;gap:14px"></div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Decision log</h2><button class="btn ghost" id="reset-log" type="button">Clear my rulings</button></div>
      <ul class="log" id="log"></ul>
    </section>
  </div>

  <!-- TRANSLATOR -->
  <div class="view" id="v-translator" hidden>
    <section class="panel">
      <div class="panel-head"><h2>Turn a land use document into work</h2><span class="lab">Intake · never Reference until checked</span></div>
      <p>A land use report or decision ends at the analysis. The owner's work starts with each citation, approval, deadline, condition and risk inside it. Paste a document below, one statement per paragraph. Each statement becomes the object it belongs to, cites its paragraph, and lands in the project folder where it lives.</p>
      <p class="muted small">The sample statements are paraphrased from Buzzwood's recorded Development Agreement and the DSL wetland concurrence. Sorting picks only from the record's closed lists and a person confirms each object. Run from the ERATON app, Jev sorts each statement and shows its probability; an answer from 0.40 up to 0.60 is UNDETERMINED and goes to a person. Without the app, keyword rules stand in.</p>
      <p class="small" id="sort-engine" aria-live="polite"></p>
      <div class="two">
        <div style="display:grid;gap:10px;min-width:0">
          <label class="lab" for="doc">Load a document on file</label>
          <select id="doc" class="btn ghost" style="text-align:left;font-weight:400"></select>
          <p class="small muted" id="doc-note"></p>
          <label class="lab" for="report">Document text · one statement per paragraph</label>
          <textarea id="report"></textarea>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="run" type="button">Sort into the record</button><button class="btn ghost" id="sample" type="button">Restore sample</button></div>
        </div>
        <div style="display:grid;gap:10px;align-content:start;min-width:0">
          <div class="panel-head"><span class="lab">Objects created</span><span class="lab" id="out-count"></span></div>
          <div class="out" id="out"></div>
        </div>
      </div>
    </section>
  </div>

  <!-- RECORD -->
  <div class="view" id="v-record" hidden>
    <section class="panel">
      <div class="panel-head"><h2>Governing reference</h2><span class="lab">Changes only through a door</span></div>
      <p class="muted">Each fact carries its source, basis and the date it was last checked. A fact past its re-check date, missing, or resting on an interpretation the jurisdiction has not confirmed raises a finding.</p>
      <div class="tablewrap"><table>
        <thead><tr><th>ID</th><th>Fact</th><th>Source</th><th>Basis</th><th>Checked</th><th>Re-check by</th></tr></thead>
        <tbody id="reference"></tbody>
      </table></div>
    </section>
    <section class="panel">
      <div class="panel-head"><h2>Intake on file</h2><span class="lab">Append only · newest first</span></div>
      <div class="tablewrap"><table>
        <thead><tr><th>Date</th><th>Record</th><th>Stream</th><th>From</th><th>Feeds</th></tr></thead>
        <tbody id="intake"></tbody>
      </table></div>
    </section>
  </div>

  <!-- HOW -->
  <div class="view" id="v-how" hidden>
    <div class="two">
      <section class="panel">
        <h2>Nine questions this record is built to answer</h2>
        <ol class="cq" id="cqs"></ol>
      </section>
      <section class="panel">
        <h2>Who does what</h2>
        <div style="display:grid;gap:10px;font-size:.93rem">
          <div><span class="chip C">C</span> <b>Code.</b> Dates, clocks, missing links, stale references and counts. Never a guess.</div>
          <div><span class="chip J">J</span> <b>Sorting.</b> Placing an incoming document's statements into the record, choosing only from closed lists.</div>
          <div><span class="chip A">A</span> <b>Advisory.</b> Proposes the binding constraint and rates relief paths. Always labeled.</div>
          <div><span class="chip H">H</span> <b>You.</b> Every ruling: which constraint binds, which product to pursue, close or walk.</div>
        </div>
        <h3>Market evidence ladder</h3>
        <div class="ladder" id="ladder"></div>
        <h3>Closed lists, ruled 28 Oct 2026</h3>
        <p class="muted small" id="vocab"></p>
      </section>
    </div>
  </div>

  <footer>
    <span>Development Agreement timeline reconstructed 28 Oct 2026 from the recorded instrument (2024-649017).</span>
    <span>Rules lane revised 28 Oct 2026 for Entitlement Data Map Step 8: every finding is computed from a record, uses a ruled finding type, and observations no check produces are shown as advisory notes.</span>
    <span>Prepared by Martin Kribs Advisory. At construction start, the conditions register, permits and baseline hand off to the construction record.</span>
    <span>Not legal advice. Facts drawn from the project files must be confirmed against the primary source and with the jurisdiction before anyone relies on them.</span>
  </footer>
</div>
`,
data:function(h){
var AS_OF=h.AS_OF, d=h.d, days=h.days, iso=h.iso, addDays=h.addDays, addYears=h.addYears, fmt=h.fmt, esc=h.esc, $m=h.$m;

/* ---------- SOURCES ---------- */
var SRC = {
 DA:"Development Agreement, Benton Co. rec. 2024-649017",
 DSL:"DSL WD #2025-0069 concurrence, 11 Sep 2025",
 PMC:"City Floodplain Development Permit form (cites PMC 18.55)",
 PF:"Pro forma v0.2, 18 Oct 2026",
 PF3:"Pro forma v0.3, 27 Oct 2026",
 PF4:"Pro forma v0.4, 29 Oct 2026 (v0.3 plus the wetland block on sheet 03 rows 20–26)",
 MR:"Market research and independent value check, 27 Oct 2026",
 FNMA:"Fannie Mae Selling Guide B4-1.3-08, B4-2.1-02; ADU rental income guidance",
 TRK:"DA issue tracker, 29 Jan 2026 (reviews the 7 Oct 2024 pre-execution draft)",
 DAR:"Development Agreement as recorded, Benton Co. 2024-649017, 2 Dec 2024 (pp. 1–6 read 28 Oct 2026)",
 PCA:"DA, Planning Commission agenda item 3.2, 4 Nov 2024",
 DRAFT:"DA draft v2 with City comments, 7 Oct 2024 (superseded)",
 PDC:"Philomath Development Code §4.2.8(B)–(D), copy on file saved 25 Nov 2024",
 LL:"Email to City land use planner L. LaRoque, 17 Aug 2026",
 FS:"FloodSmart quotes and policies, Sep–Oct 2026",
 HC:"Homes.com, Corvallis 97330 new construction, 27 Oct 2026",
 OWN:"Owner, 27 Oct 2026",
 CP:"Philomath Comprehensive Plan, Housing (thru Ord. 871, 2022)",
 PN2:"Philomath News, 16 Jul 2026",
 TS:"Turnstone meeting notes, 27 Feb 2025",
 CM:"City Manager email, 2 Mar 2026",
 NEWS:"Philomath News, 26 Nov 2024",
 SURV:"Surveyor, revised FEMA study (draft), Oct 2026",
 FEMA:"FEMA guidance on preliminary flood data",
 ORS:"ORS 197.830(9)",
 EX:"Approved site plan exhibits C, F, G (2026)",
 BASE:"Baseline schedule (owner) — not yet issued",
 WDR:"Turnstone wetland delineation report, 6 Jun 2025 (DSL file WD 2025-0069)",
 SDR:"Site Design Review P24-08, signed Notice of Decision, 10 Jan 2025",
 SR:"Site Design Review P24-08 staff report, 8 Jan 2025",
 BP:"Building permit 675-25-000155-STR, issued 16 Jun 2025; final inspection approved 18 May 2026",
 PL:"City land use planner L. LaRoque, email 20 Aug 2026",
 PL2:"Owner's summary of a call with the City land use planner, 23 Jun 2026 (email to M. Kennedy)",
 PL3:"City land use planner L. LaRoque, email 17 Aug 2026 (Cooper Ln enforcement on hold during the code amendments)",
 PW:"Owner's email to the City land use planner, 10 Sep 2026 (Public Works walk-through with G. Black)",
 TSW:"Turnstone delineation proposal (2 Aug 2024, signed 16 Aug 2024), invoices 31164 and 31215, DSL receipt WD2025-0069",
 TSJ:"Turnstone Joint Permit Application and mitigation proposal, 17 Jan 2025, signed 6 Feb 2025",
 DSLF:"DSL Removal-Fill and Wetland Delineation Fees 2026–2030, effective 1 Jan 2026 (updated 1 Dec 2025)",
 ORS443:"ORS 443 (residential care licensing)"
};

/* ---------- GOVERNING REFERENCE ---------- */
var REF = [
 {id:"R-01", fact:"Development Agreement under ORS 94.504 between the City and Martin Kribs; Council approval 25 Nov 2024 (§19), executed 26 Nov 2024, recorded 2 Dec 2024 as 2024-649017; runs with the land; 15-year term (§1).", src:"DAR", basis:"recorded instrument", checked:"2026-10-27", interval:365},
 {id:"R-02", fact:"Annexed and rezoned from R-1 Low Density to R-3 High Density Residential; Council vote unanimous, 25 Nov 2024.", src:"DA", basis:"recorded instrument", checked:"2026-10-27", interval:365, note:"Ordinance number not on file."},
 {id:"R-03", fact:"Use limited to at most 16 detached single-unit homes on one common lot (condominium units). Duplexes, triplexes, townhomes, zero-lot-line homes, apartments and accessory dwelling units are precluded.", src:"DA", basis:"recorded instrument", checked:"2026-10-27", interval:365},
 {id:"R-04", fact:"Maximum building height 30 ft from finish grade.", src:"DA", basis:"recorded instrument", checked:"2026-10-27", interval:365},
 {id:"R-05", fact:"The only remaining discretionary approval is a Type II Site Design Review.", src:"DA", basis:"recorded instrument", checked:"2026-10-27", interval:365, note:"Approved 10 Jan 2025 as P24-08 (R-14)."},
 {id:"R-06", fact:"§12: at most 3 phases, each self-sufficient; all phases within 5 years. §12(a): Phase 1 improvements designed and approved, and all building permits issued, within 1 year of the date the land use approval is final; each later phase completed within 3 and 5 years of that date, or the land use approval expires. The City Manager may extend each phase up to 12 months for delays outside the Owner's control.", src:"DAR", basis:"recorded instrument", checked:"2026-10-28", interval:365, note:"The agreement cites PMC 18.110.080(B)(1) and (D)(2). The code copy on file numbers the same text §4.2.8(B) and (D): a Site Design Review approval lapses if no building permit issues within one year; all phases within 5 years without reapplying; the Planning Official may extend once by up to one year if asked before expiry. Which edition governs is not checked."},
 {id:"R-07", fact:"Floodplain rules apply as of the date building permit applications are submitted. Homes are anticipated to be built without fill because FEMA was not processing LOMR-F or CLOMR-F for fill pending no-net-loss standards.", src:"DA", basis:"recorded instrument", checked:"2024-11-26", interval:365, note:"FEMA's processing position was current in Nov 2024 and has not been re-checked."},
 {id:"R-08", fact:"Development in the Special Flood Hazard Area needs a Floodplain Development Permit under PMC Chapter 18.55; FIRM community 410011, map series 41003C effective 2 Jun 2011; two elevation certificates per new structure.", src:"PMC", basis:"city form", checked:"2026-10-27", interval:180, note:"Full panel number and suffix not loaded."},
 {id:"R-09", fact:"Philomath design flood elevation (freeboard above BFE) for new homes.", src:"PMC", basis:"code text", missing:true, note:"Not loaded. The pro forma cites Benton County's 1.5 ft, which is the County's rule, not the City's."},
 {id:"R-10", fact:"Wetland A (about 0.21 ac) and the pond are subject to the state Removal-Fill Law; 50 cu yd or more of fill or excavation needs a state permit. Two ditches are exempt. Concurrence valid five years.", src:"DSL", basis:"agency decision", checked:"2026-10-27", interval:365, note:"Turnstone's report (WDR) names it Wetland 1, 0.21 ac (8,953 SF), and finds it extends north onto tax lot 1100 and south onto tax lot 6001. It also maps the pond at 0.03 ac and Ditches A (214 ft) and B (70 ft). DSL's concurrence covers only tax lots 1200 and 1500 and a portion of right-of-way, so the parts of the wetland on lots 1100 and 6001 are not delineated by it. The six-month window to request reconsideration closed 11 Mar 2026."},
 {id:"R-11", fact:"Army Corps of Engineers jurisdiction under the Clean Water Act.", src:"DSL", basis:"agency decision", missing:true, note:"DSL letter says the Corps decides separately; no Corps determination is on file. Turnstone's JPA proposal (TSJ, 17 Jan 2025) states Corps coordination is not required for lack of federal jurisdiction, but that is the consultant's view, not a determination."},
 {id:"R-12", fact:"Short-term rental use is not a substantial change; no conditional use permit; further approvals administrative.", src:"CM", basis:"informal staff email", checked:"2026-03-02", interval:180, note:"An email, not a land use decision."},
 {id:"R-13", fact:"A lower BFE in a draft or preliminary FEMA study is not used for a site permit until the revised map is effective.", src:"FEMA", basis:"interpretation", checked:"2026-10-27", interval:180, unconfirmed:true, note:"Standard FEMA position; not yet confirmed with Philomath's floodplain administrator."},
 {id:"R-14", fact:"Site Design Review P24-08 approved with 13 conditions (C-1, C-3, C-7 to C-17) for 16 detached houses on one common lot, tax lot 12612CD01500 (1.59 ac). Decided 10 Jan 2025; final 24 Jan 2025, after the 14-day appeal window.", src:"SDR", basis:"land use decision", checked:"2026-10-29", interval:365, date:"2025-01-24", note:"Findings and City Engineer requirements are in the 8 Jan 2025 staff report (SR). No appeal is on file; the final date assumes none. The approval also approves the construction sign. Its one-year approval period (a building permit must issue, PMC 18.110.080.B; see the R-06 note) was met by permit 675-25-000155-STR on 16 Jun 2025. Under R-23 the §12(a) phase clocks start on the final date."},
 {id:"R-23", fact:"\"The land use approval\" whose final date starts the §12(a) clocks is the Type II Site Design Review approval (Recital 6), not the 25 Nov 2024 zone change.", src:"DAR", basis:"interpretation", checked:"2026-10-28", interval:180, unconfirmed:true, confirmBy:"the City planner, in writing", note:"Supported by §12 (\"phased development of SDR projects\") and the cited code section on Site Design Review approval periods. If the City instead reads it as the zone change, the Phase 1 deadline was 25 Nov 2025 and any 12-month extension ends 25 Nov 2026."},
 {id:"R-16", fact:"Under the revised BFE, finished floor sits 3 ft above existing grade. Balanced cut and fill recovers half, leaving the floor 1.5 ft above finished grade: an 18 ft ramp at 1:12.", src:"OWN", basis:"owner, from survey", checked:"2026-10-27", interval:180, note:"Under the current BFE the same method leaves about 2.5 ft (a 30 ft ramp). Confirm pad by pad with the surveyor's elevations."},
 {id:"R-17", fact:"City housing policy supports housing for older adults and people with disabilities (Policies 3.5, 3.6); directs the City to evaluate incentives and cost exemptions (3.3), lower infrastructure standards where appropriate (1.5), and fund SDC and fee waivers from construction excise tax (5.2).", src:"CP", basis:"code text", checked:"2026-10-27", interval:365, note:"Policies direct the City to evaluate; none is an adopted incentive. Ord. 871 copy is in the 602 S 15 Permits folder."},
 {id:"R-18", fact:"Baseline schedule: Site Design Review final, Phase 1 permit application, construction start, and a date for each phase gate.", src:"BASE", basis:"owner baseline", missing:true, critical:true, note:"Not issued. Condition gates are phase names until it is loaded, so no condition timeline can be checked against it."},
 {id:"R-19", fact:"Balanced on-site cut and fill in the floodplain is allowed under PMC 18.55 and is not the fill R-07 anticipates avoiding.", src:"OWN", basis:"interpretation", checked:"2026-10-27", interval:180, unconfirmed:true, confirmBy:"the floodplain administrator and DSL (near Wetland A)", note:"Owner's reading; balanced cut and fill is priced in earthwork."},
 {id:"R-20", fact:"The 602 house, kept as a community guest house, counts as one of the 16 dwellings R-03 allows, so 15 new homes plus 602 is within the cap.", src:"OWN", basis:"interpretation", checked:"2026-10-27", interval:180, unconfirmed:true, confirmBy:"the City planner"},
 {id:"R-21", fact:"An upper suite with a kitchenette and no full kitchen stays part of one detached home and is not an ADU under R-03.", src:"OWN", basis:"interpretation", checked:"2026-10-27", interval:180, unconfirmed:true, confirmBy:"the City planner"},
 {id:"R-22", fact:"Renting Cooper Ln units to nurses who work elsewhere needs no residential care licensing; providing care to Buzzwood residents might.", src:"ORS443", basis:"interpretation", checked:"2026-10-27", interval:180, unconfirmed:true, confirmBy:"counsel"},
 {id:"R-25", fact:"Building permit 675-25-000155-STR (renovation of the existing 602 house, issued 16 Jun 2025, final inspection approved 18 May 2026) is Phase 1's building permit and meets the §12(a) requirement that all Phase 1 building permits issue within one year.", src:"BP", basis:"interpretation", checked:"2026-10-29", interval:180, unconfirmed:true, confirmBy:"the City planner, in writing", note:"Owner's reading. §12(a) also requires Phase 1 improvements designed and approved by the same date (24 Jan 2026); the planner's 20 Aug 2026 email (PL) puts the pre-design meeting for site improvements still ahead. Her email treats Phase 1 as two dwellings, with a third possible as a minor modification. The decision's findings say the house will be razed; R-20 keeps it as one of the 16 (X-6)."},
 {id:"R-24", fact:"The Owner pays for all required public and private infrastructure, onsite and offsite, built to the City standards in effect at the time of construction, and pays fees and charges at the rates in effect when development or building occurs.", src:"DAR", basis:"recorded instrument", checked:"2026-10-29", interval:365, money:true, note:"Recital 7, §5, §7. Neither standards nor SDC rates (R-15) are locked; both move to the date of building."},
 {id:"R-26", fact:"Wetland work spent to date: $7,920.94. Turnstone delineation $7,345.94 (invoice 31164, $2,721.94, Sep 2024; invoice 31215, $4,624.00, paid 28 Apr 2025) and the DSL delineation review fee, $575.00 (12 Feb 2025). Committed, not yet invoiced: Turnstone's Joint Permit Application and mitigation services, $8,374.80 not-to-exceed (signed 6 Feb 2025).", src:"TSW", basis:"invoices and signed proposals", checked:"2026-10-29", interval:180, money:true, note:"The delineation proposal was $6,770.00 not-to-exceed without written approval; invoicing ran $575.94 over it (Task 2 $2,044 against $1,280; Task 3 $4,624 against $4,428), and its Task 4 agency coordination ($506) and the April and June 2025 revisit and report update are not yet invoiced. The JPA price (TSJ) excludes agency submission fees, extra agency site visits and public-comment response, all time and materials; it assumes DEQ 1200-C erosion and stormwater plans are prepared by others. The delineation spent sits inside pro forma v0.4's $125,000 entitlement-to-date allowance (01 Inputs B167); the JPA is a line on v0.4 sheet 03 (row 21)."},
 {id:"R-27", fact:"DSL removal-fill fees for a for-profit project (Type B), due as base fee at submission plus tier fee before issuance. 2026: base $2,100; Tier 2 $2,400, Tier 3 $9,000, Tier 4 $15,000. 2027: base $2,284; Tier 2 $2,914, Tier 3 $10,631, Tier 4 $16,931. Fees rise each 1 Jan through 2030.", src:"DSLF", basis:"code text", checked:"2026-10-29", interval:365, money:true, note:"Tier for Buzzwood: Tier 2 only if permanent wetland impact is 0.20 ac or less with bank credits. Wetland A is 0.21 ac. Tier 3 covers wetland impacts under 2.00 ac or non-wetland waters, not both, so filling Wetland A and the pond is Tier 4, and a project with multiple phases is also a Tier 4 trigger. On 2027 rates: about $5,198 (Tier 2), $12,915 (Tier 3) or $19,215 (Tier 4). DSL may also bill staff time beyond the tier. Mitigation credits are separate and not priced (C-5)."},
 {id:"R-28", fact:"The City is amending its Development Code. The legal work is grant-funded; the planner expects about a one-year timeline, with adoption around summer 2027.", src:"PL2", basis:"informal staff statement", checked:"2026-10-29", interval:180, note:"Her 17 Aug 2026 email (PL3) puts Cooper Ln code enforcement on hold for a year while the City proceeds with the amendments. Under R-24, standards and fees in effect when building occurs apply, so the new code may govern Phases 2 and 3. Floodplain rules are fixed at permit application (R-07)."},
 {id:"R-15", fact:"System development charges total about $31,897 per dwelling unit (Res. 2025-29, eff. 1 Jan 2026).", src:"PF", basis:"code text", checked:"2026-10-18", interval:365, money:true, note:"Res. 24-23 (2025 rates) on file is superseded."}
];

var REF_BY={}; REF.forEach(function(r){REF_BY[r.id]=r;});

/* ---------- INTAKE ---------- */
var INTAKE = [
 {date:"2026-10-29", what:"Email with the City land use planner reviewed: Phase 1 ahead of wetland mitigation (X-8, to confirm in writing); Development Code amendments under way (R-28); Public Works sidewalk timing (C-1)", stream:"Jurisdiction records", from:"Owner's files", feeds:"X-8 · R-28 · C-1 · R-25"},
 {date:"2026-10-29", what:"Pro forma v0.4: wetland block on sheet 03 (JPA $8,374.80 + DSL Type B Tier 4 fee $19,215; credits $0 pending a quote) carried in full into total cost incl. land on the STR, for-sale, Phase-1 and low-cost scenarios; Phase 1 carries all of it because the permits precede any building permit. For-sale margin on cost 10.46% → 9.93%, break-even $407.37 → $409.36/SF; Phase-1 for-sale 6.7% → 5.3%", stream:"Design, cost & correspondence", from:"Owner", feeds:"C-5 · C-8 · R-26 · R-27"},
 {date:"2026-10-29", what:"Wetland pricing from email and files: Turnstone delineation proposal, invoices 31164 and 31215 and the DSL receipt ($7,920.94 spent); signed JPA proposal ($8,374.80 not-to-exceed); DSL's 2026–2030 removal-fill fee schedule. No mitigation bank quote found", stream:"Due diligence · Wetland", from:"Owner's files and DSL", feeds:"R-26 · R-27 · C-5 · C-8"},
 {date:"2026-10-29", what:"Site Design Review decision (25 statements) and staff report (31 statements) sorted by Jev and confirmed, with building permit 675-25-000155-STR: R-14 dated, Phase 1 permit met on the owner's reading (R-25), 11 conditions added and C-1 and C-3 tied to the decision", stream:"Jurisdiction records", from:"Owner with Jev", feeds:"R-14 · R-25 · K-P1 · C-7 to C-17"},
 {date:"2026-10-29", what:"DSL wetland concurrence (18 statements) sorted by Jev and confirmed: the concurrence covers tax lots 1200 and 1500 only; the reconsideration window closed 11 Mar 2026", stream:"Jurisdiction records", from:"Owner with Jev", feeds:"R-10"},
 {date:"2026-10-29", what:"Recorded Development Agreement (37 statements) and Turnstone wetland report (15 statements) sorted by Jev and confirmed: adds R-24, Phase 2 and 3 clocks, the default-exposure note; corrects the recording date", stream:"Jurisdiction records", from:"Owner with Jev", feeds:"R-10 · R-24 · K-P2 · K-P3"},
 {date:"2026-10-28", what:"Recorded Development Agreement read in full (pp. 1–6) and its timeline reconstructed; the 'draft agreement' PDF identified as the 4 Nov 2024 Planning Commission copy, same text as recorded; code §4.2.8 read from the copy on file", stream:"Jurisdiction records", from:"Owner's files", feeds:"R-01 · R-06 · R-23 · DA timeline"},
 {date:"2026-08-20", what:"City land use planner: next step is a Public Works pre-design meeting ($1,000 application); SDC timing by phase; adding a third dwelling to Phase 1 is a minor modification staff can approve; show the existing northeast driveway on the revised site plan", stream:"Jurisdiction records", from:"City planner", feeds:"R-25"},
 {date:"2026-09-10", what:"Owner to the City planner (Cooper Ln certificate of occupancy): Public Works walked the site and recommended building the sidewalk as one project with the 602 S 15th utilities and access work", stream:"Jurisdiction records", from:"Owner", feeds:"C-1"},
 {date:"2026-08-17", what:"City planner: Cooper Ln code enforcement on hold for one year while the City proceeds with Development Code amendments", stream:"Jurisdiction records", from:"City planner", feeds:"R-28"},
 {date:"2026-08-17", what:"Improvement plan and Site Design Review exhibits (grading G, utility F, exhibit page 3) sent to the City's land use planner at her request, after the 2025 approval; toward the pre-design meeting, not a pending review", stream:"Jurisdiction records", from:"Owner", feeds:"R-25"},
 {date:"2026-10-27", what:"Appraisal and lender review: first homes appraise on 2 pending sales inside the project plus 3 closed sales outside; 233 S 15th adjusts to about $450K for 1,000 SF; both levels count as living area (ANSI Z765); kitchenette suite earns buyers no ADU income credit; construction loan sized by cost, not value", stream:"Market evidence · rung 5", from:"Research (Fannie Mae guides, comps)", feeds:"M-6 · M-7 · Step 3"},
 {date:"2026-10-27", what:"SDC options weighed: relief for senior housing (full waiver worth $578K all-in, margin 23.0%) or deferral to each closing (~$130K, margin ~13%, equity −$231K); folding SDCs into HOA dues shifts ~$230/mo to buyers", stream:"Owner program", from:"Owner / pro forma v0.3", feeds:"Path P-7 · Step 2"},
 {date:"2026-10-27", what:"Pro forma v0.3: 15 homes × 1,000 SF at $450K, vertical $180/SF, SDCs $30K per home; margin 10.5% on cost; break-even $407K; 15% needs $468K", stream:"Design, cost & correspondence", from:"Owner", feeds:"Scenarios · cost basis · K-1"},
 {date:"2026-10-27", what:"Owner redesign: two-level home, 500 SF step-free ground level under the revised BFE plus a 500 SF upper suite for guests, STR, LTR or the owner; built for about the cost of 103 Cooper", stream:"Owner program", from:"Owner", feeds:"Path P-6 · M-1"},
 {date:"2026-10-27", what:"Price research: independent value check puts a new 1,000 SF Philomath cottage at $395–475K (most likely $435K); 233 S 15th, new 1,184 SF single-story, sold $465K ($393/SF); Oregon cohousing asks run 10–25% over city medians and stall above that; no reliable senior premium outside high-cost metros", stream:"Market evidence · rung 2", from:"Research (web comps)", feeds:"M-1 · M-5 · M-2"},
 {date:"2026-10-27", what:"Owner rules the binding constraint: the BFE. Balanced cut and fill is already priced in earthwork", stream:"Owner decision", from:"Owner", feeds:"K-1 · D-1"},
 {date:"2026-10-27", what:"Owner: the City actively wants this housing type; scarcity is extreme; incentives, SDC bargaining and grants may be available", stream:"Owner program", from:"Owner", feeds:"Path P-7"},
 {date:"2026-06-23", what:"Call with the City planner (owner's summary): the STR concept is allowed for the remaining units; Phase 1 can be built ahead of the wetland mitigation; a new land use code is about a year out", stream:"Jurisdiction records", from:"Owner, from a call with the City planner", feeds:"X-8 · R-28 · R-12"},
 {date:"2026-07-16", what:"City settles deferred SDC liens on S 16th St foreclosures: recovers all principal, waives about $15K interest", stream:"Jurisdiction records", from:"Philomath News", feeds:"Path P-7"},
 {date:"2026-10-27", what:"Pivot to pursue: senior age-in-place homes; floor 1.5 ft above grade with balanced cut/fill; Cooper Ln units house nurses; 602 house becomes a community guest house", stream:"Owner program", from:"Owner", feeds:"Path P-6 · R-16 · M-5"},
 {date:"2026-10-27", what:"New single-level homes in NW Corvallis asking $355–421/SF (1,800–1,930 SF, own lots)", stream:"Market evidence · rung 5", from:"Listings (Homes.com)", feeds:"M-5"},
 {date:"2026-10-07", what:"Flood policies issued on 101 and 103 Cooper Ln; private carrier $291/yr each vs NFIP $2,295/yr; lender required coverage", stream:"Market evidence · rung 3", from:"FloodSmart (agent)", feeds:"M-4"},
 {date:"2026-10-26", what:"Revised FEMA flood study at draft stage; BFE about 2 ft lower", stream:"Due diligence · Flood & elevation", from:"Surveyor", feeds:"Path P-3"},
 {date:"2026-10-18", what:"Pro forma v0.2 with five scenarios and an independent judge sheet", stream:"Design, cost & correspondence", from:"Owner", feeds:"Constraint K-1 · M-1 to M-3"},
 {date:"2026-08-05", what:"Utility plan, Exhibit F", stream:"Design, cost & correspondence", from:"Civil", feeds:"C-4"},
 {date:"2026-05-18", what:"Final building inspection approved on permit 675-25-000155-STR (renovation of the 602 house)", stream:"Jurisdiction records", from:"City building department", feeds:"R-25"},
 {date:"2026-04-27", what:"Grading plan, Exhibit G; phasing plan, Exhibit C", stream:"Design, cost & correspondence", from:"Civil", feeds:"C-1 · C-2 · R-06"},
 {date:"2026-03-02", what:"STR use determination", stream:"Jurisdiction records", from:"City Manager", feeds:"R-12"},
 {date:"2026-01-29", what:"Issue tracker on the Development Agreement: 19 open items, 5 'blocking execution'. It reviews the 7 Oct 2024 pre-execution draft (plat-based 2-year phasing, blank phase lists), which the agreement recorded 2 Dec 2024 superseded", stream:"Jurisdiction records", from:"Owner (tracker)", feeds:"C-6 · X-1 (resolved)"},
 {date:"2025-06-06", what:"Wetland delineation report: Wetland 1 0.21 ac, pond 0.03 ac, Ditches A and B; wetland extends onto tax lots 1100 and 6001. Submitted to DSL 17 Jan 2025; a preliminary determination until DSL concurs", stream:"Due diligence · Wetland", from:"Turnstone Environmental", feeds:"R-10"},
 {date:"2025-09-11", what:"Wetland delineation concurrence WD #2025-0069", stream:"Due diligence · Wetland", from:"DSL", feeds:"R-10 · R-11"},
 {date:"2025-06-16", what:"Building permit 675-25-000155-STR issued: renovation of the existing house, $110,000, with water and sewer SDCs and a water meter; applied 22 May 2025", stream:"Jurisdiction records", from:"City building department", feeds:"R-14 · R-25 · K-P1"},
 {date:"2025-03-31", what:"Public Works conditions of approval (Cooper Lane sidewalk). Cited in the Jan 2026 tracker; original not on file", stream:"Jurisdiction records", from:"Public Works", feeds:"C-6"},
 {date:"2025-02-27", what:"Wetland permitting strategy: about 0.25 ac impact; DSL individual permit likely above 0.2 ac; mitigation bank credits", stream:"Due diligence · Wetland", from:"Turnstone Environmental", feeds:"C-5 · path P-5"},
 {date:"2025-01-10", what:"Site Design Review P24-08 approved with 13 conditions; signed Notice of Decision and 8 Jan 2025 staff report sent by the Associate Planner", stream:"Jurisdiction records", from:"City planning", feeds:"R-14 · C-1 · C-3 · C-7 to C-17"},
 {date:"2024-12-02", what:"Development Agreement recorded, 2024-649017 (executed 26 Nov 2024)", stream:"Jurisdiction records", from:"City / County", feeds:"R-01 to R-07 · C-1 to C-4"},
 {date:"2024-11-26", what:"Council approves annexation and rezoning; flooding testimony and a neighbor petition in opposition", stream:"Jurisdiction records", from:"Philomath News", feeds:"R-02"}
];

/* ---------- SCENARIOS (pro forma sheet 08) ---------- */
var SCEN = [
 {name:"Senior two-level, 15 homes (v0.4 base)", margin:0.099, tests:"1 of 3", testsDetail:"Returns ✗ · Market ✓ · Capital ✗", bind:"15% needs $471K per home; peak equity $2.05M", src:"PF4"},
 {name:"+ lower BFE", margin:0.202, margin2:0.248, derived:true, bind:"$25K–35K per home flood premium removed"},
 {name:"+ SDCs deferred to closing", margin:0.125, derived:true, bind:"$448K paid from sale proceeds; equity −$231K"},
 {name:"+ full SDC waiver", margin:0.223, derived:true, bind:"$30K per home waived; worth $578K all-in"},
 {name:"Lower BFE + SDC waiver", margin:0.352, margin2:0.411, derived:true, bind:"15% needs $367–383K per home"},
 {name:"v0.2 program, 16 homes (superseded)", margin:-0.178, tests:"1 of 3", bind:"Mixed 400–1,000 SF at $360–400/SF"},
 {name:"STR hold, 16 (v0.2)", margin:-0.393, tests:"0 of 3", bind:"Takeout coverage 0.66x"}
];

/* ---------- CONSTRAINT + RELIEF PATHS ---------- */
var CONSTRAINT = {name:"Cost against comp-supported price",
 text:"The v0.4 base clears 9.9% on cost against a 15% floor. Break-even is $409K per home; 15% needs $471K. The independent value check puts these homes at $395–475K, most likely $435K. The floodplain and the wetland feed this constraint through cost and buildable area; on their own they do not stop the project.",
 alt:{"Floodplain elevation":"The effective BFE sets every lowest floor. On the v0.4 program, solving it is worth $484,000–$677,000 on 15 homes ($25,000–35,000 per home plus soft cost, contingency and finance): margin moves from 9.9% to 20.2–24.8%, and to 35–41% with an SDC waiver. The question now is time and cost to solve it: the revised map's path to effective against the Phase 1 clock. Balanced cut and fill is already priced in earthwork.",
      "Wetland fill and mitigation":"About 0.21 ac of jurisdictional wetland plus the pond. Filling them needs a DSL permit and likely an individual permit, with mitigation bank credits. Pro forma v0.4 carries $27,590 forward (JPA $8,375 + DSL Tier 4 fee $19,215, R-26, R-27); the $7,921 spent is inside the entitlement allowance. Credits are not priced."}};

var PATHS = [
 {id:"P-1", name:"Phase 1 street-side, 5 homes on existing services", by:"City (permits; phase boundaries by Public Works Director)", wait:"City confirmation that Phase 1 met §12(a) (R-25)", status:"Evaluating", via:"Low", note:"Pro forma v0.4: for-sale 5.3% on cost, STR hold −34.8%, with the whole wetland permit cost ($27,590) carried in Phase 1, since the permits must come before any building permit (C-8). Cash need exceeds self-finance."},
 {id:"P-2", name:"Amend the agreement: two lots with ADUs", by:"City Council (amendment), then partition", wait:"Council hearing; R-03 precludes ADUs and requires one lot", status:"Identified", note:"Pro forma scenario 06d."},
 {id:"P-3", name:"Wait for the revised flood map to lower the BFE", by:"FEMA, then City", wait:"Preliminary maps, 90-day appeal, final determination, 6-month compliance period", status:"Identified", relies:["R-13"], note:"Removes the $25K–$35K per-home flood premium carried in vertical cost. On v0.4: break-even falls to $361–375K per home, and 15% needs $415–431K. Counts only if building permits are applied for after the new map is effective (R-07)."},
 {id:"P-4", name:"STR hold with the wellness program", by:"City (administrative per R-12)", wait:"ADR evidence", status:"Evaluating", via:"Low", note:"Needs $348 blended ADR; premium Oregon comps run $269 to $295."},
 {id:"P-6", name:"Senior age-in-place homes: two-level, step-free ground floor plus upper suite", by:"City (permits; detached homes already allowed by R-03); FEMA for the lower BFE", wait:"Revised map effective; balanced cut/fill accepted by the City; priced reservations", status:"Pursuing", relies:["R-13","R-19","R-20","R-21","R-22","R-23"], timeline:{needs:"E-1", before:"K-P1"}, note:"Owner, 27 Oct 2026: 15 homes × 1,000 SF — 500 SF ground-level living at 1.5 ft above grade (18 ft ramp) plus a 500 SF upper suite the owner can use, rent long term or run as STR. Built for about the cost of 103 Cooper ($180/SF). Priced at $450K; v0.4 base 9.9% on cost. Cooper Ln units house nurses; the 602 house becomes a community guest house. The upper suite must stay a guest suite (no second kitchen) unless the City amends R-03."},
 {id:"P-7", name:"Public partnership: SDC relief, lighter standards, state homeownership funds", by:"City Council (waivers, standards, an amendment to the recorded agreement); OHCS (LIFT Homeownership, HDIP)", wait:"A written ask to the City; OHCS income rules", status:"Evaluating", note:"SDCs on v0.4 are about $30K per home, $448K total. Full waiver for senior housing: worth $578K all-in, margin 9.9% → 22.3%. Fallback, deferral to each closing: worth about $130K, margin about 12.5%, peak equity −$231K; Philomath has done deferral with liens before. Folding SDCs into HOA dues shifts about $230/month to each buyer, which buyers and appraisers treat like debt — expect close to $30K of price pressure. State funds carry income restrictions."},
 {id:"P-5", name:"Fill and LOMR-F to cut elevation", by:"FEMA, City, DSL", wait:"FEMA no-net-loss standards; DSL permit", status:"Blocked", note:"R-07 anticipates building without fill; re-check FEMA's position."}
];

/* ---------- CONDITIONS (recorded DA and draft v2) ---------- */
var CONDITIONS = [
 {id:"C-1", text:"Five-foot sidewalk on the S 15th St frontage with internal walkway and offsite extension north to a new ramp aligned with the Timothy St ramp", src:"DA §12, §14(c); SDR P24-08 Cond. 8", gate:"Phase 1 certificate of occupancy", status:"Accepted",
  links:{owner:{who:"Owner",date:"2024-11-26",done:true}, budget:{who:"Walkway incl. frontage, $24,448 (PF sheet 03)",date:"2026-10-18",done:true}, design:{who:"Grading plan Exhibit G; final engineering not approved. Public Works (G. Black, Sep 2026) recommends building the sidewalk as one project with the 602 utilities and access work",date:null}, permit:{who:"Right-of-way permit",missing:true}, closure:{who:"City acceptance",missing:true}}},
 {id:"C-2", text:"Fire lane, turnaround and emergency access to City standards and the Oregon Fire Code", src:"DA §11(b), §12(c)", gate:"Each phase", status:"Accepted",
  links:{owner:{who:"Owner",date:"2024-11-26",done:true}, budget:{who:"Asphalt incl. fire turnaround, $34,430 (PF sheet 03)",date:"2026-10-18",done:true}, design:{who:"Phasing plan Exhibit C shows turnaround",date:"2026-04-26",done:true}, permit:{who:"Fire marshal review",missing:true}, closure:{who:"Fire marshal sign-off",missing:true}}},
 {id:"C-3", text:"Street trees in a planting strip behind the sidewalk along S 15th St: two existing trees kept, one new tree of at least 2.5-inch caliper at the site plan location", src:"DA §11(c); SDR P24-08 Cond. 7", gate:"Phase 1", status:"Accepted",
  links:{owner:{who:"Owner",date:"2024-11-26",done:true}, budget:{who:"Inside landscape allowance, not itemized",date:null}, design:{who:"Not shown on exhibits",missing:true}, permit:{who:"Right-of-way permit",missing:true}, closure:{who:"City acceptance",missing:true}}},
 {id:"C-4", text:"Engineering for the whole development approved by the City Engineer and Public Works Director before Phase 1", src:"DA §11(d), §14(a)", gate:"Phase 1 permits", status:"Accepted",
  links:{owner:{who:"Owner with civil engineer",date:"2024-11-26",done:true}, budget:{who:"A/E allowance 8% of hard cost (PF)",date:"2026-10-18",done:true}, design:{who:"Utility plan Exhibit F",date:"2026-08-05",done:true}, permit:{who:"Not a permit item",date:"2024-11-26",done:true,na:true}, closure:{who:"City Engineer approval letter",missing:true}}},
 {id:"C-5", text:"Fill Wetland A and mitigate off-site with bank credits", src:"Turnstone strategy; DSL (not a condition of the recorded DA)", gate:"Grading", status:"Proposed",
  links:{owner:{who:"Owner with wetland consultant",date:"2025-02-27",done:true}, budget:{who:"Mitigation credits not priced: no quote from the Mary's River Mitigation Bank for 0.24 ac. Pro forma v0.4 carries the credit line (03 row 23) at $0 until a quote is entered",missing:true}, design:{who:"Site layout avoiding or filling the wetland",missing:true}, permit:{who:"DSL removal-fill permit; Corps if jurisdictional",missing:true}, closure:{who:"Credits purchased; permit issued",missing:true}}},
 {id:"C-6", text:"Agreement for a future sidewalk on Cooper Lane when improved", src:"Public Works, 31 Mar 2025 (cited in v2 tracker)", gate:"None stated", status:"Contested",
  links:{owner:{who:"Owner disputes it",date:"2026-01-29",done:true}, budget:{who:"No cost cap, no trigger",missing:true}, design:{who:"ROW width unknown",missing:true}, permit:{who:"–",missing:true}, closure:{who:"Withdrawn or defined in v2",missing:true}}},
 {id:"C-7", text:"Each phase self-sufficient for utilities and infrastructure", src:"SDR P24-08 Cond. 1; DA §12; PWDS 1.8.a", gate:"Each phase", status:"Accepted",
  links:{owner:{who:"Owner with civil engineer",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Phased utility plan; Phase 1 on two services, Phases 2–3 on a master meter (SR p.16)",date:null}, permit:{who:"Public Works construction drawings",missing:true}, closure:{who:"Public Works acceptance of each phase",missing:true}}},
 {id:"C-8", text:"State and/or federal wetland or mitigation permits approved before any building permit", src:"SDR P24-08 Cond. 2", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner with wetland consultant",date:"2025-01-24",done:true}, budget:{who:"Pro forma v0.4, 03 rows 21–22: JPA $8,374.80 not-to-exceed (R-26) + DSL fee $19,215 at Type B Tier 4, 2027 rates (R-27); credits under C-5",date:"2026-10-29",done:true}, design:{who:"Site layout avoiding or filling Wetland A",missing:true}, permit:{who:"DSL removal-fill permit; Corps if jurisdictional (R-11)",missing:true}, closure:{who:"Permits approved, or the City's written view that none is needed",missing:true}}},
 {id:"C-9", text:"A floodplain permit for each structure; each built without fill (no LOMR or CLOMR); a site-wide no-rise report with the building permits; flow-through vents shown per PMC 18.55.150(B)(1)", src:"SDR P24-08 Cond. 3", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner with surveyor",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3; no-rise report not itemized",date:null}, design:{who:"Elevated floors and vents per structure",date:null}, permit:{who:"Floodplain development permit per structure (R-08)",missing:true}, closure:{who:"Floodplain permits issued before each building permit",missing:true}}},
 {id:"C-10", text:"One covered, dedicated bicycle parking space per dwelling, lit, on an updated site plan", src:"SDR P24-08 Cond. 4", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Updated site plan",missing:true}, permit:{who:"Shown with the building permit",date:null}, closure:{who:"Installed and inspected",missing:true}}},
 {id:"C-11", text:"Scalable elevations showing eaves projecting more than six inches and window trim wider than four inches", src:"SDR P24-08 Cond. 5", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner with designer",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Permit set elevations",date:null}, permit:{who:"Building permit review",date:null}, closure:{who:"Approved permit drawings",missing:true}}},
 {id:"C-12", text:"Landscape plan: retained trees, drought-tolerant plants or irrigation (location and type), native-plant documentation, buffer screening heights", src:"SDR P24-08 Cond. 6; SR p.11–13", gate:"Certificate of occupancy (each phase)", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Inside landscape allowance, not itemized",date:null}, design:{who:"Landscape plan",missing:true}, permit:{who:"Submitted with the building permit",date:null}, closure:{who:"Landscaping complete for the phase, or a performance guarantee",missing:true}}},
 {id:"C-13", text:"Internal pedestrian path connected to the 15th St sidewalk, meeting ADA width and grade; walkway from the north fire turnaround recommended", src:"SDR P24-08 Cond. 9", gate:"Phase 1", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Walkway incl. frontage, $24,448 (PF sheet 03, with C-1)",date:"2026-10-18",done:true}, design:{who:"Final site construction drawings",missing:true}, permit:{who:"Building permit review",date:null}, closure:{who:"City and Building Official acceptance",missing:true}}},
 {id:"C-14", text:"Downcast lighting for the fire lane, parking, bicycle parking and paths, shown on a revised site plan", src:"SDR P24-08 Cond. 10", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Revised site plan",missing:true}, permit:{who:"City staff review of fixture styles",date:null}, closure:{who:"Installed",missing:true}}},
 {id:"C-15", text:"At least one ADA parking space, dimensioned and located on an updated site drawing", src:"SDR P24-08 Cond. 11", gate:"Building permits", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Inside asphalt and striping",date:null}, design:{who:"Updated site drawing",missing:true}, permit:{who:"Building permit review",date:null}, closure:{who:"Striped and signed",missing:true}}},
 {id:"C-16", text:"Updated utility drawing for the revised layout with storm drainage and detention to PWDS, plus Benton County MS4 water quality", src:"SDR P24-08 Cond. 12; SR p.18–19", gate:"Phase 1 permits", status:"Accepted",
  links:{owner:{who:"Owner with civil engineer",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Utility plan Exhibit F sent 17 Aug 2026",date:"2026-08-17",done:true}, permit:{who:"Public Works construction drawings, after the pre-design meeting",missing:true}, closure:{who:"Public Works approval; detention easement recorded",missing:true}}},
 {id:"C-17", text:"A new fire hydrant at the location next to the driveway entrance", src:"SDR P24-08 Cond. 13", gate:"Phase 1", status:"Accepted",
  links:{owner:{who:"Owner",date:"2025-01-24",done:true}, budget:{who:"Not yet checked against pro forma v0.3",date:null}, design:{who:"Utility plan Exhibit F",date:"2026-08-17",done:true}, permit:{who:"Public Works construction drawings",missing:true}, closure:{who:"Fire district and Public Works acceptance",missing:true}}}
];

/* Baseline schedule (R-18): milestone name -> date. Empty until the owner issues it; each condition's gate is looked up here. */
var BASELINE = null;

/* ---------- CLOCKS ---------- */
var CLOCKS = [
 {id:"K-P1", what:"Phase 1: all building permits issued", date:(REF_BY["R-14"].date?addYears(REF_BY["R-14"].date,1):null), unknown:!REF_BY["R-14"].date, owner:"Owner with City", basis:"DA §12(a) · R-06 · R-23 · R-25", closed:true, why:"Met on the owner's reading (R-25): building permit 675-25-000155-STR issued 16 Jun 2025, before 24 Jan 2026. The improvements half of §12(a) is not shown met; get both confirmed in writing."},
 {id:"K-P2", what:"Phase 2: all improvements complete", date:(REF_BY["R-14"].date?addYears(REF_BY["R-14"].date,3):null), unknown:!REF_BY["R-14"].date, notStarted:!REF_BY["R-14"].date, owner:"Owner with City", basis:"DA §12(a) · R-06 · R-23", why:"Runs 3 years from the Site Design Review becoming final, 24 Jan 2025 (R-14, R-23)."},
 {id:"K-P3", what:"All phases complete, or the land use approval expires", date:(REF_BY["R-14"].date?addYears(REF_BY["R-14"].date,5):null), unknown:!REF_BY["R-14"].date, notStarted:!REF_BY["R-14"].date, owner:"Owner with City", basis:"DA §12, §12(a) · R-06 · R-23", why:"Runs 5 years from the Site Design Review becoming final, 24 Jan 2025 (R-14, R-23)."},
 {what:"Written confirmation from the City planner: Phase 1 met §12(a), permit and improvements (R-25); the clocks run from the Site Design Review (R-23); and whether Phase 1 may be built ahead of the wetland permits (X-8)", date:"2026-11-25", owner:"Owner with City planner", basis:"R-25 · R-23 · X-8 · K-B1", why:"One written ask, before K-B1's date."},
 {what:"Site Design Review approval period: a building permit within one year", date:addYears("2025-01-10",1), owner:"Owner", basis:"PMC 18.110.080.B · R-14", closed:true, why:"Met: building permit 675-25-000155-STR issued 16 Jun 2025."},
 {what:"LUBA appeal of the Site Design Review decision (14 days)", date:addDays("2025-01-10",14), owner:"–", basis:"SDR P24-08", closed:true, why:"Closed; no appeal on file."},
 {id:"K-B1", what:"Only if the zone change started the clock (R-23 read the other way): last day of a 12-month Phase 1 extension", date:addYears("2024-11-25",2), owner:"Owner with City planner", basis:"DA §12(a)", why:"Phase 1 would have been due 25 Nov 2025. Rule this reading out in writing with the City before this date."},
 {what:"Re-check FEMA's position on fill (R-07)", date:addYears("2024-11-26",1), owner:"Owner's rep", basis:"R-07", recheck:"R-07"},
 {what:"Re-check STR determination with City staff", date:addDays("2026-03-02",180), owner:"Owner's rep", basis:"R-12", recheck:"R-12"},
 {what:"FEMA 90-day appeal on the revised flood study", date:null, notStarted:true, owner:"Surveyor to track", basis:"E-1", why:"Not started. It opens after the second published notice of the proposed flood hazard determination."},
 {what:"DSL wetland concurrence expires", date:addYears("2025-09-11",5), owner:"Owner", basis:"R-10"},
 {what:"Request DSL reconsideration of WD 2025-0069", date:"2026-03-11", owner:"Owner", basis:"R-10", closed:true, why:"Lapsed: six months from the 11 Sep 2025 letter; no request on file."},
 {what:"Development Agreement term ends", date:addYears("2024-11-26",15), owner:"Owner", basis:"DA §1 · R-01"},
 {what:"Proof of recording to the City (DA §17)", date:addDays("2024-11-25",10), owner:"Owner", basis:"DA §17", closed:true, why:"Met: recorded 2 Dec 2024."},
 {what:"LUBA appeal of annexation and rezoning", date:addDays("2024-11-25",21), owner:"–", basis:"ORS 197.830(9)", closed:true, why:"Closed, assuming the decision became final 25 Nov 2024 with no local appeal."}
];

/* ---------- EXTERNAL PROCESSES (Time) ---------- */
/* E-1: Draft -> Preliminary -> 90-day appeal -> final determination -> 6-month compliance -> effective. Effective is computed once Preliminary is dated. */
var EXTERNAL=[
 {id:"E-1", name:"FEMA revised flood map (lower BFE)", stage:"Draft", preliminary:null, src:"SURV"}
];

/* ---------- DOCUMENTS IN CONFLICT ---------- */
/* Each row is a document on file that a pick (J, confirmed by a person) found to contradict a Reference fact or another document. The rule reads these; it writes no finding by hand. */
var CONFLICTS=[
 {id:"X-1", doc:"Development Agreement draft v2 with City comments (7 Oct 2024)", against:"R-01", sev:"crit", t:"Two development agreements on file", why:"The recorded 2024 agreement governs.", owner:"Owner with land use counsel", src:"TRK", resolved:"28 Oct 2026: the v2 file is the 7 Oct 2024 pre-execution draft, superseded by the agreement recorded 2 Dec 2024. No later draft is on file."},
 {id:"X-2", doc:"Pro forma v0.2 scenario 06d (two lots + ADUs)", against:"R-03", sev:"warn", t:"Model scenario 06d (two lots + ADUs) is not allowed by R-03", why:"The recorded agreement precludes ADUs and requires one common lot. It needs a Council amendment first.", owner:"Owner", src:"PF", resolved:null},
 {id:"X-3", doc:"Turnstone wetland strategy (27 Feb 2025): fill about 0.25 ac with bank credits (C-5)", against:"R-07", sev:"warn", t:"The wetland strategy fills; the recorded agreement anticipates building without fill", why:"The Site Design Review (10 Jan 2025) went ahead without settling it, and its Condition 3 (C-9) bars fill for each structure; Condition 2 (C-8) needs the wetland permits before building permits.", owner:"Owner with wetland consultant", src:"SDR", resolved:null},
 {id:"X-5", doc:"Site Design Review P24-08 Condition 3: each structure built without the use of fill (C-9)", against:"R-19", sev:"warn", t:"The approval bars fill for each structure; the owner's reading allows balanced cut and fill", why:"Whether balanced on-site cut and fill counts as 'fill' under Condition 3 is for the floodplain administrator to say in writing.", owner:"Owner with floodplain administrator", src:"SDR", resolved:null},
 {id:"X-6", doc:"Site Design Review P24-08 findings: the existing house and two outbuildings will be razed", against:"R-20", sev:"warn", t:"The approval razes the 602 house; the record keeps it as one of the 16", why:"Permit 675-25-000155-STR renovated the house instead (final inspection 18 May 2026). Show it kept on the revised phase plan the planner asked for, and confirm whether that needs a minor modification.", owner:"Owner with City planner", src:"SDR", resolved:null},
 {id:"X-8", doc:"Owner's summary of a call with the City planner, 23 Jun 2026: Phase 1 can be built ahead of the wetland mitigation", against:"C-8", sev:"warn", t:"The planner reportedly allows Phase 1 before the wetland mitigation; Condition 2 requires the wetland permits before any building permit", why:"A phone call summarized by the owner, not a written determination. If the City confirms it in writing, Phase 1 need not carry the wetland permit cost (pro forma v0.4 sheet 03, C21:C23). Ask with R-23 and R-25 before 25 Nov 2026.", owner:"Owner with City planner", src:"PL2", resolved:null},
 {id:"X-7", doc:"Site Design Review P24-08 findings and staff report: Council approved annexation and the R-3 rezone on 9 Dec 2024", against:"R-02", sev:"warn", t:"Two dates for the Council's annexation and rezone approval", why:"The recorded agreement (§19) gives 25 Nov 2024; the decision gives 9 Dec 2024. The date moves the zone-change appeal window and the K-B1 reading. Check the Council minutes or ordinance.", owner:"Owner's rep", src:"SDR", resolved:null},
 {id:"X-4", doc:"Fannie Mae accessory-unit income guidance", against:"R-21", sev:"warn", t:"Zoning wants the suite without cooking; lenders credit suite rent only with cooking", why:"Fannie Mae counts accessory-unit rent toward buyer income (up to 30%) only when the unit has cooking facilities, and lenders generally exclude STR income on a primary residence. Price each building as one home; the suite's income is a buyer benefit after closing, not a qualifying aid.", owner:"Owner", src:"FNMA", resolved:null}
];

/* ---------- ADVISORY NOTES (A) ---------- */
/* Observations no Standard check produces. Labeled advisory, shown apart from findings, never counted as one. */
var ADVISORY=[
 {t:"Missing a phase deadline has a price set in the recorded agreement", why:"After notice and 30 days to cure, the City may finish the incomplete phase's improvements and lien the property for the city engineer's estimate plus 25% (§9.a), and the agreement already stands as an irrevocable petition for a local improvement district (Recital 9, §18). K-P1 to K-P3 carry this exposure.", src:"DAR"},
 {t:"The flood premium is buried in vertical $/SF, not carried as its own line", why:"Vertical cost was rebased from Cooper Ln actuals, which include the +5 ft flood foundation. A lower BFE removes an estimated $25,000–35,000 per home, but JobTread 2505/2506 has no final actuals that isolate it. Tag the elevation-driven lines (tall stem walls, exterior stairs, flood vents, undercroft) to fix the number.", src:"PF"},
 {t:"A construction lender's cost review will test $180/SF", why:"The model's judge sheet put the v0.2 cost 36% higher, mostly on vertical cost. Bring Cooper 103 JobTread actuals and expect the bank to want a GC fee line.", src:"PF3"},
 {t:"Presale input 30%; Fannie Mae new-project approval needs 50%", why:"Fannie Mae exempts PUD units and detached condos from project review. Structure accordingly and the 50% rule falls away; confirm FHA rules with a lender.", src:"PF3"},
 {t:"The first two or three closings set the comps for every later home", why:"With no settled sales inside the project, the appraiser may use two pending sales inside it plus three settled sales outside. Concessions on early sales get deducted. Hold price and avoid seller credits on the first homes.", src:"FNMA"},
 {t:"Detached condo or PUD lots: not yet decided", why:"It decides the lot adjustment an appraiser makes against comps on their own lots, FHA eligibility, and how SDC deferral liens attach. Fannie Mae waives project review for both.", src:"FNMA"}
];

var ASSUMPTIONS=[
 {id:"M-1", name:"Sale price $450K per 1,000 SF home ($450/SF)", impact:"High", held:[2,5], have:"Independent value check $395–475K, most likely $435K; 233 S 15th, new 1,184 SF single-story, sold $465K ($393/SF) Aug 2026; Cooper appraisal $867K less 2 × $35K ground level ÷ 1,750 SF = $455/SF; Oregon cohousing asks $303–449/SF", missing:"Presales; any closed sale of new cottage-cluster product in Philomath", next:"Refundable reservations at stated tiers ($435K / $475K / $515K)", cost:"Low · 6–8 weeks"},
 {id:"M-2", name:"Absorption: 8 of 16 reserved before start", impact:"High", held:[5], have:"Model sells 1 home/month. Cohousing resales take 114–190+ days; comparable local new builds 128–554 days; Corvallis averages 98 days on market. At 2 homes per 3 months, v0.3 margin falls about 2 points", missing:"Any buyer action on this product", next:"Count reservations from the 55+ list (Constraint 3); Fannie Mae needs 50% presold", cost:"$0 · 6–8 weeks"},
 {id:"M-3", name:"STR blended ADR $348 (STR hold; not pursued)", impact:"Medium", held:[5], have:"Premium Oregon comps $269–295 (12-month averages)", missing:"Any achieved rate at this site", next:"Run 101/103 Cooper Ln as STR for one season", cost:"Low · 3–6 months"},
 {id:"M-5", name:"Senior premium over the local market (base carries none)", impact:"Medium", held:[5], have:"National senior cohousing asks median ~$517/SF, but the high end is Bay Area and Boston only; Oregon cohousing sells near local small-home $/SF; resales slow and cut 2–8%", missing:"Any evidence of a premium in Philomath. The pivot supports demand and absorption, not price", next:"The $475K and $515K reservation tiers test it", cost:"Low · 6–8 weeks"},
 {id:"M-6", name:"Appraised value supports $450K per home", impact:"High", held:[5], have:"Outside comps: 233 S 15th, new 1,184 SF, sold $465K; at a $50–100/SF size adjustment it indicates about $450K. Both levels count as living area under ANSI Z765, unlike Cooper Ln's undercroft. Likely appraisal $435–450K", missing:"An appraiser's view of this product: the condo lot, flood zone, HOA dues and the two-level layout can each take $15–25K off", next:"Appraisal consultation with a Benton County residential appraiser, with plans and 233 S 15th", cost:"Low · 1–2 weeks"},
 {id:"M-7", name:"Construction lender sizes the loan at 65% of cost", impact:"High", held:[], have:"At a 20% absorption discount on $6.75M retail, 70% of value is about $3.8M, above the $3.0M cost-based loan, so cost binds. Land is usually credited at appraised value, not the $475K basis", missing:"Any lender's term sheet: absorption discount, presale requirement, land credit, cost review of $180/SF", next:"Request a term sheet from one community bank; bring Cooper 103 JobTread actuals", cost:"$0 · 2–3 weeks"},
 {id:"M-4", name:"Buyer flood insurance cost", impact:"Medium", held:[3], have:"Private carrier $291/yr per unit on 101 and 103 Cooper Ln, policies issued 7 Oct 2026; NFIP $2,295/yr for similar coverage; the lender would not waive flood insurance", missing:"A quote on a Buzzwood pad; whether buyers' lenders accept the private carrier", next:"Ask FloodSmart to quote one Buzzwood pad at the current BFE and 2 ft lower", cost:"$0 · 1 week"}
];

/* ---------- DECISIONS ---------- */
var DECISIONS=[
 {id:"D-1", q:"Which constraint binds?", ref:"K-1", proposal:"Advisory proposal: cost against comp-supported price.",
  forA:["No scenario in the 18 Oct model clears its returns test.","Break-even is $455/SF; the 2026 comp ceiling is $450/SF."],
  againstA:["The model carries $0 elevation cost, so the floodplain may be understated.","Pro forma v0.4 carries wetland permitting ($27,590, R-26, R-27), but mitigation credits are still $0 pending a quote, so the wetland is understated."],
  options:[{label:"Cost against price",ruling:true},{label:"Floodplain elevation",ruling:true},{label:"Wetland fill and mitigation",ruling:true},{label:"Hold for more evidence",ruling:false}]},
 {id:"D-2", q:"Which product does the record pursue?", ref:"P-1 to P-5", needs:"D-1", proposal:"Advisory proposal: get the City's written confirmation that Phase 1 met §12(a) (R-25) before choosing; it decides how much of Phase 1 is still open.",
  forA:["16 detached homes is the only product the recorded agreement allows.","Phase 1 on existing services has the lowest site burden per dollar of approval risk."],
  againstA:["Two lots with ADUs needs a Council amendment (R-03).","Every option fails the returns test on today's numbers.","Senior pricing is untested; v0.4 needs $471K per home for 15% before any relief, at the upper end of the $395–475K value check."],
  options:[{label:"16 homes per the agreement",ruling:true},{label:"Senior age-in-place, 15 homes + guest house",ruling:true},{label:"Phase 1, 5 homes",ruling:true},{label:"Seek amendment: 2 lots + ADUs",ruling:true},{label:"Hold the land; no build",ruling:true}]},
 {id:"D-4", q:"Travel the pathway to feasibility?", ref:"Steps 1–3", proposal:"Advisory proposal: start Step 1's date requests and Step 3's reservation list now; they are cheap and decide whether Step 2 is worth negotiating.",
  forA:["On v0.4, solving the BFE alone is worth $484K–677K and clears 20%.","With the BFE and SDC steps, the 20% price falls to $383–438K per home, inside the $395–475K value check."],
  againstA:["Each step depends on someone else: FEMA, the City, buyers.","Holding cost runs while the map moves."],
  options:[{label:"Pursue all three steps",ruling:true},{label:"Start Steps 1 and 3 only",ruling:true},{label:"Hold",ruling:true},{label:"Walk away",ruling:true}]},
 {id:"D-3", q:"Run the next market test?", ref:"M-1 to M-4", proposal:"Advisory proposal: start tracking showings now; extend the flood quote to one Buzzwood pad.",
  forA:["Every high-impact assumption sits at rung 5 or below.","Flood cost is already in hand from Cooper Ln at $291/yr; a pad quote costs nothing."],
  againstA:["Showings at the Cooper Ln units need a short marketing push to mean anything.","If buyers' lenders reject the private carrier, the NFIP rate of $2,295/yr applies."],
  options:[{label:"Run both tests",ruling:true},{label:"Pad flood quote only",ruling:true},{label:"Not now",ruling:true}]}
];

var PATHWAY=[
 {id:"Today", name:"v0.4 base", lo:491, hi:491, value:"–", time:"–", cost:"–", gate:"–", actions:[]},
 {id:"Constraint 1 · remove", con:"The flood elevation premium built into every home", name:"Solve the BFE", lo:433, hi:449, value:"$484K–677K of cost removed; margin 20.2–24.8% at $450K", time:"Revised map is at Draft; Preliminary, then a 90-day appeal and a 6-month compliance period", cost:"Holding cost while waiting; surveyor and planner time", gate:"New map effective before Phase 1 permits are applied for (R-06, R-07)",
  actions:["Get FEMA's expected Preliminary date from the surveyor or Oregon DLCD's NFIP coordinator","Confirm with the City whether the 22 May 2025 permit application for the 602 house fixed the flood rules for Phase 1 (§11(d)(i), R-25)","If the dates don't fit, request the City Manager's 12-month phase extension","Confirm balanced cut and fill with the floodplain administrator and DSL"]},
 {id:"Constraint 2 · reduce", con:"System development charges of about $448K on 15 homes ($30K each)", name:"Win SDC relief", lo:383, hi:438, value:"Waiver: $578K all-in. Deferral to closing: about $130K, and $231K less peak equity", time:"One City Council cycle; a DA amendment if terms change", cost:"Owner time; likely a senior-housing covenant in the CC&Rs; possible concessions on open v2 items", gate:"Written City commitment to waive, reduce or defer SDCs",
  actions:["Send a written ask tying the senior product to Comp Plan Policies 3.5, 3.6 and 5.2","Ask for a full waiver, with deferral to each closing as the fallback in the same letter","Put the Cooper Ln sidewalk dispute and master-meter treatment on the table as trades","Keep the base case at full SDCs until the City commits in writing"]},
 {id:"Constraint 3 · reduce", con:"An unproven sale price: no buyer has acted on this product", name:"Prove the price", lo:383, hi:438, value:"Turns $450K into evidence; tests whether any senior premium exists", time:"6–8 weeks", cost:"Low: marketing and deposit handling", gate:"8 of 15 homes reserved at about $450K",
  actions:["Open refundable reservations at stated tiers ($435K / $475K / $515K), quoting the full price up front","Count deposits by tier, not survey interest; log unprompted inquiries separately","Structure as fee-simple PUD lots or detached site condos so Fannie Mae project review and FHA approval stay off the path","Keep HOA dues lean; every $100/month costs a buyer about $15K of loan","Get an appraisal consultation on the plans before setting the reservation prices (M-6)","Request a construction term sheet: absorption discount, presale requirement, land credit (M-7)"]}
];

var NH=15;

var COSTSTACK=[
 {h:"Revenue"},
 {l:"Gross sales",t:6750000,b:"15 homes × $450,000 ($450/SF on 1,000 SF)"},
 {l:"Selling costs",t:-405000,b:"6% of price: commission, title, escrow, concessions"},
 {l:"Marketing and sales office",t:-101250,b:"1.5% of gross sales"},
 {l:"Net sales proceeds",t:6243750,sum:true},
 {h:"Cost"},
 {l:"Vertical construction",t:2794500,b:"$180/SF × 1.035 escalation × 15,000 SF; flood foundation included"},
 {l:"Site improvements",t:588326,b:"Sitework r3 $572,140 plus storm SDC on shared paving $16,186"},
 {l:"Per-home SDCs: water, sewer, transportation, parks, roof storm",t:455318,b:"$29,860 per home on individual meters plus roof storm at $0.989/SF"},
 {l:"Hard cost subtotal",t:3838143,sum:true},
 {l:"Lump SDCs at master meter",t:0,b:"Replaced by per-home SDCs in v0.3"},
 {l:"Soft costs: design, engineering, permits, insurance",t:353109,b:"9.2% of hard cost (8% A/E and permits + 1.2% builder's risk and GL)"},
 {l:"Condo plat, CC&Rs, HOA, project approval",t:45000,b:"Allowance"},
 {l:"Construction contingency",t:383814,b:"10% of hard cost"},
 {l:"GC / developer fee",t:0,b:"Excluded by the owner's base-case rule (sponsor pay is a layer above)"},
 {l:"Cost before finance",t:4620067,sum:true},
 {l:"Construction interest",t:336529,b:"65% loan-to-cost at 8.3%, 16-month build at 55% average balance, plus half of a 15-month sell-out"},
 {l:"Loan fees",t:45046,b:"1.5% of the loan"},
 {l:"HOA and taxes on unsold homes",t:50625,b:"$450/month per home on half the inventory through sell-out"},
 {l:"Cost including finance",t:5052266,sum:true},
 {l:"Land basis and entitlement to date",t:600000,b:"$475,000 inherited basis + $125,000 entitlement, design and fees"},
 {l:"Wetland permitting",t:27590,b:"JPA $8,374.80 + DSL Type B Tier 4 fee $19,215; mitigation credits not priced (v0.4 sheet 03, R-26, R-27)"},
 {l:"Total cost",t:5679856,sum:true},
 {h:"Result"},
 {l:"Profit (net proceeds less total cost)",t:563894,sum:true,b:"9.9% on cost; 15% needs $471K per home, 20% needs $491K"}
];

var UNITPROG=[["D · two-level",15,1000,186.3,450,450000]];

var RATES=[["Vertical, two-level home","$180/SF (+3.5% = $186)","Owner: Cooper 103 enclosed cost, both levels finished"],["Elevation premium","$0 separate","Inside vertical $/SF (Cooper Ln +5 ft)"],["SDCs","$30K per home","Individual meters, Res. 2025-29; owner figure"],["Escalation to 2027","3.5%","Mortenson Portland +3.2% (Q2 2026)"],["Design, engineering, permits","8% of hard","Concept level"],["Builder's risk + GL","1.2% of hard","Allowance"],["Contingency","10% of hard","Concept level; also applied to SDCs"],["Construction loan","65% LTC, 8.3%","Portland community banks, Oct 2026"],["Loan fees","1.5%","Origination + closing"],["Build duration","16 months","Two crews"],["Absorption","1 home/month","Sell-out 15 months after completion"],["Selling + marketing","7.5% of price","Benton County typical"]];

var ADJUST=[["Flood elevation premium (lower BFE)","$375K–525K","$484K–677K","$25K–35K per home removed from vertical cost also removes the 9.2% soft cost and 10% contingency on it, and the finance carry on both. Run in the v0.3 workbook."],["SDCs (full waiver)","$448K","$578K","Per-home SDCs sit inside hard cost and carry soft cost, contingency and finance."],["SDCs (deferred to each closing)","$448K moved to closing","About $130K","Still paid in full, but without the markup and construction interest; peak equity falls $231K."]];

var SITELINES=[["Franchise utilities: power, gas, telecom",50585,30351],["Unclassified excavation",18036,7214],["Utility trenching",5828,2040],["Water main, services, master meter, backflow",37453,20599],["Fire hydrant assembly",7500,0],["Sanitary sewer, cleanouts, manholes",46974,23487],["Street cuts + traffic control, S 15th",42000,42000],["Topsoil and fine grading (balanced cut and fill)",43552,15243],["Paving subgrade prep",28641,9452],["Stormwater: pipe, detention pond, gallery",136215,61297],["Walkway incl. S 15th frontage sidewalk (C-1)",24448,14669],["Landscape and naturescape (C-3 street trees inside)",90000,29700],["Irrigation",6478,2267],["Asphalt: drive aisle, parking, fire turnaround (C-2)",34430,11362],["Site subtotal",572140,269681,true]];

var COSTCHECKS=[
 {sev:"warn",t:"Soft cost and contingency are charged on per-home SDCs (about $86K)",why:"SDCs are fixed fees; most lenders carry them outside the contingency base. Excluding them adds about 1.7 points of margin. Left as is in v0.3 to match the model's method."},
 {sev:"warn",t:"$180/SF vertical has cushion against Cooper 103",why:"JobTread 2506 projects $226,969 on 1,500 SF: $151/SF all-in, including its SDCs and site work. Tag the flood-driven lines to separate the elevation premium."},
 {sev:"warn",t:"No GC or developer fee",why:"The owner's base-case rule excludes sponsor pay. A bank-financed job usually carries a GC fee line; at 12% of vertical that is about $335K."},
 {sev:"crit",t:"The model's judge sheet still reflects the v0.2 program",why:"Its blind re-derivation put v0.2 cost 36% higher, mainly on vertical cost. It has not been rerun for the two-level product. Reconcile before the reservation list sets prices."},
 {sev:"warn",t:"Peak equity $2.05M against about $360K available",why:"Cooper refi proceeds ~$350K plus ~$10K equity in the 602 house. Presale deposits, deferral of SDCs, phasing or an investor must close the gap."}
];

var MARKET={closedLo:393, closedHi:455, askLo:395, askHi:475, askLabel:"INDEPENDENT VALUE CHECK $395–475", closedLabel:"COOPER APPRAISAL METHOD $455"};

/* ---------- DEVELOPMENT AGREEMENT TIMELINE (recorded 2024-649017) ---------- */
var DA_PROVISIONS=[
 ["Recital 6","The zone change requires a Type II Site Design Review; no other discretionary approval","Approved 10 Jan 2025 (P24-08); final 24 Jan 2025"],
 ["§1","Term of the agreement: 15 years","26 Nov 2024 → 26 Nov 2039"],
 ["§6","Work commenced and completed no later than the phasing schedule; City compliance review at the end of each phase","At each phase completion"],
 ["§9","Default: 30 days to cure after written notice; City may finish incomplete phases and lien cost + 25%","From any notice of default"],
 ["§11(d)(i)","Floodplain rules fixed as of the date building permit applications are submitted","At Phase 1 permit application"],
 ["§12","At most 3 phases, each self-sufficient; all phases within 5 years","5 years from the land use approval being final"],
 ["§12(a)","Phase 1 designed, approved and all building permits issued within 1 year; later phases complete within 3 and 5 years, or the approval expires; City Manager may extend each phase up to 12 months","From the land use approval being final (R-23)"],
 ["§17","Owner provides proof of recording within 10 days of approval","Due 5 Dec 2024 · met, recorded 2 Dec 2024"],
 ["§18 · Recital 9","Phasing missed: the agreement is an irrevocable petition for a local improvement district, after notice and a chance to cure","If the phasing plan is not met"],
 ["§19","Council approval at a noticed meeting","25 Nov 2024"]
];

var CQS=[
 ["Does every condition have an owner, budget line, design, permit and closure, each dated, and does that timeline fit the baseline?","Partly. Links are tracked for six conditions; the timeline check is built but cannot run until the baseline schedule (R-18) is loaded."],
 ["What is the binding constraint, and which relief paths have been evaluated?","Yes. Status, Binding constraint."],
 ["For each relief path, who grants it and what is it waiting on?","Yes. Status, relief path table."],
 ["Which legal clocks fall in the next 30 days, and who owns each?","Yes. One, if the City reads the zone change as the start: a Phase 1 extension would end 25 Nov 2026. Under the Site Design Review reading the Phase 1 deadline was 24 Jan 2026, met on the owner's reading by the June 2025 permit (R-25). See the agreement timeline."],
 ["Does the baseline budget carry every accepted condition and the chosen path?","Partly. C-5 and C-6 are not priced; the pursued path P-6 is the v0.3 model."],
 ["Which due diligence items are still open at the contingency deadline?","Not applicable here: the land is owned, so there is no purchase agreement or contingency deadline. Open items show as missing reference findings."],
 ["For each market assumption: what we hold, what is missing, its quality, the next test?","Yes. Status, market case."],
 ["Which assumptions combine high impact with weak evidence?","Yes. The test-first quadrant."],
 ["What is the constraint's market effect, and which path makes the product buyers pay most for?","Not yet. Needs presale or STR evidence at this site."]
];

/* ---------- TRANSLATOR ---------- */
var SAMPLE=[
"Up to 16 detached single-unit homes are permitted on one common lot; duplexes, townhomes, apartments and accessory dwelling units are precluded.",
"Approval of the zone change results in the need for a Type II Site Design Review; no further discretionary approval is required.",
"All Phase 1 improvements must be designed and approved, and all building permits issued, within 1 year of the date the land use approval is final.",
"The owner shall install a five-foot sidewalk along the S 15th Street frontage in Phase 1, including offsite extension to the existing sidewalk.",
"Floodplain rules will be applied as of the date building permit applications are submitted; homes are anticipated to be built without fill.",
"DSL concurs that Wetland A (about 0.21 acres) and the pond are subject to the Removal-Fill Law; fill of 50 cubic yards or more requires a state permit.",
"The jurisdictional determination is valid for five years from September 11, 2025.",
"The Corps of Engineers has not yet determined jurisdiction under the Clean Water Act.",
"We recommend working with DSL staff on site design before completing the land use approval process."
].join("\n\n");

/* Statement packets cut from Buzzwood's land use documents. Files live in web/projects/buzzwood/intake/. */
var DOCS=[
 {file:"", title:"Sample statements (paraphrased)", note:"Paraphrased from the recorded Development Agreement and the DSL concurrence."},
 {file:"projects/buzzwood/intake/buzzwood-development-agreement-2024-12-02.txt", title:"Development Agreement · recorded 2 Dec 2024", note:"City of Philomath and Martin Kribs, Benton County instrument 2024-649017. 37 statements, each tagged with its section."},
 {file:"projects/buzzwood/intake/buzzwood-wetland-delineation-2025-06-06.txt", title:"Wetland delineation report · Turnstone, 6 Jun 2025", note:"Consultant report submitted to DSL as WD 2025-0069. DSL concurred on 11 Sep 2025 (next packet). 15 statements."},
 {file:"projects/buzzwood/intake/buzzwood-dsl-concurrence-2025-09-11.txt", title:"Wetland concurrence · DSL, 11 Sep 2025", note:"Department of State Lands approval of WD #2025-0069, with the cover form. 18 statements, each tagged with its page."},
 {file:"projects/buzzwood/intake/buzzwood-sdr-decision-2025-01-10.txt", title:"Site Design Review decision · P24-08, 10 Jan 2025", note:"Signed Notice of Planning Official Decision, approved with 13 conditions. Text read by OCR from the scan. 25 statements."},
 {file:"projects/buzzwood/intake/buzzwood-sdr-staff-report-2025-01-08.txt", title:"Site Design Review staff report · P24-08, 8 Jan 2025", note:"Findings and City Engineer requirements, selected from 34 pages; the conditions themselves are in the decision packet. 31 statements, each tagged with its page."}
];

/* ---------- PAGE TEXT AND PROJECT-SPECIFIC VIEWS ---------- */
var TEXT={
  feasibleNo:"Not yet; reachable in three steps",
  feasibleWhy:"On the v0.4 program (15 homes × 1,000 SF), 20% needs $491K per home today. Solving the BFE brings that to $433–449K; SDC relief takes it to $383–438K (waiver to deferral). The independent value check puts these homes at $395–475K.",
  termsDefault:"Only if price or cost moves",
  termsWhy:"v0.4 at $450K per home: $409K to break even, $471K for 15%. With the lower BFE: $415–431K for 15%. With a full SDC waiver: $423K. Both: $367–383K. Within the recorded agreement: up to 16 detached homes, one lot, no ADUs.",
  missingTail:", including the baseline schedule that dates each condition's gate.",
  pathwayToday:"The v0.4 program as priced today",
  feasibilityFinding:{sev:"crit",type:"Feasibility test failed",t:"The v0.4 base does not clear the 15% margin floor",why:"15 two-level homes at $450K: 9.9% on cost. It clears with the lower BFE (20.2–24.8%) or an SDC waiver (22.3%), neither yet in hand. Mitigation credits are not yet priced.",owner:"Owner",src:"PF3"}
 };
 function keyDates(){
  var sdr=REF_BY["R-14"].date;
  return [
   {when:"2 Dec 2024",what:"Agreement recorded; runs with the land for 15 years, to 26 Nov 2039"},
   {when:"10 Jan 2025",what:"Site Design Review P24-08 approved with 13 conditions; final 24 Jan 2025"},
   {when:"16 Jun 2025",what:"Building permit 675-25-000155-STR issued for the 602 house; final inspection 18 May 2026"},
   {when:sdr?fmt(addYears(sdr,1)):"1 yr after SDR",what:"Phase 1 designed, approved and all building permits issued. Permits met on the owner's reading (R-25); improvements not shown approved"},
   {when:"3 and 5 yrs",what:"Phases 2 and 3 complete; all phases within 5 years; up to 12 months' extension per phase"},
   {when:"Before 25 Nov 2026",what:"Get the City's written confirmation that the clocks run from the Site Design Review, not the 2024 zone change, that Phase 1 met §12(a), and whether Phase 1 may precede the wetland permits",hot:true}
  ];
 }
 function daTimeline(){
  var A0="2024-10-01", A1="2033-01-01";
  var sdr=REF_BY["R-14"].date, t0=sdr||iso(AS_OF), ill=!sdr;
  var rows=[
   {g:"Fixed by the record"},
   {l:"Council approval · executed · recorded",marks:[["2024-11-25"],["2024-11-26"],["2024-12-02"]],note:"25 Nov · 26 Nov · 2 Dec 2024",k:"fix"},
   {l:"LUBA appeal window on the zone change (21 days)",a:"2024-11-25",b:addDays("2024-11-25",21),k:"fix"},
   {l:"Agreement term, 15 years (§1)",a:"2024-11-26",b:A1,k:"fix",arrow:"to 26 Nov 2039"},
   {g:"Governing reading: clock starts when the Site Design Review is final"+(ill?" (date not set; shown from "+fmt(t0)+")":"")},
   {l:"Site Design Review decided · final · Phase 1 permit",marks:[["2025-01-10"],["2025-01-24"],["2025-06-16"]],note:"10 Jan · 24 Jan · 16 Jun 2025",k:"fix"},
   {l:"Phase 1: designed, approved, all permits issued",a:t0,b:addYears(t0,1),ext:addYears(t0,2),k:"gov",lock:true,met:"permits met (R-25)"},
   {l:"Phase 2 complete",a:t0,b:addYears(t0,3),ext:addYears(t0,4),k:"gov"},
   {l:"Phase 3 complete · all phases (5-year cap)",a:t0,b:addYears(t0,5),ext:addYears(t0,6),k:"gov"},
   {g:"Other reading: clock started at the 25 Nov 2024 zone change"},
   {l:"Phase 1: all permits issued",a:"2024-11-25",b:"2025-11-25",ext:"2026-11-25",k:"alt"},
   {l:"Phase 2 complete",a:"2024-11-25",b:"2027-11-25",ext:"2028-11-25",k:"alt"},
   {l:"Phase 3 complete · all phases",a:"2024-11-25",b:"2029-11-25",ext:"2030-11-25",k:"alt"}
  ];
  return {A0:A0, A1:A1, ill:ill, rows:rows, aria:"Development Agreement timeline: fixed dates, phase deadlines under the governing reading, and under the other reading",
   note:'<p class="muted small">The triangle marks the latest date to apply for Phase 1 building permits; flood rules fix on that date (§11(d)(i)), so the lower BFE helps only if the revised map is effective by then (E-1, not yet dated).</p>'};
 }

return {SRC:SRC, REF:REF, REF_BY:REF_BY, INTAKE:INTAKE, SCEN:SCEN, CONSTRAINT:CONSTRAINT, PATHS:PATHS, CONDITIONS:CONDITIONS, BASELINE:BASELINE, CLOCKS:CLOCKS, EXTERNAL:EXTERNAL, CONFLICTS:CONFLICTS, ADVISORY:ADVISORY, ASSUMPTIONS:ASSUMPTIONS, DECISIONS:DECISIONS, PATHWAY:PATHWAY, NH:NH, COSTSTACK:COSTSTACK, UNITPROG:UNITPROG, RATES:RATES, ADJUST:ADJUST, SITELINES:SITELINES, COSTCHECKS:COSTCHECKS, MARKET:MARKET, DA_PROVISIONS:DA_PROVISIONS, CQS:CQS, SAMPLE:SAMPLE, DOCS:DOCS,
  STORE_KEY:"bw-feas-rulings-v2",
  DEFAULT_RULINGS:{"D-1":{choice:"Floodplain elevation",when:"record 27 Oct 2026, owner in session"}},
  TEXT:TEXT, keyDates:keyDates, daTimeline:daTimeline};
}
};
