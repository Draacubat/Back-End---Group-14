export function requireAdmin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  if (req.user.role !== "admin") {
    return res.status(403).send("Access denied – admins only.");
  }

  next();
}
