using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `Bundle`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.BundleProps")]
    public interface IBundleProps
    {
        /// <summary>Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.</summary>
        [JsiiProperty(name: "desktopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DesktopType
        {
            get;
        }

        /// <summary>Property imageId: The ID of the image.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageId
        {
            get;
        }

        /// <summary>Property rootDiskSizeGib: The root disk size gib.</summary>
        [JsiiProperty(name: "rootDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RootDiskSizeGib
        {
            get;
        }

        /// <summary>Property userDiskSizeGib: The size of the data disk.</summary>
        /// <remarks>
        /// Currently, only one data disk can be set. Unit: GiB.
        ///
        /// <list type="bullet">
        /// <description>The size of the data disk that supports the setting corresponds to the specification.</description>
        /// <description>The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "userDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object UserDiskSizeGib
        {
            get;
        }

        /// <summary>Property bundleName: The name of the bundle.</summary>
        [JsiiProperty(name: "bundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BundleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the bundle.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property language: The language.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property rootDiskPerformanceLevel: The root disk performance level.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.</summary>
        [JsiiProperty(name: "userDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Bundle`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-bundle
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.BundleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IBundleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.</summary>
            [JsiiProperty(name: "desktopType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DesktopType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property imageId: The ID of the image.</summary>
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rootDiskSizeGib: The root disk size gib.</summary>
            [JsiiProperty(name: "rootDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RootDiskSizeGib
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userDiskSizeGib: The size of the data disk.</summary>
            /// <remarks>
            /// Currently, only one data disk can be set. Unit: GiB.
            ///
            /// <list type="bullet">
            /// <description>The size of the data disk that supports the setting corresponds to the specification.</description>
            /// <description>The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "userDiskSizeGib", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object UserDiskSizeGib
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bundleName: The name of the bundle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BundleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the bundle.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property language: The language.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property rootDiskPerformanceLevel: The root disk performance level.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
