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
        [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AliasName
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ServiceName
        {
            get;
            set;
        }

        /// <summary>Property additionalVersion: Additional version.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AdditionalVersion
        {
            get;
            set;
        }

        /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
        /// <remarks>
        /// From 0 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "additionalWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AdditionalWeight
        {
            get;
            set;
        }

        /// <summary>Property description: Version description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property versionId: Version ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VersionId
        {
            get;
            set;
        }
    }
}
