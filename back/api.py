# -*- coding: utf-8 -*-
# @Time    : 2019/11/6 16:30
# @Author  : JuanZi
# @FileName: dbconfig.py
# @Software: PyCharm
from tornado.web import RequestHandler
from common import args_to_dict, get_res_info
from db_query import Mysql_Impl
import json
import os
from log import LzLog


class BaseHandler(RequestHandler):
    """
    http 请求基类,主要处理跨域以及
    """

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Credentials", "true")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')


class Equ(BaseHandler):
    data = {"total":5, "data":
        [{
        "id": 1,
        "name": '王小虎',
        "uuid": '001',
        "online_state": 'false',
        "last_inline_time": '2020-10-10',
        "pro_list": '1,2',
        "pubilch_state": 'false',
        "ip": '127.0.0.1'
    },
        {
            "id": 2,
            "name": '王小虎',
            "uuid": '001',
            "online_state": 'false',
            "last_inline_time": '2020-10-10',
            "pro_list": '1,2',
            "pubilch_state": 'false',
            "ip": '127.0.0.1'
        },
        {
            "id": 3,
            "name": '王小虎',
            "uuid": '001',
            "online_state": 'false',
            "last_inline_time": '2020-10-10',
            "pro_list": '1,2',
            "pubilch_state": 'false',
            "ip": '127.0.0.1'
        },
        {
            "id": 4,
            "name": '王小虎',
            "uuid": '001',
            "online_state": 'false',
            "last_inline_time": '2020-10-10',
            "pro_list": '1,2',
            "pubilch_state": 'false',
            "ip": '127.0.0.1'
        },
        {
            "id": 5,
            "name": '王小虎',
            "uuid": '001',
            "online_state": 'false',
            "last_inline_time": '2020-10-10',
            "pro_list": '1,2',
            "pubilch_state": 'false',
            "ip": '127.0.0.1'
        }
    ]}

    def get(self, *args, **kwargs):
        return self.write(dict(resCode=0, data=self.data))

    def put(self, *args, **kwargs):
        data = args_to_dict(self)
        self.data[0].update(name=data["name"], uuid=data["uuid"], pro_list=data["pro_list"])
        return self.write(dict(resCode=0, data=''))


class EquOperation(BaseHandler):
    def put(self, *args, **kwargs):
        data = args_to_dict(self)
        return self.write(dict(resCode=0, data=''))


class File(BaseHandler):
    def post(self, *args, **kwargs):
        try:
            data = args_to_dict(self)
            code = data["data"]
            path = "static/" + data["path"]
            if code == '':
                self.write(dict(resCode=-1, resMsg='保存的数据为空'))
            elif not isinstance(code, str):
                self.write(dict(resCode=-1, resMsg='保存数据类型不对 %s' % type(code)))
            else:
                with open(path, 'w', encoding='utf-8') as up:
                    up.write(code)
                self.write(dict(resCode=0, resMsg=''))
        except Exception as e:
            LzLog.error('保存文件错误 %s' % e)
            self.write(dict(resCode=-1, resMsg='保存文件错误 %s' % e))

    def get(self, *args, **kwargs):
        data = args_to_dict(self)
        path = "static/" + data["path"]
        try:
            with open(path, 'r', encoding='utf-8') as up:
                code = up.read()
            self.write(dict(resCode=0, resMsg='', resData=code))
        except Exception as e:
            LzLog.error('读取文件错误 %s' % e)
            self.write(dict(resCode=-1, resMsg='读取文件错误 %s' % e))


class GetFiles(BaseHandler):
    def get(self, *args, **kwargs):
        try:
            with open('static/file.json', 'r', encoding='utf-8') as up:
                code = up.read()
            self.write(dict(resCode=0, resMsg='', resData=code))
        except Exception as e:
            LzLog.error('读取文件错误 %s' % e)
            self.write(dict(resCode=-1, resMsg='读取文件错误 %s' % e))


