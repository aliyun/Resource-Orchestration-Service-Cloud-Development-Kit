using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `Gateway`.</summary>
    [JsiiInterface(nativeType: typeof(IGateway), fullyQualifiedName: "@alicloud/ros-cdk-apig.IGateway")]
    public interface IGateway : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation timestamp.</summary>
        /// <remarks>
        /// Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Environments: The list of environments associated with the Gateway.</summary>
        [JsiiProperty(name: "attrEnvironments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironments
        {
            get;
        }

        /// <summary>Attribute ExpireTime: Package year and package month expiration timestamp.</summary>
        /// <remarks>
        /// Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireTime
        {
            get;
        }

        /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
        [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayId
        {
            get;
        }

        /// <summary>Attribute GatewayName: The name of the resource.</summary>
        [JsiiProperty(name: "attrGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayName
        {
            get;
        }

        /// <summary>Attribute LoadBalancers: The list of Gateway ingress addresses.</summary>
        [JsiiProperty(name: "attrLoadBalancers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancers
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the gateway.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute SecurityGroup: The Security Group of the Gateway.</summary>
        [JsiiProperty(name: "attrSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroup
        {
            get;
        }

        /// <summary>Attribute Spec: Gateway instance specifications.</summary>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpec
        {
            get;
        }

        /// <summary>Attribute UpdateTime: Update the timestamp.</summary>
        /// <remarks>
        /// Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute Version: The gateway version.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersion
        {
            get;
        }

        /// <summary>Attribute Vpc: The VPC associated with the Gateway.</summary>
        [JsiiProperty(name: "attrVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpc
        {
            get;
        }

        /// <summary>Attribute VSwitch: The virtual switch associated with the Gateway.</summary>
        [JsiiProperty(name: "attrVSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitch
        {
            get;
        }

        /// <summary>Attribute Zones: The List of zones associated with the Gateway.</summary>
        [JsiiProperty(name: "attrZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZones
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.GatewayProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IGatewayProps Props
        {
            get;
        }

        /// <summary>Represents a `Gateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGateway), fullyQualifiedName: "@alicloud/ros-cdk-apig.IGateway")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IGateway
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation timestamp.</summary>
            /// <remarks>
            /// Unit: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Environments: The list of environments associated with the Gateway.</summary>
            [JsiiProperty(name: "attrEnvironments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironments
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireTime: Package year and package month expiration timestamp.</summary>
            /// <remarks>
            /// Unit: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "attrExpireTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
            [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayName: The name of the resource.</summary>
            [JsiiProperty(name: "attrGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancers: The list of Gateway ingress addresses.</summary>
            [JsiiProperty(name: "attrLoadBalancers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the gateway.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroup: The Security Group of the Gateway.</summary>
            [JsiiProperty(name: "attrSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Spec: Gateway instance specifications.</summary>
            [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: Update the timestamp.</summary>
            /// <remarks>
            /// Unit: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Version: The gateway version.</summary>
            [JsiiProperty(name: "attrVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Vpc: The VPC associated with the Gateway.</summary>
            [JsiiProperty(name: "attrVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitch: The virtual switch associated with the Gateway.</summary>
            [JsiiProperty(name: "attrVSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Zones: The List of zones associated with the Gateway.</summary>
            [JsiiProperty(name: "attrZones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZones
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.GatewayProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IGatewayProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IGatewayProps>()!;
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
