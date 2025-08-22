TO DO:

1. Create an EmailJS Account

   Go to www.emailjs.com and sign up for a free account.

2. Connect Your Email Service

   Once logged in, on the dashboard, click "Add New Service".

   Select "Gmail" (or your preferred email provider).

   Follow the on-screen instructions to connect your laarlabs@laarlabs.com email account.

   Note the Service ID they provide you.

3. Create an Email Template

This is the template for the email you will receive.

    Go to the "Email Templates" section in the sidebar.

    Click "Create New Template".

    Customize the template:

        Subject: You can write something like New Message from {{name}}.

        Body: You can design it like this:
        code Code

        IGNORE_WHEN_COPYING_START
        IGNORE_WHEN_COPYING_END


        You received a new message from your website contact form.

        Name: {{name}}
        Email: {{email}}

        Message:
        {{message}}



        The {{name}}, {{email}}, and {{message}} are variables. EmailJS will automatically replace them with the actual data from your form.

    Go to the "Settings" tab of the template and note the Template ID.

4. Get Your Public Key

   Go to the "Account" section in the sidebar.

   Under "API Keys", you will find your Public Key.

You should now have three pieces of information from EmailJS:

    Service ID

    Template ID

    Public Key
