# rcmd
Remote Server Control ssh like without public ip or port forwarding

It is just an idea because i don't have public IP nor i can port forward to my home server 
so i need a way to connect to my home server 

TODO:
1- make authentication and authorization
2- implement some way to generate RSA keys for server and Remote User to encrypt every command and result(END to END encryption)
3- use RSA keys for login For more security
4- implement easy and secure method for first time usage and login ( key exchange part)
5- the exec in nodejs always use app dirctory so we need a way to change directory and save it
6- some cmd need to stream output like (top) no just string result like (ls)
7- take care of user permission
8- log every thing 
9- any idea or suggestions

sorry for any English mistake

Tested on Linux OS only

put your firebase connection object in config/fireBase.js
make sure you allow unAUTH read and write


Eng. Amar Alaa
eng.amaralaa@gmail.com