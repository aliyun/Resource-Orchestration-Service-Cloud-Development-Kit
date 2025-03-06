using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `NatGateway`.</summary>
    [JsiiInterface(nativeType: typeof(INatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.INatGateway")]
    public interface INatGateway : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ForwardTableId: The forward table id.</summary>
        [JsiiProperty(name: "attrForwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrForwardTableId
        {
            get;
        }

        /// <summary>Attribute NatGatewayId: The Id of created NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayId
        {
            get;
        }

        /// <summary>Attribute SNatTableId: The SNAT table id.</summary>
        [JsiiProperty(name: "attrSNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSNatTableId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.NatGatewayProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps Props
        {
            get;
        }

        /// <summary>Represents a `NatGateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.INatGateway")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INatGateway
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ForwardTableId: The forward table id.</summary>
            [JsiiProperty(name: "attrForwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrForwardTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGatewayId: The Id of created NAT gateway.</summary>
            [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SNatTableId: The SNAT table id.</summary>
            [JsiiProperty(name: "attrSNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSNatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.NatGatewayProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps>()!;
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
