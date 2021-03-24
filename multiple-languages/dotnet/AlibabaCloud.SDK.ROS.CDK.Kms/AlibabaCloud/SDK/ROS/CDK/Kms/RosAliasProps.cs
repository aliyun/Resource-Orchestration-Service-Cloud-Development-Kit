using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::KMS::Alias`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.RosAliasProps")]
    public class RosAliasProps : AlibabaCloud.SDK.ROS.CDK.Kms.IRosAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AliasName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyId: Globally unique identifier of the CMK.
        /// </remarks>
        [JsiiProperty(name: "keyId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string KeyId
        {
            get;
            set;
        }
    }
}
