using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `SecurityGroup`.</summary>
    [JsiiInterface(nativeType: typeof(ISecurityGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ISecurityGroup")]
    public interface ISecurityGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute InnerAccessPolicy: Network connectivity policy within the security group.</summary>
        [JsiiProperty(name: "attrInnerAccessPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerAccessPolicy
        {
            get;
        }

        /// <summary>Attribute Permissions: A collection of Security Group permission rules.</summary>
        [JsiiProperty(name: "attrPermissions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPermissions
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupName: The security group name.</summary>
        [JsiiProperty(name: "attrSecurityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupName
        {
            get;
        }

        /// <summary>Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.</summary>
        [JsiiProperty(name: "attrSecurityGroupReferences", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupReferences
        {
            get;
        }

        /// <summary>Attribute SecurityGroupType: Security group type.</summary>
        [JsiiProperty(name: "attrSecurityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupType
        {
            get;
        }

        /// <summary>Attribute ServiceId: The virtual quotient ID corresponding to the security group.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceId
        {
            get;
        }

        /// <summary>Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.</summary>
        [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceManaged
        {
            get;
        }

        /// <summary>Attribute Tags: The tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcId: Secure the group's proprietary network.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.SecurityGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `SecurityGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ISecurityGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerAccessPolicy: Network connectivity policy within the security group.</summary>
            [JsiiProperty(name: "attrInnerAccessPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerAccessPolicy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Permissions: A collection of Security Group permission rules.</summary>
            [JsiiProperty(name: "attrPermissions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPermissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupId: Security group ID.</summary>
            [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupName: The security group name.</summary>
            [JsiiProperty(name: "attrSecurityGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.</summary>
            [JsiiProperty(name: "attrSecurityGroupReferences", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupReferences
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupType: Security group type.</summary>
            [JsiiProperty(name: "attrSecurityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceId: The virtual quotient ID corresponding to the security group.</summary>
            [JsiiProperty(name: "attrServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.</summary>
            [JsiiProperty(name: "attrServiceManaged", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceManaged
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: Secure the group's proprietary network.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.SecurityGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ISecurityGroupProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
