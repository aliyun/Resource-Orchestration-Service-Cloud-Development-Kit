using AlibabaCloud.SDK.ROS.CDK.Core;
using AlibabaCloud.SDK.ROS.CDK.Ecs;

namespace Demo
{
    public class DemoStack : Stack
    {
        public DemoStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            new Vpc(this, "vpc-from-ros-cdk", new VPCProps
            {
                VpcName = "test-ros-cdk-csharp",
                CidrBlock = "10.0.0.0/8",
                Description = "This is ros cdk test"
            });
        }
    }
}