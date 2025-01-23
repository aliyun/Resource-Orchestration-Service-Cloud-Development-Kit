using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Represents a `CenBandwidthPackages`.</summary>
    [JsiiInterface(nativeType: typeof(ICenBandwidthPackages), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ICenBandwidthPackages")]
    public interface ICenBandwidthPackages : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.</summary>
        [JsiiProperty(name: "attrCenBandwidthPackageIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenBandwidthPackageIds
        {
            get;
        }

        /// <summary>Attribute CenBandwidthPackages: The information about CenBandwidthPackages.</summary>
        [JsiiProperty(name: "attrCenBandwidthPackages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenBandwidthPackages
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenBandwidthPackagesProps Props
        {
            get;
        }

        /// <summary>Represents a `CenBandwidthPackages`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenBandwidthPackages), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ICenBandwidthPackages")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenBandwidthPackages
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CenBandwidthPackageIds: The list of The Cen bandwidth ids.</summary>
            [JsiiProperty(name: "attrCenBandwidthPackageIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenBandwidthPackageIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CenBandwidthPackages: The information about CenBandwidthPackages.</summary>
            [JsiiProperty(name: "attrCenBandwidthPackages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenBandwidthPackages
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.CenBandwidthPackagesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenBandwidthPackagesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ICenBandwidthPackagesProps>()!;
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
