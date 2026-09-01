using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Represents a `LivyCompute`.</summary>
    [JsiiInterface(nativeType: typeof(ILivyCompute), fullyQualifiedName: "@alicloud/ros-cdk-emr.ILivyCompute")]
    public interface ILivyCompute : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Endpoint: The public endpoint of the Livy Gateway.</summary>
        [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpoint
        {
            get;
        }

        /// <summary>Attribute EndpointInner: The internal endpoint of the Livy Gateway.</summary>
        [JsiiProperty(name: "attrEndpointInner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpointInner
        {
            get;
        }

        /// <summary>Attribute LivyComputeId: The ID of the Livy Gateway.</summary>
        [JsiiProperty(name: "attrLivyComputeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLivyComputeId
        {
            get;
        }

        /// <summary>Attribute Status: The status of the Livy Gateway.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.LivyComputeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Emr.ILivyComputeProps Props
        {
            get;
        }

        /// <summary>Represents a `LivyCompute`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILivyCompute), fullyQualifiedName: "@alicloud/ros-cdk-emr.ILivyCompute")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.ILivyCompute
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Endpoint: The public endpoint of the Livy Gateway.</summary>
            [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndpointInner: The internal endpoint of the Livy Gateway.</summary>
            [JsiiProperty(name: "attrEndpointInner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpointInner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LivyComputeId: The ID of the Livy Gateway.</summary>
            [JsiiProperty(name: "attrLivyComputeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLivyComputeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The status of the Livy Gateway.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.LivyComputeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Emr.ILivyComputeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.ILivyComputeProps>()!;
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
