package com.aliyun.ros.cdk.dbs.datasource;

/**
 * Represents a <code>BackupPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.846Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.datasource.IBackupPlan")
@software.amazon.jsii.Jsii.Proxy(IBackupPlan.Jsii$Proxy.class)
public interface IBackupPlan extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BackupGatewayId: The ID of the backup gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupGatewayId();

    /**
     * Attribute BackupMethod: Backup method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupMethod();

    /**
     * Attribute BackupObjects: The backup object.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupObjects();

    /**
     * Attribute BackupPeriod: Full backup cycle.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPeriod();

    /**
     * Attribute BackupPlanId: The ID of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanId();

    /**
     * Attribute BackupPlanName: The name of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanName();

    /**
     * Attribute BackupRetentionPeriod: The retention time of backup data.
     * <p>
     * Valid values: 0 to 1825. Default value: 730 days.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod();

    /**
     * Attribute BackupStartTime: The start time of full Backup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStartTime();

    /**
     * Attribute BackupStorageType: Built-in storage type:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStorageType();

    /**
     * Attribute CreateTime: The creation time of the backup plans.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossAliyunId();

    /**
     * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossRoleName();

    /**
     * Attribute DatabaseType: Database type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseType();

    /**
     * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationArchivePeriod();

    /**
     * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.
     * <p>
     * The default time is 180 days.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationInfrequentAccessPeriod();

    /**
     * Attribute EnableBackupLog: Whether to enable incremental log Backup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog();

    /**
     * Attribute InstanceClass: Instance class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass();

    /**
     * Attribute OssBucketName: OSS Bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssBucketName();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SourceEndpointDatabaseName: The name of the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointDatabaseName();

    /**
     * Attribute SourceEndpointInstanceId: The ID of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceId();

    /**
     * Attribute SourceEndpointInstanceType: The location of the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceType();

    /**
     * Attribute SourceEndpointRegion: The region of the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion();

    /**
     * Attribute SourceEndpointSid: Oracle SID name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointSid();

    /**
     * Attribute SourceEndpointUserName: Database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointUserName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dbs.datasource.IBackupPlan.Jsii$Default {
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
         * Attribute BackupGatewayId: The ID of the backup gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupMethod: Backup method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupObjects: The backup object.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupObjects() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPeriod: Full backup cycle.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlanId: The ID of the backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlanName: The name of the backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanName() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupRetentionPeriod: The retention time of backup data.
         * <p>
         * Valid values: 0 to 1825. Default value: 730 days.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupStartTime: The start time of full Backup.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupStorageType: Built-in storage type:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the backup plans.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossAliyunId() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossAliyunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseType: Database type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseType() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationArchivePeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrDuplicationArchivePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.
         * <p>
         * The default time is 180 days.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationInfrequentAccessPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrDuplicationInfrequentAccessPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableBackupLog: Whether to enable incremental log Backup.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: Instance class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OssBucketName: OSS Bucket name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssBucketName() {
            return software.amazon.jsii.Kernel.get(this, "attrOssBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute SourceEndpointDatabaseName: The name of the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointInstanceId: The ID of the database instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointInstanceType: The location of the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointRegion: The region of the database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointSid: Oracle SID name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointSid() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointUserName: Database account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBackupPlan}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBackupPlan, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BackupGatewayId: The ID of the backup gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupMethod: Backup method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupObjects: The backup object.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupObjects() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPeriod: Full backup cycle.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlanId: The ID of the backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupPlanName: The name of the backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanName() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupRetentionPeriod: The retention time of backup data.
         * <p>
         * Valid values: 0 to 1825. Default value: 730 days.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupStartTime: The start time of full Backup.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupStorageType: Built-in storage type:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the backup plans.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossAliyunId() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossAliyunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCrossRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrCrossRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseType: Database type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseType() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationArchivePeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrDuplicationArchivePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.
         * <p>
         * The default time is 180 days.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDuplicationInfrequentAccessPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrDuplicationInfrequentAccessPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableBackupLog: Whether to enable incremental log Backup.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceClass: Instance class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OssBucketName: OSS Bucket name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssBucketName() {
            return software.amazon.jsii.Kernel.get(this, "attrOssBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute SourceEndpointDatabaseName: The name of the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointInstanceId: The ID of the database instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointInstanceType: The location of the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointRegion: The region of the database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointSid: Oracle SID name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointSid() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceEndpointUserName: Database account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceEndpointUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.datasource.BackupPlanProps.class));
        }
    }
}
