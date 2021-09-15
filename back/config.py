# -*- coding: utf-8 -*-
# @Time    : 2019/11/5 16:27
# @Author  : JuanZi
# @FileName: config.py
# @Software: PyCharm

import configparser
from log import LzLog
from db_query import Mysql_Impl


class MyConfig:
    def __init__(self):
        self._config_parser = configparser.ConfigParser()
        self._file_name = 'static/config.ini'

        self.db_host = ""
        self.db_password = ""
        self.db_port = ""
        self.db_username = ""
        self.db_name = ""

    def load_config(self):
        try:
            if self._config_parser.read(self._file_name, encoding="utf-8"):
                LzLog.info('load config.ini ...... OK ')
                return True
        except Exception as e:
            LzLog.error('read config.ini err:%s' % e)
        return False


    def set_mysql_config(self):
        """配置Mysql"""
        try:
            Mysql_Impl.set_db_config(self.db_host, self.db_port,
                                     self.db_name, self.db_username,
                                     self.db_password)
        except Exception as e:
            LzLog.error('设置 MySQL 配置信息Error:%s' % e)
            return False
        return True


MyConfig_Impl = MyConfig()





