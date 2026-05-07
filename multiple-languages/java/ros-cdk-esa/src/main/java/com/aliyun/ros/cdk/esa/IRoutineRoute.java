package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>RoutineRoute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.024Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IRoutineRoute")
@software.amazon.jsii.Jsii.Proxy(IRoutineRoute.Jsii$Proxy.class)
public interface IRoutineRoute extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Bypass: Bypass mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypass();

    /**
     * Attribute ConfigId: The configuration ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: The configuration type.
     * <p>
     * You can use this parameter to check the global configuration or rule configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute Fallback: An exception to the origin server switch will be enabled.
     * <p>
     * If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFallback();

    /**
     * Attribute Mode: Configuration mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode();

    /**
     * Attribute RouteEnable: Routing switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteEnable();

    /**
     * Attribute RouteName: The route name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName();

    /**
     * Attribute RoutineName: The edge function Routine name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoutineName();

    /**
     * Attribute Rule: The content of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule();

    /**
     * Attribute Sequence: Rule execution order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence();

    /**
     * Attribute SiteVersion: Version number of the site.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IRoutineRoute.Jsii$Default {
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
         * Attribute Bypass: Bypass mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypass() {
            return software.amazon.jsii.Kernel.get(this, "attrBypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigId: The configuration ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         * <p>
         * You can use this parameter to check the global configuration or rule configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Fallback: An exception to the origin server switch will be enabled.
         * <p>
         * If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFallback() {
            return software.amazon.jsii.Kernel.get(this, "attrFallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mode: Configuration mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteEnable: Routing switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteName: The route name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoutineName: The edge function Routine name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoutineName() {
            return software.amazon.jsii.Kernel.get(this, "attrRoutineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: The content of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Rule execution order.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: Version number of the site.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RoutineRouteProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRoutineRoute}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRoutineRoute, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Bypass: Bypass mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypass() {
            return software.amazon.jsii.Kernel.get(this, "attrBypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigId: The configuration ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         * <p>
         * You can use this parameter to check the global configuration or rule configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Fallback: An exception to the origin server switch will be enabled.
         * <p>
         * If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFallback() {
            return software.amazon.jsii.Kernel.get(this, "attrFallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mode: Configuration mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteEnable: Routing switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteName: The route name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteName() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoutineName: The edge function Routine name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoutineName() {
            return software.amazon.jsii.Kernel.get(this, "attrRoutineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: The content of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Rule execution order.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: Version number of the site.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RoutineRouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RoutineRouteProps.class));
        }
    }
}
