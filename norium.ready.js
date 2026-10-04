x: void (async function () {
    const K = (function () {
        const c = {};
        {
            let A = !![];
            return function (s, a) {
                {
                    const G = A ? function () {
                        const o = {};
                        {
                            if (a) {
                                {
                                    const R = a.apply(s, arguments);
                                    return a = null, R;
                                }
                            }
                        }
                    } : function () { };
                    return A = ![], G;
                }
            };
        }
    }()), Y = (function () {
        const c = {};
        {
            let A = !![];
            return function (s, a) {
                const g = {};
                {
                    const o = A ? function () {
                        const j = {};
                        {
                            if (a) {
                                {
                                    const O = a.apply(s, arguments);
                                    return a = null, O;
                                }
                            }
                        }
                    } : function () { };
                    return A = ![], o;
                }
            };
        }
    }()), H = (function () {
        const c = {};
        {
            let A = !![];
            return function (s, a) {
                const g = {};
                {
                    const o = A ? function () {
                        {
                            if (a) {
                                {
                                    const R = a.apply(s, arguments);
                                    return a = null, R;
                                }
                            }
                        }
                    } : function () { };
                    return A = ![], o;
                }
            };
        }
    }());
    if (document.getElementById("akx_overlay_container"))
        return;
    if (((document.cookie.indexOf("__session=")) === (((((((((((((((((-1))))))))))))))))))) {
        {
            const B = "eyJnZXRrZXlfaW5pdGlhdGVkX2F0IjoxNzg5Mzc2Mzc1NDQxLCJnZXRrZXlfY29tcGxldGVkIjpmYWxzZSwiYmFubmVkIjpmYWxzZX0%3D.m27QGejM%2Fe1p1g6eksDF6XfcPxFbVEsWWDmUbQFjxaM";
            document.cookie = "__session=" + B + ("; path=/; max-age=86400; SameSite=Lax");
        }
    }
    function J() {
        const A = {};
        {
            const a = new Date(((Date.now()) + 86400000));
            return a.toLocaleString("en-US", {});
        }
    }
    if (!document.getElementById("akx_styles")) {
        {
            const A = "\n      * { margin: 0; padding: 0; box-sizing: border-box; }\n      @keyframes akFadeIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }\n      @keyframes edgeLoad { 0%, 100% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 20px rgba(56,189,248,0.4); } 50% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 40px rgba(56,189,248,0.85); } }\n      @keyframes edgeSuccess { 0%, 100% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 20px rgba(16,185,129,0.4); } 50% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 40px rgba(16,185,129,0.85); } }\n      @keyframes edgeError { 0%, 100% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 20px rgba(239,68,68,0.4); } 50% { box-shadow: 0 0 50px rgba(0,0,0,0.9), 0 0 40px rgba(239,68,68,0.85); } }\n      @keyframes akTextShimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }\n      @keyframes akBtnBg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }\n      @keyframes drawRing { 0% { stroke-dashoffset: 301.6; } 100% { stroke-dashoffset: 0; } }\n      @keyframes pulseGlowSuccess { 0%, 100% { box-shadow: 0 0 10px rgba(16,185,129,0.4); } 50% { box-shadow: 0 0 25px rgba(16,185,129,1); } }\n      @keyframes pulseGlowError { 0%, 100% { box-shadow: 0 0 10px rgba(239,68,68,0.4); } 50% { box-shadow: 0 0 25px rgba(239,68,68,1); } }\n      \n      .ak-btn { position: relative; overflow: hidden; background: linear-gradient(90deg, #18181b, #27272a, #18181b); background-size: 200% 200%; color: #fff; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 14px; cursor: pointer; font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 800; width: 100%; transition: transform 0.1s ease, box-shadow 0.3s ease; animation: akBtnBg 4s infinite linear; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 8px 20px rgba(0,0,0,0.6); outline: none; display: flex; align-items: center; justify-content: center; gap: 8px; line-height: 1; }\n      .ak-btn svg { display: block; }\n      .ak-btn:active { transform: scale(0.96); }\n      .ak-btn-success { background: linear-gradient(90deg, #064e3b, #047857, #064e3b); border-color: #059669; box-shadow: 0 0 20px rgba(4,120,87,0.5); }\n      .ak-btn-thin { padding: 10px !important; font-size: 12px; }\n\n      .av-wrap { width: 90px; height: 90px; position: relative; margin: 0 auto 16px; display: flex; justify-content: center; align-items: center; }\n      .av-img { width: 100%; height: 100%; border-radius: 50%; display: block; position: relative; z-index: 2; }\n    ", s = document.createElement("style");
            s.id = "akx_styles", s.textContent = A, document.head.appendChild(s);
        }
    }
    const w = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line></svg>", E = "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display:block;\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>", T = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg>", W = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path></svg>", k = document.createElement("div");
    k.id = "akx_overlay_container", k.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;padding:16px;", document.body.appendChild(k);
    const N = "width:100%;max-width:370px;aspect-ratio:5/7;border-radius:24px;background:linear-gradient(180deg, #111111 0%, #000000 100%);border:1px solid rgba(255,255,255,0.08);box-shadow:inset 0 1px 1px rgba(255,255,255,0.05), 0 0 60px rgba(0,0,0,0.9);padding:32px 24px 24px;display:flex;flex-direction:column;position:relative;box-sizing:border-box;color:#ffffff;", q = "<h1 style=\"font-size:42px;font-weight:900;letter-spacing:6px;text-transform:uppercase;background:linear-gradient(90deg,#71717a 0%,#e4e4e7 25%,#ffffff 50%,#e4e4e7 75%,#71717a 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:akTextShimmer 3s linear infinite;margin:0 0 8px 0;text-align:center;line-height:1;\">SRABON</h1>";
    function u(a) {
        const g = {};
        {
            let o = '';
            if ((a === "load")) {
                o = "<svg style=\"position:absolute;inset:-6px;width:calc(100% + 12px);height:calc(100% + 12px);transform:rotate(-90deg);z-index:3;overflow:visible;\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"48\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"4\" stroke-dasharray=\"301.6\" stroke-linecap=\"round\" style=\"animation: drawRing 1.5s linear infinite;\"/></svg>";
            }
            else {
                if ((a === "success")) {
                    o = "<div style=\"position:absolute;inset:-4px;border-radius:50%;border:3px solid transparent;animation:pulseGlowSuccess 2.5s infinite ease-in-out;z-index:3;\"></div>";
                }
                else
                    (o = "<div style=\"position:absolute;inset:-4px;border-radius:50%;border:3px solid transparent;animation:pulseGlowError 2.5s infinite ease-in-out;z-index:3;\"></div>");
            }
            return "\n      <div style=\"display:flex;flex-direction:column;align-items:center;width:100%;\">\n        <div class=\"av-wrap\">\n          " + o + ("\n          <img src=\"https://raw.githubusercontent.com/norium10/aincard/main/srabon.png\" class=\"av-img\" alt=\"Avatar\">\n        </div>\n        ") + q + ("\n      </div>\n    ");
        }
    }
    const d = "\n    <div style=\"display:flex;align-items:center;justify-content:center;opacity:0.6;margin-top:4px;\">\n      <p style=\"font-size:15px;color:#fff;font-weight:700;letter-spacing:1px;\">Telegram: @norium10</p>\n    </div>\n  ";
    k.innerHTML = "\n    <div style=\"" + N + (" animation: akFadeIn 0.3s ease forwards, edgeLoad 2.5s infinite ease-in-out;\">\n      ") + (u("load")) + ("\n      <div style=\"flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;\">\n        <h2 id=\"akmsg\" style=\"color:#38bdf8;font-size:12px;font-weight:700;letter-spacing:2px;text-align:center;\">ESTABLISHING LINK...</h2>\n      </div>\n      <div style=\"display:flex;flex-direction:column;gap:12px;margin-top:auto;\">\n        <button id=\"akx_cancel\" class=\"ak-btn ak-btn-thin\">") + w + (" CANCEL</button>\n        ") + d + ("\n      </div>\n    </div>\n  ");
    const M = new AbortController();
    let I = ![];
    function p() { k.remove(); }
    document.getElementById("akx_cancel").onclick = function () { I = !![], M.abort(), (p()); };
    const C = ["ESTABLISHING LINK...", "SYNCHRONIZING DATA...", "EXTRACTING TOKEN..."];
    let h = 0;
    const t = (setInterval((() => {
        {
            h = (((h + 1)) % C.length);
            const g = document.getElementById("akmsg");
            if (g)
                g.textContent = C[h];
        }
    }), 1000));
    try {
        const a = await (fetch("https://zxi-file-loader.ah4734536.workers.dev?file=zxi.txt&key=Hey&user=2", ({ 'signal': M.signal }))), g = await a.text();
        if (I)
            return;
        const G = await (fetch((g.trim()), ({ 'signal': M.signal }))), o = await G.text();
        (clearInterval(t));
        if (I)
            return;
        const j = o.match(/font-mono[^>]*>([\s\S]*?)<\/code/i), R = j ? j[1].trim() : null;
        if (R) {
            const O = (J());
            k.innerHTML = "\n        <div style=\"" + N + (" animation: akFadeIn 0.3s ease forwards, edgeSuccess 2.5s infinite ease-in-out;\">\n          ") + (u("success")) + ("\n          <div style=\"flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;\">\n            <p style=\"color:#047857;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;\">AUTHORIZATION KEY</p>\n            <div style=\"background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.2);border-radius:14px;padding:18px;margin-bottom:12px;width:100%;text-align:center;\">\n              <p style=\"color:#34d399;font-family:ui-monospace,monospace;font-size:18px;font-weight:700;word-break:break-all;line-height:1;\">") + R + ("</p>\n            </div>\n            <div style=\"background:#0a0a0a;border:1px solid #1c1c1c;border-radius:12px;padding:10px 16px;display:flex;align-items:center;justify-content:center;\">\n              <div style=\"display:flex;align-items:center;gap:6px;\">\n                ") + E + ("\n                <p style=\"color:#888;font-size:11px;font-weight:600;letter-spacing:1px;line-height:1;\">EXPIRES: <span style=\"font-weight:800;color:#e4e4e7;\">") + O + ("</span></p>\n              </div>\n            </div>\n          </div>\n          <div style=\"display:flex;flex-direction:column;gap:12px;margin-top:auto;\">\n            <button id=\"akc\" class=\"ak-btn ak-btn-success\">") + T + (" COPY TO CLIPBOARD</button>\n            <button id=\"akx\" class=\"ak-btn ak-btn-thin\">") + w + (" DISMISS</button>\n            ") + d + ("\n          </div>\n        </div>\n      "), document.getElementById("akc").onclick = function () { const F = {}, l = this; navigator.clipboard.writeText(R).then(() => { l.innerHTML = W + (" COPIED TO CLIPBOARD"), (setTimeout((() => { (l.innerHTML = T + (" COPY TO CLIPBOARD")); }), 2000)); }); }, document.getElementById("akx").onclick = p;
        }
        else {
            const F = ((o.indexOf("anomaly")) !== (((((((((((((((((-1)))))))))))))))))), l = ((o.indexOf("no_session")) !== (((((((((((((((((-1)))))))))))))))))), X = ((o.indexOf("Just a moment")) !== (((((((((((((((((-1)))))))))))))))))), U = F ? "SECURITY ANOMALY" : l ? "SESSION TERMINATED" : X ? "CHALLENGE REQUIRED" : "TOKEN UNRESOLVED", m = F ? "Traffic pattern flagged by edge security policies." : l ? "Active authorization session has timed out." : X ? "Solve the human verification check on the host tab first." : "Authorization token could not be retrieved from payload.";
            k.innerHTML = "\n        <div style=\"" + N + (" animation: akFadeIn 0.3s ease forwards, edgeError 2.5s infinite ease-in-out;\">\n          ") + (u("error")) + ("\n          <div style=\"flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;\">\n            <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px;margin-bottom:12px;\">\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line></svg>\n              <h2 style=\"color:#ef4444;font-size:14px;font-weight:800;letter-spacing:1.5px;text-align:center;\">") + U + ("</h2>\n            </div>\n            <p style=\"color:#a1a1aa;font-size:12px;line-height:1.6;background:#09090b;padding:16px;border-radius:14px;border:1px solid #27272a;text-align:center;width:100%;box-sizing:border-box;\">") + m + ("</p>\n          </div>\n          <div style=\"display:flex;flex-direction:column;gap:12px;margin-top:auto;\">\n            <button id=\"akx2\" class=\"ak-btn ak-btn-thin\">") + w + (" DISMISS</button>\n            ") + d + ("\n          </div>\n        </div>\n      "), document.getElementById("akx2").onclick = p;
        }
    }
    catch (D) {
        (clearInterval(t));
        if ((D.name === "AbortError") || I)
            return;
        k.innerHTML = "\n      <div style=\"" + N + (" animation: akFadeIn 0.3s ease forwards, edgeError 2.5s infinite ease-in-out;\">\n        ") + (u("error")) + ("\n        <div style=\"flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;\">\n          <div style=\"display:flex;flex-direction:column;align-items:center;gap:8px;margin-bottom:12px;\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n            <h2 style=\"color:#f59e0b;font-size:14px;font-weight:800;letter-spacing:1.5px;text-align:center;\">GATEWAY UNREACHABLE</h2>\n          </div>\n          <div style=\"background:#09090b;padding:16px;border-radius:14px;border:1px solid #27272a;text-align:left;width:100%;box-sizing:border-box;\">\n            <p style=\"color:#a1a1aa;font-size:12px;line-height:1.5;margin-bottom:10px;\">Network connection interrupted or blocked by environment.</p>\n            <p style=\"color:#ef4444;font-family:ui-monospace,monospace;font-size:10px;word-break:break-all;opacity:0.8;\">[ERR]: ") + D.message + ("</p>\n          </div>\n        </div>\n        <div style=\"display:flex;flex-direction:column;gap:12px;margin-top:auto;\">\n          <button id=\"akx3\" class=\"ak-btn ak-btn-thin\">") + w + (" DISMISS</button>\n          ") + d + ("\n        </div>\n      </div>\n    "), document.getElementById("akx3").onclick = p;
    }
}());
