using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.AliasProps")]
    public class AliasProps : AlibabaCloud.SDK.ROS.CDK.Fc.IAliasProps
    {
        /// <summary>Property aliasName: Alias name.</summary>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AliasName
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <summary>Property additionalVersion: Additional version.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AdditionalVersion
        {
            get;
            set;
        }

        /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
        /// <remarks>
        /// From 0 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "additionalWeight", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AdditionalWeight
        {
            get;
            set;
        }

        /// <summary>Property description: Version description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property versionId: Version ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VersionId
        {
            get;
            set;
        }
    }
}
