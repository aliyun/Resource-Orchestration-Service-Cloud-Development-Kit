using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    /// <summary>Properties for defining a `ALIYUN::ECI::ImageCache`.</summary>
    [JsiiInterface(nativeType: typeof(IRosImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosImageCacheProps")]
    public interface IRosImageCacheProps
    {
        /// <remarks>
        /// <strong>Property</strong>: image: The image list to be cached.
        /// </remarks>
        [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] Image
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageCacheName: Image cache name.
        /// </remarks>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}")]
        string ImageCacheName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string SecurityGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EipInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.RosImageCacheProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.IRosImageCacheProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: image: The image list to be cached.
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] Image
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: imageCacheName: Image cache name.
            /// </remarks>
            [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageCacheName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Security group ID.
            /// </remarks>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string SecurityGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EipInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? ImageRegistryCredential
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
