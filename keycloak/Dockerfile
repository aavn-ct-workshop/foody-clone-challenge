FROM quay.io/keycloak/keycloak:13.0.1

COPY realm.json /tmp/realm.json

ENV KEYCLOAK_USER admin
ENV KEYCLOAK_PASSWORD admin

ENV DB_VENDOR h2

ENV KEYCLOAK_IMPORT /tmp/realm.json