using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECI::ImageCache`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.RosImageCacheProps")]
    public class RosImageCacheProps : AlibabaCloud.SDK.ROS.CDK.Eci.IRosImageCacheProps
    {
        /// <remarks>
        /// <strong>Property</strong>: image: The image list to be cached.
        /// </remarks>
        [JsiiProperty(name: "image", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] Image
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageCacheName: Image cache name.
        /// </remarks>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ImageCacheName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group ID.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eipInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EipInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageRegistryCredential", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? ImageRegistryCredential
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }
    }
}
