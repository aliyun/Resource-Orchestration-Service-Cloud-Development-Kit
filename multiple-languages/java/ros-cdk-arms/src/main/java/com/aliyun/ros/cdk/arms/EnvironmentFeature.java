package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::EnvironmentFeature</code>, which is used to install a feature.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.950Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.EnvironmentFeature")
public class EnvironmentFeature extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.IEnvironmentFeature {

    protected EnvironmentFeature(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnvironmentFeature(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnvironmentFeature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnvironmentFeature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EnvironmentId: The environment ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Feature: The installation information of the feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeature() {
        return software.amazon.jsii.Kernel.get(this, "attrFeature", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FeatureName: The name of the feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureName() {
        return software.amazon.jsii.Kernel.get(this, "attrFeatureName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FeatureStatus: The status of the feature.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeatureStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrFeatureStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentFeatureProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentFeatureProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.EnvironmentFeature}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.EnvironmentFeature> {
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
        private final com.aliyun.ros.cdk.arms.EnvironmentFeatureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.EnvironmentFeatureProps.Builder();
        }

        /**
         * Property environmentId: The id of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The id of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * Property featureName: The name of the feature.
         * <p>
         * Valid values:
         * app-agent-pilot
         * metric-agent
         * <p>
         * @return {@code this}
         * @param featureName Property featureName: The name of the feature. This parameter is required.
         */
        public Builder featureName(final java.lang.String featureName) {
            this.props.featureName(featureName);
            return this;
        }
        /**
         * Property featureName: The name of the feature.
         * <p>
         * Valid values:
         * app-agent-pilot
         * metric-agent
         * <p>
         * @return {@code this}
         * @param featureName Property featureName: The name of the feature. This parameter is required.
         */
        public Builder featureName(final com.aliyun.ros.cdk.core.IResolvable featureName) {
            this.props.featureName(featureName);
            return this;
        }

        /**
         * Property featureVersion: The version of the feature.
         * <p>
         * @return {@code this}
         * @param featureVersion Property featureVersion: The version of the feature. This parameter is required.
         */
        public Builder featureVersion(final java.lang.String featureVersion) {
            this.props.featureVersion(featureVersion);
            return this;
        }
        /**
         * Property featureVersion: The version of the feature.
         * <p>
         * @return {@code this}
         * @param featureVersion Property featureVersion: The version of the feature. This parameter is required.
         */
        public Builder featureVersion(final com.aliyun.ros.cdk.core.IResolvable featureVersion) {
            this.props.featureVersion(featureVersion);
            return this;
        }

        /**
         * Property config: The metadata of the feature.
         * <p>
         * @return {@code this}
         * @param config Property config: The metadata of the feature. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: The metadata of the feature.
         * <p>
         * @return {@code this}
         * @param config Property config: The metadata of the feature. This parameter is required.
         */
        public Builder config(final java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.EnvironmentFeature}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.EnvironmentFeature build() {
            return new com.aliyun.ros.cdk.arms.EnvironmentFeature(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
