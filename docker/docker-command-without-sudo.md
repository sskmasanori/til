## Docker Command Docker Command Without Sudo
---
dockerグループを作成し、ユーザーを所属させる。
```
$ sudo gpasswd -a {user} docker
```
<br>

>The docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can access it with sudo. For this reason, docker daemon always runs as the root user. To avoid having to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.
