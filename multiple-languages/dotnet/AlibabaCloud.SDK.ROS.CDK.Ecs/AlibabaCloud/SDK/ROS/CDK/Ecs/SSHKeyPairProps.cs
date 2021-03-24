using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPair`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.SSHKeyPairProps")]
    public class SSHKeyPairProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ISSHKeyPairProps
    {
        /// <summary>Property keyPairName: SSH key pair name.</summary>
        /// <remarks>
        /// It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property publicKeyBody: SSH Public key.</summary>
        /// <remarks>
        /// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "publicKeyBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PublicKeyBody
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
