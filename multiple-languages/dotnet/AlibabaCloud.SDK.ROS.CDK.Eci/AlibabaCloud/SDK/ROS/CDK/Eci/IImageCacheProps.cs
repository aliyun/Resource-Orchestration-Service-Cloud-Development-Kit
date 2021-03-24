using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>Properties for defining a `ALIYUN::ECI::ImageCache`.</summary>
    [JsiiInterface(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ImageCacheProps")]
    public interface IImageCacheProps
    {
        /// <summary>Property image: The image list to be cached.</summary>
        [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] Image
        {
            get;
        }

        /// <summary>Property imageCacheName: Image cache name.</summary>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}")]
        string ImageCacheName
        {
            get;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string SecurityGroupId
        {
            get;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.</summary>
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EipInstanceId
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
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? ImageRegistryCredential
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECI::ImageCache`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.ImageCacheProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.IImageCacheProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property image: The image list to be cached.</summary>
            [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] Image
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Property imageCacheName: Image cache name.</summary>
            [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageCacheName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property securityGroupId: Security group ID.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string SecurityGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EipInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property imageRegistryCredential: Private image password.</summary>
            /// <remarks>
            /// Alibaba Cloud ACR image can be left blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? ImageRegistryCredential
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property resourceGroupId: Resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
