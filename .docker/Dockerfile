FROM node:20.11.1 AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# Build
FROM deps AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production
FROM gcr.io/distroless/nodejs20-debian11:nonroot as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=build /app/public ./public
COPY --from=build --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=build --chown=nonroot:nonroot /app/.next/static ./.next/static

USER nonroot

EXPOSE 3000

CMD ["node", "server.js"]