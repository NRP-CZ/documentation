FROM node:21

# current directory is mounted to /nextra
RUN echo '#!/bin/bash\n\
    \n\
    set -o errexit\n\
    \n\
    npm install\n\
    npm run dev\n'> /run_nextra.sh
RUN chmod 755 /run_nextra.sh

WORKDIR /nextra

EXPOSE 3000
ENTRYPOINT [ "/run_nextra.sh" ]
