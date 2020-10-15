export default {
    publicUrl: document.head.querySelector('meta[name="public_url"]').getAttribute('content'),
    appName: document.head.querySelector('meta[name="app_name"]').getAttribute('content'),
    appUrl: document.head.querySelector('meta[name="app_url"]').getAttribute('content'),
}