package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::ServiceSettings</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.348Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.ServiceSettings")
public class ServiceSettings extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oos.IServiceSettings {

    protected ServiceSettings(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServiceSettings(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public ServiceSettings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.ServiceSettingsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ServiceSettings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oos.ServiceSettingsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ServiceSettings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.ServiceSettingsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.ServiceSettingsProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.ServiceSettings}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.ServiceSettings> {
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
        private com.aliyun.ros.cdk.oos.ServiceSettingsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property deliveryOssBucketName: OSS bucket name.
         * <p>
         * @return {@code this}
         * @param deliveryOssBucketName Property deliveryOssBucketName: OSS bucket name. This parameter is required.
         */
        public Builder deliveryOssBucketName(final java.lang.String deliveryOssBucketName) {
            this.props().deliveryOssBucketName(deliveryOssBucketName);
            return this;
        }
        /**
         * Property deliveryOssBucketName: OSS bucket name.
         * <p>
         * @return {@code this}
         * @param deliveryOssBucketName Property deliveryOssBucketName: OSS bucket name. This parameter is required.
         */
        public Builder deliveryOssBucketName(final com.aliyun.ros.cdk.core.IResolvable deliveryOssBucketName) {
            this.props().deliveryOssBucketName(deliveryOssBucketName);
            return this;
        }

        /**
         * Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param deliveryOssEnabled Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature. This parameter is required.
         */
        public Builder deliveryOssEnabled(final java.lang.Boolean deliveryOssEnabled) {
            this.props().deliveryOssEnabled(deliveryOssEnabled);
            return this;
        }
        /**
         * Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param deliveryOssEnabled Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature. This parameter is required.
         */
        public Builder deliveryOssEnabled(final com.aliyun.ros.cdk.core.IResolvable deliveryOssEnabled) {
            this.props().deliveryOssEnabled(deliveryOssEnabled);
            return this;
        }

        /**
         * Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
         * <p>
         * @return {@code this}
         * @param deliveryOssKeyPrefix Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "". This parameter is required.
         */
        public Builder deliveryOssKeyPrefix(final java.lang.String deliveryOssKeyPrefix) {
            this.props().deliveryOssKeyPrefix(deliveryOssKeyPrefix);
            return this;
        }
        /**
         * Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
         * <p>
         * @return {@code this}
         * @param deliveryOssKeyPrefix Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "". This parameter is required.
         */
        public Builder deliveryOssKeyPrefix(final com.aliyun.ros.cdk.core.IResolvable deliveryOssKeyPrefix) {
            this.props().deliveryOssKeyPrefix(deliveryOssKeyPrefix);
            return this;
        }

        /**
         * Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param deliverySlsEnabled Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature. This parameter is required.
         */
        public Builder deliverySlsEnabled(final java.lang.Boolean deliverySlsEnabled) {
            this.props().deliverySlsEnabled(deliverySlsEnabled);
            return this;
        }
        /**
         * Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param deliverySlsEnabled Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature. This parameter is required.
         */
        public Builder deliverySlsEnabled(final com.aliyun.ros.cdk.core.IResolvable deliverySlsEnabled) {
            this.props().deliverySlsEnabled(deliverySlsEnabled);
            return this;
        }

        /**
         * Property deliverySlsProjectName: SLS project name.
         * <p>
         * @return {@code this}
         * @param deliverySlsProjectName Property deliverySlsProjectName: SLS project name. This parameter is required.
         */
        public Builder deliverySlsProjectName(final java.lang.String deliverySlsProjectName) {
            this.props().deliverySlsProjectName(deliverySlsProjectName);
            return this;
        }
        /**
         * Property deliverySlsProjectName: SLS project name.
         * <p>
         * @return {@code this}
         * @param deliverySlsProjectName Property deliverySlsProjectName: SLS project name. This parameter is required.
         */
        public Builder deliverySlsProjectName(final com.aliyun.ros.cdk.core.IResolvable deliverySlsProjectName) {
            this.props().deliverySlsProjectName(deliverySlsProjectName);
            return this;
        }

        /**
         * Property rdcEnterpriseId: Enterprise ID.
         * <p>
         * @return {@code this}
         * @param rdcEnterpriseId Property rdcEnterpriseId: Enterprise ID. This parameter is required.
         */
        public Builder rdcEnterpriseId(final java.lang.String rdcEnterpriseId) {
            this.props().rdcEnterpriseId(rdcEnterpriseId);
            return this;
        }
        /**
         * Property rdcEnterpriseId: Enterprise ID.
         * <p>
         * @return {@code this}
         * @param rdcEnterpriseId Property rdcEnterpriseId: Enterprise ID. This parameter is required.
         */
        public Builder rdcEnterpriseId(final com.aliyun.ros.cdk.core.IResolvable rdcEnterpriseId) {
            this.props().rdcEnterpriseId(rdcEnterpriseId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.ServiceSettings}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.ServiceSettings build() {
            return new com.aliyun.ros.cdk.oos.ServiceSettings(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.oos.ServiceSettingsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.oos.ServiceSettingsProps.Builder();
            }
            return this.props;
        }
    }
}
