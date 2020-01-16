from time import sleep
import serial
ser = serial.Serial("/dev/ttyACM0",9600)
while True:
    data = ser.readline()
    # print(data.decode("utf-8"),end="")
    print(data.decode('utf-8'),end="")