using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless
{
    /// <summary>Represents a `Endpoint`.</summary>
    [JsiiInterface(nativeType: typeof(IEndpoint), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.IEndpoint")]
    public interface IEndpoint : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Domain: The domain of the endpoint.</summary>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomain
        {
            get;
        }

        /// <summary>Attribute EndpointId: The Id of the endpoint.</summary>
        [JsiiProperty(name: "attrEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpointId
        {
            get;
        }

        /// <summary>Attribute PvlEndpointId: The Id of the private link endpoint.</summary>
        [JsiiProperty(name: "attrPvlEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPvlEndpointId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.EndpointProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IEndpointProps Props
        {
            get;
        }

        /// <summary>Represents a `Endpoint`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEndpoint), fullyQualifiedName: "@alicloud/ros-cdk-elasticsearchserverless.IEndpoint")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IEndpoint
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Domain: The domain of the endpoint.</summary>
            [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndpointId: The Id of the endpoint.</summary>
            [JsiiProperty(name: "attrEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PvlEndpointId: The Id of the private link endpoint.</summary>
            [JsiiProperty(name: "attrPvlEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPvlEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-elasticsearchserverless.EndpointProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IEndpointProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Elasticsearchserverless.IEndpointProps>()!;
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
