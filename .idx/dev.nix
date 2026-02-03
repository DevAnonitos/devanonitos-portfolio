{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.git
    pkgs.vscode
    pkgs.yamlfmt
    pkgs.nodejs_20
    pkgs.typescript
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}