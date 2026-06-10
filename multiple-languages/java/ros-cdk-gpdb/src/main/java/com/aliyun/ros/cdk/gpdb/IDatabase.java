package com.aliyun.ros.cdk.gpdb;

/**
 * Represents a <code>Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.745Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.IDatabase")
@software.amazon.jsii.Jsii.Proxy(IDatabase.Jsii$Proxy.class)
public interface IDatabase extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccessPrivilege: Permission Control Information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessPrivilege();

    /**
     * Attribute CharacterSetName: Character set, default value is UTF8.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName();

    /**
     * Attribute Collate: Database locale parameters, specifying string comparison/collation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollate();

    /**
     * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnLimit();

    /**
     * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCtype();

    /**
     * Attribute DatabaseName: Database Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseName();

    /**
     * Attribute DBInstanceId: Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute Description: Database Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Owner: Data Sheet owner.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner();

    /**
     * Attribute Size: Database size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize();

    /**
     * Attribute TableSpace: Database table space.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTableSpace();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.gpdb.IDatabase.Jsii$Default {
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
         * Attribute AccessPrivilege: Permission Control Information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessPrivilege() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CharacterSetName: Character set, default value is UTF8.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Collate: Database locale parameters, specifying string comparison/collation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollate() {
            return software.amazon.jsii.Kernel.get(this, "attrCollate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrConnLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCtype() {
            return software.amazon.jsii.Kernel.get(this, "attrCtype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseName: Database Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: Instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Database Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Data Sheet owner.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: Database size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TableSpace: Database table space.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTableSpace() {
            return software.amazon.jsii.Kernel.get(this, "attrTableSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DatabaseProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDatabase}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDatabase, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccessPrivilege: Permission Control Information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessPrivilege() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CharacterSetName: Character set, default value is UTF8.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName() {
            return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Collate: Database locale parameters, specifying string comparison/collation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollate() {
            return software.amazon.jsii.Kernel.get(this, "attrCollate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnLimit() {
            return software.amazon.jsii.Kernel.get(this, "attrConnLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCtype() {
            return software.amazon.jsii.Kernel.get(this, "attrCtype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DatabaseName: Database Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseName() {
            return software.amazon.jsii.Kernel.get(this, "attrDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: Instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Database Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Data Sheet owner.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: Database size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TableSpace: Database table space.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTableSpace() {
            return software.amazon.jsii.Kernel.get(this, "attrTableSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DatabaseProps.class));
        }
    }
}
