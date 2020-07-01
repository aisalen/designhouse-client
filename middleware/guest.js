// 14.108
export default function({ app, redirect }) {
  // console.log(app.$auth.user);
  if (app.$auth.loggedIn) {
    return redirect('/');
  }
}
