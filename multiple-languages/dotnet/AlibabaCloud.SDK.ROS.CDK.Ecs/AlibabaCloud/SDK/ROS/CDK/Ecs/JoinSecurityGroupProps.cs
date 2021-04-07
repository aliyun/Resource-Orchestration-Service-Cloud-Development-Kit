using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::JoinSecurityGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.JoinSecurityGroupProps")]
    public class JoinSecurityGroupProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IJoinSecurityGroupProps
    {
        /// <summary>Property securityGroupId: Security group id to join.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property instanceId: Instance Id to the join the security group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <summary>Property instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIdList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceIdList
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaceList: Network interface list.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "networkInterfaceList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NetworkInterfaceList
        {
            get;
            set;
        }
    }
}
