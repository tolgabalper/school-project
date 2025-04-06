/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install --formulae nvm git
cd ~/Downloads
git clone https://github.com/tolgabalper/school-project.git
mv school-project proje-tolga
nvm install 22
echo "new tab for cms and another for site"
echo "GET ENV FOR CMS FROM EMAIL"