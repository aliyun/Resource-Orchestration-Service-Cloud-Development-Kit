package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::StateConfiguration</code>, which is used to create a desired-state configuration.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.947Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.StateConfiguration")
public class StateConfiguration extends com.aliyun.ros.cdk.core.Resource {

    protected StateConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StateConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public StateConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.StateConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public StateConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.StateConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute StateConfigurationId: The ID of the desired-state configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStateConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrStateConfigurationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.StateConfigurationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.StateConfigurationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.StateConfigurationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.StateConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.StateConfiguration> {
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
        private final com.aliyun.ros.cdk.oos.StateConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.StateConfigurationProps.Builder();
        }

        /**
         * Property scheduleExpression: The schedule expression.
         * <p>
         * The interval between two schedules must be a minimum of 30 minutes.
         * <p>
         * @return {@code this}
         * @param scheduleExpression Property scheduleExpression: The schedule expression. This parameter is required.
         */
        public Builder scheduleExpression(final java.lang.String scheduleExpression) {
            this.props.scheduleExpression(scheduleExpression);
            return this;
        }
        /**
         * Property scheduleExpression: The schedule expression.
         * <p>
         * The interval between two schedules must be a minimum of 30 minutes.
         * <p>
         * @return {@code this}
         * @param scheduleExpression Property scheduleExpression: The schedule expression. This parameter is required.
         */
        public Builder scheduleExpression(final com.aliyun.ros.cdk.core.IResolvable scheduleExpression) {
            this.props.scheduleExpression(scheduleExpression);
            return this;
        }

        /**
         * Property scheduleType: The schedule type.
         * <p>
         * Set the value to rate.
         * <p>
         * @return {@code this}
         * @param scheduleType Property scheduleType: The schedule type. This parameter is required.
         */
        public Builder scheduleType(final java.lang.String scheduleType) {
            this.props.scheduleType(scheduleType);
            return this;
        }
        /**
         * Property scheduleType: The schedule type.
         * <p>
         * Set the value to rate.
         * <p>
         * @return {@code this}
         * @param scheduleType Property scheduleType: The schedule type. This parameter is required.
         */
        public Builder scheduleType(final com.aliyun.ros.cdk.core.IResolvable scheduleType) {
            this.props.scheduleType(scheduleType);
            return this;
        }

        /**
         * Property targets: The resources to be queried.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The resources to be queried. This parameter is required.
         */
        public Builder targets(final java.lang.String targets) {
            this.props.targets(targets);
            return this;
        }
        /**
         * Property targets: The resources to be queried.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The resources to be queried. This parameter is required.
         */
        public Builder targets(final com.aliyun.ros.cdk.core.IResolvable targets) {
            this.props.targets(targets);
            return this;
        }

        /**
         * Property templateName: The name of the template.
         * <p>
         * The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * Property templateName: The name of the template.
         * <p>
         * The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * Property configureMode: The configuration mode.
         * <p>
         * Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
         * <p>
         * @return {@code this}
         * @param configureMode Property configureMode: The configuration mode. This parameter is required.
         */
        public Builder configureMode(final java.lang.String configureMode) {
            this.props.configureMode(configureMode);
            return this;
        }
        /**
         * Property configureMode: The configuration mode.
         * <p>
         * Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
         * <p>
         * @return {@code this}
         * @param configureMode Property configureMode: The configuration mode. This parameter is required.
         */
        public Builder configureMode(final com.aliyun.ros.cdk.core.IResolvable configureMode) {
            this.props.configureMode(configureMode);
            return this;
        }

        /**
         * Property description: The description of the desired-state configuration.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the desired-state configuration. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the desired-state configuration.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the desired-state configuration. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property parameters: The parameters.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters. This parameter is required.
         */
        public Builder parameters(final java.lang.String parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The parameters.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property templateVersion: The version number of the template.
         * <p>
         * If you do not specify this parameter, the latest version of the template is used.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: The version number of the template. This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * Property templateVersion: The version number of the template.
         * <p>
         * If you do not specify this parameter, the latest version of the template is used.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: The version number of the template. This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.StateConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.StateConfiguration build() {
            return new com.aliyun.ros.cdk.oos.StateConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
