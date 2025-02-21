package com.aliyun.ros.cdk.drds.datasource;

/**
 * Represents a <code>DrdsInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.236Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.IDrdsInstance")
@software.amazon.jsii.Jsii.Proxy(IDrdsInstance.Jsii$Proxy.class)
public interface IDrdsInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CommodityCode: The commodity code of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode();

    /**
     * Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsInstanceId();

    /**
     * Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDate();

    /**
     * Attribute InstanceSeries: The edition of the instance.
     * <p>
     * Valid values:
     * starter: Starter Edition
     * enterprise: Enterprise Edition
     * standard: Standard Edition
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSeries();

    /**
     * Attribute InstanceSpec: The specification of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec();

    /**
     * Attribute InstRole: The role of the instance.
     * <p>
     * Valid values:
     * MASTER: The instance is a primary instance.
     * SLAVE: The instance is a read-only instance to analyze complex queries.
     * SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole();

    /**
     * Attribute Label: The tag of the instance.
     * <p>
     * Valid values:
     * NORMAL: The instance is a standard instance.
     * HA: The instance is a high-availability (HA) instance.
     * VPC: The instance is a VPC-based instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabel();

    /**
     * Attribute MachineType: The machine type of the instance.
     * <p>
     * Valid value: ecs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMachineType();

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId();

    /**
     * Attribute MysqlVersion: Engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMysqlVersion();

    /**
     * Attribute NetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * CLASSIC
     * VPC
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute OrderInstanceId: The ID of the purchased instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderInstanceId();

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute StorageType: The storage type of the Drds database.
     * <p>
     * Valid values:
     * RDS
     * PolarDB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType();

    /**
     * Attribute Type: The type of the instance.
     * <p>
     * Valid values:
     * PUBLIC: The returned instance is a shared instance.
     * PRIVATE: The returned instance is a dedicated instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute Version: The version of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion();

    /**
     * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionAction();

    /**
     * Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVips();

    /**
     * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId();

    /**
     * Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.drds.datasource.IDrdsInstance.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CommodityCode: The commodity code of the service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The timestamp that indicates when the instance is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsInstanceId: The ID of the Drds instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireDate: The timestamp that indicates when the instance expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDate() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSeries: The edition of the instance.
         * <p>
         * Valid values:
         * starter: Starter Edition
         * enterprise: Enterprise Edition
         * standard: Standard Edition
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSeries() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpec: The specification of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstRole: The role of the instance.
         * <p>
         * Valid values:
         * MASTER: The instance is a primary instance.
         * SLAVE: The instance is a read-only instance to analyze complex queries.
         * SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole() {
            return software.amazon.jsii.Kernel.get(this, "attrInstRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Label: The tag of the instance.
         * <p>
         * Valid values:
         * NORMAL: The instance is a standard instance.
         * HA: The instance is a high-availability (HA) instance.
         * VPC: The instance is a VPC-based instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabel() {
            return software.amazon.jsii.Kernel.get(this, "attrLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MachineType: The machine type of the instance.
         * <p>
         * Valid value: ecs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMachineType() {
            return software.amazon.jsii.Kernel.get(this, "attrMachineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The ID of the primary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MysqlVersion: Engine version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMysqlVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMysqlVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderInstanceId: The ID of the purchased instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: The storage type of the Drds database.
         * <p>
         * Valid values:
         * RDS
         * PolarDB
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the instance.
         * <p>
         * Valid values:
         * PUBLIC: The returned instance is a shared instance.
         * PRIVATE: The returned instance is a dedicated instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionAction() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vips: The list of returned virtual IP addresses (VIPs).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVips() {
            return software.amazon.jsii.Kernel.get(this, "attrVips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the resource is located.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDrdsInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDrdsInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CommodityCode: The commodity code of the service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The timestamp that indicates when the instance is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsInstanceId: The ID of the Drds instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireDate: The timestamp that indicates when the instance expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDate() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSeries: The edition of the instance.
         * <p>
         * Valid values:
         * starter: Starter Edition
         * enterprise: Enterprise Edition
         * standard: Standard Edition
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSeries() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceSpec: The specification of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstRole: The role of the instance.
         * <p>
         * Valid values:
         * MASTER: The instance is a primary instance.
         * SLAVE: The instance is a read-only instance to analyze complex queries.
         * SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole() {
            return software.amazon.jsii.Kernel.get(this, "attrInstRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Label: The tag of the instance.
         * <p>
         * Valid values:
         * NORMAL: The instance is a standard instance.
         * HA: The instance is a high-availability (HA) instance.
         * VPC: The instance is a VPC-based instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabel() {
            return software.amazon.jsii.Kernel.get(this, "attrLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MachineType: The machine type of the instance.
         * <p>
         * Valid value: ecs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMachineType() {
            return software.amazon.jsii.Kernel.get(this, "attrMachineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The ID of the primary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MysqlVersion: Engine version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMysqlVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrMysqlVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderInstanceId: The ID of the purchased instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageType: The storage type of the Drds database.
         * <p>
         * Valid values:
         * RDS
         * PolarDB
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the instance.
         * <p>
         * Valid values:
         * PUBLIC: The returned instance is a shared instance.
         * PRIVATE: The returned instance is a dedicated instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Version: The version of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionAction() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Vips: The list of returned virtual IP addresses (VIPs).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVips() {
            return software.amazon.jsii.Kernel.get(this, "attrVips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the resource is located.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps.class));
        }
    }
}
