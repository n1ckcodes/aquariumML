export default function LoginForm(){
    <>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input
        type="text"
        class="input input-bordered w-full max-w-xs"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label class="label"></label>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        class="input input-bordered w-full max-w-xs"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label class="label"></label>
    </div>
    <button class="btn"  onClick={(e) => submit()}>Login</button>
  </>
}