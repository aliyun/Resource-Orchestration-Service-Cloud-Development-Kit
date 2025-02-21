package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::Environment</code>, which is used to create an environment.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.030Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.Environment")
public class Environment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.IEnvironment {

    protected Environment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Environment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Environment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Environment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EnvironmentId: The id of the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentName: The name of the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentSubType: The subtype of the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentSubType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvironmentType: The type of the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FeePackage: The payable resource plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFeePackage() {
        return software.amazon.jsii.Kernel.get(this, "attrFeePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrafanaWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrGrafanaWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrManagedType() {
        return software.amazon.jsii.Kernel.get(this, "attrManagedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrometheusInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.EnvironmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.EnvironmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.Environment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.Environment> {
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
        private final com.aliyun.ros.cdk.arms.EnvironmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.EnvironmentProps.Builder();
        }

        /**
         * Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.
         * <p>
         * For a Cloud environment, specify the region ID.
         * <p>
         * @return {@code this}
         * @param bindResourceId Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. This parameter is required.
         */
        public Builder bindResourceId(final java.lang.String bindResourceId) {
            this.props.bindResourceId(bindResourceId);
            return this;
        }
        /**
         * Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.
         * <p>
         * For a Cloud environment, specify the region ID.
         * <p>
         * @return {@code this}
         * @param bindResourceId Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. This parameter is required.
         */
        public Builder bindResourceId(final com.aliyun.ros.cdk.core.IResolvable bindResourceId) {
            this.props.bindResourceId(bindResourceId);
            return this;
        }

        /**
         * Property environmentName: The name of the environment.
         * <p>
         * @return {@code this}
         * @param environmentName Property environmentName: The name of the environment. This parameter is required.
         */
        public Builder environmentName(final java.lang.String environmentName) {
            this.props.environmentName(environmentName);
            return this;
        }
        /**
         * Property environmentName: The name of the environment.
         * <p>
         * @return {@code this}
         * @param environmentName Property environmentName: The name of the environment. This parameter is required.
         */
        public Builder environmentName(final com.aliyun.ros.cdk.core.IResolvable environmentName) {
            this.props.environmentName(environmentName);
            return this;
        }

        /**
         * Property environmentSubType: The subtype of the environment.
         * <p>
         * Valid values:
         * One: CS type environment
         * ACK: CS type environment
         * ECS: ECS type environment
         * Cloud: cloud service
         * <p>
         * @return {@code this}
         * @param environmentSubType Property environmentSubType: The subtype of the environment. This parameter is required.
         */
        public Builder environmentSubType(final java.lang.String environmentSubType) {
            this.props.environmentSubType(environmentSubType);
            return this;
        }
        /**
         * Property environmentSubType: The subtype of the environment.
         * <p>
         * Valid values:
         * One: CS type environment
         * ACK: CS type environment
         * ECS: ECS type environment
         * Cloud: cloud service
         * <p>
         * @return {@code this}
         * @param environmentSubType Property environmentSubType: The subtype of the environment. This parameter is required.
         */
        public Builder environmentSubType(final com.aliyun.ros.cdk.core.IResolvable environmentSubType) {
            this.props.environmentSubType(environmentSubType);
            return this;
        }

        /**
         * Property environmentType: The type of the environment.
         * <p>
         * Valid values:
         * CS: ACK
         * ECS: ECS
         * Cloud: cloud service
         * <p>
         * @return {@code this}
         * @param environmentType Property environmentType: The type of the environment. This parameter is required.
         */
        public Builder environmentType(final java.lang.String environmentType) {
            this.props.environmentType(environmentType);
            return this;
        }
        /**
         * Property environmentType: The type of the environment.
         * <p>
         * Valid values:
         * CS: ACK
         * ECS: ECS
         * Cloud: cloud service
         * <p>
         * @return {@code this}
         * @param environmentType Property environmentType: The type of the environment. This parameter is required.
         */
        public Builder environmentType(final com.aliyun.ros.cdk.core.IResolvable environmentType) {
            this.props.environmentType(environmentType);
            return this;
        }

        /**
         * Property deletePromInstance: Cascade delete Prometheus instance.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param deletePromInstance Property deletePromInstance: Cascade delete Prometheus instance. This parameter is required.
         */
        public Builder deletePromInstance(final java.lang.Boolean deletePromInstance) {
            this.props.deletePromInstance(deletePromInstance);
            return this;
        }
        /**
         * Property deletePromInstance: Cascade delete Prometheus instance.
         * <p>
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param deletePromInstance Property deletePromInstance: Cascade delete Prometheus instance. This parameter is required.
         */
        public Builder deletePromInstance(final com.aliyun.ros.cdk.core.IResolvable deletePromInstance) {
            this.props.deletePromInstance(deletePromInstance);
            return this;
        }

        /**
         * Property feePackage: The payable resource plan.
         * <p>
         * Valid values:
         * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
         * Otherwise, leave the parameter empty.
         * <p>
         * @return {@code this}
         * @param feePackage Property feePackage: The payable resource plan. This parameter is required.
         */
        public Builder feePackage(final java.lang.String feePackage) {
            this.props.feePackage(feePackage);
            return this;
        }
        /**
         * Property feePackage: The payable resource plan.
         * <p>
         * Valid values:
         * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
         * Otherwise, leave the parameter empty.
         * <p>
         * @return {@code this}
         * @param feePackage Property feePackage: The payable resource plan. This parameter is required.
         */
        public Builder feePackage(final com.aliyun.ros.cdk.core.IResolvable feePackage) {
            this.props.feePackage(feePackage);
            return this;
        }

        /**
         * Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
         * <p>
         * When passing space, the default share grafana is used.
         * <p>
         * @return {@code this}
         * @param grafanaWorkspaceId Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. This parameter is required.
         */
        public Builder grafanaWorkspaceId(final java.lang.String grafanaWorkspaceId) {
            this.props.grafanaWorkspaceId(grafanaWorkspaceId);
            return this;
        }
        /**
         * Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
         * <p>
         * When passing space, the default share grafana is used.
         * <p>
         * @return {@code this}
         * @param grafanaWorkspaceId Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. This parameter is required.
         */
        public Builder grafanaWorkspaceId(final com.aliyun.ros.cdk.core.IResolvable grafanaWorkspaceId) {
            this.props.grafanaWorkspaceId(grafanaWorkspaceId);
            return this;
        }

        /**
         * Property managedType: Specifies whether agents or exporters are managed.
         * <p>
         * Valid values:
         * none: No. By default, no managed agents or exporters are provided for ACK clusters.
         * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
         * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
         * <p>
         * @return {@code this}
         * @param managedType Property managedType: Specifies whether agents or exporters are managed. This parameter is required.
         */
        public Builder managedType(final java.lang.String managedType) {
            this.props.managedType(managedType);
            return this;
        }
        /**
         * Property managedType: Specifies whether agents or exporters are managed.
         * <p>
         * Valid values:
         * none: No. By default, no managed agents or exporters are provided for ACK clusters.
         * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
         * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
         * <p>
         * @return {@code this}
         * @param managedType Property managedType: Specifies whether agents or exporters are managed. This parameter is required.
         */
        public Builder managedType(final com.aliyun.ros.cdk.core.IResolvable managedType) {
            this.props.managedType(managedType);
            return this;
        }

        /**
         * Property prometheusInstanceId: The ID of the Prometheus instance.
         * <p>
         * If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
         * <p>
         * @return {@code this}
         * @param prometheusInstanceId Property prometheusInstanceId: The ID of the Prometheus instance. This parameter is required.
         */
        public Builder prometheusInstanceId(final java.lang.String prometheusInstanceId) {
            this.props.prometheusInstanceId(prometheusInstanceId);
            return this;
        }
        /**
         * Property prometheusInstanceId: The ID of the Prometheus instance.
         * <p>
         * If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
         * <p>
         * @return {@code this}
         * @param prometheusInstanceId Property prometheusInstanceId: The ID of the Prometheus instance. This parameter is required.
         */
        public Builder prometheusInstanceId(final com.aliyun.ros.cdk.core.IResolvable prometheusInstanceId) {
            this.props.prometheusInstanceId(prometheusInstanceId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of Environment.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of Environment. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.Environment}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.Environment build() {
            return new com.aliyun.ros.cdk.arms.Environment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
