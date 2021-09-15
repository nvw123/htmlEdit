# -*- coding: utf-8 -*-
# @Time    : 2019/11/5 14:22
# @Author  : JuanZi
# @FileName: log.py.py
# @Software: PyCharm

import logging


class LZLogger:
    # 设置输出的格式
    format_dict = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    def __init__(self, log_name, log_level, logger):
        # 创建一个logger
        self.logger = logging.getLogger(logger)
        self.logger.setLevel(log_level)

        # 创建一个hander，输出到控制台
        self.sh = logging.StreamHandler(stream=None)
        self.sh.setFormatter(self.format_dict)

        # 创建一个日志文件，输出到日志
        self.fh = logging.FileHandler(log_name)
        self.fh.setFormatter(self.format_dict)

        # 把处理器加到logger上
        self.logger.addHandler(self.sh)
        self.logger.addHandler(self.fh)

    def get_log(self):
        return self.logger


LzLog = LZLogger(log_name='static/log.txt', log_level=logging.DEBUG, logger="LZ").get_log()


def logging_init():
    """解决使用tornado情况，同一个日志命令输出两次"""
    logger2 = logging.getLogger('tornado')
    ch = logging.StreamHandler()
    formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    ch.setFormatter(formatter)
    logger2.addHandler(ch)