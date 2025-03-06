using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Represents a `NatFirewallControlPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(INatFirewallControlPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.INatFirewallControlPolicy")]
    public interface INatFirewallControlPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclUuid: The unique ID of the access control policy.</summary>
        [JsiiProperty(name: "attrAclUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclUuid
        {
            get;
        }

        /// <summary>Attribute Direction: The direction of the traffic to which the access control policy applies.</summary>
        [JsiiProperty(name: "attrDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDirection
        {
            get;
        }

        /// <summary>Attribute NatGatewayId: The ID of the NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudfw.INatFirewallControlPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `NatFirewallControlPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatFirewallControlPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.INatFirewallControlPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.INatFirewallControlPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclUuid: The unique ID of the access control policy.</summary>
            [JsiiProperty(name: "attrAclUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Direction: The direction of the traffic to which the access control policy applies.</summary>
            [JsiiProperty(name: "attrDirection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDirection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGatewayId: The ID of the NAT gateway.</summary>
            [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudfw.INatFirewallControlPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudfw.INatFirewallControlPolicyProps>()!;
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
