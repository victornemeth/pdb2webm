# pdb to webm

This Docker container will convert all pdbs in the pdbs folder to webm animation of a full protein rotation

### Prerequisites

- `docker`
docker Installation Guide](https://docs.docker.com/engine/install/)


### Usage

```
git clone https://github.com/victornemeth/pdb2webm.git && cd pdb2webm

docker build -t pdb2webm .

docker run --rm   -v "$PWD/pdbs:/data/pdbs"   -v "$PWD/output:/data/output"   pdb2webm
```

Takes arround 40 seconds per pdb
