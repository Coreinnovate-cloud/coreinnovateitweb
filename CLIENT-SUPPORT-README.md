# Client Support Portal & Partners Section

## Overview
This document explains the two hidden sections of the CoreInnovate IT website:
1. Client Support Portal (Password-Protected)
2. Technology Partners Page (Hidden from Navigation)

---

## 1. Client Support Portal

### Access Information
- **URL**: `https://yourdomain.com/client-support`
- **Password**: `CoreInnovate2025`
- **Status**: Password-protected, not indexed by search engines

### Features
✅ **Authentication Screen**
- Simple password protection
- Clean, modern login interface
- Error handling for invalid passwords
- Link to contact support for access

✅ **Remote Access Tools**
Three RMM tools are showcased:
1. **ConnectWise Control** - Remote desktop support
2. **Datto RMM** - Remote monitoring and management
3. **TeamViewer** - Quick support access

Each tool includes:
- Icon and branding colors
- Description and type
- Direct launch links
- Hover effects and animations

✅ **Quick Links Section**
- Knowledge Base
- Submit Ticket
- System Status
- Emergency Contact

✅ **Software Downloads**
- Download buttons for Windows and Mac
- Ready for integration with actual download links

### Customization Guide

#### Change Password
Edit the password in `/app/client-support/page.tsx`:
```typescript
const CLIENT_PASSWORD = "YourNewPassword123"
```

#### Update RMM Tools
Modify the `rmmTools` array:
```typescript
const rmmTools = [
  {
    icon: Monitor,
    name: "Your Tool Name",
    description: "Tool description",
    type: "Tool Type",
    url: "https://your-tool-url.com",
    color: "from-blue-500 to-cyan-500"
  }
]
```

#### Add Real Download Links
Replace placeholder buttons with actual download URLs:
```tsx
<Button onClick={() => window.location.href = 'https://download-url.com'}>
  Download for Windows
</Button>
```

### Security Recommendations

🔒 **For Production Use:**
1. **Implement proper authentication**:
   - Use NextAuth.js or similar
   - Add JWT tokens
   - Implement session management

2. **Add rate limiting**:
   - Prevent brute force attacks
   - Use libraries like `express-rate-limit`

3. **Add audit logging**:
   - Track who accesses the portal
   - Log authentication attempts

4. **Use environment variables**:
   ```bash
   CLIENT_SUPPORT_PASSWORD=your_secure_password
   ```

### SEO Configuration
The page is configured to NOT be indexed:
```typescript
robots: {
  index: false,
  follow: false,
}
```

---

## 2. Technology Partners Page

### Access Information
- **URL**: `https://yourdomain.com/partners`
- **Status**: Hidden from navigation, not indexed by search engines
- **Visibility**: Accessible via direct URL only

### Features

✅ **Coming Soon Notice**
- Prominent banner explaining the page is under development
- Professional messaging about partnership program

✅ **Partner Categories** (Placeholder)
Three main categories:
1. **Security Partners**
   - Microsoft (Gold)
   - Cisco (Premier)
   - Palo Alto (Platinum)

2. **Cloud Partners**
   - AWS (Advanced)
   - Azure (Gold)
   - Google Cloud (Premier)

3. **Technology Partners**
   - ConnectWise (Platinum)
   - Datto (Gold)
   - Sophos (Premier)

✅ **Partnership Benefits**
- 6 key benefits listed
- Modern card design
- Hover effects

✅ **Certifications Preview**
- ISO 27001
- Microsoft Certified
- AWS Certified
- CRISC, CISSP, CompTIA Security+

### Activation Checklist

When ready to make the Partners page live:

1. **Add Real Partner Logos**:
   - Place logos in `/public/partners/`
   - Use SVG format for best quality
   - Update image paths in the code

2. **Update Partner Information**:
   ```typescript
   partners: [
     {
       name: "Partner Name",
       logo: "/partners/logo.svg",
       tier: "Platinum",
       description: "Optional description"
     }
   ]
   ```

3. **Enable SEO Indexing**:
   Edit `/app/partners/metadata.ts`:
   ```typescript
   robots: {
     index: true,  // Change to true
     follow: true,
   }
   ```

4. **Add to Navigation**:
   Edit `/components/shared/navbar.tsx` and `/components/shared/footer.tsx`:
   ```tsx
   <Link href="/partners">Partners</Link>
   ```

5. **Remove "Coming Soon" Banner**:
   Comment out or remove the banner section in the page component

### Partner Logo Guidelines
- **Format**: SVG preferred, PNG acceptable
- **Size**: 200x80px maximum
- **Background**: Transparent
- **Colors**: Monochrome or brand colors
- **Naming**: lowercase, hyphenated (e.g., `microsoft-gold.svg`)

---

## File Structure

```
app/
├── client-support/
│   ├── page.tsx          # Main client portal page
│   └── metadata.ts       # SEO configuration
└── partners/
    ├── page.tsx          # Partners showcase page
    └── metadata.ts       # SEO configuration

public/
└── partners/             # Partner logo directory (create this)
    ├── microsoft.svg
    ├── aws.svg
    └── ...
```

---

## Testing Checklist

### Client Support Portal
- [ ] Access page via `/client-support`
- [ ] Test incorrect password (should show error)
- [ ] Test correct password (should grant access)
- [ ] Verify password persists in session
- [ ] Test all tool links
- [ ] Test quick links
- [ ] Test download buttons
- [ ] Verify page is not in search results

### Partners Page
- [ ] Access page via `/partners`
- [ ] Verify "Coming Soon" banner displays
- [ ] Check all partner categories load
- [ ] Test hover effects on cards
- [ ] Verify certifications display
- [ ] Test CTA button
- [ ] Verify page is not in search results
- [ ] Confirm page not in navigation menus

---

## Future Enhancements

### Client Support Portal
1. **Multi-factor authentication**
2. **User accounts with individual credentials**
3. **Session management**
4. **Ticket submission system**
5. **Live chat integration**
6. **Download tracking**
7. **Usage analytics**

### Partners Page
1. **Partner testimonials**
2. **Case studies section**
3. **Integration showcase**
4. **Partner benefits calculator**
5. **Certification badges with verification**
6. **Partner portal access**

---

## Support

For questions or issues:
- **Email**: hello@coreinnovate.co.uk
- **Documentation**: This file
- **Technical Support**: Contact development team

---

## Change Log

**v1.0** - January 2025
- Initial creation of Client Support Portal
- Initial creation of Partners Page
- Password protection implemented
- SEO configuration set to no-index
- Placeholder content added

---

## Notes

⚠️ **Important Reminders:**
- Change the default password before going live
- Add partner logos to `/public/partners/` directory
- Test authentication thoroughly
- Update metadata when pages go live
- Keep this README updated with changes
