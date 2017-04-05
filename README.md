# The backend of a quick project called neo-static
This is just the backend. To get the front end code go to [neo-static](https://github.com/Triforcey/neo-static).
## Important! This only runs on the Raspberry Pi!
To start it you need to have the SERIAL\_PORT enviorment variable point to the Arduino. On the RPI this is usually: `/dev/ttyACM0`
Then install dependencies with: `npm install`
Make sure you have the Arduino pluged in and running the correct program, and start with: 'npm start'
You'll need to have a floating wire connected to every GPIO port. That's all the green ones on this pic:
![RPI3 Pinout](https://www.element14.com/community/servlet/JiveServlet/previewBody/73950-102-10-339300/pi3_gpio.png)


Bundle the wires in some tinfoil for some fun. ;)
