using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.SecurityGroupCloneProps")]
    public class SecurityGroupCloneProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupCloneProps
    {
        /// <summary>Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.</summary>
        /// <remarks>
        /// If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
        /// </remarks>
        [JsiiProperty(name: "sourceSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceSecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the security group, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property destinationRegionId: Clone security group to the specified region.</summary>
        /// <remarks>
        /// Default to current region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestinationRegionId
        {
            get;
            set;
        }

        /// <summary>Property networkType: Clone new security group as classic network type.</summary>
        /// <remarks>
        /// If the VpcId is specified, the value will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NetworkType
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityGroupName
        {
            get;
            set;
        }

        /// <summary>Property securityGroupType: The type of the security group.</summary>
        /// <remarks>
        /// Valid values:
        /// normal: basic security group
        /// enterprise: advanced security group
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SecurityGroupType
        {
            get;
            set;
        }

        /// <summary>Property vpcId: Physical ID of the VPC.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcId
        {
            get;
            set;
        }
    }
}
