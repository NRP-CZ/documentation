docker run -it --rm --mount type=bind,src=.,dst=/nextra -p 3000:3000 $(docker build -q .)
