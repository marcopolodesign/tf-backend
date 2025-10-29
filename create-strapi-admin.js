/**
 * This script creates a Strapi admin user
 * Run this on your DigitalOcean App Platform console or after deployment
 * 
 * Usage: node create-strapi-admin.js
 */

const strapi = require('@strapi/strapi');

async function createAdmin() {
  try {
    console.log('🚀 Initializing Strapi...');
    
    const app = await strapi().load();
    
    console.log('✓ Strapi loaded successfully');
    console.log('📝 Creating admin user...');

    // Check if admin already exists
    const admins = await strapi.query('admin::user').findMany();
    
    if (admins && admins.length > 0) {
      console.log('✓ Admin user(s) already exist');
      console.log(`Found ${admins.length} admin user(s):`);
      admins.forEach((admin, i) => {
        console.log(`  ${i + 1}. ${admin.email} (${admin.firstname} ${admin.lastname})`);
      });
      await app.destroy();
      return;
    }

    // Create new admin user
    const adminData = {
      username: 'superadmin',
      firstname: 'Super',
      lastname: 'Admin',
      email: 'admin@marcopolo.com',
      password: 'Admin123!',
      isActive: true,
      roles: []
    };

    // Get super admin role
    const superAdminRole = await strapi.query('admin::role').findOne({
      where: { code: 'strapi-super-admin' }
    });

    if (superAdminRole) {
      adminData.roles = [superAdminRole.id];
    }

    const admin = await strapi.service('admin::user').create(adminData);

    console.log('\n✅ Admin user created successfully!\n');
    console.log('📧 Email:', adminData.email);
    console.log('🔑 Password:', adminData.password);
    console.log('\n⚠️  IMPORTANT: Change this password after first login!\n');

    await app.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    console.error(error);
    process.exit(1);
  }
}

createAdmin();

