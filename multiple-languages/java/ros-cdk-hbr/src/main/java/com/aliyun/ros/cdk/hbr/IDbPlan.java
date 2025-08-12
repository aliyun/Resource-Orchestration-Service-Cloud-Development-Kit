package com.aliyun.ros.cdk.hbr;

/**
 * Represents a <code>DbPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.IDbPlan")
@software.amazon.jsii.Jsii.Proxy(IDbPlan.Jsii$Proxy.class)
public interface IDbPlan extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ContinuousPlan: Continuous backup plan schedule.
     * <p>
     * Use {   "type": "continuous" }.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousPlan();

    /**
     * Attribute ContinuousUuid: Uuid of continuous backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousUuid();

    /**
     * Attribute CumulativePlan: Cumulative plan schedule, only for mssql.
     * <p>
     * More details see FullPlan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativePlan();

    /**
     * Attribute CumulativeUuid: Uuid of cumulative plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativeUuid();

    /**
     * Attribute DbPlanName: Display name of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPlanName();

    /**
     * Attribute FullPlan: Full backup plan schedule.
     * <p>
     * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullPlan();

    /**
     * Attribute FullUuid: Uuid of full backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullUuid();

    /**
     * Attribute HostUuid: Uuid of the host of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostUuid();

    /**
     * Attribute IncPlan: Incremental backup plan schedule.
     * <p>
     * Only for mysql and oracle. More details see FullPlan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncPlan();

    /**
     * Attribute IncUuid: Uuid of the incremental bakcup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncUuid();

    /**
     * Attribute InstanceUuid: Uuid of database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUuid();

    /**
     * Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogPlan();

    /**
     * Attribute LogUuid: Uuid of the log backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogUuid();

    /**
     * Attribute MaxRateLimit: Max rate limit for backup job,.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRateLimit();

    /**
     * Attribute MaxRetrySeconds: Max retry seconds on network failure.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRetrySeconds();

    /**
     * Attribute Options: Backup options in json format, different for each type of database.
     * <p>
     * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions();

    /**
     * Attribute PlanId: Id of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId();

    /**
     * Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType();

    /**
     * Attribute Target: Target vault to backup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTarget();

    /**
     * Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbPlanProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hbr.IDbPlan.Jsii$Default {
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
         * Attribute ContinuousPlan: Continuous backup plan schedule.
         * <p>
         * Use {   "type": "continuous" }.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrContinuousPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContinuousUuid: Uuid of continuous backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrContinuousUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CumulativePlan: Cumulative plan schedule, only for mssql.
         * <p>
         * More details see FullPlan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativePlan() {
            return software.amazon.jsii.Kernel.get(this, "attrCumulativePlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CumulativeUuid: Uuid of cumulative plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativeUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrCumulativeUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbPlanName: Display name of the backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPlanName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FullPlan: Full backup plan schedule.
         * <p>
         * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrFullPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FullUuid: Uuid of full backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrFullUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostUuid: Uuid of the host of the database instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrHostUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncPlan: Incremental backup plan schedule.
         * <p>
         * Only for mysql and oracle. More details see FullPlan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrIncPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncUuid: Uuid of the incremental bakcup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrIncUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceUuid: Uuid of database instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrLogPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogUuid: Uuid of the log backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrLogUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxRateLimit: Max rate limit for backup job,.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRateLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxRateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxRetrySeconds: Max retry seconds on network failure.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRetrySeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxRetrySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Backup options in json format, different for each type of database.
         * <p>
         * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanId: Id of the backup plan.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Target: Target vault to backup.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTarget() {
            return software.amazon.jsii.Kernel.get(this, "attrTarget", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbPlanProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbPlanProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDbPlan}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDbPlan, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ContinuousPlan: Continuous backup plan schedule.
         * <p>
         * Use {   "type": "continuous" }.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrContinuousPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContinuousUuid: Uuid of continuous backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContinuousUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrContinuousUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CumulativePlan: Cumulative plan schedule, only for mssql.
         * <p>
         * More details see FullPlan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativePlan() {
            return software.amazon.jsii.Kernel.get(this, "attrCumulativePlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CumulativeUuid: Uuid of cumulative plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCumulativeUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrCumulativeUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbPlanName: Display name of the backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbPlanName() {
            return software.amazon.jsii.Kernel.get(this, "attrDbPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FullPlan: Full backup plan schedule.
         * <p>
         * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrFullPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FullUuid: Uuid of full backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFullUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrFullUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostUuid: Uuid of the host of the database instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrHostUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncPlan: Incremental backup plan schedule.
         * <p>
         * Only for mysql and oracle. More details see FullPlan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrIncPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncUuid: Uuid of the incremental bakcup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrIncUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceUuid: Uuid of database instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogPlan() {
            return software.amazon.jsii.Kernel.get(this, "attrLogPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogUuid: Uuid of the log backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogUuid() {
            return software.amazon.jsii.Kernel.get(this, "attrLogUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxRateLimit: Max rate limit for backup job,.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRateLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxRateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxRetrySeconds: Max retry seconds on network failure.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxRetrySeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxRetrySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Backup options in json format, different for each type of database.
         * <p>
         * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PlanId: Id of the backup plan.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPlanId() {
            return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Target: Target vault to backup.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTarget() {
            return software.amazon.jsii.Kernel.get(this, "attrTarget", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbPlanProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.DbPlanProps.class));
        }
    }
}
