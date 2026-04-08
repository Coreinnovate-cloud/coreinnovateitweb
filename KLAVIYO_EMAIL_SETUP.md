# Klaviyo Email Setup for Cost Estimator

## How It Works

When a user completes the cost estimator, the system:
1. Creates a profile in Klaviyo with their email and assessment data
2. Triggers an event called **"Assessment Results Ready"** with all the data needed for the email
3. A Klaviyo Flow automatically sends them an email with their results

## Setup Steps

### 1. Create an Email Template in Klaviyo

1. Go to Klaviyo → **Email** → **Templates** → **Create Template**
2. Name it: `Assessment Results Email`
3. Design your email using these dynamic variables:

#### Available Variables:
```
{{ event.risk_score }}               - Risk score (0-100)
{{ event.risk_level }}                - Risk level (low, moderate, high, critical)
{{ event.recommended_package }}       - Package name (CORE Secure or CORE Elite)
{{ event.package_tagline }}           - Package tagline
{{ event.user_count_range }}          - Organisation size
{{ event.compliance_flag }}           - true/false
{{ event.support_level }}             - Support preference
{{ event.risk_factors }}              - Comma-separated risk factors
{{ event.cta_url }}                   - Link to contact page
{{ event.email_subject }}             - Subject line
{{ event.risk_bg_color }}             - Risk badge background color
{{ event.package_features }}          - Features separated by |
```

#### Example Template Structure:
```html
<h1>Your IT & Security Assessment Results</h1>

<div style="background: {{ event.risk_bg_color }}; padding: 10px;">
  <h2>{{ event.risk_level|upper }} Risk</h2>
  <p>Risk Score: {{ event.risk_score }}/100</p>
</div>

<h3>Recommended Package: {{ event.recommended_package }}</h3>
<p>{{ event.package_tagline }}</p>

{% if event.risk_factors %}
<h4>Key Risk Factors:</h4>
<p>{{ event.risk_factors }}</p>
{% endif %}

<a href="{{ event.cta_url }}">Book a Consultation</a>
```

### 2. Create a Flow

1. Go to Klaviyo → **Flows** → **Create Flow**
2. Choose **Create From Scratch**
3. Set Trigger:
   - **Metric**: `Assessment Results Ready`
   - **Trigger immediately**
4. Add an **Email** action:
   - Select the template you created
   - Subject line: Use `{{ event.email_subject }}` or customize
   - Preview and test
5. Turn the Flow **ON**

### 3. Test the Flow

1. Go to `/cost-estimator` on your site
2. Complete the form with your email
3. Check your inbox for the email!

## Viewing Results

### Profiles
- Klaviyo → **Audience** → **Profiles**
- Search by email to see user data

### Events
- Open a profile
- Go to **Activity Feed**
- Look for "Assessment Results Ready" events

### Email Performance
- Klaviyo → **Analytics** → **Flows**
- Check the "Assessment Results Flow" performance

## Troubleshooting

### Email not sending?
1. Check that the Flow is turned **ON**
2. Verify the metric name is exactly: `Assessment Results Ready`
3. Check Flow analytics to see if the event triggered

### Profile not showing up?
1. Verify `KLAVIYO_PRIVATE_API_KEY` is set correctly (not a public key starting with `pk_`)
2. Check browser console for API errors
3. The key should start with different characters, not `pk_`

### Getting your Private API Key
1. Klaviyo → **Settings** → **API Keys**
2. Click **Create Private API Key**
3. Give it **Full Access** permissions
4. Copy the key to `.env.local` as `KLAVIYO_PRIVATE_API_KEY`

## Current Configuration

Your `.env.local` should have:
```
KLAVIYO_PRIVATE_API_KEY=your_private_key_here
NEXT_PUBLIC_KLAVIYO_COMPANY_ID=WqFQf4
```

**Note:** Your current key starts with `pk_` which is a PUBLIC key. You need a PRIVATE key for server-side API calls.
