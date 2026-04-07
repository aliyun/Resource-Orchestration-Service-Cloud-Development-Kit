using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Represents a `Rum`.</summary>
    [JsiiInterface(nativeType: typeof(IRum), fullyQualifiedName: "@alicloud/ros-cdk-arms.IRum")]
    public interface IRum : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CdnDomain: The CDN domain of the RUM application.</summary>
        [JsiiProperty(name: "attrCdnDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCdnDomain
        {
            get;
        }

        /// <summary>Attribute Endpoint: The endpoint of the RUM application.</summary>
        [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpoint
        {
            get;
        }

        /// <summary>Attribute Pid: The PID of the RUM application.</summary>
        [JsiiProperty(name: "attrPid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPid
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.RumProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.IRumProps Props
        {
            get;
        }

        /// <summary>Represents a `Rum`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRum), fullyQualifiedName: "@alicloud/ros-cdk-arms.IRum")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRum
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CdnDomain: The CDN domain of the RUM application.</summary>
            [JsiiProperty(name: "attrCdnDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCdnDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Endpoint: The endpoint of the RUM application.</summary>
            [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Pid: The PID of the RUM application.</summary>
            [JsiiProperty(name: "attrPid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPid
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.RumProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.IRumProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.IRumProps>()!;
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
