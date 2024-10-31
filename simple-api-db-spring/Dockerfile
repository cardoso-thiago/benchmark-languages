FROM eclipse-temurin:21.0.5_11-jre-noble

WORKDIR /app
COPY build/libs/simple-api-db-spring-0.0.1-SNAPSHOT.jar /app/simple-api-db-spring-0.0.1-SNAPSHOT.jar
ENV JAVA_OPTS="-Xms512m -Xmx1536m -XX:MaxMetaspaceSize=128m"
CMD ["sh", "-c", "java $JAVA_OPTS -jar /app/simple-api-db-spring-0.0.1-SNAPSHOT.jar"]