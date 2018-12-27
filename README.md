# otosen

## boot mosquitto at local
1. brew install mosquitto
2. change the conf as below
3. /usr/local/Cellar/mosquitto/1.5.5/sbin/mosquitto -v -c /usr/local/etc/mosquitto/mosquitto.conf

### mosquitto.conf
 # Enable both MQTT and Web Sockets
listener 1883
listener 8080 127.0.0.1
protocol web-sockets
 # Enable logs
log_dest stdout
log_dest file /var/log/mosquitto.log
log_type error
log_type warning
log_type notice
log_type information
log_type subscribe
log_type unsubscribe
