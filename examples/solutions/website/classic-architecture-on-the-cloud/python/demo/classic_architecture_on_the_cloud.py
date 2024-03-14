import ros_cdk_core as core
import ros_cdk_ecs as ecs
import ros_cdk_polardb as polardb
import ros_cdk_alb as alb


class ClassicArchitectureOnTheCloudStack(core.Stack):
    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        core.RosInfo(self, core.RosInfo.description, {
            "en": "Classic architecture on the cloud",
            "zh-cn": "云上经典架构"
        })

        zone_1 = core.RosParameter(
            self,
            "Zone1",
            type=core.RosParameterType.STRING,
            label="可用区1",
            association_property="ALIYUN::ECS::Instance::ZoneId",
            association_property_metadata={
                "AutoSelectFirst": True,
                "ExclusiveTo": [
                    "Zone2"
                ]
            }
        )
        zone_2 = core.RosParameter(
            self,
            "Zone2",
            type=core.RosParameterType.STRING,
            label="可用区2",
            association_property="ALIYUN::ECS::Instance::ZoneId",
            association_property_metadata={
                "AutoSelectFirst": True,
                "ExclusiveTo": [
                    "Zone1"
                ]
            }
        )
        ecs_instance_type_1 = core.RosParameter(
            self,
            "EcsInstanceType1",
            type=core.RosParameterType.STRING,
            label="可用区1对应实例类型",
            association_property="ALIYUN::ECS::Instance::InstanceType",
            association_property_metadata={
                "InstanceChargeType": "PostPaid",
                "SpotStrategy": "SpotAsPriceGo",
                "ZoneId": zone_1,
                "SystemDiskCategory": "cloud_essd"
            },
            description={
                "en": "If no available specifications are displayed, please "
                      "select Modify Availability Zone and try again.",
                "zh-cn": "如果没有可用规格显示，请选择修改可用区后重试。"
            },
            default_value="ecs.s6-c1m1.small"
        )
        ecs_instance_type_2 = core.RosParameter(
            self,
            "EcsInstanceType2",
            type=core.RosParameterType.STRING,
            label="可用区2对应实例类型",
            association_property="ALIYUN::ECS::Instance::InstanceType",
            association_property_metadata={
                "InstanceChargeType": "PostPaid",
                "SpotStrategy": "SpotAsPriceGo",
                "ZoneId": zone_2,
                "SystemDiskCategory": "cloud_essd"
            },
            description={
                "en": "If no available specifications are displayed, please "
                      "select Modify Availability Zone and try again.",
                "zh-cn": "如果没有可用规格显示，请选择修改可用区后重试。"
            },
            default_value="ecs.s6-c1m1.small"
        )
        instance_password = core.RosParameter(
            self,
            "InstancePassword",
            type=core.RosParameterType.STRING,
            label="实例密码",
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
            association_property="ALIYUN::ECS::Instance::Password",
            no_echo=True
        )
        polar_db_name = core.RosParameter(
            self,
            "PolarDBName",
            type=core.RosParameterType.STRING,
            label="数据库名称",
            default_value="wordpress"
        )
        db_node_class = core.RosParameter(
            self,
            "DBNodeClass",
            type=core.RosParameterType.STRING,
            label="PolarDB集群规格",
            default_value="polar.mysql.g2.medium"
        )
        polar_db_account_name = core.RosParameter(
            self,
            "PolarDBAccountName",
            type=core.RosParameterType.STRING,
            label="数据库登录名",
            default_value="wordpress"
        )
        polar_db_password = core.RosParameter(
            self,
            "PolarDBPassword",
            type=core.RosParameterType.STRING,
            label="数据库登录密码",
            description={
                "en": "Software login password, There are three types of uppercase and lowercase letters,  numbers, "
                      "and special characters, with a length of 8~32 characters; the special characters are !@#$%^&*("
                      ")_+-=",
                "zh-cn": "软件登录密码，大小写字母、数字、特殊字符占三种，长度为8~32个字符；特殊字符为!@#$%^&*()_+-="
            },
            constraint_description={
                "en": "There are three types of uppercase and lowercase letters, numbers, and special characters,  "
                      "with a length of 8~32 characters; the special characters are !@#$%^&*()_+-=",
                "zh-cn": "大小写字母、数字、特殊字符占三种，长度为8~32个字符；特殊字符为!@#$%^&*()_+-="
            },
            allowed_pattern="^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=])[A-Za-z\\d!@#$%^&*()_+\\-=]{8,"
                            "32}$",
            no_echo=True
        )
        common_name = core.RosParameter(
            self,
            "CommonName",
            type=core.RosParameterType.STRING,
            default_value="high-availability"
        )

        core.RosInfo(self, core.RosInfo.metadata, {
            "ALIYUN::ROS::Interface": {
                "ParameterGroups": [
                    {
                        "Parameters": [
                            "Zone1",
                            "Zone2"
                        ],
                        "Label": {
                            "default": {
                                "en": "Availability Zone",
                                "zh-cn": "可用区配置"
                            }
                        }
                    },
                    {
                        "Parameters": [
                            "EcsInstanceType1",
                            "EcsInstanceType2",
                            "InstancePassword"
                        ],
                        "Label": {
                            "default": {
                                "en": "Instance",
                                "zh-cn": "ECS实例配置"
                            }
                        }
                    },
                    {
                        "Parameters": [
                            "PolarDBName",
                            "DBNodeClass",
                            "PolarDBAccountName",
                            "PolarDBPassword"
                        ],
                        "Label": {
                            "default": {
                                "en": "PolarDB Information",
                                "zh-cn": "PolarDB配置"
                            }
                        }
                    }
                ],
                "TemplateTags": [
                    "acs:technical-solution:high-availability-architecture:云上经典架构-tech_solu_07"
                ],
                "Hidden": [
                    "CommonName"
                ]
            }
        })

        ecs_vpc = ecs.Vpc(
            self,
            "EcsVpc",
            ecs.VPCProps(
                vpc_name=core.FnSub("${CommonName}_vpc"),
                cidr_block="192.168.0.0/16"
            )
        )

        ecs_sg = ecs.SecurityGroup(
            self,
            "EcsSecurityGroup",
            ecs.SecurityGroupProps(
                vpc_id=ecs_vpc.ref,
                security_group_name=core.FnSub("${CommonName}_sg"),
                security_group_ingress=[
                    ecs.RosSecurityGroup.SecurityGroupIngressProperty(
                        port_range="3306/3306",
                        priority=1,
                        source_cidr_ip="0.0.0.0/0",
                        ip_protocol="tcp",
                        nic_type="internet"
                    ),
                    ecs.RosSecurityGroup.SecurityGroupIngressProperty(
                        port_range="22/22",
                        priority=1,
                        source_cidr_ip="0.0.0.0/0",
                        ip_protocol="tcp",
                        nic_type="internet"
                    ),
                    ecs.RosSecurityGroup.SecurityGroupIngressProperty(
                        port_range="80/80",
                        priority=1,
                        source_cidr_ip="0.0.0.0/0",
                        ip_protocol="tcp",
                        nic_type="internet"
                    ),
                    ecs.RosSecurityGroup.SecurityGroupIngressProperty(
                        port_range="443/443",
                        priority=1,
                        source_cidr_ip="0.0.0.0/0",
                        ip_protocol="tcp",
                        nic_type="internet"
                    )
                ],
                security_group_egress=[
                    ecs.RosSecurityGroup.SecurityGroupEgressProperty(
                        port_range="-1/-1",
                        priority=1,
                        dest_cidr_ip="0.0.0.0/0",
                        ip_protocol="all",
                        nic_type="internet"
                    ),
                    ecs.RosSecurityGroup.SecurityGroupEgressProperty(
                        port_range="-1/-1",
                        priority=1,
                        dest_cidr_ip="0.0.0.0/0",
                        ip_protocol="all",
                        nic_type="intranet"
                    )
                ]
            )
        )

        ecs_instance_1 = ecs.Instance(
            self,
            "EcsInstance1",
            ecs.InstanceProps(
                zone_id=zone_1,
                image_id="centos_7_9",
                io_optimized="optimized",
                system_disk_size=20,
                instance_type=ecs_instance_type_1,
                vpc_id=ecs_vpc.ref,
                password=instance_password,
                instance_name=core.FnSub("${CommonName}_ecs_1"),
                spot_strategy="SpotAsPriceGo",
                system_disk_category="cloud_essd",
                security_group_id=ecs_sg.ref
            )
        )
        _, ecs_vsw_1, _ = ecs_instance_1.auto_create_dependencies(
            zone_id=zone_1,
            v_switch_cidr_block="192.168.1.0/24"
        )

        ecs_instance_2 = ecs.Instance(
            self,
            "EcsInstance2",
            ecs.InstanceProps(
                zone_id=zone_2,
                image_id="centos_7_9",
                io_optimized="optimized",
                system_disk_size=20,
                instance_type=ecs_instance_type_2,
                vpc_id=ecs_vpc.ref,
                password=instance_password,
                instance_name=core.FnSub("${CommonName}_ecs_2"),
                spot_strategy="SpotAsPriceGo",
                system_disk_category="cloud_essd",
                security_group_id=ecs_sg.ref
            )
        )
        _, ecs_vsw_2, _ = ecs_instance_2.auto_create_dependencies(
            zone_id=zone_2,
            v_switch_cidr_block="192.168.2.0/24"
        )

        instance_run_command = ecs.RunCommand(
            self,
            "InstanceRunCommand",
            ecs.RunCommandProps(
                instance_ids=[
                    ecs_instance_1.ref,
                    ecs_instance_2.ref
                ],
                sync=True,
                type="RunShellScript",
                timeout=300,
                command_content=core.FnSub(
                    "#!/bin/bash\nyum install docker -y\nsystemctl start docker\nsystemctl enable docker.service\ndocker pull docker.io/library/wordpress:5.6\nmkdir /wordpress\ndocker run --name my-blog --restart=always -v /wordpress:/var/www/html -p 80:80 -d --env WORDPRESS_DB_HOST=${PolarDBCluster.ClusterConnectionString} --env WORDPRESS_DB_USER=${PolarDBAccountName} --env WORDPRESS_DB_PASSWORD=${PolarDBPassword} --env WORDPRESS_DB_NAME=${PolarDBName} wordpress:5.6")
            )
        )

        polar_db_cluster = polardb.DBCluster(
            self,
            "PolarDBCluster",
            polardb.DBClusterProps(
                zone_id=zone_2,
                vpc_id=ecs_vpc.ref,
                v_switch_id=ecs_vsw_2.ref,
                security_group_ids=[ecs_sg.ref],
                db_type="MySQL",
                cluster_network_type="VPC",
                db_version="8.0",
                creation_option="Normal",
                db_node_class=db_node_class,
                security_ip_list="192.168.0.0/16",
                pay_type="Postpaid"
            )
        )

        polar_db_instance = polardb.DBInstance(
            self,
            "PolarDBInstance",
            polardb.DBInstanceProps(
                db_cluster_id=polar_db_cluster.ref,
                character_set_name="utf8mb4",
                db_name=polar_db_name
            )
        )

        polar_db_account = polardb.Account(
            self,
            "PolarDBAccount",
            polardb.AccountProps(
                db_cluster_id=polar_db_cluster.ref,
                account_name=polar_db_account_name,
                account_password=polar_db_password,
                account_privilege="ReadWrite",
                account_type="Normal",
                db_name=polar_db_instance.ref
            )
        )

        alb_load_balancer = alb.LoadBalancer(
            self,
            "AlbLoadBalancer",
            alb.LoadBalancerProps(
                vpc_id=ecs_vpc.ref,
                load_balancer_name=core.FnSub("${CommonName}_alb"),
                load_balancer_edition="Basic",
                load_balancer_billing_config=alb.RosLoadBalancer.LoadBalancerBillingConfigProperty(pay_type="PostPay"),
                address_type="Internet",
                address_allocated_mode="Dynamic",
                zone_mappings=[
                    alb.RosLoadBalancer.ZoneMappingsProperty(zone_id=zone_1, v_switch_id=ecs_vsw_1.ref),
                    alb.RosLoadBalancer.ZoneMappingsProperty(zone_id=zone_2, v_switch_id=ecs_vsw_2.ref)
                ]
            )
        )

        alb_server_group = alb.ServerGroup(
            self,
            "AlbServerGroup",
            alb.ServerGroupProps(
                vpc_id=ecs_vpc.ref,
                server_group_name=core.FnSub("${CommonName}_server_group"),
                health_check_config=alb.RosServerGroup.HealthCheckConfigProperty(
                    health_check_enabled=True,
                    health_check_path="/",
                    health_check_codes=["http_2xx", "http_3xx"],
                    health_check_protocol="HTTP"
                ),
                sticky_session_config=alb.RosServerGroup.StickySessionConfigProperty(
                    sticky_session_enabled=False
                )
            )
        )

        server_attachment = alb.BackendServerAttachment(
            self,
            "ServerAttachment",
            alb.BackendServerAttachmentProps(
                server_group_id=alb_server_group.ref,
                servers=[
                    alb.RosBackendServerAttachment.ServersProperty(
                        server_id=ecs_instance_1.ref,
                        server_type="Ecs",
                        port=80,
                        weight=100
                    ),
                    alb.RosBackendServerAttachment.ServersProperty(
                        server_id=ecs_instance_2.ref,
                        server_type="Ecs",
                        port=80,
                        weight=100
                    )
                ]
            )
        )

        alb_listener = alb.Listener(
            self,
            "AlbListener",
            alb.ListenerProps(
                load_balancer_id=alb_load_balancer.ref,
                listener_port=80,
                listener_protocol="HTTP",
                default_actions=[
                    alb.RosListener.DefaultActionsProperty(
                        type="ForwardGroup",
                        forward_group_config=alb.RosListener.ForwardGroupConfigProperty(
                            server_group_tuples=[alb.RosListener.ServerGroupTuplesProperty(
                                server_group_id=alb_server_group.ref,
                            )]
                        )
                    )
                ]
            )
        )

        core.RosOutput(
            self,
            "WordPressUrl",
            description="WordPress 访问地址",
            value=core.Fn.sub(
                "http://${AlbDnsName}",
                {"AlbDnsName": alb_load_balancer.attr_dns_name}
            )
        )
