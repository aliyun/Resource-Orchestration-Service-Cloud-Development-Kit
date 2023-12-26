using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>Properties for defining a `ImageCache`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ImageCacheProps")]
    public interface IImageCacheProps
    {
        /// <summary>Property image: The image list to be cached.</summary>
        [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Image
        {
            get;
        }

        /// <summary>Property imageCacheName: Image cache name.</summary>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageCacheName
        {
            get;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property acrRegistryInfo: Enterprise Edition access credential configuration information.</summary>
        [JsiiProperty(name: "acrRegistryInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosImageCache.AcrRegistryInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcrRegistryInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers.</summary>
        /// <remarks>
        /// If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
        /// This accelerates the creation of the image cache.
        /// Valid values: true: enables reuse of image cache layers.
        /// false: disables reuse of image cache layers.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoMatchImageCache
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.</summary>
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageCacheSize: The size of the image cache.</summary>
        /// <remarks>
        /// Unit: GiB. Default value: 20.
        /// </remarks>
        [JsiiProperty(name: "imageCacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageCacheSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageRegistryCredential: Private image password.</summary>
        /// <remarks>
        /// Alibaba Cloud ACR image can be left blank.
        /// </remarks>
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageRegistryCredential
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property retentionDays: The retention period of the image cache.</summary>
        /// <remarks>
        /// Unit: days. When the retention period ends, the image cache expires and is deleted.
        /// By default, image caches never expire.
        /// Note: The image caches that fail to be created are only retained for one day.
        /// </remarks>
        [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RetentionDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the image cache.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImageCache`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ImageCacheProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.IImageCacheProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property image: The image list to be cached.</summary>
            [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Image
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property imageCacheName: Image cache name.</summary>
            [JsiiProperty(name: "imageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageCacheName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acrRegistryInfo: Enterprise Edition access credential configuration information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acrRegistryInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eci.RosImageCache.AcrRegistryInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AcrRegistryInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers.</summary>
            /// <remarks>
            /// If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
            /// This accelerates the creation of the image cache.
            /// Valid values: true: enables reuse of image cache layers.
            /// false: disables reuse of image cache layers.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoMatchImageCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoMatchImageCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eipInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageCacheSize: The size of the image cache.</summary>
            /// <remarks>
            /// Unit: GiB. Default value: 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageCacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageCacheSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageRegistryCredential: Private image password.</summary>
            /// <remarks>
            /// Alibaba Cloud ACR image can be left blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ImageRegistryCredential
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property retentionDays: The retention period of the image cache.</summary>
            /// <remarks>
            /// Unit: days. When the retention period ends, the image cache expires and is deleted.
            /// By default, image caches never expire.
            /// Note: The image caches that fail to be created are only retained for one day.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone ID of the image cache.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
