FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0.10-bookworm-slim AS runtime
WORKDIR /app

COPY --from=build /app .
ENV DOTNET_GC_MEMORYPRESSURE=1536
ENTRYPOINT ["dotnet", "SimpleApiDbDotnet.dll"]