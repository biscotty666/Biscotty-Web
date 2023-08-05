import { fail } from "@sveltejs/kit";
import { object, string } from 'yup';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const contactFormSchema = object({
      name: string().min(5).required(),
      email: string().required().email(),
      message: string().required(),
    });

    try {
      const result = await contactFormSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfqy6jNaKvlKBl_aixmuCYwI9JXzyyv8VaTo89hS4SRb_5Jsg/formResponse?usp=pp_url&entry.1632310412=${name}&entry.945008238=${email}&entry.1702121480=${message}&submit-Submit`



      const res = await fetch(prefilledLink)
      console.log(res)

      return {
        success: true,
        status: "Form is submitted..."
      }
    } catch (error) {
      console.log({ error })
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message
      }
    }

  }

}