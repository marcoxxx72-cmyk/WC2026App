export default async function handler(req, res) {
  const { session_id } = req.query;
  if (!session_id) return res.redirect('/?error=no_session');

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return res.redirect('/?error=config');

  try {
    const r = await fetch('https://api.stripe.com/v1/checkout/sessions/' + session_id, {
      headers: { 'Authorization': 'Bearer ' + key }
    });
    if (!r.ok) return res.redirect('/?error=stripe_error');
    const session = await r.json();
    if (session.payment_status === 'paid') {
      return res.redirect('/?pro=1');
    }
    return res.redirect('/?error=not_paid');
  } catch (e) {
    return res.redirect('/?error=verification_failed');
  }
}
