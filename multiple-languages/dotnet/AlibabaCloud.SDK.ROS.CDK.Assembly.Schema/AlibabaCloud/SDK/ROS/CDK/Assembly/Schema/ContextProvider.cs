using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{

    /// <summary>Identifier for the context provider.</summary>
    [JsiiEnum(nativeType: typeof(ContextProvider), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.ContextProvider")]
    public enum ContextProvider
    {
        /// <summary>AMI provider.</summary>
        [JsiiEnumMember(name: "AMI_PROVIDER")]
        AMI_PROVIDER,
        /// <summary>AZ provider.</summary>
        [JsiiEnumMember(name: "AVAILABILITY_ZONE_PROVIDER")]
        AVAILABILITY_ZONE_PROVIDER,
        /// <summary>Route53 Hosted Zone provider.</summary>
        [JsiiEnumMember(name: "HOSTED_ZONE_PROVIDER")]
        HOSTED_ZONE_PROVIDER,
        /// <summary>SSM Parameter Provider.</summary>
        [JsiiEnumMember(name: "SSM_PARAMETER_PROVIDER")]
        SSM_PARAMETER_PROVIDER,
        /// <summary>VPC Provider.</summary>
        [JsiiEnumMember(name: "VPC_PROVIDER")]
        VPC_PROVIDER,
        /// <summary>VPC Endpoint Service AZ Provider.</summary>
        [JsiiEnumMember(name: "ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER")]
        ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER
    }
}
