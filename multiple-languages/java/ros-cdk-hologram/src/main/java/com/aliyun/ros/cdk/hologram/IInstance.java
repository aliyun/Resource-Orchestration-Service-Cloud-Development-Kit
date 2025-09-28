package com.aliyun.ros.cdk.hologram;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.485Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hologram.$Module.class, fqn = "@alicloud/ros-cdk-hologram.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoRenewal: Whether automatic renewal is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewal();

    /**
     * Attribute ColdStorageSize: Instance low-frequency storage space.
     * <p>
     * Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageSize();

    /**
     * Attribute CommodityCode: The commodity code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode();

    /**
     * Attribute ComputeNodeCount: Number of compute nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodeCount();

    /**
     * Attribute Cpu: Instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableHiveAccess();

    /**
     * Attribute Endpoints: List of domain names.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints();

    /**
     * Attribute ExpirationTime: Expiration time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpirationTime();

    /**
     * Attribute GatewayCount: Number of gateway nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCount();

    /**
     * Attribute GatewayCpu: Cpu resources of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCpu();

    /**
     * Attribute GatewayMemory: Gateway memory resources.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayMemory();

    /**
     * Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute InstanceName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName();

    /**
     * Attribute InstanceOwner: The instance owner.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceOwner();

    /**
     * Attribute InstanceType: The instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType();

    /**
     * Attribute Memory: Memory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute StorageSize: The standard storage space of the instance.
     * <p>
     * Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize();

    /**
     * Attribute SuspendReason: Reason for suspension.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuspendReason();

    /**
     * Attribute Tags: Instance tag.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Version: The instance version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    /**
     * Attribute ZoneId: The zone Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hologram.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hologram.IInstance.Jsii$Default {
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
         * Attribute AutoRenewal: Whether automatic renewal is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewal() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ColdStorageSize: Instance low-frequency storage space.
         * <p>
         * Unit: GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrColdStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: The commodity code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputeNodeCount: Number of compute nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: Instance specifications.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableHiveAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableHiveAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoints: List of domain names.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpirationTime: Expiration time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpirationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpirationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayCount: Number of gateway nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayCpu: Cpu resources of the Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayMemory: Gateway memory resources.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceOwner: The instance owner.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: Memory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The standard storage space of the instance.
         * <p>
         * Unit: GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SuspendReason: Reason for suspension.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuspendReason() {
            return software.amazon.jsii.Kernel.get(this, "attrSuspendReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Instance tag.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The instance version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hologram.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hologram.InstanceProps.class));
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
         * Attribute AutoRenewal: Whether automatic renewal is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewal() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenewal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ColdStorageSize: Instance low-frequency storage space.
         * <p>
         * Unit: GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrColdStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommodityCode: The commodity code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputeNodeCount: Number of compute nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputeNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrComputeNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Cpu: Instance specifications.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableHiveAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableHiveAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoints: List of domain names.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpirationTime: Expiration time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpirationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpirationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayCount: Number of gateway nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCount() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayCpu: Cpu resources of the Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayMemory: Gateway memory resources.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceName: The name of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceOwner: The instance owner.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceType: The instance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Memory: Memory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The standard storage space of the instance.
         * <p>
         * Unit: GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SuspendReason: Reason for suspension.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuspendReason() {
            return software.amazon.jsii.Kernel.get(this, "attrSuspendReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: Instance tag.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The instance version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hologram.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hologram.InstanceProps.class));
        }
    }
}
