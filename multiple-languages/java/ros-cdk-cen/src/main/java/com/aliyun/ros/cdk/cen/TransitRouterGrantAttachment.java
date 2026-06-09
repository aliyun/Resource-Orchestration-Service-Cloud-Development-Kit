package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterGrantAttachment</code>The , which resource grants a transit router permissions on a network instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterGrantAttachment")
public class TransitRouterGrantAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ITransitRouterGrantAttachment {

    protected TransitRouterGrantAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterGrantAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterGrantAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterGrantAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterGrantAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterGrantAttachment> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterGrantAttachmentProps.Builder();
        }

        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner. This parameter is required.
         */
        public Builder cenOwnerId(final java.lang.Number cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }
        /**
         * Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner. This parameter is required.
         */
        public Builder cenOwnerId(final com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }

        /**
         * Property instanceId: The ID of the network instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the network instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceType: The type of the network instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VPC: Virtual Private Cloud instance.</li>
         * <li>ExpressConnect: Virtual Border Router (VBR) instance.</li>
         * <li>VPN: IPsec connection.</li>
         * <li>ECR: ECR instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the network instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VPC: Virtual Private Cloud instance.</li>
         * <li>ExpressConnect: Virtual Border Router (VBR) instance.</li>
         * <li>VPN: IPsec connection.</li>
         * <li>ECR: ECR instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property orderType: The billing method for the network instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</li>
         * <li>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param orderType Property orderType: The billing method for the network instance. This parameter is required.
         */
        public Builder orderType(final java.lang.String orderType) {
            this.props.orderType(orderType);
            return this;
        }
        /**
         * Property orderType: The billing method for the network instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</li>
         * <li>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param orderType Property orderType: The billing method for the network instance. This parameter is required.
         */
        public Builder orderType(final com.aliyun.ros.cdk.core.IResolvable orderType) {
            this.props.orderType(orderType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterGrantAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterGrantAttachment build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterGrantAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
