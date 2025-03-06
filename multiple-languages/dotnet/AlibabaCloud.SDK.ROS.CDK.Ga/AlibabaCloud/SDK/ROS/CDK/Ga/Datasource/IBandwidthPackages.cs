using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga.Datasource
{
    /// <summary>Represents a `BandwidthPackages`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackages), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.IBandwidthPackages")]
    public interface IBandwidthPackages : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BandwidthPackageIds: The list of bandwidth package IDs.</summary>
        [JsiiProperty(name: "attrBandwidthPackageIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackageIds
        {
            get;
        }

        /// <summary>Attribute BandwidthPackages: The list of bandwidth packages.</summary>
        [JsiiProperty(name: "attrBandwidthPackages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPackages
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.datasource.BandwidthPackagesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IBandwidthPackagesProps Props
        {
            get;
        }

        /// <summary>Represents a `BandwidthPackages`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackages), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.IBandwidthPackages")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IBandwidthPackages
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BandwidthPackageIds: The list of bandwidth package IDs.</summary>
            [JsiiProperty(name: "attrBandwidthPackageIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackageIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BandwidthPackages: The list of bandwidth packages.</summary>
            [JsiiProperty(name: "attrBandwidthPackages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPackages
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.datasource.BandwidthPackagesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IBandwidthPackagesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IBandwidthPackagesProps>()!;
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
