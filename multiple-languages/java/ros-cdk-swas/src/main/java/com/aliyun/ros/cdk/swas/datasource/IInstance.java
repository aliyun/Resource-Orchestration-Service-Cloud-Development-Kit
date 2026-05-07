package com.aliyun.ros.cdk.swas.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.557Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BusinessStatus: The business status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus();

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType();

    /**
     * Attribute Combination: Indicates whether the instance is a combination instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCombination();

    /**
     * Attribute CreationTime: The creation time of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime();

    /**
     * Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDdosStatus();

    /**
     * Attribute DisableReason: The reason why the instance is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableReason();

    /**
     * Attribute Disks: The disks of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisks();

    /**
     * Attribute ExpiredTime: The expiration time of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute Image: The image information of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage();

    /**
     * Attribute ImageId: The ID of the image used by the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute InnerIpAddress: The private IP address of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress();

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute NetworkAttributes: The network attributes of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAttributes();

    /**
     * Attribute PlanId: The plan ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId();

    /**
     * Attribute PlanType: The plan type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanType();

    /**
     * Attribute PublicIpAddress: The public IP address of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress();

    /**
     * Attribute RegionId: The ID of the region where the instance is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ResourceSpec: The resource specification of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSpec();

    /**
     * Attribute Status: The status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus();

    /**
     * Attribute Tags: The tags of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Uuid: The unique identifier of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.swas.datasource.IInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BusinessStatus: The business status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The billing method of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Combination: Indicates whether the instance is a combination instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCombination() {
            return software.amazon.jsii.Kernel.get(this, "attrCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The creation time of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DdosStatus: The anti-DDoS status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDdosStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrDdosStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableReason: The reason why the instance is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableReason() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Disks: The disks of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisks() {
            return software.amazon.jsii.Kernel.get(this, "attrDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: The image information of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image used by the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIpAddress: The private IP address of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkAttributes: The network attributes of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanId: The plan ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanType: The plan type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanType() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddress: The public IP address of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region where the instance is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceSpec: The resource specification of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The unique identifier of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.swas.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BusinessStatus: The business status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The billing method of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Combination: Indicates whether the instance is a combination instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCombination() {
            return software.amazon.jsii.Kernel.get(this, "attrCombination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The creation time of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DdosStatus: The anti-DDoS status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDdosStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrDdosStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisableReason: The reason why the instance is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisableReason() {
            return software.amazon.jsii.Kernel.get(this, "attrDisableReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Disks: The disks of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisks() {
            return software.amazon.jsii.Kernel.get(this, "attrDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Image: The image information of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImage() {
            return software.amazon.jsii.Kernel.get(this, "attrImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The ID of the image used by the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InnerIpAddress: The private IP address of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkAttributes: The network attributes of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAttributes() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanId: The plan ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanType: The plan type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanType() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublicIpAddress: The public IP address of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region where the instance is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceSpec: The resource specification of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Status: The status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uuid: The unique identifier of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.swas.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.swas.datasource.InstanceProps.class));
        }
    }
}
