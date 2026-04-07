package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * Represents a <code>EnterpriseDBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.674Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.IEnterpriseDBCluster")
@software.amazon.jsii.Jsii.Proxy(IEnterpriseDBCluster.Jsii$Proxy.class)
public interface IEnterpriseDBCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute ChargeType: The billing method.
     * <p>
     * Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType();

    /**
     * Attribute ComputingGroupIds: The list of computing group IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputingGroupIds();

    /**
     * Attribute CreateTime: The creation time of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DBInstanceId: The cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute Description: The cluster description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DisabledPorts: The specified database port is disabled.
     * <p>
     * Multiple ports separated by commas (,) are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabledPorts();

    /**
     * Attribute Endpoints: List of Endpoint details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints();

    /**
     * Attribute Engine: The engine type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineMinorVersion();

    /**
     * Attribute EngineVersion: The engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType();

    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime();

    /**
     * Attribute MaintainStartTime: The maintainable time start time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime();

    /**
     * Attribute MultiZones: The information about the zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiZones();

    /**
     * Attribute NodeCount: The number of nodes.
     * <p>
     * The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeCount();

    /**
     * Attribute Nodes: The Node information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes();

    /**
     * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMax();

    /**
     * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMin();

    /**
     * Attribute ObjectStoreSize: The size of the object storage space.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjectStoreSize();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMax();

    /**
     * Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMin();

    /**
     * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageQuota();

    /**
     * Attribute StorageSize: The size of the storage space.
     * <p>
     * Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize();

    /**
     * Attribute StorageType: The storage type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType();

    /**
     * Attribute Tags: The details of the tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute VpcId: The VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VswitchId: The VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId();

    /**
     * Attribute ZoneId: The zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.clickhouse.datasource.IEnterpriseDBCluster.Jsii$Default {
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
         * Attribute Category: Type, value description: enterprise: Enterprise Edition.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The billing method.
         * <p>
         * Enterprise Edition clusters use the pay-as-you-go billing method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputingGroupIds: The list of computing group IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputingGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrComputingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The cluster ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The cluster description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisabledPorts: The specified database port is disabled.
         * <p>
         * Multiple ports separated by commas (,) are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabledPorts() {
            return software.amazon.jsii.Kernel.get(this, "attrDisabledPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoints: List of Endpoint details.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The engine type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineMinorVersion: The minor version number of the cluster engine.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The engine version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: The end time of the maintenance window.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: The maintainable time start time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MultiZones: The information about the zones.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiZones() {
            return software.amazon.jsii.Kernel.get(this, "attrMultiZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeCount: The number of nodes.
         * <p>
         * The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Nodes: The Node information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMax() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMin() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ObjectStoreSize: The size of the object storage space.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjectStoreSize() {
            return software.amazon.jsii.Kernel.get(this, "attrObjectStoreSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleMax: The maximum capacity for elastic scaling.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMax() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleMin: The minimum capacity for elastic scaling.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMin() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageQuota() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The size of the storage space.
         * <p>
         * Unit: GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: The storage type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details of the tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchId: The VSwitch ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEnterpriseDBCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEnterpriseDBCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Category: Type, value description: enterprise: Enterprise Edition.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ChargeType: The billing method.
         * <p>
         * Enterprise Edition clusters use the pay-as-you-go billing method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
            return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ComputingGroupIds: The list of computing group IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputingGroupIds() {
            return software.amazon.jsii.Kernel.get(this, "attrComputingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The cluster ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The cluster description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisabledPorts: The specified database port is disabled.
         * <p>
         * Multiple ports separated by commas (,) are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabledPorts() {
            return software.amazon.jsii.Kernel.get(this, "attrDisabledPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoints: List of Endpoint details.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The engine type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineMinorVersion: The minor version number of the cluster engine.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The engine version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: The end time of the maintenance window.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: The maintainable time start time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MultiZones: The information about the zones.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiZones() {
            return software.amazon.jsii.Kernel.get(this, "attrMultiZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeCount: The number of nodes.
         * <p>
         * The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeCount() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Nodes: The Node information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMax() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMin() {
            return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ObjectStoreSize: The size of the object storage space.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjectStoreSize() {
            return software.amazon.jsii.Kernel.get(this, "attrObjectStoreSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleMax: The maximum capacity for elastic scaling.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMax() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ScaleMin: The minimum capacity for elastic scaling.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMin() {
            return software.amazon.jsii.Kernel.get(this, "attrScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageQuota() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The size of the storage space.
         * <p>
         * Unit: GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: The storage type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details of the tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VswitchId: The VSwitch ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps.class));
        }
    }
}
