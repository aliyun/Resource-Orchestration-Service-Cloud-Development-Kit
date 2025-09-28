using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae.Datasource
{
    /// <summary>Represents a `Namespace`.</summary>
    [JsiiInterface(nativeType: typeof(INamespace), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.INamespace")]
    public interface INamespace : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppCount: The number of applications.</summary>
        [JsiiProperty(name: "attrAppCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppCount
        {
            get;
        }

        /// <summary>Attribute BelongRegion: The region to which the namespace belongs.</summary>
        [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBelongRegion
        {
            get;
        }

        /// <summary>Attribute Description: The description of the namespace.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute JumpServerAppId: The ID of the jump server application.</summary>
        [JsiiProperty(name: "attrJumpServerAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJumpServerAppId
        {
            get;
        }

        /// <summary>Attribute JumpServerIp: The IP address of the jump server.</summary>
        [JsiiProperty(name: "attrJumpServerIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJumpServerIp
        {
            get;
        }

        /// <summary>Attribute LastChangeOrderId: The ID of the change order.</summary>
        [JsiiProperty(name: "attrLastChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastChangeOrderId
        {
            get;
        }

        /// <summary>Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.</summary>
        [JsiiProperty(name: "attrLastChangeOrderRunning", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastChangeOrderRunning
        {
            get;
        }

        /// <summary>Attribute LastChangeOrderStatus: The status of the latest change order.</summary>
        [JsiiProperty(name: "attrLastChangeOrderStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastChangeOrderStatus
        {
            get;
        }

        /// <summary>Attribute NamespaceId: The ID of the namespace.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceId
        {
            get;
        }

        /// <summary>Attribute NamespaceName: The name of the namespace.</summary>
        [JsiiProperty(name: "attrNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceName
        {
            get;
        }

        /// <summary>Attribute NameSpaceShortId: The ID of the short namespace.</summary>
        [JsiiProperty(name: "attrNameSpaceShortId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNameSpaceShortId
        {
            get;
        }

        /// <summary>Attribute NotificationExpired: Indicates whether the notification of a change order is expired.</summary>
        [JsiiProperty(name: "attrNotificationExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotificationExpired
        {
            get;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute TenantId: The ID of the tenant in the SAE namespace.</summary>
        [JsiiProperty(name: "attrTenantId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTenantId
        {
            get;
        }

        /// <summary>Attribute UserId: The ID of the user.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the virtual private cloud (VPC).</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VpcName: The name of the VPC.</summary>
        [JsiiProperty(name: "attrVpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcName
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute VSwitchName: The name of the vSwitch.</summary>
        [JsiiProperty(name: "attrVSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.datasource.NamespaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.INamespaceProps Props
        {
            get;
        }

        /// <summary>Represents a `Namespace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INamespace), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.INamespace")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.INamespace
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppCount: The number of applications.</summary>
            [JsiiProperty(name: "attrAppCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BelongRegion: The region to which the namespace belongs.</summary>
            [JsiiProperty(name: "attrBelongRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBelongRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the namespace.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JumpServerAppId: The ID of the jump server application.</summary>
            [JsiiProperty(name: "attrJumpServerAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJumpServerAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JumpServerIp: The IP address of the jump server.</summary>
            [JsiiProperty(name: "attrJumpServerIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJumpServerIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastChangeOrderId: The ID of the change order.</summary>
            [JsiiProperty(name: "attrLastChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastChangeOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.</summary>
            [JsiiProperty(name: "attrLastChangeOrderRunning", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastChangeOrderRunning
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastChangeOrderStatus: The status of the latest change order.</summary>
            [JsiiProperty(name: "attrLastChangeOrderStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastChangeOrderStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NamespaceId: The ID of the namespace.</summary>
            [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NamespaceName: The name of the namespace.</summary>
            [JsiiProperty(name: "attrNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NameSpaceShortId: The ID of the short namespace.</summary>
            [JsiiProperty(name: "attrNameSpaceShortId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNameSpaceShortId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotificationExpired: Indicates whether the notification of a change order is expired.</summary>
            [JsiiProperty(name: "attrNotificationExpired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotificationExpired
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupId: The ID of the security group.</summary>
            [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TenantId: The ID of the tenant in the SAE namespace.</summary>
            [JsiiProperty(name: "attrTenantId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTenantId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: The ID of the user.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the virtual private cloud (VPC).</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcName: The name of the VPC.</summary>
            [JsiiProperty(name: "attrVpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The ID of the vSwitch.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchName: The name of the vSwitch.</summary>
            [JsiiProperty(name: "attrVSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-sae.datasource.NamespaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.INamespaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.INamespaceProps>()!;
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
