# -*- coding: utf-8 -*-
# @Time    : 2019/11/7 10:59
# @Author  : JuanZi
# @FileName: common.py
# @Software: PyCharm

import json
from log import LzLog
import os, sys


def restart_progress():
    LzLog.info('restart service')
    python = sys.executable
    os.execl(python, python, *sys.argv)


def args_to_dict(self):
    In_Data = dict()
    if self.request.body.decode() == '':
        for k in self.request.arguments:
            In_Data[k] = self.get_argument(k)
    else:
        In_Data = json.loads(self.request.body.decode())
    return In_Data


def save_config(config):
    try:
        with open("static/cfg.json", "w") as cfg:
            cfg.write(json.dumps(config, indent=4, ensure_ascii=False))
    except Exception as e:
        LzLog.info("save to json file failed ... reason：%s" % e)


def get_config():
    ConfigDict = None
    try:
        with open("static/cfg.json", "r") as cfg:
            ConfigDict = json.load(cfg)
    except Exception as e:
        LzLog.info("load of json  file failed... reason：%s" % e)
    return ConfigDict


def get_res_info(code=0, msg="", data=None):
    """根据参数生成标准返回数据"""
    return dict(resCode=code, resMsg=msg, resData=data)
