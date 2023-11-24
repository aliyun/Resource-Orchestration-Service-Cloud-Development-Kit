import ros_cdk_core as core
import ros_cdk_ecs as ecs


class ECS_SVN_svnserve_CentOS_7(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        """
        Note：
        The following code only cover the deployment and configuration part of SVN in the documentation.        
        
        The ECS created in the script has the following configuration:
        Instance type: ecs.c6.large(default value), you may choose other instance types in the template
        OS: CentOS 7.2 64-bit public image
        Network type：VPC
        Security group：Inbound rules are added to the security groups to allow traffic on port 22, 80, 443, 3690
        Public IP: assigned
        
        SVN: 1.7.14

        """

        core.RosInfo(self, core.RosInfo.description,
                     "The stack is used for deploying SVN by svnsever on an ECS instance.")

        # Parameters - Set parameters for the template
        # ECS password parameter
        ecs_password_param = core.RosParameter(self,
                                               "ECSPassword",
                                               type=core.RosParameterType.STRING,
                                               association_property="ALIYUN::ECS::Instance::Password",
                                               )

        # ECS image ID parameter
        image_id_param = core.RosParameter(self,
                                           "ImageId",
                                           default_value='centos_7_04_64_20G_alibase_201701015.vhd',
                                           type=core.RosParameterType.STRING,
                                           description={
                                               "zh-cn": "镜像ID",
                                               "en": "Image ID"
                                           },
                                           label="公共镜像CentOS_7_4_64位"
                                           )
        # ECS instance type parameter
        instance_type_param = core.RosParameter(self,
                                                "InstanceType",
                                                association_property='ALIYUN::ECS::Instance::InstanceType',
                                                association_property_metadata={
                                                    "ZoneId": "ZoneId"
                                                },
                                                default_value="ecs.c6.large",
                                                label="Instance Type",
                                                type=core.RosParameterType.STRING,
                                                description={
                                                    "zh-cn": "<font color='blue'><b>1.选择机型前请先确认当前可用区下该机型是否有货，部分机型需要提前报备</b></font><br><font color='blue'><b>2.可选机型列表</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB 内网带宽1Gbps 内网收发包30万PPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB 内网带宽1.5Gbps 内网收发包50万PPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB 内网带宽2.5Gbps 内网收发包80万PPS</font>]",
                                                    "en": "<font color='blue'><b>1.Before selecting the model please confirm that the current available zone under the model is in stock, some models need to be reported in advance</b></font><br><font color='blue'><b>2.List of optional models</font><br></b></font>[ecs.c5.large <font color='green'>2vCPU 4GiB Intranet bandwidth1Gbps In-grid sending and receiving packages30MillionPPS</font>]<br></b>[ecs.c5.xlarge <font color='green'>4vCPU 8GiB Intranet bandwidth1.5Gbps In-grid sending and receiving packages50MillionPPS</font>]<br></b>[ecs.c5.2xlarge <font color='green'>8vCPU 16GiB Intranet bandwidth2.5Gbps In-grid sending and receiving packages80MillionPPS</font>]"
                                                })

        # Zone id parameter
        zone_id_param = core.RosParameter(
            self,
            "ZoneId",
            type=core.RosParameterType.STRING,
            association_property="ALIYUN::ECS::Instance::ZoneId",
        )

        # Resources - Create resources in the template
        # Create a VPC
        vpc = ecs.Vpc(self, "VPC", ecs.VPCProps(
            cidr_block='10.0.0.0/8',
            vpc_name='svn-svnserve-centos-7-ros-cdk-vpc',
            description='This is ros python cdk test'
        ))
        # Create a vSwitch
        vswitch = ecs.VSwitch(
            self,
            "VSwitch",
            ecs.VSwitchProps(
                zone_id=zone_id_param,
                vpc_id=vpc.resource.ref,
                cidr_block="10.0.0.0/16",
            )
        )
        # Create a security group
        sg = ecs.SecurityGroup(
            self,
            "SecurityGroup",
            ecs.SecurityGroupProps(
                vpc_id=vpc.resource.ref,
            ),
        )

        # Allow traffic on port 22, 80, 443, 3690
        for port in ["22", "80", "443", "3690"]:
            ecs.SecurityGroupIngress(
                self,
                "SecurityGroupIngress_" + port,
                ecs.SecurityGroupIngressProps(
                    security_group_id=sg.resource.ref,
                    source_cidr_ip="0.0.0.0/0",
                    ip_protocol="tcp",
                    nic_type="intranet",
                    port_range=port + "/" + port,
                )
            )

        # Create an ECS instance
        ecs_instance = ecs.Instance(self, "ECS-demo", ecs.InstanceProps(
            instance_name='ecs-svn-svnserve-ros-python-cdk',
            vpc_id=vpc.resource.ref,
            v_switch_id=vswitch.resource.ref,
            security_group_id=sg.resource.ref,
            image_id=image_id_param,
            instance_type=instance_type_param,
            instance_charge_type='PayAsYouGo',
            password=ecs_password_param,
        ))

        # Install SVN on the ECS instance
        install_web = ecs.RunCommand(
            self,
            "InstallWeb",
            ecs.RunCommandProps(
                instance_ids=[ecs_instance.attr_instance_id],
                type="RunShellScript",
                sync=True,
                timeout=600,
                command_content="sudo yum install -y subversion \n"
                                "svnserve --version \n"
                                "ros-notify -d '{\"data\" : \"Install SVN.\"}'\n"
                                # Install SVN by using svnserve
                                # Configure SVN
                                "sudo mkdir /var/svn \n"
                                "cd /var/svn \n"
                                "sudo svnadmin create /var/svn/svnrepos \n"
                                "cd svnrepos \n"
                                "ls \n"

                                # Configure the username and password of the SVN repository
                                "cd conf/ \n"
                                "sudo echo 'userTest = passWDTest' >> passwd \n"

                                # Configure the read and write permissions for the account
                                "sudo echo '[/]' >> authz \n"
                                "sudo echo 'userTest=rw' >> authz \n"

                                # Modify the configurations of SVN
                                "sudo sed -i 's/# anon-access = read/anon-access = read/' svnserve.conf \n"
                                "sudo sed -i 's/# auth-access = write/auth-access = write/' svnserve.conf \n"
                                "sudo sed -i 's/# password-db = passwd/password-db = passwd/' svnserve.conf \n"
                                "sudo sed -i 's/# authz-db = authz/authz-db = authz/' svnserve.conf \n"
                                "sudo sed -i 's/# realm = My First Repository/realm = \/var\/svn\/svnrepos/' svnserve.conf \n"

                                # Start the SVN repository
                                "sudo svnserve -d -r /var/svn/svnrepos/ \n"
                                "ps -ef |grep svn \n"
            ),
        )

        # Output - Set output for the template
        core.RosOutput(self, "URL of repository",
                       value=core.FnJoin("", ["svn://", ecs_instance.attr_public_ip])
                       )
