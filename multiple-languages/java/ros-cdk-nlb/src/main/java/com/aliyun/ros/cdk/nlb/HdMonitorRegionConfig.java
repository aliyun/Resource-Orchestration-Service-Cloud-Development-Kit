package com.aliyun.ros.cdk.nlb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLB::HdMonitorRegionConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:01:45.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.HdMonitorRegionConfig")
public class HdMonitorRegionConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nlb.IHdMonitorRegionConfig {

    protected HdMonitorRegionConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HdMonitorRegionConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HdMonitorRegionConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HdMonitorRegionConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LogProject: The name of the LogProject.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogProject() {
        return software.amazon.jsii.Kernel.get(this, "attrLogProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MetricStore: The name of the MetricStore.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetricStore() {
        return software.amazon.jsii.Kernel.get(this, "attrMetricStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.HdMonitorRegionConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.HdMonitorRegionConfig> {
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
        private final com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.HdMonitorRegionConfigProps.Builder();
        }

        /**
         * Property logProject: The name of the LogProject.
         * <p>
         * @return {@code this}
         * @param logProject Property logProject: The name of the LogProject. This parameter is required.
         */
        public Builder logProject(final java.lang.String logProject) {
            this.props.logProject(logProject);
            return this;
        }
        /**
         * Property logProject: The name of the LogProject.
         * <p>
         * @return {@code this}
         * @param logProject Property logProject: The name of the LogProject. This parameter is required.
         */
        public Builder logProject(final com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.props.logProject(logProject);
            return this;
        }

        /**
         * Property metricStore: The name of the MetricStore.
         * <p>
         * @return {@code this}
         * @param metricStore Property metricStore: The name of the MetricStore. This parameter is required.
         */
        public Builder metricStore(final java.lang.String metricStore) {
            this.props.metricStore(metricStore);
            return this;
        }
        /**
         * Property metricStore: The name of the MetricStore.
         * <p>
         * @return {@code this}
         * @param metricStore Property metricStore: The name of the MetricStore. This parameter is required.
         */
        public Builder metricStore(final com.aliyun.ros.cdk.core.IResolvable metricStore) {
            this.props.metricStore(metricStore);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.HdMonitorRegionConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.HdMonitorRegionConfig build() {
            return new com.aliyun.ros.cdk.nlb.HdMonitorRegionConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
