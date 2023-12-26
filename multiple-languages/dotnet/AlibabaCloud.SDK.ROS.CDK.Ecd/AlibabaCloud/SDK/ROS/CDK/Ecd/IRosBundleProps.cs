using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `RosBundle`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosBundleProps")]
    public interface IRosBundleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
        /// Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
        /// </remarks>
        [JsiiProperty(name: "desktopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DesktopType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: The ID of the image.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rootDiskSizeGib: The root disk size gib.
        /// </remarks>
        [JsiiProperty(name: "rootDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RootDiskSizeGib
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
        /// - The size of the data disk that supports the setting corresponds to the specification.
        /// - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
        /// </remarks>
        [JsiiProperty(name: "userDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object UserDiskSizeGib
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bundleName: The name of the bundle.
        /// </remarks>
        [JsiiProperty(name: "bundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BundleName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the bundle.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: language: The language. Valid values:
        /// zh-CN: Simplified Chinese
        /// zh-HK: Traditional Chinese (Hong Kong)
        /// en-US: English
        /// ja-JP: Japanese
        /// </remarks>
        [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Language
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rootDiskPerformanceLevel: The root disk performance level. Valid values:
        /// PL0
        /// PL1
        /// PL2
        /// PL3
        /// </remarks>
        [JsiiProperty(name: "rootDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RootDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userDiskPerformanceLevel: The user disk performance level.Valid values:
        /// PL0
        /// PL1
        /// PL2
        /// PL3
        /// </remarks>
        [JsiiProperty(name: "userDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosBundle`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosBundleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IRosBundleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
            /// Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
            /// </remarks>
            [JsiiProperty(name: "desktopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DesktopType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageId: The ID of the image.
            /// </remarks>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rootDiskSizeGib: The root disk size gib.
            /// </remarks>
            [JsiiProperty(name: "rootDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RootDiskSizeGib
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.
            /// - The size of the data disk that supports the setting corresponds to the specification.
            /// - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
            /// </remarks>
            [JsiiProperty(name: "userDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object UserDiskSizeGib
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bundleName: The name of the bundle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BundleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the bundle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: language: The language. Valid values:
            /// zh-CN: Simplified Chinese
            /// zh-HK: Traditional Chinese (Hong Kong)
            /// en-US: English
            /// ja-JP: Japanese
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Language
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rootDiskPerformanceLevel: The root disk performance level. Valid values:
            /// PL0
            /// PL1
            /// PL2
            /// PL3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rootDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RootDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userDiskPerformanceLevel: The user disk performance level.Valid values:
            /// PL0
            /// PL1
            /// PL2
            /// PL3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
