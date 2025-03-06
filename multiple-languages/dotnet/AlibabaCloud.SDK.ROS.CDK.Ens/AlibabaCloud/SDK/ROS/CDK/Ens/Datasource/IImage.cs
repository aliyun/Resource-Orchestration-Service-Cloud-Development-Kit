using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens.Datasource
{
    /// <summary>Represents a `Image`.</summary>
    [JsiiInterface(nativeType: typeof(IImage), fullyQualifiedName: "@alicloud/ros-cdk-ens.datasource.IImage")]
    public interface IImage : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Architecture: The image architecture.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>i386</strong></description>
        /// <description><strong>x86_64</strong></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArchitecture
        {
            get;
        }

        /// <summary>Attribute ComputeType: Computing type.</summary>
        /// <remarks>
        /// ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
        /// </remarks>
        [JsiiProperty(name: "attrComputeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrComputeType
        {
            get;
        }

        /// <summary>Attribute CreateTime: The image creation time.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ImageId: The ID of the image.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute ImageName: The name of the image.</summary>
        [JsiiProperty(name: "attrImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageName
        {
            get;
        }

        /// <summary>Attribute ImageOwnerAlias: The source of the image.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>others</strong>: a custom image that is shared by other Alibaba Cloud accounts.</description>
        /// <description><strong>self</strong>: your own custom image.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrImageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageOwnerAlias
        {
            get;
        }

        /// <summary>Attribute ImageSize: The size of the image.</summary>
        /// <remarks>
        /// Unit: GiB.
        /// </remarks>
        [JsiiProperty(name: "attrImageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageSize
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the instance corresponding to the image.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute OsVersion: The operating system version.</summary>
        [JsiiProperty(name: "attrOsVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsVersion
        {
            get;
        }

        /// <summary>Attribute Platform: The type of operating system used by the image.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>centos</strong></description>
        /// <description><strong>ubuntu</strong></description>
        /// <description><strong>alios</strong></description>
        /// <description><strong>debian</strong></description>
        /// <description><strong>rhel</strong></description>
        /// <description><strong>windows</strong></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlatform
        {
            get;
        }

        /// <summary>Attribute SnapshotId: The ID of the snapshot corresponding to the image.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.datasource.ImageProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IImageProps Props
        {
            get;
        }

        /// <summary>Represents a `Image`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImage), fullyQualifiedName: "@alicloud/ros-cdk-ens.datasource.IImage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IImage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Architecture: The image architecture.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>i386</strong></description>
            /// <description><strong>x86_64</strong></description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrArchitecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArchitecture
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ComputeType: Computing type.</summary>
            /// <remarks>
            /// ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
            /// </remarks>
            [JsiiProperty(name: "attrComputeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrComputeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The image creation time.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The ID of the image.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageName: The name of the image.</summary>
            [JsiiProperty(name: "attrImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageOwnerAlias: The source of the image.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>others</strong>: a custom image that is shared by other Alibaba Cloud accounts.</description>
            /// <description><strong>self</strong>: your own custom image.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrImageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageOwnerAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageSize: The size of the image.</summary>
            /// <remarks>
            /// Unit: GiB.
            /// </remarks>
            [JsiiProperty(name: "attrImageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the instance corresponding to the image.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsVersion: The operating system version.</summary>
            [JsiiProperty(name: "attrOsVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Platform: The type of operating system used by the image.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>centos</strong></description>
            /// <description><strong>ubuntu</strong></description>
            /// <description><strong>alios</strong></description>
            /// <description><strong>debian</strong></description>
            /// <description><strong>rhel</strong></description>
            /// <description><strong>windows</strong></description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlatform
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotId: The ID of the snapshot corresponding to the image.</summary>
            [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.datasource.ImageProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IImageProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IImageProps>()!;
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
