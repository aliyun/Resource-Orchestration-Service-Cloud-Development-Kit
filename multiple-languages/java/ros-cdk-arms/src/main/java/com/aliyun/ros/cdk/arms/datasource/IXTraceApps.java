package com.aliyun.ros.cdk.arms.datasource;

/**
 * Represents a <code>XTraceApps</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.033Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.datasource.IXTraceApps")
@software.amazon.jsii.Jsii.Proxy(IXTraceApps.Jsii$Proxy.class)
public interface IXTraceApps extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Pids: The list of Pids.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPids();

    /**
     * Attribute XTraceApps: The list of Application Monitoring tasks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrXTraceApps();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.XTraceAppsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.arms.datasource.IXTraceApps.Jsii$Default {
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
         * Attribute Pids: The list of Pids.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPids() {
            return software.amazon.jsii.Kernel.get(this, "attrPids", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute XTraceApps: The list of Application Monitoring tasks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrXTraceApps() {
            return software.amazon.jsii.Kernel.get(this, "attrXTraceApps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.XTraceAppsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.XTraceAppsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IXTraceApps}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IXTraceApps, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Pids: The list of Pids.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPids() {
            return software.amazon.jsii.Kernel.get(this, "attrPids", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute XTraceApps: The list of Application Monitoring tasks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrXTraceApps() {
            return software.amazon.jsii.Kernel.get(this, "attrXTraceApps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.datasource.XTraceAppsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.datasource.XTraceAppsProps.class));
        }
    }
}
