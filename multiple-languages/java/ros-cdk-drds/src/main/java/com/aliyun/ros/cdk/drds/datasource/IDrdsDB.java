package com.aliyun.ros.cdk.drds.datasource;

/**
 * Represents a <code>DrdsDB</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.683Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.IDrdsDB")
@software.amazon.jsii.Jsii.Proxy(IDrdsDB.Jsii$Proxy.class)
public interface IDrdsDB extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: Database creation timestamp.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DrdsDatabaseName: The name of the Drds database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsDatabaseName();

    /**
     * Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole();

    /**
     * Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchema();

    /**
     * Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSplitMode();

    /**
     * Attribute StorageType: The storage type of the Drds database.
     * <p>
     * Valid values:
     * RDS
     * PolarDB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsDBProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.drds.datasource.IDrdsDB.Jsii$Default {
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
         * Attribute CreateTime: Database creation timestamp.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsDatabaseName: The name of the Drds database.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole() {
            return software.amazon.jsii.Kernel.get(this, "attrInstRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchema() {
            return software.amazon.jsii.Kernel.get(this, "attrSchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSplitMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSplitMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsDBProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.DrdsDBProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDrdsDB}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDrdsDB, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: Database creation timestamp.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DrdsDatabaseName: The name of the Drds database.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrDrdsDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole() {
            return software.amazon.jsii.Kernel.get(this, "attrInstRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchema() {
            return software.amazon.jsii.Kernel.get(this, "attrSchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSplitMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSplitMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsDBProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.DrdsDBProps.class));
        }
    }
}
