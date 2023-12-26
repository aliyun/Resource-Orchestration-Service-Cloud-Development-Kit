using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `SecurityGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SecurityGroupsProps")]
    public interface ISecurityGroupsProps
    {
        /// <summary>Property networkType: The network type of the security group.</summary>
        /// <remarks>
        /// Valid values:
        /// vpc
        /// classic
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

        /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIds: The IDs of security groups.</summary>
        /// <remarks>
        /// The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupName: The name of the security group.</summary>
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
        /// normal: basic security group
        /// enterprise: advanced security group
        /// Note If you do not specify this parameter, both basic and advanced security groups are queried.
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

        /// <summary>Property tags: Tags of securitygroup.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecurityGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.SecurityGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkType: The network type of the security group.</summary>
            /// <remarks>
            /// Valid values:
            /// vpc
            /// classic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupIds: The IDs of security groups.</summary>
            /// <remarks>
            /// The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupName: The name of the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupType: The type of the security group.</summary>
            /// <remarks>
            /// Valid values:
            /// normal: basic security group
            /// enterprise: advanced security group
            /// Note If you do not specify this parameter, both basic and advanced security groups are queried.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of securitygroup.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
