package com.aliyun.ros.cdk.privatelink;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PrivateLink::VpcEndpointServiceAttachment</code>, which is used to add a service resource to an endpoint service.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.516Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachment")
public class VpcEndpointServiceAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected VpcEndpointServiceAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcEndpointServiceAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public VpcEndpointServiceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VpcEndpointServiceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ResourceId: The resource id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceType: The resource type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps.Builder();
        }

        /**
         * Property resourceId: The resource id.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: The resource id.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props.resourceId(resourceId);
            return this;
        }

        /**
         * Property resourceType: The resource type.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.</li>
         * <li>alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.</li>
         * <li>nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The resource type.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>slb: indicates a Classic Load Balancer (CLB) instance whose service resource type is a private network and supports the PrivateLink function.</li>
         * <li>alb: indicates an Application Load Balancer (ALB) instance whose service resources are private networks and which supports the PrivateLink function.</li>
         * <li>nlb: indicates a Network Load Balancer (NLB) instance that uses private network resources and supports the PrivateLink function.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property serviceId: The endpoint service that is associated with the endpoint.
         * <p>
         * @return {@code this}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceId(final java.lang.String serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }
        /**
         * Property serviceId: The endpoint service that is associated with the endpoint.
         * <p>
         * @return {@code this}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         */
        public Builder serviceId(final com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachment build() {
            return new com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
