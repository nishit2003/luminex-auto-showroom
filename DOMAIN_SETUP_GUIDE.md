# 🌐 Grosan.in Domain Setup Guide for Vercel

## 🎉 Congratulations! You've purchased grosan.in from Namecheap!

This guide will walk you through connecting your custom domain to your Vercel deployment.

---

## 📋 **Step-by-Step Domain Configuration**

### **Step 1: Deploy to Vercel First**

1. **Go to Vercel**: [vercel.com](https://vercel.com)
2. **Sign up/Login** with GitHub (recommended)
3. **Import your project**:
   - Click "Add New Project"
   - Import your repository or drag & drop your project folder
   - Vercel will auto-detect: Vite framework ✅
4. **Deploy**: Click "Deploy" button
5. **Wait for deployment** to complete (2-3 minutes)

---

### **Step 2: Add Custom Domain in Vercel**

1. **Go to your project dashboard** in Vercel
2. **Click "Settings"** tab
3. **Click "Domains"** in the left sidebar
4. **Click "Add Domain"**
5. **Enter your domain**: `grosan.in`
6. **Click "Add"**

---

### **Step 3: Configure DNS in Namecheap**

1. **Login to Namecheap**: [namecheap.com](https://namecheap.com)
2. **Go to Domain List** → Find `grosan.in` → Click "Manage"
3. **Go to "Advanced DNS"** tab
4. **Delete existing records** (if any)
5. **Add these DNS records**:

#### **For Root Domain (grosan.in):**

```
Type: A Record
Host: @
Value: 76.76.19.61
TTL: Automatic
```

#### **For WWW Subdomain (www.grosan.in):**

```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

---

### **Step 4: Verify Domain in Vercel**

1. **Go back to Vercel** → Your project → Settings → Domains
2. **Wait for verification** (5-30 minutes)
3. **Status should show**: ✅ "Valid Configuration"
4. **If there are issues**, check the error messages and fix DNS records

---

## 🔧 **Troubleshooting Common Issues**

### **❌ "Invalid Configuration" Error**

- **Check DNS propagation**: Use [whatsmydns.net](https://whatsmydns.net) to verify
- **Wait longer**: DNS can take up to 48 hours to fully propagate
- **Double-check records**: Ensure A record points to `76.76.19.61`

### **❌ "Domain not found" Error**

- **Verify domain spelling**: Make sure you entered `grosan.in` correctly
- **Check domain ownership**: Ensure you own the domain in Namecheap

### **❌ SSL Certificate Issues**

- **Vercel handles SSL automatically**: No action needed
- **Wait for certificate generation**: Usually takes 5-10 minutes after domain verification

---

## 🚀 **Post-Deployment Checklist**

### **✅ Domain Setup Complete**

- [ ] Domain added to Vercel project
- [ ] DNS records configured in Namecheap
- [ ] Domain verified in Vercel
- [ ] SSL certificate active (green lock in browser)

### **✅ Website Testing**

- [ ] Visit `https://grosan.in` - should load your site
- [ ] Visit `https://www.grosan.in` - should redirect to main domain
- [ ] Test all pages and functionality
- [ ] Check mobile responsiveness

### **✅ SEO & Analytics**

- [ ] Google Search Console setup
- [ ] Google Analytics (if needed)
- [ ] Social media previews working

---

## 📞 **Quick Reference - DNS Settings**

**Namecheap DNS Records:**

```
@ (A Record) → 76.76.19.61
www (CNAME) → cname.vercel-dns.com
```

**Vercel Configuration:**

- Framework: Vite (Auto-detected)
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: 18.x

---

## 🎯 **Expected Timeline**

| Step                | Duration             |
| ------------------- | -------------------- |
| Vercel Deployment   | 2-3 minutes          |
| Domain Verification | 5-30 minutes         |
| DNS Propagation     | 5-48 hours           |
| Full Site Access    | 30 minutes - 2 hours |

---

## 🔗 **Useful Links**

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Namecheap DNS**: [namecheap.com/domains/control-panel](https://namecheap.com/domains/control-panel)
- **DNS Checker**: [whatsmydns.net](https://whatsmydns.net)
- **SSL Checker**: [ssllabs.com/ssltest](https://ssllabs.com/ssltest)

---

## 💡 **Pro Tips**

1. **Keep Vercel and Namecheap tabs open** during setup
2. **Use incognito mode** to test without cache issues
3. **Take screenshots** of DNS settings for reference
4. **Bookmark your Vercel dashboard** for easy access
5. **Set up monitoring** to track uptime

---

## 🆘 **Need Help?**

If you encounter any issues:

1. **Check Vercel status**: [vercel-status.com](https://vercel-status.com)
2. **Vercel documentation**: [vercel.com/docs](https://vercel.com/docs)
3. **Namecheap support**: Available 24/7 via chat

---

**🎉 Your website will be live at `https://grosan.in` once DNS propagation completes!**
