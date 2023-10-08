import type { Actions } from './$types';
import nodemailer from 'nodemailer';

import { render } from 'svelte-email';
import Template from '$lib/email/Template.svelte';
import { EMAIL, PASSWORD } from '$env/static/private';

const validateString = (value: unknown, maxLength: number): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.anuragrawat.tech',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL,
    pass: PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();

      const senderName = formData.get('senderName') as string;
      const senderEmail = formData.get('senderEmail') as string;
      const message = formData.get('message') as string;

      if (!validateString(senderEmail, 50)) {
        return {
          error: true,
          detail: 'Invalid email'
        };
      }
      if (!validateString(message, 500)) {
        return {
          error: true,
          detail: 'Invalid message'
        };
      }

      const emailHtml = render({
        template: Template,
        props: {
          senderName,
          senderEmail,
          message
        }
      });

      const options = {
        from: 'Anurag Rawat <noreply@anuragrawat.tech>',
        to: 'anurag.rawat0201@gmail.com',
        replyTo: senderEmail,
        subject: 'New message from your website',
        html: emailHtml
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      });

      return {
        success: true,
        detail: 'Message sent successfully'
      };
    } catch (error) {
      console.error(error);
    }
  }
} satisfies Actions;
