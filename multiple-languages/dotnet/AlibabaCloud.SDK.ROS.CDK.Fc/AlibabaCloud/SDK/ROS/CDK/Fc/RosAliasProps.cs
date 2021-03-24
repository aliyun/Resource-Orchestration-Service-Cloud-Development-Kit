using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosAliasProps")]
    public class RosAliasProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aliasName: Alias name
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AliasName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: additionalVersion: Additional version
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AdditionalVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: additionalWeight: Traffic weight of additional version. From 0 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "additionalWeight", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AdditionalWeight
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Version description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionId: Version ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VersionId
        {
            get;
            set;
        }
    }
}
