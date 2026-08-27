# Net Express — Hostinger VPS Deployment Guide

## ✅ STATUS: LIVE — deployed and fully working as of 2026-08-20. Auto-deploy added 2026-08-21. Verified/corrected 2026-08-27.

Site is live at **https://netexpressbd.net** and **https://www.netexpressbd.net**. Both load correctly for regular visitors with no VPN required (see connectivity resolution below). HTTP→HTTPS redirect works, SPA routes survive refresh, cert auto-renews via `certbot.timer`.

> **Decision log:** Domain purchased 2026-08-19 at Hostinger: **netexpressbd.net**. VPS purchased 2026-08-19: Hostinger **KVM 2**, Ubuntu 24.04, Indonesia (Jakarta) datacenter, malware scanner enabled, daily auto-backups and Docker manager skipped. **VPS public IP: 212.85.26.160**. Deployed 2026-08-20 by Claude Code in VS Code over SSH.

## ⚠️ Connectivity issue and resolution — important context for future work

The user's ISP (Bangladesh) could not reach this VPS/datacenter at all by default — not just SSH (port 22), but also plain HTTP/HTTPS to the VPS IP directly, ping, and even Hostinger's own browser-based Web console. Hostinger support confirmed the server itself was completely healthy (SSH listening, no server-side firewall blocking, their own connectivity test reached port 22 fine) — this was a routing/blocking issue specific to the user's ISP path to Hostinger's Jakarta network, not the VPS.

**Two different fixes were needed for two different audiences:**

1. **For the site owner doing manual SSH/admin work (server changes, one-off fixes):** connect through a VPN (Proton VPN free tier confirmed working). A VPN is still required any time SSH is used directly from the user's own connection. SSH key is at the non-default path `~/.ssh/id_ed25519_netexpress` — always use `-i` with ssh commands. **Root login is disabled** — the working login is the `netexpress` sudo user, not `root`.
2. **For regular site visitors (the actual fix, launch-critical):** put **Cloudflare (free plan)** in front of the domain. Domain's nameservers were switched from Hostinger's default (`aster.dns-parking.com` / `helios.dns-parking.com`) to Cloudflare's (`craig.ns.cloudflare.com` / `stevie.ns.cloudflare.com`). Both DNS records (`A` for `@`, `CNAME` for `www`) are set to **Proxied** (orange cloud) in Cloudflare, and SSL/TLS mode is set to **Full** (not Flexible, since the origin already has a real Certbot cert). This resolved the issue — confirmed 2026-08-20 that the site loads fine without VPN through Cloudflare's proxy, and independently reconfirmed 2026-08-27 (`craig`/`stevie.ns.cloudflare.com` still live). **DNS is now managed in Cloudflare, not Hostinger's DNS panel** — any future DNS changes (new subdomains, etc.) should be made in Cloudflare's dashboard.
3. **For routine code/content redeploys (2026-08-21 — VPN no longer needed for this either):** GitHub Actions auto-deploy is now set up. See below.

**Practical implication going forward:** visiting/using the website — no VPN needed for anyone, ever. Routine redeploys after a `git push` — no VPN needed either now (see GitHub Actions section). VPN is only still needed for genuinely manual/ad-hoc SSH work (server config changes, debugging, anything outside the standard git-pull-and-build flow).

## GitHub Actions auto-deploy — set up 2026-08-21

Every push to `main` now automatically redeploys the live site — no VPN, no manual SSH step. Mechanism: GitHub's own runners (not the user's ISP/computer) SSH into the VPS directly, so the ISP-side block on the user's own connection doesn't apply.

