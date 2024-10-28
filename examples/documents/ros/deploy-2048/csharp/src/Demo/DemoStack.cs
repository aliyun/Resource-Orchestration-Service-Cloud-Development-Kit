using System.Collections.Generic;
using AlibabaCloud.SDK.ROS.CDK.Core;
using AlibabaCloud.SDK.ROS.CDK.Ecs;

namespace Demo
{
    public class DemoStack : Stack
    {
        public DemoStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            // The code that defines your stack goes here
            new RosInfo(this, RosInfo.Description, "Deploy 2048 game through ROS CDK.");

            var zoneId = new RosParameter(this, "ZoneId", new RosParameterProps{
                Type = RosParameterType.STRING
            });

            var vpc = new Vpc(this, "Vpc", new VPCProps{
                CidrBlock = "192.168.0.0/16"
            });

            var sg = new SecurityGroup(this, "SecurityGroup", new SecurityGroupProps{
                VpcId = vpc.Ref
            });

            var vsw = new VSwitch(this, "VSwitch", new VSwitchProps{
                CidrBlock = "192.168.0.0/24",
                ZoneId = zoneId.Value,
                VpcId = vpc.Ref
            });

            var instance = new Instance(this, "Instance", new InstanceProps{
                VpcId = vpc.Ref,
                VSwitchId = vsw.Ref,
                SecurityGroupId = sg.Ref,
                ZoneId = zoneId.Value,
                InstanceType = "ecs.c6e.large",
                ImageId = "centos_7_8",
                SystemDiskCategory = "cloud_essd",
                IoOptimized = "optimized"
            });

            var sgIngress = new SecurityGroupIngress(this, "SecurityGroupIngress", new SecurityGroupIngressProps{
                IpProtocol = "tcp",
                PortRange = "80/80",
                SourceCidrIp = "0.0.0.0/0",
                SecurityGroupId = sg.Ref,
                NicType = "intranet"
            });

            var runCommand = new RunCommand(this, "RunCommand", new RunCommandProps{
                InstanceIds = new IResolvable[] { instance.AttrInstanceId },
                CommandContent = "yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048",
                Type = "RunShellScript",
                Timeout = 3600,
                Sync = true
            });
            runCommand.AddDependency(sgIngress);

            new RosOutput(this, "Url", new RosOutputProps{
                Value = "http://" + instance.AttrPublicIp.ToString() + ":80"
            });
        }
    }
}
