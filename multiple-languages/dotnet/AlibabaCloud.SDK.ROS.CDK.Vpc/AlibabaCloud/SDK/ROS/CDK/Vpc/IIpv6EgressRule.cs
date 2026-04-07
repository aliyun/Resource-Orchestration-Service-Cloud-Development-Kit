using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `Ipv6EgressRule`.</summary>
    [JsiiInterface(nativeType: typeof(IIpv6EgressRule), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpv6EgressRule")]
    public interface IIpv6EgressRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The description of the egress-only rule.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.</summary>
        [JsiiProperty(name: "attrIpv6EgressRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6EgressRuleId
        {
            get;
        }

        /// <summary>Attribute Ipv6EgressRuleName: The name of the egress-only rule.</summary>
        [JsiiProperty(name: "attrIpv6EgressRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpv6EgressRuleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6EgressRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipv6EgressRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpv6EgressRule), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IIpv6EgressRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6EgressRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The description of the egress-only rule.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.</summary>
            [JsiiProperty(name: "attrIpv6EgressRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6EgressRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipv6EgressRuleName: The name of the egress-only rule.</summary>
            [JsiiProperty(name: "attrIpv6EgressRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpv6EgressRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.Ipv6EgressRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6EgressRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IIpv6EgressRuleProps>()!;
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
