package com.aliyun.ros.cdk.apig.datasource;

/**
 * Represents a <code>Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.648Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.IRoute")
@software.amazon.jsii.Jsii.Proxy(IRoute.Jsii$Proxy.class)
public interface IRoute extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Backend: backend services.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackend();

    /**
     * Attribute Description: description of route resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DomainInfos: domain items.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainInfos();

    /**
     * Attribute EnvironmentInfo: environment information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentInfo();

    /**
     * Attribute Match: the match rule of route resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatch();

    /**
     * Attribute RouteId: The ID of route resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId();

    /**
     * Attribute RouteName: The name of the route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.RouteProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.datasource.IRoute.Jsii$Default {
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
         * Attribute Backend: backend services.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackend() {
            return software.amazon.jsii.Kernel.get(this, "attrBackend", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: description of route resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainInfos: domain items.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentInfo: environment information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Match: the match rule of route resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatch() {
            return software.amazon.jsii.Kernel.get(this, "attrMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteId: The ID of route resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteName: The name of the route.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.RouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.datasource.RouteProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRoute}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRoute, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Backend: backend services.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackend() {
            return software.amazon.jsii.Kernel.get(this, "attrBackend", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: description of route resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainInfos: domain items.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentInfo: environment information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Match: the match rule of route resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatch() {
            return software.amazon.jsii.Kernel.get(this, "attrMatch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteId: The ID of route resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteName: The name of the route.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.datasource.RouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.datasource.RouteProps.class));
        }
    }
}
