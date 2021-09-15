# -*- coding: utf-8 -*-
# @Time    : 2019/11/6 16:30
# @Author  : JuanZi
# @FileName: dbconfig.py
# @Software: PyCharm

from log import LzLog
import pymysql


class DB:
    def __init__(self, host='localhost', port=3006, db='', user='root', passwd='root', charset='utf8'):
        # 建立连接
        self.conn = pymysql.connect(host=host, port=port, db=db, user=user, passwd=passwd, charset=charset)
        # 创建游标，操作设置为字典类型
        self.cur = self.conn.cursor(cursor=pymysql.cursors.DictCursor)

    def __enter__(self):
        return self.cur

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.conn.commit()
        self.cur.close()
        self.conn.close()


class MysqlDao:
    """数据库访问接口类"""

    def __init__(self):
        self.Db_Con = None
        self.Db_Config = dict(host='', port=0, database='', user='', pasw='')

    def set_db_config(self, host, port, database, user, psw):
        """设置数据库连接配置"""
        self.Db_Config['host'] = host
        self.Db_Config['port'] = port
        self.Db_Config['db_name'] = database
        self.Db_Config['user'] = user
        self.Db_Config['psw'] = psw

    def execute_sql(self, sql):
        with DB(host=self.Db_Config['host'], user=self.Db_Config['user'], port=self.Db_Config['port'],
                passwd=self.Db_Config['psw'], db=self.Db_Config['db_name']) as db:
            try:
                db.execute(sql)
                db_data = db.fetchall()
            except Exception as e:
                LzLog.info(u"operation data failed, sql:%s" % sql)
                LzLog.info(u"renson:%s" % e)
                return False
        return db_data


Mysql_Impl = MysqlDao()
