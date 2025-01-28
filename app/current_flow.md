Here's the detailed auth flow breakdown from the existing Vue implementation:

**Google Auth Flow:**

1. User clicks "Sign up with Google" in `AuthSignupView.vue`
2. `AuthService.auth('google')` redirects to Google OAuth via `window.location.href = GoogleConfig.redirectUri`
3. After Google auth completes, user is redirected to `/loading` route with `id_token` in query params
4. `AuthLoadingView.vue`:
   - Creates Firebase credential with `GoogleAuthProvider.credential(idToken)`
   - Signs in to Firebase with `signInWithCredential()`
   - Verifies token with backend via `/api/verify_t2`
   - Redirects to `/setup` or `/` based on onboarding status
