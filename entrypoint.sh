#!/usr/bin/env sh

case ${NODE_ENV} in
  ("development") export CONFD_PREFIX="/dev"; export CONFD_ARGS="-log-level debug";;
  ("production") export CONFD_PREFIX="/prd";;
esac

confd \
  --onetime \
  -prefix ${CONFD_PREFIX} \
  -confdir ./confd \
  -config-file ./confd/confd.toml \
  ${CONFD_ARGS}

${@}
