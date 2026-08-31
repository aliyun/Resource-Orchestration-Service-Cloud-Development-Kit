using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SecurityGroupClone`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupCloneProps")]
    public interface ISecurityGroupCloneProps
    {
        /// <summary>Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.</summary>
        /// <remarks>
        /// If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
        /// </remarks>
        [JsiiProperty(name: "sourceSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceSecurityGroupId
        {
            get;
        }

        /// <summary>Property description: The description of the security group.</summary>
        /// <remarks>
        /// The description must be 2 to 256
        /// characters in length. It cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// By default, this parameter is left empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationRegionId: Clone security group to the specified region.</summary>
        /// <remarks>
        /// Default to current region.
        /// </remarks>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: Clone new security group as classic network type.</summary>
        /// <remarks>
        /// If the VpcId is specified, the value will be ignored.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupName: The name of the security group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length.
        /// The name must start with a letter and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// The name can contain letters, digits, colons (:), underscores (_), periods (.),
        /// and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupType: The type of the security group.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>normal: basic security group</description>
        /// <description>enterprise: advanced security group
        /// Default value: normal.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC in which you want to create the security group.</summary>
        /// <remarks>
        ///     The VpcId parameter is required only if you want to create security groups of
        ///     the VPC type.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecurityGroupClone`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupclone
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupCloneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupCloneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.</summary>
            /// <remarks>
            /// If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
            /// </remarks>
            [JsiiProperty(name: "sourceSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the security group.</summary>
            /// <remarks>
            /// The description must be 2 to 256
            /// characters in length. It cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// By default, this parameter is left empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationRegionId: Clone security group to the specified region.</summary>
            /// <remarks>
            /// Default to current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: Clone new security group as classic network type.</summary>
            /// <remarks>
            /// If the VpcId is specified, the value will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupName: The name of the security group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length.
            /// The name must start with a letter and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// The name can contain letters, digits, colons (:), underscores (_), periods (.),
            /// and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupType: The type of the security group.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>normal: basic security group</description>
            /// <description>enterprise: advanced security group
            /// Default value: normal.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC in which you want to create the security group.</summary>
            /// <remarks>
            ///     The VpcId parameter is required only if you want to create security groups of
            ///     the VPC type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
