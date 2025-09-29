package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>EdgeContainerApp</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.444Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IEdgeContainerApp")
@software.amazon.jsii.Jsii.Proxy(IEdgeContainerApp.Jsii$Proxy.class)
public interface IEdgeContainerApp extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppStatus: The status of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppStatus();

    /**
     * Attribute CreateTime: The time when the application was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DomainName: The domain name that is associated with the application.
     * <p>
     * If no domain name is associated with the application, the value is an empty string.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName();

    /**
     * Attribute EdgeContainerAppName: The name of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeContainerAppName();

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayType();

    /**
     * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckFailTimes();

    /**
     * Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHost();

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode();

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval();

    /**
     * Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod();

    /**
     * Attribute HealthCheckPort: The port used for health checks.
     * <p>
     * Valid values: 1 to 65535. Default value: 80.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckPort();

    /**
     * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSuccTimes();

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout();

    /**
     * Attribute HealthCheckType: The health check type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType();

    /**
     * Attribute HealthCheckUri: The URI used for health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri();

    /**
     * Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuicCid();

    /**
     * Attribute Remarks: The remarks.
     * <p>
     * This parameter is empty by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarks();

    /**
     * Attribute ServicePort: The server port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort();

    /**
     * Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPort();

    /**
     * Attribute UpdateTime: The time when the application was last modified.
     * <p>
     * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute VersionCount: The number of versions of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCount();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IEdgeContainerApp.Jsii$Default {
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
         * Attribute AppStatus: The status of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAppStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the application was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The domain name that is associated with the application.
         * <p>
         * If no domain name is associated with the application, the value is an empty string.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeContainerAppName: The name of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeContainerAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeContainerAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayType: The type of the gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayType() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckFailTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckFailTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHost: The domain name that is used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckMethod: The HTTP request method for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckPort: The port used for health checks.
         * <p>
         * Valid values: 1 to 65535. Default value: 80.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSuccTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTimeout: The timeout period of a health check response.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckType: The health check type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URI used for health checks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QuicCid: Indicates whether QUIC is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuicCid() {
            return software.amazon.jsii.Kernel.get(this, "attrQuicCid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remarks: The remarks.
         * <p>
         * This parameter is empty by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarks() {
            return software.amazon.jsii.Kernel.get(this, "attrRemarks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServicePort: The server port.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
            return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetPort: The backend port, which is also the service port of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the application was last modified.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionCount: The number of versions of the application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCount() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.EdgeContainerAppProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEdgeContainerApp}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEdgeContainerApp, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppStatus: The status of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrAppStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the application was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DomainName: The domain name that is associated with the application.
         * <p>
         * If no domain name is associated with the application, the value is an empty string.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
            return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeContainerAppName: The name of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeContainerAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeContainerAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GatewayType: The type of the gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayType() {
            return software.amazon.jsii.Kernel.get(this, "attrGatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckFailTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckFailTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHost: The domain name that is used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHost() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckInterval: The interval between two consecutive health checks.
         * <p>
         * Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckMethod: The HTTP request method for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckPort: The port used for health checks.
         * <p>
         * Valid values: 1 to 65535. Default value: 80.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckPort() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckSuccTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckSuccTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckTimeout: The timeout period of a health check response.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckType: The health check type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HealthCheckUri: The URI used for health checks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
            return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QuicCid: Indicates whether QUIC is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQuicCid() {
            return software.amazon.jsii.Kernel.get(this, "attrQuicCid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remarks: The remarks.
         * <p>
         * This parameter is empty by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemarks() {
            return software.amazon.jsii.Kernel.get(this, "attrRemarks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServicePort: The server port.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServicePort() {
            return software.amazon.jsii.Kernel.get(this, "attrServicePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetPort: The backend port, which is also the service port of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetPort() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the application was last modified.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionCount: The number of versions of the application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionCount() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.EdgeContainerAppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.EdgeContainerAppProps.class));
        }
    }
}
