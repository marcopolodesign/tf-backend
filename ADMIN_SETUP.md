# Creating Admin User in Strapi

There are **two methods** to create an admin user for your Strapi application on DigitalOcean:

---

## Method 1: Using Strapi's Built-in CLI (Recommended)

### On DigitalOcean App Platform Console:

1. Go to your app in DigitalOcean App Platform
2. Navigate to **Console** tab
3. Run the following command:

```bash
npm run strapi admin:create-user -- --firstname=Super --lastname=Admin --email=admin@marcopolo.com --password=Admin123!
```

This will create an admin user with:
- **Email:** `admin@marcopolo.com`
- **Password:** `Admin123!`
- **Role:** Super Admin

⚠️ **Change the password immediately after first login!**

---

## Method 2: Using the Custom Script

If the CLI method doesn't work, use the custom script included in this project:

### On DigitalOcean App Platform Console:

```bash
node create-strapi-admin.js
```

This script will:
- Initialize Strapi
- Check for existing admins
- Create a new super admin user if none exists

---

## Method 3: First-Time Setup (UI)

If your Strapi instance has never had an admin user created:

1. Deploy your app on DigitalOcean
2. Visit your app URL: `https://your-app-url.ondigitalocean.app/admin`
3. You'll see the **Welcome** screen for first-time setup
4. Fill in your admin details and create your account

This method only works if the database has never had an admin user created before.

---

## Accessing the Admin Panel

Once created, access your admin panel at:
```
https://your-app-url.ondigitalocean.app/admin
```

---

## Troubleshooting

### Can't connect to database locally?
DigitalOcean databases have firewall restrictions. You need to:
1. Add your IP to the trusted sources in DigitalOcean
2. Or run the commands directly on the App Platform console

### "Admin user already exists" error?
If you need to reset an admin password, use the Strapi admin panel's "Forgot Password" feature or manually reset in the database.

### Database not initialized?
Make sure your app has successfully deployed at least once so Strapi can create the database tables.

