# pdb to webm

This Docker container will convert all pdbs in the pdbs folder to webm animation of a full protein rotation

### Usage
```
docker build -t pdb2webm .

docker run --rm   -v "$PWD/pdbs:/data/pdbs"   -v "$PWD/output:/data/output"   pdb2webm
```

