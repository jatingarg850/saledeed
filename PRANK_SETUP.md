# Global Prank Mode Setup for Static Deployment

## 🚀 READY TO DEPLOY CHECKLIST

✅ **JSONBin.io Setup Complete**
- API Key: `$2a$10$/L/i.90X4LfTFT2jnWzkiuipon//8sCztXAzhvk9wusm//GRY5OWW`
- Bin ID: `690b3dc443b1c97be99a6952`

### 📋 Final Steps:
1. **Add Environment Variables to Netlify**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_JSONBIN_API_KEY` = `$2a$10$/L/i.90X4LfTFT2jnWzkiuipon//8sCztXAzhvk9wusm//GRY5OWW`
   - Add: `NEXT_PUBLIC_JSONBIN_BIN_ID` = `690b3dc443b1c97be99a6952`

2. **Deploy & Test**:
   - Redeploy your site
   - Visit `/CODDYIO` (should show "External Sync: 🌍 Enabled")
   - Enter `IAMGOD` to activate global chaos
   - Test on multiple devices to verify global sync

---

The prank system is designed to work globally across all users, even on static deployments like Netlify.

## How it works:

1. **Activation**: Visit `/CODDYIO` and enter the secret key `IAMGOD`
2. **Deactivation**: When pranked, find the reset button and enter `SORRY` (after 3 attempts)
3. **Global Sync**: Uses external services for true global synchronization

## Current Setup:

The system works with **localStorage + BroadcastChannel** for cross-tab synchronization by default. For true global synchronization across all users, you can optionally set up external services:

### Option 1: JSONBin.io (Recommended) ✅ READY
1. ✅ Account created and API key obtained
2. **Next step**: Create a new bin:
   - Go to https://jsonbin.io/app/bins
   - Click "Create New Bin"
   - Set name: "SaleDeed Prank State"
   - Set initial content: `{"isActive": false, "activatedAt": null}`
   - Click "Create"
   - Copy the Bin ID from the URL (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

3. ✅ **Configure environment variables** in Netlify:
   - `NEXT_PUBLIC_JSONBIN_API_KEY`: `$2a$10$/L/i.90X4LfTFT2jnWzkiuipon//8sCztXAzhvk9wusm//GRY5OWW`
   - `NEXT_PUBLIC_JSONBIN_BIN_ID`: `690b3dc443b1c97be99a6952`

### Option 2: GitHub Gist
1. Create a public gist with filename `prank-state.json`
2. Initial content: `{"isActive": false}`
3. Replace `YOUR_GIST_ID` in `lib/prankStore.ts`

### Option 3: Webhook Service (Testing)
1. Go to https://webhook.site/
2. Copy your unique URL
3. Replace `YOUR_UNIQUE_ID` in `lib/prankStore.ts`

## Fallback Behavior:

Even without external services, the prank system will:
- Work locally with localStorage
- Sync across browser tabs using BroadcastChannel
- Auto-expire after 24 hours
- Show appropriate console messages

## Netlify Deployment Setup:

### Step 1: Add Environment Variables
In your Netlify dashboard:
1. Go to Site Settings → Environment Variables
2. Add these exact variables:
   ```
   NEXT_PUBLIC_JSONBIN_API_KEY = $2a$10$/L/i.90X4LfTFT2jnWzkiuipon//8sCztXAzhvk9wusm//GRY5OWW
   NEXT_PUBLIC_JSONBIN_BIN_ID = 690b3dc443b1c97be99a6952
   ```

### Step 2: Create JSONBin ✅ COMPLETED
1. ✅ JSONBin created successfully
2. ✅ Bin ID obtained: `690b3dc443b1c97be99a6952`
3. ✅ Ready for Netlify deployment

### Step 3: Deploy and Test
1. Deploy to Netlify (environment variables will be applied)
2. Visit `https://yoursite.netlify.app/CODDYIO`
3. Enter `IAMGOD` to activate global prank mode
4. Visit homepage to see the chaos
5. Open in multiple browsers/devices to test global sync
6. Use reset mechanism (enter `SORRY` after 3 attempts) to deactivate

## Features:
- 🎪 Chaotic animated overlay with 100+ floating emojis
- 🤡 Random popup messages every 5-10 seconds
- 🎯 Moving reset button that's hard to catch
- 🌍 True global synchronization across all users
- 📱 Works on mobile and desktop
- ⚡ Instant cross-tab synchronization
- 🔄 Auto-fallback to localStorage if external service fails