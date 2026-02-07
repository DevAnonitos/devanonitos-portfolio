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
    "bradlc.vscode-tailwindcss"
    "esbenp.prettier-vscode"
    "GitHub.vscode-pull-request-github"
    "dsznajder.es7-react-js-snippets"
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