- Workflow file: `.github/workflows/deploy.yml` in the repo — on push to `main`, SSHes in via `appleboy/ssh-action` and runs `cd /var/www/net-express && git pull && npm install && npm run build` (identical to the manual redeploy process below, which still works standalone as a fallback).
- Dedicated deploy key: a separate keypair (`id_ed25519_github_deploy`, generated 2026-08-21) was created specifically for this — **not** the user's personal `id_ed25519_netexpress` key — following least-privilege practice. Its public key is in `netexpress`'s `authorized_keys` on the VPS; the private key lives only in GitHub's encrypted repo secrets (never appeared in any chat transcript — set via `gh secret set` directly).
- GitHub repo secrets: `VPS_HOST` (`212.85.26.160`), `VPS_USER` (`netexpress`), `VPS_SSH_KEY` (the dedicated deploy key's private half).
- Verified end-to-end 2026-08-21: pushed commit `74d46f9`, Action ran, server rebuilt at the matching timestamp, live site confirmed serving the new build (HTTP 200).
- **Correction (2026-08-27):** the 2026-08-21 session reported the local copy of the private key (`id_ed25519_github_deploy`) as deleted from the user's machine — this turned out to be inaccurate, the file was still present. A later session independently verified this discrepancy and actually deleted it. **Lesson for future sessions: verify a stated cleanup action actually happened rather than taking a prior summary at face value**, especially for anything security-sensitive like key material.
- **Only set up for the marketing site so far.** FNMS (Docker Compose, separate deploy process) does not have this yet — same approach could be applied there later if wanted, but needs adapting (rebuild containers rather than a static `npm run build`, possibly re-run Prisma migrations depending on what changed).

## Documentation note (2026-08-27)

An English-language version of the deployment guide was saved directly into the marketing site repo as `HOSTINGER-DEPLOYMENT.md`, kept deliberately separate from an existing Bengali `DEPLOYMENT-GUIDE.md` already in that repo (different documents for different audiences/readers). This project doc remains the canonical, most up-to-date source — if the two ever drift, trust this one and update the repo copy to match.

## Payment button — temporary state, needs follow-up

`VITE_PAYMENT_URL` is currently set to `https://wa.me/8801611160096` (WhatsApp) as a placeholder — the user has no real payment gateway (bKash Merchant/Nagad/SSLCommerz etc.) set up yet. The "বিল পরিশোধ" button opens a WhatsApp chat so customers can arrange payment manually in the meantime. **When a real payment method is ready:** update `VITE_PAYMENT_URL` in the server's `.env` at `/var/www/net-express/.env` and rebuild (`npm run build`) — no code changes needed, this is the only place the payment link lives per the architecture (spec Section 13).

## Redeploying after future changes

**Automatic (normal path now):** just `git push` to `main`. GitHub Actions handles the rest — no VPN needed.

**Manual (fallback, still works, needs VPN):**
```bash
ssh -i ~/.ssh/id_ed25519_netexpress netexpress@212.85.26.160   # VPN required; root login is disabled
cd /var/www/net-express
git pull
npm install   # only if package.json changed
npm run build
```

No Nginx restart needed either way — it's just serving `dist/`, and the new build overwrites it in place. Site itself (viewed by visitors) is unaffected by VPN status throughout, since that traffic goes through Cloudflare, not directly to the VPS.

---

## Original setup reference (for a future re-deploy or second project)

### Server details
- Hostinger VPS: KVM 2, Ubuntu 24.04, Jakarta datacenter, IP 212.85.26.160
- Non-root sudo user `netexpress` created; root login + password auth disabled; UFW active (22/80/443 only)
- Node (LTS), Nginx, Certbot installed
- Repo cloned to `/var/www/net-express`, built with production `.env`

### Nginx config (`/etc/nginx/sites-available/net-express`)

```nginx
server {
    listen 80;
    server_name netexpressbd.net www.netexpressbd.net;

    root /var/www/net-express/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

Certbot (`sudo certbot --nginx -d netexpressbd.net -d www.netexpressbd.net`) added the SSL block and auto-renewal on top of this.

### Notes
- No PM2/process manager needed — static build only. A future backend (Section 37 of the ISP spec) would need its own process manager and an Nginx `location /api/ { proxy_pass ... }` block.
- Weekly backups included free with the KVM 2 plan; daily paid auto-backups and Docker manager were skipped at purchase.
- Free domain offer (Hostinger, `.tech`/`.cloud` only) was skipped in favor of buying `netexpressbd.net` directly — not useful for a real business domain.

---

Sources consulted: [Hostinger — How to set up a VPS](https://www.hostinger.com/tutorials/how-to-set-up-vps), [Hostinger — How to point a domain to your VPS](https://www.hostinger.com/support/1583227-how-to-point-a-domain-to-your-vps-at-hostinger/), [DigitalOcean — Deploy a React Application with Nginx on Ubuntu](https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu), [Hostinger — How to generate SSH keys and add them to hPanel](https://www.hostinger.com/support/5634532-how-to-generate-ssh-keys-and-add-them-to-hostinger-hpanel/), [Hostinger — What free domains are available at Hostinger?](https://www.hostinger.com/support/8317599-what-free-domains-are-available-at-hostinger/), Hostinger live support chat transcript (2026-08-19, VPS 1916242 connectivity diagnosis), Cloudflare free-plan setup (2026-08-20, resolved visitor-side connectivity block).
