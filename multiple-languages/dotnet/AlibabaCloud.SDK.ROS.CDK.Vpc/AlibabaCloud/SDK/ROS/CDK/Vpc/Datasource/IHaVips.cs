using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `HaVips`.</summary>
    [JsiiInterface(nativeType: typeof(IHaVips), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IHaVips")]
    public interface IHaVips : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HaVipIds: The list of ha vip IDs.</summary>
        [JsiiProperty(name: "attrHaVipIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHaVipIds
        {
            get;
        }

        /// <summary>Attribute HaVips: The list of ha vips.</summary>
        [JsiiProperty(name: "attrHaVips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHaVips
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.HaVipsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipsProps Props
        {
            get;
        }

        /// <summary>Represents a `HaVips`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHaVips), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IHaVips")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVips
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HaVipIds: The list of ha vip IDs.</summary>
            [JsiiProperty(name: "attrHaVipIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHaVipIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HaVips: The list of ha vips.</summary>
            [JsiiProperty(name: "attrHaVips", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHaVips
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.HaVipsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipsProps>()!;
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
