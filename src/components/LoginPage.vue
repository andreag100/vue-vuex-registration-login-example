<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue + Vuex - User Registration and Login Example & Tutorial</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        a { cursor: pointer; }
    </style>
</head>
<body>
    <template>
  <div>
    <h1>Login</h1>

    <form action="/login" method="POST">
      <input type="email" name="email" placeholder="Email">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

</body>
</html>