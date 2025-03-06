using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `NatGateways`.</summary>
    [JsiiInterface(nativeType: typeof(INatGateways), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatGateways")]
    public interface INatGateways : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NatGatewayIds: The list of The nat gateway ids.</summary>
        [JsiiProperty(name: "attrNatGatewayIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayIds
        {
            get;
        }

        /// <summary>Attribute NatGateways: The list of The nat gateways.</summary>
        [JsiiProperty(name: "attrNatGateways", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGateways
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewaysProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewaysProps Props
        {
            get;
        }

        /// <summary>Represents a `NatGateways`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatGateways), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatGateways")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGateways
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NatGatewayIds: The list of The nat gateway ids.</summary>
            [JsiiProperty(name: "attrNatGatewayIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGateways: The list of The nat gateways.</summary>
            [JsiiProperty(name: "attrNatGateways", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGateways
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewaysProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewaysProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewaysProps>()!;
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
