using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Represents a `TraceResource`.</summary>
    [JsiiInterface(nativeType: typeof(ITraceResource), fullyQualifiedName: "@alicloud/ros-cdk-arms.ITraceResource")]
    public interface ITraceResource : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute SlsEndpointDesc: The sls endpoint description of the trace resource.</summary>
        [JsiiProperty(name: "attrSlsEndpointDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSlsEndpointDesc
        {
            get;
        }

        /// <summary>Attribute TraceEndpointDesc: The trace endpoint description of the trace resource.</summary>
        [JsiiProperty(name: "attrTraceEndpointDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTraceEndpointDesc
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.TraceResourceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.ITraceResourceProps Props
        {
            get;
        }

        /// <summary>Represents a `TraceResource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITraceResource), fullyQualifiedName: "@alicloud/ros-cdk-arms.ITraceResource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.ITraceResource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute SlsEndpointDesc: The sls endpoint description of the trace resource.</summary>
            [JsiiProperty(name: "attrSlsEndpointDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSlsEndpointDesc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TraceEndpointDesc: The trace endpoint description of the trace resource.</summary>
            [JsiiProperty(name: "attrTraceEndpointDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTraceEndpointDesc
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.TraceResourceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.ITraceResourceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.ITraceResourceProps>()!;
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
