package com.aliyun.ros.cdk.assembly.schema;

/**
 * Identifier for the context provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:34.703Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ContextProvider")
public enum ContextProvider {
    /**
     * AMI provider.
     */
    AMI_PROVIDER,
    /**
     * AZ provider.
     */
    AVAILABILITY_ZONE_PROVIDER,
    /**
     * Route53 Hosted Zone provider.
     */
    HOSTED_ZONE_PROVIDER,
    /**
     * SSM Parameter Provider.
     */
    SSM_PARAMETER_PROVIDER,
    /**
     * VPC Provider.
     */
    VPC_PROVIDER,
    /**
     * VPC Endpoint Service AZ Provider.
     */
    ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER,
}
