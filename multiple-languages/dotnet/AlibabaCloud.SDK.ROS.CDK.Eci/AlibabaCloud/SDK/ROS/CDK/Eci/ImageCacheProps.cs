using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECI::ImageCache`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.ImageCacheProps")]
    public class ImageCacheProps : AlibabaCloud.SDK.ROS.CDK.Eci.IImageCacheProps
    {
        /// <summary>Property image: The image list to be cached.</summary>
        [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] Image
        {
            get;
            set;
        }

        /// <summary>Property imageCacheName: Image cache name.</summary>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ImageCacheName
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Security group ID.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EipInstanceId
        {
            get;
            set;
        }

        /// <summary>Property imageRegistryCredential: Private image password.</summary>
        /// <remarks>
        /// Alibaba Cloud ACR image can be left blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? ImageRegistryCredential
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }
    }
}
