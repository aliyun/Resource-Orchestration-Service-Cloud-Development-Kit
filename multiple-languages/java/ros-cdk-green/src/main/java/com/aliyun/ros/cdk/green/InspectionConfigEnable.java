package com.aliyun.ros.cdk.green;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Green::InspectionConfigEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.329Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.green.$Module.class, fqn = "@alicloud/ros-cdk-green.InspectionConfigEnable")
public class InspectionConfigEnable extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.green.IInspectionConfigEnable {

    protected InspectionConfigEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InspectionConfigEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InspectionConfigEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.green.InspectionConfigEnableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InspectionConfigEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.green.InspectionConfigEnableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.green.InspectionConfigEnableProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.green.InspectionConfigEnableProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.green.InspectionConfigEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.green.InspectionConfigEnable> {
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
        private final com.aliyun.ros.cdk.green.InspectionConfigEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.green.InspectionConfigEnableProps.Builder();
        }

        /**
         * Property configType: The type of the configuration to be enabled for inspection.
         * <p>
         * @return {@code this}
         * @param configType Property configType: The type of the configuration to be enabled for inspection. This parameter is required.
         */
        public Builder configType(final java.lang.String configType) {
            this.props.configType(configType);
            return this;
        }
        /**
         * Property configType: The type of the configuration to be enabled for inspection.
         * <p>
         * @return {@code this}
         * @param configType Property configType: The type of the configuration to be enabled for inspection. This parameter is required.
         */
        public Builder configType(final com.aliyun.ros.cdk.core.IResolvable configType) {
            this.props.configType(configType);
            return this;
        }

        /**
         * Property serviceCode: The code of the service to be enabled for inspection.
         * <p>
         * @return {@code this}
         * @param serviceCode Property serviceCode: The code of the service to be enabled for inspection. This parameter is required.
         */
        public Builder serviceCode(final java.lang.String serviceCode) {
            this.props.serviceCode(serviceCode);
            return this;
        }
        /**
         * Property serviceCode: The code of the service to be enabled for inspection.
         * <p>
         * @return {@code this}
         * @param serviceCode Property serviceCode: The code of the service to be enabled for inspection. This parameter is required.
         */
        public Builder serviceCode(final com.aliyun.ros.cdk.core.IResolvable serviceCode) {
            this.props.serviceCode(serviceCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.green.InspectionConfigEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.green.InspectionConfigEnable build() {
            return new com.aliyun.ros.cdk.green.InspectionConfigEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
