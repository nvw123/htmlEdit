# -*- coding: utf-8 -*-
# @Time    : 2019/11/5 14:10
# @Author  : JuanZi
# @FileName: main.py
# @Software: PyCharm
import os, sys
import tornado.web
import tornado.ioloop
import threading
from log import LzLog, logging_init
from tornado.options import define, options
import tornado.httpserver
from config import MyConfig_Impl
from tornado.web import StaticFileHandler
import asyncio
from api import EquOperation, File, GetFiles


class MainServer(threading.Thread):
    def run(self):
        asyncio.set_event_loop(asyncio.new_event_loop())
        current_path = os.path.dirname("__file__")  # 上一层目录
        # 定义一个默认的端口
        define('port', default=85, help='run port', type=int)

        app = tornado.web.Application(
            [
                (r'/get_files', GetFiles),
                (r'/file', File),
                (r"/(.*\.html.*)", StaticFileHandler, {"path": os.path.join(current_path, "static")}),
                (r"/(.*)", StaticFileHandler, {"path": os.path.join(current_path, "static")}),

            ],
            template_path=os.path.join(os.path.dirname("__file__"), "static"),
            static_path=os.path.join(os.path.dirname("__file__"), "static"),
            debug=True
        )
        # tornado.options.options.logging = None  # 关闭tornado的打印日志， 必须在options.parse_command_line() 前面
        options.parse_command_line()  # 参数设置到全局options对象相关属性上
        http_server = tornado.httpserver.HTTPServer(app)
        http_server.listen(options.port)
        LzLog.info("service start %s" % options.port)
        tornado.ioloop.IOLoop.instance().start()


def init():
    if not MyConfig_Impl.load_config():
        LzLog.error('load ini file fail, exit')
        exit(-1)

    if not MyConfig_Impl.set_mysql_config():
        LzLog.error('set mysql config error')
        exit(-1)


if __name__ == "__main__":
    MainServer().start()  # tornado


