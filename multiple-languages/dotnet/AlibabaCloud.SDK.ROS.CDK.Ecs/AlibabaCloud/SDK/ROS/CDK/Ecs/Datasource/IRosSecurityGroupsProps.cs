using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::SecurityGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecurityGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSecurityGroupsProps")]
    public interface IRosSecurityGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkType: The network type of the security group. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the instance belongs.
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

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the security group.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
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

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: The name of the security group.
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

        /// <remarks>
        /// <strong>Property</strong>: securityGroupType: The type of the security group. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of securitygroup.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
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

        /// <summary>Properties for defining a `DATASOURCE::ECS::SecurityGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSecurityGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosSecurityGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosSecurityGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The network type of the security group. Valid values:
            /// vpc
            /// classic
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the instance belongs.
            /// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: The ID of the security group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupName: The name of the security group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupType: The type of the security group. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of securitygroup.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosSecurityGroups.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosSecurityGroups.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
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
