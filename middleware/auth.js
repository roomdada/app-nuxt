export default function ({ store, redirect }) {
  if (! store.state.user) {
    return window.location.href = '/';
  }
}
