using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource
{
    /// <summary>Represents a `Ipfilters`.</summary>
    [JsiiInterface(nativeType: typeof(IIpfilters), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IIpfilters")]
    public interface IIpfilters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute IpfilterIds: The list of ip filter IDs.</summary>
        [JsiiProperty(name: "attrIpfilterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpfilterIds
        {
            get;
        }

        /// <summary>Attribute Ipfilters: The list of ip filters.</summary>
        [JsiiProperty(name: "attrIpfilters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpfilters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.IpfiltersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IIpfiltersProps Props
        {
            get;
        }

        /// <summary>Represents a `Ipfilters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpfilters), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IIpfilters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IIpfilters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute IpfilterIds: The list of ip filter IDs.</summary>
            [JsiiProperty(name: "attrIpfilterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpfilterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Ipfilters: The list of ip filters.</summary>
            [JsiiProperty(name: "attrIpfilters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpfilters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.IpfiltersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IIpfiltersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IIpfiltersProps>()!;
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
