# -*- coding: utf-8 -*-
# Copyright (c) 2020 Aliyun.com All right reserved. This software is the
# confidential and proprietary information of Aliyun.com ("Confidential
# Information"). You shall not disclose such Confidential Information and shall
# use it only in accordance with the terms of the license agreement you entered
# into with Aliyun.com .

# create by yingzhao via Code Generator at 2024/3/13 14:29

import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_rds as rds
import ros_cdk_ros as ros
import ros_cdk_vpc as vpc


class DataTransmissionFromEcsToRdsStack(core.Stack):
    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        core.RosInfo(self, core.RosInfo.description, {
            "en": "Data transmission from ECS self-built database to RDS database",
            "zh-cn": "ECS自建数据库迁移至RDS数据库"
        })

        zone_id = core.RosParameter(
            self,
            "ZoneId",
            type=core.RosParameterType.STRING,
            label="可用区",
            association_property="ALIYUN::ECS::Instance::ZoneId",
            description={
                "en": "The zone to which the ECS and RDS instances belong.",
                "zh-cn": "用于创建ECS和RDS的可用区。"
            }
        )

        ecs_instance_type = core.RosParameter(
            self,
            "EcsInstanceType",
            type=core.RosParameterType.STRING,
            label="ECS实例规格",
            default_value="ecs.e-c1m1.large",
            association_property="ALIYUN::ECS::Instance::InstanceType",
            association_property_metadata={
                "InstanceChargeType": "PostPaid",
                "ZoneId": zone_id,
                "SystemDiskCategory": "cloud_essd"
            },
            description={
                "en": "The instance type of the ECS instance.",
                "zh-cn": "ECS实例规格。"
            }
        )

        instance_password = core.RosParameter(
            self,
            "InstancePassword",
            type=core.RosParameterType.STRING,
            label="实例密码",
            association_property="ALIYUN::ECS::Instance::Password",
            description={
                "en": "Server login password, Length 8-30, must contain three("
                      "Capital letters, lowercase letters, numbers, "
                      "()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)",
                "zh-cn": "服务器登录密码，长度8-30，必须包含三项（大写字母、小写字母、数字、 ()`~!@#$%^&*_-+=|{}["
                         "]:;'<>,.?/ 中的特殊符号）"
            },
            constraint_description={
                "en": "Length 8-30, must contain three(Capital letters, lowercase "
                      "letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special "
                      "symbol in)",
                "zh-cn": "长度8-30，必须包含三项（大写字母、小写字母、数字、 ()`~!@#$%^&*_-+=|{}[]:;'<>,"
                         ".?/ 中的特殊符号）"
            },
            no_echo=True
        )

        db_instance_engine_and_version = core.RosParameter(
            self,
            "DBInstanceEngineAndVersion",
            type=core.RosParameterType.STRING,
            label="数据库引擎和版本",
            description={
                "en": "Database instance engine type and version, default: MySQL 8.0",
                "zh-cn": "数据库引擎类型及版本，默认为MySQL 8.0"
            },
            default_value="MySQL 8.0"
        )

        db_instance_class = core.RosParameter(
            self,
            "DBInstanceClass",
            type=core.RosParameterType.STRING,
            description="在模拟数据迁移体验中，您可以选择最小规格的数据库实例作为迁移目标实例，以减少成本。在生产环境中选择迁移目标实例，需要确保其规格满足您的业务需求。",
            label="迁移目标RDS实例规格",
            association_property="ALIYUN::RDS::Instance::InstanceType",
            association_property_metadata={
                "ZoneId": zone_id,
                "EngineVersion": "8.0",
                "DBInstanceStorageType": "cloud_essd",
                "Engine": "MySQL",
                "Category": "HighAvailability",
            },
            default_value="mysql.n2m.small.2c"
        )

        db_user_name = core.RosParameter(
            self,
            "DBUserName",
            type=core.RosParameterType.STRING,
            label="数据库用户名",
            constraint_description={
                "en": "Consist of 2 to 16 characters of lowercase letters, underline. Must begin with a letter and be "
                      "end with an alphanumeric character",
                "zh-cn": "由 2 到 16 个小写字母组成，下划线。必须以字母开头，以字母数字字符结尾"
            },
            min_length=2,
            max_length=16
        )

        db_password = core.RosParameter(
            self,
            "DBPassword",
            type=core.RosParameterType.STRING,
            label="数据库密码",
            constraint_description={
                "en": "Consist of 8 to 32 characters consist of alphanumeric characters, hyphen and underline",
                "zh-cn": "由 8 到 32 个字符由字母数字字符、连字符和下划线组成"
            },
            no_echo=True,
            min_length=8,
            max_length=32
        )

        wait_condition_handle = ros.WaitConditionHandle(self, "WaitConditionHandle")

        wait_condition = ros.WaitCondition(self, "WaitCondition", ros.WaitConditionProps(
            count=1,
            handle=wait_condition_handle.ref,
            timeout=3600
        ))

        vpc_i = ecs.Vpc(self, "Vpc", ecs.VPCProps(
            vpc_name="database-migration-test",
            cidr_block="192.168.0.0/16",
        ))

        vsw = ecs.VSwitch(self, "VSwitch", ecs.VSwitchProps(
            zone_id=zone_id,
            vpc_id=vpc_i.ref,
            cidr_block="192.168.0.0/24"
        ))

        sg = ecs.SecurityGroup(self, "SecurityGroup", ecs.SecurityGroupProps(
            vpc_id=vpc_i.ref,
            security_group_name="SG-DTS-GROUP-20220101"
        ))

        sg_ingress = ecs.SecurityGroupIngress(self, "SecurityGroupIngress", ecs.SecurityGroupIngressProps(
            source_cidr_ip="0.0.0.0/0",
            ip_protocol="all",
            security_group_id=sg.ref,
            port_range="-1/-1"
        ))

        webserver = ecs.Instance(self, "Webserver", ecs.InstanceProps(
            zone_id=zone_id,
            vpc_id=vpc_i.ref,
            v_switch_id=vsw.ref,
            security_group_id=sg.ref,
            instance_type=ecs_instance_type,
            instance_name="Webserver",
            image_id="aliyun_3_x64_20G_alibase_20230629.vhd",
            password=instance_password,
            io_optimized="optimized",
            internet_max_bandwidth_out=80,
            system_disk_category="cloud_efficiency",
            allocate_public_ip=False,
            user_data=core.Fn.replace(
                {
                    "ros-notify": wait_condition_handle.attr_curl_cli,
                },
                core.Fn.join("", [
                    "#!/bin/sh",
                    "\n",
                    "DatabaseUser='wordpressuser'\n",
                    "DatabasePwd='password'\n",
                    "DatabaseName='wordpressdb'\n",
                    "DatabaseHost='localhost'\n",
                    "yum update -y\n",
                    "yum install -y unzip zip\n",
                    "yum install -y mysql-server\n",
                    "systemctl start mysqld\n",
                    "systemctl enable mysqld\n",
                    "mysql -e \"CREATE DATABASE wordpressdb;\"\n",
                    "mysql -e \"CREATE USER 'wordpressuser'@'localhost' IDENTIFIED BY 'password';\"\n",
                    "mysql -e \"GRANT ALL PRIVILEGES ON wordpressdb.* TO 'wordpressuser'@'localhost';\"\n",
                    "mysql -e \"FLUSH PRIVILEGES;\"\n",
                    "mysql -e \"CREATE USER dtssync1 IDENTIFIED BY 'P@ssw0rd';\"\n",
                    "mysql -e \"GRANT ALL ON *.* TO 'dtssync1'@'%';\"\n",
                    "mysql -e \"FLUSH PRIVILEGES;\"\n",
                    "mysql -e \"SET GLOBAL binlog_format = 'ROW';\"\n",
                    "yum install -y nginx\n",
                    "systemctl start nginx\n",
                    "systemctl enable nginx\n",
                    "yum install -y php php-fpm php-mysqlnd\n",
                    "systemctl start php-fpm\n",
                    "systemctl enable php-fpm\n",
                    "cd /usr/share/nginx/html\n",
                    "wget http://wordpress.org/latest.tar.gz\n",
                    "tar xzvf latest.tar.gz\n",
                    "cp -R wordpress/* .\n",
                    "rm -R wordpress\n",
                    "rm -R wordpress\n",
                    "cp wp-config-sample.php wp-config.php\n",
                    "sed -i \"s/database_name_here/$DatabaseName/\" wp-config.php\n",
                    "sed -i \"s/username_here/$DatabaseUser/\" wp-config.php\n",
                    "sed -i \"s/password_here/${DatabasePwd:-$DatabasePwdDef}/\" wp-config.php\n",
                    "sed -i \"s/localhost/$DatabaseHost/\" wp-config.php\n",
                    "systemctl restart nginx\n",
                    "systemctl restart php-fpm\n",
                    "ros-notify\n"
                ])
            )
        ))

        eip = vpc.Eip(self, "Eip", vpc.EIPProps(
            bandwidth=50,
            instance_charge_type="Postpaid",
            internet_charge_type="PayByTraffic"
        ))

        eip_association = vpc.EIPAssociation(self, "EipAssociation", vpc.EIPAssociationProps(
            allocation_id=eip.ref,
            instance_id=webserver.ref
        ))

        eip_association.add_dependency(webserver)
        eip_association.add_dependency(eip)

        db = rds.DBInstance(self, "Database", rds.DBInstanceProps(
            zone_id=zone_id,
            vpc_id=vpc_i.ref,
            v_switch_id=vsw.ref,
            db_instance_class=db_instance_class,
            db_instance_description="Test for database migration",
            db_instance_storage=20,
            category="HighAvailability",
            db_instance_storage_type="cloud_essd",
            engine="MySQL",
            slave_zone_ids=["Auto"],
            engine_version="8.0",
            security_ip_list=core.Fn.join(",", [webserver.attr_private_ip, eip.attr_eip_address]),
            master_username=db_user_name,
            master_user_password=db_password,
            master_user_type="Super"
        ))

        core.RosOutput(
            self,
            "ECSWordPressUrl",
            value=core.Fn.join("", [
                "http://",
                eip.attr_eip_address
            ]),
            description="WordPress default address."
        )

        core.RosOutput(
            self,
            "ECSInstanceUser",
            value=core.Fn.join("", [
                "USERNAME: root ; PASSWORD: ",
                instance_password
            ]),
            description="Username and password for logging in to ECS instance"
        )

        core.RosOutput(
            self,
            "WPUserForSQL",
            value="USERNAME: wordpressuser ; PASSWORD: password",
            description="ECS-hosted database username and password for executing SQL"
        )

        core.RosOutput(
            self,
            "WPUserForDTS",
            value="USERNAME: dtssync1 ; PASSWORD: P@ssw0rd",
            description="ECS-hosted database username and password for connecting to DTS"
        )

        core.RosOutput(
            self,
            "RDSUserDTS",
            value=core.Fn.join("", [
                "USERNAME: ",
                db_user_name,
                " ; PASSWORD: ",
                db_password
            ]),
            description="RDS username and password for connecting to DTS"
        )
