package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::CenInstanceAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenInstanceAttachment")
public class CenInstanceAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ICenInstanceAttachment {

    protected CenInstanceAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenInstanceAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CenInstanceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CenInstanceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenInstanceAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenInstanceAttachment> {
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
        private final com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenInstanceAttachmentProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property childInstanceId: The ID of the network to attach.
         * <p>
         * @return {@code this}
         * @param childInstanceId Property childInstanceId: The ID of the network to attach. This parameter is required.
         */
        public Builder childInstanceId(final java.lang.String childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }
        /**
         * Property childInstanceId: The ID of the network to attach.
         * <p>
         * @return {@code this}
         * @param childInstanceId Property childInstanceId: The ID of the network to attach. This parameter is required.
         */
        public Builder childInstanceId(final com.aliyun.ros.cdk.core.IResolvable childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }

        /**
         * Property childInstanceRegionId: The ID of the region where the network is located.
         * <p>
         * The ID of the region where the network is located.
         * <p>
         * @return {@code this}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the network is located. This parameter is required.
         */
        public Builder childInstanceRegionId(final java.lang.String childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }
        /**
         * Property childInstanceRegionId: The ID of the region where the network is located.
         * <p>
         * The ID of the region where the network is located.
         * <p>
         * @return {@code this}
         * @param childInstanceRegionId Property childInstanceRegionId: The ID of the region where the network is located. This parameter is required.
         */
        public Builder childInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }

        /**
         * Property childInstanceType: The type of the network to attach.
         * <p>
         * Support VPC, VBR or CCN.
         * <p>
         * @return {@code this}
         * @param childInstanceType Property childInstanceType: The type of the network to attach. This parameter is required.
         */
        public Builder childInstanceType(final java.lang.String childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }
        /**
         * Property childInstanceType: The type of the network to attach.
         * <p>
         * Support VPC, VBR or CCN.
         * <p>
         * @return {@code this}
         * @param childInstanceType Property childInstanceType: The type of the network to attach. This parameter is required.
         */
        public Builder childInstanceType(final com.aliyun.ros.cdk.core.IResolvable childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }

        /**
         * Property childInstanceOwnerId: The account ID to which the network belongs.
         * <p>
         * @return {@code this}
         * @param childInstanceOwnerId Property childInstanceOwnerId: The account ID to which the network belongs. This parameter is required.
         */
        public Builder childInstanceOwnerId(final java.lang.Number childInstanceOwnerId) {
            this.props.childInstanceOwnerId(childInstanceOwnerId);
            return this;
        }
        /**
         * Property childInstanceOwnerId: The account ID to which the network belongs.
         * <p>
         * @return {@code this}
         * @param childInstanceOwnerId Property childInstanceOwnerId: The account ID to which the network belongs. This parameter is required.
         */
        public Builder childInstanceOwnerId(final com.aliyun.ros.cdk.core.IResolvable childInstanceOwnerId) {
            this.props.childInstanceOwnerId(childInstanceOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.CenInstanceAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenInstanceAttachment build() {
            return new com.aliyun.ros.cdk.cen.CenInstanceAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
