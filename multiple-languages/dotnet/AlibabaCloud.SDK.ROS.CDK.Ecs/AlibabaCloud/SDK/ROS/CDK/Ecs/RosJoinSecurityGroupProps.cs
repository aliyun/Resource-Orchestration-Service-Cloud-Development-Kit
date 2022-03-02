using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::JoinSecurityGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosJoinSecurityGroupProps")]
    public class RosJoinSecurityGroupProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosJoinSecurityGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group id to join.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance Id to the join the security group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIdList: The comma delimited instance id list.If the property "InstanceId" is setting, this property will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIdList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceIdList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceList: Network interface list.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkInterfaceList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetworkInterfaceList
        {
            get;
            set;
        }
    }
}
