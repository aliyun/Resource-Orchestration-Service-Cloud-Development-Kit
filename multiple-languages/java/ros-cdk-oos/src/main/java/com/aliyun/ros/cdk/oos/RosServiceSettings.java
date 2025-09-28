package com.aliyun.ros.cdk.oos;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::OOS::ServiceSettings</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.340Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosServiceSettings")
public class RosServiceSettings extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServiceSettings(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServiceSettings(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oos.RosServiceSettings.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServiceSettings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.RosServiceSettingsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssBucketName() {
        return software.amazon.jsii.Kernel.get(this, "deliveryOssBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryOssBucketName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssBucketName", value);
    }

    /**
     */
    public void setDeliveryOssBucketName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssBucketName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssEnabled() {
        return software.amazon.jsii.Kernel.get(this, "deliveryOssEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryOssEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssEnabled", value);
    }

    /**
     */
    public void setDeliveryOssEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssKeyPrefix() {
        return software.amazon.jsii.Kernel.get(this, "deliveryOssKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryOssKeyPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssKeyPrefix", value);
    }

    /**
     */
    public void setDeliveryOssKeyPrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOssKeyPrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliverySlsEnabled() {
        return software.amazon.jsii.Kernel.get(this, "deliverySlsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliverySlsEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deliverySlsEnabled", value);
    }

    /**
     */
    public void setDeliverySlsEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliverySlsEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliverySlsProjectName() {
        return software.amazon.jsii.Kernel.get(this, "deliverySlsProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliverySlsProjectName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliverySlsProjectName", value);
    }

    /**
     */
    public void setDeliverySlsProjectName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliverySlsProjectName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRdcEnterpriseId() {
        return software.amazon.jsii.Kernel.get(this, "rdcEnterpriseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdcEnterpriseId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdcEnterpriseId", value);
    }

    /**
     */
    public void setRdcEnterpriseId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdcEnterpriseId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.RosServiceSettings}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.RosServiceSettings> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oos.RosServiceSettingsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.RosServiceSettingsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param deliveryOssBucketName This parameter is required.
         */
        public Builder deliveryOssBucketName(final java.lang.String deliveryOssBucketName) {
            this.props.deliveryOssBucketName(deliveryOssBucketName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryOssBucketName This parameter is required.
         */
        public Builder deliveryOssBucketName(final com.aliyun.ros.cdk.core.IResolvable deliveryOssBucketName) {
            this.props.deliveryOssBucketName(deliveryOssBucketName);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryOssEnabled This parameter is required.
         */
        public Builder deliveryOssEnabled(final java.lang.Boolean deliveryOssEnabled) {
            this.props.deliveryOssEnabled(deliveryOssEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryOssEnabled This parameter is required.
         */
        public Builder deliveryOssEnabled(final com.aliyun.ros.cdk.core.IResolvable deliveryOssEnabled) {
            this.props.deliveryOssEnabled(deliveryOssEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryOssKeyPrefix This parameter is required.
         */
        public Builder deliveryOssKeyPrefix(final java.lang.String deliveryOssKeyPrefix) {
            this.props.deliveryOssKeyPrefix(deliveryOssKeyPrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryOssKeyPrefix This parameter is required.
         */
        public Builder deliveryOssKeyPrefix(final com.aliyun.ros.cdk.core.IResolvable deliveryOssKeyPrefix) {
            this.props.deliveryOssKeyPrefix(deliveryOssKeyPrefix);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliverySlsEnabled This parameter is required.
         */
        public Builder deliverySlsEnabled(final java.lang.Boolean deliverySlsEnabled) {
            this.props.deliverySlsEnabled(deliverySlsEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliverySlsEnabled This parameter is required.
         */
        public Builder deliverySlsEnabled(final com.aliyun.ros.cdk.core.IResolvable deliverySlsEnabled) {
            this.props.deliverySlsEnabled(deliverySlsEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliverySlsProjectName This parameter is required.
         */
        public Builder deliverySlsProjectName(final java.lang.String deliverySlsProjectName) {
            this.props.deliverySlsProjectName(deliverySlsProjectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliverySlsProjectName This parameter is required.
         */
        public Builder deliverySlsProjectName(final com.aliyun.ros.cdk.core.IResolvable deliverySlsProjectName) {
            this.props.deliverySlsProjectName(deliverySlsProjectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdcEnterpriseId This parameter is required.
         */
        public Builder rdcEnterpriseId(final java.lang.String rdcEnterpriseId) {
            this.props.rdcEnterpriseId(rdcEnterpriseId);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdcEnterpriseId This parameter is required.
         */
        public Builder rdcEnterpriseId(final com.aliyun.ros.cdk.core.IResolvable rdcEnterpriseId) {
            this.props.rdcEnterpriseId(rdcEnterpriseId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.RosServiceSettings}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.RosServiceSettings build() {
            return new com.aliyun.ros.cdk.oos.RosServiceSettings(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
