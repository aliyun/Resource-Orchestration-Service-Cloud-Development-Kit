using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Represents a `ServiceSource`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceSource), fullyQualifiedName: "@alicloud/ros-cdk-mse.IServiceSource")]
    public interface IServiceSource : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Address: Registration Address.</summary>
        /// <remarks>
        /// If not specified, it will be automatically generated based on the selected instance.
        /// </remarks>
        [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddress
        {
            get;
        }

        /// <summary>Attribute GatewayUniqueId: The unique ID of the gateway.</summary>
        [JsiiProperty(name: "attrGatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayUniqueId
        {
            get;
        }

        /// <summary>Attribute Id: The ID of service source.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrId
        {
            get;
        }

        /// <summary>Attribute Name: The name.</summary>
        /// <remarks>
        /// If Type is set to K8S, this parameter specifies the name of the ACK cluster.
        /// If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ServiceSourceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mse.IServiceSourceProps Props
        {
            get;
        }

        /// <summary>Represents a `ServiceSource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceSource), fullyQualifiedName: "@alicloud/ros-cdk-mse.IServiceSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IServiceSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Address: Registration Address.</summary>
            /// <remarks>
            /// If not specified, it will be automatically generated based on the selected instance.
            /// </remarks>
            [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayUniqueId: The unique ID of the gateway.</summary>
            [JsiiProperty(name: "attrGatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Id: The ID of service source.</summary>
            [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name.</summary>
            /// <remarks>
            /// If Type is set to K8S, this parameter specifies the name of the ACK cluster.
            /// If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
            /// </remarks>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.ServiceSourceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mse.IServiceSourceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.IServiceSourceProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
